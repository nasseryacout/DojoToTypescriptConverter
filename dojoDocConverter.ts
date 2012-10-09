/// <reference path='node.d.ts' />

var fs = require("fs");

class SimpleType {
    public name: string;
    public type: string;
    public documentation: TSDocumentation;
    
    constructor (name: string, type?: string, documentation?: TSDocumentation) {
        this.name = name;
        this.type = type;
        this.documentation = documentation;
    };
}

class TSDocumentation {
    public summary: string;

    constructor (summary: string) {
        this.summary = summary;
    }

    toString() : string {
        var result = "/**\n",
            split = this.summary.split("\n");
        for (var i = 0; i < split.length; i += 1) {
            result += " * " + split[i].replace(/\//g, "\\/") + "\n";
        }
        result += " */\n";
        return result;
    };
}

class TSProperty extends SimpleType {

    public isModuleProp:bool;

    constructor (name: string, type?: string, documentation?: TSDocumentation, isModuleProp?: bool) {
        super(name, type, documentation);
        this.isModuleProp = isModuleProp;
    };

    toString() : string {
        var b = "", docs = this.documentation;
        if (docs) {
            b += docs.toString();
        }
        if (this.isModuleProp) {
            b += "export var ";
        }
        b += this.name;
        b += " : " + this.type;
        b += ";\n";
        return b;
    };
}

class TSFunction extends SimpleType {
    public isOverload: bool;
    public isModuleFn: bool;
    public returnType: string;
    public args: string[];

    constructor (name: string, args: string[], returnType?: string, documentation?: TSDocumentation, isModuleFn?: bool, isOverload?: bool) {
        super(name, returnType, documentation);

        this.isOverload = isOverload;
        this.isModuleFn = isModuleFn;
        this.args = args;
        this.returnType = returnType;
    };

    toString() : string {
        var b = "", docs = this.documentation;
        if (docs) {
            b += docs.toString();
        }
        if (this.isModuleFn) {
            b += "export function ";
        }
        b += this.name;
        b += " (";
        b += this.args;
        b += ")";
        b += " : " + this.returnType;
        if (this.isOverload) {
            b += "{ }";
        }
        b += ";\n";
        return b;
    }
}

class TSModule {
    public name: string;
    public functions: TSFunction[];
    public properties: TSProperty[];
    public classes: TSClass[];
    constructor (name: string, functions?: TSFunction[] = [], properties?: TSProperty[] = [], classes?: TSClass[] = []) {
        this.name = name;
        this.functions = functions;
        this.properties = properties;
        this.classes = classes;
    }

    addFunction (f: TSFunction) : void {
        this.functions.push(f);
    };

    addFunctions(fns: TSFunction[]) : void {
        var i = 0;
        for (i = 0; i < fns.length; i += 1) {
            this.addFunction(fns[i]);
        }
    };

    addProperty (f:TSProperty) : void {
        this.properties.push(f);
    };

    addProperties (props:TSProperty[]) : void {
        var i = 0;
        for (i = 0; i < props.length; i += 1) {
            this.addProperty(props[i]);
        }
    };

    addClass (f:TSClass) : void {
        this.classes.push(f);
    };

    addClasses (classes:TSClass[]) : void {
        var i = 0;
        for (i = 0; i < classes.length; i += 1) {
            this.addClass(classes[i]);
        }
    };

    toString () : string {
        var b = "",
            i;
        b += "module ";
        b += this.name;
        b += "{\n";
        for (i = 0; i < this.properties.length; i += 1) {
            b += this.properties[i].toString();
        }
        for (i = 0; i < this.functions.length; i += 1) {
            b += this.functions[i].toString();
        }
        for (i = 0; i < this.classes.length; i += 1) {
            b += this.classes[i].toString();
        }
        b += "}\n";
        return b;
    };
}

class TSClass {
    public name: string;
    public functions: TSFunction[];
    public properties: TSProperty[];
    public mixins: TSClass[];

    constructor (name: string, fullname?: string, functions?: TSFunction[] = [], properties?: TSProperty[] = [], mixins?: TSClass[] = []) {
        this.name = name;
        this.functions = functions;
        this.properties = properties;
        this.mixins = mixins;
    }

    addFunction (f: TSFunction) : void {
        this.functions.push(f);
    };

    addFunctions(fns: TSFunction[]) : void {
        var i = 0;
        for (i = 0; i < fns.length; i += 1) {
            this.addFunction(fns[i]);
        }
    };

    addProperty (f:TSProperty) : void {
        this.properties.push(f);
    };

    addProperties (props:TSProperty[]) : void {
        var i = 0;
        for (i = 0; i < props.length; i += 1) {
            this.addProperty(props[i]);
        }
    };

