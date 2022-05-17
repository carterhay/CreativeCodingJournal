// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31847_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31847_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31848 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31849 = null;
var count__31850 = (0);
var i__31851 = (0);
while(true){
if((i__31851 < count__31850)){
var n = cljs.core._nth.call(null,chunk__31849,i__31851);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31852 = seq__31848;
var G__31853 = chunk__31849;
var G__31854 = count__31850;
var G__31855 = (i__31851 + (1));
seq__31848 = G__31852;
chunk__31849 = G__31853;
count__31850 = G__31854;
i__31851 = G__31855;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31848);
if(temp__5735__auto__){
var seq__31848__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31848__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31848__$1);
var G__31856 = cljs.core.chunk_rest.call(null,seq__31848__$1);
var G__31857 = c__4550__auto__;
var G__31858 = cljs.core.count.call(null,c__4550__auto__);
var G__31859 = (0);
seq__31848 = G__31856;
chunk__31849 = G__31857;
count__31850 = G__31858;
i__31851 = G__31859;
continue;
} else {
var n = cljs.core.first.call(null,seq__31848__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__31860 = cljs.core.next.call(null,seq__31848__$1);
var G__31861 = null;
var G__31862 = (0);
var G__31863 = (0);
seq__31848 = G__31860;
chunk__31849 = G__31861;
count__31850 = G__31862;
i__31851 = G__31863;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__31864){
var vec__31865 = p__31864;
var _ = cljs.core.nth.call(null,vec__31865,(0),null);
var v = cljs.core.nth.call(null,vec__31865,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__31868){
var vec__31869 = p__31868;
var k = cljs.core.nth.call(null,vec__31869,(0),null);
var v = cljs.core.nth.call(null,vec__31869,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31881_31889 = cljs.core.seq.call(null,deps);
var chunk__31882_31890 = null;
var count__31883_31891 = (0);
var i__31884_31892 = (0);
while(true){
if((i__31884_31892 < count__31883_31891)){
var dep_31893 = cljs.core._nth.call(null,chunk__31882_31890,i__31884_31892);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31893;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31893));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31893,(depth + (1)),state);
} else {
}


var G__31894 = seq__31881_31889;
var G__31895 = chunk__31882_31890;
var G__31896 = count__31883_31891;
var G__31897 = (i__31884_31892 + (1));
seq__31881_31889 = G__31894;
chunk__31882_31890 = G__31895;
count__31883_31891 = G__31896;
i__31884_31892 = G__31897;
continue;
} else {
var temp__5735__auto___31898 = cljs.core.seq.call(null,seq__31881_31889);
if(temp__5735__auto___31898){
var seq__31881_31899__$1 = temp__5735__auto___31898;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31881_31899__$1)){
var c__4550__auto___31900 = cljs.core.chunk_first.call(null,seq__31881_31899__$1);
var G__31901 = cljs.core.chunk_rest.call(null,seq__31881_31899__$1);
var G__31902 = c__4550__auto___31900;
var G__31903 = cljs.core.count.call(null,c__4550__auto___31900);
var G__31904 = (0);
seq__31881_31889 = G__31901;
chunk__31882_31890 = G__31902;
count__31883_31891 = G__31903;
i__31884_31892 = G__31904;
continue;
} else {
var dep_31905 = cljs.core.first.call(null,seq__31881_31899__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_31905;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_31905));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_31905,(depth + (1)),state);
} else {
}


var G__31906 = cljs.core.next.call(null,seq__31881_31899__$1);
var G__31907 = null;
var G__31908 = (0);
var G__31909 = (0);
seq__31881_31889 = G__31906;
chunk__31882_31890 = G__31907;
count__31883_31891 = G__31908;
i__31884_31892 = G__31909;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31885){
var vec__31886 = p__31885;
var seq__31887 = cljs.core.seq.call(null,vec__31886);
var first__31888 = cljs.core.first.call(null,seq__31887);
var seq__31887__$1 = cljs.core.next.call(null,seq__31887);
var x = first__31888;
var xs = seq__31887__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31886,seq__31887,first__31888,seq__31887__$1,x,xs,get_deps__$1){
return (function (p1__31872_SHARP_){
return clojure.set.difference.call(null,p1__31872_SHARP_,x);
});})(vec__31886,seq__31887,first__31888,seq__31887__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__31910 = cljs.core.seq.call(null,provides);
var chunk__31911 = null;
var count__31912 = (0);
var i__31913 = (0);
while(true){
if((i__31913 < count__31912)){
var prov = cljs.core._nth.call(null,chunk__31911,i__31913);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31922_31930 = cljs.core.seq.call(null,requires);
var chunk__31923_31931 = null;
var count__31924_31932 = (0);
var i__31925_31933 = (0);
while(true){
if((i__31925_31933 < count__31924_31932)){
var req_31934 = cljs.core._nth.call(null,chunk__31923_31931,i__31925_31933);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31934,prov);


var G__31935 = seq__31922_31930;
var G__31936 = chunk__31923_31931;
var G__31937 = count__31924_31932;
var G__31938 = (i__31925_31933 + (1));
seq__31922_31930 = G__31935;
chunk__31923_31931 = G__31936;
count__31924_31932 = G__31937;
i__31925_31933 = G__31938;
continue;
} else {
var temp__5735__auto___31939 = cljs.core.seq.call(null,seq__31922_31930);
if(temp__5735__auto___31939){
var seq__31922_31940__$1 = temp__5735__auto___31939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31922_31940__$1)){
var c__4550__auto___31941 = cljs.core.chunk_first.call(null,seq__31922_31940__$1);
var G__31942 = cljs.core.chunk_rest.call(null,seq__31922_31940__$1);
var G__31943 = c__4550__auto___31941;
var G__31944 = cljs.core.count.call(null,c__4550__auto___31941);
var G__31945 = (0);
seq__31922_31930 = G__31942;
chunk__31923_31931 = G__31943;
count__31924_31932 = G__31944;
i__31925_31933 = G__31945;
continue;
} else {
var req_31946 = cljs.core.first.call(null,seq__31922_31940__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31946,prov);


var G__31947 = cljs.core.next.call(null,seq__31922_31940__$1);
var G__31948 = null;
var G__31949 = (0);
var G__31950 = (0);
seq__31922_31930 = G__31947;
chunk__31923_31931 = G__31948;
count__31924_31932 = G__31949;
i__31925_31933 = G__31950;
continue;
}
} else {
}
}
break;
}


