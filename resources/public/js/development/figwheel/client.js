// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e35179){if((e35179 instanceof Error)){
var e = e35179;
return "Error: Unable to stringify";
} else {
throw e35179;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__35182 = arguments.length;
switch (G__35182) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__35180_SHARP_){
if(typeof p1__35180_SHARP_ === 'string'){
return p1__35180_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__35180_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35185 = arguments.length;
var i__4731__auto___35186 = (0);
while(true){
if((i__4731__auto___35186 < len__4730__auto___35185)){
args__4736__auto__.push((arguments[i__4731__auto___35186]));

var G__35187 = (i__4731__auto___35186 + (1));
i__4731__auto___35186 = G__35187;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq35184){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35184));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35189 = arguments.length;
var i__4731__auto___35190 = (0);
while(true){
if((i__4731__auto___35190 < len__4730__auto___35189)){
args__4736__auto__.push((arguments[i__4731__auto___35190]));

var G__35191 = (i__4731__auto___35190 + (1));
i__4731__auto___35190 = G__35191;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq35188){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35188));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35192){
var map__35193 = p__35192;
var map__35193__$1 = (((((!((map__35193 == null))))?(((((map__35193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35193):map__35193);
var message = cljs.core.get.call(null,map__35193__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__35193__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24578__auto___35272 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___35272,ch){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___35272,ch){
return (function (state_35244){
var state_val_35245 = (state_35244[(1)]);
if((state_val_35245 === (7))){
var inst_35240 = (state_35244[(2)]);
var state_35244__$1 = state_35244;
var statearr_35246_35273 = state_35244__$1;
(statearr_35246_35273[(2)] = inst_35240);

(statearr_35246_35273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (1))){
var state_35244__$1 = state_35244;
var statearr_35247_35274 = state_35244__$1;
(statearr_35247_35274[(2)] = null);

(statearr_35247_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (4))){
var inst_35197 = (state_35244[(7)]);
var inst_35197__$1 = (state_35244[(2)]);
var state_35244__$1 = (function (){var statearr_35248 = state_35244;
(statearr_35248[(7)] = inst_35197__$1);

return statearr_35248;
})();
if(cljs.core.truth_(inst_35197__$1)){
var statearr_35249_35275 = state_35244__$1;
(statearr_35249_35275[(1)] = (5));

} else {
var statearr_35250_35276 = state_35244__$1;
(statearr_35250_35276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (15))){
var inst_35204 = (state_35244[(8)]);
var inst_35219 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35204);
var inst_35220 = cljs.core.first.call(null,inst_35219);
var inst_35221 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35220);
var inst_35222 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35221)].join('');
var inst_35223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_35222);
var state_35244__$1 = state_35244;
var statearr_35251_35277 = state_35244__$1;
(statearr_35251_35277[(2)] = inst_35223);

(statearr_35251_35277[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (13))){
var inst_35228 = (state_35244[(2)]);
var state_35244__$1 = state_35244;
var statearr_35252_35278 = state_35244__$1;
(statearr_35252_35278[(2)] = inst_35228);

(statearr_35252_35278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (6))){
var state_35244__$1 = state_35244;
var statearr_35253_35279 = state_35244__$1;
(statearr_35253_35279[(2)] = null);

(statearr_35253_35279[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (17))){
var inst_35226 = (state_35244[(2)]);
var state_35244__$1 = state_35244;
var statearr_35254_35280 = state_35244__$1;
(statearr_35254_35280[(2)] = inst_35226);

(statearr_35254_35280[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (3))){
var inst_35242 = (state_35244[(2)]);
var state_35244__$1 = state_35244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35244__$1,inst_35242);
} else {
if((state_val_35245 === (12))){
var inst_35203 = (state_35244[(9)]);
var inst_35217 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35203,opts);
var state_35244__$1 = state_35244;
if(inst_35217){
var statearr_35255_35281 = state_35244__$1;
(statearr_35255_35281[(1)] = (15));

} else {
var statearr_35256_35282 = state_35244__$1;
(statearr_35256_35282[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (2))){
var state_35244__$1 = state_35244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35244__$1,(4),ch);
} else {
if((state_val_35245 === (11))){
var inst_35204 = (state_35244[(8)]);
var inst_35209 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35210 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35204);
var inst_35211 = cljs.core.async.timeout.call(null,(1000));
var inst_35212 = [inst_35210,inst_35211];
var inst_35213 = (new cljs.core.PersistentVector(null,2,(5),inst_35209,inst_35212,null));
var state_35244__$1 = state_35244;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35244__$1,(14),inst_35213);
} else {
if((state_val_35245 === (9))){
var inst_35204 = (state_35244[(8)]);
var inst_35230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_35231 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35204);
var inst_35232 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35231);
var inst_35233 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_35232)].join('');
var inst_35234 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_35233);
var state_35244__$1 = (function (){var statearr_35257 = state_35244;
(statearr_35257[(10)] = inst_35230);

return statearr_35257;
})();
var statearr_35258_35283 = state_35244__$1;
(statearr_35258_35283[(2)] = inst_35234);

(statearr_35258_35283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (5))){
var inst_35197 = (state_35244[(7)]);
var inst_35199 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35200 = (new cljs.core.PersistentArrayMap(null,2,inst_35199,null));
var inst_35201 = (new cljs.core.PersistentHashSet(null,inst_35200,null));
var inst_35202 = figwheel.client.focus_msgs.call(null,inst_35201,inst_35197);
var inst_35203 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35202);
var inst_35204 = cljs.core.first.call(null,inst_35202);
var inst_35205 = figwheel.client.autoload_QMARK_.call(null);
var state_35244__$1 = (function (){var statearr_35259 = state_35244;
(statearr_35259[(9)] = inst_35203);

(statearr_35259[(8)] = inst_35204);

return statearr_35259;
})();
if(cljs.core.truth_(inst_35205)){
var statearr_35260_35284 = state_35244__$1;
(statearr_35260_35284[(1)] = (8));

} else {
var statearr_35261_35285 = state_35244__$1;
(statearr_35261_35285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (14))){
var inst_35215 = (state_35244[(2)]);
var state_35244__$1 = state_35244;
var statearr_35262_35286 = state_35244__$1;
(statearr_35262_35286[(2)] = inst_35215);

(statearr_35262_35286[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (16))){
var state_35244__$1 = state_35244;
var statearr_35263_35287 = state_35244__$1;
(statearr_35263_35287[(2)] = null);

(statearr_35263_35287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (10))){
var inst_35236 = (state_35244[(2)]);
var state_35244__$1 = (function (){var statearr_35264 = state_35244;
(statearr_35264[(11)] = inst_35236);

return statearr_35264;
})();
var statearr_35265_35288 = state_35244__$1;
(statearr_35265_35288[(2)] = null);

(statearr_35265_35288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35245 === (8))){
var inst_35203 = (state_35244[(9)]);
var inst_35207 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35203,opts);
var state_35244__$1 = state_35244;
if(cljs.core.truth_(inst_35207)){
var statearr_35266_35289 = state_35244__$1;
(statearr_35266_35289[(1)] = (11));

} else {
var statearr_35267_35290 = state_35244__$1;
(statearr_35267_35290[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24578__auto___35272,ch))
;
return ((function (switch__23615__auto__,c__24578__auto___35272,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23616__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23616__auto____0 = (function (){
var statearr_35268 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35268[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23616__auto__);

(statearr_35268[(1)] = (1));

return statearr_35268;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23616__auto____1 = (function (state_35244){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_35244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e35269){if((e35269 instanceof Object)){
var ex__23619__auto__ = e35269;
var statearr_35270_35291 = state_35244;
(statearr_35270_35291[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35292 = state_35244;
state_35244 = G__35292;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23616__auto__ = function(state_35244){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23616__auto____1.call(this,state_35244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23616__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23616__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___35272,ch))
})();
var state__24580__auto__ = (function (){var statearr_35271 = f__24579__auto__.call(null);
(statearr_35271[(6)] = c__24578__auto___35272);

return statearr_35271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___35272,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35293_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35293_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_35299 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35299){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__35295 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__35296 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__35297 = true;
var _STAR_print_fn_STAR__temp_val__35298 = ((function (_STAR_print_newline_STAR__orig_val__35295,_STAR_print_fn_STAR__orig_val__35296,_STAR_print_newline_STAR__temp_val__35297,sb,base_path_35299){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__35295,_STAR_print_fn_STAR__orig_val__35296,_STAR_print_newline_STAR__temp_val__35297,sb,base_path_35299))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__35297;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__35298;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__35296;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__35295;
}}catch (e35294){if((e35294 instanceof Error)){
var e = e35294;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35299], null));
} else {
var e = e35294;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35299))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35300){
var map__35301 = p__35300;
var map__35301__$1 = (((((!((map__35301 == null))))?(((((map__35301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35301):map__35301);
var opts = map__35301__$1;
var build_id = cljs.core.get.call(null,map__35301__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35301,map__35301__$1,opts,build_id){
return (function (p__35303){
var vec__35304 = p__35303;
var seq__35305 = cljs.core.seq.call(null,vec__35304);
var first__35306 = cljs.core.first.call(null,seq__35305);
var seq__35305__$1 = cljs.core.next.call(null,seq__35305);
var map__35307 = first__35306;
var map__35307__$1 = (((((!((map__35307 == null))))?(((((map__35307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35307):map__35307);
var msg = map__35307__$1;
var msg_name = cljs.core.get.call(null,map__35307__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35305__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__35304,seq__35305,first__35306,seq__35305__$1,map__35307,map__35307__$1,msg,msg_name,_,map__35301,map__35301__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35304,seq__35305,first__35306,seq__35305__$1,map__35307,map__35307__$1,msg,msg_name,_,map__35301,map__35301__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35301,map__35301__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35309){
var vec__35310 = p__35309;
var seq__35311 = cljs.core.seq.call(null,vec__35310);
var first__35312 = cljs.core.first.call(null,seq__35311);
var seq__35311__$1 = cljs.core.next.call(null,seq__35311);
var map__35313 = first__35312;
var map__35313__$1 = (((((!((map__35313 == null))))?(((((map__35313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35313):map__35313);
var msg = map__35313__$1;
var msg_name = cljs.core.get.call(null,map__35313__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35311__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35315){
var map__35316 = p__35315;
var map__35316__$1 = (((((!((map__35316 == null))))?(((((map__35316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35316):map__35316);
var on_compile_warning = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__35316__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__35316,map__35316__$1,on_compile_warning,on_compile_fail){
return (function (p__35318){
var vec__35319 = p__35318;
var seq__35320 = cljs.core.seq.call(null,vec__35319);
var first__35321 = cljs.core.first.call(null,seq__35320);
var seq__35320__$1 = cljs.core.next.call(null,seq__35320);
var map__35322 = first__35321;
var map__35322__$1 = (((((!((map__35322 == null))))?(((((map__35322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35322):map__35322);
var msg = map__35322__$1;
var msg_name = cljs.core.get.call(null,map__35322__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__35320__$1;
var pred__35324 = cljs.core._EQ_;
var expr__35325 = msg_name;
if(cljs.core.truth_(pred__35324.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35325))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35324.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35325))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35316,map__35316__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__,msg_hist,msg_names,msg){
return (function (state_35414){
var state_val_35415 = (state_35414[(1)]);
if((state_val_35415 === (7))){
var inst_35334 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
if(cljs.core.truth_(inst_35334)){
var statearr_35416_35463 = state_35414__$1;
(statearr_35416_35463[(1)] = (8));

} else {
var statearr_35417_35464 = state_35414__$1;
(statearr_35417_35464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (20))){
var inst_35408 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35418_35465 = state_35414__$1;
(statearr_35418_35465[(2)] = inst_35408);

(statearr_35418_35465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (27))){
var inst_35404 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35419_35466 = state_35414__$1;
(statearr_35419_35466[(2)] = inst_35404);

(statearr_35419_35466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (1))){
var inst_35327 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35414__$1 = state_35414;
if(cljs.core.truth_(inst_35327)){
var statearr_35420_35467 = state_35414__$1;
(statearr_35420_35467[(1)] = (2));

} else {
var statearr_35421_35468 = state_35414__$1;
(statearr_35421_35468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (24))){
var inst_35406 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35422_35469 = state_35414__$1;
(statearr_35422_35469[(2)] = inst_35406);

(statearr_35422_35469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (4))){
var inst_35412 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35414__$1,inst_35412);
} else {
if((state_val_35415 === (15))){
var inst_35410 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35423_35470 = state_35414__$1;
(statearr_35423_35470[(2)] = inst_35410);

(statearr_35423_35470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (21))){
var inst_35363 = (state_35414[(2)]);
var inst_35364 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35365 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35364);
var state_35414__$1 = (function (){var statearr_35424 = state_35414;
(statearr_35424[(7)] = inst_35363);

return statearr_35424;
})();
var statearr_35425_35471 = state_35414__$1;
(statearr_35425_35471[(2)] = inst_35365);

(statearr_35425_35471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (31))){
var inst_35393 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35414__$1 = state_35414;
if(inst_35393){
var statearr_35426_35472 = state_35414__$1;
(statearr_35426_35472[(1)] = (34));

} else {
var statearr_35427_35473 = state_35414__$1;
(statearr_35427_35473[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (32))){
var inst_35402 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35428_35474 = state_35414__$1;
(statearr_35428_35474[(2)] = inst_35402);

(statearr_35428_35474[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (33))){
var inst_35389 = (state_35414[(2)]);
var inst_35390 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35391 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35390);
var state_35414__$1 = (function (){var statearr_35429 = state_35414;
(statearr_35429[(8)] = inst_35389);

return statearr_35429;
})();
var statearr_35430_35475 = state_35414__$1;
(statearr_35430_35475[(2)] = inst_35391);

(statearr_35430_35475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (13))){
var inst_35348 = figwheel.client.heads_up.clear.call(null);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(16),inst_35348);
} else {
if((state_val_35415 === (22))){
var inst_35369 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35370 = figwheel.client.heads_up.append_warning_message.call(null,inst_35369);
var state_35414__$1 = state_35414;
var statearr_35431_35476 = state_35414__$1;
(statearr_35431_35476[(2)] = inst_35370);

(statearr_35431_35476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (36))){
var inst_35400 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35432_35477 = state_35414__$1;
(statearr_35432_35477[(2)] = inst_35400);

(statearr_35432_35477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (29))){
var inst_35380 = (state_35414[(2)]);
var inst_35381 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35382 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35381);
var state_35414__$1 = (function (){var statearr_35433 = state_35414;
(statearr_35433[(9)] = inst_35380);

return statearr_35433;
})();
var statearr_35434_35478 = state_35414__$1;
(statearr_35434_35478[(2)] = inst_35382);

(statearr_35434_35478[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (6))){
var inst_35329 = (state_35414[(10)]);
var state_35414__$1 = state_35414;
var statearr_35435_35479 = state_35414__$1;
(statearr_35435_35479[(2)] = inst_35329);

(statearr_35435_35479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (28))){
var inst_35376 = (state_35414[(2)]);
var inst_35377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35378 = figwheel.client.heads_up.display_warning.call(null,inst_35377);
var state_35414__$1 = (function (){var statearr_35436 = state_35414;
(statearr_35436[(11)] = inst_35376);

return statearr_35436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(29),inst_35378);
} else {
if((state_val_35415 === (25))){
var inst_35374 = figwheel.client.heads_up.clear.call(null);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(28),inst_35374);
} else {
if((state_val_35415 === (34))){
var inst_35395 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(37),inst_35395);
} else {
if((state_val_35415 === (17))){
var inst_35354 = (state_35414[(2)]);
var inst_35355 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35356 = figwheel.client.auto_jump_to_error.call(null,opts,inst_35355);
var state_35414__$1 = (function (){var statearr_35437 = state_35414;
(statearr_35437[(12)] = inst_35354);

return statearr_35437;
})();
var statearr_35438_35480 = state_35414__$1;
(statearr_35438_35480[(2)] = inst_35356);

(statearr_35438_35480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (3))){
var inst_35346 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35414__$1 = state_35414;
if(inst_35346){
var statearr_35439_35481 = state_35414__$1;
(statearr_35439_35481[(1)] = (13));

} else {
var statearr_35440_35482 = state_35414__$1;
(statearr_35440_35482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (12))){
var inst_35342 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35441_35483 = state_35414__$1;
(statearr_35441_35483[(2)] = inst_35342);

(statearr_35441_35483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (2))){
var inst_35329 = (state_35414[(10)]);
var inst_35329__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_35414__$1 = (function (){var statearr_35442 = state_35414;
(statearr_35442[(10)] = inst_35329__$1);

return statearr_35442;
})();
if(cljs.core.truth_(inst_35329__$1)){
var statearr_35443_35484 = state_35414__$1;
(statearr_35443_35484[(1)] = (5));

} else {
var statearr_35444_35485 = state_35414__$1;
(statearr_35444_35485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (23))){
var inst_35372 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35414__$1 = state_35414;
if(inst_35372){
var statearr_35445_35486 = state_35414__$1;
(statearr_35445_35486[(1)] = (25));

} else {
var statearr_35446_35487 = state_35414__$1;
(statearr_35446_35487[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (35))){
var state_35414__$1 = state_35414;
var statearr_35447_35488 = state_35414__$1;
(statearr_35447_35488[(2)] = null);

(statearr_35447_35488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (19))){
var inst_35367 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35414__$1 = state_35414;
if(inst_35367){
var statearr_35448_35489 = state_35414__$1;
(statearr_35448_35489[(1)] = (22));

} else {
var statearr_35449_35490 = state_35414__$1;
(statearr_35449_35490[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (11))){
var inst_35338 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35450_35491 = state_35414__$1;
(statearr_35450_35491[(2)] = inst_35338);

(statearr_35450_35491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (9))){
var inst_35340 = figwheel.client.heads_up.clear.call(null);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(12),inst_35340);
} else {
if((state_val_35415 === (5))){
var inst_35331 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35414__$1 = state_35414;
var statearr_35451_35492 = state_35414__$1;
(statearr_35451_35492[(2)] = inst_35331);

(statearr_35451_35492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (14))){
var inst_35358 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35414__$1 = state_35414;
if(inst_35358){
var statearr_35452_35493 = state_35414__$1;
(statearr_35452_35493[(1)] = (18));

} else {
var statearr_35453_35494 = state_35414__$1;
(statearr_35453_35494[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (26))){
var inst_35384 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35414__$1 = state_35414;
if(inst_35384){
var statearr_35454_35495 = state_35414__$1;
(statearr_35454_35495[(1)] = (30));

} else {
var statearr_35455_35496 = state_35414__$1;
(statearr_35455_35496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (16))){
var inst_35350 = (state_35414[(2)]);
var inst_35351 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35352 = figwheel.client.heads_up.display_exception.call(null,inst_35351);
var state_35414__$1 = (function (){var statearr_35456 = state_35414;
(statearr_35456[(13)] = inst_35350);

return statearr_35456;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(17),inst_35352);
} else {
if((state_val_35415 === (30))){
var inst_35386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35387 = figwheel.client.heads_up.display_warning.call(null,inst_35386);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(33),inst_35387);
} else {
if((state_val_35415 === (10))){
var inst_35344 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35457_35497 = state_35414__$1;
(statearr_35457_35497[(2)] = inst_35344);

(statearr_35457_35497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (18))){
var inst_35360 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35361 = figwheel.client.heads_up.display_exception.call(null,inst_35360);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(21),inst_35361);
} else {
if((state_val_35415 === (37))){
var inst_35397 = (state_35414[(2)]);
var state_35414__$1 = state_35414;
var statearr_35458_35498 = state_35414__$1;
(statearr_35458_35498[(2)] = inst_35397);

(statearr_35458_35498[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35415 === (8))){
var inst_35336 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35414__$1 = state_35414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35414__$1,(11),inst_35336);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__24578__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23615__auto__,c__24578__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto____0 = (function (){
var statearr_35459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35459[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto__);

(statearr_35459[(1)] = (1));

return statearr_35459;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto____1 = (function (state_35414){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_35414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e35460){if((e35460 instanceof Object)){
var ex__23619__auto__ = e35460;
var statearr_35461_35499 = state_35414;
(statearr_35461_35499[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35500 = state_35414;
state_35414 = G__35500;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto__ = function(state_35414){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto____1.call(this,state_35414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__,msg_hist,msg_names,msg))
})();
var state__24580__auto__ = (function (){var statearr_35462 = f__24579__auto__.call(null);
(statearr_35462[(6)] = c__24578__auto__);

return statearr_35462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__,msg_hist,msg_names,msg))
);

return c__24578__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24578__auto___35529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___35529,ch){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___35529,ch){
return (function (state_35515){
var state_val_35516 = (state_35515[(1)]);
if((state_val_35516 === (1))){
var state_35515__$1 = state_35515;
var statearr_35517_35530 = state_35515__$1;
(statearr_35517_35530[(2)] = null);

(statearr_35517_35530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (2))){
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35515__$1,(4),ch);
} else {
if((state_val_35516 === (3))){
var inst_35513 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35515__$1,inst_35513);
} else {
if((state_val_35516 === (4))){
var inst_35503 = (state_35515[(7)]);
var inst_35503__$1 = (state_35515[(2)]);
var state_35515__$1 = (function (){var statearr_35518 = state_35515;
(statearr_35518[(7)] = inst_35503__$1);

return statearr_35518;
})();
if(cljs.core.truth_(inst_35503__$1)){
var statearr_35519_35531 = state_35515__$1;
(statearr_35519_35531[(1)] = (5));

} else {
var statearr_35520_35532 = state_35515__$1;
(statearr_35520_35532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (5))){
var inst_35503 = (state_35515[(7)]);
var inst_35505 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35503);
var state_35515__$1 = state_35515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35515__$1,(8),inst_35505);
} else {
if((state_val_35516 === (6))){
var state_35515__$1 = state_35515;
var statearr_35521_35533 = state_35515__$1;
(statearr_35521_35533[(2)] = null);

(statearr_35521_35533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (7))){
var inst_35511 = (state_35515[(2)]);
var state_35515__$1 = state_35515;
var statearr_35522_35534 = state_35515__$1;
(statearr_35522_35534[(2)] = inst_35511);

(statearr_35522_35534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35516 === (8))){
var inst_35507 = (state_35515[(2)]);
var state_35515__$1 = (function (){var statearr_35523 = state_35515;
(statearr_35523[(8)] = inst_35507);

return statearr_35523;
})();
var statearr_35524_35535 = state_35515__$1;
(statearr_35524_35535[(2)] = null);

(statearr_35524_35535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__24578__auto___35529,ch))
;
return ((function (switch__23615__auto__,c__24578__auto___35529,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23616__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23616__auto____0 = (function (){
var statearr_35525 = [null,null,null,null,null,null,null,null,null];
(statearr_35525[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23616__auto__);

(statearr_35525[(1)] = (1));

return statearr_35525;
});
var figwheel$client$heads_up_plugin_$_state_machine__23616__auto____1 = (function (state_35515){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_35515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e35526){if((e35526 instanceof Object)){
var ex__23619__auto__ = e35526;
var statearr_35527_35536 = state_35515;
(statearr_35527_35536[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35537 = state_35515;
state_35515 = G__35537;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23616__auto__ = function(state_35515){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23616__auto____1.call(this,state_35515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23616__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23616__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___35529,ch))
})();
var state__24580__auto__ = (function (){var statearr_35528 = f__24579__auto__.call(null);
(statearr_35528[(6)] = c__24578__auto___35529);

return statearr_35528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___35529,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__){
return (function (state_35543){
var state_val_35544 = (state_35543[(1)]);
if((state_val_35544 === (1))){
var inst_35538 = cljs.core.async.timeout.call(null,(3000));
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35543__$1,(2),inst_35538);
} else {
if((state_val_35544 === (2))){
var inst_35540 = (state_35543[(2)]);
var inst_35541 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35543__$1 = (function (){var statearr_35545 = state_35543;
(statearr_35545[(7)] = inst_35540);

return statearr_35545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35543__$1,inst_35541);
} else {
return null;
}
}
});})(c__24578__auto__))
;
return ((function (switch__23615__auto__,c__24578__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23616__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23616__auto____0 = (function (){
var statearr_35546 = [null,null,null,null,null,null,null,null];
(statearr_35546[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23616__auto__);

(statearr_35546[(1)] = (1));

return statearr_35546;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23616__auto____1 = (function (state_35543){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_35543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e35547){if((e35547 instanceof Object)){
var ex__23619__auto__ = e35547;
var statearr_35548_35550 = state_35543;
(statearr_35548_35550[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35551 = state_35543;
state_35543 = G__35551;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23616__auto__ = function(state_35543){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23616__auto____1.call(this,state_35543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23616__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23616__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__))
})();
var state__24580__auto__ = (function (){var statearr_35549 = f__24579__auto__.call(null);
(statearr_35549[(6)] = c__24578__auto__);

return statearr_35549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__))
);

return c__24578__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__,figwheel_version,temp__5735__auto__){
return (function (state_35558){
var state_val_35559 = (state_35558[(1)]);
if((state_val_35559 === (1))){
var inst_35552 = cljs.core.async.timeout.call(null,(2000));
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35558__$1,(2),inst_35552);
} else {
if((state_val_35559 === (2))){
var inst_35554 = (state_35558[(2)]);
var inst_35555 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35556 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35555);
var state_35558__$1 = (function (){var statearr_35560 = state_35558;
(statearr_35560[(7)] = inst_35554);

return statearr_35560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35558__$1,inst_35556);
} else {
return null;
}
}
});})(c__24578__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__23615__auto__,c__24578__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto____0 = (function (){
var statearr_35561 = [null,null,null,null,null,null,null,null];
(statearr_35561[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto__);

(statearr_35561[(1)] = (1));

return statearr_35561;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto____1 = (function (state_35558){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_35558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e35562){if((e35562 instanceof Object)){
var ex__23619__auto__ = e35562;
var statearr_35563_35565 = state_35558;
(statearr_35563_35565[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35562;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35566 = state_35558;
state_35558 = G__35566;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto__ = function(state_35558){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto____1.call(this,state_35558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__,figwheel_version,temp__5735__auto__))
})();
var state__24580__auto__ = (function (){var statearr_35564 = f__24579__auto__.call(null);
(statearr_35564[(6)] = c__24578__auto__);

return statearr_35564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__,figwheel_version,temp__5735__auto__))
);

return c__24578__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35567){
var map__35568 = p__35567;
var map__35568__$1 = (((((!((map__35568 == null))))?(((((map__35568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35568.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35568):map__35568);
var file = cljs.core.get.call(null,map__35568__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35568__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35568__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35570 = "";
var G__35570__$1 = (cljs.core.truth_(file)?[G__35570,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35570);
var G__35570__$2 = (cljs.core.truth_(line)?[G__35570__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35570__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__35570__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35570__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35571){
var map__35572 = p__35571;
var map__35572__$1 = (((((!((map__35572 == null))))?(((((map__35572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35572):map__35572);
var ed = map__35572__$1;
var exception_data = cljs.core.get.call(null,map__35572__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35572__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_35575 = (function (){var G__35574 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35574)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__35574;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_35575);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35576){
var map__35577 = p__35576;
var map__35577__$1 = (((((!((map__35577 == null))))?(((((map__35577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35577):map__35577);
var w = map__35577__$1;
var message = cljs.core.get.call(null,map__35577__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\development\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\development\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35579 = cljs.core.seq.call(null,plugins);
var chunk__35580 = null;
var count__35581 = (0);
var i__35582 = (0);
while(true){
if((i__35582 < count__35581)){
var vec__35589 = cljs.core._nth.call(null,chunk__35580,i__35582);
var k = cljs.core.nth.call(null,vec__35589,(0),null);
var plugin = cljs.core.nth.call(null,vec__35589,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35595 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35579,chunk__35580,count__35581,i__35582,pl_35595,vec__35589,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35595.call(null,msg_hist);
});})(seq__35579,chunk__35580,count__35581,i__35582,pl_35595,vec__35589,k,plugin))
);
} else {
}


var G__35596 = seq__35579;
var G__35597 = chunk__35580;
var G__35598 = count__35581;
var G__35599 = (i__35582 + (1));
seq__35579 = G__35596;
chunk__35580 = G__35597;
count__35581 = G__35598;
i__35582 = G__35599;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35579);
if(temp__5735__auto__){
var seq__35579__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35579__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35579__$1);
var G__35600 = cljs.core.chunk_rest.call(null,seq__35579__$1);
var G__35601 = c__4550__auto__;
var G__35602 = cljs.core.count.call(null,c__4550__auto__);
var G__35603 = (0);
seq__35579 = G__35600;
chunk__35580 = G__35601;
count__35581 = G__35602;
i__35582 = G__35603;
continue;
} else {
var vec__35592 = cljs.core.first.call(null,seq__35579__$1);
var k = cljs.core.nth.call(null,vec__35592,(0),null);
var plugin = cljs.core.nth.call(null,vec__35592,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35604 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35579,chunk__35580,count__35581,i__35582,pl_35604,vec__35592,k,plugin,seq__35579__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35604.call(null,msg_hist);
});})(seq__35579,chunk__35580,count__35581,i__35582,pl_35604,vec__35592,k,plugin,seq__35579__$1,temp__5735__auto__))
);
} else {
}


var G__35605 = cljs.core.next.call(null,seq__35579__$1);
var G__35606 = null;
var G__35607 = (0);
var G__35608 = (0);
seq__35579 = G__35605;
chunk__35580 = G__35606;
count__35581 = G__35607;
i__35582 = G__35608;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__35610 = arguments.length;
switch (G__35610) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__35611_35616 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35612_35617 = null;
var count__35613_35618 = (0);
var i__35614_35619 = (0);
while(true){
if((i__35614_35619 < count__35613_35618)){
var msg_35620 = cljs.core._nth.call(null,chunk__35612_35617,i__35614_35619);
figwheel.client.socket.handle_incoming_message.call(null,msg_35620);


var G__35621 = seq__35611_35616;
var G__35622 = chunk__35612_35617;
var G__35623 = count__35613_35618;
var G__35624 = (i__35614_35619 + (1));
seq__35611_35616 = G__35621;
chunk__35612_35617 = G__35622;
count__35613_35618 = G__35623;
i__35614_35619 = G__35624;
continue;
} else {
var temp__5735__auto___35625 = cljs.core.seq.call(null,seq__35611_35616);
if(temp__5735__auto___35625){
var seq__35611_35626__$1 = temp__5735__auto___35625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35611_35626__$1)){
var c__4550__auto___35627 = cljs.core.chunk_first.call(null,seq__35611_35626__$1);
var G__35628 = cljs.core.chunk_rest.call(null,seq__35611_35626__$1);
var G__35629 = c__4550__auto___35627;
var G__35630 = cljs.core.count.call(null,c__4550__auto___35627);
var G__35631 = (0);
seq__35611_35616 = G__35628;
chunk__35612_35617 = G__35629;
count__35613_35618 = G__35630;
i__35614_35619 = G__35631;
continue;
} else {
var msg_35632 = cljs.core.first.call(null,seq__35611_35626__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35632);


var G__35633 = cljs.core.next.call(null,seq__35611_35626__$1);
var G__35634 = null;
var G__35635 = (0);
var G__35636 = (0);
seq__35611_35616 = G__35633;
chunk__35612_35617 = G__35634;
count__35613_35618 = G__35635;
i__35614_35619 = G__35636;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___35641 = arguments.length;
var i__4731__auto___35642 = (0);
while(true){
if((i__4731__auto___35642 < len__4730__auto___35641)){
args__4736__auto__.push((arguments[i__4731__auto___35642]));

var G__35643 = (i__4731__auto___35642 + (1));
i__4731__auto___35642 = G__35643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35638){
var map__35639 = p__35638;
var map__35639__$1 = (((((!((map__35639 == null))))?(((((map__35639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35639):map__35639);
var opts = map__35639__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35637){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35637));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35644){if((e35644 instanceof Error)){
var e = e35644;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35644;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__35645){
var map__35646 = p__35645;
var map__35646__$1 = (((((!((map__35646 == null))))?(((((map__35646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35646):map__35646);
var msg_name = cljs.core.get.call(null,map__35646__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1651840307990
