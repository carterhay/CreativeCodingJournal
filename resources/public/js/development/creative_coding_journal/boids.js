// Compiled by ClojureScript 1.10.520 {}
goog.provide('creative_coding_journal.boids');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
creative_coding_journal.boids.speed = 0.55;
creative_coding_journal.boids.repulse_strength = 0.25;
creative_coding_journal.boids.repulse_distance = (50);
creative_coding_journal.boids.emptyV = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null);
creative_coding_journal.boids.vvop = (function creative_coding_journal$boids$vvop(f,v1,v2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),f.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v1),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v2)),new cljs.core.Keyword(null,"y","y",-1757859776),f.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v2))], null);
});
creative_coding_journal.boids.vsop = (function creative_coding_journal$boids$vsop(f,v,s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),f.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v),s),new cljs.core.Keyword(null,"y","y",-1757859776),f.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v),s)], null);
});
creative_coding_journal.boids.vop = (function creative_coding_journal$boids$vop(f,v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),f.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(v)),new cljs.core.Keyword(null,"y","y",-1757859776),f.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(v))], null);
});
creative_coding_journal.boids.calculate_new_position = (function creative_coding_journal$boids$calculate_new_position(position,velocity){
return creative_coding_journal.boids.vvop.call(null,cljs.core._PLUS_,position,velocity);
});
creative_coding_journal.boids.calculate_displacement = (function creative_coding_journal$boids$calculate_displacement(pos,des){
return creative_coding_journal.boids.vvop.call(null,cljs.core._,des,pos);
});
creative_coding_journal.boids.calculate_velocity = (function creative_coding_journal$boids$calculate_velocity(displacement,speed){
return creative_coding_journal.boids.vsop.call(null,cljs.core._STAR_,displacement,speed);
});
creative_coding_journal.boids.get_mouse_position = (function creative_coding_journal$boids$get_mouse_position(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),quil.core.mouse_x.call(null),new cljs.core.Keyword(null,"y","y",-1757859776),quil.core.mouse_y.call(null)], null);
});
creative_coding_journal.boids.calculate_distance = (function creative_coding_journal$boids$calculate_distance(v1,v2){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.vals.call(null,creative_coding_journal.boids.vop.call(null,Math.abs,creative_coding_journal.boids.vvop.call(null,cljs.core._,v1,v2))));
});
creative_coding_journal.boids.positions = (function creative_coding_journal$boids$positions(state){
return cljs.core.map.call(null,(function (p1__21778_SHARP_){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p1__21778_SHARP_);
}),state);
});
creative_coding_journal.boids.velocities = (function creative_coding_journal$boids$velocities(state){
return cljs.core.map.call(null,(function (p1__21779_SHARP_){
return new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p1__21779_SHARP_);
}),state);
});
creative_coding_journal.boids.random_boid = (function creative_coding_journal$boids$random_boid(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand_int.call(null,(500)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand_int.call(null,(500))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null);
});
creative_coding_journal.boids.average_vs = (function creative_coding_journal$boids$average_vs(vs){
return creative_coding_journal.boids.vsop.call(null,cljs.core._SLASH_,cljs.core.reduce.call(null,(function (x,y){
return creative_coding_journal.boids.vvop.call(null,cljs.core._PLUS_,x,y);
}),vs),cljs.core.count.call(null,vs));
});
creative_coding_journal.boids.setup = (function creative_coding_journal$boids$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"rgb","rgb",1432123467));

var state = cljs.core.repeatedly.call(null,(50),creative_coding_journal.boids.random_boid);
return state;
});
creative_coding_journal.boids.debug = (function creative_coding_journal$boids$debug(val){
cljs.core.print.call(null,val);

return val;
});
creative_coding_journal.boids.update_point = (function creative_coding_journal$boids$update_point(state,p){
var position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(p);
var velocity = new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(p);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),creative_coding_journal.boids.calculate_new_position.call(null,position,velocity),new cljs.core.Keyword(null,"velocity","velocity",-581524355),creative_coding_journal.boids.calculate_velocity.call(null,cljs.core.reduce.call(null,((function (position,velocity){
return (function (x,y){
return creative_coding_journal.boids.vvop.call(null,cljs.core._PLUS_,x,y);
});})(position,velocity))
,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [velocity,creative_coding_journal.boids.vsop.call(null,cljs.core._SLASH_,creative_coding_journal.boids.calculate_displacement.call(null,position,creative_coding_journal.boids.average_vs.call(null,creative_coding_journal.boids.positions.call(null,state))),(100)),creative_coding_journal.boids.vsop.call(null,cljs.core._SLASH_,creative_coding_journal.boids.vvop.call(null,cljs.core._,creative_coding_journal.boids.average_vs.call(null,creative_coding_journal.boids.velocities.call(null,state)),velocity),(10)),creative_coding_journal.boids.vsop.call(null,cljs.core._STAR_,cljs.core.reduce.call(null,((function (position,velocity){
return (function (x,y){
return creative_coding_journal.boids.vvop.call(null,cljs.core._,x,y);
});})(position,velocity))
,creative_coding_journal.boids.emptyV,cljs.core.map.call(null,((function (position,velocity){
return (function (p1__21780_SHARP_){
return creative_coding_journal.boids.calculate_displacement.call(null,position,p1__21780_SHARP_);
});})(position,velocity))
,cljs.core.filter.call(null,((function (position,velocity){
return (function (p1__21781_SHARP_){
return (creative_coding_journal.boids.calculate_distance.call(null,p1__21781_SHARP_,position) < creative_coding_journal.boids.repulse_distance);
});})(position,velocity))
,creative_coding_journal.boids.positions.call(null,state)))),creative_coding_journal.boids.repulse_strength),creative_coding_journal.boids.vsop.call(null,cljs.core._SLASH_,creative_coding_journal.boids.calculate_displacement.call(null,position,creative_coding_journal.boids.get_mouse_position.call(null)),(100))], null)),creative_coding_journal.boids.speed)], null);
});
creative_coding_journal.boids.draw_point = (function creative_coding_journal$boids$draw_point(p){
return quil.core.point.call(null,cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null)),cljs.core.get_in.call(null,p,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null)));
});
creative_coding_journal.boids.update_state = (function creative_coding_journal$boids$update_state(state){
return cljs.core.map.call(null,cljs.core.partial.call(null,creative_coding_journal.boids.update_point,state),state);
});
creative_coding_journal.boids.draw_state = (function creative_coding_journal$boids$draw_state(state){
quil.core.background.call(null,(240));

quil.core.stroke_weight.call(null,(10));

quil.core.stroke.call(null,(0),(0),(0));

quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state),(255),(255));

