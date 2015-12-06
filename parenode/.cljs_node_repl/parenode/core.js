// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('parenode.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.match');
goog.require('cljs.reader');
cljs.nodejs.enable_util_print_BANG_.call(null);
parenode.core.scheme_literals__GT_keywords = (function parenode$core$scheme_literals__GT_keywords(literals,a_seq){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([a_seq], true),literals))){
return cljs.core.keyword.call(null,a_seq);
} else {
return a_seq;

}
});
parenode.core.express = cljs.nodejs.require.call(null,"express");
parenode.core.app = parenode.core.express.call(null);
parenode.core.bodyParser = cljs.nodejs.require.call(null,"body-parser");
parenode.core.multer = cljs.nodejs.require.call(null,"multer");
parenode.core.app.use(parenode.core.bodyParser.json());
parenode.core.upload = parenode.core.multer.call(null);
parenode.core.app.post("/eval",parenode.core.upload.array(),(function (req,res,next){
var req_exp = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,req.body),"exp");
var result = compiler.evaluate_string_BANG_.call(null,req_exp);
return res.send([cljs.core.str(result)].join(''));
}));
parenode.core._main = (function parenode$core$_main(var_args){
var args__23294__auto__ = [];
var len__23287__auto___23686 = arguments.length;
var i__23288__auto___23687 = (0);
while(true){
if((i__23288__auto___23687 < len__23287__auto___23686)){
args__23294__auto__.push((arguments[i__23288__auto___23687]));

var G__23688 = (i__23288__auto___23687 + (1));
i__23288__auto___23687 = G__23688;
continue;
} else {
}
break;
}

var argseq__23295__auto__ = ((((0) < args__23294__auto__.length))?(new cljs.core.IndexedSeq(args__23294__auto__.slice((0)),(0))):null);
return parenode.core._main.cljs$core$IFn$_invoke$arity$variadic(argseq__23295__auto__);
});

parenode.core._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var server = parenode.core.app.listen((7000),(function (){
return console.log("parenode web repl is up!");
}));
return server;
});

parenode.core._main.cljs$lang$maxFixedArity = (0);

parenode.core._main.cljs$lang$applyTo = (function (seq23685){
return parenode.core._main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23685));
});
cljs.core._STAR_main_cli_fn_STAR_ = parenode.core._main;

//# sourceMappingURL=core.js.map