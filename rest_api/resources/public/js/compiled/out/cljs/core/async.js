// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args19502 = [];
var len__17976__auto___19508 = arguments.length;
var i__17977__auto___19509 = (0);
while(true){
if((i__17977__auto___19509 < len__17976__auto___19508)){
args19502.push((arguments[i__17977__auto___19509]));

var G__19510 = (i__17977__auto___19509 + (1));
i__17977__auto___19509 = G__19510;
continue;
} else {
}
break;
}

var G__19504 = args19502.length;
switch (G__19504) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19502.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async19505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19505 = (function (f,blockable,meta19506){
this.f = f;
this.blockable = blockable;
this.meta19506 = meta19506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19507,meta19506__$1){
var self__ = this;
var _19507__$1 = this;
return (new cljs.core.async.t_cljs$core$async19505(self__.f,self__.blockable,meta19506__$1));
});

cljs.core.async.t_cljs$core$async19505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19507){
var self__ = this;
var _19507__$1 = this;
return self__.meta19506;
});

cljs.core.async.t_cljs$core$async19505.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19505.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async19505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async19505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta19506","meta19506",1421766404,null)], null);
});

cljs.core.async.t_cljs$core$async19505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19505";

cljs.core.async.t_cljs$core$async19505.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async19505");
});

cljs.core.async.__GT_t_cljs$core$async19505 = (function cljs$core$async$__GT_t_cljs$core$async19505(f__$1,blockable__$1,meta19506){
return (new cljs.core.async.t_cljs$core$async19505(f__$1,blockable__$1,meta19506));
});

}

return (new cljs.core.async.t_cljs$core$async19505(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args19514 = [];
var len__17976__auto___19517 = arguments.length;
var i__17977__auto___19518 = (0);
while(true){
if((i__17977__auto___19518 < len__17976__auto___19517)){
args19514.push((arguments[i__17977__auto___19518]));

var G__19519 = (i__17977__auto___19518 + (1));
i__17977__auto___19518 = G__19519;
continue;
} else {
}
break;
}

var G__19516 = args19514.length;
switch (G__19516) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19514.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args19521 = [];
var len__17976__auto___19524 = arguments.length;
var i__17977__auto___19525 = (0);
while(true){
if((i__17977__auto___19525 < len__17976__auto___19524)){
args19521.push((arguments[i__17977__auto___19525]));

var G__19526 = (i__17977__auto___19525 + (1));
i__17977__auto___19525 = G__19526;
continue;
} else {
}
break;
}

var G__19523 = args19521.length;
switch (G__19523) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19521.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args19528 = [];
var len__17976__auto___19531 = arguments.length;
var i__17977__auto___19532 = (0);
while(true){
if((i__17977__auto___19532 < len__17976__auto___19531)){
args19528.push((arguments[i__17977__auto___19532]));

var G__19533 = (i__17977__auto___19532 + (1));
i__17977__auto___19532 = G__19533;
continue;
} else {
}
break;
}

var G__19530 = args19528.length;
switch (G__19530) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19528.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_19535 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_19535);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_19535,ret){
return (function (){
return fn1.call(null,val_19535);
});})(val_19535,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args19536 = [];
var len__17976__auto___19539 = arguments.length;
var i__17977__auto___19540 = (0);
while(true){
if((i__17977__auto___19540 < len__17976__auto___19539)){
args19536.push((arguments[i__17977__auto___19540]));

var G__19541 = (i__17977__auto___19540 + (1));
i__17977__auto___19540 = G__19541;
continue;
} else {
}
break;
}

var G__19538 = args19536.length;
switch (G__19538) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19536.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17820__auto___19543 = n;
var x_19544 = (0);
while(true){
if((x_19544 < n__17820__auto___19543)){
(a[x_19544] = (0));

var G__19545 = (x_19544 + (1));
x_19544 = G__19545;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__19546 = (i + (1));
i = G__19546;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async19550 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19550 = (function (alt_flag,flag,meta19551){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta19551 = meta19551;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_19552,meta19551__$1){
var self__ = this;
var _19552__$1 = this;
return (new cljs.core.async.t_cljs$core$async19550(self__.alt_flag,self__.flag,meta19551__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async19550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_19552){
var self__ = this;
var _19552__$1 = this;
return self__.meta19551;
});})(flag))
;

cljs.core.async.t_cljs$core$async19550.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19550.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async19550.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19550.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async19550.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta19551","meta19551",-1933296796,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async19550.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19550.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19550";

cljs.core.async.t_cljs$core$async19550.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async19550");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async19550 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async19550(alt_flag__$1,flag__$1,meta19551){
return (new cljs.core.async.t_cljs$core$async19550(alt_flag__$1,flag__$1,meta19551));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async19550(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async19556 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19556 = (function (alt_handler,flag,cb,meta19557){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta19557 = meta19557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19558,meta19557__$1){
var self__ = this;
var _19558__$1 = this;
return (new cljs.core.async.t_cljs$core$async19556(self__.alt_handler,self__.flag,self__.cb,meta19557__$1));
});

cljs.core.async.t_cljs$core$async19556.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19558){
var self__ = this;
var _19558__$1 = this;
return self__.meta19557;
});

cljs.core.async.t_cljs$core$async19556.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async19556.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async19556.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async19556.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async19556.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta19557","meta19557",1086321942,null)], null);
});

cljs.core.async.t_cljs$core$async19556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19556";

cljs.core.async.t_cljs$core$async19556.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async19556");
});

cljs.core.async.__GT_t_cljs$core$async19556 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async19556(alt_handler__$1,flag__$1,cb__$1,meta19557){
return (new cljs.core.async.t_cljs$core$async19556(alt_handler__$1,flag__$1,cb__$1,meta19557));
});

}

