// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure_cup_2015.expression');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('clojure.string');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.reader_types');
clojure_cup_2015.expression.try_read = (function clojure_cup_2015$expression$try_read(rdr,feature){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null).call(null,feature))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clj","clj",-660495428),null,new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null),new cljs.core.Symbol(null,"feature","feature",1667774179,null))))].join('')));
}

if(cljs.core.truth_(rdr)){
return cljs.tools.reader.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.PersistentHashSet.fromArray([feature], true),new cljs.core.Keyword(null,"eof","eof",-489063237),new cljs.core.Keyword("clojure-cup-2015.expression","EOF","clojure-cup-2015.expression/EOF",1875721319)], null),rdr);
} else {
return null;
}
});
clojure_cup_2015.expression.lined_read = (function clojure_cup_2015$expression$lined_read(var_args){
var args16965 = [];
var len__5818__auto___16968 = arguments.length;
var i__5819__auto___16969 = (0);
while(true){
if((i__5819__auto___16969 < len__5818__auto___16968)){
args16965.push((arguments[i__5819__auto___16969]));

var G__16970 = (i__5819__auto___16969 + (1));
i__5819__auto___16969 = G__16970;
continue;
} else {
}
break;
}

var G__16967 = args16965.length;
switch (G__16967) {
case 1:
return clojure_cup_2015.expression.lined_read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_cup_2015.expression.lined_read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16965.length)].join('')));

}
});

clojure_cup_2015.expression.lined_read.cljs$core$IFn$_invoke$arity$1 = (function (string){
return clojure_cup_2015.expression.lined_read.call(null,string,new cljs.core.Keyword(null,"clj","clj",-660495428));
});

clojure_cup_2015.expression.lined_read.cljs$core$IFn$_invoke$arity$2 = (function (string,feature){
var rdr = cljs.tools.reader.reader_types.indexing_push_back_reader.call(null,string);
return cljs.core.take_while.call(null,((function (rdr){
return (function (p1__16964_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("clojure-cup-2015.expression","EOF","clojure-cup-2015.expression/EOF",1875721319),p1__16964_SHARP_);
});})(rdr))
,cljs.core.repeatedly.call(null,((function (rdr){
return (function (){
return clojure_cup_2015.expression.try_read.call(null,rdr,feature);
});})(rdr))
));
});

