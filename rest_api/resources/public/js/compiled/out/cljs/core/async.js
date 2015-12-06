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
var args12333 = [];
var len__5818__auto___12339 = arguments.length;
var i__5819__auto___12340 = (0);
while(true){
if((i__5819__auto___12340 < len__5818__auto___12339)){
args12333.push((arguments[i__5819__auto___12340]));

var G__12341 = (i__5819__auto___12340 + (1));
i__5819__auto___12340 = G__12341;
continue;
} else {
}
break;
}

var G__12335 = args12333.length;
switch (G__12335) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12333.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async12336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12336 = (function (f,blockable,meta12337){
this.f = f;
this.blockable = blockable;
this.meta12337 = meta12337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12338,meta12337__$1){
var self__ = this;
var _12338__$1 = this;
return (new cljs.core.async.t_cljs$core$async12336(self__.f,self__.blockable,meta12337__$1));
});

cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12338){
var self__ = this;
var _12338__$1 = this;
return self__.meta12337;
});

cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12336.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12337","meta12337",-1150409756,null)], null);
});

cljs.core.async.t_cljs$core$async12336.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12336.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12336";

cljs.core.async.t_cljs$core$async12336.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async12336");
});

cljs.core.async.__GT_t_cljs$core$async12336 = (function cljs$core$async$__GT_t_cljs$core$async12336(f__$1,blockable__$1,meta12337){
return (new cljs.core.async.t_cljs$core$async12336(f__$1,blockable__$1,meta12337));
});

}

return (new cljs.core.async.t_cljs$core$async12336(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args12345 = [];
var len__5818__auto___12348 = arguments.length;
var i__5819__auto___12349 = (0);
while(true){
if((i__5819__auto___12349 < len__5818__auto___12348)){
args12345.push((arguments[i__5819__auto___12349]));

var G__12350 = (i__5819__auto___12349 + (1));
i__5819__auto___12349 = G__12350;
continue;
} else {
}
break;
}

var G__12347 = args12345.length;
switch (G__12347) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12345.length)].join('')));

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
var args12352 = [];
var len__5818__auto___12355 = arguments.length;
var i__5819__auto___12356 = (0);
while(true){
if((i__5819__auto___12356 < len__5818__auto___12355)){
args12352.push((arguments[i__5819__auto___12356]));

var G__12357 = (i__5819__auto___12356 + (1));
i__5819__auto___12356 = G__12357;
continue;
} else {
}
break;
}

var G__12354 = args12352.length;
switch (G__12354) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12352.length)].join('')));

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
var args12359 = [];
var len__5818__auto___12362 = arguments.length;
var i__5819__auto___12363 = (0);
while(true){
if((i__5819__auto___12363 < len__5818__auto___12362)){
args12359.push((arguments[i__5819__auto___12363]));

var G__12364 = (i__5819__auto___12363 + (1));
i__5819__auto___12363 = G__12364;
continue;
} else {
}
break;
}

var G__12361 = args12359.length;
switch (G__12361) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12359.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12366 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12366);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12366,ret){
return (function (){
return fn1.call(null,val_12366);
});})(val_12366,ret))
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
var args12367 = [];
var len__5818__auto___12370 = arguments.length;
var i__5819__auto___12371 = (0);
while(true){
if((i__5819__auto___12371 < len__5818__auto___12370)){
args12367.push((arguments[i__5819__auto___12371]));

var G__12372 = (i__5819__auto___12371 + (1));
i__5819__auto___12371 = G__12372;
continue;
} else {
}
break;
}

var G__12369 = args12367.length;
switch (G__12369) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12367.length)].join('')));

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
var n__5663__auto___12374 = n;
var x_12375 = (0);
while(true){
if((x_12375 < n__5663__auto___12374)){
(a[x_12375] = (0));

var G__12376 = (x_12375 + (1));
x_12375 = G__12376;
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

var G__12377 = (i + (1));
i = G__12377;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async12381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12381 = (function (alt_flag,flag,meta12382){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta12382 = meta12382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12383,meta12382__$1){
var self__ = this;
var _12383__$1 = this;
return (new cljs.core.async.t_cljs$core$async12381(self__.alt_flag,self__.flag,meta12382__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12383){
var self__ = this;
var _12383__$1 = this;
return self__.meta12382;
});})(flag))
;

cljs.core.async.t_cljs$core$async12381.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12381.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12381.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12381.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12381.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12382","meta12382",-1904117616,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12381";

cljs.core.async.t_cljs$core$async12381.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async12381");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async12381 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12381(alt_flag__$1,flag__$1,meta12382){
return (new cljs.core.async.t_cljs$core$async12381(alt_flag__$1,flag__$1,meta12382));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12381(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async12387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12387 = (function (alt_handler,flag,cb,meta12388){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta12388 = meta12388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async12387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12389,meta12388__$1){
var self__ = this;
var _12389__$1 = this;
return (new cljs.core.async.t_cljs$core$async12387(self__.alt_handler,self__.flag,self__.cb,meta12388__$1));
});

cljs.core.async.t_cljs$core$async12387.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12389){
var self__ = this;
var _12389__$1 = this;
return self__.meta12388;
});

cljs.core.async.t_cljs$core$async12387.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async12387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12387.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12388","meta12388",-1321524346,null)], null);
});

cljs.core.async.t_cljs$core$async12387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12387";

cljs.core.async.t_cljs$core$async12387.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async12387");
});

cljs.core.async.__GT_t_cljs$core$async12387 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12387(alt_handler__$1,flag__$1,cb__$1,meta12388){
return (new cljs.core.async.t_cljs$core$async12387(alt_handler__$1,flag__$1,cb__$1,meta12388));
});

}