    addMixin (f:TSClass) : void {
        this.mixins.push(f);
    };

    /**
     * Calculates the members that belong to this class/superclass
     */
    calculateMemberList (memberMap: Object) : void {
        var memberName, i, mi;
        for (i = 0; i < this.properties.length; i += 1) {
            memberName = this.properties[i].name;
            if (!memberMap[memberName]) {
                memberMap[memberName] = true;
            }
        }
        for (i = 0; i < this.functions.length; i += 1) {
            memberName = this.functions[i].name;
            if (!memberMap[memberName]) {
                memberMap[memberName] = true;
            }
        }

        // Mixin the other ones
        for (i = 0; i < this.mixins.length; i += 1) {
            mi = this.mixins[i];
            mi.calculateMemberList(memberMap);
        }
    };

    toString(propertyAndFunctionsOnly?: bool = false, memberFilters?: Object = {}) : string {
        var b = "",
            i,
            j,
            memberName,
            mi;

        if (!propertyAndFunctionsOnly) {
            b += "export class ";
            b += this.name;

            // Support only one superclass
            /*if (mixins && mixins.length > 0) {
                b += " extends " + mixins[0].fullName + " ";
                mixins[0].calculateMemberList(memberFilters);
            }*/

            b += "{\n";
        }

        // Mixin the other ones
        for (i = 0; i < this.mixins.length; i += 1) {
            mi = this.mixins[i];
            b += mi.toString(true, memberFilters);
        }

        for (i = 0; i < this.properties.length; i += 1) {
            memberName = this.properties[i].name;
            if (!memberFilters[memberName]) {
                memberFilters[memberName] = true;
                b += this.properties[i].toString();
            }
        }
        for (i = 0; i < this.functions.length; i += 1) {
            memberName = this.functions[i].name;
            if (!memberFilters[memberName]) {
                memberFilters[memberName] = true;
                b += this.functions[i].toString();
            }
        }

        // HACK: for mixins
        /*for (i = 0; i < mixins.length; i += 1) {
            miProps = mixins[i].properties;
            miFuncs = mixins[i].functions;

            if (miProps) {
                for (j = 0; j < miProps.length; j += 1) {
                    if (!processedProps[miProps[j].name]) {
                        b += miProps[j].toString();
                    }
                }
            }
            if (miFuncs) {
                for (j = 0; j < miFuncs.length; j += 1) {
                    if (!processedFunctions[miFuncs[j].name]) {
                        b += miFuncs[j].toString();
                    }
                }
            }
            //b += mixins[i].toString(true);
        }*/
        if (!propertyAndFunctionsOnly) {
            b += "}\n";
        }
        return b;
    };
}

class Converter {
    apiDoc = {};
    modules = {};
    classes = {};
    
    /**
     * Gets a parameter name from a parameter definition
     */
    getParameterName(parameter: { name: string; usage: string; any; }, isOptional: bool) : string {
        var name = parameter.name,
			usage = parameter.usage;
        if (isOptional) {
            name += "?";
        }
        return name;
    };

    /**
     * Gets the typescript type for the api doc type
     */
    getType (defType: string) : string {
        var type = "any", defTypeToLower;
        if (defType != null && defType.indexOf("|") < 0 && defType.indexOf("__") < 0) {
            defType = defType.replace(/\./g, "").replace(/\:/g, "");
            if (this.apiDoc[defType]) {
                type = defType;
            }
            defTypeToLower = defType.toLowerCase();
            switch (defTypeToLower) {
                case 'array':
                case 'handle[]':
                    type = 'any[]';
                    break;
                case 'arguments':
                    type = 'IArguments';
                    break;
                case 'domnode[]':
                    type = 'HTMLElement[]';
                    break;
                case 'domevent':
                    type = 'Event';
                    break;
                case 'dom':
                case 'node':
                case 'domnode':
                    type = 'HTMLElement';
                    break;
                case 'function[]':
                    type = "{(any) : any;}[]";
                    break;
                case 'function':
                    type = "(any) => any";
                    break;
                case 'regex':
                    type = 'RegExp';
                    break;
                case 'documentelement':
                case 'documentnode':
                case 'mdocumentelement':
                    type = 'HTMLDocument';
                    break;
                case 'number':
                case 'decimal':
                case 'integer':
                case 'int':
                case 'float':
                case 'read-only-number':
                case 'integer/float':
                case '-1':
                    type = 'number';
                    break;
                case 'uri':
                case 'dojo.uri.uri':
                    type = 'dojo._Url';
                    break;
                case 'string':
                case 'string.':
                case 'class':
                case 'strin':
                case 'attribute':
                case 'html':
                case 'channel/resource':
                    type = 'String';
                    break;
                case 'deferred':
                case '\'deferred\'':
                    type = 'dojo.Deferred';
                    break;
                case 'bool':
                case 'boolean':
                case 'boolean.':
                case 'booleam':
                    type = 'bool';
                    break;
                case 'widget':
                    type = 'dijit._Widget';
                    break;
                case 'widget(dijit.menu)':
                    type = 'dijit.Menu';
                    break;
                case 'item[][]':
                    //type = 'dojo.data.Item[][]';
                    type = "any";
                    break;
                case 'item[]':
                    //type = 'dojo.data.Item[]';
                    type = "any";
                    break;
                case 'item':
                    //type = 'dojo.data.Item';
                    type = "any";
                    break;
                case 'mouse':
                    type = 'MouseEvent';
                    break;
                case 'key':
                    type = 'KeyboardEvent';
                    break;
                case '_tree.node':
                case 'treenode':
                    type = 'dijit._TreeNode';
                    break;
                case 'time':
                    type = 'Date';
                    break;
                case 'nodelist':
                    type = 'dojo.NodeList';
                    break;
                case 'array[dojox.grid.__celldef[]]':
                    type = 'dojox.grid.__CellDef[]';
                    break;
                case 'array[widgets]':
                    type = "dijit._Widget[]";
                    break;
            }
        }
        return type;
    };

