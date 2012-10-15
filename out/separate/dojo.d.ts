/// <reference path="Object.d.ts" />
/// <reference path="dojo._Url.d.ts" />
/// <reference path="dojo.Deferred.d.ts" />
module dojo{
export var _nodeDataCache : Object;
export var _NodeListCtor : any;
export var isBrowser : Object;
export var _name : String;
export var baseUrl : String;
export var isMozilla : any;
export var isMoz : any;
export var isFF : Object;
export var isQuirks : bool;
export var locale : Object;
export var _windowUnloaders : any[];
export var _defaultContext : any[];
export var _initFired : bool;
export var isRhino : Object;
export var _timeouts : any[];
export var isSpidermonkey : Object;
export var _loadedModules : Object;
export var _inFlightCount : number;
export var _hasResource : Object;
export var _loadedUrls : any[];
export var _postLoad : bool;
export var _loaders : any[];
export var _unloaders : any[];
export var _loadNotifying : bool;
export var _global_omit_module_check : bool;
export var requireAfterIf : any;
export var nonDebugProvide : any;
export var _xdDebugScopeChecked : Object;
export var _isXDomain : bool;
export var _xdInFlight : Object;
export var _xdOrderedReqs : any[];
export var _xdDepMap : Object;
export var _xdContents : any[];
export var _xdTimer : number;
export var _xdCharSet : String;
export var _xdStartTime : Object;
export var _headElement : any;
export var _xdReqLoc : any;
export var _xdBundleMap : Object;
export var _xdRealRequireLocalization : any;
export var _topics : Object;
export var subscribe : any;
export var unsubscribe : any;
export var publish : any;
export var _mixin : any;
export var _ieListenersName : String;
export var _Animation : any;
export var boxModel : String;
export var toJsonIndentStr : String;
export var _delegate : Object;
export var _bodyLtr : any;
export var _blockAsync : bool;
export var jaxer : Object;
export var robot : Object;
export var robotx : Object;
export var tests : Object;
export var isIE : any;
export var isOpera : any;
export var uacss : Object;
export var isWebKit : bool;
export var isBB : any;
export var _oldConnect : any;
export var _defaultXhr : any;
export function attr (node:HTMLElement,name:String,value?:String) : any;
export function attr (node:HTMLElement,name:Object,value?:String) : any;
export function attr (node:String,name:String,value?:String) : any;
export function attr (node:String,name:Object,value?:String) : any;
export function hasAttr (node:HTMLElement,name:String) : bool;
export function hasAttr (node:String,name:String) : bool;
export function style (node:HTMLElement,style?:String,value?:String) : any;
export function style (node:HTMLElement,style?:Object,value?:String) : any;
export function style (node:String,style?:String,value?:String) : any;
export function style (node:String,style?:Object,value?:String) : any;
export function _nodeData (node:any,key:any,value:any) : any;
export function _removeNodeData (node:String,key?:String) : any;
export function _removeNodeData (node:HTMLElement,key?:String) : any;
export function _gcNodeData () : any;
export function blendColors (start:any,end:any,weight:number,obj?:any) : any;
export function colorFromRgb (color:String,obj?:any) : any;
export function colorFromHex (color:String,obj?:any) : any;
export function colorFromArray (a:any[],obj?:any) : any;
export function colorFromString (str:String,obj?:any) : any;
export function when (promiseOrValue:any,callback?:Function,errback?:Function,progressHandler?:Function) : any;
export function _xhrObj (args:any) : any;
export function _loadUri (uri:String,cb:Function,currentIsXDomain:bool,module:String) : any;
export function _isDocumentOk (http:any) : bool;
export function _getText (uri:dojo._Url,fail_ok:bool) : any;
export function windowUnloaded () : any;
export function addOnWindowUnload (obj?:Object,functionName?:String) : any;
export function addOnWindowUnload (obj?:Object,functionName?:Function) : any;
export function pushContext (g?:Object,d?:HTMLDocument) : any[];
export function pushContext (g?:String,d?:HTMLDocument) : any[];
export function popContext () : any;
export function _inContext (g:any,d:any,f:any) : any;
export function _loadInit (e:any) : any;
export function byId (id:String,doc:any) : any;
export function byId (id:HTMLElement,doc:any) : any;
export function _isLocalUrl (uri:String) : any;
export function exit (exitcode:any) : any;
export function body () : HTMLElement;
export function _spidermonkeyCurrentFile (depth:any) : any;
export function _moduleHasPrefix (module:String) : bool;
export function _getModulePrefix (module:String) : String;
export function _loadPath (relpath:String,module?:String,cb?:Function) : bool;
export function _loadUriAndCheck (uri:String,moduleName:String,cb?:Function) : bool;
export function loaded () : any;
export function unloaded () : any;
export function _onto (arr:any,obj:any,fn:any) : any;
export function ready () : any;
export function addOnLoad (obj:Object,functionName?:String) : any;
export function addOnLoad (obj:Object,functionName?:Function) : any;
export function _modulesLoaded () : any;
export function _callLoaded () : any;
export function _getModuleSymbols (modulename:String) : any[];
export function loadInit (init:Function) : any;
export function _loadModule () : any;
export function require (moduleName:String,omitModuleCheck?:bool) : any;
export function provide (resourceName:String) : Object;
export function platformRequire (modMap:Object) : any;
export function requireIf (condition:bool,resourceName:String) : any;
export function registerModulePath (module:String,prefix:String) : any;
export function requireLocalization (moduleName:String,bundleName:String,locale?:String,availableFlatLocales?:String) : any;
export function moduleUrl (module:String,url:any) : any;
export function moduleUrl (module:String,url:String) : any;
export function _xdDebugFileLoaded (resourceName:any) : any;
export function _xdReset () : any;
export function _xdClearInterval () : any;
export function _xdCreateResource (contents:String,resourceName:String,resourcePath:String) : String;
export function _xdExtractLoadInits (fileContents:String) : any;
export function _xdIsXDomainPath (relpath:String) : any;
export function _xdResourceLoaded (res:Object) : any;
export function _xdLoadFlattenedBundle (moduleName:String,bundleName:String,locale?:String,bundleData?:Object) : any;
export function _xdInitExtraLocales () : any;
export function xdRequireLocalization (m:any,b:any,locale?:String,fLocales?:any,moduleName?:String,bundleName?:String,availableFlatLocales?:String) : any;
export function _xdUnpackDependency (dep:any[]) : Object;
export function _xdWalkReqs () : any;
export function _xdEvalReqs (reqChain:any[]) : any;
export function _xdWatchInFlight () : any;
export function _xdNotifyLoaded () : any;
export function indexOf (array:any[],value:Object,fromIndex?:number,findLast?:bool) : number;
export function lastIndexOf (array:any[],value:Object,fromIndex?:number) : number;
export function forEach (arr:any[],callback:Function,thisObject?:Object) : any;
export function forEach (arr:any[],callback:String,thisObject?:Object) : any;
export function forEach (arr:String,callback:Function,thisObject?:Object) : any;
export function forEach (arr:String,callback:String,thisObject?:Object) : any;
export function every (arr:any[],callback:Function,thisObject?:Object) : bool;
export function every (arr:any[],callback:String,thisObject?:Object) : bool;
export function every (arr:String,callback:Function,thisObject?:Object) : bool;
export function every (arr:String,callback:String,thisObject?:Object) : bool;
export function some (arr:any[],callback:Function,thisObject?:Object) : bool;
export function some (arr:any[],callback:String,thisObject?:Object) : bool;
export function some (arr:String,callback:Function,thisObject?:Object) : bool;
export function some (arr:String,callback:String,thisObject?:Object) : bool;
export function map (arr:any[],callback:Function,thisObject?:Function) : any[];
export function map (arr:any[],callback:String,thisObject?:Function) : any[];
export function map (arr:String,callback:Function,thisObject?:Function) : any[];
export function map (arr:String,callback:String,thisObject?:Function) : any[];
export function filter (arr:any[],callback:Function,thisObject?:Object) : any[];
export function filter (arr:any[],callback:String,thisObject?:Object) : any[];
export function connect (obj:Object,event:String,context:Object,method:String,dontFix?:bool) : any;
export function connect (obj:Object,event:String,context:Object,method:Function,dontFix?:bool) : any;
export function connect (obj:Object,event:String,context:any,method:String,dontFix?:bool) : any;
export function connect (obj:Object,event:String,context:any,method:Function,dontFix?:bool) : any;
export function connect (obj:any,event:String,context:Object,method:String,dontFix?:bool) : any;
export function connect (obj:any,event:String,context:Object,method:Function,dontFix?:bool) : any;
export function connect (obj:any,event:String,context:any,method:String,dontFix?:bool) : any;
export function connect (obj:any,event:String,context:any,method:Function,dontFix?:bool) : any;
export function _connect (obj:any,event:any,context:any,method:any,dontFix:any) : any;
export function disconnect (handle:any) : any;
export function _disconnect (obj:any,event:any,handle:any,listener:any) : any;
export function connectPublisher (topic:String,obj:Object,event:String) : any;
export function connectPublisher (topic:String,obj:any,event:String) : any;
export function declare (className?:String,superclass?:Function,props?:Object) : Function;
export function declare (className?:String,superclass?:Function[],props?:Object) : Function;
export function safeMixin (target:Object,source:Object) : any;
export function fixEvent (evt:any,sender:HTMLElement) : any;
export function stopEvent (evt:any) : any;
export function isCopyKey (e:any) : bool;
export function _ieDispatcher (args:any,sender:any) : any;
export function _getIeDispatcher () : Function;
export function _fade (args:Object) : any;
export function fadeIn (args:any) : any;
export function fadeOut (args:any) : any;
export function _defaultEasing (n?:number) : any;
export function animateProperty (args:any) : any;
export function anim (node:HTMLElement,properties:Object,duration?:number,easing?:Function,onEnd?:Function,delay?:number) : any;
export function anim (node:String,properties:Object,duration?:number,easing?:Function,onEnd?:Function,delay?:number) : any;
export function _destroyElement (node:any) : any;
export function destroy (node:String) : any;
export function destroy (node:HTMLElement) : any;
export function isDescendant (node:HTMLElement,ancestor:HTMLElement) : bool;
export function isDescendant (node:HTMLElement,ancestor:String) : bool;
export function isDescendant (node:String,ancestor:HTMLElement) : bool;
export function isDescendant (node:String,ancestor:String) : bool;
export function setSelectable (node:HTMLElement,selectable:bool) : any;
export function setSelectable (node:String,selectable:bool) : any;
export function place (node:String,refNode:String,position?:String) : HTMLElement;
export function place (node:String,refNode:String,position?:number) : HTMLElement;
export function place (node:String,refNode:HTMLElement,position?:String) : HTMLElement;
export function place (node:String,refNode:HTMLElement,position?:number) : HTMLElement;
export function place (node:HTMLElement,refNode:String,position?:String) : HTMLElement;
export function place (node:HTMLElement,refNode:String,position?:number) : HTMLElement;
export function place (node:HTMLElement,refNode:HTMLElement,position?:String) : HTMLElement;
export function place (node:HTMLElement,refNode:HTMLElement,position?:number) : HTMLElement;
export function getComputedStyle (node:HTMLElement) : any;
export function _toPixelValue (element:any,value:any,avalue:any) : any;
export function _getOpacity (node:HTMLElement) : number;
export function _setOpacity (node:HTMLElement,opacity:number) : number;
export function _getPadExtents (n:HTMLElement,computedStyle:Object) : any;
export function _getBorderExtents (n:HTMLElement,computedStyle:Object) : any;
export function _getPadBorderExtents (n:HTMLElement,computedStyle:Object) : any;
export function _getMarginExtents (n:any,computedStyle:any) : any;
export function _getMarginBox (node:HTMLElement,computedStyle:Object) : any;
export function _getMarginSize (node:HTMLElement,computedStyle:Object) : any;
export function _getContentBox (node:any,computedStyle:any) : any;
export function _getBorderBox (node:any,computedStyle:any) : any;
export function _setBox (node:HTMLElement,l?:number,t?:number,w?:number,h?:number,u?:String) : any;
export function _isButtonTag (node:HTMLElement) : any;
export function _usesBorderBox (node:HTMLElement) : bool;
export function _setContentSize (node:HTMLElement,widthPx:number,heightPx:number,computedStyle:Object) : any;
export function _setMarginBox (node:HTMLElement,leftPx?:number,topPx?:number,widthPx?:number,heightPx?:number,computedStyle?:Object) : any;
export function marginBox (node:HTMLElement,box?:Object) : Object;
export function marginBox (node:String,box?:Object) : Object;
export function contentBox (node:HTMLElement,box?:Object) : Object;
export function contentBox (node:String,box?:Object) : Object;
export function _docScroll () : any;
export function _isBodyLtr () : any;
export function _getIeDocumentElementOffset () : any;
export function _fixIeBiDiScrollLeft (scrollLeft:number) : number;
export function _abs () : any;
export function position (node:HTMLElement,includeScroll?:bool) : Object;
export function coords (node:HTMLElement,includeScroll?:bool) : any;
export function coords (node:String,includeScroll?:bool) : any;
export function removeAttr (node:HTMLElement,name:String) : any;
export function removeAttr (node:String,name:String) : any;
export function getNodeProp (node:HTMLElement,name:String) : any;
export function getNodeProp (node:String,name:String) : any;
export function create (tag:String,attrs?:Object,refNode?:String,pos?:String) : HTMLElement;
export function create (tag:String,attrs?:Object,refNode?:HTMLElement,pos?:String) : HTMLElement;
export function create (tag:HTMLElement,attrs?:Object,refNode?:String,pos?:String) : HTMLElement;
export function create (tag:HTMLElement,attrs?:Object,refNode?:HTMLElement,pos?:String) : HTMLElement;
export function empty (node:HTMLElement) : any;
export function empty (node:String) : any;
export function _toDom (frag:String,doc?:HTMLDocument) : HTMLElement;
export function hasClass (node:HTMLElement,classStr:String) : bool;
export function hasClass (node:String,classStr:String) : bool;
export function addClass (node:HTMLElement,classStr:String) : any;
export function addClass (node:HTMLElement,classStr:any[]) : any;
export function addClass (node:String,classStr:String) : any;
export function addClass (node:String,classStr:any[]) : any;
export function removeClass (node:HTMLElement,classStr?:String) : any;
export function removeClass (node:HTMLElement,classStr?:any[]) : any;
export function removeClass (node:String,classStr?:String) : any;
export function removeClass (node:String,classStr?:any[]) : any;
export function replaceClass (node:HTMLElement,addClassStr:String,removeClassStr?:String) : any;
export function replaceClass (node:HTMLElement,addClassStr:String,removeClassStr?:any[]) : any;
export function replaceClass (node:HTMLElement,addClassStr:any[],removeClassStr?:String) : any;
export function replaceClass (node:HTMLElement,addClassStr:any[],removeClassStr?:any[]) : any;
export function replaceClass (node:String,addClassStr:String,removeClassStr?:String) : any;
export function replaceClass (node:String,addClassStr:String,removeClassStr?:any[]) : any;
export function replaceClass (node:String,addClassStr:any[],removeClassStr?:String) : any;
export function replaceClass (node:String,addClassStr:any[],removeClassStr?:any[]) : any;
export function toggleClass (node:HTMLElement,classStr:String,condition?:bool) : any;
export function toggleClass (node:HTMLElement,classStr:any[],condition?:bool) : any;
export function toggleClass (node:String,classStr:String,condition?:bool) : any;
export function toggleClass (node:String,classStr:any[],condition?:bool) : any;
export function fromJson (json:String) : Object;
export function _escapeString (str:String) : any;
export function toJson (it:Object,prettyPrint?:bool,_indentStr?:String) : any;
export function isString (it:any) : bool;
export function isArray (it:any) : bool;
export function isFunction (it:any) : any;
export function isObject (it:any) : any;
export function isArrayLike (it:any) : bool;
export function isAlien (it:any) : bool;
export function extend (constructor:Object,props:Object) : Object;
export function extend (constructor:Object,...props:Object[]) : Object;
export function _hitchArgs (scope:any,method:any) : any;
export function _hitchArgs (scope:any,...method:any[]) : any;
export function hitch (scope:Object,method:Function) : Function;
export function hitch (scope:Object,method:String) : Function;
export function delegate (obj:any,props:any) : any;
export function _toArray (obj:Object,offset?:number,startWith?:any[]) : any;
export function partial (method:Function) : Function;
export function partial (method:String) : Function;
export function clone (o:any) : any;
export function trim (str:String) : String;
export function replace (tmpl:String,map:Object,pattern?:RegExp) : String;
export function replace (tmpl:String,map:Function,pattern?:RegExp) : String;
export function setContext (globalObject:Object,globalDocument:HTMLDocument) : any;
export function withGlobal (globalObject:Object,callback:Function,thisObject?:Object,cbArguments?:any[]) : any;
export function withDoc (documentObject:HTMLDocument,callback:Function,thisObject?:Object,cbArguments?:any[]) : any;
export function fieldToObject (inputNode:HTMLElement) : Object;
export function fieldToObject (inputNode:String) : Object;
export function formToObject (formNode:HTMLElement) : Object;
export function formToObject (formNode:String) : Object;
export function objectToQuery (map:Object) : String;
export function formToQuery (formNode:HTMLElement) : String;
export function formToQuery (formNode:String) : String;
export function formToJson (formNode:HTMLElement,prettyPrint?:bool) : String;
export function formToJson (formNode:String,prettyPrint?:bool) : String;
export function queryToObject (str:String) : Object;
export function _ioSetArgs (args:any,canceller:Function,okHandler:Function,errHandler:Function) : any;
export function _ioCancelAll () : any;
export function _ioNotifyStart (dfd:dojo.Deferred) : any;
export function _ioWatch (dfd:dojo.Deferred,validCheck:Function,ioCheck:Function,resHandle:Function) : any;
export function _ioAddQueryToUrl (ioArgs:any) : any;
export function xhr (method:String,args:any,hasBody?:bool) : any;
export function xhrGet (args:any) : any;
export function rawXhrPost () : any;
export function xhrPost (args:any) : any;
export function rawXhrPut () : any;
export function xhrPut (args:any) : any;
export function xhrDelete (args:any) : any;
export function deprecated (behaviour:String,extra?:String,removal?:String) : any;
export function experimental (moduleName:String,extra?:String) : any;
export function __backArgs (kwArgs:any) : any;
export function hash (hash?:String,replace?:bool) : String;
}