return (new cljs.core.async.t_cljs$core$async12387(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12390_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12390_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12391_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12391_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4760__auto__ = wport;
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12392 = (i + (1));
i = G__12392;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4760__auto__ = ret;
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4748__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4748__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4748__auto__;
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
var args__5825__auto__ = [];
var len__5818__auto___12398 = arguments.length;
var i__5819__auto___12399 = (0);
while(true){
if((i__5819__auto___12399 < len__5818__auto___12398)){
args__5825__auto__.push((arguments[i__5819__auto___12399]));

var G__12400 = (i__5819__auto___12399 + (1));
i__5819__auto___12399 = G__12400;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12395){
var map__12396 = p__12395;
var map__12396__$1 = ((((!((map__12396 == null)))?((((map__12396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12396):map__12396);
var opts = map__12396__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12393){
var G__12394 = cljs.core.first.call(null,seq12393);
var seq12393__$1 = cljs.core.next.call(null,seq12393);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12394,seq12393__$1);
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
var args12401 = [];
var len__5818__auto___12451 = arguments.length;
var i__5819__auto___12452 = (0);
while(true){
if((i__5819__auto___12452 < len__5818__auto___12451)){
args12401.push((arguments[i__5819__auto___12452]));

var G__12453 = (i__5819__auto___12452 + (1));
i__5819__auto___12452 = G__12453;
continue;
} else {
}
break;
}

var G__12403 = args12401.length;
switch (G__12403) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12401.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__12288__auto___12455 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___12455){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___12455){
return (function (state_12427){
var state_val_12428 = (state_12427[(1)]);
if((state_val_12428 === (7))){
var inst_12423 = (state_12427[(2)]);
var state_12427__$1 = state_12427;
var statearr_12429_12456 = state_12427__$1;
(statearr_12429_12456[(2)] = inst_12423);

(statearr_12429_12456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (1))){
var state_12427__$1 = state_12427;
var statearr_12430_12457 = state_12427__$1;
(statearr_12430_12457[(2)] = null);

(statearr_12430_12457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (4))){
var inst_12406 = (state_12427[(7)]);
var inst_12406__$1 = (state_12427[(2)]);
var inst_12407 = (inst_12406__$1 == null);
var state_12427__$1 = (function (){var statearr_12431 = state_12427;
(statearr_12431[(7)] = inst_12406__$1);

return statearr_12431;
})();
if(cljs.core.truth_(inst_12407)){
var statearr_12432_12458 = state_12427__$1;
(statearr_12432_12458[(1)] = (5));

} else {
var statearr_12433_12459 = state_12427__$1;
(statearr_12433_12459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (13))){
var state_12427__$1 = state_12427;
var statearr_12434_12460 = state_12427__$1;
(statearr_12434_12460[(2)] = null);

(statearr_12434_12460[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (6))){
var inst_12406 = (state_12427[(7)]);
var state_12427__$1 = state_12427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12427__$1,(11),to,inst_12406);
} else {
if((state_val_12428 === (3))){
var inst_12425 = (state_12427[(2)]);
var state_12427__$1 = state_12427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12427__$1,inst_12425);
} else {
if((state_val_12428 === (12))){
var state_12427__$1 = state_12427;
var statearr_12435_12461 = state_12427__$1;
(statearr_12435_12461[(2)] = null);

(statearr_12435_12461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (2))){
var state_12427__$1 = state_12427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12427__$1,(4),from);
} else {
if((state_val_12428 === (11))){
var inst_12416 = (state_12427[(2)]);
var state_12427__$1 = state_12427;
if(cljs.core.truth_(inst_12416)){
var statearr_12436_12462 = state_12427__$1;
(statearr_12436_12462[(1)] = (12));

} else {
var statearr_12437_12463 = state_12427__$1;
(statearr_12437_12463[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (9))){
var state_12427__$1 = state_12427;
var statearr_12438_12464 = state_12427__$1;
(statearr_12438_12464[(2)] = null);

(statearr_12438_12464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (5))){
var state_12427__$1 = state_12427;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12439_12465 = state_12427__$1;
(statearr_12439_12465[(1)] = (8));

} else {
var statearr_12440_12466 = state_12427__$1;
(statearr_12440_12466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (14))){
var inst_12421 = (state_12427[(2)]);
var state_12427__$1 = state_12427;
var statearr_12441_12467 = state_12427__$1;
(statearr_12441_12467[(2)] = inst_12421);

(statearr_12441_12467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (10))){
var inst_12413 = (state_12427[(2)]);
var state_12427__$1 = state_12427;
var statearr_12442_12468 = state_12427__$1;
(statearr_12442_12468[(2)] = inst_12413);

(statearr_12442_12468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12428 === (8))){
var inst_12410 = cljs.core.async.close_BANG_.call(null,to);
var state_12427__$1 = state_12427;
var statearr_12443_12469 = state_12427__$1;
(statearr_12443_12469[(2)] = inst_12410);

(statearr_12443_12469[(1)] = (10));


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
});})(c__12288__auto___12455))
;
return ((function (switch__12223__auto__,c__12288__auto___12455){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_12447 = [null,null,null,null,null,null,null,null];
(statearr_12447[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_12447[(1)] = (1));

return statearr_12447;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_12427){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_12427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e12448){if((e12448 instanceof Object)){
var ex__12227__auto__ = e12448;
var statearr_12449_12470 = state_12427;
(statearr_12449_12470[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12471 = state_12427;
state_12427 = G__12471;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_12427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_12427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___12455))
})();
var state__12290__auto__ = (function (){var statearr_12450 = f__12289__auto__.call(null);
(statearr_12450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___12455);

return statearr_12450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___12455))
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
return (function (p__12655){
var vec__12656 = p__12655;
var v = cljs.core.nth.call(null,vec__12656,(0),null);
var p = cljs.core.nth.call(null,vec__12656,(1),null);
var job = vec__12656;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12288__auto___12838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___12838,res,vec__12656,v,p,job,jobs,results){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___12838,res,vec__12656,v,p,job,jobs,results){
return (function (state_12661){
var state_val_12662 = (state_12661[(1)]);
if((state_val_12662 === (1))){
var state_12661__$1 = state_12661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12661__$1,(2),res,v);
} else {
if((state_val_12662 === (2))){
var inst_12658 = (state_12661[(2)]);
var inst_12659 = cljs.core.async.close_BANG_.call(null,res);
var state_12661__$1 = (function (){var statearr_12663 = state_12661;
(statearr_12663[(7)] = inst_12658);

return statearr_12663;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12661__$1,inst_12659);
} else {
return null;
}
}
});})(c__12288__auto___12838,res,vec__12656,v,p,job,jobs,results))
;
return ((function (switch__12223__auto__,c__12288__auto___12838,res,vec__12656,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0 = (function (){
var statearr_12667 = [null,null,null,null,null,null,null,null];
(statearr_12667[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__);

(statearr_12667[(1)] = (1));

return statearr_12667;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1 = (function (state_12661){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_12661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e12668){if((e12668 instanceof Object)){
var ex__12227__auto__ = e12668;
var statearr_12669_12839 = state_12661;
(statearr_12669_12839[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12840 = state_12661;
state_12661 = G__12840;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = function(state_12661){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1.call(this,state_12661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___12838,res,vec__12656,v,p,job,jobs,results))
})();
var state__12290__auto__ = (function (){var statearr_12670 = f__12289__auto__.call(null);
(statearr_12670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___12838);

return statearr_12670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___12838,res,vec__12656,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12671){
var vec__12672 = p__12671;
var v = cljs.core.nth.call(null,vec__12672,(0),null);
var p = cljs.core.nth.call(null,vec__12672,(1),null);
var job = vec__12672;
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
var n__5663__auto___12841 = n;
var __12842 = (0);
while(true){
if((__12842 < n__5663__auto___12841)){
var G__12673_12843 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__12673_12843) {
case "compute":
var c__12288__auto___12845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12842,c__12288__auto___12845,G__12673_12843,n__5663__auto___12841,jobs,results,process,async){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (__12842,c__12288__auto___12845,G__12673_12843,n__5663__auto___12841,jobs,results,process,async){
return (function (state_12686){
var state_val_12687 = (state_12686[(1)]);
if((state_val_12687 === (1))){
var state_12686__$1 = state_12686;
var statearr_12688_12846 = state_12686__$1;
(statearr_12688_12846[(2)] = null);

(statearr_12688_12846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12687 === (2))){
var state_12686__$1 = state_12686;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12686__$1,(4),jobs);
} else {
if((state_val_12687 === (3))){
var inst_12684 = (state_12686[(2)]);
var state_12686__$1 = state_12686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12686__$1,inst_12684);
} else {
if((state_val_12687 === (4))){
var inst_12676 = (state_12686[(2)]);
var inst_12677 = process.call(null,inst_12676);
var state_12686__$1 = state_12686;
if(cljs.core.truth_(inst_12677)){
var statearr_12689_12847 = state_12686__$1;
(statearr_12689_12847[(1)] = (5));

} else {
var statearr_12690_12848 = state_12686__$1;
(statearr_12690_12848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12687 === (5))){
var state_12686__$1 = state_12686;
var statearr_12691_12849 = state_12686__$1;
(statearr_12691_12849[(2)] = null);

(statearr_12691_12849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12687 === (6))){
var state_12686__$1 = state_12686;
var statearr_12692_12850 = state_12686__$1;
(statearr_12692_12850[(2)] = null);

(statearr_12692_12850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12687 === (7))){
var inst_12682 = (state_12686[(2)]);
var state_12686__$1 = state_12686;
var statearr_12693_12851 = state_12686__$1;
(statearr_12693_12851[(2)] = inst_12682);

(statearr_12693_12851[(1)] = (3));


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
});})(__12842,c__12288__auto___12845,G__12673_12843,n__5663__auto___12841,jobs,results,process,async))
;
return ((function (__12842,switch__12223__auto__,c__12288__auto___12845,G__12673_12843,n__5663__auto___12841,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0 = (function (){
var statearr_12697 = [null,null,null,null,null,null,null];
(statearr_12697[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__);

(statearr_12697[(1)] = (1));

return statearr_12697;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1 = (function (state_12686){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_12686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e12698){if((e12698 instanceof Object)){
var ex__12227__auto__ = e12698;
var statearr_12699_12852 = state_12686;
(statearr_12699_12852[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12853 = state_12686;
state_12686 = G__12853;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = function(state_12686){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1.call(this,state_12686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__;
})()
;})(__12842,switch__12223__auto__,c__12288__auto___12845,G__12673_12843,n__5663__auto___12841,jobs,results,process,async))
})();
var state__12290__auto__ = (function (){var statearr_12700 = f__12289__auto__.call(null);
(statearr_12700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___12845);

return statearr_12700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(__12842,c__12288__auto___12845,G__12673_12843,n__5663__auto___12841,jobs,results,process,async))
);


break;
case "async":
var c__12288__auto___12854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12842,c__12288__auto___12854,G__12673_12843,n__5663__auto___12841,jobs,results,process,async){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (__12842,c__12288__auto___12854,G__12673_12843,n__5663__auto___12841,jobs,results,process,async){
return (function (state_12713){
var state_val_12714 = (state_12713[(1)]);
if((state_val_12714 === (1))){
var state_12713__$1 = state_12713;
var statearr_12715_12855 = state_12713__$1;
(statearr_12715_12855[(2)] = null);

(statearr_12715_12855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (2))){
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12713__$1,(4),jobs);
} else {
if((state_val_12714 === (3))){
var inst_12711 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12713__$1,inst_12711);
} else {
if((state_val_12714 === (4))){
var inst_12703 = (state_12713[(2)]);
var inst_12704 = async.call(null,inst_12703);
var state_12713__$1 = state_12713;
if(cljs.core.truth_(inst_12704)){
var statearr_12716_12856 = state_12713__$1;
(statearr_12716_12856[(1)] = (5));

} else {
var statearr_12717_12857 = state_12713__$1;
(statearr_12717_12857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (5))){
var state_12713__$1 = state_12713;
var statearr_12718_12858 = state_12713__$1;
(statearr_12718_12858[(2)] = null);

(statearr_12718_12858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (6))){
var state_12713__$1 = state_12713;
var statearr_12719_12859 = state_12713__$1;
(statearr_12719_12859[(2)] = null);

(statearr_12719_12859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12714 === (7))){
var inst_12709 = (state_12713[(2)]);
var state_12713__$1 = state_12713;
var statearr_12720_12860 = state_12713__$1;
(statearr_12720_12860[(2)] = inst_12709);

(statearr_12720_12860[(1)] = (3));


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
});})(__12842,c__12288__auto___12854,G__12673_12843,n__5663__auto___12841,jobs,results,process,async))
;
return ((function (__12842,switch__12223__auto__,c__12288__auto___12854,G__12673_12843,n__5663__auto___12841,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0 = (function (){
var statearr_12724 = [null,null,null,null,null,null,null];
(statearr_12724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__);

(statearr_12724[(1)] = (1));

return statearr_12724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1 = (function (state_12713){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_12713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e12725){if((e12725 instanceof Object)){
var ex__12227__auto__ = e12725;
var statearr_12726_12861 = state_12713;
(statearr_12726_12861[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12862 = state_12713;
state_12713 = G__12862;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = function(state_12713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1.call(this,state_12713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__;
})()
;})(__12842,switch__12223__auto__,c__12288__auto___12854,G__12673_12843,n__5663__auto___12841,jobs,results,process,async))
})();
var state__12290__auto__ = (function (){var statearr_12727 = f__12289__auto__.call(null);
(statearr_12727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___12854);

return statearr_12727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(__12842,c__12288__auto___12854,G__12673_12843,n__5663__auto___12841,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__12863 = (__12842 + (1));
__12842 = G__12863;
continue;
} else {
}
break;
}

var c__12288__auto___12864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___12864,jobs,results,process,async){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___12864,jobs,results,process,async){
return (function (state_12749){
var state_val_12750 = (state_12749[(1)]);
if((state_val_12750 === (1))){
var state_12749__$1 = state_12749;
var statearr_12751_12865 = state_12749__$1;
(statearr_12751_12865[(2)] = null);

(statearr_12751_12865[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (2))){
var state_12749__$1 = state_12749;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12749__$1,(4),from);
} else {
if((state_val_12750 === (3))){
var inst_12747 = (state_12749[(2)]);
var state_12749__$1 = state_12749;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12749__$1,inst_12747);
} else {
if((state_val_12750 === (4))){
var inst_12730 = (state_12749[(7)]);
var inst_12730__$1 = (state_12749[(2)]);
var inst_12731 = (inst_12730__$1 == null);
var state_12749__$1 = (function (){var statearr_12752 = state_12749;
(statearr_12752[(7)] = inst_12730__$1);

return statearr_12752;
})();
if(cljs.core.truth_(inst_12731)){
var statearr_12753_12866 = state_12749__$1;
(statearr_12753_12866[(1)] = (5));

} else {
var statearr_12754_12867 = state_12749__$1;
(statearr_12754_12867[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (5))){
var inst_12733 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12749__$1 = state_12749;
var statearr_12755_12868 = state_12749__$1;
(statearr_12755_12868[(2)] = inst_12733);

(statearr_12755_12868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (6))){
var inst_12735 = (state_12749[(8)]);
var inst_12730 = (state_12749[(7)]);
var inst_12735__$1 = cljs.core.async.chan.call(null,(1));
var inst_12736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12737 = [inst_12730,inst_12735__$1];
var inst_12738 = (new cljs.core.PersistentVector(null,2,(5),inst_12736,inst_12737,null));
var state_12749__$1 = (function (){var statearr_12756 = state_12749;
(statearr_12756[(8)] = inst_12735__$1);

return statearr_12756;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12749__$1,(8),jobs,inst_12738);
} else {
if((state_val_12750 === (7))){
var inst_12745 = (state_12749[(2)]);
var state_12749__$1 = state_12749;
var statearr_12757_12869 = state_12749__$1;
(statearr_12757_12869[(2)] = inst_12745);

(statearr_12757_12869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12750 === (8))){
var inst_12735 = (state_12749[(8)]);
var inst_12740 = (state_12749[(2)]);
var state_12749__$1 = (function (){var statearr_12758 = state_12749;
(statearr_12758[(9)] = inst_12740);

return statearr_12758;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12749__$1,(9),results,inst_12735);
} else {
if((state_val_12750 === (9))){
var inst_12742 = (state_12749[(2)]);
var state_12749__$1 = (function (){var statearr_12759 = state_12749;
(statearr_12759[(10)] = inst_12742);

return statearr_12759;
})();
var statearr_12760_12870 = state_12749__$1;
(statearr_12760_12870[(2)] = null);

(statearr_12760_12870[(1)] = (2));


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
});})(c__12288__auto___12864,jobs,results,process,async))
;
return ((function (switch__12223__auto__,c__12288__auto___12864,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0 = (function (){
var statearr_12764 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12764[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__);

(statearr_12764[(1)] = (1));

return statearr_12764;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1 = (function (state_12749){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_12749);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e12765){if((e12765 instanceof Object)){
var ex__12227__auto__ = e12765;
var statearr_12766_12871 = state_12749;
(statearr_12766_12871[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12749);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12872 = state_12749;
state_12749 = G__12872;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = function(state_12749){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1.call(this,state_12749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___12864,jobs,results,process,async))
})();
var state__12290__auto__ = (function (){var statearr_12767 = f__12289__auto__.call(null);
(statearr_12767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___12864);

return statearr_12767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___12864,jobs,results,process,async))
);


var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__,jobs,results,process,async){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto__,jobs,results,process,async){
return (function (state_12805){
var state_val_12806 = (state_12805[(1)]);
if((state_val_12806 === (7))){
var inst_12801 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12807_12873 = state_12805__$1;
(statearr_12807_12873[(2)] = inst_12801);

(statearr_12807_12873[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (20))){
var state_12805__$1 = state_12805;
var statearr_12808_12874 = state_12805__$1;
(statearr_12808_12874[(2)] = null);

(statearr_12808_12874[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (1))){
var state_12805__$1 = state_12805;
var statearr_12809_12875 = state_12805__$1;
(statearr_12809_12875[(2)] = null);

(statearr_12809_12875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (4))){
var inst_12770 = (state_12805[(7)]);
var inst_12770__$1 = (state_12805[(2)]);
var inst_12771 = (inst_12770__$1 == null);
var state_12805__$1 = (function (){var statearr_12810 = state_12805;
(statearr_12810[(7)] = inst_12770__$1);

return statearr_12810;
})();
if(cljs.core.truth_(inst_12771)){
var statearr_12811_12876 = state_12805__$1;
(statearr_12811_12876[(1)] = (5));

} else {
var statearr_12812_12877 = state_12805__$1;
(statearr_12812_12877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (15))){
var inst_12783 = (state_12805[(8)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12805__$1,(18),to,inst_12783);
} else {
if((state_val_12806 === (21))){
var inst_12796 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12813_12878 = state_12805__$1;
(statearr_12813_12878[(2)] = inst_12796);

(statearr_12813_12878[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (13))){
var inst_12798 = (state_12805[(2)]);
var state_12805__$1 = (function (){var statearr_12814 = state_12805;
(statearr_12814[(9)] = inst_12798);

return statearr_12814;
})();
var statearr_12815_12879 = state_12805__$1;
(statearr_12815_12879[(2)] = null);

(statearr_12815_12879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (6))){
var inst_12770 = (state_12805[(7)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,(11),inst_12770);
} else {
if((state_val_12806 === (17))){
var inst_12791 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
if(cljs.core.truth_(inst_12791)){
var statearr_12816_12880 = state_12805__$1;
(statearr_12816_12880[(1)] = (19));

} else {
var statearr_12817_12881 = state_12805__$1;
(statearr_12817_12881[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (3))){
var inst_12803 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12805__$1,inst_12803);
} else {
if((state_val_12806 === (12))){
var inst_12780 = (state_12805[(10)]);
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,(14),inst_12780);
} else {
if((state_val_12806 === (2))){
var state_12805__$1 = state_12805;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12805__$1,(4),results);
} else {
if((state_val_12806 === (19))){
var state_12805__$1 = state_12805;
var statearr_12818_12882 = state_12805__$1;
(statearr_12818_12882[(2)] = null);

(statearr_12818_12882[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (11))){
var inst_12780 = (state_12805[(2)]);
var state_12805__$1 = (function (){var statearr_12819 = state_12805;
(statearr_12819[(10)] = inst_12780);

return statearr_12819;
})();
var statearr_12820_12883 = state_12805__$1;
(statearr_12820_12883[(2)] = null);

(statearr_12820_12883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (9))){
var state_12805__$1 = state_12805;
var statearr_12821_12884 = state_12805__$1;
(statearr_12821_12884[(2)] = null);

(statearr_12821_12884[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (5))){
var state_12805__$1 = state_12805;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12822_12885 = state_12805__$1;
(statearr_12822_12885[(1)] = (8));

} else {
var statearr_12823_12886 = state_12805__$1;
(statearr_12823_12886[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (14))){
var inst_12783 = (state_12805[(8)]);
var inst_12785 = (state_12805[(11)]);
var inst_12783__$1 = (state_12805[(2)]);
var inst_12784 = (inst_12783__$1 == null);
var inst_12785__$1 = cljs.core.not.call(null,inst_12784);
var state_12805__$1 = (function (){var statearr_12824 = state_12805;
(statearr_12824[(8)] = inst_12783__$1);

(statearr_12824[(11)] = inst_12785__$1);

return statearr_12824;
})();
if(inst_12785__$1){
var statearr_12825_12887 = state_12805__$1;
(statearr_12825_12887[(1)] = (15));

} else {
var statearr_12826_12888 = state_12805__$1;
(statearr_12826_12888[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (16))){
var inst_12785 = (state_12805[(11)]);
var state_12805__$1 = state_12805;
var statearr_12827_12889 = state_12805__$1;
(statearr_12827_12889[(2)] = inst_12785);

(statearr_12827_12889[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (10))){
var inst_12777 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12828_12890 = state_12805__$1;
(statearr_12828_12890[(2)] = inst_12777);

(statearr_12828_12890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (18))){
var inst_12788 = (state_12805[(2)]);
var state_12805__$1 = state_12805;
var statearr_12829_12891 = state_12805__$1;
(statearr_12829_12891[(2)] = inst_12788);

(statearr_12829_12891[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12806 === (8))){
var inst_12774 = cljs.core.async.close_BANG_.call(null,to);
var state_12805__$1 = state_12805;
var statearr_12830_12892 = state_12805__$1;
(statearr_12830_12892[(2)] = inst_12774);

(statearr_12830_12892[(1)] = (10));


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
});})(c__12288__auto__,jobs,results,process,async))
;
return ((function (switch__12223__auto__,c__12288__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0 = (function (){
var statearr_12834 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12834[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__);

(statearr_12834[(1)] = (1));

return statearr_12834;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1 = (function (state_12805){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_12805);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e12835){if((e12835 instanceof Object)){
var ex__12227__auto__ = e12835;
var statearr_12836_12893 = state_12805;
(statearr_12836_12893[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12805);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12894 = state_12805;
state_12805 = G__12894;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__ = function(state_12805){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1.call(this,state_12805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12224__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto__,jobs,results,process,async))
})();
var state__12290__auto__ = (function (){var statearr_12837 = f__12289__auto__.call(null);
(statearr_12837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_12837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__,jobs,results,process,async))
);

return c__12288__auto__;
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
var args12895 = [];
var len__5818__auto___12898 = arguments.length;
var i__5819__auto___12899 = (0);
while(true){
if((i__5819__auto___12899 < len__5818__auto___12898)){
args12895.push((arguments[i__5819__auto___12899]));

var G__12900 = (i__5819__auto___12899 + (1));
i__5819__auto___12899 = G__12900;
continue;
} else {
}
break;
}

var G__12897 = args12895.length;
switch (G__12897) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12895.length)].join('')));

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
var args12902 = [];
var len__5818__auto___12905 = arguments.length;
var i__5819__auto___12906 = (0);
while(true){
if((i__5819__auto___12906 < len__5818__auto___12905)){
args12902.push((arguments[i__5819__auto___12906]));

var G__12907 = (i__5819__auto___12906 + (1));
i__5819__auto___12906 = G__12907;
continue;
} else {
}
break;
}

var G__12904 = args12902.length;
switch (G__12904) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12902.length)].join('')));

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
var args12909 = [];
var len__5818__auto___12962 = arguments.length;
var i__5819__auto___12963 = (0);
while(true){
if((i__5819__auto___12963 < len__5818__auto___12962)){
args12909.push((arguments[i__5819__auto___12963]));

var G__12964 = (i__5819__auto___12963 + (1));
i__5819__auto___12963 = G__12964;
continue;
} else {
}
break;
}

var G__12911 = args12909.length;
switch (G__12911) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12909.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12288__auto___12966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___12966,tc,fc){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___12966,tc,fc){
return (function (state_12937){
var state_val_12938 = (state_12937[(1)]);
if((state_val_12938 === (7))){
var inst_12933 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
var statearr_12939_12967 = state_12937__$1;
(statearr_12939_12967[(2)] = inst_12933);

(statearr_12939_12967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (1))){
var state_12937__$1 = state_12937;
var statearr_12940_12968 = state_12937__$1;
(statearr_12940_12968[(2)] = null);

(statearr_12940_12968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (4))){
var inst_12914 = (state_12937[(7)]);
var inst_12914__$1 = (state_12937[(2)]);
var inst_12915 = (inst_12914__$1 == null);
var state_12937__$1 = (function (){var statearr_12941 = state_12937;
(statearr_12941[(7)] = inst_12914__$1);

return statearr_12941;
})();
if(cljs.core.truth_(inst_12915)){
var statearr_12942_12969 = state_12937__$1;
(statearr_12942_12969[(1)] = (5));

} else {
var statearr_12943_12970 = state_12937__$1;
(statearr_12943_12970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (13))){
var state_12937__$1 = state_12937;
var statearr_12944_12971 = state_12937__$1;
(statearr_12944_12971[(2)] = null);

(statearr_12944_12971[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (6))){
var inst_12914 = (state_12937[(7)]);
var inst_12920 = p.call(null,inst_12914);
var state_12937__$1 = state_12937;
if(cljs.core.truth_(inst_12920)){
var statearr_12945_12972 = state_12937__$1;
(statearr_12945_12972[(1)] = (9));

} else {
var statearr_12946_12973 = state_12937__$1;
(statearr_12946_12973[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (3))){
var inst_12935 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12937__$1,inst_12935);
} else {
if((state_val_12938 === (12))){
var state_12937__$1 = state_12937;
var statearr_12947_12974 = state_12937__$1;
(statearr_12947_12974[(2)] = null);

(statearr_12947_12974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (2))){
var state_12937__$1 = state_12937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12937__$1,(4),ch);
} else {
if((state_val_12938 === (11))){
var inst_12914 = (state_12937[(7)]);
var inst_12924 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12937__$1,(8),inst_12924,inst_12914);
} else {
if((state_val_12938 === (9))){
var state_12937__$1 = state_12937;
var statearr_12948_12975 = state_12937__$1;
(statearr_12948_12975[(2)] = tc);

(statearr_12948_12975[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (5))){
var inst_12917 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12918 = cljs.core.async.close_BANG_.call(null,fc);
var state_12937__$1 = (function (){var statearr_12949 = state_12937;
(statearr_12949[(8)] = inst_12917);

return statearr_12949;
})();
var statearr_12950_12976 = state_12937__$1;
(statearr_12950_12976[(2)] = inst_12918);

(statearr_12950_12976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (14))){
var inst_12931 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
var statearr_12951_12977 = state_12937__$1;
(statearr_12951_12977[(2)] = inst_12931);

(statearr_12951_12977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (10))){
var state_12937__$1 = state_12937;
var statearr_12952_12978 = state_12937__$1;
(statearr_12952_12978[(2)] = fc);

(statearr_12952_12978[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12938 === (8))){
var inst_12926 = (state_12937[(2)]);
var state_12937__$1 = state_12937;
if(cljs.core.truth_(inst_12926)){
var statearr_12953_12979 = state_12937__$1;
(statearr_12953_12979[(1)] = (12));

} else {
var statearr_12954_12980 = state_12937__$1;
(statearr_12954_12980[(1)] = (13));

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
});})(c__12288__auto___12966,tc,fc))
;
return ((function (switch__12223__auto__,c__12288__auto___12966,tc,fc){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_12958 = [null,null,null,null,null,null,null,null,null];
(statearr_12958[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_12958[(1)] = (1));

return statearr_12958;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_12937){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_12937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e12959){if((e12959 instanceof Object)){
var ex__12227__auto__ = e12959;
var statearr_12960_12981 = state_12937;
(statearr_12960_12981[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12959;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12982 = state_12937;
state_12937 = G__12982;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_12937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_12937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___12966,tc,fc))
})();
var state__12290__auto__ = (function (){var statearr_12961 = f__12289__auto__.call(null);
(statearr_12961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___12966);

return statearr_12961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___12966,tc,fc))
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
var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto__){
return (function (state_13046){
var state_val_13047 = (state_13046[(1)]);
if((state_val_13047 === (7))){
var inst_13042 = (state_13046[(2)]);
var state_13046__$1 = state_13046;
var statearr_13048_13069 = state_13046__$1;
(statearr_13048_13069[(2)] = inst_13042);

(statearr_13048_13069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (1))){
var inst_13026 = init;
var state_13046__$1 = (function (){var statearr_13049 = state_13046;
(statearr_13049[(7)] = inst_13026);

return statearr_13049;
})();
var statearr_13050_13070 = state_13046__$1;
(statearr_13050_13070[(2)] = null);

(statearr_13050_13070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (4))){
var inst_13029 = (state_13046[(8)]);
var inst_13029__$1 = (state_13046[(2)]);
var inst_13030 = (inst_13029__$1 == null);
var state_13046__$1 = (function (){var statearr_13051 = state_13046;
(statearr_13051[(8)] = inst_13029__$1);

return statearr_13051;
})();
if(cljs.core.truth_(inst_13030)){
var statearr_13052_13071 = state_13046__$1;
(statearr_13052_13071[(1)] = (5));

} else {
var statearr_13053_13072 = state_13046__$1;
(statearr_13053_13072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (6))){
var inst_13026 = (state_13046[(7)]);
var inst_13033 = (state_13046[(9)]);
var inst_13029 = (state_13046[(8)]);
var inst_13033__$1 = f.call(null,inst_13026,inst_13029);
var inst_13034 = cljs.core.reduced_QMARK_.call(null,inst_13033__$1);
var state_13046__$1 = (function (){var statearr_13054 = state_13046;
(statearr_13054[(9)] = inst_13033__$1);

return statearr_13054;
})();
if(inst_13034){
var statearr_13055_13073 = state_13046__$1;
(statearr_13055_13073[(1)] = (8));

} else {
var statearr_13056_13074 = state_13046__$1;
(statearr_13056_13074[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (3))){
var inst_13044 = (state_13046[(2)]);
var state_13046__$1 = state_13046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13046__$1,inst_13044);
} else {
if((state_val_13047 === (2))){
var state_13046__$1 = state_13046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13046__$1,(4),ch);
} else {
if((state_val_13047 === (9))){
var inst_13033 = (state_13046[(9)]);
var inst_13026 = inst_13033;
var state_13046__$1 = (function (){var statearr_13057 = state_13046;
(statearr_13057[(7)] = inst_13026);

return statearr_13057;
})();
var statearr_13058_13075 = state_13046__$1;
(statearr_13058_13075[(2)] = null);

(statearr_13058_13075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (5))){
var inst_13026 = (state_13046[(7)]);
var state_13046__$1 = state_13046;
var statearr_13059_13076 = state_13046__$1;
(statearr_13059_13076[(2)] = inst_13026);

(statearr_13059_13076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (10))){
var inst_13040 = (state_13046[(2)]);
var state_13046__$1 = state_13046;
var statearr_13060_13077 = state_13046__$1;
(statearr_13060_13077[(2)] = inst_13040);

(statearr_13060_13077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13047 === (8))){
var inst_13033 = (state_13046[(9)]);
var inst_13036 = cljs.core.deref.call(null,inst_13033);
var state_13046__$1 = state_13046;
var statearr_13061_13078 = state_13046__$1;
(statearr_13061_13078[(2)] = inst_13036);

(statearr_13061_13078[(1)] = (10));


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
});})(c__12288__auto__))
;
return ((function (switch__12223__auto__,c__12288__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12224__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12224__auto____0 = (function (){
var statearr_13065 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13065[(0)] = cljs$core$async$reduce_$_state_machine__12224__auto__);

(statearr_13065[(1)] = (1));

return statearr_13065;
});
var cljs$core$async$reduce_$_state_machine__12224__auto____1 = (function (state_13046){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_13046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e13066){if((e13066 instanceof Object)){
var ex__12227__auto__ = e13066;
var statearr_13067_13079 = state_13046;
(statearr_13067_13079[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13080 = state_13046;
state_13046 = G__13080;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12224__auto__ = function(state_13046){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12224__auto____1.call(this,state_13046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12224__auto____0;
cljs$core$async$reduce_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12224__auto____1;
return cljs$core$async$reduce_$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto__))
})();
var state__12290__auto__ = (function (){var statearr_13068 = f__12289__auto__.call(null);
(statearr_13068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_13068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__))
);

return c__12288__auto__;
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
var args13081 = [];
var len__5818__auto___13133 = arguments.length;
var i__5819__auto___13134 = (0);
while(true){
if((i__5819__auto___13134 < len__5818__auto___13133)){
args13081.push((arguments[i__5819__auto___13134]));

var G__13135 = (i__5819__auto___13134 + (1));
i__5819__auto___13134 = G__13135;
continue;
} else {
}
break;
}

var G__13083 = args13081.length;
switch (G__13083) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13081.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto__){
return (function (state_13108){
var state_val_13109 = (state_13108[(1)]);
if((state_val_13109 === (7))){
var inst_13090 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13110_13137 = state_13108__$1;
(statearr_13110_13137[(2)] = inst_13090);

(statearr_13110_13137[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (1))){
var inst_13084 = cljs.core.seq.call(null,coll);
var inst_13085 = inst_13084;
var state_13108__$1 = (function (){var statearr_13111 = state_13108;
(statearr_13111[(7)] = inst_13085);

return statearr_13111;
})();
var statearr_13112_13138 = state_13108__$1;
(statearr_13112_13138[(2)] = null);

(statearr_13112_13138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (4))){
var inst_13085 = (state_13108[(7)]);
var inst_13088 = cljs.core.first.call(null,inst_13085);
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13108__$1,(7),ch,inst_13088);
} else {
if((state_val_13109 === (13))){
var inst_13102 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13113_13139 = state_13108__$1;
(statearr_13113_13139[(2)] = inst_13102);

(statearr_13113_13139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (6))){
var inst_13093 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
if(cljs.core.truth_(inst_13093)){
var statearr_13114_13140 = state_13108__$1;
(statearr_13114_13140[(1)] = (8));

} else {
var statearr_13115_13141 = state_13108__$1;
(statearr_13115_13141[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (3))){
var inst_13106 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13108__$1,inst_13106);
} else {
if((state_val_13109 === (12))){
var state_13108__$1 = state_13108;
var statearr_13116_13142 = state_13108__$1;
(statearr_13116_13142[(2)] = null);

(statearr_13116_13142[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (2))){
var inst_13085 = (state_13108[(7)]);
var state_13108__$1 = state_13108;
if(cljs.core.truth_(inst_13085)){
var statearr_13117_13143 = state_13108__$1;
(statearr_13117_13143[(1)] = (4));

} else {
var statearr_13118_13144 = state_13108__$1;
(statearr_13118_13144[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (11))){
var inst_13099 = cljs.core.async.close_BANG_.call(null,ch);
var state_13108__$1 = state_13108;
var statearr_13119_13145 = state_13108__$1;
(statearr_13119_13145[(2)] = inst_13099);

(statearr_13119_13145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (9))){
var state_13108__$1 = state_13108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13120_13146 = state_13108__$1;
(statearr_13120_13146[(1)] = (11));

} else {
var statearr_13121_13147 = state_13108__$1;
(statearr_13121_13147[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (5))){
var inst_13085 = (state_13108[(7)]);
var state_13108__$1 = state_13108;
var statearr_13122_13148 = state_13108__$1;
(statearr_13122_13148[(2)] = inst_13085);

(statearr_13122_13148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (10))){
var inst_13104 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13123_13149 = state_13108__$1;
(statearr_13123_13149[(2)] = inst_13104);

(statearr_13123_13149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (8))){
var inst_13085 = (state_13108[(7)]);
var inst_13095 = cljs.core.next.call(null,inst_13085);
var inst_13085__$1 = inst_13095;
var state_13108__$1 = (function (){var statearr_13124 = state_13108;
(statearr_13124[(7)] = inst_13085__$1);

return statearr_13124;
})();
var statearr_13125_13150 = state_13108__$1;
(statearr_13125_13150[(2)] = null);

(statearr_13125_13150[(1)] = (2));


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
});})(c__12288__auto__))
;
return ((function (switch__12223__auto__,c__12288__auto__){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_13129 = [null,null,null,null,null,null,null,null];
(statearr_13129[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_13129[(1)] = (1));

return statearr_13129;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_13108){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_13108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e13130){if((e13130 instanceof Object)){
var ex__12227__auto__ = e13130;
var statearr_13131_13151 = state_13108;
(statearr_13131_13151[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13152 = state_13108;
state_13108 = G__13152;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_13108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_13108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto__))
})();
var state__12290__auto__ = (function (){var statearr_13132 = f__12289__auto__.call(null);
(statearr_13132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_13132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__))
);

return c__12288__auto__;
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
var x__5415__auto__ = (((_ == null))?null:_);
var m__5416__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,_);
} else {
var m__5416__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,_);
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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5416__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m,ch);
} else {
var m__5416__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m,ch);
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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m);
} else {
var m__5416__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async13374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13374 = (function (mult,ch,cs,meta13375){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta13375 = meta13375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13376,meta13375__$1){
var self__ = this;
var _13376__$1 = this;
return (new cljs.core.async.t_cljs$core$async13374(self__.mult,self__.ch,self__.cs,meta13375__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13376){
var self__ = this;
var _13376__$1 = this;
return self__.meta13375;
});})(cs))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13374.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13374.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13375","meta13375",-464932069,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13374";

cljs.core.async.t_cljs$core$async13374.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async13374");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async13374 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13374(mult__$1,ch__$1,cs__$1,meta13375){
return (new cljs.core.async.t_cljs$core$async13374(mult__$1,ch__$1,cs__$1,meta13375));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13374(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12288__auto___13595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___13595,cs,m,dchan,dctr,done){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___13595,cs,m,dchan,dctr,done){
return (function (state_13507){
var state_val_13508 = (state_13507[(1)]);
if((state_val_13508 === (7))){
var inst_13503 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13509_13596 = state_13507__$1;
(statearr_13509_13596[(2)] = inst_13503);

(statearr_13509_13596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (20))){
var inst_13408 = (state_13507[(7)]);
var inst_13418 = cljs.core.first.call(null,inst_13408);
var inst_13419 = cljs.core.nth.call(null,inst_13418,(0),null);
var inst_13420 = cljs.core.nth.call(null,inst_13418,(1),null);
var state_13507__$1 = (function (){var statearr_13510 = state_13507;
(statearr_13510[(8)] = inst_13419);

return statearr_13510;
})();
if(cljs.core.truth_(inst_13420)){
var statearr_13511_13597 = state_13507__$1;
(statearr_13511_13597[(1)] = (22));

} else {
var statearr_13512_13598 = state_13507__$1;
(statearr_13512_13598[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (27))){
var inst_13379 = (state_13507[(9)]);
var inst_13450 = (state_13507[(10)]);
var inst_13455 = (state_13507[(11)]);
var inst_13448 = (state_13507[(12)]);
var inst_13455__$1 = cljs.core._nth.call(null,inst_13448,inst_13450);
var inst_13456 = cljs.core.async.put_BANG_.call(null,inst_13455__$1,inst_13379,done);
var state_13507__$1 = (function (){var statearr_13513 = state_13507;
(statearr_13513[(11)] = inst_13455__$1);

return statearr_13513;
})();
if(cljs.core.truth_(inst_13456)){
var statearr_13514_13599 = state_13507__$1;
(statearr_13514_13599[(1)] = (30));

} else {
var statearr_13515_13600 = state_13507__$1;
(statearr_13515_13600[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (1))){
var state_13507__$1 = state_13507;
var statearr_13516_13601 = state_13507__$1;
(statearr_13516_13601[(2)] = null);

(statearr_13516_13601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (24))){
var inst_13408 = (state_13507[(7)]);
var inst_13425 = (state_13507[(2)]);
var inst_13426 = cljs.core.next.call(null,inst_13408);
var inst_13388 = inst_13426;
var inst_13389 = null;
var inst_13390 = (0);
var inst_13391 = (0);
var state_13507__$1 = (function (){var statearr_13517 = state_13507;
(statearr_13517[(13)] = inst_13391);

(statearr_13517[(14)] = inst_13388);

(statearr_13517[(15)] = inst_13390);

(statearr_13517[(16)] = inst_13389);

(statearr_13517[(17)] = inst_13425);

return statearr_13517;
})();
var statearr_13518_13602 = state_13507__$1;
(statearr_13518_13602[(2)] = null);

(statearr_13518_13602[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (39))){
var state_13507__$1 = state_13507;
var statearr_13522_13603 = state_13507__$1;
(statearr_13522_13603[(2)] = null);

(statearr_13522_13603[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (4))){
var inst_13379 = (state_13507[(9)]);
var inst_13379__$1 = (state_13507[(2)]);
var inst_13380 = (inst_13379__$1 == null);
var state_13507__$1 = (function (){var statearr_13523 = state_13507;
(statearr_13523[(9)] = inst_13379__$1);

return statearr_13523;
})();
if(cljs.core.truth_(inst_13380)){
var statearr_13524_13604 = state_13507__$1;
(statearr_13524_13604[(1)] = (5));

} else {
var statearr_13525_13605 = state_13507__$1;
(statearr_13525_13605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (15))){
var inst_13391 = (state_13507[(13)]);
var inst_13388 = (state_13507[(14)]);
var inst_13390 = (state_13507[(15)]);
var inst_13389 = (state_13507[(16)]);
var inst_13404 = (state_13507[(2)]);
var inst_13405 = (inst_13391 + (1));
var tmp13519 = inst_13388;
var tmp13520 = inst_13390;
var tmp13521 = inst_13389;
var inst_13388__$1 = tmp13519;
var inst_13389__$1 = tmp13521;
var inst_13390__$1 = tmp13520;
var inst_13391__$1 = inst_13405;
var state_13507__$1 = (function (){var statearr_13526 = state_13507;
(statearr_13526[(13)] = inst_13391__$1);

(statearr_13526[(14)] = inst_13388__$1);

(statearr_13526[(18)] = inst_13404);

(statearr_13526[(15)] = inst_13390__$1);

(statearr_13526[(16)] = inst_13389__$1);

return statearr_13526;
})();
var statearr_13527_13606 = state_13507__$1;
(statearr_13527_13606[(2)] = null);

(statearr_13527_13606[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (21))){
var inst_13429 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13531_13607 = state_13507__$1;
(statearr_13531_13607[(2)] = inst_13429);

(statearr_13531_13607[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (31))){
var inst_13455 = (state_13507[(11)]);
var inst_13459 = done.call(null,null);
var inst_13460 = cljs.core.async.untap_STAR_.call(null,m,inst_13455);
var state_13507__$1 = (function (){var statearr_13532 = state_13507;
(statearr_13532[(19)] = inst_13459);

return statearr_13532;
})();
var statearr_13533_13608 = state_13507__$1;
(statearr_13533_13608[(2)] = inst_13460);

(statearr_13533_13608[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (32))){
var inst_13450 = (state_13507[(10)]);
var inst_13449 = (state_13507[(20)]);
var inst_13447 = (state_13507[(21)]);
var inst_13448 = (state_13507[(12)]);
var inst_13462 = (state_13507[(2)]);
var inst_13463 = (inst_13450 + (1));
var tmp13528 = inst_13449;
var tmp13529 = inst_13447;
var tmp13530 = inst_13448;
var inst_13447__$1 = tmp13529;
var inst_13448__$1 = tmp13530;
var inst_13449__$1 = tmp13528;
var inst_13450__$1 = inst_13463;
var state_13507__$1 = (function (){var statearr_13534 = state_13507;
(statearr_13534[(10)] = inst_13450__$1);

(statearr_13534[(22)] = inst_13462);

(statearr_13534[(20)] = inst_13449__$1);

(statearr_13534[(21)] = inst_13447__$1);

(statearr_13534[(12)] = inst_13448__$1);

return statearr_13534;
})();
var statearr_13535_13609 = state_13507__$1;
(statearr_13535_13609[(2)] = null);

(statearr_13535_13609[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (40))){
var inst_13475 = (state_13507[(23)]);
var inst_13479 = done.call(null,null);
var inst_13480 = cljs.core.async.untap_STAR_.call(null,m,inst_13475);
var state_13507__$1 = (function (){var statearr_13536 = state_13507;
(statearr_13536[(24)] = inst_13479);

return statearr_13536;
})();
var statearr_13537_13610 = state_13507__$1;
(statearr_13537_13610[(2)] = inst_13480);

(statearr_13537_13610[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (33))){
var inst_13466 = (state_13507[(25)]);
var inst_13468 = cljs.core.chunked_seq_QMARK_.call(null,inst_13466);
var state_13507__$1 = state_13507;
if(inst_13468){
var statearr_13538_13611 = state_13507__$1;
(statearr_13538_13611[(1)] = (36));

} else {
var statearr_13539_13612 = state_13507__$1;
(statearr_13539_13612[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (13))){
var inst_13398 = (state_13507[(26)]);
var inst_13401 = cljs.core.async.close_BANG_.call(null,inst_13398);
var state_13507__$1 = state_13507;
var statearr_13540_13613 = state_13507__$1;
(statearr_13540_13613[(2)] = inst_13401);

(statearr_13540_13613[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (22))){
var inst_13419 = (state_13507[(8)]);
var inst_13422 = cljs.core.async.close_BANG_.call(null,inst_13419);
var state_13507__$1 = state_13507;
var statearr_13541_13614 = state_13507__$1;
(statearr_13541_13614[(2)] = inst_13422);

(statearr_13541_13614[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (36))){
var inst_13466 = (state_13507[(25)]);
var inst_13470 = cljs.core.chunk_first.call(null,inst_13466);
var inst_13471 = cljs.core.chunk_rest.call(null,inst_13466);
var inst_13472 = cljs.core.count.call(null,inst_13470);
var inst_13447 = inst_13471;
var inst_13448 = inst_13470;
var inst_13449 = inst_13472;
var inst_13450 = (0);
var state_13507__$1 = (function (){var statearr_13542 = state_13507;
(statearr_13542[(10)] = inst_13450);

(statearr_13542[(20)] = inst_13449);

(statearr_13542[(21)] = inst_13447);

(statearr_13542[(12)] = inst_13448);

return statearr_13542;
})();
var statearr_13543_13615 = state_13507__$1;
(statearr_13543_13615[(2)] = null);

(statearr_13543_13615[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (41))){
var inst_13466 = (state_13507[(25)]);
var inst_13482 = (state_13507[(2)]);
var inst_13483 = cljs.core.next.call(null,inst_13466);
var inst_13447 = inst_13483;
var inst_13448 = null;
var inst_13449 = (0);
var inst_13450 = (0);
var state_13507__$1 = (function (){var statearr_13544 = state_13507;
(statearr_13544[(10)] = inst_13450);

(statearr_13544[(20)] = inst_13449);

(statearr_13544[(27)] = inst_13482);

(statearr_13544[(21)] = inst_13447);

(statearr_13544[(12)] = inst_13448);

return statearr_13544;
})();
var statearr_13545_13616 = state_13507__$1;
(statearr_13545_13616[(2)] = null);

(statearr_13545_13616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (43))){
var state_13507__$1 = state_13507;
var statearr_13546_13617 = state_13507__$1;
(statearr_13546_13617[(2)] = null);

(statearr_13546_13617[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (29))){
var inst_13491 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13547_13618 = state_13507__$1;
(statearr_13547_13618[(2)] = inst_13491);

(statearr_13547_13618[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (44))){
var inst_13500 = (state_13507[(2)]);
var state_13507__$1 = (function (){var statearr_13548 = state_13507;
(statearr_13548[(28)] = inst_13500);

return statearr_13548;
})();
var statearr_13549_13619 = state_13507__$1;
(statearr_13549_13619[(2)] = null);

(statearr_13549_13619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (6))){
var inst_13439 = (state_13507[(29)]);
var inst_13438 = cljs.core.deref.call(null,cs);
var inst_13439__$1 = cljs.core.keys.call(null,inst_13438);
var inst_13440 = cljs.core.count.call(null,inst_13439__$1);
var inst_13441 = cljs.core.reset_BANG_.call(null,dctr,inst_13440);
var inst_13446 = cljs.core.seq.call(null,inst_13439__$1);
var inst_13447 = inst_13446;
var inst_13448 = null;
var inst_13449 = (0);
var inst_13450 = (0);
var state_13507__$1 = (function (){var statearr_13550 = state_13507;
(statearr_13550[(30)] = inst_13441);

(statearr_13550[(10)] = inst_13450);

(statearr_13550[(29)] = inst_13439__$1);

(statearr_13550[(20)] = inst_13449);

(statearr_13550[(21)] = inst_13447);

(statearr_13550[(12)] = inst_13448);

return statearr_13550;
})();
var statearr_13551_13620 = state_13507__$1;
(statearr_13551_13620[(2)] = null);

(statearr_13551_13620[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (28))){
var inst_13447 = (state_13507[(21)]);
var inst_13466 = (state_13507[(25)]);
var inst_13466__$1 = cljs.core.seq.call(null,inst_13447);
var state_13507__$1 = (function (){var statearr_13552 = state_13507;
(statearr_13552[(25)] = inst_13466__$1);

return statearr_13552;
})();
if(inst_13466__$1){
var statearr_13553_13621 = state_13507__$1;
(statearr_13553_13621[(1)] = (33));

} else {
var statearr_13554_13622 = state_13507__$1;
(statearr_13554_13622[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (25))){
var inst_13450 = (state_13507[(10)]);
var inst_13449 = (state_13507[(20)]);
var inst_13452 = (inst_13450 < inst_13449);
var inst_13453 = inst_13452;
var state_13507__$1 = state_13507;
if(cljs.core.truth_(inst_13453)){
var statearr_13555_13623 = state_13507__$1;
(statearr_13555_13623[(1)] = (27));

} else {
var statearr_13556_13624 = state_13507__$1;
(statearr_13556_13624[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (34))){
var state_13507__$1 = state_13507;
var statearr_13557_13625 = state_13507__$1;
(statearr_13557_13625[(2)] = null);

(statearr_13557_13625[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (17))){
var state_13507__$1 = state_13507;
var statearr_13558_13626 = state_13507__$1;
(statearr_13558_13626[(2)] = null);

(statearr_13558_13626[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (3))){
var inst_13505 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13507__$1,inst_13505);
} else {
if((state_val_13508 === (12))){
var inst_13434 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13559_13627 = state_13507__$1;
(statearr_13559_13627[(2)] = inst_13434);

(statearr_13559_13627[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (2))){
var state_13507__$1 = state_13507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13507__$1,(4),ch);
} else {
if((state_val_13508 === (23))){
var state_13507__$1 = state_13507;
var statearr_13560_13628 = state_13507__$1;
(statearr_13560_13628[(2)] = null);

(statearr_13560_13628[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (35))){
var inst_13489 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13561_13629 = state_13507__$1;
(statearr_13561_13629[(2)] = inst_13489);

(statearr_13561_13629[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (19))){
var inst_13408 = (state_13507[(7)]);
var inst_13412 = cljs.core.chunk_first.call(null,inst_13408);
var inst_13413 = cljs.core.chunk_rest.call(null,inst_13408);
var inst_13414 = cljs.core.count.call(null,inst_13412);
var inst_13388 = inst_13413;
var inst_13389 = inst_13412;
var inst_13390 = inst_13414;
var inst_13391 = (0);
var state_13507__$1 = (function (){var statearr_13562 = state_13507;
(statearr_13562[(13)] = inst_13391);

(statearr_13562[(14)] = inst_13388);

(statearr_13562[(15)] = inst_13390);

(statearr_13562[(16)] = inst_13389);

return statearr_13562;
})();
var statearr_13563_13630 = state_13507__$1;
(statearr_13563_13630[(2)] = null);

(statearr_13563_13630[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (11))){
var inst_13408 = (state_13507[(7)]);
var inst_13388 = (state_13507[(14)]);
var inst_13408__$1 = cljs.core.seq.call(null,inst_13388);
var state_13507__$1 = (function (){var statearr_13564 = state_13507;
(statearr_13564[(7)] = inst_13408__$1);

return statearr_13564;
})();
if(inst_13408__$1){
var statearr_13565_13631 = state_13507__$1;
(statearr_13565_13631[(1)] = (16));

} else {
var statearr_13566_13632 = state_13507__$1;
(statearr_13566_13632[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (9))){
var inst_13436 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13567_13633 = state_13507__$1;
(statearr_13567_13633[(2)] = inst_13436);

(statearr_13567_13633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (5))){
var inst_13386 = cljs.core.deref.call(null,cs);
var inst_13387 = cljs.core.seq.call(null,inst_13386);
var inst_13388 = inst_13387;
var inst_13389 = null;
var inst_13390 = (0);
var inst_13391 = (0);
var state_13507__$1 = (function (){var statearr_13568 = state_13507;
(statearr_13568[(13)] = inst_13391);

(statearr_13568[(14)] = inst_13388);

(statearr_13568[(15)] = inst_13390);

(statearr_13568[(16)] = inst_13389);

return statearr_13568;
})();
var statearr_13569_13634 = state_13507__$1;
(statearr_13569_13634[(2)] = null);

(statearr_13569_13634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (14))){
var state_13507__$1 = state_13507;
var statearr_13570_13635 = state_13507__$1;
(statearr_13570_13635[(2)] = null);

(statearr_13570_13635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (45))){
var inst_13497 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13571_13636 = state_13507__$1;
(statearr_13571_13636[(2)] = inst_13497);

(statearr_13571_13636[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (26))){
var inst_13439 = (state_13507[(29)]);
var inst_13493 = (state_13507[(2)]);
var inst_13494 = cljs.core.seq.call(null,inst_13439);
var state_13507__$1 = (function (){var statearr_13572 = state_13507;
(statearr_13572[(31)] = inst_13493);

return statearr_13572;
})();
if(inst_13494){
var statearr_13573_13637 = state_13507__$1;
(statearr_13573_13637[(1)] = (42));

} else {
var statearr_13574_13638 = state_13507__$1;
(statearr_13574_13638[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (16))){
var inst_13408 = (state_13507[(7)]);
var inst_13410 = cljs.core.chunked_seq_QMARK_.call(null,inst_13408);
var state_13507__$1 = state_13507;
if(inst_13410){
var statearr_13575_13639 = state_13507__$1;
(statearr_13575_13639[(1)] = (19));

} else {
var statearr_13576_13640 = state_13507__$1;
(statearr_13576_13640[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (38))){
var inst_13486 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13577_13641 = state_13507__$1;
(statearr_13577_13641[(2)] = inst_13486);

(statearr_13577_13641[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (30))){
var state_13507__$1 = state_13507;
var statearr_13578_13642 = state_13507__$1;
(statearr_13578_13642[(2)] = null);

(statearr_13578_13642[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (10))){
var inst_13391 = (state_13507[(13)]);
var inst_13389 = (state_13507[(16)]);
var inst_13397 = cljs.core._nth.call(null,inst_13389,inst_13391);
var inst_13398 = cljs.core.nth.call(null,inst_13397,(0),null);
var inst_13399 = cljs.core.nth.call(null,inst_13397,(1),null);
var state_13507__$1 = (function (){var statearr_13579 = state_13507;
(statearr_13579[(26)] = inst_13398);

return statearr_13579;
})();
if(cljs.core.truth_(inst_13399)){
var statearr_13580_13643 = state_13507__$1;
(statearr_13580_13643[(1)] = (13));

} else {
var statearr_13581_13644 = state_13507__$1;
(statearr_13581_13644[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (18))){
var inst_13432 = (state_13507[(2)]);
var state_13507__$1 = state_13507;
var statearr_13582_13645 = state_13507__$1;
(statearr_13582_13645[(2)] = inst_13432);

(statearr_13582_13645[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (42))){
var state_13507__$1 = state_13507;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13507__$1,(45),dchan);
} else {
if((state_val_13508 === (37))){
var inst_13379 = (state_13507[(9)]);
var inst_13475 = (state_13507[(23)]);
var inst_13466 = (state_13507[(25)]);
var inst_13475__$1 = cljs.core.first.call(null,inst_13466);
var inst_13476 = cljs.core.async.put_BANG_.call(null,inst_13475__$1,inst_13379,done);
var state_13507__$1 = (function (){var statearr_13583 = state_13507;
(statearr_13583[(23)] = inst_13475__$1);

return statearr_13583;
})();
if(cljs.core.truth_(inst_13476)){
var statearr_13584_13646 = state_13507__$1;
(statearr_13584_13646[(1)] = (39));

} else {
var statearr_13585_13647 = state_13507__$1;
(statearr_13585_13647[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13508 === (8))){
var inst_13391 = (state_13507[(13)]);
var inst_13390 = (state_13507[(15)]);
var inst_13393 = (inst_13391 < inst_13390);
var inst_13394 = inst_13393;
var state_13507__$1 = state_13507;
if(cljs.core.truth_(inst_13394)){
var statearr_13586_13648 = state_13507__$1;
(statearr_13586_13648[(1)] = (10));

} else {
var statearr_13587_13649 = state_13507__$1;
(statearr_13587_13649[(1)] = (11));

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
});})(c__12288__auto___13595,cs,m,dchan,dctr,done))
;
return ((function (switch__12223__auto__,c__12288__auto___13595,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12224__auto__ = null;
var cljs$core$async$mult_$_state_machine__12224__auto____0 = (function (){
var statearr_13591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13591[(0)] = cljs$core$async$mult_$_state_machine__12224__auto__);

(statearr_13591[(1)] = (1));

return statearr_13591;
});
var cljs$core$async$mult_$_state_machine__12224__auto____1 = (function (state_13507){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_13507);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e13592){if((e13592 instanceof Object)){
var ex__12227__auto__ = e13592;
var statearr_13593_13650 = state_13507;
(statearr_13593_13650[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13507);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13592;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13651 = state_13507;
state_13507 = G__13651;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12224__auto__ = function(state_13507){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12224__auto____1.call(this,state_13507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12224__auto____0;
cljs$core$async$mult_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12224__auto____1;
return cljs$core$async$mult_$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___13595,cs,m,dchan,dctr,done))
})();
var state__12290__auto__ = (function (){var statearr_13594 = f__12289__auto__.call(null);
(statearr_13594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___13595);

return statearr_13594;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___13595,cs,m,dchan,dctr,done))
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
var args13652 = [];
var len__5818__auto___13655 = arguments.length;
var i__5819__auto___13656 = (0);
while(true){
if((i__5819__auto___13656 < len__5818__auto___13655)){
args13652.push((arguments[i__5819__auto___13656]));

var G__13657 = (i__5819__auto___13656 + (1));
i__5819__auto___13656 = G__13657;
continue;
} else {
}
break;
}

var G__13654 = args13652.length;
switch (G__13654) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13652.length)].join('')));

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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m,ch);
} else {
var m__5416__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m,ch);
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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m,ch);
} else {
var m__5416__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m,ch);
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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m);
} else {
var m__5416__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m);
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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m,state_map);
} else {
var m__5416__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m,state_map);
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
var x__5415__auto__ = (((m == null))?null:m);
var m__5416__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,m,mode);
} else {
var m__5416__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5825__auto__ = [];
var len__5818__auto___13669 = arguments.length;
var i__5819__auto___13670 = (0);
while(true){
if((i__5819__auto___13670 < len__5818__auto___13669)){
args__5825__auto__.push((arguments[i__5819__auto___13670]));

var G__13671 = (i__5819__auto___13670 + (1));
i__5819__auto___13670 = G__13671;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((3) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5826__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13663){
var map__13664 = p__13663;
var map__13664__$1 = ((((!((map__13664 == null)))?((((map__13664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13664):map__13664);
var opts = map__13664__$1;
var statearr_13666_13672 = state;
(statearr_13666_13672[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__13664,map__13664__$1,opts){
return (function (val){
var statearr_13667_13673 = state;
(statearr_13667_13673[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13664,map__13664__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_13668_13674 = state;
(statearr_13668_13674[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13659){
var G__13660 = cljs.core.first.call(null,seq13659);
var seq13659__$1 = cljs.core.next.call(null,seq13659);
var G__13661 = cljs.core.first.call(null,seq13659__$1);
var seq13659__$2 = cljs.core.next.call(null,seq13659__$1);
var G__13662 = cljs.core.first.call(null,seq13659__$2);
var seq13659__$3 = cljs.core.next.call(null,seq13659__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13660,G__13661,G__13662,seq13659__$3);
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
if(typeof cljs.core.async.t_cljs$core$async13838 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13838 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13839){
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
this.meta13839 = meta13839;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13840,meta13839__$1){
var self__ = this;
var _13840__$1 = this;
return (new cljs.core.async.t_cljs$core$async13838(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13839__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13840){
var self__ = this;
var _13840__$1 = this;
return self__.meta13839;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13838.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13839","meta13839",-2137430705,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13838.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13838.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13838";

cljs.core.async.t_cljs$core$async13838.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async13838");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async13838 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13838(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13839){
return (new cljs.core.async.t_cljs$core$async13838(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13839));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13838(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12288__auto___14001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13938){
var state_val_13939 = (state_13938[(1)]);
if((state_val_13939 === (7))){
var inst_13856 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13940_14002 = state_13938__$1;
(statearr_13940_14002[(2)] = inst_13856);

(statearr_13940_14002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (20))){
var inst_13868 = (state_13938[(7)]);
var state_13938__$1 = state_13938;
var statearr_13941_14003 = state_13938__$1;
(statearr_13941_14003[(2)] = inst_13868);

(statearr_13941_14003[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (27))){
var state_13938__$1 = state_13938;
var statearr_13942_14004 = state_13938__$1;
(statearr_13942_14004[(2)] = null);

(statearr_13942_14004[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (1))){
var inst_13844 = (state_13938[(8)]);
var inst_13844__$1 = calc_state.call(null);
var inst_13846 = (inst_13844__$1 == null);
var inst_13847 = cljs.core.not.call(null,inst_13846);
var state_13938__$1 = (function (){var statearr_13943 = state_13938;
(statearr_13943[(8)] = inst_13844__$1);

return statearr_13943;
})();
if(inst_13847){
var statearr_13944_14005 = state_13938__$1;
(statearr_13944_14005[(1)] = (2));

} else {
var statearr_13945_14006 = state_13938__$1;
(statearr_13945_14006[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (24))){
var inst_13891 = (state_13938[(9)]);
var inst_13912 = (state_13938[(10)]);
var inst_13898 = (state_13938[(11)]);
var inst_13912__$1 = inst_13891.call(null,inst_13898);
var state_13938__$1 = (function (){var statearr_13946 = state_13938;
(statearr_13946[(10)] = inst_13912__$1);

return statearr_13946;
})();
if(cljs.core.truth_(inst_13912__$1)){
var statearr_13947_14007 = state_13938__$1;
(statearr_13947_14007[(1)] = (29));

} else {
var statearr_13948_14008 = state_13938__$1;
(statearr_13948_14008[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (4))){
var inst_13859 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13859)){
var statearr_13949_14009 = state_13938__$1;
(statearr_13949_14009[(1)] = (8));

} else {
var statearr_13950_14010 = state_13938__$1;
(statearr_13950_14010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (15))){
var inst_13885 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13885)){
var statearr_13951_14011 = state_13938__$1;
(statearr_13951_14011[(1)] = (19));

} else {
var statearr_13952_14012 = state_13938__$1;
(statearr_13952_14012[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (21))){
var inst_13890 = (state_13938[(12)]);
var inst_13890__$1 = (state_13938[(2)]);
var inst_13891 = cljs.core.get.call(null,inst_13890__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13892 = cljs.core.get.call(null,inst_13890__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13893 = cljs.core.get.call(null,inst_13890__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13938__$1 = (function (){var statearr_13953 = state_13938;
(statearr_13953[(13)] = inst_13892);

(statearr_13953[(9)] = inst_13891);

(statearr_13953[(12)] = inst_13890__$1);

return statearr_13953;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13938__$1,(22),inst_13893);
} else {
if((state_val_13939 === (31))){
var inst_13920 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13920)){
var statearr_13954_14013 = state_13938__$1;
(statearr_13954_14013[(1)] = (32));

} else {
var statearr_13955_14014 = state_13938__$1;
(statearr_13955_14014[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (32))){
var inst_13897 = (state_13938[(14)]);
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13938__$1,(35),out,inst_13897);
} else {
if((state_val_13939 === (33))){
var inst_13890 = (state_13938[(12)]);
var inst_13868 = inst_13890;
var state_13938__$1 = (function (){var statearr_13956 = state_13938;
(statearr_13956[(7)] = inst_13868);

return statearr_13956;
})();
var statearr_13957_14015 = state_13938__$1;
(statearr_13957_14015[(2)] = null);

(statearr_13957_14015[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (13))){
var inst_13868 = (state_13938[(7)]);
var inst_13875 = inst_13868.cljs$lang$protocol_mask$partition0$;
var inst_13876 = (inst_13875 & (64));
var inst_13877 = inst_13868.cljs$core$ISeq$;
var inst_13878 = (inst_13876) || (inst_13877);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13878)){
var statearr_13958_14016 = state_13938__$1;
(statearr_13958_14016[(1)] = (16));

} else {
var statearr_13959_14017 = state_13938__$1;
(statearr_13959_14017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (22))){
var inst_13897 = (state_13938[(14)]);
var inst_13898 = (state_13938[(11)]);
var inst_13896 = (state_13938[(2)]);
var inst_13897__$1 = cljs.core.nth.call(null,inst_13896,(0),null);
var inst_13898__$1 = cljs.core.nth.call(null,inst_13896,(1),null);
var inst_13899 = (inst_13897__$1 == null);
var inst_13900 = cljs.core._EQ_.call(null,inst_13898__$1,change);
var inst_13901 = (inst_13899) || (inst_13900);
var state_13938__$1 = (function (){var statearr_13960 = state_13938;
(statearr_13960[(14)] = inst_13897__$1);

(statearr_13960[(11)] = inst_13898__$1);

return statearr_13960;
})();
if(cljs.core.truth_(inst_13901)){
var statearr_13961_14018 = state_13938__$1;
(statearr_13961_14018[(1)] = (23));

} else {
var statearr_13962_14019 = state_13938__$1;
(statearr_13962_14019[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (36))){
var inst_13890 = (state_13938[(12)]);
var inst_13868 = inst_13890;
var state_13938__$1 = (function (){var statearr_13963 = state_13938;
(statearr_13963[(7)] = inst_13868);

return statearr_13963;
})();
var statearr_13964_14020 = state_13938__$1;
(statearr_13964_14020[(2)] = null);

(statearr_13964_14020[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (29))){
var inst_13912 = (state_13938[(10)]);
var state_13938__$1 = state_13938;
var statearr_13965_14021 = state_13938__$1;
(statearr_13965_14021[(2)] = inst_13912);

(statearr_13965_14021[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (6))){
var state_13938__$1 = state_13938;
var statearr_13966_14022 = state_13938__$1;
(statearr_13966_14022[(2)] = false);

(statearr_13966_14022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (28))){
var inst_13908 = (state_13938[(2)]);
var inst_13909 = calc_state.call(null);
var inst_13868 = inst_13909;
var state_13938__$1 = (function (){var statearr_13967 = state_13938;
(statearr_13967[(7)] = inst_13868);

(statearr_13967[(15)] = inst_13908);

return statearr_13967;
})();
var statearr_13968_14023 = state_13938__$1;
(statearr_13968_14023[(2)] = null);

(statearr_13968_14023[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (25))){
var inst_13934 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13969_14024 = state_13938__$1;
(statearr_13969_14024[(2)] = inst_13934);

(statearr_13969_14024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (34))){
var inst_13932 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13970_14025 = state_13938__$1;
(statearr_13970_14025[(2)] = inst_13932);

(statearr_13970_14025[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (17))){
var state_13938__$1 = state_13938;
var statearr_13971_14026 = state_13938__$1;
(statearr_13971_14026[(2)] = false);

(statearr_13971_14026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (3))){
var state_13938__$1 = state_13938;
var statearr_13972_14027 = state_13938__$1;
(statearr_13972_14027[(2)] = false);

(statearr_13972_14027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (12))){
var inst_13936 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13938__$1,inst_13936);
} else {
if((state_val_13939 === (2))){
var inst_13844 = (state_13938[(8)]);
var inst_13849 = inst_13844.cljs$lang$protocol_mask$partition0$;
var inst_13850 = (inst_13849 & (64));
var inst_13851 = inst_13844.cljs$core$ISeq$;
var inst_13852 = (inst_13850) || (inst_13851);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13852)){
var statearr_13973_14028 = state_13938__$1;
(statearr_13973_14028[(1)] = (5));

} else {
var statearr_13974_14029 = state_13938__$1;
(statearr_13974_14029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (23))){
var inst_13897 = (state_13938[(14)]);
var inst_13903 = (inst_13897 == null);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13903)){
var statearr_13975_14030 = state_13938__$1;
(statearr_13975_14030[(1)] = (26));

} else {
var statearr_13976_14031 = state_13938__$1;
(statearr_13976_14031[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (35))){
var inst_13923 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
if(cljs.core.truth_(inst_13923)){
var statearr_13977_14032 = state_13938__$1;
(statearr_13977_14032[(1)] = (36));

} else {
var statearr_13978_14033 = state_13938__$1;
(statearr_13978_14033[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (19))){
var inst_13868 = (state_13938[(7)]);
var inst_13887 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13868);
var state_13938__$1 = state_13938;
var statearr_13979_14034 = state_13938__$1;
(statearr_13979_14034[(2)] = inst_13887);

(statearr_13979_14034[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (11))){
var inst_13868 = (state_13938[(7)]);
var inst_13872 = (inst_13868 == null);
var inst_13873 = cljs.core.not.call(null,inst_13872);
var state_13938__$1 = state_13938;
if(inst_13873){
var statearr_13980_14035 = state_13938__$1;
(statearr_13980_14035[(1)] = (13));

} else {
var statearr_13981_14036 = state_13938__$1;
(statearr_13981_14036[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (9))){
var inst_13844 = (state_13938[(8)]);
var state_13938__$1 = state_13938;
var statearr_13982_14037 = state_13938__$1;
(statearr_13982_14037[(2)] = inst_13844);

(statearr_13982_14037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (5))){
var state_13938__$1 = state_13938;
var statearr_13983_14038 = state_13938__$1;
(statearr_13983_14038[(2)] = true);

(statearr_13983_14038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (14))){
var state_13938__$1 = state_13938;
var statearr_13984_14039 = state_13938__$1;
(statearr_13984_14039[(2)] = false);

(statearr_13984_14039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (26))){
var inst_13898 = (state_13938[(11)]);
var inst_13905 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13898);
var state_13938__$1 = state_13938;
var statearr_13985_14040 = state_13938__$1;
(statearr_13985_14040[(2)] = inst_13905);

(statearr_13985_14040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (16))){
var state_13938__$1 = state_13938;
var statearr_13986_14041 = state_13938__$1;
(statearr_13986_14041[(2)] = true);

(statearr_13986_14041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (38))){
var inst_13928 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13987_14042 = state_13938__$1;
(statearr_13987_14042[(2)] = inst_13928);

(statearr_13987_14042[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (30))){
var inst_13892 = (state_13938[(13)]);
var inst_13891 = (state_13938[(9)]);
var inst_13898 = (state_13938[(11)]);
var inst_13915 = cljs.core.empty_QMARK_.call(null,inst_13891);
var inst_13916 = inst_13892.call(null,inst_13898);
var inst_13917 = cljs.core.not.call(null,inst_13916);
var inst_13918 = (inst_13915) && (inst_13917);
var state_13938__$1 = state_13938;
var statearr_13988_14043 = state_13938__$1;
(statearr_13988_14043[(2)] = inst_13918);

(statearr_13988_14043[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (10))){
var inst_13844 = (state_13938[(8)]);
var inst_13864 = (state_13938[(2)]);
var inst_13865 = cljs.core.get.call(null,inst_13864,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13866 = cljs.core.get.call(null,inst_13864,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13867 = cljs.core.get.call(null,inst_13864,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13868 = inst_13844;
var state_13938__$1 = (function (){var statearr_13989 = state_13938;
(statearr_13989[(16)] = inst_13866);

(statearr_13989[(17)] = inst_13867);

(statearr_13989[(7)] = inst_13868);

(statearr_13989[(18)] = inst_13865);

return statearr_13989;
})();
var statearr_13990_14044 = state_13938__$1;
(statearr_13990_14044[(2)] = null);

(statearr_13990_14044[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (18))){
var inst_13882 = (state_13938[(2)]);
var state_13938__$1 = state_13938;
var statearr_13991_14045 = state_13938__$1;
(statearr_13991_14045[(2)] = inst_13882);

(statearr_13991_14045[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (37))){
var state_13938__$1 = state_13938;
var statearr_13992_14046 = state_13938__$1;
(statearr_13992_14046[(2)] = null);

(statearr_13992_14046[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13939 === (8))){
var inst_13844 = (state_13938[(8)]);
var inst_13861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13844);
var state_13938__$1 = state_13938;
var statearr_13993_14047 = state_13938__$1;
(statearr_13993_14047[(2)] = inst_13861);

(statearr_13993_14047[(1)] = (10));


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
});})(c__12288__auto___14001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12223__auto__,c__12288__auto___14001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12224__auto__ = null;
var cljs$core$async$mix_$_state_machine__12224__auto____0 = (function (){
var statearr_13997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13997[(0)] = cljs$core$async$mix_$_state_machine__12224__auto__);

(statearr_13997[(1)] = (1));

return statearr_13997;
});
var cljs$core$async$mix_$_state_machine__12224__auto____1 = (function (state_13938){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_13938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e13998){if((e13998 instanceof Object)){
var ex__12227__auto__ = e13998;
var statearr_13999_14048 = state_13938;
(statearr_13999_14048[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14049 = state_13938;
state_13938 = G__14049;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12224__auto__ = function(state_13938){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12224__auto____1.call(this,state_13938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12224__auto____0;
cljs$core$async$mix_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12224__auto____1;
return cljs$core$async$mix_$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12290__auto__ = (function (){var statearr_14000 = f__12289__auto__.call(null);
(statearr_14000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14001);

return statearr_14000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14001,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__5415__auto__ = (((p == null))?null:p);
var m__5416__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5416__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__5415__auto__ = (((p == null))?null:p);
var m__5416__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,p,v,ch);
} else {
var m__5416__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args14050 = [];
var len__5818__auto___14053 = arguments.length;
var i__5819__auto___14054 = (0);
while(true){
if((i__5819__auto___14054 < len__5818__auto___14053)){
args14050.push((arguments[i__5819__auto___14054]));

var G__14055 = (i__5819__auto___14054 + (1));
i__5819__auto___14054 = G__14055;
continue;
} else {
}
break;
}

var G__14052 = args14050.length;
switch (G__14052) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14050.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5415__auto__ = (((p == null))?null:p);
var m__5416__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,p);
} else {
var m__5416__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,p);
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
var x__5415__auto__ = (((p == null))?null:p);
var m__5416__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5415__auto__)]);
if(!((m__5416__auto__ == null))){
return m__5416__auto__.call(null,p,v);
} else {
var m__5416__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5416__auto____$1 == null))){
return m__5416__auto____$1.call(null,p,v);
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
var args14058 = [];
var len__5818__auto___14183 = arguments.length;
var i__5819__auto___14184 = (0);
while(true){
if((i__5819__auto___14184 < len__5818__auto___14183)){
args14058.push((arguments[i__5819__auto___14184]));

var G__14185 = (i__5819__auto___14184 + (1));
i__5819__auto___14184 = G__14185;
continue;
} else {
}
break;
}

var G__14060 = args14058.length;
switch (G__14060) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14058.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4760__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4760__auto__,mults){
return (function (p1__14057_SHARP_){
if(cljs.core.truth_(p1__14057_SHARP_.call(null,topic))){
return p1__14057_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__14057_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4760__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async14061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14061 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta14062){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta14062 = meta14062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14063,meta14062__$1){
var self__ = this;
var _14063__$1 = this;
return (new cljs.core.async.t_cljs$core$async14061(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta14062__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14063){
var self__ = this;
var _14063__$1 = this;
return self__.meta14062;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta14062","meta14062",-247353854,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async14061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14061";

cljs.core.async.t_cljs$core$async14061.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async14061");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async14061 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async14061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14062){
return (new cljs.core.async.t_cljs$core$async14061(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta14062));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async14061(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12288__auto___14187 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14187,mults,ensure_mult,p){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14187,mults,ensure_mult,p){
return (function (state_14135){
var state_val_14136 = (state_14135[(1)]);
if((state_val_14136 === (7))){
var inst_14131 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14137_14188 = state_14135__$1;
(statearr_14137_14188[(2)] = inst_14131);

(statearr_14137_14188[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (20))){
var state_14135__$1 = state_14135;
var statearr_14138_14189 = state_14135__$1;
(statearr_14138_14189[(2)] = null);

(statearr_14138_14189[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (1))){
var state_14135__$1 = state_14135;
var statearr_14139_14190 = state_14135__$1;
(statearr_14139_14190[(2)] = null);

(statearr_14139_14190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (24))){
var inst_14114 = (state_14135[(7)]);
var inst_14123 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14114);
var state_14135__$1 = state_14135;
var statearr_14140_14191 = state_14135__$1;
(statearr_14140_14191[(2)] = inst_14123);

(statearr_14140_14191[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (4))){
var inst_14066 = (state_14135[(8)]);
var inst_14066__$1 = (state_14135[(2)]);
var inst_14067 = (inst_14066__$1 == null);
var state_14135__$1 = (function (){var statearr_14141 = state_14135;
(statearr_14141[(8)] = inst_14066__$1);

return statearr_14141;
})();
if(cljs.core.truth_(inst_14067)){
var statearr_14142_14192 = state_14135__$1;
(statearr_14142_14192[(1)] = (5));

} else {
var statearr_14143_14193 = state_14135__$1;
(statearr_14143_14193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (15))){
var inst_14108 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14144_14194 = state_14135__$1;
(statearr_14144_14194[(2)] = inst_14108);

(statearr_14144_14194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (21))){
var inst_14128 = (state_14135[(2)]);
var state_14135__$1 = (function (){var statearr_14145 = state_14135;
(statearr_14145[(9)] = inst_14128);

return statearr_14145;
})();
var statearr_14146_14195 = state_14135__$1;
(statearr_14146_14195[(2)] = null);

(statearr_14146_14195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (13))){
var inst_14090 = (state_14135[(10)]);
var inst_14092 = cljs.core.chunked_seq_QMARK_.call(null,inst_14090);
var state_14135__$1 = state_14135;
if(inst_14092){
var statearr_14147_14196 = state_14135__$1;
(statearr_14147_14196[(1)] = (16));

} else {
var statearr_14148_14197 = state_14135__$1;
(statearr_14148_14197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (22))){
var inst_14120 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14120)){
var statearr_14149_14198 = state_14135__$1;
(statearr_14149_14198[(1)] = (23));

} else {
var statearr_14150_14199 = state_14135__$1;
(statearr_14150_14199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (6))){
var inst_14066 = (state_14135[(8)]);
var inst_14116 = (state_14135[(11)]);
var inst_14114 = (state_14135[(7)]);
var inst_14114__$1 = topic_fn.call(null,inst_14066);
var inst_14115 = cljs.core.deref.call(null,mults);
var inst_14116__$1 = cljs.core.get.call(null,inst_14115,inst_14114__$1);
var state_14135__$1 = (function (){var statearr_14151 = state_14135;
(statearr_14151[(11)] = inst_14116__$1);

(statearr_14151[(7)] = inst_14114__$1);

return statearr_14151;
})();
if(cljs.core.truth_(inst_14116__$1)){
var statearr_14152_14200 = state_14135__$1;
(statearr_14152_14200[(1)] = (19));

} else {
var statearr_14153_14201 = state_14135__$1;
(statearr_14153_14201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (25))){
var inst_14125 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14154_14202 = state_14135__$1;
(statearr_14154_14202[(2)] = inst_14125);

(statearr_14154_14202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (17))){
var inst_14090 = (state_14135[(10)]);
var inst_14099 = cljs.core.first.call(null,inst_14090);
var inst_14100 = cljs.core.async.muxch_STAR_.call(null,inst_14099);
var inst_14101 = cljs.core.async.close_BANG_.call(null,inst_14100);
var inst_14102 = cljs.core.next.call(null,inst_14090);
var inst_14076 = inst_14102;
var inst_14077 = null;
var inst_14078 = (0);
var inst_14079 = (0);
var state_14135__$1 = (function (){var statearr_14155 = state_14135;
(statearr_14155[(12)] = inst_14101);

(statearr_14155[(13)] = inst_14078);

(statearr_14155[(14)] = inst_14076);

(statearr_14155[(15)] = inst_14079);

(statearr_14155[(16)] = inst_14077);

return statearr_14155;
})();
var statearr_14156_14203 = state_14135__$1;
(statearr_14156_14203[(2)] = null);

(statearr_14156_14203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (3))){
var inst_14133 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14135__$1,inst_14133);
} else {
if((state_val_14136 === (12))){
var inst_14110 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14157_14204 = state_14135__$1;
(statearr_14157_14204[(2)] = inst_14110);

(statearr_14157_14204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (2))){
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14135__$1,(4),ch);
} else {
if((state_val_14136 === (23))){
var state_14135__$1 = state_14135;
var statearr_14158_14205 = state_14135__$1;
(statearr_14158_14205[(2)] = null);

(statearr_14158_14205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (19))){
var inst_14066 = (state_14135[(8)]);
var inst_14116 = (state_14135[(11)]);
var inst_14118 = cljs.core.async.muxch_STAR_.call(null,inst_14116);
var state_14135__$1 = state_14135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14135__$1,(22),inst_14118,inst_14066);
} else {
if((state_val_14136 === (11))){
var inst_14090 = (state_14135[(10)]);
var inst_14076 = (state_14135[(14)]);
var inst_14090__$1 = cljs.core.seq.call(null,inst_14076);
var state_14135__$1 = (function (){var statearr_14159 = state_14135;
(statearr_14159[(10)] = inst_14090__$1);

return statearr_14159;
})();
if(inst_14090__$1){
var statearr_14160_14206 = state_14135__$1;
(statearr_14160_14206[(1)] = (13));

} else {
var statearr_14161_14207 = state_14135__$1;
(statearr_14161_14207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (9))){
var inst_14112 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14162_14208 = state_14135__$1;
(statearr_14162_14208[(2)] = inst_14112);

(statearr_14162_14208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (5))){
var inst_14073 = cljs.core.deref.call(null,mults);
var inst_14074 = cljs.core.vals.call(null,inst_14073);
var inst_14075 = cljs.core.seq.call(null,inst_14074);
var inst_14076 = inst_14075;
var inst_14077 = null;
var inst_14078 = (0);
var inst_14079 = (0);
var state_14135__$1 = (function (){var statearr_14163 = state_14135;
(statearr_14163[(13)] = inst_14078);

(statearr_14163[(14)] = inst_14076);

(statearr_14163[(15)] = inst_14079);

(statearr_14163[(16)] = inst_14077);

return statearr_14163;
})();
var statearr_14164_14209 = state_14135__$1;
(statearr_14164_14209[(2)] = null);

(statearr_14164_14209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (14))){
var state_14135__$1 = state_14135;
var statearr_14168_14210 = state_14135__$1;
(statearr_14168_14210[(2)] = null);

(statearr_14168_14210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (16))){
var inst_14090 = (state_14135[(10)]);
var inst_14094 = cljs.core.chunk_first.call(null,inst_14090);
var inst_14095 = cljs.core.chunk_rest.call(null,inst_14090);
var inst_14096 = cljs.core.count.call(null,inst_14094);
var inst_14076 = inst_14095;
var inst_14077 = inst_14094;
var inst_14078 = inst_14096;
var inst_14079 = (0);
var state_14135__$1 = (function (){var statearr_14169 = state_14135;
(statearr_14169[(13)] = inst_14078);

(statearr_14169[(14)] = inst_14076);

(statearr_14169[(15)] = inst_14079);

(statearr_14169[(16)] = inst_14077);

return statearr_14169;
})();
var statearr_14170_14211 = state_14135__$1;
(statearr_14170_14211[(2)] = null);

(statearr_14170_14211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (10))){
var inst_14078 = (state_14135[(13)]);
var inst_14076 = (state_14135[(14)]);
var inst_14079 = (state_14135[(15)]);
var inst_14077 = (state_14135[(16)]);
var inst_14084 = cljs.core._nth.call(null,inst_14077,inst_14079);
var inst_14085 = cljs.core.async.muxch_STAR_.call(null,inst_14084);
var inst_14086 = cljs.core.async.close_BANG_.call(null,inst_14085);
var inst_14087 = (inst_14079 + (1));
var tmp14165 = inst_14078;
var tmp14166 = inst_14076;
var tmp14167 = inst_14077;
var inst_14076__$1 = tmp14166;
var inst_14077__$1 = tmp14167;
var inst_14078__$1 = tmp14165;
var inst_14079__$1 = inst_14087;
var state_14135__$1 = (function (){var statearr_14171 = state_14135;
(statearr_14171[(13)] = inst_14078__$1);

(statearr_14171[(17)] = inst_14086);

(statearr_14171[(14)] = inst_14076__$1);

(statearr_14171[(15)] = inst_14079__$1);

(statearr_14171[(16)] = inst_14077__$1);

return statearr_14171;
})();
var statearr_14172_14212 = state_14135__$1;
(statearr_14172_14212[(2)] = null);

(statearr_14172_14212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (18))){
var inst_14105 = (state_14135[(2)]);
var state_14135__$1 = state_14135;
var statearr_14173_14213 = state_14135__$1;
(statearr_14173_14213[(2)] = inst_14105);

(statearr_14173_14213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14136 === (8))){
var inst_14078 = (state_14135[(13)]);
var inst_14079 = (state_14135[(15)]);
var inst_14081 = (inst_14079 < inst_14078);
var inst_14082 = inst_14081;
var state_14135__$1 = state_14135;
if(cljs.core.truth_(inst_14082)){
var statearr_14174_14214 = state_14135__$1;
(statearr_14174_14214[(1)] = (10));

} else {
var statearr_14175_14215 = state_14135__$1;
(statearr_14175_14215[(1)] = (11));

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
});})(c__12288__auto___14187,mults,ensure_mult,p))
;
return ((function (switch__12223__auto__,c__12288__auto___14187,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_14179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14179[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_14179[(1)] = (1));

return statearr_14179;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_14135){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14180){if((e14180 instanceof Object)){
var ex__12227__auto__ = e14180;
var statearr_14181_14216 = state_14135;
(statearr_14181_14216[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14217 = state_14135;
state_14135 = G__14217;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_14135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_14135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14187,mults,ensure_mult,p))
})();
var state__12290__auto__ = (function (){var statearr_14182 = f__12289__auto__.call(null);
(statearr_14182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14187);

return statearr_14182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14187,mults,ensure_mult,p))
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
var args14218 = [];
var len__5818__auto___14221 = arguments.length;
var i__5819__auto___14222 = (0);
while(true){
if((i__5819__auto___14222 < len__5818__auto___14221)){
args14218.push((arguments[i__5819__auto___14222]));

var G__14223 = (i__5819__auto___14222 + (1));
i__5819__auto___14222 = G__14223;
continue;
} else {
}
break;
}

var G__14220 = args14218.length;
switch (G__14220) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14218.length)].join('')));

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
var args14225 = [];
var len__5818__auto___14228 = arguments.length;
var i__5819__auto___14229 = (0);
while(true){
if((i__5819__auto___14229 < len__5818__auto___14228)){
args14225.push((arguments[i__5819__auto___14229]));

var G__14230 = (i__5819__auto___14229 + (1));
i__5819__auto___14229 = G__14230;
continue;
} else {
}
break;
}

var G__14227 = args14225.length;
switch (G__14227) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14225.length)].join('')));

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
var args14232 = [];
var len__5818__auto___14303 = arguments.length;
var i__5819__auto___14304 = (0);
while(true){
if((i__5819__auto___14304 < len__5818__auto___14303)){
args14232.push((arguments[i__5819__auto___14304]));

var G__14305 = (i__5819__auto___14304 + (1));
i__5819__auto___14304 = G__14305;
continue;
} else {
}
break;
}

var G__14234 = args14232.length;
switch (G__14234) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14232.length)].join('')));

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
var c__12288__auto___14307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14273){
var state_val_14274 = (state_14273[(1)]);
if((state_val_14274 === (7))){
var state_14273__$1 = state_14273;
var statearr_14275_14308 = state_14273__$1;
(statearr_14275_14308[(2)] = null);

(statearr_14275_14308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (1))){
var state_14273__$1 = state_14273;
var statearr_14276_14309 = state_14273__$1;
(statearr_14276_14309[(2)] = null);

(statearr_14276_14309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (4))){
var inst_14237 = (state_14273[(7)]);
var inst_14239 = (inst_14237 < cnt);
var state_14273__$1 = state_14273;
if(cljs.core.truth_(inst_14239)){
var statearr_14277_14310 = state_14273__$1;
(statearr_14277_14310[(1)] = (6));

} else {
var statearr_14278_14311 = state_14273__$1;
(statearr_14278_14311[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (15))){
var inst_14269 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14279_14312 = state_14273__$1;
(statearr_14279_14312[(2)] = inst_14269);

(statearr_14279_14312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (13))){
var inst_14262 = cljs.core.async.close_BANG_.call(null,out);
var state_14273__$1 = state_14273;
var statearr_14280_14313 = state_14273__$1;
(statearr_14280_14313[(2)] = inst_14262);

(statearr_14280_14313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (6))){
var state_14273__$1 = state_14273;
var statearr_14281_14314 = state_14273__$1;
(statearr_14281_14314[(2)] = null);

(statearr_14281_14314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (3))){
var inst_14271 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14273__$1,inst_14271);
} else {
if((state_val_14274 === (12))){
var inst_14259 = (state_14273[(8)]);
var inst_14259__$1 = (state_14273[(2)]);
var inst_14260 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14259__$1);
var state_14273__$1 = (function (){var statearr_14282 = state_14273;
(statearr_14282[(8)] = inst_14259__$1);

return statearr_14282;
})();
if(cljs.core.truth_(inst_14260)){
var statearr_14283_14315 = state_14273__$1;
(statearr_14283_14315[(1)] = (13));

} else {
var statearr_14284_14316 = state_14273__$1;
(statearr_14284_14316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (2))){
var inst_14236 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14237 = (0);
var state_14273__$1 = (function (){var statearr_14285 = state_14273;
(statearr_14285[(7)] = inst_14237);

(statearr_14285[(9)] = inst_14236);

return statearr_14285;
})();
var statearr_14286_14317 = state_14273__$1;
(statearr_14286_14317[(2)] = null);

(statearr_14286_14317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (11))){
var inst_14237 = (state_14273[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14273,(10),Object,null,(9));
var inst_14246 = chs__$1.call(null,inst_14237);
var inst_14247 = done.call(null,inst_14237);
var inst_14248 = cljs.core.async.take_BANG_.call(null,inst_14246,inst_14247);
var state_14273__$1 = state_14273;
var statearr_14287_14318 = state_14273__$1;
(statearr_14287_14318[(2)] = inst_14248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (9))){
var inst_14237 = (state_14273[(7)]);
var inst_14250 = (state_14273[(2)]);
var inst_14251 = (inst_14237 + (1));
var inst_14237__$1 = inst_14251;
var state_14273__$1 = (function (){var statearr_14288 = state_14273;
(statearr_14288[(7)] = inst_14237__$1);

(statearr_14288[(10)] = inst_14250);

return statearr_14288;
})();
var statearr_14289_14319 = state_14273__$1;
(statearr_14289_14319[(2)] = null);

(statearr_14289_14319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (5))){
var inst_14257 = (state_14273[(2)]);
var state_14273__$1 = (function (){var statearr_14290 = state_14273;
(statearr_14290[(11)] = inst_14257);

return statearr_14290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14273__$1,(12),dchan);
} else {
if((state_val_14274 === (14))){
var inst_14259 = (state_14273[(8)]);
var inst_14264 = cljs.core.apply.call(null,f,inst_14259);
var state_14273__$1 = state_14273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14273__$1,(16),out,inst_14264);
} else {
if((state_val_14274 === (16))){
var inst_14266 = (state_14273[(2)]);
var state_14273__$1 = (function (){var statearr_14291 = state_14273;
(statearr_14291[(12)] = inst_14266);

return statearr_14291;
})();
var statearr_14292_14320 = state_14273__$1;
(statearr_14292_14320[(2)] = null);

(statearr_14292_14320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (10))){
var inst_14241 = (state_14273[(2)]);
var inst_14242 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14273__$1 = (function (){var statearr_14293 = state_14273;
(statearr_14293[(13)] = inst_14241);

return statearr_14293;
})();
var statearr_14294_14321 = state_14273__$1;
(statearr_14294_14321[(2)] = inst_14242);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14274 === (8))){
var inst_14255 = (state_14273[(2)]);
var state_14273__$1 = state_14273;
var statearr_14295_14322 = state_14273__$1;
(statearr_14295_14322[(2)] = inst_14255);

(statearr_14295_14322[(1)] = (5));


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
});})(c__12288__auto___14307,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12223__auto__,c__12288__auto___14307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_14299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14299[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_14299[(1)] = (1));

return statearr_14299;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_14273){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14300){if((e14300 instanceof Object)){
var ex__12227__auto__ = e14300;
var statearr_14301_14323 = state_14273;
(statearr_14301_14323[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14324 = state_14273;
state_14273 = G__14324;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_14273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_14273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14307,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12290__auto__ = (function (){var statearr_14302 = f__12289__auto__.call(null);
(statearr_14302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14307);

return statearr_14302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14307,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args14326 = [];
var len__5818__auto___14382 = arguments.length;
var i__5819__auto___14383 = (0);
while(true){
if((i__5819__auto___14383 < len__5818__auto___14382)){
args14326.push((arguments[i__5819__auto___14383]));

var G__14384 = (i__5819__auto___14383 + (1));
i__5819__auto___14383 = G__14384;
continue;
} else {
}
break;
}

var G__14328 = args14326.length;
switch (G__14328) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14326.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12288__auto___14386 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14386,out){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14386,out){
return (function (state_14358){
var state_val_14359 = (state_14358[(1)]);
if((state_val_14359 === (7))){
var inst_14337 = (state_14358[(7)]);
var inst_14338 = (state_14358[(8)]);
var inst_14337__$1 = (state_14358[(2)]);
var inst_14338__$1 = cljs.core.nth.call(null,inst_14337__$1,(0),null);
var inst_14339 = cljs.core.nth.call(null,inst_14337__$1,(1),null);
var inst_14340 = (inst_14338__$1 == null);
var state_14358__$1 = (function (){var statearr_14360 = state_14358;
(statearr_14360[(7)] = inst_14337__$1);

(statearr_14360[(9)] = inst_14339);

(statearr_14360[(8)] = inst_14338__$1);

return statearr_14360;
})();
if(cljs.core.truth_(inst_14340)){
var statearr_14361_14387 = state_14358__$1;
(statearr_14361_14387[(1)] = (8));

} else {
var statearr_14362_14388 = state_14358__$1;
(statearr_14362_14388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (1))){
var inst_14329 = cljs.core.vec.call(null,chs);
var inst_14330 = inst_14329;
var state_14358__$1 = (function (){var statearr_14363 = state_14358;
(statearr_14363[(10)] = inst_14330);

return statearr_14363;
})();
var statearr_14364_14389 = state_14358__$1;
(statearr_14364_14389[(2)] = null);

(statearr_14364_14389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (4))){
var inst_14330 = (state_14358[(10)]);
var state_14358__$1 = state_14358;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14358__$1,(7),inst_14330);
} else {
if((state_val_14359 === (6))){
var inst_14354 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14365_14390 = state_14358__$1;
(statearr_14365_14390[(2)] = inst_14354);

(statearr_14365_14390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (3))){
var inst_14356 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14358__$1,inst_14356);
} else {
if((state_val_14359 === (2))){
var inst_14330 = (state_14358[(10)]);
var inst_14332 = cljs.core.count.call(null,inst_14330);
var inst_14333 = (inst_14332 > (0));
var state_14358__$1 = state_14358;
if(cljs.core.truth_(inst_14333)){
var statearr_14367_14391 = state_14358__$1;
(statearr_14367_14391[(1)] = (4));

} else {
var statearr_14368_14392 = state_14358__$1;
(statearr_14368_14392[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (11))){
var inst_14330 = (state_14358[(10)]);
var inst_14347 = (state_14358[(2)]);
var tmp14366 = inst_14330;
var inst_14330__$1 = tmp14366;
var state_14358__$1 = (function (){var statearr_14369 = state_14358;
(statearr_14369[(10)] = inst_14330__$1);

(statearr_14369[(11)] = inst_14347);

return statearr_14369;
})();
var statearr_14370_14393 = state_14358__$1;
(statearr_14370_14393[(2)] = null);

(statearr_14370_14393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (9))){
var inst_14338 = (state_14358[(8)]);
var state_14358__$1 = state_14358;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14358__$1,(11),out,inst_14338);
} else {
if((state_val_14359 === (5))){
var inst_14352 = cljs.core.async.close_BANG_.call(null,out);
var state_14358__$1 = state_14358;
var statearr_14371_14394 = state_14358__$1;
(statearr_14371_14394[(2)] = inst_14352);

(statearr_14371_14394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (10))){
var inst_14350 = (state_14358[(2)]);
var state_14358__$1 = state_14358;
var statearr_14372_14395 = state_14358__$1;
(statearr_14372_14395[(2)] = inst_14350);

(statearr_14372_14395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14359 === (8))){
var inst_14330 = (state_14358[(10)]);
var inst_14337 = (state_14358[(7)]);
var inst_14339 = (state_14358[(9)]);
var inst_14338 = (state_14358[(8)]);
var inst_14342 = (function (){var cs = inst_14330;
var vec__14335 = inst_14337;
var v = inst_14338;
var c = inst_14339;
return ((function (cs,vec__14335,v,c,inst_14330,inst_14337,inst_14339,inst_14338,state_val_14359,c__12288__auto___14386,out){
return (function (p1__14325_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14325_SHARP_);
});
;})(cs,vec__14335,v,c,inst_14330,inst_14337,inst_14339,inst_14338,state_val_14359,c__12288__auto___14386,out))
})();
var inst_14343 = cljs.core.filterv.call(null,inst_14342,inst_14330);
var inst_14330__$1 = inst_14343;
var state_14358__$1 = (function (){var statearr_14373 = state_14358;
(statearr_14373[(10)] = inst_14330__$1);

return statearr_14373;
})();
var statearr_14374_14396 = state_14358__$1;
(statearr_14374_14396[(2)] = null);

(statearr_14374_14396[(1)] = (2));


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
});})(c__12288__auto___14386,out))
;
return ((function (switch__12223__auto__,c__12288__auto___14386,out){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_14378 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14378[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_14378[(1)] = (1));

return statearr_14378;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_14358){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14358);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14379){if((e14379 instanceof Object)){
var ex__12227__auto__ = e14379;
var statearr_14380_14397 = state_14358;
(statearr_14380_14397[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14358);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14398 = state_14358;
state_14358 = G__14398;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_14358){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_14358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14386,out))
})();
var state__12290__auto__ = (function (){var statearr_14381 = f__12289__auto__.call(null);
(statearr_14381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14386);

return statearr_14381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14386,out))
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
var args14399 = [];
var len__5818__auto___14448 = arguments.length;
var i__5819__auto___14449 = (0);
while(true){
if((i__5819__auto___14449 < len__5818__auto___14448)){
args14399.push((arguments[i__5819__auto___14449]));

var G__14450 = (i__5819__auto___14449 + (1));
i__5819__auto___14449 = G__14450;
continue;
} else {
}
break;
}

var G__14401 = args14399.length;
switch (G__14401) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14399.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12288__auto___14452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14452,out){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14452,out){
return (function (state_14425){
var state_val_14426 = (state_14425[(1)]);
if((state_val_14426 === (7))){
var inst_14407 = (state_14425[(7)]);
var inst_14407__$1 = (state_14425[(2)]);
var inst_14408 = (inst_14407__$1 == null);
var inst_14409 = cljs.core.not.call(null,inst_14408);
var state_14425__$1 = (function (){var statearr_14427 = state_14425;
(statearr_14427[(7)] = inst_14407__$1);

return statearr_14427;
})();
if(inst_14409){
var statearr_14428_14453 = state_14425__$1;
(statearr_14428_14453[(1)] = (8));

} else {
var statearr_14429_14454 = state_14425__$1;
(statearr_14429_14454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (1))){
var inst_14402 = (0);
var state_14425__$1 = (function (){var statearr_14430 = state_14425;
(statearr_14430[(8)] = inst_14402);

return statearr_14430;
})();
var statearr_14431_14455 = state_14425__$1;
(statearr_14431_14455[(2)] = null);

(statearr_14431_14455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (4))){
var state_14425__$1 = state_14425;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14425__$1,(7),ch);
} else {
if((state_val_14426 === (6))){
var inst_14420 = (state_14425[(2)]);
var state_14425__$1 = state_14425;
var statearr_14432_14456 = state_14425__$1;
(statearr_14432_14456[(2)] = inst_14420);

(statearr_14432_14456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (3))){
var inst_14422 = (state_14425[(2)]);
var inst_14423 = cljs.core.async.close_BANG_.call(null,out);
var state_14425__$1 = (function (){var statearr_14433 = state_14425;
(statearr_14433[(9)] = inst_14422);

return statearr_14433;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14425__$1,inst_14423);
} else {
if((state_val_14426 === (2))){
var inst_14402 = (state_14425[(8)]);
var inst_14404 = (inst_14402 < n);
var state_14425__$1 = state_14425;
if(cljs.core.truth_(inst_14404)){
var statearr_14434_14457 = state_14425__$1;
(statearr_14434_14457[(1)] = (4));

} else {
var statearr_14435_14458 = state_14425__$1;
(statearr_14435_14458[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (11))){
var inst_14402 = (state_14425[(8)]);
var inst_14412 = (state_14425[(2)]);
var inst_14413 = (inst_14402 + (1));
var inst_14402__$1 = inst_14413;
var state_14425__$1 = (function (){var statearr_14436 = state_14425;
(statearr_14436[(8)] = inst_14402__$1);

(statearr_14436[(10)] = inst_14412);

return statearr_14436;
})();
var statearr_14437_14459 = state_14425__$1;
(statearr_14437_14459[(2)] = null);

(statearr_14437_14459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (9))){
var state_14425__$1 = state_14425;
var statearr_14438_14460 = state_14425__$1;
(statearr_14438_14460[(2)] = null);

(statearr_14438_14460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (5))){
var state_14425__$1 = state_14425;
var statearr_14439_14461 = state_14425__$1;
(statearr_14439_14461[(2)] = null);

(statearr_14439_14461[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (10))){
var inst_14417 = (state_14425[(2)]);
var state_14425__$1 = state_14425;
var statearr_14440_14462 = state_14425__$1;
(statearr_14440_14462[(2)] = inst_14417);

(statearr_14440_14462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14426 === (8))){
var inst_14407 = (state_14425[(7)]);
var state_14425__$1 = state_14425;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14425__$1,(11),out,inst_14407);
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
});})(c__12288__auto___14452,out))
;
return ((function (switch__12223__auto__,c__12288__auto___14452,out){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_14444 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14444[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_14444[(1)] = (1));

return statearr_14444;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_14425){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14425);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14445){if((e14445 instanceof Object)){
var ex__12227__auto__ = e14445;
var statearr_14446_14463 = state_14425;
(statearr_14446_14463[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14464 = state_14425;
state_14425 = G__14464;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_14425){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_14425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14452,out))
})();
var state__12290__auto__ = (function (){var statearr_14447 = f__12289__auto__.call(null);
(statearr_14447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14452);

return statearr_14447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14452,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14472 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14472 = (function (map_LT_,f,ch,meta14473){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14473 = meta14473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14474,meta14473__$1){
var self__ = this;
var _14474__$1 = this;
return (new cljs.core.async.t_cljs$core$async14472(self__.map_LT_,self__.f,self__.ch,meta14473__$1));
});

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14474){
var self__ = this;
var _14474__$1 = this;
return self__.meta14473;
});

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async14475 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14475 = (function (map_LT_,f,ch,meta14473,_,fn1,meta14476){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta14473 = meta14473;
this._ = _;
this.fn1 = fn1;
this.meta14476 = meta14476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14477,meta14476__$1){
var self__ = this;
var _14477__$1 = this;
return (new cljs.core.async.t_cljs$core$async14475(self__.map_LT_,self__.f,self__.ch,self__.meta14473,self__._,self__.fn1,meta14476__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14475.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14477){
var self__ = this;
var _14477__$1 = this;
return self__.meta14476;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14475.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14465_SHARP_){
return f1.call(null,(((p1__14465_SHARP_ == null))?null:self__.f.call(null,p1__14465_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14475.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14473","meta14473",-727312939,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14472","cljs.core.async/t_cljs$core$async14472",-1350622594,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14476","meta14476",-1816855907,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14475.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14475";

cljs.core.async.t_cljs$core$async14475.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async14475");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async14475 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14475(map_LT___$1,f__$1,ch__$1,meta14473__$1,___$2,fn1__$1,meta14476){
return (new cljs.core.async.t_cljs$core$async14475(map_LT___$1,f__$1,ch__$1,meta14473__$1,___$2,fn1__$1,meta14476));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14475(self__.map_LT_,self__.f,self__.ch,self__.meta14473,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4748__auto__ = ret;
if(cljs.core.truth_(and__4748__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4748__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14473","meta14473",-727312939,null)], null);
});

cljs.core.async.t_cljs$core$async14472.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14472";

cljs.core.async.t_cljs$core$async14472.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async14472");
});

cljs.core.async.__GT_t_cljs$core$async14472 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14472(map_LT___$1,f__$1,ch__$1,meta14473){
return (new cljs.core.async.t_cljs$core$async14472(map_LT___$1,f__$1,ch__$1,meta14473));
});

}

return (new cljs.core.async.t_cljs$core$async14472(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async14481 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14481 = (function (map_GT_,f,ch,meta14482){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta14482 = meta14482;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14483,meta14482__$1){
var self__ = this;
var _14483__$1 = this;
return (new cljs.core.async.t_cljs$core$async14481(self__.map_GT_,self__.f,self__.ch,meta14482__$1));
});

cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14483){
var self__ = this;
var _14483__$1 = this;
return self__.meta14482;
});

cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14481.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14481.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14482","meta14482",2105235203,null)], null);
});

cljs.core.async.t_cljs$core$async14481.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14481.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14481";

cljs.core.async.t_cljs$core$async14481.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async14481");
});

cljs.core.async.__GT_t_cljs$core$async14481 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14481(map_GT___$1,f__$1,ch__$1,meta14482){
return (new cljs.core.async.t_cljs$core$async14481(map_GT___$1,f__$1,ch__$1,meta14482));
});

}

return (new cljs.core.async.t_cljs$core$async14481(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async14487 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14487 = (function (filter_GT_,p,ch,meta14488){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta14488 = meta14488;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14489,meta14488__$1){
var self__ = this;
var _14489__$1 = this;
return (new cljs.core.async.t_cljs$core$async14487(self__.filter_GT_,self__.p,self__.ch,meta14488__$1));
});

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14489){
var self__ = this;
var _14489__$1 = this;
return self__.meta14488;
});

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async14487.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14487.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14488","meta14488",759177125,null)], null);
});

cljs.core.async.t_cljs$core$async14487.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14487.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14487";

cljs.core.async.t_cljs$core$async14487.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cljs.core.async/t_cljs$core$async14487");
});

cljs.core.async.__GT_t_cljs$core$async14487 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14487(filter_GT___$1,p__$1,ch__$1,meta14488){
return (new cljs.core.async.t_cljs$core$async14487(filter_GT___$1,p__$1,ch__$1,meta14488));
});

}

return (new cljs.core.async.t_cljs$core$async14487(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args14490 = [];
var len__5818__auto___14534 = arguments.length;
var i__5819__auto___14535 = (0);
while(true){
if((i__5819__auto___14535 < len__5818__auto___14534)){
args14490.push((arguments[i__5819__auto___14535]));

var G__14536 = (i__5819__auto___14535 + (1));
i__5819__auto___14535 = G__14536;
continue;
} else {
}
break;
}

var G__14492 = args14490.length;
switch (G__14492) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14490.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12288__auto___14538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14538,out){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14538,out){
return (function (state_14513){
var state_val_14514 = (state_14513[(1)]);
if((state_val_14514 === (7))){
var inst_14509 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
var statearr_14515_14539 = state_14513__$1;
(statearr_14515_14539[(2)] = inst_14509);

(statearr_14515_14539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (1))){
var state_14513__$1 = state_14513;
var statearr_14516_14540 = state_14513__$1;
(statearr_14516_14540[(2)] = null);

(statearr_14516_14540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (4))){
var inst_14495 = (state_14513[(7)]);
var inst_14495__$1 = (state_14513[(2)]);
var inst_14496 = (inst_14495__$1 == null);
var state_14513__$1 = (function (){var statearr_14517 = state_14513;
(statearr_14517[(7)] = inst_14495__$1);

return statearr_14517;
})();
if(cljs.core.truth_(inst_14496)){
var statearr_14518_14541 = state_14513__$1;
(statearr_14518_14541[(1)] = (5));

} else {
var statearr_14519_14542 = state_14513__$1;
(statearr_14519_14542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (6))){
var inst_14495 = (state_14513[(7)]);
var inst_14500 = p.call(null,inst_14495);
var state_14513__$1 = state_14513;
if(cljs.core.truth_(inst_14500)){
var statearr_14520_14543 = state_14513__$1;
(statearr_14520_14543[(1)] = (8));

} else {
var statearr_14521_14544 = state_14513__$1;
(statearr_14521_14544[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (3))){
var inst_14511 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14513__$1,inst_14511);
} else {
if((state_val_14514 === (2))){
var state_14513__$1 = state_14513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14513__$1,(4),ch);
} else {
if((state_val_14514 === (11))){
var inst_14503 = (state_14513[(2)]);
var state_14513__$1 = state_14513;
var statearr_14522_14545 = state_14513__$1;
(statearr_14522_14545[(2)] = inst_14503);

(statearr_14522_14545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (9))){
var state_14513__$1 = state_14513;
var statearr_14523_14546 = state_14513__$1;
(statearr_14523_14546[(2)] = null);

(statearr_14523_14546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (5))){
var inst_14498 = cljs.core.async.close_BANG_.call(null,out);
var state_14513__$1 = state_14513;
var statearr_14524_14547 = state_14513__$1;
(statearr_14524_14547[(2)] = inst_14498);

(statearr_14524_14547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (10))){
var inst_14506 = (state_14513[(2)]);
var state_14513__$1 = (function (){var statearr_14525 = state_14513;
(statearr_14525[(8)] = inst_14506);

return statearr_14525;
})();
var statearr_14526_14548 = state_14513__$1;
(statearr_14526_14548[(2)] = null);

(statearr_14526_14548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14514 === (8))){
var inst_14495 = (state_14513[(7)]);
var state_14513__$1 = state_14513;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14513__$1,(11),out,inst_14495);
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
});})(c__12288__auto___14538,out))
;
return ((function (switch__12223__auto__,c__12288__auto___14538,out){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_14530 = [null,null,null,null,null,null,null,null,null];
(statearr_14530[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_14530[(1)] = (1));

return statearr_14530;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_14513){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14531){if((e14531 instanceof Object)){
var ex__12227__auto__ = e14531;
var statearr_14532_14549 = state_14513;
(statearr_14532_14549[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14550 = state_14513;
state_14513 = G__14550;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_14513){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_14513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14538,out))
})();
var state__12290__auto__ = (function (){var statearr_14533 = f__12289__auto__.call(null);
(statearr_14533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14538);

return statearr_14533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14538,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args14551 = [];
var len__5818__auto___14554 = arguments.length;
var i__5819__auto___14555 = (0);
while(true){
if((i__5819__auto___14555 < len__5818__auto___14554)){
args14551.push((arguments[i__5819__auto___14555]));

var G__14556 = (i__5819__auto___14555 + (1));
i__5819__auto___14555 = G__14556;
continue;
} else {
}
break;
}

var G__14553 = args14551.length;
switch (G__14553) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14551.length)].join('')));

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
var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto__){
return (function (state_14723){
var state_val_14724 = (state_14723[(1)]);
if((state_val_14724 === (7))){
var inst_14719 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14725_14766 = state_14723__$1;
(statearr_14725_14766[(2)] = inst_14719);

(statearr_14725_14766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (20))){
var inst_14689 = (state_14723[(7)]);
var inst_14700 = (state_14723[(2)]);
var inst_14701 = cljs.core.next.call(null,inst_14689);
var inst_14675 = inst_14701;
var inst_14676 = null;
var inst_14677 = (0);
var inst_14678 = (0);
var state_14723__$1 = (function (){var statearr_14726 = state_14723;
(statearr_14726[(8)] = inst_14675);

(statearr_14726[(9)] = inst_14700);

(statearr_14726[(10)] = inst_14677);

(statearr_14726[(11)] = inst_14678);

(statearr_14726[(12)] = inst_14676);

return statearr_14726;
})();
var statearr_14727_14767 = state_14723__$1;
(statearr_14727_14767[(2)] = null);

(statearr_14727_14767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (1))){
var state_14723__$1 = state_14723;
var statearr_14728_14768 = state_14723__$1;
(statearr_14728_14768[(2)] = null);

(statearr_14728_14768[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (4))){
var inst_14664 = (state_14723[(13)]);
var inst_14664__$1 = (state_14723[(2)]);
var inst_14665 = (inst_14664__$1 == null);
var state_14723__$1 = (function (){var statearr_14729 = state_14723;
(statearr_14729[(13)] = inst_14664__$1);

return statearr_14729;
})();
if(cljs.core.truth_(inst_14665)){
var statearr_14730_14769 = state_14723__$1;
(statearr_14730_14769[(1)] = (5));

} else {
var statearr_14731_14770 = state_14723__$1;
(statearr_14731_14770[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (15))){
var state_14723__$1 = state_14723;
var statearr_14735_14771 = state_14723__$1;
(statearr_14735_14771[(2)] = null);

(statearr_14735_14771[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (21))){
var state_14723__$1 = state_14723;
var statearr_14736_14772 = state_14723__$1;
(statearr_14736_14772[(2)] = null);

(statearr_14736_14772[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (13))){
var inst_14675 = (state_14723[(8)]);
var inst_14677 = (state_14723[(10)]);
var inst_14678 = (state_14723[(11)]);
var inst_14676 = (state_14723[(12)]);
var inst_14685 = (state_14723[(2)]);
var inst_14686 = (inst_14678 + (1));
var tmp14732 = inst_14675;
var tmp14733 = inst_14677;
var tmp14734 = inst_14676;
var inst_14675__$1 = tmp14732;
var inst_14676__$1 = tmp14734;
var inst_14677__$1 = tmp14733;
var inst_14678__$1 = inst_14686;
var state_14723__$1 = (function (){var statearr_14737 = state_14723;
(statearr_14737[(8)] = inst_14675__$1);

(statearr_14737[(10)] = inst_14677__$1);

(statearr_14737[(11)] = inst_14678__$1);

(statearr_14737[(12)] = inst_14676__$1);

(statearr_14737[(14)] = inst_14685);

return statearr_14737;
})();
var statearr_14738_14773 = state_14723__$1;
(statearr_14738_14773[(2)] = null);

(statearr_14738_14773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (22))){
var state_14723__$1 = state_14723;
var statearr_14739_14774 = state_14723__$1;
(statearr_14739_14774[(2)] = null);

(statearr_14739_14774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (6))){
var inst_14664 = (state_14723[(13)]);
var inst_14673 = f.call(null,inst_14664);
var inst_14674 = cljs.core.seq.call(null,inst_14673);
var inst_14675 = inst_14674;
var inst_14676 = null;
var inst_14677 = (0);
var inst_14678 = (0);
var state_14723__$1 = (function (){var statearr_14740 = state_14723;
(statearr_14740[(8)] = inst_14675);

(statearr_14740[(10)] = inst_14677);

(statearr_14740[(11)] = inst_14678);

(statearr_14740[(12)] = inst_14676);

return statearr_14740;
})();
var statearr_14741_14775 = state_14723__$1;
(statearr_14741_14775[(2)] = null);

(statearr_14741_14775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (17))){
var inst_14689 = (state_14723[(7)]);
var inst_14693 = cljs.core.chunk_first.call(null,inst_14689);
var inst_14694 = cljs.core.chunk_rest.call(null,inst_14689);
var inst_14695 = cljs.core.count.call(null,inst_14693);
var inst_14675 = inst_14694;
var inst_14676 = inst_14693;
var inst_14677 = inst_14695;
var inst_14678 = (0);
var state_14723__$1 = (function (){var statearr_14742 = state_14723;
(statearr_14742[(8)] = inst_14675);

(statearr_14742[(10)] = inst_14677);

(statearr_14742[(11)] = inst_14678);

(statearr_14742[(12)] = inst_14676);

return statearr_14742;
})();
var statearr_14743_14776 = state_14723__$1;
(statearr_14743_14776[(2)] = null);

(statearr_14743_14776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (3))){
var inst_14721 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14723__$1,inst_14721);
} else {
if((state_val_14724 === (12))){
var inst_14709 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14744_14777 = state_14723__$1;
(statearr_14744_14777[(2)] = inst_14709);

(statearr_14744_14777[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (2))){
var state_14723__$1 = state_14723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14723__$1,(4),in$);
} else {
if((state_val_14724 === (23))){
var inst_14717 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14745_14778 = state_14723__$1;
(statearr_14745_14778[(2)] = inst_14717);

(statearr_14745_14778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (19))){
var inst_14704 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14746_14779 = state_14723__$1;
(statearr_14746_14779[(2)] = inst_14704);

(statearr_14746_14779[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (11))){
var inst_14675 = (state_14723[(8)]);
var inst_14689 = (state_14723[(7)]);
var inst_14689__$1 = cljs.core.seq.call(null,inst_14675);
var state_14723__$1 = (function (){var statearr_14747 = state_14723;
(statearr_14747[(7)] = inst_14689__$1);

return statearr_14747;
})();
if(inst_14689__$1){
var statearr_14748_14780 = state_14723__$1;
(statearr_14748_14780[(1)] = (14));

} else {
var statearr_14749_14781 = state_14723__$1;
(statearr_14749_14781[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (9))){
var inst_14711 = (state_14723[(2)]);
var inst_14712 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14723__$1 = (function (){var statearr_14750 = state_14723;
(statearr_14750[(15)] = inst_14711);

return statearr_14750;
})();
if(cljs.core.truth_(inst_14712)){
var statearr_14751_14782 = state_14723__$1;
(statearr_14751_14782[(1)] = (21));

} else {
var statearr_14752_14783 = state_14723__$1;
(statearr_14752_14783[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (5))){
var inst_14667 = cljs.core.async.close_BANG_.call(null,out);
var state_14723__$1 = state_14723;
var statearr_14753_14784 = state_14723__$1;
(statearr_14753_14784[(2)] = inst_14667);

(statearr_14753_14784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (14))){
var inst_14689 = (state_14723[(7)]);
var inst_14691 = cljs.core.chunked_seq_QMARK_.call(null,inst_14689);
var state_14723__$1 = state_14723;
if(inst_14691){
var statearr_14754_14785 = state_14723__$1;
(statearr_14754_14785[(1)] = (17));

} else {
var statearr_14755_14786 = state_14723__$1;
(statearr_14755_14786[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (16))){
var inst_14707 = (state_14723[(2)]);
var state_14723__$1 = state_14723;
var statearr_14756_14787 = state_14723__$1;
(statearr_14756_14787[(2)] = inst_14707);

(statearr_14756_14787[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14724 === (10))){
var inst_14678 = (state_14723[(11)]);
var inst_14676 = (state_14723[(12)]);
var inst_14683 = cljs.core._nth.call(null,inst_14676,inst_14678);
var state_14723__$1 = state_14723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14723__$1,(13),out,inst_14683);
} else {
if((state_val_14724 === (18))){
var inst_14689 = (state_14723[(7)]);
var inst_14698 = cljs.core.first.call(null,inst_14689);
var state_14723__$1 = state_14723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14723__$1,(20),out,inst_14698);
} else {
if((state_val_14724 === (8))){
var inst_14677 = (state_14723[(10)]);
var inst_14678 = (state_14723[(11)]);
var inst_14680 = (inst_14678 < inst_14677);
var inst_14681 = inst_14680;
var state_14723__$1 = state_14723;
if(cljs.core.truth_(inst_14681)){
var statearr_14757_14788 = state_14723__$1;
(statearr_14757_14788[(1)] = (10));

} else {
var statearr_14758_14789 = state_14723__$1;
(statearr_14758_14789[(1)] = (11));

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
});})(c__12288__auto__))
;
return ((function (switch__12223__auto__,c__12288__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12224__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12224__auto____0 = (function (){
var statearr_14762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14762[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12224__auto__);

(statearr_14762[(1)] = (1));

return statearr_14762;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12224__auto____1 = (function (state_14723){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14763){if((e14763 instanceof Object)){
var ex__12227__auto__ = e14763;
var statearr_14764_14790 = state_14723;
(statearr_14764_14790[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14791 = state_14723;
state_14723 = G__14791;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12224__auto__ = function(state_14723){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12224__auto____1.call(this,state_14723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12224__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12224__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto__))
})();
var state__12290__auto__ = (function (){var statearr_14765 = f__12289__auto__.call(null);
(statearr_14765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_14765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__))
);

return c__12288__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args14792 = [];
var len__5818__auto___14795 = arguments.length;
var i__5819__auto___14796 = (0);
while(true){
if((i__5819__auto___14796 < len__5818__auto___14795)){
args14792.push((arguments[i__5819__auto___14796]));

var G__14797 = (i__5819__auto___14796 + (1));
i__5819__auto___14796 = G__14797;
continue;
} else {
}
break;
}

var G__14794 = args14792.length;
switch (G__14794) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14792.length)].join('')));

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
var args14799 = [];
var len__5818__auto___14802 = arguments.length;
var i__5819__auto___14803 = (0);
while(true){
if((i__5819__auto___14803 < len__5818__auto___14802)){
args14799.push((arguments[i__5819__auto___14803]));

var G__14804 = (i__5819__auto___14803 + (1));
i__5819__auto___14803 = G__14804;
continue;
} else {
}
break;
}

var G__14801 = args14799.length;
switch (G__14801) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14799.length)].join('')));

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
var args14806 = [];
var len__5818__auto___14857 = arguments.length;
var i__5819__auto___14858 = (0);
while(true){
if((i__5819__auto___14858 < len__5818__auto___14857)){
args14806.push((arguments[i__5819__auto___14858]));

var G__14859 = (i__5819__auto___14858 + (1));
i__5819__auto___14858 = G__14859;
continue;
} else {
}
break;
}

var G__14808 = args14806.length;
switch (G__14808) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14806.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12288__auto___14861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14861,out){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14861,out){
return (function (state_14832){
var state_val_14833 = (state_14832[(1)]);
if((state_val_14833 === (7))){
var inst_14827 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14834_14862 = state_14832__$1;
(statearr_14834_14862[(2)] = inst_14827);

(statearr_14834_14862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (1))){
var inst_14809 = null;
var state_14832__$1 = (function (){var statearr_14835 = state_14832;
(statearr_14835[(7)] = inst_14809);

return statearr_14835;
})();
var statearr_14836_14863 = state_14832__$1;
(statearr_14836_14863[(2)] = null);

(statearr_14836_14863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (4))){
var inst_14812 = (state_14832[(8)]);
var inst_14812__$1 = (state_14832[(2)]);
var inst_14813 = (inst_14812__$1 == null);
var inst_14814 = cljs.core.not.call(null,inst_14813);
var state_14832__$1 = (function (){var statearr_14837 = state_14832;
(statearr_14837[(8)] = inst_14812__$1);

return statearr_14837;
})();
if(inst_14814){
var statearr_14838_14864 = state_14832__$1;
(statearr_14838_14864[(1)] = (5));

} else {
var statearr_14839_14865 = state_14832__$1;
(statearr_14839_14865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (6))){
var state_14832__$1 = state_14832;
var statearr_14840_14866 = state_14832__$1;
(statearr_14840_14866[(2)] = null);

(statearr_14840_14866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (3))){
var inst_14829 = (state_14832[(2)]);
var inst_14830 = cljs.core.async.close_BANG_.call(null,out);
var state_14832__$1 = (function (){var statearr_14841 = state_14832;
(statearr_14841[(9)] = inst_14829);

return statearr_14841;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14832__$1,inst_14830);
} else {
if((state_val_14833 === (2))){
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14832__$1,(4),ch);
} else {
if((state_val_14833 === (11))){
var inst_14812 = (state_14832[(8)]);
var inst_14821 = (state_14832[(2)]);
var inst_14809 = inst_14812;
var state_14832__$1 = (function (){var statearr_14842 = state_14832;
(statearr_14842[(7)] = inst_14809);

(statearr_14842[(10)] = inst_14821);

return statearr_14842;
})();
var statearr_14843_14867 = state_14832__$1;
(statearr_14843_14867[(2)] = null);

(statearr_14843_14867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (9))){
var inst_14812 = (state_14832[(8)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14832__$1,(11),out,inst_14812);
} else {
if((state_val_14833 === (5))){
var inst_14809 = (state_14832[(7)]);
var inst_14812 = (state_14832[(8)]);
var inst_14816 = cljs.core._EQ_.call(null,inst_14812,inst_14809);
var state_14832__$1 = state_14832;
if(inst_14816){
var statearr_14845_14868 = state_14832__$1;
(statearr_14845_14868[(1)] = (8));

} else {
var statearr_14846_14869 = state_14832__$1;
(statearr_14846_14869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (10))){
var inst_14824 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14847_14870 = state_14832__$1;
(statearr_14847_14870[(2)] = inst_14824);

(statearr_14847_14870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (8))){
var inst_14809 = (state_14832[(7)]);
var tmp14844 = inst_14809;
var inst_14809__$1 = tmp14844;
var state_14832__$1 = (function (){var statearr_14848 = state_14832;
(statearr_14848[(7)] = inst_14809__$1);

return statearr_14848;
})();
var statearr_14849_14871 = state_14832__$1;
(statearr_14849_14871[(2)] = null);

(statearr_14849_14871[(1)] = (2));


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
});})(c__12288__auto___14861,out))
;
return ((function (switch__12223__auto__,c__12288__auto___14861,out){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_14853 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14853[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_14853[(1)] = (1));

return statearr_14853;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_14832){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14854){if((e14854 instanceof Object)){
var ex__12227__auto__ = e14854;
var statearr_14855_14872 = state_14832;
(statearr_14855_14872[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14854;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14873 = state_14832;
state_14832 = G__14873;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_14832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_14832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14861,out))
})();
var state__12290__auto__ = (function (){var statearr_14856 = f__12289__auto__.call(null);
(statearr_14856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14861);

return statearr_14856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14861,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args14874 = [];
var len__5818__auto___14944 = arguments.length;
var i__5819__auto___14945 = (0);
while(true){
if((i__5819__auto___14945 < len__5818__auto___14944)){
args14874.push((arguments[i__5819__auto___14945]));

var G__14946 = (i__5819__auto___14945 + (1));
i__5819__auto___14945 = G__14946;
continue;
} else {
}
break;
}

var G__14876 = args14874.length;
switch (G__14876) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14874.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12288__auto___14948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___14948,out){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___14948,out){
return (function (state_14914){
var state_val_14915 = (state_14914[(1)]);
if((state_val_14915 === (7))){
var inst_14910 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14916_14949 = state_14914__$1;
(statearr_14916_14949[(2)] = inst_14910);

(statearr_14916_14949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (1))){
var inst_14877 = (new Array(n));
var inst_14878 = inst_14877;
var inst_14879 = (0);
var state_14914__$1 = (function (){var statearr_14917 = state_14914;
(statearr_14917[(7)] = inst_14879);

(statearr_14917[(8)] = inst_14878);

return statearr_14917;
})();
var statearr_14918_14950 = state_14914__$1;
(statearr_14918_14950[(2)] = null);

(statearr_14918_14950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (4))){
var inst_14882 = (state_14914[(9)]);
var inst_14882__$1 = (state_14914[(2)]);
var inst_14883 = (inst_14882__$1 == null);
var inst_14884 = cljs.core.not.call(null,inst_14883);
var state_14914__$1 = (function (){var statearr_14919 = state_14914;
(statearr_14919[(9)] = inst_14882__$1);

return statearr_14919;
})();
if(inst_14884){
var statearr_14920_14951 = state_14914__$1;
(statearr_14920_14951[(1)] = (5));

} else {
var statearr_14921_14952 = state_14914__$1;
(statearr_14921_14952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (15))){
var inst_14904 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14922_14953 = state_14914__$1;
(statearr_14922_14953[(2)] = inst_14904);

(statearr_14922_14953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (13))){
var state_14914__$1 = state_14914;
var statearr_14923_14954 = state_14914__$1;
(statearr_14923_14954[(2)] = null);

(statearr_14923_14954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (6))){
var inst_14879 = (state_14914[(7)]);
var inst_14900 = (inst_14879 > (0));
var state_14914__$1 = state_14914;
if(cljs.core.truth_(inst_14900)){
var statearr_14924_14955 = state_14914__$1;
(statearr_14924_14955[(1)] = (12));

} else {
var statearr_14925_14956 = state_14914__$1;
(statearr_14925_14956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (3))){
var inst_14912 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14914__$1,inst_14912);
} else {
if((state_val_14915 === (12))){
var inst_14878 = (state_14914[(8)]);
var inst_14902 = cljs.core.vec.call(null,inst_14878);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14914__$1,(15),out,inst_14902);
} else {
if((state_val_14915 === (2))){
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14914__$1,(4),ch);
} else {
if((state_val_14915 === (11))){
var inst_14894 = (state_14914[(2)]);
var inst_14895 = (new Array(n));
var inst_14878 = inst_14895;
var inst_14879 = (0);
var state_14914__$1 = (function (){var statearr_14926 = state_14914;
(statearr_14926[(7)] = inst_14879);

(statearr_14926[(8)] = inst_14878);

(statearr_14926[(10)] = inst_14894);

return statearr_14926;
})();
var statearr_14927_14957 = state_14914__$1;
(statearr_14927_14957[(2)] = null);

(statearr_14927_14957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (9))){
var inst_14878 = (state_14914[(8)]);
var inst_14892 = cljs.core.vec.call(null,inst_14878);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14914__$1,(11),out,inst_14892);
} else {
if((state_val_14915 === (5))){
var inst_14879 = (state_14914[(7)]);
var inst_14882 = (state_14914[(9)]);
var inst_14878 = (state_14914[(8)]);
var inst_14887 = (state_14914[(11)]);
var inst_14886 = (inst_14878[inst_14879] = inst_14882);
var inst_14887__$1 = (inst_14879 + (1));
var inst_14888 = (inst_14887__$1 < n);
var state_14914__$1 = (function (){var statearr_14928 = state_14914;
(statearr_14928[(12)] = inst_14886);

(statearr_14928[(11)] = inst_14887__$1);

return statearr_14928;
})();
if(cljs.core.truth_(inst_14888)){
var statearr_14929_14958 = state_14914__$1;
(statearr_14929_14958[(1)] = (8));

} else {
var statearr_14930_14959 = state_14914__$1;
(statearr_14930_14959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (14))){
var inst_14907 = (state_14914[(2)]);
var inst_14908 = cljs.core.async.close_BANG_.call(null,out);
var state_14914__$1 = (function (){var statearr_14932 = state_14914;
(statearr_14932[(13)] = inst_14907);

return statearr_14932;
})();
var statearr_14933_14960 = state_14914__$1;
(statearr_14933_14960[(2)] = inst_14908);

(statearr_14933_14960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (10))){
var inst_14898 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14934_14961 = state_14914__$1;
(statearr_14934_14961[(2)] = inst_14898);

(statearr_14934_14961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (8))){
var inst_14878 = (state_14914[(8)]);
var inst_14887 = (state_14914[(11)]);
var tmp14931 = inst_14878;
var inst_14878__$1 = tmp14931;
var inst_14879 = inst_14887;
var state_14914__$1 = (function (){var statearr_14935 = state_14914;
(statearr_14935[(7)] = inst_14879);

(statearr_14935[(8)] = inst_14878__$1);

return statearr_14935;
})();
var statearr_14936_14962 = state_14914__$1;
(statearr_14936_14962[(2)] = null);

(statearr_14936_14962[(1)] = (2));


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
});})(c__12288__auto___14948,out))
;
return ((function (switch__12223__auto__,c__12288__auto___14948,out){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_14940 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14940[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_14940[(1)] = (1));

return statearr_14940;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_14914){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_14914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e14941){if((e14941 instanceof Object)){
var ex__12227__auto__ = e14941;
var statearr_14942_14963 = state_14914;
(statearr_14942_14963[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14941;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14964 = state_14914;
state_14914 = G__14964;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_14914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_14914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___14948,out))
})();
var state__12290__auto__ = (function (){var statearr_14943 = f__12289__auto__.call(null);
(statearr_14943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___14948);

return statearr_14943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___14948,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args14965 = [];
var len__5818__auto___15039 = arguments.length;
var i__5819__auto___15040 = (0);
while(true){
if((i__5819__auto___15040 < len__5818__auto___15039)){
args14965.push((arguments[i__5819__auto___15040]));

var G__15041 = (i__5819__auto___15040 + (1));
i__5819__auto___15040 = G__15041;
continue;
} else {
}
break;
}

var G__14967 = args14965.length;
switch (G__14967) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14965.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12288__auto___15043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto___15043,out){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto___15043,out){
return (function (state_15009){
var state_val_15010 = (state_15009[(1)]);
if((state_val_15010 === (7))){
var inst_15005 = (state_15009[(2)]);
var state_15009__$1 = state_15009;
var statearr_15011_15044 = state_15009__$1;
(statearr_15011_15044[(2)] = inst_15005);

(statearr_15011_15044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (1))){
var inst_14968 = [];
var inst_14969 = inst_14968;
var inst_14970 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15009__$1 = (function (){var statearr_15012 = state_15009;
(statearr_15012[(7)] = inst_14970);

(statearr_15012[(8)] = inst_14969);

return statearr_15012;
})();
var statearr_15013_15045 = state_15009__$1;
(statearr_15013_15045[(2)] = null);

(statearr_15013_15045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (4))){
var inst_14973 = (state_15009[(9)]);
var inst_14973__$1 = (state_15009[(2)]);
var inst_14974 = (inst_14973__$1 == null);
var inst_14975 = cljs.core.not.call(null,inst_14974);
var state_15009__$1 = (function (){var statearr_15014 = state_15009;
(statearr_15014[(9)] = inst_14973__$1);

return statearr_15014;
})();
if(inst_14975){
var statearr_15015_15046 = state_15009__$1;
(statearr_15015_15046[(1)] = (5));

} else {
var statearr_15016_15047 = state_15009__$1;
(statearr_15016_15047[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (15))){
var inst_14999 = (state_15009[(2)]);
var state_15009__$1 = state_15009;
var statearr_15017_15048 = state_15009__$1;
(statearr_15017_15048[(2)] = inst_14999);

(statearr_15017_15048[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (13))){
var state_15009__$1 = state_15009;
var statearr_15018_15049 = state_15009__$1;
(statearr_15018_15049[(2)] = null);

(statearr_15018_15049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (6))){
var inst_14969 = (state_15009[(8)]);
var inst_14994 = inst_14969.length;
var inst_14995 = (inst_14994 > (0));
var state_15009__$1 = state_15009;
if(cljs.core.truth_(inst_14995)){
var statearr_15019_15050 = state_15009__$1;
(statearr_15019_15050[(1)] = (12));

} else {
var statearr_15020_15051 = state_15009__$1;
(statearr_15020_15051[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (3))){
var inst_15007 = (state_15009[(2)]);
var state_15009__$1 = state_15009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15009__$1,inst_15007);
} else {
if((state_val_15010 === (12))){
var inst_14969 = (state_15009[(8)]);
var inst_14997 = cljs.core.vec.call(null,inst_14969);
var state_15009__$1 = state_15009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15009__$1,(15),out,inst_14997);
} else {
if((state_val_15010 === (2))){
var state_15009__$1 = state_15009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15009__$1,(4),ch);
} else {
if((state_val_15010 === (11))){
var inst_14973 = (state_15009[(9)]);
var inst_14977 = (state_15009[(10)]);
var inst_14987 = (state_15009[(2)]);
var inst_14988 = [];
var inst_14989 = inst_14988.push(inst_14973);
var inst_14969 = inst_14988;
var inst_14970 = inst_14977;
var state_15009__$1 = (function (){var statearr_15021 = state_15009;
(statearr_15021[(11)] = inst_14987);

(statearr_15021[(12)] = inst_14989);

(statearr_15021[(7)] = inst_14970);

(statearr_15021[(8)] = inst_14969);

return statearr_15021;
})();
var statearr_15022_15052 = state_15009__$1;
(statearr_15022_15052[(2)] = null);

(statearr_15022_15052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (9))){
var inst_14969 = (state_15009[(8)]);
var inst_14985 = cljs.core.vec.call(null,inst_14969);
var state_15009__$1 = state_15009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15009__$1,(11),out,inst_14985);
} else {
if((state_val_15010 === (5))){
var inst_14973 = (state_15009[(9)]);
var inst_14977 = (state_15009[(10)]);
var inst_14970 = (state_15009[(7)]);
var inst_14977__$1 = f.call(null,inst_14973);
var inst_14978 = cljs.core._EQ_.call(null,inst_14977__$1,inst_14970);
var inst_14979 = cljs.core.keyword_identical_QMARK_.call(null,inst_14970,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14980 = (inst_14978) || (inst_14979);
var state_15009__$1 = (function (){var statearr_15023 = state_15009;
(statearr_15023[(10)] = inst_14977__$1);

return statearr_15023;
})();
if(cljs.core.truth_(inst_14980)){
var statearr_15024_15053 = state_15009__$1;
(statearr_15024_15053[(1)] = (8));

} else {
var statearr_15025_15054 = state_15009__$1;
(statearr_15025_15054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (14))){
var inst_15002 = (state_15009[(2)]);
var inst_15003 = cljs.core.async.close_BANG_.call(null,out);
var state_15009__$1 = (function (){var statearr_15027 = state_15009;
(statearr_15027[(13)] = inst_15002);

return statearr_15027;
})();
var statearr_15028_15055 = state_15009__$1;
(statearr_15028_15055[(2)] = inst_15003);

(statearr_15028_15055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (10))){
var inst_14992 = (state_15009[(2)]);
var state_15009__$1 = state_15009;
var statearr_15029_15056 = state_15009__$1;
(statearr_15029_15056[(2)] = inst_14992);

(statearr_15029_15056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15010 === (8))){
var inst_14973 = (state_15009[(9)]);
var inst_14977 = (state_15009[(10)]);
var inst_14969 = (state_15009[(8)]);
var inst_14982 = inst_14969.push(inst_14973);
var tmp15026 = inst_14969;
var inst_14969__$1 = tmp15026;
var inst_14970 = inst_14977;
var state_15009__$1 = (function (){var statearr_15030 = state_15009;
(statearr_15030[(14)] = inst_14982);

(statearr_15030[(7)] = inst_14970);

(statearr_15030[(8)] = inst_14969__$1);

return statearr_15030;
})();
var statearr_15031_15057 = state_15009__$1;
(statearr_15031_15057[(2)] = null);

(statearr_15031_15057[(1)] = (2));


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
});})(c__12288__auto___15043,out))
;
return ((function (switch__12223__auto__,c__12288__auto___15043,out){
return (function() {
var cljs$core$async$state_machine__12224__auto__ = null;
var cljs$core$async$state_machine__12224__auto____0 = (function (){
var statearr_15035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15035[(0)] = cljs$core$async$state_machine__12224__auto__);

(statearr_15035[(1)] = (1));

return statearr_15035;
});
var cljs$core$async$state_machine__12224__auto____1 = (function (state_15009){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_15009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e15036){if((e15036 instanceof Object)){
var ex__12227__auto__ = e15036;
var statearr_15037_15058 = state_15009;
(statearr_15037_15058[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15059 = state_15009;
state_15009 = G__15059;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
cljs$core$async$state_machine__12224__auto__ = function(state_15009){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12224__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12224__auto____1.call(this,state_15009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12224__auto____0;
cljs$core$async$state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12224__auto____1;
return cljs$core$async$state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto___15043,out))
})();
var state__12290__auto__ = (function (){var statearr_15038 = f__12289__auto__.call(null);
(statearr_15038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto___15043);

return statearr_15038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto___15043,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449440892526