return (new cljs.core.async.t_cljs$core$async19556(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19559_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19559_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__19560_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__19560_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16917__auto__ = wport;
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19561 = (i + (1));
i = G__19561;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16917__auto__ = ret;
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16905__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16905__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16905__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17983__auto__ = [];
var len__17976__auto___19567 = arguments.length;
var i__17977__auto___19568 = (0);
while(true){
if((i__17977__auto___19568 < len__17976__auto___19567)){
args__17983__auto__.push((arguments[i__17977__auto___19568]));

var G__19569 = (i__17977__auto___19568 + (1));
i__17977__auto___19568 = G__19569;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__19564){
var map__19565 = p__19564;
var map__19565__$1 = ((((!((map__19565 == null)))?((((map__19565.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19565.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19565):map__19565);
var opts = map__19565__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq19562){
var G__19563 = cljs.core.first.call(null,seq19562);
var seq19562__$1 = cljs.core.next.call(null,seq19562);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19563,seq19562__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args19570 = [];
var len__17976__auto___19620 = arguments.length;
var i__17977__auto___19621 = (0);
while(true){
if((i__17977__auto___19621 < len__17976__auto___19620)){
args19570.push((arguments[i__17977__auto___19621]));

var G__19622 = (i__17977__auto___19621 + (1));
i__17977__auto___19621 = G__19622;
continue;
} else {
}
break;
}

var G__19572 = args19570.length;
switch (G__19572) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19570.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19457__auto___19624 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___19624){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___19624){
return (function (state_19596){
var state_val_19597 = (state_19596[(1)]);
if((state_val_19597 === (7))){
var inst_19592 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
var statearr_19598_19625 = state_19596__$1;
(statearr_19598_19625[(2)] = inst_19592);

(statearr_19598_19625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (1))){
var state_19596__$1 = state_19596;
var statearr_19599_19626 = state_19596__$1;
(statearr_19599_19626[(2)] = null);

(statearr_19599_19626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (4))){
var inst_19575 = (state_19596[(7)]);
var inst_19575__$1 = (state_19596[(2)]);
var inst_19576 = (inst_19575__$1 == null);
var state_19596__$1 = (function (){var statearr_19600 = state_19596;
(statearr_19600[(7)] = inst_19575__$1);

return statearr_19600;
})();
if(cljs.core.truth_(inst_19576)){
var statearr_19601_19627 = state_19596__$1;
(statearr_19601_19627[(1)] = (5));

} else {
var statearr_19602_19628 = state_19596__$1;
(statearr_19602_19628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (13))){
var state_19596__$1 = state_19596;
var statearr_19603_19629 = state_19596__$1;
(statearr_19603_19629[(2)] = null);

(statearr_19603_19629[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (6))){
var inst_19575 = (state_19596[(7)]);
var state_19596__$1 = state_19596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19596__$1,(11),to,inst_19575);
} else {
if((state_val_19597 === (3))){
var inst_19594 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19596__$1,inst_19594);
} else {
if((state_val_19597 === (12))){
var state_19596__$1 = state_19596;
var statearr_19604_19630 = state_19596__$1;
(statearr_19604_19630[(2)] = null);

(statearr_19604_19630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (2))){
var state_19596__$1 = state_19596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19596__$1,(4),from);
} else {
if((state_val_19597 === (11))){
var inst_19585 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
if(cljs.core.truth_(inst_19585)){
var statearr_19605_19631 = state_19596__$1;
(statearr_19605_19631[(1)] = (12));

} else {
var statearr_19606_19632 = state_19596__$1;
(statearr_19606_19632[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (9))){
var state_19596__$1 = state_19596;
var statearr_19607_19633 = state_19596__$1;
(statearr_19607_19633[(2)] = null);

(statearr_19607_19633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (5))){
var state_19596__$1 = state_19596;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19608_19634 = state_19596__$1;
(statearr_19608_19634[(1)] = (8));

} else {
var statearr_19609_19635 = state_19596__$1;
(statearr_19609_19635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (14))){
var inst_19590 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
var statearr_19610_19636 = state_19596__$1;
(statearr_19610_19636[(2)] = inst_19590);

(statearr_19610_19636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (10))){
var inst_19582 = (state_19596[(2)]);
var state_19596__$1 = state_19596;
var statearr_19611_19637 = state_19596__$1;
(statearr_19611_19637[(2)] = inst_19582);

(statearr_19611_19637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19597 === (8))){
var inst_19579 = cljs.core.async.close_BANG_.call(null,to);
var state_19596__$1 = state_19596;
var statearr_19612_19638 = state_19596__$1;
(statearr_19612_19638[(2)] = inst_19579);

(statearr_19612_19638[(1)] = (10));


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
});})(c__19457__auto___19624))
;
return ((function (switch__19345__auto__,c__19457__auto___19624){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_19616 = [null,null,null,null,null,null,null,null];
(statearr_19616[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_19616[(1)] = (1));

return statearr_19616;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_19596){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_19596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e19617){if((e19617 instanceof Object)){
var ex__19349__auto__ = e19617;
var statearr_19618_19639 = state_19596;
(statearr_19618_19639[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19640 = state_19596;
state_19596 = G__19640;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_19596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_19596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___19624))
})();
var state__19459__auto__ = (function (){var statearr_19619 = f__19458__auto__.call(null);
(statearr_19619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___19624);

return statearr_19619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___19624))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__19824){
var vec__19825 = p__19824;
var v = cljs.core.nth.call(null,vec__19825,(0),null);
var p = cljs.core.nth.call(null,vec__19825,(1),null);
var job = vec__19825;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19457__auto___20007 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___20007,res,vec__19825,v,p,job,jobs,results){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___20007,res,vec__19825,v,p,job,jobs,results){
return (function (state_19830){
var state_val_19831 = (state_19830[(1)]);
if((state_val_19831 === (1))){
var state_19830__$1 = state_19830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19830__$1,(2),res,v);
} else {
if((state_val_19831 === (2))){
var inst_19827 = (state_19830[(2)]);
var inst_19828 = cljs.core.async.close_BANG_.call(null,res);
var state_19830__$1 = (function (){var statearr_19832 = state_19830;
(statearr_19832[(7)] = inst_19827);

return statearr_19832;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19830__$1,inst_19828);
} else {
return null;
}
}
});})(c__19457__auto___20007,res,vec__19825,v,p,job,jobs,results))
;
return ((function (switch__19345__auto__,c__19457__auto___20007,res,vec__19825,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_19836 = [null,null,null,null,null,null,null,null];
(statearr_19836[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_19836[(1)] = (1));

return statearr_19836;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_19830){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_19830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e19837){if((e19837 instanceof Object)){
var ex__19349__auto__ = e19837;
var statearr_19838_20008 = state_19830;
(statearr_19838_20008[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20009 = state_19830;
state_19830 = G__20009;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_19830){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_19830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___20007,res,vec__19825,v,p,job,jobs,results))
})();
var state__19459__auto__ = (function (){var statearr_19839 = f__19458__auto__.call(null);
(statearr_19839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___20007);

return statearr_19839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___20007,res,vec__19825,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__19840){
var vec__19841 = p__19840;
var v = cljs.core.nth.call(null,vec__19841,(0),null);
var p = cljs.core.nth.call(null,vec__19841,(1),null);
var job = vec__19841;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17820__auto___20010 = n;
var __20011 = (0);
while(true){
if((__20011 < n__17820__auto___20010)){
var G__19842_20012 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__19842_20012) {
case "compute":
var c__19457__auto___20014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20011,c__19457__auto___20014,G__19842_20012,n__17820__auto___20010,jobs,results,process,async){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (__20011,c__19457__auto___20014,G__19842_20012,n__17820__auto___20010,jobs,results,process,async){
return (function (state_19855){
var state_val_19856 = (state_19855[(1)]);
if((state_val_19856 === (1))){
var state_19855__$1 = state_19855;
var statearr_19857_20015 = state_19855__$1;
(statearr_19857_20015[(2)] = null);

(statearr_19857_20015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (2))){
var state_19855__$1 = state_19855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19855__$1,(4),jobs);
} else {
if((state_val_19856 === (3))){
var inst_19853 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19855__$1,inst_19853);
} else {
if((state_val_19856 === (4))){
var inst_19845 = (state_19855[(2)]);
var inst_19846 = process.call(null,inst_19845);
var state_19855__$1 = state_19855;
if(cljs.core.truth_(inst_19846)){
var statearr_19858_20016 = state_19855__$1;
(statearr_19858_20016[(1)] = (5));

} else {
var statearr_19859_20017 = state_19855__$1;
(statearr_19859_20017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (5))){
var state_19855__$1 = state_19855;
var statearr_19860_20018 = state_19855__$1;
(statearr_19860_20018[(2)] = null);

(statearr_19860_20018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (6))){
var state_19855__$1 = state_19855;
var statearr_19861_20019 = state_19855__$1;
(statearr_19861_20019[(2)] = null);

(statearr_19861_20019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19856 === (7))){
var inst_19851 = (state_19855[(2)]);
var state_19855__$1 = state_19855;
var statearr_19862_20020 = state_19855__$1;
(statearr_19862_20020[(2)] = inst_19851);

(statearr_19862_20020[(1)] = (3));


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
});})(__20011,c__19457__auto___20014,G__19842_20012,n__17820__auto___20010,jobs,results,process,async))
;
return ((function (__20011,switch__19345__auto__,c__19457__auto___20014,G__19842_20012,n__17820__auto___20010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_19866 = [null,null,null,null,null,null,null];
(statearr_19866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_19866[(1)] = (1));

return statearr_19866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_19855){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_19855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e19867){if((e19867 instanceof Object)){
var ex__19349__auto__ = e19867;
var statearr_19868_20021 = state_19855;
(statearr_19868_20021[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20022 = state_19855;
state_19855 = G__20022;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_19855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_19855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(__20011,switch__19345__auto__,c__19457__auto___20014,G__19842_20012,n__17820__auto___20010,jobs,results,process,async))
})();
var state__19459__auto__ = (function (){var statearr_19869 = f__19458__auto__.call(null);
(statearr_19869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___20014);

return statearr_19869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(__20011,c__19457__auto___20014,G__19842_20012,n__17820__auto___20010,jobs,results,process,async))
);


break;
case "async":
var c__19457__auto___20023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20011,c__19457__auto___20023,G__19842_20012,n__17820__auto___20010,jobs,results,process,async){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (__20011,c__19457__auto___20023,G__19842_20012,n__17820__auto___20010,jobs,results,process,async){
return (function (state_19882){
var state_val_19883 = (state_19882[(1)]);
if((state_val_19883 === (1))){
var state_19882__$1 = state_19882;
var statearr_19884_20024 = state_19882__$1;
(statearr_19884_20024[(2)] = null);

(statearr_19884_20024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19883 === (2))){
var state_19882__$1 = state_19882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19882__$1,(4),jobs);
} else {
if((state_val_19883 === (3))){
var inst_19880 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19882__$1,inst_19880);
} else {
if((state_val_19883 === (4))){
var inst_19872 = (state_19882[(2)]);
var inst_19873 = async.call(null,inst_19872);
var state_19882__$1 = state_19882;
if(cljs.core.truth_(inst_19873)){
var statearr_19885_20025 = state_19882__$1;
(statearr_19885_20025[(1)] = (5));

} else {
var statearr_19886_20026 = state_19882__$1;
(statearr_19886_20026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19883 === (5))){
var state_19882__$1 = state_19882;
var statearr_19887_20027 = state_19882__$1;
(statearr_19887_20027[(2)] = null);

(statearr_19887_20027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19883 === (6))){
var state_19882__$1 = state_19882;
var statearr_19888_20028 = state_19882__$1;
(statearr_19888_20028[(2)] = null);

(statearr_19888_20028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19883 === (7))){
var inst_19878 = (state_19882[(2)]);
var state_19882__$1 = state_19882;
var statearr_19889_20029 = state_19882__$1;
(statearr_19889_20029[(2)] = inst_19878);

(statearr_19889_20029[(1)] = (3));


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
});})(__20011,c__19457__auto___20023,G__19842_20012,n__17820__auto___20010,jobs,results,process,async))
;
return ((function (__20011,switch__19345__auto__,c__19457__auto___20023,G__19842_20012,n__17820__auto___20010,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_19893 = [null,null,null,null,null,null,null];
(statearr_19893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_19893[(1)] = (1));

return statearr_19893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_19882){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_19882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e19894){if((e19894 instanceof Object)){
var ex__19349__auto__ = e19894;
var statearr_19895_20030 = state_19882;
(statearr_19895_20030[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20031 = state_19882;
state_19882 = G__20031;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_19882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_19882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(__20011,switch__19345__auto__,c__19457__auto___20023,G__19842_20012,n__17820__auto___20010,jobs,results,process,async))
})();
var state__19459__auto__ = (function (){var statearr_19896 = f__19458__auto__.call(null);
(statearr_19896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___20023);

return statearr_19896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(__20011,c__19457__auto___20023,G__19842_20012,n__17820__auto___20010,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20032 = (__20011 + (1));
__20011 = G__20032;
continue;
} else {
}
break;
}

var c__19457__auto___20033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___20033,jobs,results,process,async){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___20033,jobs,results,process,async){
return (function (state_19918){
var state_val_19919 = (state_19918[(1)]);
if((state_val_19919 === (1))){
var state_19918__$1 = state_19918;
var statearr_19920_20034 = state_19918__$1;
(statearr_19920_20034[(2)] = null);

(statearr_19920_20034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19919 === (2))){
var state_19918__$1 = state_19918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19918__$1,(4),from);
} else {
if((state_val_19919 === (3))){
var inst_19916 = (state_19918[(2)]);
var state_19918__$1 = state_19918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19918__$1,inst_19916);
} else {
if((state_val_19919 === (4))){
var inst_19899 = (state_19918[(7)]);
var inst_19899__$1 = (state_19918[(2)]);
var inst_19900 = (inst_19899__$1 == null);
var state_19918__$1 = (function (){var statearr_19921 = state_19918;
(statearr_19921[(7)] = inst_19899__$1);

return statearr_19921;
})();
if(cljs.core.truth_(inst_19900)){
var statearr_19922_20035 = state_19918__$1;
(statearr_19922_20035[(1)] = (5));

} else {
var statearr_19923_20036 = state_19918__$1;
(statearr_19923_20036[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19919 === (5))){
var inst_19902 = cljs.core.async.close_BANG_.call(null,jobs);
var state_19918__$1 = state_19918;
var statearr_19924_20037 = state_19918__$1;
(statearr_19924_20037[(2)] = inst_19902);

(statearr_19924_20037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19919 === (6))){
var inst_19899 = (state_19918[(7)]);
var inst_19904 = (state_19918[(8)]);
var inst_19904__$1 = cljs.core.async.chan.call(null,(1));
var inst_19905 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19906 = [inst_19899,inst_19904__$1];
var inst_19907 = (new cljs.core.PersistentVector(null,2,(5),inst_19905,inst_19906,null));
var state_19918__$1 = (function (){var statearr_19925 = state_19918;
(statearr_19925[(8)] = inst_19904__$1);

return statearr_19925;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19918__$1,(8),jobs,inst_19907);
} else {
if((state_val_19919 === (7))){
var inst_19914 = (state_19918[(2)]);
var state_19918__$1 = state_19918;
var statearr_19926_20038 = state_19918__$1;
(statearr_19926_20038[(2)] = inst_19914);

(statearr_19926_20038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19919 === (8))){
var inst_19904 = (state_19918[(8)]);
var inst_19909 = (state_19918[(2)]);
var state_19918__$1 = (function (){var statearr_19927 = state_19918;
(statearr_19927[(9)] = inst_19909);

return statearr_19927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19918__$1,(9),results,inst_19904);
} else {
if((state_val_19919 === (9))){
var inst_19911 = (state_19918[(2)]);
var state_19918__$1 = (function (){var statearr_19928 = state_19918;
(statearr_19928[(10)] = inst_19911);

return statearr_19928;
})();
var statearr_19929_20039 = state_19918__$1;
(statearr_19929_20039[(2)] = null);

(statearr_19929_20039[(1)] = (2));


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
});})(c__19457__auto___20033,jobs,results,process,async))
;
return ((function (switch__19345__auto__,c__19457__auto___20033,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_19933 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19933[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_19933[(1)] = (1));

return statearr_19933;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_19918){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_19918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e19934){if((e19934 instanceof Object)){
var ex__19349__auto__ = e19934;
var statearr_19935_20040 = state_19918;
(statearr_19935_20040[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20041 = state_19918;
state_19918 = G__20041;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_19918){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_19918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___20033,jobs,results,process,async))
})();
var state__19459__auto__ = (function (){var statearr_19936 = f__19458__auto__.call(null);
(statearr_19936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___20033);

return statearr_19936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___20033,jobs,results,process,async))
);


var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__,jobs,results,process,async){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__,jobs,results,process,async){
return (function (state_19974){
var state_val_19975 = (state_19974[(1)]);
if((state_val_19975 === (7))){
var inst_19970 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19976_20042 = state_19974__$1;
(statearr_19976_20042[(2)] = inst_19970);

(statearr_19976_20042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (20))){
var state_19974__$1 = state_19974;
var statearr_19977_20043 = state_19974__$1;
(statearr_19977_20043[(2)] = null);

(statearr_19977_20043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (1))){
var state_19974__$1 = state_19974;
var statearr_19978_20044 = state_19974__$1;
(statearr_19978_20044[(2)] = null);

(statearr_19978_20044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (4))){
var inst_19939 = (state_19974[(7)]);
var inst_19939__$1 = (state_19974[(2)]);
var inst_19940 = (inst_19939__$1 == null);
var state_19974__$1 = (function (){var statearr_19979 = state_19974;
(statearr_19979[(7)] = inst_19939__$1);

return statearr_19979;
})();
if(cljs.core.truth_(inst_19940)){
var statearr_19980_20045 = state_19974__$1;
(statearr_19980_20045[(1)] = (5));

} else {
var statearr_19981_20046 = state_19974__$1;
(statearr_19981_20046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (15))){
var inst_19952 = (state_19974[(8)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19974__$1,(18),to,inst_19952);
} else {
if((state_val_19975 === (21))){
var inst_19965 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19982_20047 = state_19974__$1;
(statearr_19982_20047[(2)] = inst_19965);

(statearr_19982_20047[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (13))){
var inst_19967 = (state_19974[(2)]);
var state_19974__$1 = (function (){var statearr_19983 = state_19974;
(statearr_19983[(9)] = inst_19967);

return statearr_19983;
})();
var statearr_19984_20048 = state_19974__$1;
(statearr_19984_20048[(2)] = null);

(statearr_19984_20048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (6))){
var inst_19939 = (state_19974[(7)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19974__$1,(11),inst_19939);
} else {
if((state_val_19975 === (17))){
var inst_19960 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
if(cljs.core.truth_(inst_19960)){
var statearr_19985_20049 = state_19974__$1;
(statearr_19985_20049[(1)] = (19));

} else {
var statearr_19986_20050 = state_19974__$1;
(statearr_19986_20050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (3))){
var inst_19972 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19974__$1,inst_19972);
} else {
if((state_val_19975 === (12))){
var inst_19949 = (state_19974[(10)]);
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19974__$1,(14),inst_19949);
} else {
if((state_val_19975 === (2))){
var state_19974__$1 = state_19974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19974__$1,(4),results);
} else {
if((state_val_19975 === (19))){
var state_19974__$1 = state_19974;
var statearr_19987_20051 = state_19974__$1;
(statearr_19987_20051[(2)] = null);

(statearr_19987_20051[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (11))){
var inst_19949 = (state_19974[(2)]);
var state_19974__$1 = (function (){var statearr_19988 = state_19974;
(statearr_19988[(10)] = inst_19949);

return statearr_19988;
})();
var statearr_19989_20052 = state_19974__$1;
(statearr_19989_20052[(2)] = null);

(statearr_19989_20052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (9))){
var state_19974__$1 = state_19974;
var statearr_19990_20053 = state_19974__$1;
(statearr_19990_20053[(2)] = null);

(statearr_19990_20053[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (5))){
var state_19974__$1 = state_19974;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19991_20054 = state_19974__$1;
(statearr_19991_20054[(1)] = (8));

} else {
var statearr_19992_20055 = state_19974__$1;
(statearr_19992_20055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (14))){
var inst_19952 = (state_19974[(8)]);
var inst_19954 = (state_19974[(11)]);
var inst_19952__$1 = (state_19974[(2)]);
var inst_19953 = (inst_19952__$1 == null);
var inst_19954__$1 = cljs.core.not.call(null,inst_19953);
var state_19974__$1 = (function (){var statearr_19993 = state_19974;
(statearr_19993[(8)] = inst_19952__$1);

(statearr_19993[(11)] = inst_19954__$1);

return statearr_19993;
})();
if(inst_19954__$1){
var statearr_19994_20056 = state_19974__$1;
(statearr_19994_20056[(1)] = (15));

} else {
var statearr_19995_20057 = state_19974__$1;
(statearr_19995_20057[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (16))){
var inst_19954 = (state_19974[(11)]);
var state_19974__$1 = state_19974;
var statearr_19996_20058 = state_19974__$1;
(statearr_19996_20058[(2)] = inst_19954);

(statearr_19996_20058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (10))){
var inst_19946 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19997_20059 = state_19974__$1;
(statearr_19997_20059[(2)] = inst_19946);

(statearr_19997_20059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (18))){
var inst_19957 = (state_19974[(2)]);
var state_19974__$1 = state_19974;
var statearr_19998_20060 = state_19974__$1;
(statearr_19998_20060[(2)] = inst_19957);

(statearr_19998_20060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19975 === (8))){
var inst_19943 = cljs.core.async.close_BANG_.call(null,to);
var state_19974__$1 = state_19974;
var statearr_19999_20061 = state_19974__$1;
(statearr_19999_20061[(2)] = inst_19943);

(statearr_19999_20061[(1)] = (10));


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
});})(c__19457__auto__,jobs,results,process,async))
;
return ((function (switch__19345__auto__,c__19457__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_20003 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__);

(statearr_20003[(1)] = (1));

return statearr_20003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1 = (function (state_19974){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_19974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e20004){if((e20004 instanceof Object)){
var ex__19349__auto__ = e20004;
var statearr_20005_20062 = state_19974;
(statearr_20005_20062[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20063 = state_19974;
state_19974 = G__20063;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__ = function(state_19974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1.call(this,state_19974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__,jobs,results,process,async))
})();
var state__19459__auto__ = (function (){var statearr_20006 = f__19458__auto__.call(null);
(statearr_20006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_20006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__,jobs,results,process,async))
);

return c__19457__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args20064 = [];
var len__17976__auto___20067 = arguments.length;
var i__17977__auto___20068 = (0);
while(true){
if((i__17977__auto___20068 < len__17976__auto___20067)){
args20064.push((arguments[i__17977__auto___20068]));

var G__20069 = (i__17977__auto___20068 + (1));
i__17977__auto___20068 = G__20069;
continue;
} else {
}
break;
}

var G__20066 = args20064.length;
switch (G__20066) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20064.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args20071 = [];
var len__17976__auto___20074 = arguments.length;
var i__17977__auto___20075 = (0);
while(true){
if((i__17977__auto___20075 < len__17976__auto___20074)){
args20071.push((arguments[i__17977__auto___20075]));

var G__20076 = (i__17977__auto___20075 + (1));
i__17977__auto___20075 = G__20076;
continue;
} else {
}
break;
}

var G__20073 = args20071.length;
switch (G__20073) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20071.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args20078 = [];
var len__17976__auto___20131 = arguments.length;
var i__17977__auto___20132 = (0);
while(true){
if((i__17977__auto___20132 < len__17976__auto___20131)){
args20078.push((arguments[i__17977__auto___20132]));

var G__20133 = (i__17977__auto___20132 + (1));
i__17977__auto___20132 = G__20133;
continue;
} else {
}
break;
}

var G__20080 = args20078.length;
switch (G__20080) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20078.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19457__auto___20135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___20135,tc,fc){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___20135,tc,fc){
return (function (state_20106){
var state_val_20107 = (state_20106[(1)]);
if((state_val_20107 === (7))){
var inst_20102 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
var statearr_20108_20136 = state_20106__$1;
(statearr_20108_20136[(2)] = inst_20102);

(statearr_20108_20136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (1))){
var state_20106__$1 = state_20106;
var statearr_20109_20137 = state_20106__$1;
(statearr_20109_20137[(2)] = null);

(statearr_20109_20137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (4))){
var inst_20083 = (state_20106[(7)]);
var inst_20083__$1 = (state_20106[(2)]);
var inst_20084 = (inst_20083__$1 == null);
var state_20106__$1 = (function (){var statearr_20110 = state_20106;
(statearr_20110[(7)] = inst_20083__$1);

return statearr_20110;
})();
if(cljs.core.truth_(inst_20084)){
var statearr_20111_20138 = state_20106__$1;
(statearr_20111_20138[(1)] = (5));

} else {
var statearr_20112_20139 = state_20106__$1;
(statearr_20112_20139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (13))){
var state_20106__$1 = state_20106;
var statearr_20113_20140 = state_20106__$1;
(statearr_20113_20140[(2)] = null);

(statearr_20113_20140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (6))){
var inst_20083 = (state_20106[(7)]);
var inst_20089 = p.call(null,inst_20083);
var state_20106__$1 = state_20106;
if(cljs.core.truth_(inst_20089)){
var statearr_20114_20141 = state_20106__$1;
(statearr_20114_20141[(1)] = (9));

} else {
var statearr_20115_20142 = state_20106__$1;
(statearr_20115_20142[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (3))){
var inst_20104 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20106__$1,inst_20104);
} else {
if((state_val_20107 === (12))){
var state_20106__$1 = state_20106;
var statearr_20116_20143 = state_20106__$1;
(statearr_20116_20143[(2)] = null);

(statearr_20116_20143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (2))){
var state_20106__$1 = state_20106;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20106__$1,(4),ch);
} else {
if((state_val_20107 === (11))){
var inst_20083 = (state_20106[(7)]);
var inst_20093 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20106__$1,(8),inst_20093,inst_20083);
} else {
if((state_val_20107 === (9))){
var state_20106__$1 = state_20106;
var statearr_20117_20144 = state_20106__$1;
(statearr_20117_20144[(2)] = tc);

(statearr_20117_20144[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (5))){
var inst_20086 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20087 = cljs.core.async.close_BANG_.call(null,fc);
var state_20106__$1 = (function (){var statearr_20118 = state_20106;
(statearr_20118[(8)] = inst_20086);

return statearr_20118;
})();
var statearr_20119_20145 = state_20106__$1;
(statearr_20119_20145[(2)] = inst_20087);

(statearr_20119_20145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (14))){
var inst_20100 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
var statearr_20120_20146 = state_20106__$1;
(statearr_20120_20146[(2)] = inst_20100);

(statearr_20120_20146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (10))){
var state_20106__$1 = state_20106;
var statearr_20121_20147 = state_20106__$1;
(statearr_20121_20147[(2)] = fc);

(statearr_20121_20147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20107 === (8))){
var inst_20095 = (state_20106[(2)]);
var state_20106__$1 = state_20106;
if(cljs.core.truth_(inst_20095)){
var statearr_20122_20148 = state_20106__$1;
(statearr_20122_20148[(1)] = (12));

} else {
var statearr_20123_20149 = state_20106__$1;
(statearr_20123_20149[(1)] = (13));

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
});})(c__19457__auto___20135,tc,fc))
;
return ((function (switch__19345__auto__,c__19457__auto___20135,tc,fc){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_20127 = [null,null,null,null,null,null,null,null,null];
(statearr_20127[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_20127[(1)] = (1));

return statearr_20127;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_20106){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_20106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e20128){if((e20128 instanceof Object)){
var ex__19349__auto__ = e20128;
var statearr_20129_20150 = state_20106;
(statearr_20129_20150[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20151 = state_20106;
state_20106 = G__20151;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_20106){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_20106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___20135,tc,fc))
})();
var state__19459__auto__ = (function (){var statearr_20130 = f__19458__auto__.call(null);
(statearr_20130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___20135);

return statearr_20130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___20135,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__){
return (function (state_20215){
var state_val_20216 = (state_20215[(1)]);
if((state_val_20216 === (7))){
var inst_20211 = (state_20215[(2)]);
var state_20215__$1 = state_20215;
var statearr_20217_20238 = state_20215__$1;
(statearr_20217_20238[(2)] = inst_20211);

(statearr_20217_20238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20216 === (1))){
var inst_20195 = init;
var state_20215__$1 = (function (){var statearr_20218 = state_20215;
(statearr_20218[(7)] = inst_20195);

return statearr_20218;
})();
var statearr_20219_20239 = state_20215__$1;
(statearr_20219_20239[(2)] = null);

(statearr_20219_20239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20216 === (4))){
var inst_20198 = (state_20215[(8)]);
var inst_20198__$1 = (state_20215[(2)]);
var inst_20199 = (inst_20198__$1 == null);
var state_20215__$1 = (function (){var statearr_20220 = state_20215;
(statearr_20220[(8)] = inst_20198__$1);

return statearr_20220;
})();
if(cljs.core.truth_(inst_20199)){
var statearr_20221_20240 = state_20215__$1;
(statearr_20221_20240[(1)] = (5));

} else {
var statearr_20222_20241 = state_20215__$1;
(statearr_20222_20241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20216 === (6))){
var inst_20198 = (state_20215[(8)]);
var inst_20195 = (state_20215[(7)]);
var inst_20202 = (state_20215[(9)]);
var inst_20202__$1 = f.call(null,inst_20195,inst_20198);
var inst_20203 = cljs.core.reduced_QMARK_.call(null,inst_20202__$1);
var state_20215__$1 = (function (){var statearr_20223 = state_20215;
(statearr_20223[(9)] = inst_20202__$1);

return statearr_20223;
})();
if(inst_20203){
var statearr_20224_20242 = state_20215__$1;
(statearr_20224_20242[(1)] = (8));

} else {
var statearr_20225_20243 = state_20215__$1;
(statearr_20225_20243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20216 === (3))){
var inst_20213 = (state_20215[(2)]);
var state_20215__$1 = state_20215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20215__$1,inst_20213);
} else {
if((state_val_20216 === (2))){
var state_20215__$1 = state_20215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20215__$1,(4),ch);
} else {
if((state_val_20216 === (9))){
var inst_20202 = (state_20215[(9)]);
var inst_20195 = inst_20202;
var state_20215__$1 = (function (){var statearr_20226 = state_20215;
(statearr_20226[(7)] = inst_20195);

return statearr_20226;
})();
var statearr_20227_20244 = state_20215__$1;
(statearr_20227_20244[(2)] = null);

(statearr_20227_20244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20216 === (5))){
var inst_20195 = (state_20215[(7)]);
var state_20215__$1 = state_20215;
var statearr_20228_20245 = state_20215__$1;
(statearr_20228_20245[(2)] = inst_20195);

(statearr_20228_20245[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20216 === (10))){
var inst_20209 = (state_20215[(2)]);
var state_20215__$1 = state_20215;
var statearr_20229_20246 = state_20215__$1;
(statearr_20229_20246[(2)] = inst_20209);

(statearr_20229_20246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20216 === (8))){
var inst_20202 = (state_20215[(9)]);
var inst_20205 = cljs.core.deref.call(null,inst_20202);
var state_20215__$1 = state_20215;
var statearr_20230_20247 = state_20215__$1;
(statearr_20230_20247[(2)] = inst_20205);

(statearr_20230_20247[(1)] = (10));


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
});})(c__19457__auto__))
;
return ((function (switch__19345__auto__,c__19457__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19346__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19346__auto____0 = (function (){
var statearr_20234 = [null,null,null,null,null,null,null,null,null,null];
(statearr_20234[(0)] = cljs$core$async$reduce_$_state_machine__19346__auto__);

(statearr_20234[(1)] = (1));

return statearr_20234;
});
var cljs$core$async$reduce_$_state_machine__19346__auto____1 = (function (state_20215){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_20215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e20235){if((e20235 instanceof Object)){
var ex__19349__auto__ = e20235;
var statearr_20236_20248 = state_20215;
(statearr_20236_20248[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20249 = state_20215;
state_20215 = G__20249;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19346__auto__ = function(state_20215){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19346__auto____1.call(this,state_20215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19346__auto____0;
cljs$core$async$reduce_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19346__auto____1;
return cljs$core$async$reduce_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__))
})();
var state__19459__auto__ = (function (){var statearr_20237 = f__19458__auto__.call(null);
(statearr_20237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_20237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__))
);

return c__19457__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args20250 = [];
var len__17976__auto___20302 = arguments.length;
var i__17977__auto___20303 = (0);
while(true){
if((i__17977__auto___20303 < len__17976__auto___20302)){
args20250.push((arguments[i__17977__auto___20303]));

var G__20304 = (i__17977__auto___20303 + (1));
i__17977__auto___20303 = G__20304;
continue;
} else {
}
break;
}

var G__20252 = args20250.length;
switch (G__20252) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20250.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__){
return (function (state_20277){
var state_val_20278 = (state_20277[(1)]);
if((state_val_20278 === (7))){
var inst_20259 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20279_20306 = state_20277__$1;
(statearr_20279_20306[(2)] = inst_20259);

(statearr_20279_20306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (1))){
var inst_20253 = cljs.core.seq.call(null,coll);
var inst_20254 = inst_20253;
var state_20277__$1 = (function (){var statearr_20280 = state_20277;
(statearr_20280[(7)] = inst_20254);

return statearr_20280;
})();
var statearr_20281_20307 = state_20277__$1;
(statearr_20281_20307[(2)] = null);

(statearr_20281_20307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (4))){
var inst_20254 = (state_20277[(7)]);
var inst_20257 = cljs.core.first.call(null,inst_20254);
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20277__$1,(7),ch,inst_20257);
} else {
if((state_val_20278 === (13))){
var inst_20271 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20282_20308 = state_20277__$1;
(statearr_20282_20308[(2)] = inst_20271);

(statearr_20282_20308[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (6))){
var inst_20262 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
if(cljs.core.truth_(inst_20262)){
var statearr_20283_20309 = state_20277__$1;
(statearr_20283_20309[(1)] = (8));

} else {
var statearr_20284_20310 = state_20277__$1;
(statearr_20284_20310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (3))){
var inst_20275 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20277__$1,inst_20275);
} else {
if((state_val_20278 === (12))){
var state_20277__$1 = state_20277;
var statearr_20285_20311 = state_20277__$1;
(statearr_20285_20311[(2)] = null);

(statearr_20285_20311[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (2))){
var inst_20254 = (state_20277[(7)]);
var state_20277__$1 = state_20277;
if(cljs.core.truth_(inst_20254)){
var statearr_20286_20312 = state_20277__$1;
(statearr_20286_20312[(1)] = (4));

} else {
var statearr_20287_20313 = state_20277__$1;
(statearr_20287_20313[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (11))){
var inst_20268 = cljs.core.async.close_BANG_.call(null,ch);
var state_20277__$1 = state_20277;
var statearr_20288_20314 = state_20277__$1;
(statearr_20288_20314[(2)] = inst_20268);

(statearr_20288_20314[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (9))){
var state_20277__$1 = state_20277;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20289_20315 = state_20277__$1;
(statearr_20289_20315[(1)] = (11));

} else {
var statearr_20290_20316 = state_20277__$1;
(statearr_20290_20316[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (5))){
var inst_20254 = (state_20277[(7)]);
var state_20277__$1 = state_20277;
var statearr_20291_20317 = state_20277__$1;
(statearr_20291_20317[(2)] = inst_20254);

(statearr_20291_20317[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (10))){
var inst_20273 = (state_20277[(2)]);
var state_20277__$1 = state_20277;
var statearr_20292_20318 = state_20277__$1;
(statearr_20292_20318[(2)] = inst_20273);

(statearr_20292_20318[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20278 === (8))){
var inst_20254 = (state_20277[(7)]);
var inst_20264 = cljs.core.next.call(null,inst_20254);
var inst_20254__$1 = inst_20264;
var state_20277__$1 = (function (){var statearr_20293 = state_20277;
(statearr_20293[(7)] = inst_20254__$1);

return statearr_20293;
})();
var statearr_20294_20319 = state_20277__$1;
(statearr_20294_20319[(2)] = null);

(statearr_20294_20319[(1)] = (2));


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
});})(c__19457__auto__))
;
return ((function (switch__19345__auto__,c__19457__auto__){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_20298 = [null,null,null,null,null,null,null,null];
(statearr_20298[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_20298[(1)] = (1));

return statearr_20298;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_20277){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_20277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e20299){if((e20299 instanceof Object)){
var ex__19349__auto__ = e20299;
var statearr_20300_20320 = state_20277;
(statearr_20300_20320[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20321 = state_20277;
state_20277 = G__20321;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_20277){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_20277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__))
})();
var state__19459__auto__ = (function (){var statearr_20301 = f__19458__auto__.call(null);
(statearr_20301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_20301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__))
);

return c__19457__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17572__auto__ = (((_ == null))?null:_);
var m__17573__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,_);
} else {
var m__17573__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17573__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m,ch);
} else {
var m__17573__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m);
} else {
var m__17573__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async20543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20543 = (function (mult,ch,cs,meta20544){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta20544 = meta20544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_20545,meta20544__$1){
var self__ = this;
var _20545__$1 = this;
return (new cljs.core.async.t_cljs$core$async20543(self__.mult,self__.ch,self__.cs,meta20544__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_20545){
var self__ = this;
var _20545__$1 = this;
return self__.meta20544;
});})(cs))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20543.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async20543.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta20544","meta20544",-852766326,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async20543.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20543.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20543";

cljs.core.async.t_cljs$core$async20543.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async20543");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async20543 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async20543(mult__$1,ch__$1,cs__$1,meta20544){
return (new cljs.core.async.t_cljs$core$async20543(mult__$1,ch__$1,cs__$1,meta20544));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async20543(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19457__auto___20764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___20764,cs,m,dchan,dctr,done){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___20764,cs,m,dchan,dctr,done){
return (function (state_20676){
var state_val_20677 = (state_20676[(1)]);
if((state_val_20677 === (7))){
var inst_20672 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20678_20765 = state_20676__$1;
(statearr_20678_20765[(2)] = inst_20672);

(statearr_20678_20765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (20))){
var inst_20577 = (state_20676[(7)]);
var inst_20587 = cljs.core.first.call(null,inst_20577);
var inst_20588 = cljs.core.nth.call(null,inst_20587,(0),null);
var inst_20589 = cljs.core.nth.call(null,inst_20587,(1),null);
var state_20676__$1 = (function (){var statearr_20679 = state_20676;
(statearr_20679[(8)] = inst_20588);

return statearr_20679;
})();
if(cljs.core.truth_(inst_20589)){
var statearr_20680_20766 = state_20676__$1;
(statearr_20680_20766[(1)] = (22));

} else {
var statearr_20681_20767 = state_20676__$1;
(statearr_20681_20767[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (27))){
var inst_20548 = (state_20676[(9)]);
var inst_20619 = (state_20676[(10)]);
var inst_20617 = (state_20676[(11)]);
var inst_20624 = (state_20676[(12)]);
var inst_20624__$1 = cljs.core._nth.call(null,inst_20617,inst_20619);
var inst_20625 = cljs.core.async.put_BANG_.call(null,inst_20624__$1,inst_20548,done);
var state_20676__$1 = (function (){var statearr_20682 = state_20676;
(statearr_20682[(12)] = inst_20624__$1);

return statearr_20682;
})();
if(cljs.core.truth_(inst_20625)){
var statearr_20683_20768 = state_20676__$1;
(statearr_20683_20768[(1)] = (30));

} else {
var statearr_20684_20769 = state_20676__$1;
(statearr_20684_20769[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (1))){
var state_20676__$1 = state_20676;
var statearr_20685_20770 = state_20676__$1;
(statearr_20685_20770[(2)] = null);

(statearr_20685_20770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (24))){
var inst_20577 = (state_20676[(7)]);
var inst_20594 = (state_20676[(2)]);
var inst_20595 = cljs.core.next.call(null,inst_20577);
var inst_20557 = inst_20595;
var inst_20558 = null;
var inst_20559 = (0);
var inst_20560 = (0);
var state_20676__$1 = (function (){var statearr_20686 = state_20676;
(statearr_20686[(13)] = inst_20560);

(statearr_20686[(14)] = inst_20558);

(statearr_20686[(15)] = inst_20559);

(statearr_20686[(16)] = inst_20594);

(statearr_20686[(17)] = inst_20557);

return statearr_20686;
})();
var statearr_20687_20771 = state_20676__$1;
(statearr_20687_20771[(2)] = null);

(statearr_20687_20771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (39))){
var state_20676__$1 = state_20676;
var statearr_20691_20772 = state_20676__$1;
(statearr_20691_20772[(2)] = null);

(statearr_20691_20772[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (4))){
var inst_20548 = (state_20676[(9)]);
var inst_20548__$1 = (state_20676[(2)]);
var inst_20549 = (inst_20548__$1 == null);
var state_20676__$1 = (function (){var statearr_20692 = state_20676;
(statearr_20692[(9)] = inst_20548__$1);

return statearr_20692;
})();
if(cljs.core.truth_(inst_20549)){
var statearr_20693_20773 = state_20676__$1;
(statearr_20693_20773[(1)] = (5));

} else {
var statearr_20694_20774 = state_20676__$1;
(statearr_20694_20774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (15))){
var inst_20560 = (state_20676[(13)]);
var inst_20558 = (state_20676[(14)]);
var inst_20559 = (state_20676[(15)]);
var inst_20557 = (state_20676[(17)]);
var inst_20573 = (state_20676[(2)]);
var inst_20574 = (inst_20560 + (1));
var tmp20688 = inst_20558;
var tmp20689 = inst_20559;
var tmp20690 = inst_20557;
var inst_20557__$1 = tmp20690;
var inst_20558__$1 = tmp20688;
var inst_20559__$1 = tmp20689;
var inst_20560__$1 = inst_20574;
var state_20676__$1 = (function (){var statearr_20695 = state_20676;
(statearr_20695[(13)] = inst_20560__$1);

(statearr_20695[(18)] = inst_20573);

(statearr_20695[(14)] = inst_20558__$1);

(statearr_20695[(15)] = inst_20559__$1);

(statearr_20695[(17)] = inst_20557__$1);

return statearr_20695;
})();
var statearr_20696_20775 = state_20676__$1;
(statearr_20696_20775[(2)] = null);

(statearr_20696_20775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (21))){
var inst_20598 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20700_20776 = state_20676__$1;
(statearr_20700_20776[(2)] = inst_20598);

(statearr_20700_20776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (31))){
var inst_20624 = (state_20676[(12)]);
var inst_20628 = done.call(null,null);
var inst_20629 = cljs.core.async.untap_STAR_.call(null,m,inst_20624);
var state_20676__$1 = (function (){var statearr_20701 = state_20676;
(statearr_20701[(19)] = inst_20628);

return statearr_20701;
})();
var statearr_20702_20777 = state_20676__$1;
(statearr_20702_20777[(2)] = inst_20629);

(statearr_20702_20777[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (32))){
var inst_20619 = (state_20676[(10)]);
var inst_20617 = (state_20676[(11)]);
var inst_20616 = (state_20676[(20)]);
var inst_20618 = (state_20676[(21)]);
var inst_20631 = (state_20676[(2)]);
var inst_20632 = (inst_20619 + (1));
var tmp20697 = inst_20617;
var tmp20698 = inst_20616;
var tmp20699 = inst_20618;
var inst_20616__$1 = tmp20698;
var inst_20617__$1 = tmp20697;
var inst_20618__$1 = tmp20699;
var inst_20619__$1 = inst_20632;
var state_20676__$1 = (function (){var statearr_20703 = state_20676;
(statearr_20703[(22)] = inst_20631);

(statearr_20703[(10)] = inst_20619__$1);

(statearr_20703[(11)] = inst_20617__$1);

(statearr_20703[(20)] = inst_20616__$1);

(statearr_20703[(21)] = inst_20618__$1);

return statearr_20703;
})();
var statearr_20704_20778 = state_20676__$1;
(statearr_20704_20778[(2)] = null);

(statearr_20704_20778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (40))){
var inst_20644 = (state_20676[(23)]);
var inst_20648 = done.call(null,null);
var inst_20649 = cljs.core.async.untap_STAR_.call(null,m,inst_20644);
var state_20676__$1 = (function (){var statearr_20705 = state_20676;
(statearr_20705[(24)] = inst_20648);

return statearr_20705;
})();
var statearr_20706_20779 = state_20676__$1;
(statearr_20706_20779[(2)] = inst_20649);

(statearr_20706_20779[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (33))){
var inst_20635 = (state_20676[(25)]);
var inst_20637 = cljs.core.chunked_seq_QMARK_.call(null,inst_20635);
var state_20676__$1 = state_20676;
if(inst_20637){
var statearr_20707_20780 = state_20676__$1;
(statearr_20707_20780[(1)] = (36));

} else {
var statearr_20708_20781 = state_20676__$1;
(statearr_20708_20781[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (13))){
var inst_20567 = (state_20676[(26)]);
var inst_20570 = cljs.core.async.close_BANG_.call(null,inst_20567);
var state_20676__$1 = state_20676;
var statearr_20709_20782 = state_20676__$1;
(statearr_20709_20782[(2)] = inst_20570);

(statearr_20709_20782[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (22))){
var inst_20588 = (state_20676[(8)]);
var inst_20591 = cljs.core.async.close_BANG_.call(null,inst_20588);
var state_20676__$1 = state_20676;
var statearr_20710_20783 = state_20676__$1;
(statearr_20710_20783[(2)] = inst_20591);

(statearr_20710_20783[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (36))){
var inst_20635 = (state_20676[(25)]);
var inst_20639 = cljs.core.chunk_first.call(null,inst_20635);
var inst_20640 = cljs.core.chunk_rest.call(null,inst_20635);
var inst_20641 = cljs.core.count.call(null,inst_20639);
var inst_20616 = inst_20640;
var inst_20617 = inst_20639;
var inst_20618 = inst_20641;
var inst_20619 = (0);
var state_20676__$1 = (function (){var statearr_20711 = state_20676;
(statearr_20711[(10)] = inst_20619);

(statearr_20711[(11)] = inst_20617);

(statearr_20711[(20)] = inst_20616);

(statearr_20711[(21)] = inst_20618);

return statearr_20711;
})();
var statearr_20712_20784 = state_20676__$1;
(statearr_20712_20784[(2)] = null);

(statearr_20712_20784[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (41))){
var inst_20635 = (state_20676[(25)]);
var inst_20651 = (state_20676[(2)]);
var inst_20652 = cljs.core.next.call(null,inst_20635);
var inst_20616 = inst_20652;
var inst_20617 = null;
var inst_20618 = (0);
var inst_20619 = (0);
var state_20676__$1 = (function (){var statearr_20713 = state_20676;
(statearr_20713[(10)] = inst_20619);

(statearr_20713[(11)] = inst_20617);

(statearr_20713[(20)] = inst_20616);

(statearr_20713[(21)] = inst_20618);

(statearr_20713[(27)] = inst_20651);

return statearr_20713;
})();
var statearr_20714_20785 = state_20676__$1;
(statearr_20714_20785[(2)] = null);

(statearr_20714_20785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (43))){
var state_20676__$1 = state_20676;
var statearr_20715_20786 = state_20676__$1;
(statearr_20715_20786[(2)] = null);

(statearr_20715_20786[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (29))){
var inst_20660 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20716_20787 = state_20676__$1;
(statearr_20716_20787[(2)] = inst_20660);

(statearr_20716_20787[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (44))){
var inst_20669 = (state_20676[(2)]);
var state_20676__$1 = (function (){var statearr_20717 = state_20676;
(statearr_20717[(28)] = inst_20669);

return statearr_20717;
})();
var statearr_20718_20788 = state_20676__$1;
(statearr_20718_20788[(2)] = null);

(statearr_20718_20788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (6))){
var inst_20608 = (state_20676[(29)]);
var inst_20607 = cljs.core.deref.call(null,cs);
var inst_20608__$1 = cljs.core.keys.call(null,inst_20607);
var inst_20609 = cljs.core.count.call(null,inst_20608__$1);
var inst_20610 = cljs.core.reset_BANG_.call(null,dctr,inst_20609);
var inst_20615 = cljs.core.seq.call(null,inst_20608__$1);
var inst_20616 = inst_20615;
var inst_20617 = null;
var inst_20618 = (0);
var inst_20619 = (0);
var state_20676__$1 = (function (){var statearr_20719 = state_20676;
(statearr_20719[(10)] = inst_20619);

(statearr_20719[(30)] = inst_20610);

(statearr_20719[(29)] = inst_20608__$1);

(statearr_20719[(11)] = inst_20617);

(statearr_20719[(20)] = inst_20616);

(statearr_20719[(21)] = inst_20618);

return statearr_20719;
})();
var statearr_20720_20789 = state_20676__$1;
(statearr_20720_20789[(2)] = null);

(statearr_20720_20789[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (28))){
var inst_20635 = (state_20676[(25)]);
var inst_20616 = (state_20676[(20)]);
var inst_20635__$1 = cljs.core.seq.call(null,inst_20616);
var state_20676__$1 = (function (){var statearr_20721 = state_20676;
(statearr_20721[(25)] = inst_20635__$1);

return statearr_20721;
})();
if(inst_20635__$1){
var statearr_20722_20790 = state_20676__$1;
(statearr_20722_20790[(1)] = (33));

} else {
var statearr_20723_20791 = state_20676__$1;
(statearr_20723_20791[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (25))){
var inst_20619 = (state_20676[(10)]);
var inst_20618 = (state_20676[(21)]);
var inst_20621 = (inst_20619 < inst_20618);
var inst_20622 = inst_20621;
var state_20676__$1 = state_20676;
if(cljs.core.truth_(inst_20622)){
var statearr_20724_20792 = state_20676__$1;
(statearr_20724_20792[(1)] = (27));

} else {
var statearr_20725_20793 = state_20676__$1;
(statearr_20725_20793[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (34))){
var state_20676__$1 = state_20676;
var statearr_20726_20794 = state_20676__$1;
(statearr_20726_20794[(2)] = null);

(statearr_20726_20794[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (17))){
var state_20676__$1 = state_20676;
var statearr_20727_20795 = state_20676__$1;
(statearr_20727_20795[(2)] = null);

(statearr_20727_20795[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (3))){
var inst_20674 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20676__$1,inst_20674);
} else {
if((state_val_20677 === (12))){
var inst_20603 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20728_20796 = state_20676__$1;
(statearr_20728_20796[(2)] = inst_20603);

(statearr_20728_20796[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (2))){
var state_20676__$1 = state_20676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20676__$1,(4),ch);
} else {
if((state_val_20677 === (23))){
var state_20676__$1 = state_20676;
var statearr_20729_20797 = state_20676__$1;
(statearr_20729_20797[(2)] = null);

(statearr_20729_20797[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (35))){
var inst_20658 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20730_20798 = state_20676__$1;
(statearr_20730_20798[(2)] = inst_20658);

(statearr_20730_20798[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (19))){
var inst_20577 = (state_20676[(7)]);
var inst_20581 = cljs.core.chunk_first.call(null,inst_20577);
var inst_20582 = cljs.core.chunk_rest.call(null,inst_20577);
var inst_20583 = cljs.core.count.call(null,inst_20581);
var inst_20557 = inst_20582;
var inst_20558 = inst_20581;
var inst_20559 = inst_20583;
var inst_20560 = (0);
var state_20676__$1 = (function (){var statearr_20731 = state_20676;
(statearr_20731[(13)] = inst_20560);

(statearr_20731[(14)] = inst_20558);

(statearr_20731[(15)] = inst_20559);

(statearr_20731[(17)] = inst_20557);

return statearr_20731;
})();
var statearr_20732_20799 = state_20676__$1;
(statearr_20732_20799[(2)] = null);

(statearr_20732_20799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (11))){
var inst_20577 = (state_20676[(7)]);
var inst_20557 = (state_20676[(17)]);
var inst_20577__$1 = cljs.core.seq.call(null,inst_20557);
var state_20676__$1 = (function (){var statearr_20733 = state_20676;
(statearr_20733[(7)] = inst_20577__$1);

return statearr_20733;
})();
if(inst_20577__$1){
var statearr_20734_20800 = state_20676__$1;
(statearr_20734_20800[(1)] = (16));

} else {
var statearr_20735_20801 = state_20676__$1;
(statearr_20735_20801[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (9))){
var inst_20605 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20736_20802 = state_20676__$1;
(statearr_20736_20802[(2)] = inst_20605);

(statearr_20736_20802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (5))){
var inst_20555 = cljs.core.deref.call(null,cs);
var inst_20556 = cljs.core.seq.call(null,inst_20555);
var inst_20557 = inst_20556;
var inst_20558 = null;
var inst_20559 = (0);
var inst_20560 = (0);
var state_20676__$1 = (function (){var statearr_20737 = state_20676;
(statearr_20737[(13)] = inst_20560);

(statearr_20737[(14)] = inst_20558);

(statearr_20737[(15)] = inst_20559);

(statearr_20737[(17)] = inst_20557);

return statearr_20737;
})();
var statearr_20738_20803 = state_20676__$1;
(statearr_20738_20803[(2)] = null);

(statearr_20738_20803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (14))){
var state_20676__$1 = state_20676;
var statearr_20739_20804 = state_20676__$1;
(statearr_20739_20804[(2)] = null);

(statearr_20739_20804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (45))){
var inst_20666 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20740_20805 = state_20676__$1;
(statearr_20740_20805[(2)] = inst_20666);

(statearr_20740_20805[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (26))){
var inst_20608 = (state_20676[(29)]);
var inst_20662 = (state_20676[(2)]);
var inst_20663 = cljs.core.seq.call(null,inst_20608);
var state_20676__$1 = (function (){var statearr_20741 = state_20676;
(statearr_20741[(31)] = inst_20662);

return statearr_20741;
})();
if(inst_20663){
var statearr_20742_20806 = state_20676__$1;
(statearr_20742_20806[(1)] = (42));

} else {
var statearr_20743_20807 = state_20676__$1;
(statearr_20743_20807[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (16))){
var inst_20577 = (state_20676[(7)]);
var inst_20579 = cljs.core.chunked_seq_QMARK_.call(null,inst_20577);
var state_20676__$1 = state_20676;
if(inst_20579){
var statearr_20744_20808 = state_20676__$1;
(statearr_20744_20808[(1)] = (19));

} else {
var statearr_20745_20809 = state_20676__$1;
(statearr_20745_20809[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (38))){
var inst_20655 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20746_20810 = state_20676__$1;
(statearr_20746_20810[(2)] = inst_20655);

(statearr_20746_20810[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (30))){
var state_20676__$1 = state_20676;
var statearr_20747_20811 = state_20676__$1;
(statearr_20747_20811[(2)] = null);

(statearr_20747_20811[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (10))){
var inst_20560 = (state_20676[(13)]);
var inst_20558 = (state_20676[(14)]);
var inst_20566 = cljs.core._nth.call(null,inst_20558,inst_20560);
var inst_20567 = cljs.core.nth.call(null,inst_20566,(0),null);
var inst_20568 = cljs.core.nth.call(null,inst_20566,(1),null);
var state_20676__$1 = (function (){var statearr_20748 = state_20676;
(statearr_20748[(26)] = inst_20567);

return statearr_20748;
})();
if(cljs.core.truth_(inst_20568)){
var statearr_20749_20812 = state_20676__$1;
(statearr_20749_20812[(1)] = (13));

} else {
var statearr_20750_20813 = state_20676__$1;
(statearr_20750_20813[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (18))){
var inst_20601 = (state_20676[(2)]);
var state_20676__$1 = state_20676;
var statearr_20751_20814 = state_20676__$1;
(statearr_20751_20814[(2)] = inst_20601);

(statearr_20751_20814[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (42))){
var state_20676__$1 = state_20676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20676__$1,(45),dchan);
} else {
if((state_val_20677 === (37))){
var inst_20635 = (state_20676[(25)]);
var inst_20548 = (state_20676[(9)]);
var inst_20644 = (state_20676[(23)]);
var inst_20644__$1 = cljs.core.first.call(null,inst_20635);
var inst_20645 = cljs.core.async.put_BANG_.call(null,inst_20644__$1,inst_20548,done);
var state_20676__$1 = (function (){var statearr_20752 = state_20676;
(statearr_20752[(23)] = inst_20644__$1);

return statearr_20752;
})();
if(cljs.core.truth_(inst_20645)){
var statearr_20753_20815 = state_20676__$1;
(statearr_20753_20815[(1)] = (39));

} else {
var statearr_20754_20816 = state_20676__$1;
(statearr_20754_20816[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20677 === (8))){
var inst_20560 = (state_20676[(13)]);
var inst_20559 = (state_20676[(15)]);
var inst_20562 = (inst_20560 < inst_20559);
var inst_20563 = inst_20562;
var state_20676__$1 = state_20676;
if(cljs.core.truth_(inst_20563)){
var statearr_20755_20817 = state_20676__$1;
(statearr_20755_20817[(1)] = (10));

} else {
var statearr_20756_20818 = state_20676__$1;
(statearr_20756_20818[(1)] = (11));

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
});})(c__19457__auto___20764,cs,m,dchan,dctr,done))
;
return ((function (switch__19345__auto__,c__19457__auto___20764,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19346__auto__ = null;
var cljs$core$async$mult_$_state_machine__19346__auto____0 = (function (){
var statearr_20760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20760[(0)] = cljs$core$async$mult_$_state_machine__19346__auto__);

(statearr_20760[(1)] = (1));

return statearr_20760;
});
var cljs$core$async$mult_$_state_machine__19346__auto____1 = (function (state_20676){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_20676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e20761){if((e20761 instanceof Object)){
var ex__19349__auto__ = e20761;
var statearr_20762_20819 = state_20676;
(statearr_20762_20819[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20820 = state_20676;
state_20676 = G__20820;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19346__auto__ = function(state_20676){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19346__auto____1.call(this,state_20676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19346__auto____0;
cljs$core$async$mult_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19346__auto____1;
return cljs$core$async$mult_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___20764,cs,m,dchan,dctr,done))
})();
var state__19459__auto__ = (function (){var statearr_20763 = f__19458__auto__.call(null);
(statearr_20763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___20764);

return statearr_20763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___20764,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args20821 = [];
var len__17976__auto___20824 = arguments.length;
var i__17977__auto___20825 = (0);
while(true){
if((i__17977__auto___20825 < len__17976__auto___20824)){
args20821.push((arguments[i__17977__auto___20825]));

var G__20826 = (i__17977__auto___20825 + (1));
i__17977__auto___20825 = G__20826;
continue;
} else {
}
break;
}

var G__20823 = args20821.length;
switch (G__20823) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20821.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m,ch);
} else {
var m__17573__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m,ch);
} else {
var m__17573__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m);
} else {
var m__17573__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m,state_map);
} else {
var m__17573__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17572__auto__ = (((m == null))?null:m);
var m__17573__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,m,mode);
} else {
var m__17573__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17983__auto__ = [];
var len__17976__auto___20838 = arguments.length;
var i__17977__auto___20839 = (0);
while(true){
if((i__17977__auto___20839 < len__17976__auto___20838)){
args__17983__auto__.push((arguments[i__17977__auto___20839]));

var G__20840 = (i__17977__auto___20839 + (1));
i__17977__auto___20839 = G__20840;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((3) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17984__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__20832){
var map__20833 = p__20832;
var map__20833__$1 = ((((!((map__20833 == null)))?((((map__20833.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20833.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20833):map__20833);
var opts = map__20833__$1;
var statearr_20835_20841 = state;
(statearr_20835_20841[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__20833,map__20833__$1,opts){
return (function (val){
var statearr_20836_20842 = state;
(statearr_20836_20842[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__20833,map__20833__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_20837_20843 = state;
(statearr_20837_20843[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq20828){
var G__20829 = cljs.core.first.call(null,seq20828);
var seq20828__$1 = cljs.core.next.call(null,seq20828);
var G__20830 = cljs.core.first.call(null,seq20828__$1);
var seq20828__$2 = cljs.core.next.call(null,seq20828__$1);
var G__20831 = cljs.core.first.call(null,seq20828__$2);
var seq20828__$3 = cljs.core.next.call(null,seq20828__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20829,G__20830,G__20831,seq20828__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async21007 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21007 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21008){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta21008 = meta21008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21009,meta21008__$1){
var self__ = this;
var _21009__$1 = this;
return (new cljs.core.async.t_cljs$core$async21007(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21008__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21009){
var self__ = this;
var _21009__$1 = this;
return self__.meta21008;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21008","meta21008",-2020085149,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21007.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21007.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21007";

cljs.core.async.t_cljs$core$async21007.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async21007");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21007 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21008){
return (new cljs.core.async.t_cljs$core$async21007(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21008));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21007(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19457__auto___21170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___21170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___21170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21107){
var state_val_21108 = (state_21107[(1)]);
if((state_val_21108 === (7))){
var inst_21025 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
var statearr_21109_21171 = state_21107__$1;
(statearr_21109_21171[(2)] = inst_21025);

(statearr_21109_21171[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (20))){
var inst_21037 = (state_21107[(7)]);
var state_21107__$1 = state_21107;
var statearr_21110_21172 = state_21107__$1;
(statearr_21110_21172[(2)] = inst_21037);

(statearr_21110_21172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (27))){
var state_21107__$1 = state_21107;
var statearr_21111_21173 = state_21107__$1;
(statearr_21111_21173[(2)] = null);

(statearr_21111_21173[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (1))){
var inst_21013 = (state_21107[(8)]);
var inst_21013__$1 = calc_state.call(null);
var inst_21015 = (inst_21013__$1 == null);
var inst_21016 = cljs.core.not.call(null,inst_21015);
var state_21107__$1 = (function (){var statearr_21112 = state_21107;
(statearr_21112[(8)] = inst_21013__$1);

return statearr_21112;
})();
if(inst_21016){
var statearr_21113_21174 = state_21107__$1;
(statearr_21113_21174[(1)] = (2));

} else {
var statearr_21114_21175 = state_21107__$1;
(statearr_21114_21175[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (24))){
var inst_21067 = (state_21107[(9)]);
var inst_21060 = (state_21107[(10)]);
var inst_21081 = (state_21107[(11)]);
var inst_21081__$1 = inst_21060.call(null,inst_21067);
var state_21107__$1 = (function (){var statearr_21115 = state_21107;
(statearr_21115[(11)] = inst_21081__$1);

return statearr_21115;
})();
if(cljs.core.truth_(inst_21081__$1)){
var statearr_21116_21176 = state_21107__$1;
(statearr_21116_21176[(1)] = (29));

} else {
var statearr_21117_21177 = state_21107__$1;
(statearr_21117_21177[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (4))){
var inst_21028 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21028)){
var statearr_21118_21178 = state_21107__$1;
(statearr_21118_21178[(1)] = (8));

} else {
var statearr_21119_21179 = state_21107__$1;
(statearr_21119_21179[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (15))){
var inst_21054 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21054)){
var statearr_21120_21180 = state_21107__$1;
(statearr_21120_21180[(1)] = (19));

} else {
var statearr_21121_21181 = state_21107__$1;
(statearr_21121_21181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (21))){
var inst_21059 = (state_21107[(12)]);
var inst_21059__$1 = (state_21107[(2)]);
var inst_21060 = cljs.core.get.call(null,inst_21059__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21061 = cljs.core.get.call(null,inst_21059__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21062 = cljs.core.get.call(null,inst_21059__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21107__$1 = (function (){var statearr_21122 = state_21107;
(statearr_21122[(13)] = inst_21061);

(statearr_21122[(12)] = inst_21059__$1);

(statearr_21122[(10)] = inst_21060);

return statearr_21122;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21107__$1,(22),inst_21062);
} else {
if((state_val_21108 === (31))){
var inst_21089 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21089)){
var statearr_21123_21182 = state_21107__$1;
(statearr_21123_21182[(1)] = (32));

} else {
var statearr_21124_21183 = state_21107__$1;
(statearr_21124_21183[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (32))){
var inst_21066 = (state_21107[(14)]);
var state_21107__$1 = state_21107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21107__$1,(35),out,inst_21066);
} else {
if((state_val_21108 === (33))){
var inst_21059 = (state_21107[(12)]);
var inst_21037 = inst_21059;
var state_21107__$1 = (function (){var statearr_21125 = state_21107;
(statearr_21125[(7)] = inst_21037);

return statearr_21125;
})();
var statearr_21126_21184 = state_21107__$1;
(statearr_21126_21184[(2)] = null);

(statearr_21126_21184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (13))){
var inst_21037 = (state_21107[(7)]);
var inst_21044 = inst_21037.cljs$lang$protocol_mask$partition0$;
var inst_21045 = (inst_21044 & (64));
var inst_21046 = inst_21037.cljs$core$ISeq$;
var inst_21047 = (inst_21045) || (inst_21046);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21047)){
var statearr_21127_21185 = state_21107__$1;
(statearr_21127_21185[(1)] = (16));

} else {
var statearr_21128_21186 = state_21107__$1;
(statearr_21128_21186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (22))){
var inst_21066 = (state_21107[(14)]);
var inst_21067 = (state_21107[(9)]);
var inst_21065 = (state_21107[(2)]);
var inst_21066__$1 = cljs.core.nth.call(null,inst_21065,(0),null);
var inst_21067__$1 = cljs.core.nth.call(null,inst_21065,(1),null);
var inst_21068 = (inst_21066__$1 == null);
var inst_21069 = cljs.core._EQ_.call(null,inst_21067__$1,change);
var inst_21070 = (inst_21068) || (inst_21069);
var state_21107__$1 = (function (){var statearr_21129 = state_21107;
(statearr_21129[(14)] = inst_21066__$1);

(statearr_21129[(9)] = inst_21067__$1);

return statearr_21129;
})();
if(cljs.core.truth_(inst_21070)){
var statearr_21130_21187 = state_21107__$1;
(statearr_21130_21187[(1)] = (23));

} else {
var statearr_21131_21188 = state_21107__$1;
(statearr_21131_21188[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (36))){
var inst_21059 = (state_21107[(12)]);
var inst_21037 = inst_21059;
var state_21107__$1 = (function (){var statearr_21132 = state_21107;
(statearr_21132[(7)] = inst_21037);

return statearr_21132;
})();
var statearr_21133_21189 = state_21107__$1;
(statearr_21133_21189[(2)] = null);

(statearr_21133_21189[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (29))){
var inst_21081 = (state_21107[(11)]);
var state_21107__$1 = state_21107;
var statearr_21134_21190 = state_21107__$1;
(statearr_21134_21190[(2)] = inst_21081);

(statearr_21134_21190[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (6))){
var state_21107__$1 = state_21107;
var statearr_21135_21191 = state_21107__$1;
(statearr_21135_21191[(2)] = false);

(statearr_21135_21191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (28))){
var inst_21077 = (state_21107[(2)]);
var inst_21078 = calc_state.call(null);
var inst_21037 = inst_21078;
var state_21107__$1 = (function (){var statearr_21136 = state_21107;
(statearr_21136[(15)] = inst_21077);

(statearr_21136[(7)] = inst_21037);

return statearr_21136;
})();
var statearr_21137_21192 = state_21107__$1;
(statearr_21137_21192[(2)] = null);

(statearr_21137_21192[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (25))){
var inst_21103 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
var statearr_21138_21193 = state_21107__$1;
(statearr_21138_21193[(2)] = inst_21103);

(statearr_21138_21193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (34))){
var inst_21101 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
var statearr_21139_21194 = state_21107__$1;
(statearr_21139_21194[(2)] = inst_21101);

(statearr_21139_21194[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (17))){
var state_21107__$1 = state_21107;
var statearr_21140_21195 = state_21107__$1;
(statearr_21140_21195[(2)] = false);

(statearr_21140_21195[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (3))){
var state_21107__$1 = state_21107;
var statearr_21141_21196 = state_21107__$1;
(statearr_21141_21196[(2)] = false);

(statearr_21141_21196[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (12))){
var inst_21105 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21107__$1,inst_21105);
} else {
if((state_val_21108 === (2))){
var inst_21013 = (state_21107[(8)]);
var inst_21018 = inst_21013.cljs$lang$protocol_mask$partition0$;
var inst_21019 = (inst_21018 & (64));
var inst_21020 = inst_21013.cljs$core$ISeq$;
var inst_21021 = (inst_21019) || (inst_21020);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21021)){
var statearr_21142_21197 = state_21107__$1;
(statearr_21142_21197[(1)] = (5));

} else {
var statearr_21143_21198 = state_21107__$1;
(statearr_21143_21198[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (23))){
var inst_21066 = (state_21107[(14)]);
var inst_21072 = (inst_21066 == null);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21072)){
var statearr_21144_21199 = state_21107__$1;
(statearr_21144_21199[(1)] = (26));

} else {
var statearr_21145_21200 = state_21107__$1;
(statearr_21145_21200[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (35))){
var inst_21092 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
if(cljs.core.truth_(inst_21092)){
var statearr_21146_21201 = state_21107__$1;
(statearr_21146_21201[(1)] = (36));

} else {
var statearr_21147_21202 = state_21107__$1;
(statearr_21147_21202[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (19))){
var inst_21037 = (state_21107[(7)]);
var inst_21056 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21037);
var state_21107__$1 = state_21107;
var statearr_21148_21203 = state_21107__$1;
(statearr_21148_21203[(2)] = inst_21056);

(statearr_21148_21203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (11))){
var inst_21037 = (state_21107[(7)]);
var inst_21041 = (inst_21037 == null);
var inst_21042 = cljs.core.not.call(null,inst_21041);
var state_21107__$1 = state_21107;
if(inst_21042){
var statearr_21149_21204 = state_21107__$1;
(statearr_21149_21204[(1)] = (13));

} else {
var statearr_21150_21205 = state_21107__$1;
(statearr_21150_21205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (9))){
var inst_21013 = (state_21107[(8)]);
var state_21107__$1 = state_21107;
var statearr_21151_21206 = state_21107__$1;
(statearr_21151_21206[(2)] = inst_21013);

(statearr_21151_21206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (5))){
var state_21107__$1 = state_21107;
var statearr_21152_21207 = state_21107__$1;
(statearr_21152_21207[(2)] = true);

(statearr_21152_21207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (14))){
var state_21107__$1 = state_21107;
var statearr_21153_21208 = state_21107__$1;
(statearr_21153_21208[(2)] = false);

(statearr_21153_21208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (26))){
var inst_21067 = (state_21107[(9)]);
var inst_21074 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21067);
var state_21107__$1 = state_21107;
var statearr_21154_21209 = state_21107__$1;
(statearr_21154_21209[(2)] = inst_21074);

(statearr_21154_21209[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (16))){
var state_21107__$1 = state_21107;
var statearr_21155_21210 = state_21107__$1;
(statearr_21155_21210[(2)] = true);

(statearr_21155_21210[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (38))){
var inst_21097 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
var statearr_21156_21211 = state_21107__$1;
(statearr_21156_21211[(2)] = inst_21097);

(statearr_21156_21211[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (30))){
var inst_21061 = (state_21107[(13)]);
var inst_21067 = (state_21107[(9)]);
var inst_21060 = (state_21107[(10)]);
var inst_21084 = cljs.core.empty_QMARK_.call(null,inst_21060);
var inst_21085 = inst_21061.call(null,inst_21067);
var inst_21086 = cljs.core.not.call(null,inst_21085);
var inst_21087 = (inst_21084) && (inst_21086);
var state_21107__$1 = state_21107;
var statearr_21157_21212 = state_21107__$1;
(statearr_21157_21212[(2)] = inst_21087);

(statearr_21157_21212[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (10))){
var inst_21013 = (state_21107[(8)]);
var inst_21033 = (state_21107[(2)]);
var inst_21034 = cljs.core.get.call(null,inst_21033,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21035 = cljs.core.get.call(null,inst_21033,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21036 = cljs.core.get.call(null,inst_21033,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21037 = inst_21013;
var state_21107__$1 = (function (){var statearr_21158 = state_21107;
(statearr_21158[(16)] = inst_21035);

(statearr_21158[(17)] = inst_21034);

(statearr_21158[(18)] = inst_21036);

(statearr_21158[(7)] = inst_21037);

return statearr_21158;
})();
var statearr_21159_21213 = state_21107__$1;
(statearr_21159_21213[(2)] = null);

(statearr_21159_21213[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (18))){
var inst_21051 = (state_21107[(2)]);
var state_21107__$1 = state_21107;
var statearr_21160_21214 = state_21107__$1;
(statearr_21160_21214[(2)] = inst_21051);

(statearr_21160_21214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (37))){
var state_21107__$1 = state_21107;
var statearr_21161_21215 = state_21107__$1;
(statearr_21161_21215[(2)] = null);

(statearr_21161_21215[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21108 === (8))){
var inst_21013 = (state_21107[(8)]);
var inst_21030 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21013);
var state_21107__$1 = state_21107;
var statearr_21162_21216 = state_21107__$1;
(statearr_21162_21216[(2)] = inst_21030);

(statearr_21162_21216[(1)] = (10));


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
});})(c__19457__auto___21170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19345__auto__,c__19457__auto___21170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19346__auto__ = null;
var cljs$core$async$mix_$_state_machine__19346__auto____0 = (function (){
var statearr_21166 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21166[(0)] = cljs$core$async$mix_$_state_machine__19346__auto__);

(statearr_21166[(1)] = (1));

return statearr_21166;
});
var cljs$core$async$mix_$_state_machine__19346__auto____1 = (function (state_21107){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_21107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e21167){if((e21167 instanceof Object)){
var ex__19349__auto__ = e21167;
var statearr_21168_21217 = state_21107;
(statearr_21168_21217[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21167;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21218 = state_21107;
state_21107 = G__21218;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19346__auto__ = function(state_21107){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19346__auto____1.call(this,state_21107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19346__auto____0;
cljs$core$async$mix_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19346__auto____1;
return cljs$core$async$mix_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___21170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19459__auto__ = (function (){var statearr_21169 = f__19458__auto__.call(null);
(statearr_21169[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___21170);

return statearr_21169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___21170,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17572__auto__ = (((p == null))?null:p);
var m__17573__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17573__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17572__auto__ = (((p == null))?null:p);
var m__17573__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,p,v,ch);
} else {
var m__17573__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args21219 = [];
var len__17976__auto___21222 = arguments.length;
var i__17977__auto___21223 = (0);
while(true){
if((i__17977__auto___21223 < len__17976__auto___21222)){
args21219.push((arguments[i__17977__auto___21223]));

var G__21224 = (i__17977__auto___21223 + (1));
i__17977__auto___21223 = G__21224;
continue;
} else {
}
break;
}

var G__21221 = args21219.length;
switch (G__21221) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21219.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17572__auto__ = (((p == null))?null:p);
var m__17573__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,p);
} else {
var m__17573__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17572__auto__ = (((p == null))?null:p);
var m__17573__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17572__auto__)]);
if(!((m__17573__auto__ == null))){
return m__17573__auto__.call(null,p,v);
} else {
var m__17573__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17573__auto____$1 == null))){
return m__17573__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args21227 = [];
var len__17976__auto___21352 = arguments.length;
var i__17977__auto___21353 = (0);
while(true){
if((i__17977__auto___21353 < len__17976__auto___21352)){
args21227.push((arguments[i__17977__auto___21353]));

var G__21354 = (i__17977__auto___21353 + (1));
i__17977__auto___21353 = G__21354;
continue;
} else {
}
break;
}

var G__21229 = args21227.length;
switch (G__21229) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21227.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16917__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16917__auto__,mults){
return (function (p1__21226_SHARP_){
if(cljs.core.truth_(p1__21226_SHARP_.call(null,topic))){
return p1__21226_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__21226_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16917__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async21230 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21230 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta21231){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta21231 = meta21231;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_21232,meta21231__$1){
var self__ = this;
var _21232__$1 = this;
return (new cljs.core.async.t_cljs$core$async21230(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta21231__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_21232){
var self__ = this;
var _21232__$1 = this;
return self__.meta21231;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta21231","meta21231",-778914386,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async21230.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21230.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21230";

cljs.core.async.t_cljs$core$async21230.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async21230");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async21230 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async21230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21231){
return (new cljs.core.async.t_cljs$core$async21230(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta21231));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async21230(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19457__auto___21356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___21356,mults,ensure_mult,p){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___21356,mults,ensure_mult,p){
return (function (state_21304){
var state_val_21305 = (state_21304[(1)]);
if((state_val_21305 === (7))){
var inst_21300 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21306_21357 = state_21304__$1;
(statearr_21306_21357[(2)] = inst_21300);

(statearr_21306_21357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (20))){
var state_21304__$1 = state_21304;
var statearr_21307_21358 = state_21304__$1;
(statearr_21307_21358[(2)] = null);

(statearr_21307_21358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (1))){
var state_21304__$1 = state_21304;
var statearr_21308_21359 = state_21304__$1;
(statearr_21308_21359[(2)] = null);

(statearr_21308_21359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (24))){
var inst_21283 = (state_21304[(7)]);
var inst_21292 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_21283);
var state_21304__$1 = state_21304;
var statearr_21309_21360 = state_21304__$1;
(statearr_21309_21360[(2)] = inst_21292);

(statearr_21309_21360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (4))){
var inst_21235 = (state_21304[(8)]);
var inst_21235__$1 = (state_21304[(2)]);
var inst_21236 = (inst_21235__$1 == null);
var state_21304__$1 = (function (){var statearr_21310 = state_21304;
(statearr_21310[(8)] = inst_21235__$1);

return statearr_21310;
})();
if(cljs.core.truth_(inst_21236)){
var statearr_21311_21361 = state_21304__$1;
(statearr_21311_21361[(1)] = (5));

} else {
var statearr_21312_21362 = state_21304__$1;
(statearr_21312_21362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (15))){
var inst_21277 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21313_21363 = state_21304__$1;
(statearr_21313_21363[(2)] = inst_21277);

(statearr_21313_21363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (21))){
var inst_21297 = (state_21304[(2)]);
var state_21304__$1 = (function (){var statearr_21314 = state_21304;
(statearr_21314[(9)] = inst_21297);

return statearr_21314;
})();
var statearr_21315_21364 = state_21304__$1;
(statearr_21315_21364[(2)] = null);

(statearr_21315_21364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (13))){
var inst_21259 = (state_21304[(10)]);
var inst_21261 = cljs.core.chunked_seq_QMARK_.call(null,inst_21259);
var state_21304__$1 = state_21304;
if(inst_21261){
var statearr_21316_21365 = state_21304__$1;
(statearr_21316_21365[(1)] = (16));

} else {
var statearr_21317_21366 = state_21304__$1;
(statearr_21317_21366[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (22))){
var inst_21289 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
if(cljs.core.truth_(inst_21289)){
var statearr_21318_21367 = state_21304__$1;
(statearr_21318_21367[(1)] = (23));

} else {
var statearr_21319_21368 = state_21304__$1;
(statearr_21319_21368[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (6))){
var inst_21283 = (state_21304[(7)]);
var inst_21235 = (state_21304[(8)]);
var inst_21285 = (state_21304[(11)]);
var inst_21283__$1 = topic_fn.call(null,inst_21235);
var inst_21284 = cljs.core.deref.call(null,mults);
var inst_21285__$1 = cljs.core.get.call(null,inst_21284,inst_21283__$1);
var state_21304__$1 = (function (){var statearr_21320 = state_21304;
(statearr_21320[(7)] = inst_21283__$1);

(statearr_21320[(11)] = inst_21285__$1);

return statearr_21320;
})();
if(cljs.core.truth_(inst_21285__$1)){
var statearr_21321_21369 = state_21304__$1;
(statearr_21321_21369[(1)] = (19));

} else {
var statearr_21322_21370 = state_21304__$1;
(statearr_21322_21370[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (25))){
var inst_21294 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21323_21371 = state_21304__$1;
(statearr_21323_21371[(2)] = inst_21294);

(statearr_21323_21371[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (17))){
var inst_21259 = (state_21304[(10)]);
var inst_21268 = cljs.core.first.call(null,inst_21259);
var inst_21269 = cljs.core.async.muxch_STAR_.call(null,inst_21268);
var inst_21270 = cljs.core.async.close_BANG_.call(null,inst_21269);
var inst_21271 = cljs.core.next.call(null,inst_21259);
var inst_21245 = inst_21271;
var inst_21246 = null;
var inst_21247 = (0);
var inst_21248 = (0);
var state_21304__$1 = (function (){var statearr_21324 = state_21304;
(statearr_21324[(12)] = inst_21248);

(statearr_21324[(13)] = inst_21270);

(statearr_21324[(14)] = inst_21247);

(statearr_21324[(15)] = inst_21246);

(statearr_21324[(16)] = inst_21245);

return statearr_21324;
})();
var statearr_21325_21372 = state_21304__$1;
(statearr_21325_21372[(2)] = null);

(statearr_21325_21372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (3))){
var inst_21302 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21304__$1,inst_21302);
} else {
if((state_val_21305 === (12))){
var inst_21279 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21326_21373 = state_21304__$1;
(statearr_21326_21373[(2)] = inst_21279);

(statearr_21326_21373[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (2))){
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21304__$1,(4),ch);
} else {
if((state_val_21305 === (23))){
var state_21304__$1 = state_21304;
var statearr_21327_21374 = state_21304__$1;
(statearr_21327_21374[(2)] = null);

(statearr_21327_21374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (19))){
var inst_21235 = (state_21304[(8)]);
var inst_21285 = (state_21304[(11)]);
var inst_21287 = cljs.core.async.muxch_STAR_.call(null,inst_21285);
var state_21304__$1 = state_21304;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21304__$1,(22),inst_21287,inst_21235);
} else {
if((state_val_21305 === (11))){
var inst_21245 = (state_21304[(16)]);
var inst_21259 = (state_21304[(10)]);
var inst_21259__$1 = cljs.core.seq.call(null,inst_21245);
var state_21304__$1 = (function (){var statearr_21328 = state_21304;
(statearr_21328[(10)] = inst_21259__$1);

return statearr_21328;
})();
if(inst_21259__$1){
var statearr_21329_21375 = state_21304__$1;
(statearr_21329_21375[(1)] = (13));

} else {
var statearr_21330_21376 = state_21304__$1;
(statearr_21330_21376[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (9))){
var inst_21281 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21331_21377 = state_21304__$1;
(statearr_21331_21377[(2)] = inst_21281);

(statearr_21331_21377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (5))){
var inst_21242 = cljs.core.deref.call(null,mults);
var inst_21243 = cljs.core.vals.call(null,inst_21242);
var inst_21244 = cljs.core.seq.call(null,inst_21243);
var inst_21245 = inst_21244;
var inst_21246 = null;
var inst_21247 = (0);
var inst_21248 = (0);
var state_21304__$1 = (function (){var statearr_21332 = state_21304;
(statearr_21332[(12)] = inst_21248);

(statearr_21332[(14)] = inst_21247);

(statearr_21332[(15)] = inst_21246);

(statearr_21332[(16)] = inst_21245);

return statearr_21332;
})();
var statearr_21333_21378 = state_21304__$1;
(statearr_21333_21378[(2)] = null);

(statearr_21333_21378[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (14))){
var state_21304__$1 = state_21304;
var statearr_21337_21379 = state_21304__$1;
(statearr_21337_21379[(2)] = null);

(statearr_21337_21379[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (16))){
var inst_21259 = (state_21304[(10)]);
var inst_21263 = cljs.core.chunk_first.call(null,inst_21259);
var inst_21264 = cljs.core.chunk_rest.call(null,inst_21259);
var inst_21265 = cljs.core.count.call(null,inst_21263);
var inst_21245 = inst_21264;
var inst_21246 = inst_21263;
var inst_21247 = inst_21265;
var inst_21248 = (0);
var state_21304__$1 = (function (){var statearr_21338 = state_21304;
(statearr_21338[(12)] = inst_21248);

(statearr_21338[(14)] = inst_21247);

(statearr_21338[(15)] = inst_21246);

(statearr_21338[(16)] = inst_21245);

return statearr_21338;
})();
var statearr_21339_21380 = state_21304__$1;
(statearr_21339_21380[(2)] = null);

(statearr_21339_21380[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (10))){
var inst_21248 = (state_21304[(12)]);
var inst_21247 = (state_21304[(14)]);
var inst_21246 = (state_21304[(15)]);
var inst_21245 = (state_21304[(16)]);
var inst_21253 = cljs.core._nth.call(null,inst_21246,inst_21248);
var inst_21254 = cljs.core.async.muxch_STAR_.call(null,inst_21253);
var inst_21255 = cljs.core.async.close_BANG_.call(null,inst_21254);
var inst_21256 = (inst_21248 + (1));
var tmp21334 = inst_21247;
var tmp21335 = inst_21246;
var tmp21336 = inst_21245;
var inst_21245__$1 = tmp21336;
var inst_21246__$1 = tmp21335;
var inst_21247__$1 = tmp21334;
var inst_21248__$1 = inst_21256;
var state_21304__$1 = (function (){var statearr_21340 = state_21304;
(statearr_21340[(12)] = inst_21248__$1);

(statearr_21340[(14)] = inst_21247__$1);

(statearr_21340[(15)] = inst_21246__$1);

(statearr_21340[(16)] = inst_21245__$1);

(statearr_21340[(17)] = inst_21255);

return statearr_21340;
})();
var statearr_21341_21381 = state_21304__$1;
(statearr_21341_21381[(2)] = null);

(statearr_21341_21381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (18))){
var inst_21274 = (state_21304[(2)]);
var state_21304__$1 = state_21304;
var statearr_21342_21382 = state_21304__$1;
(statearr_21342_21382[(2)] = inst_21274);

(statearr_21342_21382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21305 === (8))){
var inst_21248 = (state_21304[(12)]);
var inst_21247 = (state_21304[(14)]);
var inst_21250 = (inst_21248 < inst_21247);
var inst_21251 = inst_21250;
var state_21304__$1 = state_21304;
if(cljs.core.truth_(inst_21251)){
var statearr_21343_21383 = state_21304__$1;
(statearr_21343_21383[(1)] = (10));

} else {
var statearr_21344_21384 = state_21304__$1;
(statearr_21344_21384[(1)] = (11));

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
});})(c__19457__auto___21356,mults,ensure_mult,p))
;
return ((function (switch__19345__auto__,c__19457__auto___21356,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_21348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21348[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_21348[(1)] = (1));

return statearr_21348;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_21304){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_21304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e21349){if((e21349 instanceof Object)){
var ex__19349__auto__ = e21349;
var statearr_21350_21385 = state_21304;
(statearr_21350_21385[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21386 = state_21304;
state_21304 = G__21386;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_21304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_21304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___21356,mults,ensure_mult,p))
})();
var state__19459__auto__ = (function (){var statearr_21351 = f__19458__auto__.call(null);
(statearr_21351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___21356);

return statearr_21351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___21356,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args21387 = [];
var len__17976__auto___21390 = arguments.length;
var i__17977__auto___21391 = (0);
while(true){
if((i__17977__auto___21391 < len__17976__auto___21390)){
args21387.push((arguments[i__17977__auto___21391]));

var G__21392 = (i__17977__auto___21391 + (1));
i__17977__auto___21391 = G__21392;
continue;
} else {
}
break;
}

var G__21389 = args21387.length;
switch (G__21389) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21387.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args21394 = [];
var len__17976__auto___21397 = arguments.length;
var i__17977__auto___21398 = (0);
while(true){
if((i__17977__auto___21398 < len__17976__auto___21397)){
args21394.push((arguments[i__17977__auto___21398]));

var G__21399 = (i__17977__auto___21398 + (1));
i__17977__auto___21398 = G__21399;
continue;
} else {
}
break;
}

var G__21396 = args21394.length;
switch (G__21396) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21394.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args21401 = [];
var len__17976__auto___21472 = arguments.length;
var i__17977__auto___21473 = (0);
while(true){
if((i__17977__auto___21473 < len__17976__auto___21472)){
args21401.push((arguments[i__17977__auto___21473]));

var G__21474 = (i__17977__auto___21473 + (1));
i__17977__auto___21473 = G__21474;
continue;
} else {
}
break;
}

var G__21403 = args21401.length;
switch (G__21403) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21401.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19457__auto___21476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___21476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___21476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_21442){
var state_val_21443 = (state_21442[(1)]);
if((state_val_21443 === (7))){
var state_21442__$1 = state_21442;
var statearr_21444_21477 = state_21442__$1;
(statearr_21444_21477[(2)] = null);

(statearr_21444_21477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (1))){
var state_21442__$1 = state_21442;
var statearr_21445_21478 = state_21442__$1;
(statearr_21445_21478[(2)] = null);

(statearr_21445_21478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (4))){
var inst_21406 = (state_21442[(7)]);
var inst_21408 = (inst_21406 < cnt);
var state_21442__$1 = state_21442;
if(cljs.core.truth_(inst_21408)){
var statearr_21446_21479 = state_21442__$1;
(statearr_21446_21479[(1)] = (6));

} else {
var statearr_21447_21480 = state_21442__$1;
(statearr_21447_21480[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (15))){
var inst_21438 = (state_21442[(2)]);
var state_21442__$1 = state_21442;
var statearr_21448_21481 = state_21442__$1;
(statearr_21448_21481[(2)] = inst_21438);

(statearr_21448_21481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (13))){
var inst_21431 = cljs.core.async.close_BANG_.call(null,out);
var state_21442__$1 = state_21442;
var statearr_21449_21482 = state_21442__$1;
(statearr_21449_21482[(2)] = inst_21431);

(statearr_21449_21482[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (6))){
var state_21442__$1 = state_21442;
var statearr_21450_21483 = state_21442__$1;
(statearr_21450_21483[(2)] = null);

(statearr_21450_21483[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (3))){
var inst_21440 = (state_21442[(2)]);
var state_21442__$1 = state_21442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21442__$1,inst_21440);
} else {
if((state_val_21443 === (12))){
var inst_21428 = (state_21442[(8)]);
var inst_21428__$1 = (state_21442[(2)]);
var inst_21429 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_21428__$1);
var state_21442__$1 = (function (){var statearr_21451 = state_21442;
(statearr_21451[(8)] = inst_21428__$1);

return statearr_21451;
})();
if(cljs.core.truth_(inst_21429)){
var statearr_21452_21484 = state_21442__$1;
(statearr_21452_21484[(1)] = (13));

} else {
var statearr_21453_21485 = state_21442__$1;
(statearr_21453_21485[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (2))){
var inst_21405 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_21406 = (0);
var state_21442__$1 = (function (){var statearr_21454 = state_21442;
(statearr_21454[(7)] = inst_21406);

(statearr_21454[(9)] = inst_21405);

return statearr_21454;
})();
var statearr_21455_21486 = state_21442__$1;
(statearr_21455_21486[(2)] = null);

(statearr_21455_21486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (11))){
var inst_21406 = (state_21442[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_21442,(10),Object,null,(9));
var inst_21415 = chs__$1.call(null,inst_21406);
var inst_21416 = done.call(null,inst_21406);
var inst_21417 = cljs.core.async.take_BANG_.call(null,inst_21415,inst_21416);
var state_21442__$1 = state_21442;
var statearr_21456_21487 = state_21442__$1;
(statearr_21456_21487[(2)] = inst_21417);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (9))){
var inst_21406 = (state_21442[(7)]);
var inst_21419 = (state_21442[(2)]);
var inst_21420 = (inst_21406 + (1));
var inst_21406__$1 = inst_21420;
var state_21442__$1 = (function (){var statearr_21457 = state_21442;
(statearr_21457[(7)] = inst_21406__$1);

(statearr_21457[(10)] = inst_21419);

return statearr_21457;
})();
var statearr_21458_21488 = state_21442__$1;
(statearr_21458_21488[(2)] = null);

(statearr_21458_21488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (5))){
var inst_21426 = (state_21442[(2)]);
var state_21442__$1 = (function (){var statearr_21459 = state_21442;
(statearr_21459[(11)] = inst_21426);

return statearr_21459;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21442__$1,(12),dchan);
} else {
if((state_val_21443 === (14))){
var inst_21428 = (state_21442[(8)]);
var inst_21433 = cljs.core.apply.call(null,f,inst_21428);
var state_21442__$1 = state_21442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21442__$1,(16),out,inst_21433);
} else {
if((state_val_21443 === (16))){
var inst_21435 = (state_21442[(2)]);
var state_21442__$1 = (function (){var statearr_21460 = state_21442;
(statearr_21460[(12)] = inst_21435);

return statearr_21460;
})();
var statearr_21461_21489 = state_21442__$1;
(statearr_21461_21489[(2)] = null);

(statearr_21461_21489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (10))){
var inst_21410 = (state_21442[(2)]);
var inst_21411 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_21442__$1 = (function (){var statearr_21462 = state_21442;
(statearr_21462[(13)] = inst_21410);

return statearr_21462;
})();
var statearr_21463_21490 = state_21442__$1;
(statearr_21463_21490[(2)] = inst_21411);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21442__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21443 === (8))){
var inst_21424 = (state_21442[(2)]);
var state_21442__$1 = state_21442;
var statearr_21464_21491 = state_21442__$1;
(statearr_21464_21491[(2)] = inst_21424);

(statearr_21464_21491[(1)] = (5));


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
});})(c__19457__auto___21476,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19345__auto__,c__19457__auto___21476,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_21468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21468[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_21468[(1)] = (1));

return statearr_21468;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_21442){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_21442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e21469){if((e21469 instanceof Object)){
var ex__19349__auto__ = e21469;
var statearr_21470_21492 = state_21442;
(statearr_21470_21492[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21493 = state_21442;
state_21442 = G__21493;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_21442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_21442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___21476,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19459__auto__ = (function (){var statearr_21471 = f__19458__auto__.call(null);
(statearr_21471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___21476);

return statearr_21471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___21476,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args21495 = [];
var len__17976__auto___21551 = arguments.length;
var i__17977__auto___21552 = (0);
while(true){
if((i__17977__auto___21552 < len__17976__auto___21551)){
args21495.push((arguments[i__17977__auto___21552]));

var G__21553 = (i__17977__auto___21552 + (1));
i__17977__auto___21552 = G__21553;
continue;
} else {
}
break;
}

var G__21497 = args21495.length;
switch (G__21497) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21495.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19457__auto___21555 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___21555,out){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___21555,out){
return (function (state_21527){
var state_val_21528 = (state_21527[(1)]);
if((state_val_21528 === (7))){
var inst_21507 = (state_21527[(7)]);
var inst_21506 = (state_21527[(8)]);
var inst_21506__$1 = (state_21527[(2)]);
var inst_21507__$1 = cljs.core.nth.call(null,inst_21506__$1,(0),null);
var inst_21508 = cljs.core.nth.call(null,inst_21506__$1,(1),null);
var inst_21509 = (inst_21507__$1 == null);
var state_21527__$1 = (function (){var statearr_21529 = state_21527;
(statearr_21529[(9)] = inst_21508);

(statearr_21529[(7)] = inst_21507__$1);

(statearr_21529[(8)] = inst_21506__$1);

return statearr_21529;
})();
if(cljs.core.truth_(inst_21509)){
var statearr_21530_21556 = state_21527__$1;
(statearr_21530_21556[(1)] = (8));

} else {
var statearr_21531_21557 = state_21527__$1;
(statearr_21531_21557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (1))){
var inst_21498 = cljs.core.vec.call(null,chs);
var inst_21499 = inst_21498;
var state_21527__$1 = (function (){var statearr_21532 = state_21527;
(statearr_21532[(10)] = inst_21499);

return statearr_21532;
})();
var statearr_21533_21558 = state_21527__$1;
(statearr_21533_21558[(2)] = null);

(statearr_21533_21558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (4))){
var inst_21499 = (state_21527[(10)]);
var state_21527__$1 = state_21527;
return cljs.core.async.ioc_alts_BANG_.call(null,state_21527__$1,(7),inst_21499);
} else {
if((state_val_21528 === (6))){
var inst_21523 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
var statearr_21534_21559 = state_21527__$1;
(statearr_21534_21559[(2)] = inst_21523);

(statearr_21534_21559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (3))){
var inst_21525 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21527__$1,inst_21525);
} else {
if((state_val_21528 === (2))){
var inst_21499 = (state_21527[(10)]);
var inst_21501 = cljs.core.count.call(null,inst_21499);
var inst_21502 = (inst_21501 > (0));
var state_21527__$1 = state_21527;
if(cljs.core.truth_(inst_21502)){
var statearr_21536_21560 = state_21527__$1;
(statearr_21536_21560[(1)] = (4));

} else {
var statearr_21537_21561 = state_21527__$1;
(statearr_21537_21561[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (11))){
var inst_21499 = (state_21527[(10)]);
var inst_21516 = (state_21527[(2)]);
var tmp21535 = inst_21499;
var inst_21499__$1 = tmp21535;
var state_21527__$1 = (function (){var statearr_21538 = state_21527;
(statearr_21538[(11)] = inst_21516);

(statearr_21538[(10)] = inst_21499__$1);

return statearr_21538;
})();
var statearr_21539_21562 = state_21527__$1;
(statearr_21539_21562[(2)] = null);

(statearr_21539_21562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (9))){
var inst_21507 = (state_21527[(7)]);
var state_21527__$1 = state_21527;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21527__$1,(11),out,inst_21507);
} else {
if((state_val_21528 === (5))){
var inst_21521 = cljs.core.async.close_BANG_.call(null,out);
var state_21527__$1 = state_21527;
var statearr_21540_21563 = state_21527__$1;
(statearr_21540_21563[(2)] = inst_21521);

(statearr_21540_21563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (10))){
var inst_21519 = (state_21527[(2)]);
var state_21527__$1 = state_21527;
var statearr_21541_21564 = state_21527__$1;
(statearr_21541_21564[(2)] = inst_21519);

(statearr_21541_21564[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21528 === (8))){
var inst_21508 = (state_21527[(9)]);
var inst_21499 = (state_21527[(10)]);
var inst_21507 = (state_21527[(7)]);
var inst_21506 = (state_21527[(8)]);
var inst_21511 = (function (){var cs = inst_21499;
var vec__21504 = inst_21506;
var v = inst_21507;
var c = inst_21508;
return ((function (cs,vec__21504,v,c,inst_21508,inst_21499,inst_21507,inst_21506,state_val_21528,c__19457__auto___21555,out){
return (function (p1__21494_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__21494_SHARP_);
});
;})(cs,vec__21504,v,c,inst_21508,inst_21499,inst_21507,inst_21506,state_val_21528,c__19457__auto___21555,out))
})();
var inst_21512 = cljs.core.filterv.call(null,inst_21511,inst_21499);
var inst_21499__$1 = inst_21512;
var state_21527__$1 = (function (){var statearr_21542 = state_21527;
(statearr_21542[(10)] = inst_21499__$1);

return statearr_21542;
})();
var statearr_21543_21565 = state_21527__$1;
(statearr_21543_21565[(2)] = null);

(statearr_21543_21565[(1)] = (2));


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
});})(c__19457__auto___21555,out))
;
return ((function (switch__19345__auto__,c__19457__auto___21555,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_21547 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21547[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_21547[(1)] = (1));

return statearr_21547;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_21527){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_21527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e21548){if((e21548 instanceof Object)){
var ex__19349__auto__ = e21548;
var statearr_21549_21566 = state_21527;
(statearr_21549_21566[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21567 = state_21527;
state_21527 = G__21567;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_21527){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_21527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___21555,out))
})();
var state__19459__auto__ = (function (){var statearr_21550 = f__19458__auto__.call(null);
(statearr_21550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___21555);

return statearr_21550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___21555,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args21568 = [];
var len__17976__auto___21617 = arguments.length;
var i__17977__auto___21618 = (0);
while(true){
if((i__17977__auto___21618 < len__17976__auto___21617)){
args21568.push((arguments[i__17977__auto___21618]));

var G__21619 = (i__17977__auto___21618 + (1));
i__17977__auto___21618 = G__21619;
continue;
} else {
}
break;
}

var G__21570 = args21568.length;
switch (G__21570) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21568.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19457__auto___21621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___21621,out){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___21621,out){
return (function (state_21594){
var state_val_21595 = (state_21594[(1)]);
if((state_val_21595 === (7))){
var inst_21576 = (state_21594[(7)]);
var inst_21576__$1 = (state_21594[(2)]);
var inst_21577 = (inst_21576__$1 == null);
var inst_21578 = cljs.core.not.call(null,inst_21577);
var state_21594__$1 = (function (){var statearr_21596 = state_21594;
(statearr_21596[(7)] = inst_21576__$1);

return statearr_21596;
})();
if(inst_21578){
var statearr_21597_21622 = state_21594__$1;
(statearr_21597_21622[(1)] = (8));

} else {
var statearr_21598_21623 = state_21594__$1;
(statearr_21598_21623[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (1))){
var inst_21571 = (0);
var state_21594__$1 = (function (){var statearr_21599 = state_21594;
(statearr_21599[(8)] = inst_21571);

return statearr_21599;
})();
var statearr_21600_21624 = state_21594__$1;
(statearr_21600_21624[(2)] = null);

(statearr_21600_21624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (4))){
var state_21594__$1 = state_21594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21594__$1,(7),ch);
} else {
if((state_val_21595 === (6))){
var inst_21589 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21601_21625 = state_21594__$1;
(statearr_21601_21625[(2)] = inst_21589);

(statearr_21601_21625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (3))){
var inst_21591 = (state_21594[(2)]);
var inst_21592 = cljs.core.async.close_BANG_.call(null,out);
var state_21594__$1 = (function (){var statearr_21602 = state_21594;
(statearr_21602[(9)] = inst_21591);

return statearr_21602;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21594__$1,inst_21592);
} else {
if((state_val_21595 === (2))){
var inst_21571 = (state_21594[(8)]);
var inst_21573 = (inst_21571 < n);
var state_21594__$1 = state_21594;
if(cljs.core.truth_(inst_21573)){
var statearr_21603_21626 = state_21594__$1;
(statearr_21603_21626[(1)] = (4));

} else {
var statearr_21604_21627 = state_21594__$1;
(statearr_21604_21627[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (11))){
var inst_21571 = (state_21594[(8)]);
var inst_21581 = (state_21594[(2)]);
var inst_21582 = (inst_21571 + (1));
var inst_21571__$1 = inst_21582;
var state_21594__$1 = (function (){var statearr_21605 = state_21594;
(statearr_21605[(8)] = inst_21571__$1);

(statearr_21605[(10)] = inst_21581);

return statearr_21605;
})();
var statearr_21606_21628 = state_21594__$1;
(statearr_21606_21628[(2)] = null);

(statearr_21606_21628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (9))){
var state_21594__$1 = state_21594;
var statearr_21607_21629 = state_21594__$1;
(statearr_21607_21629[(2)] = null);

(statearr_21607_21629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (5))){
var state_21594__$1 = state_21594;
var statearr_21608_21630 = state_21594__$1;
(statearr_21608_21630[(2)] = null);

(statearr_21608_21630[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (10))){
var inst_21586 = (state_21594[(2)]);
var state_21594__$1 = state_21594;
var statearr_21609_21631 = state_21594__$1;
(statearr_21609_21631[(2)] = inst_21586);

(statearr_21609_21631[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21595 === (8))){
var inst_21576 = (state_21594[(7)]);
var state_21594__$1 = state_21594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21594__$1,(11),out,inst_21576);
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
});})(c__19457__auto___21621,out))
;
return ((function (switch__19345__auto__,c__19457__auto___21621,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_21613 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21613[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_21613[(1)] = (1));

return statearr_21613;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_21594){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_21594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e21614){if((e21614 instanceof Object)){
var ex__19349__auto__ = e21614;
var statearr_21615_21632 = state_21594;
(statearr_21615_21632[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21633 = state_21594;
state_21594 = G__21633;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_21594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_21594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___21621,out))
})();
var state__19459__auto__ = (function (){var statearr_21616 = f__19458__auto__.call(null);
(statearr_21616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___21621);

return statearr_21616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___21621,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21641 = (function (map_LT_,f,ch,meta21642){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21642 = meta21642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21643,meta21642__$1){
var self__ = this;
var _21643__$1 = this;
return (new cljs.core.async.t_cljs$core$async21641(self__.map_LT_,self__.f,self__.ch,meta21642__$1));
});

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21643){
var self__ = this;
var _21643__$1 = this;
return self__.meta21642;
});

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async21644 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21644 = (function (map_LT_,f,ch,meta21642,_,fn1,meta21645){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta21642 = meta21642;
this._ = _;
this.fn1 = fn1;
this.meta21645 = meta21645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_21646,meta21645__$1){
var self__ = this;
var _21646__$1 = this;
return (new cljs.core.async.t_cljs$core$async21644(self__.map_LT_,self__.f,self__.ch,self__.meta21642,self__._,self__.fn1,meta21645__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async21644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_21646){
var self__ = this;
var _21646__$1 = this;
return self__.meta21645;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21644.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21644.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async21644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__21634_SHARP_){
return f1.call(null,(((p1__21634_SHARP_ == null))?null:self__.f.call(null,p1__21634_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async21644.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21642","meta21642",1500275684,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async21641","cljs.core.async/t_cljs$core$async21641",-2137646801,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta21645","meta21645",1363129853,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async21644.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21644";

cljs.core.async.t_cljs$core$async21644.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async21644");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async21644 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21644(map_LT___$1,f__$1,ch__$1,meta21642__$1,___$2,fn1__$1,meta21645){
return (new cljs.core.async.t_cljs$core$async21644(map_LT___$1,f__$1,ch__$1,meta21642__$1,___$2,fn1__$1,meta21645));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async21644(self__.map_LT_,self__.f,self__.ch,self__.meta21642,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16905__auto__ = ret;
if(cljs.core.truth_(and__16905__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16905__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async21641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21642","meta21642",1500275684,null)], null);
});

cljs.core.async.t_cljs$core$async21641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21641";

cljs.core.async.t_cljs$core$async21641.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async21641");
});

cljs.core.async.__GT_t_cljs$core$async21641 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async21641(map_LT___$1,f__$1,ch__$1,meta21642){
return (new cljs.core.async.t_cljs$core$async21641(map_LT___$1,f__$1,ch__$1,meta21642));
});

}

return (new cljs.core.async.t_cljs$core$async21641(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async21650 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21650 = (function (map_GT_,f,ch,meta21651){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta21651 = meta21651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21652,meta21651__$1){
var self__ = this;
var _21652__$1 = this;
return (new cljs.core.async.t_cljs$core$async21650(self__.map_GT_,self__.f,self__.ch,meta21651__$1));
});

cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21652){
var self__ = this;
var _21652__$1 = this;
return self__.meta21651;
});

cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21650.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async21650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21651","meta21651",707219255,null)], null);
});

cljs.core.async.t_cljs$core$async21650.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21650.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21650";

cljs.core.async.t_cljs$core$async21650.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async21650");
});

cljs.core.async.__GT_t_cljs$core$async21650 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async21650(map_GT___$1,f__$1,ch__$1,meta21651){
return (new cljs.core.async.t_cljs$core$async21650(map_GT___$1,f__$1,ch__$1,meta21651));
});

}

return (new cljs.core.async.t_cljs$core$async21650(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async21656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21656 = (function (filter_GT_,p,ch,meta21657){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta21657 = meta21657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21658,meta21657__$1){
var self__ = this;
var _21658__$1 = this;
return (new cljs.core.async.t_cljs$core$async21656(self__.filter_GT_,self__.p,self__.ch,meta21657__$1));
});

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21658){
var self__ = this;
var _21658__$1 = this;
return self__.meta21657;
});

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async21656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async21656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta21657","meta21657",-670701946,null)], null);
});

cljs.core.async.t_cljs$core$async21656.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21656";

cljs.core.async.t_cljs$core$async21656.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cljs.core.async/t_cljs$core$async21656");
});

cljs.core.async.__GT_t_cljs$core$async21656 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async21656(filter_GT___$1,p__$1,ch__$1,meta21657){
return (new cljs.core.async.t_cljs$core$async21656(filter_GT___$1,p__$1,ch__$1,meta21657));
});

}

return (new cljs.core.async.t_cljs$core$async21656(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args21659 = [];
var len__17976__auto___21703 = arguments.length;
var i__17977__auto___21704 = (0);
while(true){
if((i__17977__auto___21704 < len__17976__auto___21703)){
args21659.push((arguments[i__17977__auto___21704]));

var G__21705 = (i__17977__auto___21704 + (1));
i__17977__auto___21704 = G__21705;
continue;
} else {
}
break;
}

var G__21661 = args21659.length;
switch (G__21661) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21659.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19457__auto___21707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___21707,out){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___21707,out){
return (function (state_21682){
var state_val_21683 = (state_21682[(1)]);
if((state_val_21683 === (7))){
var inst_21678 = (state_21682[(2)]);
var state_21682__$1 = state_21682;
var statearr_21684_21708 = state_21682__$1;
(statearr_21684_21708[(2)] = inst_21678);

(statearr_21684_21708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (1))){
var state_21682__$1 = state_21682;
var statearr_21685_21709 = state_21682__$1;
(statearr_21685_21709[(2)] = null);

(statearr_21685_21709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (4))){
var inst_21664 = (state_21682[(7)]);
var inst_21664__$1 = (state_21682[(2)]);
var inst_21665 = (inst_21664__$1 == null);
var state_21682__$1 = (function (){var statearr_21686 = state_21682;
(statearr_21686[(7)] = inst_21664__$1);

return statearr_21686;
})();
if(cljs.core.truth_(inst_21665)){
var statearr_21687_21710 = state_21682__$1;
(statearr_21687_21710[(1)] = (5));

} else {
var statearr_21688_21711 = state_21682__$1;
(statearr_21688_21711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (6))){
var inst_21664 = (state_21682[(7)]);
var inst_21669 = p.call(null,inst_21664);
var state_21682__$1 = state_21682;
if(cljs.core.truth_(inst_21669)){
var statearr_21689_21712 = state_21682__$1;
(statearr_21689_21712[(1)] = (8));

} else {
var statearr_21690_21713 = state_21682__$1;
(statearr_21690_21713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (3))){
var inst_21680 = (state_21682[(2)]);
var state_21682__$1 = state_21682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21682__$1,inst_21680);
} else {
if((state_val_21683 === (2))){
var state_21682__$1 = state_21682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21682__$1,(4),ch);
} else {
if((state_val_21683 === (11))){
var inst_21672 = (state_21682[(2)]);
var state_21682__$1 = state_21682;
var statearr_21691_21714 = state_21682__$1;
(statearr_21691_21714[(2)] = inst_21672);

(statearr_21691_21714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (9))){
var state_21682__$1 = state_21682;
var statearr_21692_21715 = state_21682__$1;
(statearr_21692_21715[(2)] = null);

(statearr_21692_21715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (5))){
var inst_21667 = cljs.core.async.close_BANG_.call(null,out);
var state_21682__$1 = state_21682;
var statearr_21693_21716 = state_21682__$1;
(statearr_21693_21716[(2)] = inst_21667);

(statearr_21693_21716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (10))){
var inst_21675 = (state_21682[(2)]);
var state_21682__$1 = (function (){var statearr_21694 = state_21682;
(statearr_21694[(8)] = inst_21675);

return statearr_21694;
})();
var statearr_21695_21717 = state_21682__$1;
(statearr_21695_21717[(2)] = null);

(statearr_21695_21717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21683 === (8))){
var inst_21664 = (state_21682[(7)]);
var state_21682__$1 = state_21682;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21682__$1,(11),out,inst_21664);
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
});})(c__19457__auto___21707,out))
;
return ((function (switch__19345__auto__,c__19457__auto___21707,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_21699 = [null,null,null,null,null,null,null,null,null];
(statearr_21699[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_21699[(1)] = (1));

return statearr_21699;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_21682){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_21682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e21700){if((e21700 instanceof Object)){
var ex__19349__auto__ = e21700;
var statearr_21701_21718 = state_21682;
(statearr_21701_21718[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21719 = state_21682;
state_21682 = G__21719;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_21682){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_21682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___21707,out))
})();
var state__19459__auto__ = (function (){var statearr_21702 = f__19458__auto__.call(null);
(statearr_21702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___21707);

return statearr_21702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___21707,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args21720 = [];
var len__17976__auto___21723 = arguments.length;
var i__17977__auto___21724 = (0);
while(true){
if((i__17977__auto___21724 < len__17976__auto___21723)){
args21720.push((arguments[i__17977__auto___21724]));

var G__21725 = (i__17977__auto___21724 + (1));
i__17977__auto___21724 = G__21725;
continue;
} else {
}
break;
}

var G__21722 = args21720.length;
switch (G__21722) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21720.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__){
return (function (state_21892){
var state_val_21893 = (state_21892[(1)]);
if((state_val_21893 === (7))){
var inst_21888 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21894_21935 = state_21892__$1;
(statearr_21894_21935[(2)] = inst_21888);

(statearr_21894_21935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (20))){
var inst_21858 = (state_21892[(7)]);
var inst_21869 = (state_21892[(2)]);
var inst_21870 = cljs.core.next.call(null,inst_21858);
var inst_21844 = inst_21870;
var inst_21845 = null;
var inst_21846 = (0);
var inst_21847 = (0);
var state_21892__$1 = (function (){var statearr_21895 = state_21892;
(statearr_21895[(8)] = inst_21845);

(statearr_21895[(9)] = inst_21846);

(statearr_21895[(10)] = inst_21847);

(statearr_21895[(11)] = inst_21869);

(statearr_21895[(12)] = inst_21844);

return statearr_21895;
})();
var statearr_21896_21936 = state_21892__$1;
(statearr_21896_21936[(2)] = null);

(statearr_21896_21936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (1))){
var state_21892__$1 = state_21892;
var statearr_21897_21937 = state_21892__$1;
(statearr_21897_21937[(2)] = null);

(statearr_21897_21937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (4))){
var inst_21833 = (state_21892[(13)]);
var inst_21833__$1 = (state_21892[(2)]);
var inst_21834 = (inst_21833__$1 == null);
var state_21892__$1 = (function (){var statearr_21898 = state_21892;
(statearr_21898[(13)] = inst_21833__$1);

return statearr_21898;
})();
if(cljs.core.truth_(inst_21834)){
var statearr_21899_21938 = state_21892__$1;
(statearr_21899_21938[(1)] = (5));

} else {
var statearr_21900_21939 = state_21892__$1;
(statearr_21900_21939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (15))){
var state_21892__$1 = state_21892;
var statearr_21904_21940 = state_21892__$1;
(statearr_21904_21940[(2)] = null);

(statearr_21904_21940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (21))){
var state_21892__$1 = state_21892;
var statearr_21905_21941 = state_21892__$1;
(statearr_21905_21941[(2)] = null);

(statearr_21905_21941[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (13))){
var inst_21845 = (state_21892[(8)]);
var inst_21846 = (state_21892[(9)]);
var inst_21847 = (state_21892[(10)]);
var inst_21844 = (state_21892[(12)]);
var inst_21854 = (state_21892[(2)]);
var inst_21855 = (inst_21847 + (1));
var tmp21901 = inst_21845;
var tmp21902 = inst_21846;
var tmp21903 = inst_21844;
var inst_21844__$1 = tmp21903;
var inst_21845__$1 = tmp21901;
var inst_21846__$1 = tmp21902;
var inst_21847__$1 = inst_21855;
var state_21892__$1 = (function (){var statearr_21906 = state_21892;
(statearr_21906[(8)] = inst_21845__$1);

(statearr_21906[(9)] = inst_21846__$1);

(statearr_21906[(10)] = inst_21847__$1);

(statearr_21906[(12)] = inst_21844__$1);

(statearr_21906[(14)] = inst_21854);

return statearr_21906;
})();
var statearr_21907_21942 = state_21892__$1;
(statearr_21907_21942[(2)] = null);

(statearr_21907_21942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (22))){
var state_21892__$1 = state_21892;
var statearr_21908_21943 = state_21892__$1;
(statearr_21908_21943[(2)] = null);

(statearr_21908_21943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (6))){
var inst_21833 = (state_21892[(13)]);
var inst_21842 = f.call(null,inst_21833);
var inst_21843 = cljs.core.seq.call(null,inst_21842);
var inst_21844 = inst_21843;
var inst_21845 = null;
var inst_21846 = (0);
var inst_21847 = (0);
var state_21892__$1 = (function (){var statearr_21909 = state_21892;
(statearr_21909[(8)] = inst_21845);

(statearr_21909[(9)] = inst_21846);

(statearr_21909[(10)] = inst_21847);

(statearr_21909[(12)] = inst_21844);

return statearr_21909;
})();
var statearr_21910_21944 = state_21892__$1;
(statearr_21910_21944[(2)] = null);

(statearr_21910_21944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (17))){
var inst_21858 = (state_21892[(7)]);
var inst_21862 = cljs.core.chunk_first.call(null,inst_21858);
var inst_21863 = cljs.core.chunk_rest.call(null,inst_21858);
var inst_21864 = cljs.core.count.call(null,inst_21862);
var inst_21844 = inst_21863;
var inst_21845 = inst_21862;
var inst_21846 = inst_21864;
var inst_21847 = (0);
var state_21892__$1 = (function (){var statearr_21911 = state_21892;
(statearr_21911[(8)] = inst_21845);

(statearr_21911[(9)] = inst_21846);

(statearr_21911[(10)] = inst_21847);

(statearr_21911[(12)] = inst_21844);

return statearr_21911;
})();
var statearr_21912_21945 = state_21892__$1;
(statearr_21912_21945[(2)] = null);

(statearr_21912_21945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (3))){
var inst_21890 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21892__$1,inst_21890);
} else {
if((state_val_21893 === (12))){
var inst_21878 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21913_21946 = state_21892__$1;
(statearr_21913_21946[(2)] = inst_21878);

(statearr_21913_21946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (2))){
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21892__$1,(4),in$);
} else {
if((state_val_21893 === (23))){
var inst_21886 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21914_21947 = state_21892__$1;
(statearr_21914_21947[(2)] = inst_21886);

(statearr_21914_21947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (19))){
var inst_21873 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21915_21948 = state_21892__$1;
(statearr_21915_21948[(2)] = inst_21873);

(statearr_21915_21948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (11))){
var inst_21844 = (state_21892[(12)]);
var inst_21858 = (state_21892[(7)]);
var inst_21858__$1 = cljs.core.seq.call(null,inst_21844);
var state_21892__$1 = (function (){var statearr_21916 = state_21892;
(statearr_21916[(7)] = inst_21858__$1);

return statearr_21916;
})();
if(inst_21858__$1){
var statearr_21917_21949 = state_21892__$1;
(statearr_21917_21949[(1)] = (14));

} else {
var statearr_21918_21950 = state_21892__$1;
(statearr_21918_21950[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (9))){
var inst_21880 = (state_21892[(2)]);
var inst_21881 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_21892__$1 = (function (){var statearr_21919 = state_21892;
(statearr_21919[(15)] = inst_21880);

return statearr_21919;
})();
if(cljs.core.truth_(inst_21881)){
var statearr_21920_21951 = state_21892__$1;
(statearr_21920_21951[(1)] = (21));

} else {
var statearr_21921_21952 = state_21892__$1;
(statearr_21921_21952[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (5))){
var inst_21836 = cljs.core.async.close_BANG_.call(null,out);
var state_21892__$1 = state_21892;
var statearr_21922_21953 = state_21892__$1;
(statearr_21922_21953[(2)] = inst_21836);

(statearr_21922_21953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (14))){
var inst_21858 = (state_21892[(7)]);
var inst_21860 = cljs.core.chunked_seq_QMARK_.call(null,inst_21858);
var state_21892__$1 = state_21892;
if(inst_21860){
var statearr_21923_21954 = state_21892__$1;
(statearr_21923_21954[(1)] = (17));

} else {
var statearr_21924_21955 = state_21892__$1;
(statearr_21924_21955[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (16))){
var inst_21876 = (state_21892[(2)]);
var state_21892__$1 = state_21892;
var statearr_21925_21956 = state_21892__$1;
(statearr_21925_21956[(2)] = inst_21876);

(statearr_21925_21956[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21893 === (10))){
var inst_21845 = (state_21892[(8)]);
var inst_21847 = (state_21892[(10)]);
var inst_21852 = cljs.core._nth.call(null,inst_21845,inst_21847);
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21892__$1,(13),out,inst_21852);
} else {
if((state_val_21893 === (18))){
var inst_21858 = (state_21892[(7)]);
var inst_21867 = cljs.core.first.call(null,inst_21858);
var state_21892__$1 = state_21892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21892__$1,(20),out,inst_21867);
} else {
if((state_val_21893 === (8))){
var inst_21846 = (state_21892[(9)]);
var inst_21847 = (state_21892[(10)]);
var inst_21849 = (inst_21847 < inst_21846);
var inst_21850 = inst_21849;
var state_21892__$1 = state_21892;
if(cljs.core.truth_(inst_21850)){
var statearr_21926_21957 = state_21892__$1;
(statearr_21926_21957[(1)] = (10));

} else {
var statearr_21927_21958 = state_21892__$1;
(statearr_21927_21958[(1)] = (11));

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
});})(c__19457__auto__))
;
return ((function (switch__19345__auto__,c__19457__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0 = (function (){
var statearr_21931 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21931[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__);

(statearr_21931[(1)] = (1));

return statearr_21931;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1 = (function (state_21892){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_21892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e21932){if((e21932 instanceof Object)){
var ex__19349__auto__ = e21932;
var statearr_21933_21959 = state_21892;
(statearr_21933_21959[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21960 = state_21892;
state_21892 = G__21960;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__ = function(state_21892){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1.call(this,state_21892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19346__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__))
})();
var state__19459__auto__ = (function (){var statearr_21934 = f__19458__auto__.call(null);
(statearr_21934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_21934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__))
);

return c__19457__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args21961 = [];
var len__17976__auto___21964 = arguments.length;
var i__17977__auto___21965 = (0);
while(true){
if((i__17977__auto___21965 < len__17976__auto___21964)){
args21961.push((arguments[i__17977__auto___21965]));

var G__21966 = (i__17977__auto___21965 + (1));
i__17977__auto___21965 = G__21966;
continue;
} else {
}
break;
}

var G__21963 = args21961.length;
switch (G__21963) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21961.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args21968 = [];
var len__17976__auto___21971 = arguments.length;
var i__17977__auto___21972 = (0);
while(true){
if((i__17977__auto___21972 < len__17976__auto___21971)){
args21968.push((arguments[i__17977__auto___21972]));

var G__21973 = (i__17977__auto___21972 + (1));
i__17977__auto___21972 = G__21973;
continue;
} else {
}
break;
}

var G__21970 = args21968.length;
switch (G__21970) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21968.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args21975 = [];
var len__17976__auto___22026 = arguments.length;
var i__17977__auto___22027 = (0);
while(true){
if((i__17977__auto___22027 < len__17976__auto___22026)){
args21975.push((arguments[i__17977__auto___22027]));

var G__22028 = (i__17977__auto___22027 + (1));
i__17977__auto___22027 = G__22028;
continue;
} else {
}
break;
}

var G__21977 = args21975.length;
switch (G__21977) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21975.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19457__auto___22030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___22030,out){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___22030,out){
return (function (state_22001){
var state_val_22002 = (state_22001[(1)]);
if((state_val_22002 === (7))){
var inst_21996 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22003_22031 = state_22001__$1;
(statearr_22003_22031[(2)] = inst_21996);

(statearr_22003_22031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (1))){
var inst_21978 = null;
var state_22001__$1 = (function (){var statearr_22004 = state_22001;
(statearr_22004[(7)] = inst_21978);

return statearr_22004;
})();
var statearr_22005_22032 = state_22001__$1;
(statearr_22005_22032[(2)] = null);

(statearr_22005_22032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (4))){
var inst_21981 = (state_22001[(8)]);
var inst_21981__$1 = (state_22001[(2)]);
var inst_21982 = (inst_21981__$1 == null);
var inst_21983 = cljs.core.not.call(null,inst_21982);
var state_22001__$1 = (function (){var statearr_22006 = state_22001;
(statearr_22006[(8)] = inst_21981__$1);

return statearr_22006;
})();
if(inst_21983){
var statearr_22007_22033 = state_22001__$1;
(statearr_22007_22033[(1)] = (5));

} else {
var statearr_22008_22034 = state_22001__$1;
(statearr_22008_22034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (6))){
var state_22001__$1 = state_22001;
var statearr_22009_22035 = state_22001__$1;
(statearr_22009_22035[(2)] = null);

(statearr_22009_22035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (3))){
var inst_21998 = (state_22001[(2)]);
var inst_21999 = cljs.core.async.close_BANG_.call(null,out);
var state_22001__$1 = (function (){var statearr_22010 = state_22001;
(statearr_22010[(9)] = inst_21998);

return statearr_22010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22001__$1,inst_21999);
} else {
if((state_val_22002 === (2))){
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22001__$1,(4),ch);
} else {
if((state_val_22002 === (11))){
var inst_21981 = (state_22001[(8)]);
var inst_21990 = (state_22001[(2)]);
var inst_21978 = inst_21981;
var state_22001__$1 = (function (){var statearr_22011 = state_22001;
(statearr_22011[(10)] = inst_21990);

(statearr_22011[(7)] = inst_21978);

return statearr_22011;
})();
var statearr_22012_22036 = state_22001__$1;
(statearr_22012_22036[(2)] = null);

(statearr_22012_22036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (9))){
var inst_21981 = (state_22001[(8)]);
var state_22001__$1 = state_22001;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22001__$1,(11),out,inst_21981);
} else {
if((state_val_22002 === (5))){
var inst_21978 = (state_22001[(7)]);
var inst_21981 = (state_22001[(8)]);
var inst_21985 = cljs.core._EQ_.call(null,inst_21981,inst_21978);
var state_22001__$1 = state_22001;
if(inst_21985){
var statearr_22014_22037 = state_22001__$1;
(statearr_22014_22037[(1)] = (8));

} else {
var statearr_22015_22038 = state_22001__$1;
(statearr_22015_22038[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (10))){
var inst_21993 = (state_22001[(2)]);
var state_22001__$1 = state_22001;
var statearr_22016_22039 = state_22001__$1;
(statearr_22016_22039[(2)] = inst_21993);

(statearr_22016_22039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22002 === (8))){
var inst_21978 = (state_22001[(7)]);
var tmp22013 = inst_21978;
var inst_21978__$1 = tmp22013;
var state_22001__$1 = (function (){var statearr_22017 = state_22001;
(statearr_22017[(7)] = inst_21978__$1);

return statearr_22017;
})();
var statearr_22018_22040 = state_22001__$1;
(statearr_22018_22040[(2)] = null);

(statearr_22018_22040[(1)] = (2));


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
});})(c__19457__auto___22030,out))
;
return ((function (switch__19345__auto__,c__19457__auto___22030,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_22022 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22022[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_22022[(1)] = (1));

return statearr_22022;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_22001){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_22001);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e22023){if((e22023 instanceof Object)){
var ex__19349__auto__ = e22023;
var statearr_22024_22041 = state_22001;
(statearr_22024_22041[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22001);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22042 = state_22001;
state_22001 = G__22042;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_22001){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_22001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___22030,out))
})();
var state__19459__auto__ = (function (){var statearr_22025 = f__19458__auto__.call(null);
(statearr_22025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___22030);

return statearr_22025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___22030,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22043 = [];
var len__17976__auto___22113 = arguments.length;
var i__17977__auto___22114 = (0);
while(true){
if((i__17977__auto___22114 < len__17976__auto___22113)){
args22043.push((arguments[i__17977__auto___22114]));

var G__22115 = (i__17977__auto___22114 + (1));
i__17977__auto___22114 = G__22115;
continue;
} else {
}
break;
}

var G__22045 = args22043.length;
switch (G__22045) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22043.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19457__auto___22117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___22117,out){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___22117,out){
return (function (state_22083){
var state_val_22084 = (state_22083[(1)]);
if((state_val_22084 === (7))){
var inst_22079 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
var statearr_22085_22118 = state_22083__$1;
(statearr_22085_22118[(2)] = inst_22079);

(statearr_22085_22118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (1))){
var inst_22046 = (new Array(n));
var inst_22047 = inst_22046;
var inst_22048 = (0);
var state_22083__$1 = (function (){var statearr_22086 = state_22083;
(statearr_22086[(7)] = inst_22047);

(statearr_22086[(8)] = inst_22048);

return statearr_22086;
})();
var statearr_22087_22119 = state_22083__$1;
(statearr_22087_22119[(2)] = null);

(statearr_22087_22119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (4))){
var inst_22051 = (state_22083[(9)]);
var inst_22051__$1 = (state_22083[(2)]);
var inst_22052 = (inst_22051__$1 == null);
var inst_22053 = cljs.core.not.call(null,inst_22052);
var state_22083__$1 = (function (){var statearr_22088 = state_22083;
(statearr_22088[(9)] = inst_22051__$1);

return statearr_22088;
})();
if(inst_22053){
var statearr_22089_22120 = state_22083__$1;
(statearr_22089_22120[(1)] = (5));

} else {
var statearr_22090_22121 = state_22083__$1;
(statearr_22090_22121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (15))){
var inst_22073 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
var statearr_22091_22122 = state_22083__$1;
(statearr_22091_22122[(2)] = inst_22073);

(statearr_22091_22122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (13))){
var state_22083__$1 = state_22083;
var statearr_22092_22123 = state_22083__$1;
(statearr_22092_22123[(2)] = null);

(statearr_22092_22123[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (6))){
var inst_22048 = (state_22083[(8)]);
var inst_22069 = (inst_22048 > (0));
var state_22083__$1 = state_22083;
if(cljs.core.truth_(inst_22069)){
var statearr_22093_22124 = state_22083__$1;
(statearr_22093_22124[(1)] = (12));

} else {
var statearr_22094_22125 = state_22083__$1;
(statearr_22094_22125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (3))){
var inst_22081 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22083__$1,inst_22081);
} else {
if((state_val_22084 === (12))){
var inst_22047 = (state_22083[(7)]);
var inst_22071 = cljs.core.vec.call(null,inst_22047);
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22083__$1,(15),out,inst_22071);
} else {
if((state_val_22084 === (2))){
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22083__$1,(4),ch);
} else {
if((state_val_22084 === (11))){
var inst_22063 = (state_22083[(2)]);
var inst_22064 = (new Array(n));
var inst_22047 = inst_22064;
var inst_22048 = (0);
var state_22083__$1 = (function (){var statearr_22095 = state_22083;
(statearr_22095[(10)] = inst_22063);

(statearr_22095[(7)] = inst_22047);

(statearr_22095[(8)] = inst_22048);

return statearr_22095;
})();
var statearr_22096_22126 = state_22083__$1;
(statearr_22096_22126[(2)] = null);

(statearr_22096_22126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (9))){
var inst_22047 = (state_22083[(7)]);
var inst_22061 = cljs.core.vec.call(null,inst_22047);
var state_22083__$1 = state_22083;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22083__$1,(11),out,inst_22061);
} else {
if((state_val_22084 === (5))){
var inst_22056 = (state_22083[(11)]);
var inst_22047 = (state_22083[(7)]);
var inst_22051 = (state_22083[(9)]);
var inst_22048 = (state_22083[(8)]);
var inst_22055 = (inst_22047[inst_22048] = inst_22051);
var inst_22056__$1 = (inst_22048 + (1));
var inst_22057 = (inst_22056__$1 < n);
var state_22083__$1 = (function (){var statearr_22097 = state_22083;
(statearr_22097[(11)] = inst_22056__$1);

(statearr_22097[(12)] = inst_22055);

return statearr_22097;
})();
if(cljs.core.truth_(inst_22057)){
var statearr_22098_22127 = state_22083__$1;
(statearr_22098_22127[(1)] = (8));

} else {
var statearr_22099_22128 = state_22083__$1;
(statearr_22099_22128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (14))){
var inst_22076 = (state_22083[(2)]);
var inst_22077 = cljs.core.async.close_BANG_.call(null,out);
var state_22083__$1 = (function (){var statearr_22101 = state_22083;
(statearr_22101[(13)] = inst_22076);

return statearr_22101;
})();
var statearr_22102_22129 = state_22083__$1;
(statearr_22102_22129[(2)] = inst_22077);

(statearr_22102_22129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (10))){
var inst_22067 = (state_22083[(2)]);
var state_22083__$1 = state_22083;
var statearr_22103_22130 = state_22083__$1;
(statearr_22103_22130[(2)] = inst_22067);

(statearr_22103_22130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22084 === (8))){
var inst_22056 = (state_22083[(11)]);
var inst_22047 = (state_22083[(7)]);
var tmp22100 = inst_22047;
var inst_22047__$1 = tmp22100;
var inst_22048 = inst_22056;
var state_22083__$1 = (function (){var statearr_22104 = state_22083;
(statearr_22104[(7)] = inst_22047__$1);

(statearr_22104[(8)] = inst_22048);

return statearr_22104;
})();
var statearr_22105_22131 = state_22083__$1;
(statearr_22105_22131[(2)] = null);

(statearr_22105_22131[(1)] = (2));


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
});})(c__19457__auto___22117,out))
;
return ((function (switch__19345__auto__,c__19457__auto___22117,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_22109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22109[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_22109[(1)] = (1));

return statearr_22109;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_22083){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_22083);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e22110){if((e22110 instanceof Object)){
var ex__19349__auto__ = e22110;
var statearr_22111_22132 = state_22083;
(statearr_22111_22132[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22083);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22133 = state_22083;
state_22083 = G__22133;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_22083){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_22083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___22117,out))
})();
var state__19459__auto__ = (function (){var statearr_22112 = f__19458__auto__.call(null);
(statearr_22112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___22117);

return statearr_22112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___22117,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22134 = [];
var len__17976__auto___22208 = arguments.length;
var i__17977__auto___22209 = (0);
while(true){
if((i__17977__auto___22209 < len__17976__auto___22208)){
args22134.push((arguments[i__17977__auto___22209]));

var G__22210 = (i__17977__auto___22209 + (1));
i__17977__auto___22209 = G__22210;
continue;
} else {
}
break;
}

var G__22136 = args22134.length;
switch (G__22136) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22134.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19457__auto___22212 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___22212,out){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___22212,out){
return (function (state_22178){
var state_val_22179 = (state_22178[(1)]);
if((state_val_22179 === (7))){
var inst_22174 = (state_22178[(2)]);
var state_22178__$1 = state_22178;
var statearr_22180_22213 = state_22178__$1;
(statearr_22180_22213[(2)] = inst_22174);

(statearr_22180_22213[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (1))){
var inst_22137 = [];
var inst_22138 = inst_22137;
var inst_22139 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22178__$1 = (function (){var statearr_22181 = state_22178;
(statearr_22181[(7)] = inst_22138);

(statearr_22181[(8)] = inst_22139);

return statearr_22181;
})();
var statearr_22182_22214 = state_22178__$1;
(statearr_22182_22214[(2)] = null);

(statearr_22182_22214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (4))){
var inst_22142 = (state_22178[(9)]);
var inst_22142__$1 = (state_22178[(2)]);
var inst_22143 = (inst_22142__$1 == null);
var inst_22144 = cljs.core.not.call(null,inst_22143);
var state_22178__$1 = (function (){var statearr_22183 = state_22178;
(statearr_22183[(9)] = inst_22142__$1);

return statearr_22183;
})();
if(inst_22144){
var statearr_22184_22215 = state_22178__$1;
(statearr_22184_22215[(1)] = (5));

} else {
var statearr_22185_22216 = state_22178__$1;
(statearr_22185_22216[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (15))){
var inst_22168 = (state_22178[(2)]);
var state_22178__$1 = state_22178;
var statearr_22186_22217 = state_22178__$1;
(statearr_22186_22217[(2)] = inst_22168);

(statearr_22186_22217[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (13))){
var state_22178__$1 = state_22178;
var statearr_22187_22218 = state_22178__$1;
(statearr_22187_22218[(2)] = null);

(statearr_22187_22218[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (6))){
var inst_22138 = (state_22178[(7)]);
var inst_22163 = inst_22138.length;
var inst_22164 = (inst_22163 > (0));
var state_22178__$1 = state_22178;
if(cljs.core.truth_(inst_22164)){
var statearr_22188_22219 = state_22178__$1;
(statearr_22188_22219[(1)] = (12));

} else {
var statearr_22189_22220 = state_22178__$1;
(statearr_22189_22220[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (3))){
var inst_22176 = (state_22178[(2)]);
var state_22178__$1 = state_22178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22178__$1,inst_22176);
} else {
if((state_val_22179 === (12))){
var inst_22138 = (state_22178[(7)]);
var inst_22166 = cljs.core.vec.call(null,inst_22138);
var state_22178__$1 = state_22178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22178__$1,(15),out,inst_22166);
} else {
if((state_val_22179 === (2))){
var state_22178__$1 = state_22178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22178__$1,(4),ch);
} else {
if((state_val_22179 === (11))){
var inst_22142 = (state_22178[(9)]);
var inst_22146 = (state_22178[(10)]);
var inst_22156 = (state_22178[(2)]);
var inst_22157 = [];
var inst_22158 = inst_22157.push(inst_22142);
var inst_22138 = inst_22157;
var inst_22139 = inst_22146;
var state_22178__$1 = (function (){var statearr_22190 = state_22178;
(statearr_22190[(11)] = inst_22156);

(statearr_22190[(12)] = inst_22158);

(statearr_22190[(7)] = inst_22138);

(statearr_22190[(8)] = inst_22139);

return statearr_22190;
})();
var statearr_22191_22221 = state_22178__$1;
(statearr_22191_22221[(2)] = null);

(statearr_22191_22221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (9))){
var inst_22138 = (state_22178[(7)]);
var inst_22154 = cljs.core.vec.call(null,inst_22138);
var state_22178__$1 = state_22178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22178__$1,(11),out,inst_22154);
} else {
if((state_val_22179 === (5))){
var inst_22142 = (state_22178[(9)]);
var inst_22139 = (state_22178[(8)]);
var inst_22146 = (state_22178[(10)]);
var inst_22146__$1 = f.call(null,inst_22142);
var inst_22147 = cljs.core._EQ_.call(null,inst_22146__$1,inst_22139);
var inst_22148 = cljs.core.keyword_identical_QMARK_.call(null,inst_22139,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22149 = (inst_22147) || (inst_22148);
var state_22178__$1 = (function (){var statearr_22192 = state_22178;
(statearr_22192[(10)] = inst_22146__$1);

return statearr_22192;
})();
if(cljs.core.truth_(inst_22149)){
var statearr_22193_22222 = state_22178__$1;
(statearr_22193_22222[(1)] = (8));

} else {
var statearr_22194_22223 = state_22178__$1;
(statearr_22194_22223[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (14))){
var inst_22171 = (state_22178[(2)]);
var inst_22172 = cljs.core.async.close_BANG_.call(null,out);
var state_22178__$1 = (function (){var statearr_22196 = state_22178;
(statearr_22196[(13)] = inst_22171);

return statearr_22196;
})();
var statearr_22197_22224 = state_22178__$1;
(statearr_22197_22224[(2)] = inst_22172);

(statearr_22197_22224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (10))){
var inst_22161 = (state_22178[(2)]);
var state_22178__$1 = state_22178;
var statearr_22198_22225 = state_22178__$1;
(statearr_22198_22225[(2)] = inst_22161);

(statearr_22198_22225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22179 === (8))){
var inst_22138 = (state_22178[(7)]);
var inst_22142 = (state_22178[(9)]);
var inst_22146 = (state_22178[(10)]);
var inst_22151 = inst_22138.push(inst_22142);
var tmp22195 = inst_22138;
var inst_22138__$1 = tmp22195;
var inst_22139 = inst_22146;
var state_22178__$1 = (function (){var statearr_22199 = state_22178;
(statearr_22199[(14)] = inst_22151);

(statearr_22199[(7)] = inst_22138__$1);

(statearr_22199[(8)] = inst_22139);

return statearr_22199;
})();
var statearr_22200_22226 = state_22178__$1;
(statearr_22200_22226[(2)] = null);

(statearr_22200_22226[(1)] = (2));


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
});})(c__19457__auto___22212,out))
;
return ((function (switch__19345__auto__,c__19457__auto___22212,out){
return (function() {
var cljs$core$async$state_machine__19346__auto__ = null;
var cljs$core$async$state_machine__19346__auto____0 = (function (){
var statearr_22204 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22204[(0)] = cljs$core$async$state_machine__19346__auto__);

(statearr_22204[(1)] = (1));

return statearr_22204;
});
var cljs$core$async$state_machine__19346__auto____1 = (function (state_22178){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_22178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e22205){if((e22205 instanceof Object)){
var ex__19349__auto__ = e22205;
var statearr_22206_22227 = state_22178;
(statearr_22206_22227[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22228 = state_22178;
state_22178 = G__22228;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs$core$async$state_machine__19346__auto__ = function(state_22178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19346__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19346__auto____1.call(this,state_22178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19346__auto____0;
cljs$core$async$state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19346__auto____1;
return cljs$core$async$state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___22212,out))
})();
var state__19459__auto__ = (function (){var statearr_22207 = f__19458__auto__.call(null);
(statearr_22207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___22212);

return statearr_22207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___22212,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449412232099