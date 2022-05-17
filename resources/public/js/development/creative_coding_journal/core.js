// Compiled by ClojureScript 1.10.520 {}
goog.provide('creative_coding_journal.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('creative_coding_journal.boids');
creative_coding_journal.core.toggle_visibility = (function creative_coding_journal$core$toggle_visibility(id){
var button = document.getElementById(id);
var style = button.style;
return style.display = ((cljs.core._EQ_.call(null,style.display,"none"))?"inline-block":"none"
);
});
creative_coding_journal.core.toggle_visibility_all = (function creative_coding_journal$core$toggle_visibility_all(){
return cljs.core.run_BANG_.call(null,creative_coding_journal.core.toggle_visibility,cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),creative_coding_journal.core.buttons));
});
creative_coding_journal.core.empty_sketch = (function creative_coding_journal$core$empty_sketch(){
creative_coding_journal.core.creative_coding_journal = (function creative_coding_journal$core$empty_sketch_$_creative_coding_journal(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"creative-coding-journal",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
goog.exportSymbol('creative_coding_journal.core.creative_coding_journal', creative_coding_journal.core.creative_coding_journal);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20947__20948__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20947__20948__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),creative_coding_journal.core.creative_coding_journal,new cljs.core.Keyword(null,"host-id","host-id",742376279),"creative-coding-journal"], null));
}
});
goog.exportSymbol('creative_coding_journal.core.empty_sketch', creative_coding_journal.core.empty_sketch);
creative_coding_journal.core.blank_sketch = (function creative_coding_journal$core$blank_sketch(){
creative_coding_journal.core.toggle_visibility_all.call(null);

return creative_coding_journal.core.empty_sketch.call(null);
});
creative_coding_journal.core.run = (function creative_coding_journal$core$run(f){
creative_coding_journal.core.toggle_visibility_all.call(null);

return f.call(null);
});
creative_coding_journal.core.run_boids = (function creative_coding_journal$core$run_boids(){
return creative_coding_journal.core.run.call(null,creative_coding_journal.boids.run_sketch);
});
creative_coding_journal.core.run_radius = (function creative_coding_journal$core$run_radius(){
return null;
});
creative_coding_journal.core.buttons = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"back-button",new cljs.core.Keyword(null,"func","func",-238706040),creative_coding_journal.core.blank_sketch], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"boids-button",new cljs.core.Keyword(null,"func","func",-238706040),creative_coding_journal.core.run_boids], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"radius-button",new cljs.core.Keyword(null,"func","func",-238706040),creative_coding_journal.core.run_radius], null)], null);
creative_coding_journal.core.run_sketch = (function creative_coding_journal$core$run_sketch(){
var add_click_listener = (function (p1__21796_SHARP_){
return document.getElementById(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__21796_SHARP_)).addEventListener("click",new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(p1__21796_SHARP_));
});
return cljs.core.run_BANG_.call(null,add_click_listener,creative_coding_journal.core.buttons);
});
creative_coding_journal.core.run_sketch.call(null);

//# sourceMappingURL=core.js.map?rel=1651849650854
