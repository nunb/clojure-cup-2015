// Compiled by ClojureScript 1.7.170 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__23929__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__23929 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23930__i = 0, G__23930__a = new Array(arguments.length -  0);
while (G__23930__i < G__23930__a.length) {G__23930__a[G__23930__i] = arguments[G__23930__i + 0]; ++G__23930__i;}
  args = new cljs.core.IndexedSeq(G__23930__a,0);
} 
return G__23929__delegate.call(this,args);};
G__23929.cljs$lang$maxFixedArity = 0;
G__23929.cljs$lang$applyTo = (function (arglist__23931){
var args = cljs.core.seq(arglist__23931);
return G__23929__delegate(args);
});
G__23929.cljs$core$IFn$_invoke$arity$variadic = G__23929__delegate;
return G__23929;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__23932__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__23932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23933__i = 0, G__23933__a = new Array(arguments.length -  0);
while (G__23933__i < G__23933__a.length) {G__23933__a[G__23933__i] = arguments[G__23933__i + 0]; ++G__23933__i;}
  args = new cljs.core.IndexedSeq(G__23933__a,0);
} 
return G__23932__delegate.call(this,args);};
G__23932.cljs$lang$maxFixedArity = 0;
G__23932.cljs$lang$applyTo = (function (arglist__23934){
var args = cljs.core.seq(arglist__23934);
return G__23932__delegate(args);
});
G__23932.cljs$core$IFn$_invoke$arity$variadic = G__23932__delegate;
return G__23932;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map