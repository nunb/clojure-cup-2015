// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23935_23949 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23936_23950 = null;
var count__23937_23951 = (0);
var i__23938_23952 = (0);
while(true){
if((i__23938_23952 < count__23937_23951)){
var f_23953 = cljs.core._nth.call(null,chunk__23936_23950,i__23938_23952);
cljs.core.println.call(null,"  ",f_23953);

var G__23954 = seq__23935_23949;
var G__23955 = chunk__23936_23950;
var G__23956 = count__23937_23951;
var G__23957 = (i__23938_23952 + (1));
seq__23935_23949 = G__23954;
chunk__23936_23950 = G__23955;
count__23937_23951 = G__23956;
i__23938_23952 = G__23957;
continue;
} else {
var temp__4425__auto___23958 = cljs.core.seq.call(null,seq__23935_23949);
if(temp__4425__auto___23958){
var seq__23935_23959__$1 = temp__4425__auto___23958;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23935_23959__$1)){
var c__23582__auto___23960 = cljs.core.chunk_first.call(null,seq__23935_23959__$1);
var G__23961 = cljs.core.chunk_rest.call(null,seq__23935_23959__$1);
var G__23962 = c__23582__auto___23960;
var G__23963 = cljs.core.count.call(null,c__23582__auto___23960);
var G__23964 = (0);
seq__23935_23949 = G__23961;
chunk__23936_23950 = G__23962;
count__23937_23951 = G__23963;
i__23938_23952 = G__23964;
continue;
} else {
var f_23965 = cljs.core.first.call(null,seq__23935_23959__$1);
cljs.core.println.call(null,"  ",f_23965);

var G__23966 = cljs.core.next.call(null,seq__23935_23959__$1);
var G__23967 = null;
var G__23968 = (0);
var G__23969 = (0);
seq__23935_23949 = G__23966;
chunk__23936_23950 = G__23967;
count__23937_23951 = G__23968;
i__23938_23952 = G__23969;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23970 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__22779__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__22779__auto__)){
return or__22779__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_23970);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_23970)))?cljs.core.second.call(null,arglists_23970):arglists_23970));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23939 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23940 = null;
var count__23941 = (0);
var i__23942 = (0);
while(true){
if((i__23942 < count__23941)){
var vec__23943 = cljs.core._nth.call(null,chunk__23940,i__23942);
var name = cljs.core.nth.call(null,vec__23943,(0),null);
var map__23944 = cljs.core.nth.call(null,vec__23943,(1),null);
var map__23944__$1 = ((((!((map__23944 == null)))?((((map__23944.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23944.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23944):map__23944);
var doc = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23944__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23971 = seq__23939;
var G__23972 = chunk__23940;
var G__23973 = count__23941;
var G__23974 = (i__23942 + (1));
seq__23939 = G__23971;
chunk__23940 = G__23972;
count__23941 = G__23973;
i__23942 = G__23974;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23939);
if(temp__4425__auto__){
var seq__23939__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23939__$1)){
var c__23582__auto__ = cljs.core.chunk_first.call(null,seq__23939__$1);
var G__23975 = cljs.core.chunk_rest.call(null,seq__23939__$1);
var G__23976 = c__23582__auto__;
var G__23977 = cljs.core.count.call(null,c__23582__auto__);
var G__23978 = (0);
seq__23939 = G__23975;
chunk__23940 = G__23976;
count__23941 = G__23977;
i__23942 = G__23978;
continue;
} else {
var vec__23946 = cljs.core.first.call(null,seq__23939__$1);
var name = cljs.core.nth.call(null,vec__23946,(0),null);
var map__23947 = cljs.core.nth.call(null,vec__23946,(1),null);
var map__23947__$1 = ((((!((map__23947 == null)))?((((map__23947.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23947.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23947):map__23947);
var doc = cljs.core.get.call(null,map__23947__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__23947__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__23979 = cljs.core.next.call(null,seq__23939__$1);
var G__23980 = null;
var G__23981 = (0);
var G__23982 = (0);
seq__23939 = G__23979;
chunk__23940 = G__23980;
count__23941 = G__23981;
i__23942 = G__23982;
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
}
});

//# sourceMappingURL=repl.js.map