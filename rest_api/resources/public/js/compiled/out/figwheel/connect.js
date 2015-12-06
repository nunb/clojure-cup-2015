// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('clojure_cup_2015.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__21127__delegate = function (x){
if(cljs.core.truth_(clojure_cup_2015.core.on_js_reload)){
return cljs.core.apply.call(null,clojure_cup_2015.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'clojure-cup-2015.core/on-js-reload' is missing");
}
};
var G__21127 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__21128__i = 0, G__21128__a = new Array(arguments.length -  0);
while (G__21128__i < G__21128__a.length) {G__21128__a[G__21128__i] = arguments[G__21128__i + 0]; ++G__21128__i;}
  x = new cljs.core.IndexedSeq(G__21128__a,0);
} 
return G__21127__delegate.call(this,x);};
G__21127.cljs$lang$maxFixedArity = 0;
G__21127.cljs$lang$applyTo = (function (arglist__21129){
var x = cljs.core.seq(arglist__21129);
return G__21127__delegate(x);
});
G__21127.cljs$core$IFn$_invoke$arity$variadic = G__21127__delegate;
return G__21127;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1449428744154