var G__31951 = seq__31910;
var G__31952 = chunk__31911;
var G__31953 = count__31912;
var G__31954 = (i__31913 + (1));
seq__31910 = G__31951;
chunk__31911 = G__31952;
count__31912 = G__31953;
i__31913 = G__31954;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31910);
if(temp__5735__auto__){
var seq__31910__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31910__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__31910__$1);
var G__31955 = cljs.core.chunk_rest.call(null,seq__31910__$1);
var G__31956 = c__4550__auto__;
var G__31957 = cljs.core.count.call(null,c__4550__auto__);
var G__31958 = (0);
seq__31910 = G__31955;
chunk__31911 = G__31956;
count__31912 = G__31957;
i__31913 = G__31958;
continue;
} else {
var prov = cljs.core.first.call(null,seq__31910__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__31926_31959 = cljs.core.seq.call(null,requires);
var chunk__31927_31960 = null;
var count__31928_31961 = (0);
var i__31929_31962 = (0);
while(true){
if((i__31929_31962 < count__31928_31961)){
var req_31963 = cljs.core._nth.call(null,chunk__31927_31960,i__31929_31962);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31963,prov);


var G__31964 = seq__31926_31959;
var G__31965 = chunk__31927_31960;
var G__31966 = count__31928_31961;
var G__31967 = (i__31929_31962 + (1));
seq__31926_31959 = G__31964;
chunk__31927_31960 = G__31965;
count__31928_31961 = G__31966;
i__31929_31962 = G__31967;
continue;
} else {
var temp__5735__auto___31968__$1 = cljs.core.seq.call(null,seq__31926_31959);
if(temp__5735__auto___31968__$1){
var seq__31926_31969__$1 = temp__5735__auto___31968__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31926_31969__$1)){
var c__4550__auto___31970 = cljs.core.chunk_first.call(null,seq__31926_31969__$1);
var G__31971 = cljs.core.chunk_rest.call(null,seq__31926_31969__$1);
var G__31972 = c__4550__auto___31970;
var G__31973 = cljs.core.count.call(null,c__4550__auto___31970);
var G__31974 = (0);
seq__31926_31959 = G__31971;
chunk__31927_31960 = G__31972;
count__31928_31961 = G__31973;
i__31929_31962 = G__31974;
continue;
} else {
var req_31975 = cljs.core.first.call(null,seq__31926_31969__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_31975,prov);


var G__31976 = cljs.core.next.call(null,seq__31926_31969__$1);
var G__31977 = null;
var G__31978 = (0);
var G__31979 = (0);
seq__31926_31959 = G__31976;
chunk__31927_31960 = G__31977;
count__31928_31961 = G__31978;
i__31929_31962 = G__31979;
continue;
}
} else {
}
}
break;
}