clojure_cup_2015.expression.lined_read.cljs$lang$maxFixedArity = 2;
clojure_cup_2015.expression.find_form = (function clojure_cup_2015$expression$find_form(forms,pos){
var cur_line = (new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(pos) + (1));
var cur_col = new cljs.core.Keyword(null,"ch","ch",-554717905).cljs$core$IFn$_invoke$arity$1(pos);
var prev = null;
var left = forms;
while(true){
var temp__4425__auto__ = cljs.core.first.call(null,left);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var map__16974 = cljs.core.meta.call(null,f);
var map__16974__$1 = ((((!((map__16974 == null)))?((((map__16974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16974):map__16974);
var line = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.call(null,map__16974__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
if(((f instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,line,cur_line))){
return f;
} else {
if(cljs.core.truth_((function (){var and__4748__auto__ = end_line;
if(cljs.core.truth_(and__4748__auto__)){
var and__4748__auto____$1 = line;
if(cljs.core.truth_(and__4748__auto____$1)){
return ((line <= cur_line)) && ((end_line >= cur_line));
} else {
return and__4748__auto____$1;
}
} else {
return and__4748__auto__;
}
})())){
return f;
} else {
var G__16976 = f;
var G__16977 = cljs.core.rest.call(null,left);
prev = G__16976;
left = G__16977;
continue;

}
}
} else {
return null;
}
break;
}
});
clojure_cup_2015.expression.is_non_clojure_QMARK_ = (function clojure_cup_2015$expression$is_non_clojure_QMARK_(s){
return (cljs.core._EQ_.call(null,cljs.core.get.call(null,cljs.core.pr_str.call(null,s),(0)),"#")) && (!(cljs.core.set_QMARK_.call(null,s)));
});
clojure_cup_2015.expression.__GT_ns_sym = (function clojure_cup_2015$expression$__GT_ns_sym(nsp){
return cljs.core.symbol.call(null,[cljs.core.str(nsp)].join(''));
});
clojure_cup_2015.expression.trim_last = (function clojure_cup_2015$expression$trim_last(s,n){
var size = cljs.core.count.call(null,s);
return cljs.core.subs.call(null,s,(0),(size - n));
});
clojure_cup_2015.expression.meta_QMARK_ = (function clojure_cup_2015$expression$meta_QMARK_(thing){
if((thing instanceof clojure.lang.IObj)){
return cljs.core.meta.call(null,thing);
} else {
return null;
}
});
clojure_cup_2015.expression.clean_serialize = (function clojure_cup_2015$expression$clean_serialize(var_args){
var args__5825__auto__ = [];
var len__5818__auto___16983 = arguments.length;
var i__5819__auto___16984 = (0);
while(true){
if((i__5819__auto___16984 < len__5818__auto___16983)){
args__5825__auto__.push((arguments[i__5819__auto___16984]));

var G__16985 = (i__5819__auto___16984 + (1));
i__5819__auto___16984 = G__16985;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return clojure_cup_2015.expression.clean_serialize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

clojure_cup_2015.expression.clean_serialize.cljs$core$IFn$_invoke$arity$variadic = (function (res,p__16980){
var vec__16981 = p__16980;
var opts = cljs.core.nth.call(null,vec__16981,(0),null);
var _STAR_print_length_STAR_16982 = cljs.core._STAR_print_length_STAR_;
cljs.core._STAR_print_length_STAR_ = (function (){var or__4760__auto__ = new cljs.core.Keyword(null,"print-length","print-length",1931866356).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
} else {
var or__4760__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(or__4760__auto____$1)){
return or__4760__auto____$1;
} else {
return (1000);
}
}
})();

try{if(cljs.core.fn_QMARK_.call(null,res)){
return new cljs.core.Symbol(null,"fn","fn",465265323,null);
} else {
if(cljs.core.truth_(cljs.core.var_QMARK_.call(null,res))){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allow-var?","allow-var?",-1089551792).cljs$core$IFn$_invoke$arity$1(opts))){
return res;
} else {
return [cljs.core.str(res)].join('');
}
} else {
if((res == null)){
return "nil";
} else {
if(res === false){
return "false";
} else {
if(cljs.core.truth_((function (){var and__4748__auto__ = (res instanceof clojure.lang.Atom);
if(and__4748__auto__){
return new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4748__auto__;
}
})())){
return [cljs.core.str("atom["),cljs.core.str(cljs.core.deref.call(null,res)),cljs.core.str("]")].join('');
} else {
if((res instanceof clojure.lang.Atom)){
return [cljs.core.str("atom")].join('');
} else {
if(cljs.core.truth_((function (){var and__4748__auto__ = typeof res === 'string';
if(and__4748__auto__){
return new cljs.core.Keyword(null,"verbatim","verbatim",814762204).cljs$core$IFn$_invoke$arity$1(opts);
} else {
return and__4748__auto__;
}
})())){
return res;
} else {
return cljs.core.pr_str.call(null,res);

}
}
}
}
}
}
}
}finally {cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_16982;
}});

clojure_cup_2015.expression.clean_serialize.cljs$lang$maxFixedArity = (1);

clojure_cup_2015.expression.clean_serialize.cljs$lang$applyTo = (function (seq16978){
var G__16979 = cljs.core.first.call(null,seq16978);
var seq16978__$1 = cljs.core.next.call(null,seq16978);
return clojure_cup_2015.expression.clean_serialize.cljs$core$IFn$_invoke$arity$variadic(G__16979,seq16978__$1);
});
clojure_cup_2015.expression.truncate = (function clojure_cup_2015$expression$truncate(v){
return v;
});
clojure_cup_2015.expression.prep_code = (function clojure_cup_2015$expression$prep_code(code,meta){
if((cljs.core.not.call(null,meta)) || (cljs.core.not.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(meta)))){
return code;
} else {
return [cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.repeat.call(null,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$2(meta,(0)),"\n"))),cljs.core.str(code)].join('');
}
});
clojure_cup_2015.expression.clear_scheme_booleans = (function clojure_cup_2015$expression$clear_scheme_booleans(code){
var code_false = clojure.string.replace.call(null,code,/#f/,"false");
var code_true = clojure.string.replace.call(null,code_false,/#t/,"true");
return code_true;
});
clojure_cup_2015.expression.handle = (function clojure_cup_2015$expression$handle(msg,meta,pos){
try{var code = clojure_cup_2015.expression.prep_code.call(null,clojure_cup_2015.expression.clear_scheme_booleans.call(null,msg),null);
var forms = clojure_cup_2015.expression.lined_read.call(null,code);
var forms__$1 = ((cljs.core.not.call(null,pos))?forms:(function (){var form = clojure_cup_2015.expression.find_form.call(null,forms,pos);
if((form == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form], null);
}
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"syntax","syntax",-1637761676),"ok",new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
}catch (e16987){if((e16987 instanceof Error)){
var e = e16987;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"syntax","syntax",-1637761676),"ko",new cljs.core.Keyword(null,"forms","forms",2045992350),e], null);
} else {
throw e16987;

}
}});

//# sourceMappingURL=expression.js.map?rel=1449439848187