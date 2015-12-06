// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16917__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16917__auto__){
return or__16917__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16917__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25838_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25838_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
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
var seq__25843 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25844 = null;
var count__25845 = (0);
var i__25846 = (0);
while(true){
if((i__25846 < count__25845)){
var n = cljs.core._nth.call(null,chunk__25844,i__25846);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25847 = seq__25843;
var G__25848 = chunk__25844;
var G__25849 = count__25845;
var G__25850 = (i__25846 + (1));
seq__25843 = G__25847;
chunk__25844 = G__25848;
count__25845 = G__25849;
i__25846 = G__25850;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25843);
if(temp__4425__auto__){
var seq__25843__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25843__$1)){
var c__17720__auto__ = cljs.core.chunk_first.call(null,seq__25843__$1);
var G__25851 = cljs.core.chunk_rest.call(null,seq__25843__$1);
var G__25852 = c__17720__auto__;
var G__25853 = cljs.core.count.call(null,c__17720__auto__);
var G__25854 = (0);
seq__25843 = G__25851;
chunk__25844 = G__25852;
count__25845 = G__25853;
i__25846 = G__25854;
continue;
} else {
var n = cljs.core.first.call(null,seq__25843__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25855 = cljs.core.next.call(null,seq__25843__$1);
var G__25856 = null;
var G__25857 = (0);
var G__25858 = (0);
seq__25843 = G__25855;
chunk__25844 = G__25856;
count__25845 = G__25857;
i__25846 = G__25858;
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

var seq__25897_25904 = cljs.core.seq.call(null,deps);
var chunk__25898_25905 = null;
var count__25899_25906 = (0);
var i__25900_25907 = (0);
while(true){
if((i__25900_25907 < count__25899_25906)){
var dep_25908 = cljs.core._nth.call(null,chunk__25898_25905,i__25900_25907);
topo_sort_helper_STAR_.call(null,dep_25908,(depth + (1)),state);

var G__25909 = seq__25897_25904;
var G__25910 = chunk__25898_25905;
var G__25911 = count__25899_25906;
var G__25912 = (i__25900_25907 + (1));
seq__25897_25904 = G__25909;
chunk__25898_25905 = G__25910;
count__25899_25906 = G__25911;
i__25900_25907 = G__25912;
continue;
} else {
var temp__4425__auto___25913 = cljs.core.seq.call(null,seq__25897_25904);
if(temp__4425__auto___25913){
var seq__25897_25914__$1 = temp__4425__auto___25913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25897_25914__$1)){
var c__17720__auto___25915 = cljs.core.chunk_first.call(null,seq__25897_25914__$1);
var G__25916 = cljs.core.chunk_rest.call(null,seq__25897_25914__$1);
var G__25917 = c__17720__auto___25915;
var G__25918 = cljs.core.count.call(null,c__17720__auto___25915);
var G__25919 = (0);
seq__25897_25904 = G__25916;
chunk__25898_25905 = G__25917;
count__25899_25906 = G__25918;
i__25900_25907 = G__25919;
continue;
} else {
var dep_25920 = cljs.core.first.call(null,seq__25897_25914__$1);
topo_sort_helper_STAR_.call(null,dep_25920,(depth + (1)),state);

var G__25921 = cljs.core.next.call(null,seq__25897_25914__$1);
var G__25922 = null;
var G__25923 = (0);
var G__25924 = (0);
seq__25897_25904 = G__25921;
chunk__25898_25905 = G__25922;
count__25899_25906 = G__25923;
i__25900_25907 = G__25924;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25901){
var vec__25903 = p__25901;
var x = cljs.core.nth.call(null,vec__25903,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25903,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25903,x,xs,get_deps__$1){
return (function (p1__25859_SHARP_){
return clojure.set.difference.call(null,p1__25859_SHARP_,x);
});})(vec__25903,x,xs,get_deps__$1))
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
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25937 = cljs.core.seq.call(null,provides);
var chunk__25938 = null;
var count__25939 = (0);
var i__25940 = (0);
while(true){
if((i__25940 < count__25939)){
var prov = cljs.core._nth.call(null,chunk__25938,i__25940);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25941_25949 = cljs.core.seq.call(null,requires);
var chunk__25942_25950 = null;
var count__25943_25951 = (0);
var i__25944_25952 = (0);
while(true){
if((i__25944_25952 < count__25943_25951)){
var req_25953 = cljs.core._nth.call(null,chunk__25942_25950,i__25944_25952);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25953,prov);

var G__25954 = seq__25941_25949;
var G__25955 = chunk__25942_25950;
var G__25956 = count__25943_25951;
var G__25957 = (i__25944_25952 + (1));
seq__25941_25949 = G__25954;
chunk__25942_25950 = G__25955;
count__25943_25951 = G__25956;
i__25944_25952 = G__25957;
continue;
} else {
var temp__4425__auto___25958 = cljs.core.seq.call(null,seq__25941_25949);
if(temp__4425__auto___25958){
var seq__25941_25959__$1 = temp__4425__auto___25958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25941_25959__$1)){
var c__17720__auto___25960 = cljs.core.chunk_first.call(null,seq__25941_25959__$1);
var G__25961 = cljs.core.chunk_rest.call(null,seq__25941_25959__$1);
var G__25962 = c__17720__auto___25960;
var G__25963 = cljs.core.count.call(null,c__17720__auto___25960);
var G__25964 = (0);
seq__25941_25949 = G__25961;
chunk__25942_25950 = G__25962;
count__25943_25951 = G__25963;
i__25944_25952 = G__25964;
continue;
} else {
var req_25965 = cljs.core.first.call(null,seq__25941_25959__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25965,prov);

var G__25966 = cljs.core.next.call(null,seq__25941_25959__$1);
var G__25967 = null;
var G__25968 = (0);
var G__25969 = (0);
seq__25941_25949 = G__25966;
chunk__25942_25950 = G__25967;
count__25943_25951 = G__25968;
i__25944_25952 = G__25969;
continue;
}
} else {
}
}
break;
}

var G__25970 = seq__25937;
var G__25971 = chunk__25938;
var G__25972 = count__25939;
var G__25973 = (i__25940 + (1));
seq__25937 = G__25970;
chunk__25938 = G__25971;
count__25939 = G__25972;
i__25940 = G__25973;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25937);
if(temp__4425__auto__){
var seq__25937__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25937__$1)){
var c__17720__auto__ = cljs.core.chunk_first.call(null,seq__25937__$1);
var G__25974 = cljs.core.chunk_rest.call(null,seq__25937__$1);
var G__25975 = c__17720__auto__;
var G__25976 = cljs.core.count.call(null,c__17720__auto__);
var G__25977 = (0);
seq__25937 = G__25974;
chunk__25938 = G__25975;
count__25939 = G__25976;
i__25940 = G__25977;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25937__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25945_25978 = cljs.core.seq.call(null,requires);
var chunk__25946_25979 = null;
var count__25947_25980 = (0);
var i__25948_25981 = (0);
while(true){
if((i__25948_25981 < count__25947_25980)){
var req_25982 = cljs.core._nth.call(null,chunk__25946_25979,i__25948_25981);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25982,prov);

var G__25983 = seq__25945_25978;
var G__25984 = chunk__25946_25979;
var G__25985 = count__25947_25980;
var G__25986 = (i__25948_25981 + (1));
seq__25945_25978 = G__25983;
chunk__25946_25979 = G__25984;
count__25947_25980 = G__25985;
i__25948_25981 = G__25986;
continue;
} else {
var temp__4425__auto___25987__$1 = cljs.core.seq.call(null,seq__25945_25978);
if(temp__4425__auto___25987__$1){
var seq__25945_25988__$1 = temp__4425__auto___25987__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25945_25988__$1)){
var c__17720__auto___25989 = cljs.core.chunk_first.call(null,seq__25945_25988__$1);
var G__25990 = cljs.core.chunk_rest.call(null,seq__25945_25988__$1);
var G__25991 = c__17720__auto___25989;
var G__25992 = cljs.core.count.call(null,c__17720__auto___25989);
var G__25993 = (0);
seq__25945_25978 = G__25990;
chunk__25946_25979 = G__25991;
count__25947_25980 = G__25992;
i__25948_25981 = G__25993;
continue;
} else {
var req_25994 = cljs.core.first.call(null,seq__25945_25988__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25994,prov);

var G__25995 = cljs.core.next.call(null,seq__25945_25988__$1);
var G__25996 = null;
var G__25997 = (0);
var G__25998 = (0);
seq__25945_25978 = G__25995;
chunk__25946_25979 = G__25996;
count__25947_25980 = G__25997;
i__25948_25981 = G__25998;
continue;
}
} else {
}
}
break;
}