var G__31980 = cljs.core.next.call(null,seq__31910__$1);
var G__31981 = null;
var G__31982 = (0);
var G__31983 = (0);
seq__31910 = G__31980;
chunk__31911 = G__31981;
count__31912 = G__31982;
i__31913 = G__31983;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__31984_31988 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__31985_31989 = null;
var count__31986_31990 = (0);
var i__31987_31991 = (0);
while(true){
if((i__31987_31991 < count__31986_31990)){
var ns_31992 = cljs.core._nth.call(null,chunk__31985_31989,i__31987_31991);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_31992);


var G__31993 = seq__31984_31988;
var G__31994 = chunk__31985_31989;
var G__31995 = count__31986_31990;
var G__31996 = (i__31987_31991 + (1));
seq__31984_31988 = G__31993;
chunk__31985_31989 = G__31994;
count__31986_31990 = G__31995;
i__31987_31991 = G__31996;
continue;
} else {
var temp__5735__auto___31997 = cljs.core.seq.call(null,seq__31984_31988);
if(temp__5735__auto___31997){
var seq__31984_31998__$1 = temp__5735__auto___31997;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31984_31998__$1)){
var c__4550__auto___31999 = cljs.core.chunk_first.call(null,seq__31984_31998__$1);
var G__32000 = cljs.core.chunk_rest.call(null,seq__31984_31998__$1);
var G__32001 = c__4550__auto___31999;
var G__32002 = cljs.core.count.call(null,c__4550__auto___31999);
var G__32003 = (0);
seq__31984_31988 = G__32000;
chunk__31985_31989 = G__32001;
count__31986_31990 = G__32002;
i__31987_31991 = G__32003;
continue;
} else {
var ns_32004 = cljs.core.first.call(null,seq__31984_31998__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32004);


var G__32005 = cljs.core.next.call(null,seq__31984_31998__$1);
var G__32006 = null;
var G__32007 = (0);
var G__32008 = (0);
seq__31984_31988 = G__32005;
chunk__31985_31989 = G__32006;
count__31986_31990 = G__32007;
i__31987_31991 = G__32008;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32009__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32010__i = 0, G__32010__a = new Array(arguments.length -  0);
while (G__32010__i < G__32010__a.length) {G__32010__a[G__32010__i] = arguments[G__32010__i + 0]; ++G__32010__i;}
  args = new cljs.core.IndexedSeq(G__32010__a,0,null);
} 
return G__32009__delegate.call(this,args);};
G__32009.cljs$lang$maxFixedArity = 0;
G__32009.cljs$lang$applyTo = (function (arglist__32011){
var args = cljs.core.seq(arglist__32011);
return G__32009__delegate(args);
});
G__32009.cljs$core$IFn$_invoke$arity$variadic = G__32009__delegate;
return G__32009;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32012_SHARP_,p2__32013_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32012_SHARP_)),p2__32013_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32014_SHARP_,p2__32015_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32014_SHARP_),p2__32015_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32016 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32016.addCallback(((function (G__32016){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32016))
);

G__32016.addErrback(((function (G__32016){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32016))
);

return G__32016;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32017){if((e32017 instanceof Error)){
var e = e32017;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32017;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e32018){if((e32018 instanceof Error)){
var e = e32018;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32018;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32019 = cljs.core._EQ_;
var expr__32020 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32019.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32020))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32019.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32020))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32019.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32020))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32019,expr__32020){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32019,expr__32020))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32022,callback){
var map__32023 = p__32022;
var map__32023__$1 = (((((!((map__32023 == null))))?(((((map__32023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32023):map__32023);
var file_msg = map__32023__$1;
var request_url = cljs.core.get.call(null,map__32023__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32023,map__32023__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32023,map__32023__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__){
return (function (state_32061){
var state_val_32062 = (state_32061[(1)]);
if((state_val_32062 === (7))){
var inst_32057 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
var statearr_32063_32089 = state_32061__$1;
(statearr_32063_32089[(2)] = inst_32057);

(statearr_32063_32089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (1))){
var state_32061__$1 = state_32061;
var statearr_32064_32090 = state_32061__$1;
(statearr_32064_32090[(2)] = null);

(statearr_32064_32090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (4))){
var inst_32027 = (state_32061[(7)]);
var inst_32027__$1 = (state_32061[(2)]);
var state_32061__$1 = (function (){var statearr_32065 = state_32061;
(statearr_32065[(7)] = inst_32027__$1);

return statearr_32065;
})();
if(cljs.core.truth_(inst_32027__$1)){
var statearr_32066_32091 = state_32061__$1;
(statearr_32066_32091[(1)] = (5));

} else {
var statearr_32067_32092 = state_32061__$1;
(statearr_32067_32092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (15))){
var inst_32042 = (state_32061[(8)]);
var inst_32040 = (state_32061[(9)]);
var inst_32044 = inst_32042.call(null,inst_32040);
var state_32061__$1 = state_32061;
var statearr_32068_32093 = state_32061__$1;
(statearr_32068_32093[(2)] = inst_32044);

(statearr_32068_32093[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (13))){
var inst_32051 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
var statearr_32069_32094 = state_32061__$1;
(statearr_32069_32094[(2)] = inst_32051);

(statearr_32069_32094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (6))){
var state_32061__$1 = state_32061;
var statearr_32070_32095 = state_32061__$1;
(statearr_32070_32095[(2)] = null);

(statearr_32070_32095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (17))){
var inst_32048 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
var statearr_32071_32096 = state_32061__$1;
(statearr_32071_32096[(2)] = inst_32048);

(statearr_32071_32096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (3))){
var inst_32059 = (state_32061[(2)]);
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32061__$1,inst_32059);
} else {
if((state_val_32062 === (12))){
var state_32061__$1 = state_32061;
var statearr_32072_32097 = state_32061__$1;
(statearr_32072_32097[(2)] = null);

(statearr_32072_32097[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (2))){
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32061__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32062 === (11))){
var inst_32032 = (state_32061[(10)]);
var inst_32038 = figwheel.client.file_reloading.blocking_load.call(null,inst_32032);
var state_32061__$1 = state_32061;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32061__$1,(14),inst_32038);
} else {
if((state_val_32062 === (9))){
var inst_32032 = (state_32061[(10)]);
var state_32061__$1 = state_32061;
if(cljs.core.truth_(inst_32032)){
var statearr_32073_32098 = state_32061__$1;
(statearr_32073_32098[(1)] = (11));

} else {
var statearr_32074_32099 = state_32061__$1;
(statearr_32074_32099[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (5))){
var inst_32033 = (state_32061[(11)]);
var inst_32027 = (state_32061[(7)]);
var inst_32032 = cljs.core.nth.call(null,inst_32027,(0),null);
var inst_32033__$1 = cljs.core.nth.call(null,inst_32027,(1),null);
var state_32061__$1 = (function (){var statearr_32075 = state_32061;
(statearr_32075[(10)] = inst_32032);

(statearr_32075[(11)] = inst_32033__$1);

return statearr_32075;
})();
if(cljs.core.truth_(inst_32033__$1)){
var statearr_32076_32100 = state_32061__$1;
(statearr_32076_32100[(1)] = (8));

} else {
var statearr_32077_32101 = state_32061__$1;
(statearr_32077_32101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (14))){
var inst_32032 = (state_32061[(10)]);
var inst_32042 = (state_32061[(8)]);
var inst_32040 = (state_32061[(2)]);
var inst_32041 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32042__$1 = cljs.core.get.call(null,inst_32041,inst_32032);
var state_32061__$1 = (function (){var statearr_32078 = state_32061;
(statearr_32078[(8)] = inst_32042__$1);

(statearr_32078[(9)] = inst_32040);

return statearr_32078;
})();
if(cljs.core.truth_(inst_32042__$1)){
var statearr_32079_32102 = state_32061__$1;
(statearr_32079_32102[(1)] = (15));

} else {
var statearr_32080_32103 = state_32061__$1;
(statearr_32080_32103[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (16))){
var inst_32040 = (state_32061[(9)]);
var inst_32046 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32040);
var state_32061__$1 = state_32061;
var statearr_32081_32104 = state_32061__$1;
(statearr_32081_32104[(2)] = inst_32046);

(statearr_32081_32104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (10))){
var inst_32053 = (state_32061[(2)]);
var state_32061__$1 = (function (){var statearr_32082 = state_32061;
(statearr_32082[(12)] = inst_32053);

return statearr_32082;
})();
var statearr_32083_32105 = state_32061__$1;
(statearr_32083_32105[(2)] = null);

(statearr_32083_32105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32062 === (8))){
var inst_32033 = (state_32061[(11)]);
var inst_32035 = eval(inst_32033);
var state_32061__$1 = state_32061;
var statearr_32084_32106 = state_32061__$1;
(statearr_32084_32106[(2)] = inst_32035);

(statearr_32084_32106[(1)] = (10));


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
});})(c__24578__auto__))
;
return ((function (switch__23615__auto__,c__24578__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__23616__auto__ = null;
var figwheel$client$file_reloading$state_machine__23616__auto____0 = (function (){
var statearr_32085 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32085[(0)] = figwheel$client$file_reloading$state_machine__23616__auto__);

(statearr_32085[(1)] = (1));

return statearr_32085;
});
var figwheel$client$file_reloading$state_machine__23616__auto____1 = (function (state_32061){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_32061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e32086){if((e32086 instanceof Object)){
var ex__23619__auto__ = e32086;
var statearr_32087_32107 = state_32061;
(statearr_32087_32107[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32108 = state_32061;
state_32061 = G__32108;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__23616__auto__ = function(state_32061){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__23616__auto____1.call(this,state_32061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__23616__auto____0;
figwheel$client$file_reloading$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__23616__auto____1;
return figwheel$client$file_reloading$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__))
})();
var state__24580__auto__ = (function (){var statearr_32088 = f__24579__auto__.call(null);
(statearr_32088[(6)] = c__24578__auto__);

return statearr_32088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__))
);

return c__24578__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__32110 = arguments.length;
switch (G__32110) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32112,callback){
var map__32113 = p__32112;
var map__32113__$1 = (((((!((map__32113 == null))))?(((((map__32113.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32113.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);
var file_msg = map__32113__$1;
var namespace = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32113,map__32113__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32113,map__32113__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__32115){
var map__32116 = p__32115;
var map__32116__$1 = (((((!((map__32116 == null))))?(((((map__32116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32116):map__32116);
var file_msg = map__32116__$1;
var namespace = cljs.core.get.call(null,map__32116__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32118){
var map__32119 = p__32118;
var map__32119__$1 = (((((!((map__32119 == null))))?(((((map__32119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32119):map__32119);
var file_msg = map__32119__$1;
var namespace = cljs.core.get.call(null,map__32119__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32121,callback){
var map__32122 = p__32121;
var map__32122__$1 = (((((!((map__32122 == null))))?(((((map__32122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);
var file_msg = map__32122__$1;
var request_url = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24578__auto___32172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___32172,out){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___32172,out){
return (function (state_32157){
var state_val_32158 = (state_32157[(1)]);
if((state_val_32158 === (1))){
var inst_32131 = cljs.core.seq.call(null,files);
var inst_32132 = cljs.core.first.call(null,inst_32131);
var inst_32133 = cljs.core.next.call(null,inst_32131);
var inst_32134 = files;
var state_32157__$1 = (function (){var statearr_32159 = state_32157;
(statearr_32159[(7)] = inst_32134);

(statearr_32159[(8)] = inst_32132);

(statearr_32159[(9)] = inst_32133);

return statearr_32159;
})();
var statearr_32160_32173 = state_32157__$1;
(statearr_32160_32173[(2)] = null);

(statearr_32160_32173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (2))){
var inst_32134 = (state_32157[(7)]);
var inst_32140 = (state_32157[(10)]);
var inst_32139 = cljs.core.seq.call(null,inst_32134);
var inst_32140__$1 = cljs.core.first.call(null,inst_32139);
var inst_32141 = cljs.core.next.call(null,inst_32139);
var inst_32142 = (inst_32140__$1 == null);
var inst_32143 = cljs.core.not.call(null,inst_32142);
var state_32157__$1 = (function (){var statearr_32161 = state_32157;
(statearr_32161[(10)] = inst_32140__$1);

(statearr_32161[(11)] = inst_32141);

return statearr_32161;
})();
if(inst_32143){
var statearr_32162_32174 = state_32157__$1;
(statearr_32162_32174[(1)] = (4));

} else {
var statearr_32163_32175 = state_32157__$1;
(statearr_32163_32175[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (3))){
var inst_32155 = (state_32157[(2)]);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32157__$1,inst_32155);
} else {
if((state_val_32158 === (4))){
var inst_32140 = (state_32157[(10)]);
var inst_32145 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32140);
var state_32157__$1 = state_32157;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32157__$1,(7),inst_32145);
} else {
if((state_val_32158 === (5))){
var inst_32151 = cljs.core.async.close_BANG_.call(null,out);
var state_32157__$1 = state_32157;
var statearr_32164_32176 = state_32157__$1;
(statearr_32164_32176[(2)] = inst_32151);

(statearr_32164_32176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (6))){
var inst_32153 = (state_32157[(2)]);
var state_32157__$1 = state_32157;
var statearr_32165_32177 = state_32157__$1;
(statearr_32165_32177[(2)] = inst_32153);

(statearr_32165_32177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32158 === (7))){
var inst_32141 = (state_32157[(11)]);
var inst_32147 = (state_32157[(2)]);
var inst_32148 = cljs.core.async.put_BANG_.call(null,out,inst_32147);
var inst_32134 = inst_32141;
var state_32157__$1 = (function (){var statearr_32166 = state_32157;
(statearr_32166[(7)] = inst_32134);

(statearr_32166[(12)] = inst_32148);

return statearr_32166;
})();
var statearr_32167_32178 = state_32157__$1;
(statearr_32167_32178[(2)] = null);

(statearr_32167_32178[(1)] = (2));


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
});})(c__24578__auto___32172,out))
;
return ((function (switch__23615__auto__,c__24578__auto___32172,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto____0 = (function (){
var statearr_32168 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32168[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto__);

(statearr_32168[(1)] = (1));

return statearr_32168;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto____1 = (function (state_32157){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_32157);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e32169){if((e32169 instanceof Object)){
var ex__23619__auto__ = e32169;
var statearr_32170_32179 = state_32157;
(statearr_32170_32179[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32180 = state_32157;
state_32157 = G__32180;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto__ = function(state_32157){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto____1.call(this,state_32157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___32172,out))
})();
var state__24580__auto__ = (function (){var statearr_32171 = f__24579__auto__.call(null);
(statearr_32171[(6)] = c__24578__auto___32172);

return statearr_32171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___32172,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32181,opts){
var map__32182 = p__32181;
var map__32182__$1 = (((((!((map__32182 == null))))?(((((map__32182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32182.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32182):map__32182);
var eval_body = cljs.core.get.call(null,map__32182__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32182__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32184){var e = e32184;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32185_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32185_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32186){
var vec__32187 = p__32186;
var k = cljs.core.nth.call(null,vec__32187,(0),null);
var v = cljs.core.nth.call(null,vec__32187,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32190){
var vec__32191 = p__32190;
var k = cljs.core.nth.call(null,vec__32191,(0),null);
var v = cljs.core.nth.call(null,vec__32191,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32197,p__32198){
var map__32199 = p__32197;
var map__32199__$1 = (((((!((map__32199 == null))))?(((((map__32199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32199):map__32199);
var opts = map__32199__$1;
var before_jsload = cljs.core.get.call(null,map__32199__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32199__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32199__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32200 = p__32198;
var map__32200__$1 = (((((!((map__32200 == null))))?(((((map__32200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32200):map__32200);
var msg = map__32200__$1;
var files = cljs.core.get.call(null,map__32200__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32200__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32200__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32354){
var state_val_32355 = (state_32354[(1)]);
if((state_val_32355 === (7))){
var inst_32214 = (state_32354[(7)]);
var inst_32216 = (state_32354[(8)]);
var inst_32217 = (state_32354[(9)]);
var inst_32215 = (state_32354[(10)]);
var inst_32222 = cljs.core._nth.call(null,inst_32215,inst_32217);
var inst_32223 = figwheel.client.file_reloading.eval_body.call(null,inst_32222,opts);
var inst_32224 = (inst_32217 + (1));
var tmp32356 = inst_32214;
var tmp32357 = inst_32216;
var tmp32358 = inst_32215;
var inst_32214__$1 = tmp32356;
var inst_32215__$1 = tmp32358;
var inst_32216__$1 = tmp32357;
var inst_32217__$1 = inst_32224;
var state_32354__$1 = (function (){var statearr_32359 = state_32354;
(statearr_32359[(7)] = inst_32214__$1);

(statearr_32359[(8)] = inst_32216__$1);

(statearr_32359[(9)] = inst_32217__$1);

(statearr_32359[(10)] = inst_32215__$1);

(statearr_32359[(11)] = inst_32223);

return statearr_32359;
})();
var statearr_32360_32443 = state_32354__$1;
(statearr_32360_32443[(2)] = null);

(statearr_32360_32443[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (20))){
var inst_32257 = (state_32354[(12)]);
var inst_32265 = figwheel.client.file_reloading.sort_files.call(null,inst_32257);
var state_32354__$1 = state_32354;
var statearr_32361_32444 = state_32354__$1;
(statearr_32361_32444[(2)] = inst_32265);

(statearr_32361_32444[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (27))){
var state_32354__$1 = state_32354;
var statearr_32362_32445 = state_32354__$1;
(statearr_32362_32445[(2)] = null);

(statearr_32362_32445[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (1))){
var inst_32206 = (state_32354[(13)]);
var inst_32203 = before_jsload.call(null,files);
var inst_32204 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32205 = (function (){return ((function (inst_32206,inst_32203,inst_32204,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32194_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32194_SHARP_);
});
;})(inst_32206,inst_32203,inst_32204,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32206__$1 = cljs.core.filter.call(null,inst_32205,files);
var inst_32207 = cljs.core.not_empty.call(null,inst_32206__$1);
var state_32354__$1 = (function (){var statearr_32363 = state_32354;
(statearr_32363[(14)] = inst_32204);

(statearr_32363[(13)] = inst_32206__$1);

(statearr_32363[(15)] = inst_32203);

return statearr_32363;
})();
if(cljs.core.truth_(inst_32207)){
var statearr_32364_32446 = state_32354__$1;
(statearr_32364_32446[(1)] = (2));

} else {
var statearr_32365_32447 = state_32354__$1;
(statearr_32365_32447[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (24))){
var state_32354__$1 = state_32354;
var statearr_32366_32448 = state_32354__$1;
(statearr_32366_32448[(2)] = null);

(statearr_32366_32448[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (39))){
var inst_32307 = (state_32354[(16)]);
var state_32354__$1 = state_32354;
var statearr_32367_32449 = state_32354__$1;
(statearr_32367_32449[(2)] = inst_32307);

(statearr_32367_32449[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (46))){
var inst_32349 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32368_32450 = state_32354__$1;
(statearr_32368_32450[(2)] = inst_32349);

(statearr_32368_32450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (4))){
var inst_32251 = (state_32354[(2)]);
var inst_32252 = cljs.core.List.EMPTY;
var inst_32253 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32252);
var inst_32254 = (function (){return ((function (inst_32251,inst_32252,inst_32253,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32195_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32195_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32195_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__32195_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_32251,inst_32252,inst_32253,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32255 = cljs.core.filter.call(null,inst_32254,files);
var inst_32256 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32257 = cljs.core.concat.call(null,inst_32255,inst_32256);
var state_32354__$1 = (function (){var statearr_32369 = state_32354;
(statearr_32369[(17)] = inst_32253);

(statearr_32369[(18)] = inst_32251);

(statearr_32369[(12)] = inst_32257);

return statearr_32369;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32370_32451 = state_32354__$1;
(statearr_32370_32451[(1)] = (16));

} else {
var statearr_32371_32452 = state_32354__$1;
(statearr_32371_32452[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (15))){
var inst_32241 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32372_32453 = state_32354__$1;
(statearr_32372_32453[(2)] = inst_32241);

(statearr_32372_32453[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (21))){
var inst_32267 = (state_32354[(19)]);
var inst_32267__$1 = (state_32354[(2)]);
var inst_32268 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32267__$1);
var state_32354__$1 = (function (){var statearr_32373 = state_32354;
(statearr_32373[(19)] = inst_32267__$1);

return statearr_32373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32354__$1,(22),inst_32268);
} else {
if((state_val_32355 === (31))){
var inst_32352 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32354__$1,inst_32352);
} else {
if((state_val_32355 === (32))){
var inst_32307 = (state_32354[(16)]);
var inst_32312 = inst_32307.cljs$lang$protocol_mask$partition0$;
var inst_32313 = (inst_32312 & (64));
var inst_32314 = inst_32307.cljs$core$ISeq$;
var inst_32315 = (cljs.core.PROTOCOL_SENTINEL === inst_32314);
var inst_32316 = ((inst_32313) || (inst_32315));
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32316)){
var statearr_32374_32454 = state_32354__$1;
(statearr_32374_32454[(1)] = (35));

} else {
var statearr_32375_32455 = state_32354__$1;
(statearr_32375_32455[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (40))){
var inst_32329 = (state_32354[(20)]);
var inst_32328 = (state_32354[(2)]);
var inst_32329__$1 = cljs.core.get.call(null,inst_32328,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32330 = cljs.core.get.call(null,inst_32328,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32331 = cljs.core.not_empty.call(null,inst_32329__$1);
var state_32354__$1 = (function (){var statearr_32376 = state_32354;
(statearr_32376[(21)] = inst_32330);

(statearr_32376[(20)] = inst_32329__$1);

return statearr_32376;
})();
if(cljs.core.truth_(inst_32331)){
var statearr_32377_32456 = state_32354__$1;
(statearr_32377_32456[(1)] = (41));

} else {
var statearr_32378_32457 = state_32354__$1;
(statearr_32378_32457[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (33))){
var state_32354__$1 = state_32354;
var statearr_32379_32458 = state_32354__$1;
(statearr_32379_32458[(2)] = false);

(statearr_32379_32458[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (13))){
var inst_32227 = (state_32354[(22)]);
var inst_32231 = cljs.core.chunk_first.call(null,inst_32227);
var inst_32232 = cljs.core.chunk_rest.call(null,inst_32227);
var inst_32233 = cljs.core.count.call(null,inst_32231);
var inst_32214 = inst_32232;
var inst_32215 = inst_32231;
var inst_32216 = inst_32233;
var inst_32217 = (0);
var state_32354__$1 = (function (){var statearr_32380 = state_32354;
(statearr_32380[(7)] = inst_32214);

(statearr_32380[(8)] = inst_32216);

(statearr_32380[(9)] = inst_32217);

(statearr_32380[(10)] = inst_32215);

return statearr_32380;
})();
var statearr_32381_32459 = state_32354__$1;
(statearr_32381_32459[(2)] = null);

(statearr_32381_32459[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (22))){
var inst_32271 = (state_32354[(23)]);
var inst_32270 = (state_32354[(24)]);
var inst_32267 = (state_32354[(19)]);
var inst_32275 = (state_32354[(25)]);
var inst_32270__$1 = (state_32354[(2)]);
var inst_32271__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32270__$1);
var inst_32272 = (function (){var all_files = inst_32267;
var res_SINGLEQUOTE_ = inst_32270__$1;
var res = inst_32271__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32271,inst_32270,inst_32267,inst_32275,inst_32270__$1,inst_32271__$1,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32196_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32196_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32271,inst_32270,inst_32267,inst_32275,inst_32270__$1,inst_32271__$1,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32273 = cljs.core.filter.call(null,inst_32272,inst_32270__$1);
var inst_32274 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32275__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32274);
var inst_32276 = cljs.core.not_empty.call(null,inst_32275__$1);
var state_32354__$1 = (function (){var statearr_32382 = state_32354;
(statearr_32382[(23)] = inst_32271__$1);

(statearr_32382[(24)] = inst_32270__$1);

(statearr_32382[(25)] = inst_32275__$1);

(statearr_32382[(26)] = inst_32273);

return statearr_32382;
})();
if(cljs.core.truth_(inst_32276)){
var statearr_32383_32460 = state_32354__$1;
(statearr_32383_32460[(1)] = (23));

} else {
var statearr_32384_32461 = state_32354__$1;
(statearr_32384_32461[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (36))){
var state_32354__$1 = state_32354;
var statearr_32385_32462 = state_32354__$1;
(statearr_32385_32462[(2)] = false);

(statearr_32385_32462[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (41))){
var inst_32329 = (state_32354[(20)]);
var inst_32333 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32334 = cljs.core.map.call(null,inst_32333,inst_32329);
var inst_32335 = cljs.core.pr_str.call(null,inst_32334);
var inst_32336 = ["figwheel-no-load meta-data: ",inst_32335].join('');
var inst_32337 = figwheel.client.utils.log.call(null,inst_32336);
var state_32354__$1 = state_32354;
var statearr_32386_32463 = state_32354__$1;
(statearr_32386_32463[(2)] = inst_32337);

(statearr_32386_32463[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (43))){
var inst_32330 = (state_32354[(21)]);
var inst_32340 = (state_32354[(2)]);
var inst_32341 = cljs.core.not_empty.call(null,inst_32330);
var state_32354__$1 = (function (){var statearr_32387 = state_32354;
(statearr_32387[(27)] = inst_32340);

return statearr_32387;
})();
if(cljs.core.truth_(inst_32341)){
var statearr_32388_32464 = state_32354__$1;
(statearr_32388_32464[(1)] = (44));

} else {
var statearr_32389_32465 = state_32354__$1;
(statearr_32389_32465[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (29))){
var inst_32271 = (state_32354[(23)]);
var inst_32270 = (state_32354[(24)]);
var inst_32267 = (state_32354[(19)]);
var inst_32275 = (state_32354[(25)]);
var inst_32273 = (state_32354[(26)]);
var inst_32307 = (state_32354[(16)]);
var inst_32303 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32306 = (function (){var all_files = inst_32267;
var res_SINGLEQUOTE_ = inst_32270;
var res = inst_32271;
var files_not_loaded = inst_32273;
var dependencies_that_loaded = inst_32275;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32307,inst_32303,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32305){
var map__32390 = p__32305;
var map__32390__$1 = (((((!((map__32390 == null))))?(((((map__32390.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32390.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32390):map__32390);
var namespace = cljs.core.get.call(null,map__32390__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32307,inst_32303,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32307__$1 = cljs.core.group_by.call(null,inst_32306,inst_32273);
var inst_32309 = (inst_32307__$1 == null);
var inst_32310 = cljs.core.not.call(null,inst_32309);
var state_32354__$1 = (function (){var statearr_32392 = state_32354;
(statearr_32392[(28)] = inst_32303);

(statearr_32392[(16)] = inst_32307__$1);

return statearr_32392;
})();
if(inst_32310){
var statearr_32393_32466 = state_32354__$1;
(statearr_32393_32466[(1)] = (32));

} else {
var statearr_32394_32467 = state_32354__$1;
(statearr_32394_32467[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (44))){
var inst_32330 = (state_32354[(21)]);
var inst_32343 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32330);
var inst_32344 = cljs.core.pr_str.call(null,inst_32343);
var inst_32345 = ["not required: ",inst_32344].join('');
var inst_32346 = figwheel.client.utils.log.call(null,inst_32345);
var state_32354__$1 = state_32354;
var statearr_32395_32468 = state_32354__$1;
(statearr_32395_32468[(2)] = inst_32346);

(statearr_32395_32468[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (6))){
var inst_32248 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32396_32469 = state_32354__$1;
(statearr_32396_32469[(2)] = inst_32248);

(statearr_32396_32469[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (28))){
var inst_32273 = (state_32354[(26)]);
var inst_32300 = (state_32354[(2)]);
var inst_32301 = cljs.core.not_empty.call(null,inst_32273);
var state_32354__$1 = (function (){var statearr_32397 = state_32354;
(statearr_32397[(29)] = inst_32300);

return statearr_32397;
})();
if(cljs.core.truth_(inst_32301)){
var statearr_32398_32470 = state_32354__$1;
(statearr_32398_32470[(1)] = (29));

} else {
var statearr_32399_32471 = state_32354__$1;
(statearr_32399_32471[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (25))){
var inst_32271 = (state_32354[(23)]);
var inst_32287 = (state_32354[(2)]);
var inst_32288 = cljs.core.not_empty.call(null,inst_32271);
var state_32354__$1 = (function (){var statearr_32400 = state_32354;
(statearr_32400[(30)] = inst_32287);

return statearr_32400;
})();
if(cljs.core.truth_(inst_32288)){
var statearr_32401_32472 = state_32354__$1;
(statearr_32401_32472[(1)] = (26));

} else {
var statearr_32402_32473 = state_32354__$1;
(statearr_32402_32473[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (34))){
var inst_32323 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32323)){
var statearr_32403_32474 = state_32354__$1;
(statearr_32403_32474[(1)] = (38));

} else {
var statearr_32404_32475 = state_32354__$1;
(statearr_32404_32475[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (17))){
var state_32354__$1 = state_32354;
var statearr_32405_32476 = state_32354__$1;
(statearr_32405_32476[(2)] = recompile_dependents);

(statearr_32405_32476[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (3))){
var state_32354__$1 = state_32354;
var statearr_32406_32477 = state_32354__$1;
(statearr_32406_32477[(2)] = null);

(statearr_32406_32477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (12))){
var inst_32244 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32407_32478 = state_32354__$1;
(statearr_32407_32478[(2)] = inst_32244);

(statearr_32407_32478[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (2))){
var inst_32206 = (state_32354[(13)]);
var inst_32213 = cljs.core.seq.call(null,inst_32206);
var inst_32214 = inst_32213;
var inst_32215 = null;
var inst_32216 = (0);
var inst_32217 = (0);
var state_32354__$1 = (function (){var statearr_32408 = state_32354;
(statearr_32408[(7)] = inst_32214);

(statearr_32408[(8)] = inst_32216);

(statearr_32408[(9)] = inst_32217);

(statearr_32408[(10)] = inst_32215);

return statearr_32408;
})();
var statearr_32409_32479 = state_32354__$1;
(statearr_32409_32479[(2)] = null);

(statearr_32409_32479[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (23))){
var inst_32271 = (state_32354[(23)]);
var inst_32270 = (state_32354[(24)]);
var inst_32267 = (state_32354[(19)]);
var inst_32275 = (state_32354[(25)]);
var inst_32273 = (state_32354[(26)]);
var inst_32278 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32280 = (function (){var all_files = inst_32267;
var res_SINGLEQUOTE_ = inst_32270;
var res = inst_32271;
var files_not_loaded = inst_32273;
var dependencies_that_loaded = inst_32275;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32278,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32279){
var map__32410 = p__32279;
var map__32410__$1 = (((((!((map__32410 == null))))?(((((map__32410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32410):map__32410);
var request_url = cljs.core.get.call(null,map__32410__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32278,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32281 = cljs.core.reverse.call(null,inst_32275);
var inst_32282 = cljs.core.map.call(null,inst_32280,inst_32281);
var inst_32283 = cljs.core.pr_str.call(null,inst_32282);
var inst_32284 = figwheel.client.utils.log.call(null,inst_32283);
var state_32354__$1 = (function (){var statearr_32412 = state_32354;
(statearr_32412[(31)] = inst_32278);

return statearr_32412;
})();
var statearr_32413_32480 = state_32354__$1;
(statearr_32413_32480[(2)] = inst_32284);

(statearr_32413_32480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (35))){
var state_32354__$1 = state_32354;
var statearr_32414_32481 = state_32354__$1;
(statearr_32414_32481[(2)] = true);

(statearr_32414_32481[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (19))){
var inst_32257 = (state_32354[(12)]);
var inst_32263 = figwheel.client.file_reloading.expand_files.call(null,inst_32257);
var state_32354__$1 = state_32354;
var statearr_32415_32482 = state_32354__$1;
(statearr_32415_32482[(2)] = inst_32263);

(statearr_32415_32482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (11))){
var state_32354__$1 = state_32354;
var statearr_32416_32483 = state_32354__$1;
(statearr_32416_32483[(2)] = null);

(statearr_32416_32483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (9))){
var inst_32246 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32417_32484 = state_32354__$1;
(statearr_32417_32484[(2)] = inst_32246);

(statearr_32417_32484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (5))){
var inst_32216 = (state_32354[(8)]);
var inst_32217 = (state_32354[(9)]);
var inst_32219 = (inst_32217 < inst_32216);
var inst_32220 = inst_32219;
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32220)){
var statearr_32418_32485 = state_32354__$1;
(statearr_32418_32485[(1)] = (7));

} else {
var statearr_32419_32486 = state_32354__$1;
(statearr_32419_32486[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (14))){
var inst_32227 = (state_32354[(22)]);
var inst_32236 = cljs.core.first.call(null,inst_32227);
var inst_32237 = figwheel.client.file_reloading.eval_body.call(null,inst_32236,opts);
var inst_32238 = cljs.core.next.call(null,inst_32227);
var inst_32214 = inst_32238;
var inst_32215 = null;
var inst_32216 = (0);
var inst_32217 = (0);
var state_32354__$1 = (function (){var statearr_32420 = state_32354;
(statearr_32420[(7)] = inst_32214);

(statearr_32420[(8)] = inst_32216);

(statearr_32420[(9)] = inst_32217);

(statearr_32420[(32)] = inst_32237);

(statearr_32420[(10)] = inst_32215);

return statearr_32420;
})();
var statearr_32421_32487 = state_32354__$1;
(statearr_32421_32487[(2)] = null);

(statearr_32421_32487[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (45))){
var state_32354__$1 = state_32354;
var statearr_32422_32488 = state_32354__$1;
(statearr_32422_32488[(2)] = null);

(statearr_32422_32488[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (26))){
var inst_32271 = (state_32354[(23)]);
var inst_32270 = (state_32354[(24)]);
var inst_32267 = (state_32354[(19)]);
var inst_32275 = (state_32354[(25)]);
var inst_32273 = (state_32354[(26)]);
var inst_32290 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32292 = (function (){var all_files = inst_32267;
var res_SINGLEQUOTE_ = inst_32270;
var res = inst_32271;
var files_not_loaded = inst_32273;
var dependencies_that_loaded = inst_32275;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32290,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32291){
var map__32423 = p__32291;
var map__32423__$1 = (((((!((map__32423 == null))))?(((((map__32423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32423):map__32423);
var namespace = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32423__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32290,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32293 = cljs.core.map.call(null,inst_32292,inst_32271);
var inst_32294 = cljs.core.pr_str.call(null,inst_32293);
var inst_32295 = figwheel.client.utils.log.call(null,inst_32294);
var inst_32296 = (function (){var all_files = inst_32267;
var res_SINGLEQUOTE_ = inst_32270;
var res = inst_32271;
var files_not_loaded = inst_32273;
var dependencies_that_loaded = inst_32275;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32290,inst_32292,inst_32293,inst_32294,inst_32295,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32271,inst_32270,inst_32267,inst_32275,inst_32273,inst_32290,inst_32292,inst_32293,inst_32294,inst_32295,state_val_32355,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32297 = setTimeout(inst_32296,(10));
var state_32354__$1 = (function (){var statearr_32425 = state_32354;
(statearr_32425[(33)] = inst_32295);

(statearr_32425[(34)] = inst_32290);

return statearr_32425;
})();
var statearr_32426_32489 = state_32354__$1;
(statearr_32426_32489[(2)] = inst_32297);

(statearr_32426_32489[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (16))){
var state_32354__$1 = state_32354;
var statearr_32427_32490 = state_32354__$1;
(statearr_32427_32490[(2)] = reload_dependents);

(statearr_32427_32490[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (38))){
var inst_32307 = (state_32354[(16)]);
var inst_32325 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32307);
var state_32354__$1 = state_32354;
var statearr_32428_32491 = state_32354__$1;
(statearr_32428_32491[(2)] = inst_32325);

(statearr_32428_32491[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (30))){
var state_32354__$1 = state_32354;
var statearr_32429_32492 = state_32354__$1;
(statearr_32429_32492[(2)] = null);

(statearr_32429_32492[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (10))){
var inst_32227 = (state_32354[(22)]);
var inst_32229 = cljs.core.chunked_seq_QMARK_.call(null,inst_32227);
var state_32354__$1 = state_32354;
if(inst_32229){
var statearr_32430_32493 = state_32354__$1;
(statearr_32430_32493[(1)] = (13));

} else {
var statearr_32431_32494 = state_32354__$1;
(statearr_32431_32494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (18))){
var inst_32261 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
if(cljs.core.truth_(inst_32261)){
var statearr_32432_32495 = state_32354__$1;
(statearr_32432_32495[(1)] = (19));

} else {
var statearr_32433_32496 = state_32354__$1;
(statearr_32433_32496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (42))){
var state_32354__$1 = state_32354;
var statearr_32434_32497 = state_32354__$1;
(statearr_32434_32497[(2)] = null);

(statearr_32434_32497[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (37))){
var inst_32320 = (state_32354[(2)]);
var state_32354__$1 = state_32354;
var statearr_32435_32498 = state_32354__$1;
(statearr_32435_32498[(2)] = inst_32320);

(statearr_32435_32498[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32355 === (8))){
var inst_32214 = (state_32354[(7)]);
var inst_32227 = (state_32354[(22)]);
var inst_32227__$1 = cljs.core.seq.call(null,inst_32214);
var state_32354__$1 = (function (){var statearr_32436 = state_32354;
(statearr_32436[(22)] = inst_32227__$1);

return statearr_32436;
})();
if(inst_32227__$1){
var statearr_32437_32499 = state_32354__$1;
(statearr_32437_32499[(1)] = (10));

} else {
var statearr_32438_32500 = state_32354__$1;
(statearr_32438_32500[(1)] = (11));

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
});})(c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__23615__auto__,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto____0 = (function (){
var statearr_32439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32439[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto__);

(statearr_32439[(1)] = (1));

return statearr_32439;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto____1 = (function (state_32354){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_32354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e32440){if((e32440 instanceof Object)){
var ex__23619__auto__ = e32440;
var statearr_32441_32501 = state_32354;
(statearr_32441_32501[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32502 = state_32354;
state_32354 = G__32502;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto__ = function(state_32354){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto____1.call(this,state_32354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__24580__auto__ = (function (){var statearr_32442 = f__24579__auto__.call(null);
(statearr_32442[(6)] = c__24578__auto__);

return statearr_32442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__,map__32199,map__32199__$1,opts,before_jsload,on_jsload,reload_dependents,map__32200,map__32200__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__24578__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32505,link){
var map__32506 = p__32505;
var map__32506__$1 = (((((!((map__32506 == null))))?(((((map__32506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32506.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32506):map__32506);
var file = cljs.core.get.call(null,map__32506__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__32506,map__32506__$1,file){
return (function (p1__32503_SHARP_,p2__32504_SHARP_){
if(cljs.core._EQ_.call(null,p1__32503_SHARP_,p2__32504_SHARP_)){
return p1__32503_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__32506,map__32506__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32509){
var map__32510 = p__32509;
var map__32510__$1 = (((((!((map__32510 == null))))?(((((map__32510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32510.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32510):map__32510);
var match_length = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32508_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32508_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32512_SHARP_,p2__32513_SHARP_){
return cljs.core.assoc.call(null,p1__32512_SHARP_,cljs.core.get.call(null,p2__32513_SHARP_,key),p2__32513_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_32514 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_32514);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_32514);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32515,p__32516){
var map__32517 = p__32515;
var map__32517__$1 = (((((!((map__32517 == null))))?(((((map__32517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32517):map__32517);
var on_cssload = cljs.core.get.call(null,map__32517__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__32518 = p__32516;
var map__32518__$1 = (((((!((map__32518 == null))))?(((((map__32518.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32518.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32518):map__32518);
var files_msg = map__32518__$1;
var files = cljs.core.get.call(null,map__32518__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1651840304984