    isModule(definition?: any) : bool {
        return definition && !definition.type && !this.isClass(definition);
    };

    isClass(definition?: any) : bool {
        return !!(definition && definition.classlike);
    };

    isSubClass(definition: any) : bool {
        var i, location = definition.location, namespaceClassParts = location.split("."), soFar = "";
        for (i = 0; i < namespaceClassParts.length - 1; i += 1) {
            soFar += (i > 0 ? "." : "") + namespaceClassParts[i];
            if (this.isClass(this.apiDoc[soFar])) {
                return true;
            }
        }
        return false;
    };

    getModule (name: string) : TSModule {
        var m = this.modules[name] = this.modules[name] || new TSModule(name);
        return m;
    };


    /**
     * Expands the parameter definition into unique sets of parameters
     * cause some parameters can be multiple types
     */
    getParameterTypeSets (parameterDefinitions:any, i: number = 0, forceOptional?: bool) : string[][] {
        var result = [], paramDef, paramTypes, paramType, subparameterSets = [], j, k, paramName, newParam, typeMap = {}, oneOrMore;
        i = i || 0;
        paramDef = parameterDefinitions[i];
        forceOptional = forceOptional || paramDef.usage === "optional";

        paramName = this.getParameterName(paramDef, forceOptional);
        paramTypes = paramDef.type ? paramDef.type.replace("(", "").replace(")", "").split("|") : ["any"];

        // If there are more parameters after this one
        if (i < parameterDefinitions.length - 1) {
            subparameterSets = this.getParameterTypeSets(parameterDefinitions, i + 1, forceOptional);
        }

        for (j = 0; j < paramTypes.length; j += 1) {
            paramType = paramTypes[j];
            if (paramType) {
                paramType = this.getType(paramType);
                // This prevents multiple types that resolve to the same type so any,any
                if (!typeMap[paramType]) {
                    typeMap[paramType] = true;
                    newParam = [paramName + ": " + paramType];

                    if (subparameterSets && subparameterSets.length > 0) {
                        for (k = 0; k < subparameterSets.length; k += 1) {
                            result.push(newParam.concat(subparameterSets[k]));
                        }
                    } else {
                        result.push(newParam);
                    }
                }
            }
        }

        // Add in a whole bunch of optional parameters to handle it,
        // since typescript doesn't support this ability
        if (paramDef.usage === "one-or-more") {
            oneOrMore = [];
            for (j = 0; j < 10; j += 1) {
                oneOrMore.push(["oneOrMore" + j + "?: " + paramType]);
            }
            result.push(oneOrMore);
        }

        return result;
    };

    processMixins () : void {
        var i, j, cls, definition, mis, mi;
        for (i in this.classes) {
            cls = this.classes[i];
            definition = this.apiDoc[i];
            if (definition.mixins) {
                mis = definition.mixins && definition.mixins["instance"];
                for (j = 0; j < mis.length; j += 1) {
                    mi = this.classes[mis[j].location];
                    if (mi) {
                        cls.addMixin(mi);
                    }
                }
            }
        }
    };

    convertParameters(parameterDefinitions: any) : string[][] {
        var result = [];

        if (parameterDefinitions) {
            result = this.getParameterTypeSets(parameterDefinitions);
        } else {
            result.push([]);
        }

        return result;
    };

    convertDocumentation (definition: any) : TSDocumentation {
        var summary = definition.summary;
        if (summary) {
            return new TSDocumentation(summary);
        }
    };

