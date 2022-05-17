// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34169){
var map__34170 = p__34169;
var map__34170__$1 = (((((!((map__34170 == null))))?(((((map__34170.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34170.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34170):map__34170);
var m = map__34170__$1;
var n = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__34170__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34172_34204 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34173_34205 = null;
var count__34174_34206 = (0);
var i__34175_34207 = (0);
while(true){
if((i__34175_34207 < count__34174_34206)){
var f_34208 = cljs.core._nth.call(null,chunk__34173_34205,i__34175_34207);
cljs.core.println.call(null,"  ",f_34208);


var G__34209 = seq__34172_34204;
var G__34210 = chunk__34173_34205;
var G__34211 = count__34174_34206;
var G__34212 = (i__34175_34207 + (1));
seq__34172_34204 = G__34209;
chunk__34173_34205 = G__34210;
count__34174_34206 = G__34211;
i__34175_34207 = G__34212;
continue;
} else {
var temp__5735__auto___34213 = cljs.core.seq.call(null,seq__34172_34204);
if(temp__5735__auto___34213){
var seq__34172_34214__$1 = temp__5735__auto___34213;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34172_34214__$1)){
var c__4550__auto___34215 = cljs.core.chunk_first.call(null,seq__34172_34214__$1);
var G__34216 = cljs.core.chunk_rest.call(null,seq__34172_34214__$1);
var G__34217 = c__4550__auto___34215;
var G__34218 = cljs.core.count.call(null,c__4550__auto___34215);
var G__34219 = (0);
seq__34172_34204 = G__34216;
chunk__34173_34205 = G__34217;
count__34174_34206 = G__34218;
i__34175_34207 = G__34219;
continue;
} else {
var f_34220 = cljs.core.first.call(null,seq__34172_34214__$1);
cljs.core.println.call(null,"  ",f_34220);


var G__34221 = cljs.core.next.call(null,seq__34172_34214__$1);
var G__34222 = null;
var G__34223 = (0);
var G__34224 = (0);
seq__34172_34204 = G__34221;
chunk__34173_34205 = G__34222;
count__34174_34206 = G__34223;
i__34175_34207 = G__34224;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34225 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_34225);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_34225)))?cljs.core.second.call(null,arglists_34225):arglists_34225));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34176_34226 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34177_34227 = null;
var count__34178_34228 = (0);
var i__34179_34229 = (0);
while(true){
if((i__34179_34229 < count__34178_34228)){
var vec__34190_34230 = cljs.core._nth.call(null,chunk__34177_34227,i__34179_34229);
var name_34231 = cljs.core.nth.call(null,vec__34190_34230,(0),null);
var map__34193_34232 = cljs.core.nth.call(null,vec__34190_34230,(1),null);
var map__34193_34233__$1 = (((((!((map__34193_34232 == null))))?(((((map__34193_34232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34193_34232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34193_34232):map__34193_34232);
var doc_34234 = cljs.core.get.call(null,map__34193_34233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34235 = cljs.core.get.call(null,map__34193_34233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34231);

cljs.core.println.call(null," ",arglists_34235);

if(cljs.core.truth_(doc_34234)){
cljs.core.println.call(null," ",doc_34234);
} else {
}


var G__34236 = seq__34176_34226;
var G__34237 = chunk__34177_34227;
var G__34238 = count__34178_34228;
var G__34239 = (i__34179_34229 + (1));
seq__34176_34226 = G__34236;
chunk__34177_34227 = G__34237;
count__34178_34228 = G__34238;
i__34179_34229 = G__34239;
continue;
} else {
var temp__5735__auto___34240 = cljs.core.seq.call(null,seq__34176_34226);
if(temp__5735__auto___34240){
var seq__34176_34241__$1 = temp__5735__auto___34240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34176_34241__$1)){
var c__4550__auto___34242 = cljs.core.chunk_first.call(null,seq__34176_34241__$1);
var G__34243 = cljs.core.chunk_rest.call(null,seq__34176_34241__$1);
var G__34244 = c__4550__auto___34242;
var G__34245 = cljs.core.count.call(null,c__4550__auto___34242);
var G__34246 = (0);
seq__34176_34226 = G__34243;
chunk__34177_34227 = G__34244;
count__34178_34228 = G__34245;
i__34179_34229 = G__34246;
continue;
} else {
var vec__34195_34247 = cljs.core.first.call(null,seq__34176_34241__$1);
var name_34248 = cljs.core.nth.call(null,vec__34195_34247,(0),null);
var map__34198_34249 = cljs.core.nth.call(null,vec__34195_34247,(1),null);
var map__34198_34250__$1 = (((((!((map__34198_34249 == null))))?(((((map__34198_34249.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34198_34249.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34198_34249):map__34198_34249);
var doc_34251 = cljs.core.get.call(null,map__34198_34250__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34252 = cljs.core.get.call(null,map__34198_34250__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_34248);

cljs.core.println.call(null," ",arglists_34252);

if(cljs.core.truth_(doc_34251)){
cljs.core.println.call(null," ",doc_34251);
} else {
}


var G__34253 = cljs.core.next.call(null,seq__34176_34241__$1);
var G__34254 = null;
var G__34255 = (0);
var G__34256 = (0);
seq__34176_34226 = G__34253;
chunk__34177_34227 = G__34254;
count__34178_34228 = G__34255;
i__34179_34229 = G__34256;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__34200 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34201 = null;
var count__34202 = (0);
var i__34203 = (0);
while(true){
if((i__34203 < count__34202)){
var role = cljs.core._nth.call(null,chunk__34201,i__34203);
var temp__5735__auto___34257__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34257__$1)){
var spec_34258 = temp__5735__auto___34257__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34258));
} else {
}


var G__34259 = seq__34200;
var G__34260 = chunk__34201;
var G__34261 = count__34202;
var G__34262 = (i__34203 + (1));
seq__34200 = G__34259;
chunk__34201 = G__34260;
count__34202 = G__34261;
i__34203 = G__34262;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__34200);
if(temp__5735__auto____$1){
var seq__34200__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34200__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__34200__$1);
var G__34263 = cljs.core.chunk_rest.call(null,seq__34200__$1);
var G__34264 = c__4550__auto__;
var G__34265 = cljs.core.count.call(null,c__4550__auto__);
var G__34266 = (0);
seq__34200 = G__34263;
chunk__34201 = G__34264;
count__34202 = G__34265;
i__34203 = G__34266;
continue;
} else {
var role = cljs.core.first.call(null,seq__34200__$1);
var temp__5735__auto___34267__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34267__$2)){
var spec_34268 = temp__5735__auto___34267__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_34268));
} else {
}


var G__34269 = cljs.core.next.call(null,seq__34200__$1);
var G__34270 = null;
var G__34271 = (0);
var G__34272 = (0);
seq__34200 = G__34269;
chunk__34201 = G__34270;
count__34202 = G__34271;
i__34203 = G__34272;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34273 = cljs.core.conj.call(null,via,t);
var G__34274 = cljs.core.ex_cause.call(null,t);
via = G__34273;
t = G__34274;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34277 = datafied_throwable;
var map__34277__$1 = (((((!((map__34277 == null))))?(((((map__34277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34277):map__34277);
var via = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__34277__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34278 = cljs.core.last.call(null,via);
var map__34278__$1 = (((((!((map__34278 == null))))?(((((map__34278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34278):map__34278);
var type = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__34278__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34279 = data;
var map__34279__$1 = (((((!((map__34279 == null))))?(((((map__34279.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34279.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34279):map__34279);
var problems = cljs.core.get.call(null,map__34279__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__34279__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__34279__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34280 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__34280__$1 = (((((!((map__34280 == null))))?(((((map__34280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34280):map__34280);
var top_data = map__34280__$1;
var source = cljs.core.get.call(null,map__34280__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__34285 = phase;
var G__34285__$1 = (((G__34285 instanceof cljs.core.Keyword))?G__34285.fqn:null);
switch (G__34285__$1) {
case "read-source":
var map__34286 = data;
var map__34286__$1 = (((((!((map__34286 == null))))?(((((map__34286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34286):map__34286);
var line = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34286__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34288 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__34288__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34288,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34288);
var G__34288__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34288__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34288__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34288__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34288__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34289 = top_data;
var G__34289__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__34289,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34289);
var G__34289__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__34289__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34289__$1);
var G__34289__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34289__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34289__$2);
var G__34289__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34289__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34289__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34289__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34289__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34290 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34290,(0),null);
var method = cljs.core.nth.call(null,vec__34290,(1),null);
var file = cljs.core.nth.call(null,vec__34290,(2),null);
var line = cljs.core.nth.call(null,vec__34290,(3),null);
var G__34293 = top_data;
var G__34293__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__34293,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34293);
var G__34293__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__34293__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34293__$1);
var G__34293__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__34293__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34293__$2);
var G__34293__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__34293__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34293__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__34293__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34293__$4;
}

break;
case "execution":
var vec__34294 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__34294,(0),null);
var method = cljs.core.nth.call(null,vec__34294,(1),null);
var file = cljs.core.nth.call(null,vec__34294,(2),null);
var line = cljs.core.nth.call(null,vec__34294,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__34294,source__$1,method,file,line,G__34285,G__34285__$1,map__34277,map__34277__$1,via,trace,phase,map__34278,map__34278__$1,type,message,data,map__34279,map__34279__$1,problems,fn,caller,map__34280,map__34280__$1,top_data,source){
return (function (p1__34276_SHARP_){
var or__4131__auto__ = (p1__34276_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__34276_SHARP_);
}
});})(vec__34294,source__$1,method,file,line,G__34285,G__34285__$1,map__34277,map__34277__$1,via,trace,phase,map__34278,map__34278__$1,type,message,data,map__34279,map__34279__$1,problems,fn,caller,map__34280,map__34280__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__34297 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34297__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__34297,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34297);
var G__34297__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__34297__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34297__$1);
var G__34297__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__34297__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34297__$2);
var G__34297__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__34297__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34297__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__34297__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34297__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34285__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34301){
var map__34302 = p__34301;
var map__34302__$1 = (((((!((map__34302 == null))))?(((((map__34302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34302):map__34302);
var triage_data = map__34302__$1;
var phase = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__34302__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34304 = phase;
var G__34304__$1 = (((G__34304 instanceof cljs.core.Keyword))?G__34304.fqn:null);
switch (G__34304__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34305_34314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34306_34315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34307_34316 = true;
var _STAR_print_fn_STAR__temp_val__34308_34317 = ((function (_STAR_print_newline_STAR__orig_val__34305_34314,_STAR_print_fn_STAR__orig_val__34306_34315,_STAR_print_newline_STAR__temp_val__34307_34316,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34305_34314,_STAR_print_fn_STAR__orig_val__34306_34315,_STAR_print_newline_STAR__temp_val__34307_34316,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34307_34316;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34308_34317;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34305_34314,_STAR_print_fn_STAR__orig_val__34306_34315,_STAR_print_newline_STAR__temp_val__34307_34316,_STAR_print_fn_STAR__temp_val__34308_34317,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34305_34314,_STAR_print_fn_STAR__orig_val__34306_34315,_STAR_print_newline_STAR__temp_val__34307_34316,_STAR_print_fn_STAR__temp_val__34308_34317,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34299_SHARP_){
return cljs.core.dissoc.call(null,p1__34299_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34305_34314,_STAR_print_fn_STAR__orig_val__34306_34315,_STAR_print_newline_STAR__temp_val__34307_34316,_STAR_print_fn_STAR__temp_val__34308_34317,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34305_34314,_STAR_print_fn_STAR__orig_val__34306_34315,_STAR_print_newline_STAR__temp_val__34307_34316,_STAR_print_fn_STAR__temp_val__34308_34317,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34306_34315;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34305_34314;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34309_34318 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34310_34319 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34311_34320 = true;
var _STAR_print_fn_STAR__temp_val__34312_34321 = ((function (_STAR_print_newline_STAR__orig_val__34309_34318,_STAR_print_fn_STAR__orig_val__34310_34319,_STAR_print_newline_STAR__temp_val__34311_34320,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__34309_34318,_STAR_print_fn_STAR__orig_val__34310_34319,_STAR_print_newline_STAR__temp_val__34311_34320,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34311_34320;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34312_34321;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__34309_34318,_STAR_print_fn_STAR__orig_val__34310_34319,_STAR_print_newline_STAR__temp_val__34311_34320,_STAR_print_fn_STAR__temp_val__34312_34321,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__34309_34318,_STAR_print_fn_STAR__orig_val__34310_34319,_STAR_print_newline_STAR__temp_val__34311_34320,_STAR_print_fn_STAR__temp_val__34312_34321,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__34300_SHARP_){
return cljs.core.dissoc.call(null,p1__34300_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__34309_34318,_STAR_print_fn_STAR__orig_val__34310_34319,_STAR_print_newline_STAR__temp_val__34311_34320,_STAR_print_fn_STAR__temp_val__34312_34321,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__34309_34318,_STAR_print_fn_STAR__orig_val__34310_34319,_STAR_print_newline_STAR__temp_val__34311_34320,_STAR_print_fn_STAR__temp_val__34312_34321,sb__4661__auto__,G__34304,G__34304__$1,loc,class_name,simple_class,cause_type,format,map__34302,map__34302__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34310_34319;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34309_34318;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34304__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1651840307162