return cljs.core.run_BANG_.call(null,creative_coding_journal.boids.draw_point,state);
});
creative_coding_journal.boids.getWidth = (function creative_coding_journal$boids$getWidth(){
return window.screen.availWidth;
});
creative_coding_journal.boids.getHeight = (function creative_coding_journal$boids$getHeight(){
return window.screen.availHeight;
});
creative_coding_journal.boids.run_sketch = (function creative_coding_journal$boids$run_sketch(){
creative_coding_journal.boids.creative_coding_journal = (function creative_coding_journal$boids$run_sketch_$_creative_coding_journal(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"creative-coding-journal",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,creative_coding_journal.boids.update_state))?(function() { 
var G__21782__delegate = function (args){
return cljs.core.apply.call(null,creative_coding_journal.boids.update_state,args);
};
var G__21782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21783__i = 0, G__21783__a = new Array(arguments.length -  0);
while (G__21783__i < G__21783__a.length) {G__21783__a[G__21783__i] = arguments[G__21783__i + 0]; ++G__21783__i;}
  args = new cljs.core.IndexedSeq(G__21783__a,0,null);
} 
return G__21782__delegate.call(this,args);};
G__21782.cljs$lang$maxFixedArity = 0;
G__21782.cljs$lang$applyTo = (function (arglist__21784){
var args = cljs.core.seq(arglist__21784);
return G__21782__delegate(args);
});
G__21782.cljs$core$IFn$_invoke$arity$variadic = G__21782__delegate;
return G__21782;
})()
:creative_coding_journal.boids.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(creative_coding_journal.boids.getWidth.call(null) / 1.5),(creative_coding_journal.boids.getHeight.call(null) / 1.5)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,creative_coding_journal.boids.setup))?(function() { 
var G__21785__delegate = function (args){
return cljs.core.apply.call(null,creative_coding_journal.boids.setup,args);
};
var G__21785 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21786__i = 0, G__21786__a = new Array(arguments.length -  0);
while (G__21786__i < G__21786__a.length) {G__21786__a[G__21786__i] = arguments[G__21786__i + 0]; ++G__21786__i;}
  args = new cljs.core.IndexedSeq(G__21786__a,0,null);
} 
return G__21785__delegate.call(this,args);};
G__21785.cljs$lang$maxFixedArity = 0;
G__21785.cljs$lang$applyTo = (function (arglist__21787){
var args = cljs.core.seq(arglist__21787);
return G__21785__delegate(args);
});
G__21785.cljs$core$IFn$_invoke$arity$variadic = G__21785__delegate;
return G__21785;
})()
:creative_coding_journal.boids.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,creative_coding_journal.boids.draw_state))?(function() { 
var G__21788__delegate = function (args){
return cljs.core.apply.call(null,creative_coding_journal.boids.draw_state,args);
};
var G__21788 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21789__i = 0, G__21789__a = new Array(arguments.length -  0);
while (G__21789__i < G__21789__a.length) {G__21789__a[G__21789__i] = arguments[G__21789__i + 0]; ++G__21789__i;}
  args = new cljs.core.IndexedSeq(G__21789__a,0,null);
} 
return G__21788__delegate.call(this,args);};
G__21788.cljs$lang$maxFixedArity = 0;
G__21788.cljs$lang$applyTo = (function (arglist__21790){
var args = cljs.core.seq(arglist__21790);
return G__21788__delegate(args);
});
G__21788.cljs$core$IFn$_invoke$arity$variadic = G__21788__delegate;
return G__21788;
})()
:creative_coding_journal.boids.draw_state));
});
goog.exportSymbol('creative_coding_journal.boids.creative_coding_journal', creative_coding_journal.boids.creative_coding_journal);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20947__20948__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20947__20948__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),creative_coding_journal.boids.creative_coding_journal,new cljs.core.Keyword(null,"host-id","host-id",742376279),"creative-coding-journal"], null));
}
});
goog.exportSymbol('creative_coding_journal.boids.run_sketch', creative_coding_journal.boids.run_sketch);

//# sourceMappingURL=boids.js.map?rel=1651849642281
