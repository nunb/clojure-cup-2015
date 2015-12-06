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
