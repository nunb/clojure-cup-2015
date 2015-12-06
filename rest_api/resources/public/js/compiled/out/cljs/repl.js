// Compiled by ClojureScript 1.7.170 {}
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
var seq__26862_26876 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26863_26877 = null;
var count__26864_26878 = (0);
var i__26865_26879 = (0);
while(true){
if((i__26865_26879 < count__26864_26878)){
var f_26880 = cljs.core._nth.call(null,chunk__26863_26877,i__26865_26879);
cljs.core.println.call(null,"  ",f_26880);

var G__26881 = seq__26862_26876;
var G__26882 = chunk__26863_26877;
var G__26883 = count__26864_26878;
var G__26884 = (i__26865_26879 + (1));
seq__26862_26876 = G__26881;
chunk__26863_26877 = G__26882;
count__26864_26878 = G__26883;
i__26865_26879 = G__26884;
continue;
} else {
var temp__4425__auto___26885 = cljs.core.seq.call(null,seq__26862_26876);
if(temp__4425__auto___26885){
var seq__26862_26886__$1 = temp__4425__auto___26885;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26862_26886__$1)){
var c__17720__auto___26887 = cljs.core.chunk_first.call(null,seq__26862_26886__$1);
var G__26888 = cljs.core.chunk_rest.call(null,seq__26862_26886__$1);
var G__26889 = c__17720__auto___26887;
var G__26890 = cljs.core.count.call(null,c__17720__auto___26887);
var G__26891 = (0);
seq__26862_26876 = G__26888;
chunk__26863_26877 = G__26889;
count__26864_26878 = G__26890;
i__26865_26879 = G__26891;
continue;
} else {
var f_26892 = cljs.core.first.call(null,seq__26862_26886__$1);
cljs.core.println.call(null,"  ",f_26892);

var G__26893 = cljs.core.next.call(null,seq__26862_26886__$1);
var G__26894 = null;
var G__26895 = (0);
var G__26896 = (0);
seq__26862_26876 = G__26893;
chunk__26863_26877 = G__26894;
count__26864_26878 = G__26895;
i__26865_26879 = G__26896;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26897 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16917__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26897);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26897)))?cljs.core.second.call(null,arglists_26897):arglists_26897));
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
var seq__26866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26867 = null;
var count__26868 = (0);
var i__26869 = (0);
while(true){
if((i__26869 < count__26868)){
var vec__26870 = cljs.core._nth.call(null,chunk__26867,i__26869);
var name = cljs.core.nth.call(null,vec__26870,(0),null);
var map__26871 = cljs.core.nth.call(null,vec__26870,(1),null);
var map__26871__$1 = ((((!((map__26871 == null)))?((((map__26871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26871):map__26871);
var doc = cljs.core.get.call(null,map__26871__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26871__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26898 = seq__26866;
var G__26899 = chunk__26867;
var G__26900 = count__26868;
var G__26901 = (i__26869 + (1));
seq__26866 = G__26898;
chunk__26867 = G__26899;
count__26868 = G__26900;
i__26869 = G__26901;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26866);
if(temp__4425__auto__){
var seq__26866__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26866__$1)){
var c__17720__auto__ = cljs.core.chunk_first.call(null,seq__26866__$1);
var G__26902 = cljs.core.chunk_rest.call(null,seq__26866__$1);
var G__26903 = c__17720__auto__;
var G__26904 = cljs.core.count.call(null,c__17720__auto__);
var G__26905 = (0);
seq__26866 = G__26902;
chunk__26867 = G__26903;
count__26868 = G__26904;
i__26869 = G__26905;
continue;
} else {
var vec__26873 = cljs.core.first.call(null,seq__26866__$1);
var name = cljs.core.nth.call(null,vec__26873,(0),null);
var map__26874 = cljs.core.nth.call(null,vec__26873,(1),null);
var map__26874__$1 = ((((!((map__26874 == null)))?((((map__26874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26874):map__26874);
var doc = cljs.core.get.call(null,map__26874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26906 = cljs.core.next.call(null,seq__26866__$1);
var G__26907 = null;
var G__26908 = (0);
var G__26909 = (0);
seq__26866 = G__26906;
chunk__26867 = G__26907;
count__26868 = G__26908;
i__26869 = G__26909;
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

//# sourceMappingURL=repl.js.map?rel=1449412237059