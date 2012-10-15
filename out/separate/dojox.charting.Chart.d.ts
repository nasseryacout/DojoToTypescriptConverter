/// <reference path="Object.d.ts" />
module dojox.charting{
export class Chart{
coords : Object;
theme : Object;
dirty : Object;
runs : Object;
series : any[];
stack : any[];
dim : Object;
offsets : Object;
titleGap : any;
titlePos : String;
titleFont : Object;
titleFontColor : String;
plotArea : Object;
chartTitle : Object;
_delayedRenderHandle : Object;
margins : Object;
stroke : any;
fill : any;
delayInMs : number;
title : any;
axes : Object;
plots : Object;
node : Object;
surface : Object;
destroy () : any;
getCoords () : Object;
setTheme (theme:any) : any;
addAxis (name:String,kwArgs?:any) : any;
getAxis (name:String) : any;
removeAxis (name:String) : any;
addPlot (name:String,kwArgs:any) : any;
removePlot (name:String) : any;
getPlotOrder () : any[];
setPlotOrder (newOrder:any[]) : any;
movePlotToFront (name:String) : any;
movePlotToBack (name:String) : any;
addSeries (name:String,data:any[],kwArgs?:any) : any;
removeSeries (name:String) : any;
updateSeries (name:String,data:any[]) : any;
getSeriesOrder (plotName:String) : any;
setSeriesOrder (newOrder:any[]) : any;
moveSeriesToFront (name:String) : any;
moveSeriesToBack (name:String) : any;
resize (width:number,height:number) : any;
getGeometry () : Object;
setAxisWindow (name:String,scale:number,offset:number,zoom?:bool) : any;
setWindow (sx:number,sy:number,dx:number,dy:number,zoom?:bool) : any;
zoomIn (name:String,range:any[]) : any;
calculateGeometry () : any;
fullGeometry () : any;
render () : any;
fullRender () : any;
delayedRender () : any;
connectToPlot (name:String,object:Object,method:Function) : any[];
fireEvent (seriesName:String,eventName:String,index:number) : any;
_makeClean () : any;
_makeDirty () : any;
_invalidateDependentPlots (plotName:any,verticalAxis:bool) : any;
}
}