var G__25999 = cljs.core.next.call(null,seq__25937__$1);
var G__26000 = null;
var G__26001 = (0);
var G__26002 = (0);
seq__25937 = G__25999;
chunk__25938 = G__26000;
count__25939 = G__26001;
i__25940 = G__26002;
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
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__26007_26011 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26008_26012 = null;
var count__26009_26013 = (0);
var i__26010_26014 = (0);
while(true){
if((i__26010_26014 < count__26009_26013)){
var ns_26015 = cljs.core._nth.call(null,chunk__26008_26012,i__26010_26014);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26015);

var G__26016 = seq__26007_26011;
var G__26017 = chunk__26008_26012;
var G__26018 = count__26009_26013;
var G__26019 = (i__26010_26014 + (1));
seq__26007_26011 = G__26016;
chunk__26008_26012 = G__26017;
count__26009_26013 = G__26018;
i__26010_26014 = G__26019;
continue;
} else {
var temp__4425__auto___26020 = cljs.core.seq.call(null,seq__26007_26011);
if(temp__4425__auto___26020){
var seq__26007_26021__$1 = temp__4425__auto___26020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26007_26021__$1)){
var c__17720__auto___26022 = cljs.core.chunk_first.call(null,seq__26007_26021__$1);
var G__26023 = cljs.core.chunk_rest.call(null,seq__26007_26021__$1);
var G__26024 = c__17720__auto___26022;
var G__26025 = cljs.core.count.call(null,c__17720__auto___26022);
var G__26026 = (0);
seq__26007_26011 = G__26023;
chunk__26008_26012 = G__26024;
count__26009_26013 = G__26025;
i__26010_26014 = G__26026;
continue;
} else {
var ns_26027 = cljs.core.first.call(null,seq__26007_26021__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26027);

var G__26028 = cljs.core.next.call(null,seq__26007_26021__$1);
var G__26029 = null;
var G__26030 = (0);
var G__26031 = (0);
seq__26007_26011 = G__26028;
chunk__26008_26012 = G__26029;
count__26009_26013 = G__26030;
i__26010_26014 = G__26031;
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
goog.require_figwheel_backup_ = (function (){var or__16917__auto__ = goog.require__;
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
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
var G__26032__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26033__i = 0, G__26033__a = new Array(arguments.length -  0);
while (G__26033__i < G__26033__a.length) {G__26033__a[G__26033__i] = arguments[G__26033__i + 0]; ++G__26033__i;}
  args = new cljs.core.IndexedSeq(G__26033__a,0);
} 
return G__26032__delegate.call(this,args);};
G__26032.cljs$lang$maxFixedArity = 0;
G__26032.cljs$lang$applyTo = (function (arglist__26034){
var args = cljs.core.seq(arglist__26034);
return G__26032__delegate(args);
});
G__26032.cljs$core$IFn$_invoke$arity$variadic = G__26032__delegate;
return G__26032;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26036 = cljs.core._EQ_;
var expr__26037 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26036.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26037))){
var path_parts = ((function (pred__26036,expr__26037){
return (function (p1__26035_SHARP_){
return clojure.string.split.call(null,p1__26035_SHARP_,/[\/\\]/);
});})(pred__26036,expr__26037))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26036,expr__26037){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26039){if((e26039 instanceof Error)){
var e = e26039;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26039;

}
}})());
});
;})(path_parts,sep,root,pred__26036,expr__26037))
} else {
if(cljs.core.truth_(pred__26036.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26037))){
return ((function (pred__26036,expr__26037){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26036,expr__26037){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26036,expr__26037))
);

return deferred.addErrback(((function (deferred,pred__26036,expr__26037){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26036,expr__26037))
);
});
;})(pred__26036,expr__26037))
} else {
return ((function (pred__26036,expr__26037){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26036,expr__26037))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26040,callback){
var map__26043 = p__26040;
var map__26043__$1 = ((((!((map__26043 == null)))?((((map__26043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26043):map__26043);
var file_msg = map__26043__$1;
var request_url = cljs.core.get.call(null,map__26043__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26043,map__26043__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26043,map__26043__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__){
return (function (state_26067){
var state_val_26068 = (state_26067[(1)]);
if((state_val_26068 === (7))){
var inst_26063 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
var statearr_26069_26089 = state_26067__$1;
(statearr_26069_26089[(2)] = inst_26063);

(statearr_26069_26089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (1))){
var state_26067__$1 = state_26067;
var statearr_26070_26090 = state_26067__$1;
(statearr_26070_26090[(2)] = null);

(statearr_26070_26090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (4))){
var inst_26047 = (state_26067[(7)]);
var inst_26047__$1 = (state_26067[(2)]);
var state_26067__$1 = (function (){var statearr_26071 = state_26067;
(statearr_26071[(7)] = inst_26047__$1);

return statearr_26071;
})();
if(cljs.core.truth_(inst_26047__$1)){
var statearr_26072_26091 = state_26067__$1;
(statearr_26072_26091[(1)] = (5));

} else {
var statearr_26073_26092 = state_26067__$1;
(statearr_26073_26092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (6))){
var state_26067__$1 = state_26067;
var statearr_26074_26093 = state_26067__$1;
(statearr_26074_26093[(2)] = null);

(statearr_26074_26093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (3))){
var inst_26065 = (state_26067[(2)]);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26067__$1,inst_26065);
} else {
if((state_val_26068 === (2))){
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26067__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26068 === (11))){
var inst_26059 = (state_26067[(2)]);
var state_26067__$1 = (function (){var statearr_26075 = state_26067;
(statearr_26075[(8)] = inst_26059);

return statearr_26075;
})();
var statearr_26076_26094 = state_26067__$1;
(statearr_26076_26094[(2)] = null);

(statearr_26076_26094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (9))){
var inst_26051 = (state_26067[(9)]);
var inst_26053 = (state_26067[(10)]);
var inst_26055 = inst_26053.call(null,inst_26051);
var state_26067__$1 = state_26067;
var statearr_26077_26095 = state_26067__$1;
(statearr_26077_26095[(2)] = inst_26055);

(statearr_26077_26095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (5))){
var inst_26047 = (state_26067[(7)]);
var inst_26049 = figwheel.client.file_reloading.blocking_load.call(null,inst_26047);
var state_26067__$1 = state_26067;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26067__$1,(8),inst_26049);
} else {
if((state_val_26068 === (10))){
var inst_26051 = (state_26067[(9)]);
var inst_26057 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26051);
var state_26067__$1 = state_26067;
var statearr_26078_26096 = state_26067__$1;
(statearr_26078_26096[(2)] = inst_26057);

(statearr_26078_26096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26068 === (8))){
var inst_26053 = (state_26067[(10)]);
var inst_26047 = (state_26067[(7)]);
var inst_26051 = (state_26067[(2)]);
var inst_26052 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26053__$1 = cljs.core.get.call(null,inst_26052,inst_26047);
var state_26067__$1 = (function (){var statearr_26079 = state_26067;
(statearr_26079[(9)] = inst_26051);

(statearr_26079[(10)] = inst_26053__$1);

return statearr_26079;
})();
if(cljs.core.truth_(inst_26053__$1)){
var statearr_26080_26097 = state_26067__$1;
(statearr_26080_26097[(1)] = (9));

} else {
var statearr_26081_26098 = state_26067__$1;
(statearr_26081_26098[(1)] = (10));

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
});})(c__19457__auto__))
;
return ((function (switch__19345__auto__,c__19457__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19346__auto__ = null;
var figwheel$client$file_reloading$state_machine__19346__auto____0 = (function (){
var statearr_26085 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26085[(0)] = figwheel$client$file_reloading$state_machine__19346__auto__);

(statearr_26085[(1)] = (1));

return statearr_26085;
});
var figwheel$client$file_reloading$state_machine__19346__auto____1 = (function (state_26067){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_26067);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e26086){if((e26086 instanceof Object)){
var ex__19349__auto__ = e26086;
var statearr_26087_26099 = state_26067;
(statearr_26087_26099[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26067);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26086;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26100 = state_26067;
state_26067 = G__26100;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19346__auto__ = function(state_26067){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19346__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19346__auto____1.call(this,state_26067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19346__auto____0;
figwheel$client$file_reloading$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19346__auto____1;
return figwheel$client$file_reloading$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__))
})();
var state__19459__auto__ = (function (){var statearr_26088 = f__19458__auto__.call(null);
(statearr_26088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_26088;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__))
);

return c__19457__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26101,callback){
var map__26104 = p__26101;
var map__26104__$1 = ((((!((map__26104 == null)))?((((map__26104.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26104.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26104):map__26104);
var file_msg = map__26104__$1;
var namespace = cljs.core.get.call(null,map__26104__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26104,map__26104__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26104,map__26104__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26106){
var map__26109 = p__26106;
var map__26109__$1 = ((((!((map__26109 == null)))?((((map__26109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26109):map__26109);
var file_msg = map__26109__$1;
var namespace = cljs.core.get.call(null,map__26109__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16905__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16905__auto__){
var or__16917__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
var or__16917__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16917__auto____$1)){
return or__16917__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16905__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26111,callback){
var map__26114 = p__26111;
var map__26114__$1 = ((((!((map__26114 == null)))?((((map__26114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26114):map__26114);
var file_msg = map__26114__$1;
var request_url = cljs.core.get.call(null,map__26114__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26114__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

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
var c__19457__auto___26202 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___26202,out){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___26202,out){
return (function (state_26184){
var state_val_26185 = (state_26184[(1)]);
if((state_val_26185 === (1))){
var inst_26162 = cljs.core.nth.call(null,files,(0),null);
var inst_26163 = cljs.core.nthnext.call(null,files,(1));
var inst_26164 = files;
var state_26184__$1 = (function (){var statearr_26186 = state_26184;
(statearr_26186[(7)] = inst_26162);

(statearr_26186[(8)] = inst_26164);

(statearr_26186[(9)] = inst_26163);

return statearr_26186;
})();
var statearr_26187_26203 = state_26184__$1;
(statearr_26187_26203[(2)] = null);

(statearr_26187_26203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (2))){
var inst_26164 = (state_26184[(8)]);
var inst_26167 = (state_26184[(10)]);
var inst_26167__$1 = cljs.core.nth.call(null,inst_26164,(0),null);
var inst_26168 = cljs.core.nthnext.call(null,inst_26164,(1));
var inst_26169 = (inst_26167__$1 == null);
var inst_26170 = cljs.core.not.call(null,inst_26169);
var state_26184__$1 = (function (){var statearr_26188 = state_26184;
(statearr_26188[(11)] = inst_26168);

(statearr_26188[(10)] = inst_26167__$1);

return statearr_26188;
})();
if(inst_26170){
var statearr_26189_26204 = state_26184__$1;
(statearr_26189_26204[(1)] = (4));

} else {
var statearr_26190_26205 = state_26184__$1;
(statearr_26190_26205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (3))){
var inst_26182 = (state_26184[(2)]);
var state_26184__$1 = state_26184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26184__$1,inst_26182);
} else {
if((state_val_26185 === (4))){
var inst_26167 = (state_26184[(10)]);
var inst_26172 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26167);
var state_26184__$1 = state_26184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26184__$1,(7),inst_26172);
} else {
if((state_val_26185 === (5))){
var inst_26178 = cljs.core.async.close_BANG_.call(null,out);
var state_26184__$1 = state_26184;
var statearr_26191_26206 = state_26184__$1;
(statearr_26191_26206[(2)] = inst_26178);

(statearr_26191_26206[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (6))){
var inst_26180 = (state_26184[(2)]);
var state_26184__$1 = state_26184;
var statearr_26192_26207 = state_26184__$1;
(statearr_26192_26207[(2)] = inst_26180);

(statearr_26192_26207[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26185 === (7))){
var inst_26168 = (state_26184[(11)]);
var inst_26174 = (state_26184[(2)]);
var inst_26175 = cljs.core.async.put_BANG_.call(null,out,inst_26174);
var inst_26164 = inst_26168;
var state_26184__$1 = (function (){var statearr_26193 = state_26184;
(statearr_26193[(8)] = inst_26164);

(statearr_26193[(12)] = inst_26175);

return statearr_26193;
})();
var statearr_26194_26208 = state_26184__$1;
(statearr_26194_26208[(2)] = null);

(statearr_26194_26208[(1)] = (2));


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
});})(c__19457__auto___26202,out))
;
return ((function (switch__19345__auto__,c__19457__auto___26202,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto____0 = (function (){
var statearr_26198 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26198[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto__);

(statearr_26198[(1)] = (1));

return statearr_26198;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto____1 = (function (state_26184){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_26184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e26199){if((e26199 instanceof Object)){
var ex__19349__auto__ = e26199;
var statearr_26200_26209 = state_26184;
(statearr_26200_26209[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26210 = state_26184;
state_26184 = G__26210;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto__ = function(state_26184){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto____1.call(this,state_26184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___26202,out))
})();
var state__19459__auto__ = (function (){var statearr_26201 = f__19458__auto__.call(null);
(statearr_26201[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___26202);

return statearr_26201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___26202,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26211,opts){
var map__26215 = p__26211;
var map__26215__$1 = ((((!((map__26215 == null)))?((((map__26215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26215):map__26215);
var eval_body__$1 = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26215__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16905__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16905__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16905__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26217){var e = e26217;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__26218_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26218_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
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
return cljs.core.map.call(null,(function (p__26223){
var vec__26224 = p__26223;
var k = cljs.core.nth.call(null,vec__26224,(0),null);
var v = cljs.core.nth.call(null,vec__26224,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26225){
var vec__26226 = p__26225;
var k = cljs.core.nth.call(null,vec__26226,(0),null);
var v = cljs.core.nth.call(null,vec__26226,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26230,p__26231){
var map__26478 = p__26230;
var map__26478__$1 = ((((!((map__26478 == null)))?((((map__26478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26478):map__26478);
var opts = map__26478__$1;
var before_jsload = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__26479 = p__26231;
var map__26479__$1 = ((((!((map__26479 == null)))?((((map__26479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26479):map__26479);
var msg = map__26479__$1;
var files = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__26479__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26632){
var state_val_26633 = (state_26632[(1)]);
if((state_val_26633 === (7))){
var inst_26496 = (state_26632[(7)]);
var inst_26493 = (state_26632[(8)]);
var inst_26495 = (state_26632[(9)]);
var inst_26494 = (state_26632[(10)]);
var inst_26501 = cljs.core._nth.call(null,inst_26494,inst_26496);
var inst_26502 = figwheel.client.file_reloading.eval_body.call(null,inst_26501,opts);
var inst_26503 = (inst_26496 + (1));
var tmp26634 = inst_26493;
var tmp26635 = inst_26495;
var tmp26636 = inst_26494;
var inst_26493__$1 = tmp26634;
var inst_26494__$1 = tmp26636;
var inst_26495__$1 = tmp26635;
var inst_26496__$1 = inst_26503;
var state_26632__$1 = (function (){var statearr_26637 = state_26632;
(statearr_26637[(7)] = inst_26496__$1);

(statearr_26637[(8)] = inst_26493__$1);

(statearr_26637[(9)] = inst_26495__$1);

(statearr_26637[(11)] = inst_26502);

(statearr_26637[(10)] = inst_26494__$1);

return statearr_26637;
})();
var statearr_26638_26724 = state_26632__$1;
(statearr_26638_26724[(2)] = null);

(statearr_26638_26724[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (20))){
var inst_26536 = (state_26632[(12)]);
var inst_26544 = figwheel.client.file_reloading.sort_files.call(null,inst_26536);
var state_26632__$1 = state_26632;
var statearr_26639_26725 = state_26632__$1;
(statearr_26639_26725[(2)] = inst_26544);

(statearr_26639_26725[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (27))){
var state_26632__$1 = state_26632;
var statearr_26640_26726 = state_26632__$1;
(statearr_26640_26726[(2)] = null);

(statearr_26640_26726[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (1))){
var inst_26485 = (state_26632[(13)]);
var inst_26482 = before_jsload.call(null,files);
var inst_26483 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26484 = (function (){return ((function (inst_26485,inst_26482,inst_26483,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26227_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26227_SHARP_);
});
;})(inst_26485,inst_26482,inst_26483,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26485__$1 = cljs.core.filter.call(null,inst_26484,files);
var inst_26486 = cljs.core.not_empty.call(null,inst_26485__$1);
var state_26632__$1 = (function (){var statearr_26641 = state_26632;
(statearr_26641[(14)] = inst_26483);

(statearr_26641[(13)] = inst_26485__$1);

(statearr_26641[(15)] = inst_26482);

return statearr_26641;
})();
if(cljs.core.truth_(inst_26486)){
var statearr_26642_26727 = state_26632__$1;
(statearr_26642_26727[(1)] = (2));

} else {
var statearr_26643_26728 = state_26632__$1;
(statearr_26643_26728[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (24))){
var state_26632__$1 = state_26632;
var statearr_26644_26729 = state_26632__$1;
(statearr_26644_26729[(2)] = null);

(statearr_26644_26729[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (39))){
var inst_26586 = (state_26632[(16)]);
var state_26632__$1 = state_26632;
var statearr_26645_26730 = state_26632__$1;
(statearr_26645_26730[(2)] = inst_26586);

(statearr_26645_26730[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (46))){
var inst_26627 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26646_26731 = state_26632__$1;
(statearr_26646_26731[(2)] = inst_26627);

(statearr_26646_26731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (4))){
var inst_26530 = (state_26632[(2)]);
var inst_26531 = cljs.core.List.EMPTY;
var inst_26532 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26531);
var inst_26533 = (function (){return ((function (inst_26530,inst_26531,inst_26532,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26228_SHARP_){
var and__16905__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26228_SHARP_);
if(cljs.core.truth_(and__16905__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26228_SHARP_));
} else {
return and__16905__auto__;
}
});
;})(inst_26530,inst_26531,inst_26532,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26534 = cljs.core.filter.call(null,inst_26533,files);
var inst_26535 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26536 = cljs.core.concat.call(null,inst_26534,inst_26535);
var state_26632__$1 = (function (){var statearr_26647 = state_26632;
(statearr_26647[(12)] = inst_26536);

(statearr_26647[(17)] = inst_26530);

(statearr_26647[(18)] = inst_26532);

return statearr_26647;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26648_26732 = state_26632__$1;
(statearr_26648_26732[(1)] = (16));

} else {
var statearr_26649_26733 = state_26632__$1;
(statearr_26649_26733[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (15))){
var inst_26520 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26650_26734 = state_26632__$1;
(statearr_26650_26734[(2)] = inst_26520);

(statearr_26650_26734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (21))){
var inst_26546 = (state_26632[(19)]);
var inst_26546__$1 = (state_26632[(2)]);
var inst_26547 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26546__$1);
var state_26632__$1 = (function (){var statearr_26651 = state_26632;
(statearr_26651[(19)] = inst_26546__$1);

return statearr_26651;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26632__$1,(22),inst_26547);
} else {
if((state_val_26633 === (31))){
var inst_26630 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26632__$1,inst_26630);
} else {
if((state_val_26633 === (32))){
var inst_26586 = (state_26632[(16)]);
var inst_26591 = inst_26586.cljs$lang$protocol_mask$partition0$;
var inst_26592 = (inst_26591 & (64));
var inst_26593 = inst_26586.cljs$core$ISeq$;
var inst_26594 = (inst_26592) || (inst_26593);
var state_26632__$1 = state_26632;
if(cljs.core.truth_(inst_26594)){
var statearr_26652_26735 = state_26632__$1;
(statearr_26652_26735[(1)] = (35));

} else {
var statearr_26653_26736 = state_26632__$1;
(statearr_26653_26736[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (40))){
var inst_26607 = (state_26632[(20)]);
var inst_26606 = (state_26632[(2)]);
var inst_26607__$1 = cljs.core.get.call(null,inst_26606,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26608 = cljs.core.get.call(null,inst_26606,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26609 = cljs.core.not_empty.call(null,inst_26607__$1);
var state_26632__$1 = (function (){var statearr_26654 = state_26632;
(statearr_26654[(20)] = inst_26607__$1);

(statearr_26654[(21)] = inst_26608);

return statearr_26654;
})();
if(cljs.core.truth_(inst_26609)){
var statearr_26655_26737 = state_26632__$1;
(statearr_26655_26737[(1)] = (41));

} else {
var statearr_26656_26738 = state_26632__$1;
(statearr_26656_26738[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (33))){
var state_26632__$1 = state_26632;
var statearr_26657_26739 = state_26632__$1;
(statearr_26657_26739[(2)] = false);

(statearr_26657_26739[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (13))){
var inst_26506 = (state_26632[(22)]);
var inst_26510 = cljs.core.chunk_first.call(null,inst_26506);
var inst_26511 = cljs.core.chunk_rest.call(null,inst_26506);
var inst_26512 = cljs.core.count.call(null,inst_26510);
var inst_26493 = inst_26511;
var inst_26494 = inst_26510;
var inst_26495 = inst_26512;
var inst_26496 = (0);
var state_26632__$1 = (function (){var statearr_26658 = state_26632;
(statearr_26658[(7)] = inst_26496);

(statearr_26658[(8)] = inst_26493);

(statearr_26658[(9)] = inst_26495);

(statearr_26658[(10)] = inst_26494);

return statearr_26658;
})();
var statearr_26659_26740 = state_26632__$1;
(statearr_26659_26740[(2)] = null);

(statearr_26659_26740[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (22))){
var inst_26554 = (state_26632[(23)]);
var inst_26549 = (state_26632[(24)]);
var inst_26550 = (state_26632[(25)]);
var inst_26546 = (state_26632[(19)]);
var inst_26549__$1 = (state_26632[(2)]);
var inst_26550__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26549__$1);
var inst_26551 = (function (){var all_files = inst_26546;
var res_SINGLEQUOTE_ = inst_26549__$1;
var res = inst_26550__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26554,inst_26549,inst_26550,inst_26546,inst_26549__$1,inst_26550__$1,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26229_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26229_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26554,inst_26549,inst_26550,inst_26546,inst_26549__$1,inst_26550__$1,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26552 = cljs.core.filter.call(null,inst_26551,inst_26549__$1);
var inst_26553 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26554__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26553);
var inst_26555 = cljs.core.not_empty.call(null,inst_26554__$1);
var state_26632__$1 = (function (){var statearr_26660 = state_26632;
(statearr_26660[(23)] = inst_26554__$1);

(statearr_26660[(26)] = inst_26552);

(statearr_26660[(24)] = inst_26549__$1);

(statearr_26660[(25)] = inst_26550__$1);

return statearr_26660;
})();
if(cljs.core.truth_(inst_26555)){
var statearr_26661_26741 = state_26632__$1;
(statearr_26661_26741[(1)] = (23));

} else {
var statearr_26662_26742 = state_26632__$1;
(statearr_26662_26742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (36))){
var state_26632__$1 = state_26632;
var statearr_26663_26743 = state_26632__$1;
(statearr_26663_26743[(2)] = false);

(statearr_26663_26743[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (41))){
var inst_26607 = (state_26632[(20)]);
var inst_26611 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26612 = cljs.core.map.call(null,inst_26611,inst_26607);
var inst_26613 = cljs.core.pr_str.call(null,inst_26612);
var inst_26614 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26613)].join('');
var inst_26615 = figwheel.client.utils.log.call(null,inst_26614);
var state_26632__$1 = state_26632;
var statearr_26664_26744 = state_26632__$1;
(statearr_26664_26744[(2)] = inst_26615);

(statearr_26664_26744[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (43))){
var inst_26608 = (state_26632[(21)]);
var inst_26618 = (state_26632[(2)]);
var inst_26619 = cljs.core.not_empty.call(null,inst_26608);
var state_26632__$1 = (function (){var statearr_26665 = state_26632;
(statearr_26665[(27)] = inst_26618);

return statearr_26665;
})();
if(cljs.core.truth_(inst_26619)){
var statearr_26666_26745 = state_26632__$1;
(statearr_26666_26745[(1)] = (44));

} else {
var statearr_26667_26746 = state_26632__$1;
(statearr_26667_26746[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (29))){
var inst_26586 = (state_26632[(16)]);
var inst_26554 = (state_26632[(23)]);
var inst_26552 = (state_26632[(26)]);
var inst_26549 = (state_26632[(24)]);
var inst_26550 = (state_26632[(25)]);
var inst_26546 = (state_26632[(19)]);
var inst_26582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26585 = (function (){var all_files = inst_26546;
var res_SINGLEQUOTE_ = inst_26549;
var res = inst_26550;
var files_not_loaded = inst_26552;
var dependencies_that_loaded = inst_26554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26586,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26582,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26584){
var map__26668 = p__26584;
var map__26668__$1 = ((((!((map__26668 == null)))?((((map__26668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26668):map__26668);
var namespace = cljs.core.get.call(null,map__26668__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26586,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26582,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26586__$1 = cljs.core.group_by.call(null,inst_26585,inst_26552);
var inst_26588 = (inst_26586__$1 == null);
var inst_26589 = cljs.core.not.call(null,inst_26588);
var state_26632__$1 = (function (){var statearr_26670 = state_26632;
(statearr_26670[(16)] = inst_26586__$1);

(statearr_26670[(28)] = inst_26582);

return statearr_26670;
})();
if(inst_26589){
var statearr_26671_26747 = state_26632__$1;
(statearr_26671_26747[(1)] = (32));

} else {
var statearr_26672_26748 = state_26632__$1;
(statearr_26672_26748[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (44))){
var inst_26608 = (state_26632[(21)]);
var inst_26621 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26608);
var inst_26622 = cljs.core.pr_str.call(null,inst_26621);
var inst_26623 = [cljs.core.str("not required: "),cljs.core.str(inst_26622)].join('');
var inst_26624 = figwheel.client.utils.log.call(null,inst_26623);
var state_26632__$1 = state_26632;
var statearr_26673_26749 = state_26632__$1;
(statearr_26673_26749[(2)] = inst_26624);

(statearr_26673_26749[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (6))){
var inst_26527 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26674_26750 = state_26632__$1;
(statearr_26674_26750[(2)] = inst_26527);

(statearr_26674_26750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (28))){
var inst_26552 = (state_26632[(26)]);
var inst_26579 = (state_26632[(2)]);
var inst_26580 = cljs.core.not_empty.call(null,inst_26552);
var state_26632__$1 = (function (){var statearr_26675 = state_26632;
(statearr_26675[(29)] = inst_26579);

return statearr_26675;
})();
if(cljs.core.truth_(inst_26580)){
var statearr_26676_26751 = state_26632__$1;
(statearr_26676_26751[(1)] = (29));

} else {
var statearr_26677_26752 = state_26632__$1;
(statearr_26677_26752[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (25))){
var inst_26550 = (state_26632[(25)]);
var inst_26566 = (state_26632[(2)]);
var inst_26567 = cljs.core.not_empty.call(null,inst_26550);
var state_26632__$1 = (function (){var statearr_26678 = state_26632;
(statearr_26678[(30)] = inst_26566);

return statearr_26678;
})();
if(cljs.core.truth_(inst_26567)){
var statearr_26679_26753 = state_26632__$1;
(statearr_26679_26753[(1)] = (26));

} else {
var statearr_26680_26754 = state_26632__$1;
(statearr_26680_26754[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (34))){
var inst_26601 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
if(cljs.core.truth_(inst_26601)){
var statearr_26681_26755 = state_26632__$1;
(statearr_26681_26755[(1)] = (38));

} else {
var statearr_26682_26756 = state_26632__$1;
(statearr_26682_26756[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (17))){
var state_26632__$1 = state_26632;
var statearr_26683_26757 = state_26632__$1;
(statearr_26683_26757[(2)] = recompile_dependents);

(statearr_26683_26757[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (3))){
var state_26632__$1 = state_26632;
var statearr_26684_26758 = state_26632__$1;
(statearr_26684_26758[(2)] = null);

(statearr_26684_26758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (12))){
var inst_26523 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26685_26759 = state_26632__$1;
(statearr_26685_26759[(2)] = inst_26523);

(statearr_26685_26759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (2))){
var inst_26485 = (state_26632[(13)]);
var inst_26492 = cljs.core.seq.call(null,inst_26485);
var inst_26493 = inst_26492;
var inst_26494 = null;
var inst_26495 = (0);
var inst_26496 = (0);
var state_26632__$1 = (function (){var statearr_26686 = state_26632;
(statearr_26686[(7)] = inst_26496);

(statearr_26686[(8)] = inst_26493);

(statearr_26686[(9)] = inst_26495);

(statearr_26686[(10)] = inst_26494);

return statearr_26686;
})();
var statearr_26687_26760 = state_26632__$1;
(statearr_26687_26760[(2)] = null);

(statearr_26687_26760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (23))){
var inst_26554 = (state_26632[(23)]);
var inst_26552 = (state_26632[(26)]);
var inst_26549 = (state_26632[(24)]);
var inst_26550 = (state_26632[(25)]);
var inst_26546 = (state_26632[(19)]);
var inst_26557 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26559 = (function (){var all_files = inst_26546;
var res_SINGLEQUOTE_ = inst_26549;
var res = inst_26550;
var files_not_loaded = inst_26552;
var dependencies_that_loaded = inst_26554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26557,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26558){
var map__26688 = p__26558;
var map__26688__$1 = ((((!((map__26688 == null)))?((((map__26688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26688):map__26688);
var request_url = cljs.core.get.call(null,map__26688__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26557,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26560 = cljs.core.reverse.call(null,inst_26554);
var inst_26561 = cljs.core.map.call(null,inst_26559,inst_26560);
var inst_26562 = cljs.core.pr_str.call(null,inst_26561);
var inst_26563 = figwheel.client.utils.log.call(null,inst_26562);
var state_26632__$1 = (function (){var statearr_26690 = state_26632;
(statearr_26690[(31)] = inst_26557);

return statearr_26690;
})();
var statearr_26691_26761 = state_26632__$1;
(statearr_26691_26761[(2)] = inst_26563);

(statearr_26691_26761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (35))){
var state_26632__$1 = state_26632;
var statearr_26692_26762 = state_26632__$1;
(statearr_26692_26762[(2)] = true);

(statearr_26692_26762[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (19))){
var inst_26536 = (state_26632[(12)]);
var inst_26542 = figwheel.client.file_reloading.expand_files.call(null,inst_26536);
var state_26632__$1 = state_26632;
var statearr_26693_26763 = state_26632__$1;
(statearr_26693_26763[(2)] = inst_26542);

(statearr_26693_26763[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (11))){
var state_26632__$1 = state_26632;
var statearr_26694_26764 = state_26632__$1;
(statearr_26694_26764[(2)] = null);

(statearr_26694_26764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (9))){
var inst_26525 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26695_26765 = state_26632__$1;
(statearr_26695_26765[(2)] = inst_26525);

(statearr_26695_26765[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (5))){
var inst_26496 = (state_26632[(7)]);
var inst_26495 = (state_26632[(9)]);
var inst_26498 = (inst_26496 < inst_26495);
var inst_26499 = inst_26498;
var state_26632__$1 = state_26632;
if(cljs.core.truth_(inst_26499)){
var statearr_26696_26766 = state_26632__$1;
(statearr_26696_26766[(1)] = (7));

} else {
var statearr_26697_26767 = state_26632__$1;
(statearr_26697_26767[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (14))){
var inst_26506 = (state_26632[(22)]);
var inst_26515 = cljs.core.first.call(null,inst_26506);
var inst_26516 = figwheel.client.file_reloading.eval_body.call(null,inst_26515,opts);
var inst_26517 = cljs.core.next.call(null,inst_26506);
var inst_26493 = inst_26517;
var inst_26494 = null;
var inst_26495 = (0);
var inst_26496 = (0);
var state_26632__$1 = (function (){var statearr_26698 = state_26632;
(statearr_26698[(7)] = inst_26496);

(statearr_26698[(8)] = inst_26493);

(statearr_26698[(9)] = inst_26495);

(statearr_26698[(10)] = inst_26494);

(statearr_26698[(32)] = inst_26516);

return statearr_26698;
})();
var statearr_26699_26768 = state_26632__$1;
(statearr_26699_26768[(2)] = null);

(statearr_26699_26768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (45))){
var state_26632__$1 = state_26632;
var statearr_26700_26769 = state_26632__$1;
(statearr_26700_26769[(2)] = null);

(statearr_26700_26769[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (26))){
var inst_26554 = (state_26632[(23)]);
var inst_26552 = (state_26632[(26)]);
var inst_26549 = (state_26632[(24)]);
var inst_26550 = (state_26632[(25)]);
var inst_26546 = (state_26632[(19)]);
var inst_26569 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26571 = (function (){var all_files = inst_26546;
var res_SINGLEQUOTE_ = inst_26549;
var res = inst_26550;
var files_not_loaded = inst_26552;
var dependencies_that_loaded = inst_26554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26569,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26570){
var map__26701 = p__26570;
var map__26701__$1 = ((((!((map__26701 == null)))?((((map__26701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26701):map__26701);
var namespace = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26701__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26569,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26572 = cljs.core.map.call(null,inst_26571,inst_26550);
var inst_26573 = cljs.core.pr_str.call(null,inst_26572);
var inst_26574 = figwheel.client.utils.log.call(null,inst_26573);
var inst_26575 = (function (){var all_files = inst_26546;
var res_SINGLEQUOTE_ = inst_26549;
var res = inst_26550;
var files_not_loaded = inst_26552;
var dependencies_that_loaded = inst_26554;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26569,inst_26571,inst_26572,inst_26573,inst_26574,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26554,inst_26552,inst_26549,inst_26550,inst_26546,inst_26569,inst_26571,inst_26572,inst_26573,inst_26574,state_val_26633,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26576 = setTimeout(inst_26575,(10));
var state_26632__$1 = (function (){var statearr_26703 = state_26632;
(statearr_26703[(33)] = inst_26569);

(statearr_26703[(34)] = inst_26574);

return statearr_26703;
})();
var statearr_26704_26770 = state_26632__$1;
(statearr_26704_26770[(2)] = inst_26576);

(statearr_26704_26770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (16))){
var state_26632__$1 = state_26632;
var statearr_26705_26771 = state_26632__$1;
(statearr_26705_26771[(2)] = reload_dependents);

(statearr_26705_26771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (38))){
var inst_26586 = (state_26632[(16)]);
var inst_26603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26586);
var state_26632__$1 = state_26632;
var statearr_26706_26772 = state_26632__$1;
(statearr_26706_26772[(2)] = inst_26603);

(statearr_26706_26772[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (30))){
var state_26632__$1 = state_26632;
var statearr_26707_26773 = state_26632__$1;
(statearr_26707_26773[(2)] = null);

(statearr_26707_26773[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (10))){
var inst_26506 = (state_26632[(22)]);
var inst_26508 = cljs.core.chunked_seq_QMARK_.call(null,inst_26506);
var state_26632__$1 = state_26632;
if(inst_26508){
var statearr_26708_26774 = state_26632__$1;
(statearr_26708_26774[(1)] = (13));

} else {
var statearr_26709_26775 = state_26632__$1;
(statearr_26709_26775[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (18))){
var inst_26540 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
if(cljs.core.truth_(inst_26540)){
var statearr_26710_26776 = state_26632__$1;
(statearr_26710_26776[(1)] = (19));

} else {
var statearr_26711_26777 = state_26632__$1;
(statearr_26711_26777[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (42))){
var state_26632__$1 = state_26632;
var statearr_26712_26778 = state_26632__$1;
(statearr_26712_26778[(2)] = null);

(statearr_26712_26778[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (37))){
var inst_26598 = (state_26632[(2)]);
var state_26632__$1 = state_26632;
var statearr_26713_26779 = state_26632__$1;
(statearr_26713_26779[(2)] = inst_26598);

(statearr_26713_26779[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26633 === (8))){
var inst_26493 = (state_26632[(8)]);
var inst_26506 = (state_26632[(22)]);
var inst_26506__$1 = cljs.core.seq.call(null,inst_26493);
var state_26632__$1 = (function (){var statearr_26714 = state_26632;
(statearr_26714[(22)] = inst_26506__$1);

return statearr_26714;
})();
if(inst_26506__$1){
var statearr_26715_26780 = state_26632__$1;
(statearr_26715_26780[(1)] = (10));

} else {
var statearr_26716_26781 = state_26632__$1;
(statearr_26716_26781[(1)] = (11));

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
});})(c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19345__auto__,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto____0 = (function (){
var statearr_26720 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26720[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto__);

(statearr_26720[(1)] = (1));

return statearr_26720;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto____1 = (function (state_26632){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_26632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e26721){if((e26721 instanceof Object)){
var ex__19349__auto__ = e26721;
var statearr_26722_26782 = state_26632;
(statearr_26722_26782[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26721;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26783 = state_26632;
state_26632 = G__26783;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto__ = function(state_26632){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto____1.call(this,state_26632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19459__auto__ = (function (){var statearr_26723 = f__19458__auto__.call(null);
(statearr_26723[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_26723;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__,map__26478,map__26478__$1,opts,before_jsload,on_jsload,reload_dependents,map__26479,map__26479__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19457__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26786,link){
var map__26789 = p__26786;
var map__26789__$1 = ((((!((map__26789 == null)))?((((map__26789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26789):map__26789);
var file = cljs.core.get.call(null,map__26789__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26789,map__26789__$1,file){
return (function (p1__26784_SHARP_,p2__26785_SHARP_){
if(cljs.core._EQ_.call(null,p1__26784_SHARP_,p2__26785_SHARP_)){
return p1__26784_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26789,map__26789__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26795){
var map__26796 = p__26795;
var map__26796__$1 = ((((!((map__26796 == null)))?((((map__26796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26796):map__26796);
var match_length = cljs.core.get.call(null,map__26796__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26796__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26791_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26791_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26798 = [];
var len__17976__auto___26801 = arguments.length;
var i__17977__auto___26802 = (0);
while(true){
if((i__17977__auto___26802 < len__17976__auto___26801)){
args26798.push((arguments[i__17977__auto___26802]));

var G__26803 = (i__17977__auto___26802 + (1));
i__17977__auto___26802 = G__26803;
continue;
} else {
}
break;
}

var G__26800 = args26798.length;
switch (G__26800) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26798.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26805_SHARP_,p2__26806_SHARP_){
return cljs.core.assoc.call(null,p1__26805_SHARP_,cljs.core.get.call(null,p2__26806_SHARP_,key),p2__26806_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26807){
var map__26810 = p__26807;
var map__26810__$1 = ((((!((map__26810 == null)))?((((map__26810.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26810.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26810):map__26810);
var f_data = map__26810__$1;
var file = cljs.core.get.call(null,map__26810__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26812,files_msg){
var map__26819 = p__26812;
var map__26819__$1 = ((((!((map__26819 == null)))?((((map__26819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26819):map__26819);
var opts = map__26819__$1;
var on_cssload = cljs.core.get.call(null,map__26819__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26821_26825 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26822_26826 = null;
var count__26823_26827 = (0);
var i__26824_26828 = (0);
while(true){
if((i__26824_26828 < count__26823_26827)){
var f_26829 = cljs.core._nth.call(null,chunk__26822_26826,i__26824_26828);
figwheel.client.file_reloading.reload_css_file.call(null,f_26829);

var G__26830 = seq__26821_26825;
var G__26831 = chunk__26822_26826;
var G__26832 = count__26823_26827;
var G__26833 = (i__26824_26828 + (1));
seq__26821_26825 = G__26830;
chunk__26822_26826 = G__26831;
count__26823_26827 = G__26832;
i__26824_26828 = G__26833;
continue;
} else {
var temp__4425__auto___26834 = cljs.core.seq.call(null,seq__26821_26825);
if(temp__4425__auto___26834){
var seq__26821_26835__$1 = temp__4425__auto___26834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26821_26835__$1)){
var c__17720__auto___26836 = cljs.core.chunk_first.call(null,seq__26821_26835__$1);
var G__26837 = cljs.core.chunk_rest.call(null,seq__26821_26835__$1);
var G__26838 = c__17720__auto___26836;
var G__26839 = cljs.core.count.call(null,c__17720__auto___26836);
var G__26840 = (0);
seq__26821_26825 = G__26837;
chunk__26822_26826 = G__26838;
count__26823_26827 = G__26839;
i__26824_26828 = G__26840;
continue;
} else {
var f_26841 = cljs.core.first.call(null,seq__26821_26835__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26841);

var G__26842 = cljs.core.next.call(null,seq__26821_26835__$1);
var G__26843 = null;
var G__26844 = (0);
var G__26845 = (0);
seq__26821_26825 = G__26842;
chunk__26822_26826 = G__26843;
count__26823_26827 = G__26844;
i__26824_26828 = G__26845;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26819,map__26819__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26819,map__26819__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1449412236965