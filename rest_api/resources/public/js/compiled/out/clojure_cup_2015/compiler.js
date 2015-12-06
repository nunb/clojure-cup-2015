// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure_cup_2015.compiler');
goog.require('cljs.core');
goog.require('cljs.core.match');
goog.require('cljs.reader');
clojure_cup_2015.compiler.scheme_literals__GT_keywords = (function clojure_cup_2015$compiler$scheme_literals__GT_keywords(literals,a_seq){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([a_seq], true),literals))){
return cljs.core.keyword.call(null,a_seq);
} else {
return a_seq;

}
});

//# sourceMappingURL=compiler.js.map?rel=1449413060870