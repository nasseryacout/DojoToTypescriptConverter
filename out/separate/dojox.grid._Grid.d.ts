/// <reference path="Object.d.ts" />
/// <reference path="dijit._Widget.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dijit._Templated.d.ts" />
/// <reference path="Object.d.ts" />
/// <reference path="dojox.grid._Events.d.ts" />
module dojox.grid{
export class _Grid extends dijit._Widget {
templateString : String;
templatePath : String;
widgetsInTemplate : bool;
_skipNodeCache : bool;
_earlyTemplatedStartup : bool;
_attachPoints : any;
_attachEvents : any[];
declaredClass : any;
_startupWidgets : Object;
_supportingWidgets : Object;
_templateCache : Object;
_stringRepl (tmpl:any) : any;
_fillContent (source:HTMLElement) : any;
_attachTemplateNodes (rootNode:HTMLElement,getAttrFunc?:Function) : any;
getCachedTemplate (templatePath:String,templateString?:String,alwaysUseString?:any) : any;
cellOverClass : String;
onKeyEvent (e:any) : any;
onContentEvent (e:any) : any;
onHeaderEvent (e:any) : any;
onStyleRow (inRow:Object) : any;
onMouseOverRow (e:any) : any;
onMouseOutRow (e:any) : any;
onMouseDownRow (e:any) : any;
onCellMouseOver (e:any) : any;
onCellMouseOut (e:any) : any;
onCellMouseDown (e:any) : any;
onCellClick (e:any) : any;
onCellDblClick (e:any) : any;
onCellContextMenu (e:any) : any;
onCellFocus (inCell:Object,inRowIndex:number) : any;
onRowClick (e:any) : any;
onRowDblClick (e:any) : any;
onRowMouseOver (e:any) : any;
onRowMouseOut (e:any) : any;
onRowMouseDown (e:any) : any;
onRowContextMenu (e:any) : any;
onHeaderMouseOver (e:any) : any;
onHeaderMouseOut (e:any) : any;
onHeaderCellMouseOver (e:any) : any;
onHeaderCellMouseOut (e:any) : any;
onHeaderCellMouseDown (e:any) : any;
onHeaderClick (e:any) : any;
onHeaderCellClick (e:any) : any;
onHeaderDblClick (e:any) : any;
onHeaderCellDblClick (e:any) : any;
onHeaderCellContextMenu (e:any) : any;
onHeaderContextMenu (e:any) : any;
onStartEdit (inCell:Object,inRowIndex:number) : any;
onApplyCellEdit (inValue:String,inRowIndex:number,inFieldIndex:number) : any;
onCancelEdit (inRowIndex:number) : any;
onApplyEdit (inRowIndex:number) : any;
onCanSelect (inRowIndex:number) : any;
onCanDeselect (inRowIndex:number) : any;
onSelected (inRowIndex:number) : any;
onDeselected (inRowIndex:number) : any;
onSelectionChanged () : any;
classTag : String;
rowCount : number;
keepRows : number;
rowsPerPage : number;
autoWidth : bool;
initialWidth : String;
autoHeight : any;
rowHeight : number;
autoRender : bool;
defaultHeight : String;
height : String;
structure : any;
elasticView : number;
singleClickEdit : bool;
selectionMode : String;
rowSelector : any;
columnReordering : bool;
headerMenu : any;
placeholderLabel : String;
selectable : bool;
_click : any[];
loadingMessage : String;
errorMessage : String;
noDataMessage : String;
escapeHTMLInData : bool;
formatterScope : Object;
editable : bool;
sortInfo : number;
themeable : Object;
_placeholders : Object;
_layoutClass : Object;
lastScrollTop : number;
scrollTop : number;
_autoHeight : bool;
rows : Object;
focus : Object;
edit : Object;
selection : Object;
_pendingChangeSize : any;
_pendingResultSize : Object;
_padBorder : Object;
fitTo : String;
_parentContentBoxHeight : Object;
updating : bool;
fastScroll : bool;
delayScroll : bool;
scrollRedrawThreshold : number;
_pendingScroll : Object;
_setAutoHeightAttr (ah:any,skipRender:any) : any;
_getRowCountAttr () : any;
textSizeChanged () : any;
sizeChange () : any;
createManagers () : any;
createSelection () : any;
createScroller () : any;
createLayout () : any;
onMoveColumn () : any;
onResizeColumn (cellIdx:number) : any;
createViews () : any;
createView (inClass:any,idx:any) : any;
buildViews () : any;
_setStructureAttr (structure:any) : any;
setStructure (inStructure:any) : any;
getColumnTogglingItems () : any;
_setHeaderMenuAttr (menu:any) : any;
setHeaderMenu (menu:any) : any;
setupHeaderMenu () : any;
_fetch (start:any) : any;
getItem (inRowIndex:any) : any;
showMessage (message:any) : any;
_structureChanged () : any;
hasLayout () : any;
resize (changeSize:any,resultSize:any) : any;
_getPadBorder () : any;
_getHeaderHeight () : any;
_resize (changeSize:any,resultSize:any) : any;
adaptWidth () : any;
adaptHeight (inHeaderHeight:any) : any;
render () : any;
update () : any;
_render () : any;
prerender () : any;
postrender () : any;
postresize () : any;
renderRow (inRowIndex:any,inNodes:any) : any;
rowRemoved (inRowIndex:any) : any;
beginUpdate () : any;
endUpdate () : any;
defaultUpdate () : any;
updateRow (inRowIndex:number) : any;
updateRows (startIndex:number,howMany:number) : any;
updateRowCount (inRowCount:number) : any;
updateRowStyles (inRowIndex:any) : any;
getRowNode (inRowIndex:any) : any;
rowHeightChanged (inRowIndex:number) : any;
scrollTo (inTop:number) : any;
finishScrollJob () : any;
setScrollTop (inTop:any) : any;
scrollToRow (inRowIndex:number) : any;
styleRowNode (inRowIndex:any,inRowNode:any) : any;
_mouseOut (e:any) : any;
getCell (inIndex:number) : any;
setCellWidth (inIndex:any,inUnitWidth:any) : any;
getCellName (inCell:any) : String;
canSort (inSortInfo:number) : any;
sort () : any;
getSortAsc (inSortInfo:any) : bool;
getSortIndex (inSortInfo:any) : number;
setSortIndex (inIndex:number,inAsc:bool) : any;
setSortInfo (inSortInfo:any) : any;
doKeyEvent (e:any) : any;
_dispatch (m:any,e:any) : any;
dispatchKeyEvent (e:any) : any;
dispatchContentEvent (e:any) : any;
dispatchHeaderEvent (e:any) : any;
dokeydown (e:any) : any;
doclick (e:any) : any;
dodblclick (e:any) : any;
docontextmenu (e:any) : any;
doheaderclick (e:any) : any;
doheaderdblclick (e:any) : any;
doheadercontextmenu (e:any) : any;
doStartEdit (inCell:any,inRowIndex:any) : any;
doApplyCellEdit (inValue:any,inRowIndex:any,inFieldIndex:any) : any;
doCancelEdit (inRowIndex:any) : any;
doApplyEdit (inRowIndex:any) : any;
addRow () : any;
removeSelectedRows () : any;
markupFactory (props:any,node:any,ctor:any,cellFunc:any) : any;
}
}