    convertProperties (propertyDefs:any, isModule?:bool) : TSProperty[] {
        var i, propDef, props = [], name;
        if (propertyDefs) {
            for (i = 0; i < propertyDefs.length; i += 1) {
                propDef = propertyDefs[i];
                name = propDef.name;
                // Some of the docs have properties with dashes in them, filter those out.  
                if (name && name !== 'constructor' && name !== 'class' && name.indexOf && name.indexOf("-") < 0) {     
                    props.push(new TSProperty(name, this.getType(propDef.type), this.convertDocumentation(propDef), isModule));
                }
            }
        }
        return props;
    };

    convertFunctions (functionDefs: any, isModule?: bool) : TSFunction[] {
        var i, fnDef, fns = [], parameterSets, j, returnType: string, returnTypes: any, name;
        if (functionDefs) {
            for (i = 0; i < functionDefs.length; i += 1) {
                fnDef = functionDefs[i];
                name = fnDef.name;
                if (name && name !== 'constructor' && name.indexOf && name.indexOf("-") < 0) {
                    // Functions in dojo can have more than one return type
                    // so if there is more than one, just use "any" as the ts return type
                    // we can't use void, cause sometimes they don't list the return types of the functions correctly
                    returnTypes = fnDef["return-types"];
                    returnType = "any";
                    if (returnTypes && returnTypes.length === 1) {
                        returnType = this.getType(returnTypes[0].type);
                    }

                    parameterSets = this.convertParameters(fnDef.parameters);

                    // A single function can have multiple different ways to call it, 
                    // we create an overloaded function for every way
                    for (j = 0; j < parameterSets.length; j += 1) {
                        fns.push(new TSFunction(<string>fnDef.name, parameterSets[j], returnType, this.convertDocumentation(fnDef), isModule));
                    }

                    // Add an "overload" definition
                    //fns.push(new Function(fnDef.name, ["a?:any"], "any", this.convertDocumentation(fnDef), isModule, true));
                }
            }
        }
        return fns;
    };

    convertModule(name: string, definition: any) {
        var m : TSModule;
        if (definition) {
            m = this.getModule(name);
            m.addFunctions(this.convertFunctions(definition.methods, true));
            m.addProperties(this.convertProperties(definition.properties, true));
        }

        return m;
    };

    convertModules (roots: string[]) {
        var i, definition;
        for (i in this.apiDoc) {
            definition = this.apiDoc[i];
            if (this.isModule(definition) && !this.isSubClass(definition)) {
                this.convertModule(i, definition);
            }
        }
    };

    convertClass (name: string, fullName: string, definition: any) {
        return new TSClass(name, fullName, this.convertFunctions(definition.methods, false), this.convertProperties(definition.properties, false));
    };

    convertClasses () {
        var definition, nameParts, result = "", m, cls;
        for (var i in this.apiDoc) {
            definition = this.apiDoc[i];
            if (this.isClass(definition) && i.indexOf("-") < 0) {
                nameParts = i.split(".");
                if (nameParts.length > 1) {
                    m = nameParts.splice(0, nameParts.length - 1).join(".");

                    // Sometimes the inner classes get into the docs, we want to filter those out since typescript doesnt support em
                    if (!this.isSubClass(definition)) {
                        cls = this.convertClass(nameParts[nameParts.length - 1], i, definition);
                        this.classes[i] = cls;
                        this.getModule(m).addClass(cls);
                    }
                }
            }
        }
        return result;
    };

    /**
     * Converts the API DOC in json format to TypeScript
     */
    convert (convertApiDoc:Object, roots:string[]) {
        this.apiDoc = convertApiDoc;

        var i, moduleName, module, b = "";

        this.convertClasses();

        // Create all the root modules
    /*    for (i = 0; i < roots.length; i += 1) {
            moduleName = roots[i];
            modules[moduleName] = this.convertModule(moduleName, apiDoc[moduleName]);
        }*/
        this.convertModules(roots);

        this.processMixins();

        for (i in this.modules) {
            // Can't have module names with dashes or Numbers, or has the word keyword in the namespace
            if (i.indexOf("-") < 0 &&
                !i.match(/\.\d+\.?/) &&
                i.indexOf("keyword") < 0 &&
                i.indexOf("window.") < 0 &&
                i.indexOf("document.") < 0 &&
                i.indexOf("_bool") < 0 &&
                i !== 'Math' &&
                i !== 'dojox.highlight.languages.pygments._html.tags' &&
                i !== 'dojox.dtl.contrib.data._BoundItem.get') {
                b += this.modules[i].toString();
            }
        }
        return b;
    };
}

var converter = new Converter();
fs.writeFileSync(process.argv[3], converter.convert(JSON.parse(fs.readFileSync(process.argv[2])), ["dojo", "dijit", "dojox"]));