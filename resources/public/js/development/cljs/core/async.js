// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__26502 = arguments.length;
switch (G__26502) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26503 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26503 = (function (f,blockable,meta26504){
this.f = f;
this.blockable = blockable;
this.meta26504 = meta26504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26505,meta26504__$1){
var self__ = this;
var _26505__$1 = this;
return (new cljs.core.async.t_cljs$core$async26503(self__.f,self__.blockable,meta26504__$1));
});

cljs.core.async.t_cljs$core$async26503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26505){
var self__ = this;
var _26505__$1 = this;
return self__.meta26504;
});

cljs.core.async.t_cljs$core$async26503.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26503.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26503.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26504","meta26504",513693777,null)], null);
});

cljs.core.async.t_cljs$core$async26503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26503";

cljs.core.async.t_cljs$core$async26503.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26503");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26503.
 */
cljs.core.async.__GT_t_cljs$core$async26503 = (function cljs$core$async$__GT_t_cljs$core$async26503(f__$1,blockable__$1,meta26504){
return (new cljs.core.async.t_cljs$core$async26503(f__$1,blockable__$1,meta26504));
});

}

return (new cljs.core.async.t_cljs$core$async26503(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__26509 = arguments.length;
switch (G__26509) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
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
var G__26512 = arguments.length;
switch (G__26512) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26515 = arguments.length;
switch (G__26515) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26517 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26517);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26517,ret){
return (function (){
return fn1.call(null,val_26517);
});})(val_26517,ret))
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
var G__26519 = arguments.length;
switch (G__26519) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
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
var n__4607__auto___26521 = n;
var x_26522 = (0);
while(true){
if((x_26522 < n__4607__auto___26521)){
(a[x_26522] = (0));

var G__26523 = (x_26522 + (1));
x_26522 = G__26523;
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

var G__26524 = (i + (1));
i = G__26524;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26525 = (function (flag,meta26526){
this.flag = flag;
this.meta26526 = meta26526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26527,meta26526__$1){
var self__ = this;
var _26527__$1 = this;
return (new cljs.core.async.t_cljs$core$async26525(self__.flag,meta26526__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26527){
var self__ = this;
var _26527__$1 = this;
return self__.meta26526;
});})(flag))
;

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26525.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26525.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26526","meta26526",236771,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26525.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26525.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26525";

cljs.core.async.t_cljs$core$async26525.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26525");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26525.
 */
cljs.core.async.__GT_t_cljs$core$async26525 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26525(flag__$1,meta26526){
return (new cljs.core.async.t_cljs$core$async26525(flag__$1,meta26526));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26525(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26528 = (function (flag,cb,meta26529){
this.flag = flag;
this.cb = cb;
this.meta26529 = meta26529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26530,meta26529__$1){
var self__ = this;
var _26530__$1 = this;
return (new cljs.core.async.t_cljs$core$async26528(self__.flag,self__.cb,meta26529__$1));
});

cljs.core.async.t_cljs$core$async26528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26530){
var self__ = this;
var _26530__$1 = this;
return self__.meta26529;
});

cljs.core.async.t_cljs$core$async26528.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26529","meta26529",2063474903,null)], null);
});

cljs.core.async.t_cljs$core$async26528.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26528";

cljs.core.async.t_cljs$core$async26528.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async26528");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26528.
 */
cljs.core.async.__GT_t_cljs$core$async26528 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26528(flag__$1,cb__$1,meta26529){
return (new cljs.core.async.t_cljs$core$async26528(flag__$1,cb__$1,meta26529));
});

}

return (new cljs.core.async.t_cljs$core$async26528(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26531_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26531_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26532_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26533 = (i + (1));
i = G__26533;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___26539 = arguments.length;
var i__4731__auto___26540 = (0);
while(true){
if((i__4731__auto___26540 < len__4730__auto___26539)){
args__4736__auto__.push((arguments[i__4731__auto___26540]));

var G__26541 = (i__4731__auto___26540 + (1));
i__4731__auto___26540 = G__26541;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26536){
var map__26537 = p__26536;
var map__26537__$1 = (((((!((map__26537 == null))))?(((((map__26537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26537):map__26537);
var opts = map__26537__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26534){
var G__26535 = cljs.core.first.call(null,seq26534);
var seq26534__$1 = cljs.core.next.call(null,seq26534);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26535,seq26534__$1);
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
var G__26543 = arguments.length;
switch (G__26543) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24578__auto___26589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___26589){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___26589){
return (function (state_26567){
var state_val_26568 = (state_26567[(1)]);
if((state_val_26568 === (7))){
var inst_26563 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26569_26590 = state_26567__$1;
(statearr_26569_26590[(2)] = inst_26563);

(statearr_26569_26590[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (1))){
var state_26567__$1 = state_26567;
var statearr_26570_26591 = state_26567__$1;
(statearr_26570_26591[(2)] = null);

(statearr_26570_26591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (4))){
var inst_26546 = (state_26567[(7)]);
var inst_26546__$1 = (state_26567[(2)]);
var inst_26547 = (inst_26546__$1 == null);
var state_26567__$1 = (function (){var statearr_26571 = state_26567;
(statearr_26571[(7)] = inst_26546__$1);

return statearr_26571;
})();
if(cljs.core.truth_(inst_26547)){
var statearr_26572_26592 = state_26567__$1;
(statearr_26572_26592[(1)] = (5));

} else {
var statearr_26573_26593 = state_26567__$1;
(statearr_26573_26593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (13))){
var state_26567__$1 = state_26567;
var statearr_26574_26594 = state_26567__$1;
(statearr_26574_26594[(2)] = null);

(statearr_26574_26594[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (6))){
var inst_26546 = (state_26567[(7)]);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26567__$1,(11),to,inst_26546);
} else {
if((state_val_26568 === (3))){
var inst_26565 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26567__$1,inst_26565);
} else {
if((state_val_26568 === (12))){
var state_26567__$1 = state_26567;
var statearr_26575_26595 = state_26567__$1;
(statearr_26575_26595[(2)] = null);

(statearr_26575_26595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (2))){
var state_26567__$1 = state_26567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26567__$1,(4),from);
} else {
if((state_val_26568 === (11))){
var inst_26556 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
if(cljs.core.truth_(inst_26556)){
var statearr_26576_26596 = state_26567__$1;
(statearr_26576_26596[(1)] = (12));

} else {
var statearr_26577_26597 = state_26567__$1;
(statearr_26577_26597[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (9))){
var state_26567__$1 = state_26567;
var statearr_26578_26598 = state_26567__$1;
(statearr_26578_26598[(2)] = null);

(statearr_26578_26598[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (5))){
var state_26567__$1 = state_26567;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26579_26599 = state_26567__$1;
(statearr_26579_26599[(1)] = (8));

} else {
var statearr_26580_26600 = state_26567__$1;
(statearr_26580_26600[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (14))){
var inst_26561 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26581_26601 = state_26567__$1;
(statearr_26581_26601[(2)] = inst_26561);

(statearr_26581_26601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (10))){
var inst_26553 = (state_26567[(2)]);
var state_26567__$1 = state_26567;
var statearr_26582_26602 = state_26567__$1;
(statearr_26582_26602[(2)] = inst_26553);

(statearr_26582_26602[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26568 === (8))){
var inst_26550 = cljs.core.async.close_BANG_.call(null,to);
var state_26567__$1 = state_26567;
var statearr_26583_26603 = state_26567__$1;
(statearr_26583_26603[(2)] = inst_26550);

(statearr_26583_26603[(1)] = (10));


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
});})(c__24578__auto___26589))
;
return ((function (switch__23615__auto__,c__24578__auto___26589){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_26584 = [null,null,null,null,null,null,null,null];
(statearr_26584[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_26584[(1)] = (1));

return statearr_26584;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_26567){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26585){if((e26585 instanceof Object)){
var ex__23619__auto__ = e26585;
var statearr_26586_26604 = state_26567;
(statearr_26586_26604[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26605 = state_26567;
state_26567 = G__26605;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_26567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_26567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___26589))
})();
var state__24580__auto__ = (function (){var statearr_26587 = f__24579__auto__.call(null);
(statearr_26587[(6)] = c__24578__auto___26589);

return statearr_26587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___26589))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__26606){
var vec__26607 = p__26606;
var v = cljs.core.nth.call(null,vec__26607,(0),null);
var p = cljs.core.nth.call(null,vec__26607,(1),null);
var job = vec__26607;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24578__auto___26778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___26778,res,vec__26607,v,p,job,jobs,results){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___26778,res,vec__26607,v,p,job,jobs,results){
return (function (state_26614){
var state_val_26615 = (state_26614[(1)]);
if((state_val_26615 === (1))){
var state_26614__$1 = state_26614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26614__$1,(2),res,v);
} else {
if((state_val_26615 === (2))){
var inst_26611 = (state_26614[(2)]);
var inst_26612 = cljs.core.async.close_BANG_.call(null,res);
var state_26614__$1 = (function (){var statearr_26616 = state_26614;
(statearr_26616[(7)] = inst_26611);

return statearr_26616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26614__$1,inst_26612);
} else {
return null;
}
}
});})(c__24578__auto___26778,res,vec__26607,v,p,job,jobs,results))
;
return ((function (switch__23615__auto__,c__24578__auto___26778,res,vec__26607,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0 = (function (){
var statearr_26617 = [null,null,null,null,null,null,null,null];
(statearr_26617[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__);

(statearr_26617[(1)] = (1));

return statearr_26617;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1 = (function (state_26614){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26618){if((e26618 instanceof Object)){
var ex__23619__auto__ = e26618;
var statearr_26619_26779 = state_26614;
(statearr_26619_26779[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26780 = state_26614;
state_26614 = G__26780;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = function(state_26614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1.call(this,state_26614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___26778,res,vec__26607,v,p,job,jobs,results))
})();
var state__24580__auto__ = (function (){var statearr_26620 = f__24579__auto__.call(null);
(statearr_26620[(6)] = c__24578__auto___26778);

return statearr_26620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___26778,res,vec__26607,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26621){
var vec__26622 = p__26621;
var v = cljs.core.nth.call(null,vec__26622,(0),null);
var p = cljs.core.nth.call(null,vec__26622,(1),null);
var job = vec__26622;
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
var n__4607__auto___26781 = n;
var __26782 = (0);
while(true){
if((__26782 < n__4607__auto___26781)){
var G__26625_26783 = type;
var G__26625_26784__$1 = (((G__26625_26783 instanceof cljs.core.Keyword))?G__26625_26783.fqn:null);
switch (G__26625_26784__$1) {
case "compute":
var c__24578__auto___26786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26782,c__24578__auto___26786,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (__26782,c__24578__auto___26786,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async){
return (function (state_26638){
var state_val_26639 = (state_26638[(1)]);
if((state_val_26639 === (1))){
var state_26638__$1 = state_26638;
var statearr_26640_26787 = state_26638__$1;
(statearr_26640_26787[(2)] = null);

(statearr_26640_26787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (2))){
var state_26638__$1 = state_26638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26638__$1,(4),jobs);
} else {
if((state_val_26639 === (3))){
var inst_26636 = (state_26638[(2)]);
var state_26638__$1 = state_26638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26638__$1,inst_26636);
} else {
if((state_val_26639 === (4))){
var inst_26628 = (state_26638[(2)]);
var inst_26629 = process.call(null,inst_26628);
var state_26638__$1 = state_26638;
if(cljs.core.truth_(inst_26629)){
var statearr_26641_26788 = state_26638__$1;
(statearr_26641_26788[(1)] = (5));

} else {
var statearr_26642_26789 = state_26638__$1;
(statearr_26642_26789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (5))){
var state_26638__$1 = state_26638;
var statearr_26643_26790 = state_26638__$1;
(statearr_26643_26790[(2)] = null);

(statearr_26643_26790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (6))){
var state_26638__$1 = state_26638;
var statearr_26644_26791 = state_26638__$1;
(statearr_26644_26791[(2)] = null);

(statearr_26644_26791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26639 === (7))){
var inst_26634 = (state_26638[(2)]);
var state_26638__$1 = state_26638;
var statearr_26645_26792 = state_26638__$1;
(statearr_26645_26792[(2)] = inst_26634);

(statearr_26645_26792[(1)] = (3));


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
});})(__26782,c__24578__auto___26786,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async))
;
return ((function (__26782,switch__23615__auto__,c__24578__auto___26786,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0 = (function (){
var statearr_26646 = [null,null,null,null,null,null,null];
(statearr_26646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__);

(statearr_26646[(1)] = (1));

return statearr_26646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1 = (function (state_26638){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26647){if((e26647 instanceof Object)){
var ex__23619__auto__ = e26647;
var statearr_26648_26793 = state_26638;
(statearr_26648_26793[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26794 = state_26638;
state_26638 = G__26794;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = function(state_26638){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1.call(this,state_26638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__;
})()
;})(__26782,switch__23615__auto__,c__24578__auto___26786,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async))
})();
var state__24580__auto__ = (function (){var statearr_26649 = f__24579__auto__.call(null);
(statearr_26649[(6)] = c__24578__auto___26786);

return statearr_26649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(__26782,c__24578__auto___26786,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async))
);


break;
case "async":
var c__24578__auto___26795 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26782,c__24578__auto___26795,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (__26782,c__24578__auto___26795,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async){
return (function (state_26662){
var state_val_26663 = (state_26662[(1)]);
if((state_val_26663 === (1))){
var state_26662__$1 = state_26662;
var statearr_26664_26796 = state_26662__$1;
(statearr_26664_26796[(2)] = null);

(statearr_26664_26796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (2))){
var state_26662__$1 = state_26662;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26662__$1,(4),jobs);
} else {
if((state_val_26663 === (3))){
var inst_26660 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26662__$1,inst_26660);
} else {
if((state_val_26663 === (4))){
var inst_26652 = (state_26662[(2)]);
var inst_26653 = async.call(null,inst_26652);
var state_26662__$1 = state_26662;
if(cljs.core.truth_(inst_26653)){
var statearr_26665_26797 = state_26662__$1;
(statearr_26665_26797[(1)] = (5));

} else {
var statearr_26666_26798 = state_26662__$1;
(statearr_26666_26798[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (5))){
var state_26662__$1 = state_26662;
var statearr_26667_26799 = state_26662__$1;
(statearr_26667_26799[(2)] = null);

(statearr_26667_26799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (6))){
var state_26662__$1 = state_26662;
var statearr_26668_26800 = state_26662__$1;
(statearr_26668_26800[(2)] = null);

(statearr_26668_26800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26663 === (7))){
var inst_26658 = (state_26662[(2)]);
var state_26662__$1 = state_26662;
var statearr_26669_26801 = state_26662__$1;
(statearr_26669_26801[(2)] = inst_26658);

(statearr_26669_26801[(1)] = (3));


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
});})(__26782,c__24578__auto___26795,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async))
;
return ((function (__26782,switch__23615__auto__,c__24578__auto___26795,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0 = (function (){
var statearr_26670 = [null,null,null,null,null,null,null];
(statearr_26670[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__);

(statearr_26670[(1)] = (1));

return statearr_26670;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1 = (function (state_26662){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26662);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26671){if((e26671 instanceof Object)){
var ex__23619__auto__ = e26671;
var statearr_26672_26802 = state_26662;
(statearr_26672_26802[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26662);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26671;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26803 = state_26662;
state_26662 = G__26803;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = function(state_26662){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1.call(this,state_26662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__;
})()
;})(__26782,switch__23615__auto__,c__24578__auto___26795,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async))
})();
var state__24580__auto__ = (function (){var statearr_26673 = f__24579__auto__.call(null);
(statearr_26673[(6)] = c__24578__auto___26795);

return statearr_26673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(__26782,c__24578__auto___26795,G__26625_26783,G__26625_26784__$1,n__4607__auto___26781,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26625_26784__$1)].join('')));

}

var G__26804 = (__26782 + (1));
__26782 = G__26804;
continue;
} else {
}
break;
}

var c__24578__auto___26805 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___26805,jobs,results,process,async){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___26805,jobs,results,process,async){
return (function (state_26695){
var state_val_26696 = (state_26695[(1)]);
if((state_val_26696 === (7))){
var inst_26691 = (state_26695[(2)]);
var state_26695__$1 = state_26695;
var statearr_26697_26806 = state_26695__$1;
(statearr_26697_26806[(2)] = inst_26691);

(statearr_26697_26806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (1))){
var state_26695__$1 = state_26695;
var statearr_26698_26807 = state_26695__$1;
(statearr_26698_26807[(2)] = null);

(statearr_26698_26807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (4))){
var inst_26676 = (state_26695[(7)]);
var inst_26676__$1 = (state_26695[(2)]);
var inst_26677 = (inst_26676__$1 == null);
var state_26695__$1 = (function (){var statearr_26699 = state_26695;
(statearr_26699[(7)] = inst_26676__$1);

return statearr_26699;
})();
if(cljs.core.truth_(inst_26677)){
var statearr_26700_26808 = state_26695__$1;
(statearr_26700_26808[(1)] = (5));

} else {
var statearr_26701_26809 = state_26695__$1;
(statearr_26701_26809[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (6))){
var inst_26681 = (state_26695[(8)]);
var inst_26676 = (state_26695[(7)]);
var inst_26681__$1 = cljs.core.async.chan.call(null,(1));
var inst_26682 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26683 = [inst_26676,inst_26681__$1];
var inst_26684 = (new cljs.core.PersistentVector(null,2,(5),inst_26682,inst_26683,null));
var state_26695__$1 = (function (){var statearr_26702 = state_26695;
(statearr_26702[(8)] = inst_26681__$1);

return statearr_26702;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26695__$1,(8),jobs,inst_26684);
} else {
if((state_val_26696 === (3))){
var inst_26693 = (state_26695[(2)]);
var state_26695__$1 = state_26695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26695__$1,inst_26693);
} else {
if((state_val_26696 === (2))){
var state_26695__$1 = state_26695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26695__$1,(4),from);
} else {
if((state_val_26696 === (9))){
var inst_26688 = (state_26695[(2)]);
var state_26695__$1 = (function (){var statearr_26703 = state_26695;
(statearr_26703[(9)] = inst_26688);

return statearr_26703;
})();
var statearr_26704_26810 = state_26695__$1;
(statearr_26704_26810[(2)] = null);

(statearr_26704_26810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (5))){
var inst_26679 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26695__$1 = state_26695;
var statearr_26705_26811 = state_26695__$1;
(statearr_26705_26811[(2)] = inst_26679);

(statearr_26705_26811[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26696 === (8))){
var inst_26681 = (state_26695[(8)]);
var inst_26686 = (state_26695[(2)]);
var state_26695__$1 = (function (){var statearr_26706 = state_26695;
(statearr_26706[(10)] = inst_26686);

return statearr_26706;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26695__$1,(9),results,inst_26681);
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
});})(c__24578__auto___26805,jobs,results,process,async))
;
return ((function (switch__23615__auto__,c__24578__auto___26805,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0 = (function (){
var statearr_26707 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__);

(statearr_26707[(1)] = (1));

return statearr_26707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1 = (function (state_26695){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26708){if((e26708 instanceof Object)){
var ex__23619__auto__ = e26708;
var statearr_26709_26812 = state_26695;
(statearr_26709_26812[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26813 = state_26695;
state_26695 = G__26813;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = function(state_26695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1.call(this,state_26695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___26805,jobs,results,process,async))
})();
var state__24580__auto__ = (function (){var statearr_26710 = f__24579__auto__.call(null);
(statearr_26710[(6)] = c__24578__auto___26805);

return statearr_26710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___26805,jobs,results,process,async))
);


var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__,jobs,results,process,async){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__,jobs,results,process,async){
return (function (state_26748){
var state_val_26749 = (state_26748[(1)]);
if((state_val_26749 === (7))){
var inst_26744 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
var statearr_26750_26814 = state_26748__$1;
(statearr_26750_26814[(2)] = inst_26744);

(statearr_26750_26814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (20))){
var state_26748__$1 = state_26748;
var statearr_26751_26815 = state_26748__$1;
(statearr_26751_26815[(2)] = null);

(statearr_26751_26815[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (1))){
var state_26748__$1 = state_26748;
var statearr_26752_26816 = state_26748__$1;
(statearr_26752_26816[(2)] = null);

(statearr_26752_26816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (4))){
var inst_26713 = (state_26748[(7)]);
var inst_26713__$1 = (state_26748[(2)]);
var inst_26714 = (inst_26713__$1 == null);
var state_26748__$1 = (function (){var statearr_26753 = state_26748;
(statearr_26753[(7)] = inst_26713__$1);

return statearr_26753;
})();
if(cljs.core.truth_(inst_26714)){
var statearr_26754_26817 = state_26748__$1;
(statearr_26754_26817[(1)] = (5));

} else {
var statearr_26755_26818 = state_26748__$1;
(statearr_26755_26818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (15))){
var inst_26726 = (state_26748[(8)]);
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26748__$1,(18),to,inst_26726);
} else {
if((state_val_26749 === (21))){
var inst_26739 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
var statearr_26756_26819 = state_26748__$1;
(statearr_26756_26819[(2)] = inst_26739);

(statearr_26756_26819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (13))){
var inst_26741 = (state_26748[(2)]);
var state_26748__$1 = (function (){var statearr_26757 = state_26748;
(statearr_26757[(9)] = inst_26741);

return statearr_26757;
})();
var statearr_26758_26820 = state_26748__$1;
(statearr_26758_26820[(2)] = null);

(statearr_26758_26820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (6))){
var inst_26713 = (state_26748[(7)]);
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26748__$1,(11),inst_26713);
} else {
if((state_val_26749 === (17))){
var inst_26734 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
if(cljs.core.truth_(inst_26734)){
var statearr_26759_26821 = state_26748__$1;
(statearr_26759_26821[(1)] = (19));

} else {
var statearr_26760_26822 = state_26748__$1;
(statearr_26760_26822[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (3))){
var inst_26746 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26748__$1,inst_26746);
} else {
if((state_val_26749 === (12))){
var inst_26723 = (state_26748[(10)]);
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26748__$1,(14),inst_26723);
} else {
if((state_val_26749 === (2))){
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26748__$1,(4),results);
} else {
if((state_val_26749 === (19))){
var state_26748__$1 = state_26748;
var statearr_26761_26823 = state_26748__$1;
(statearr_26761_26823[(2)] = null);

(statearr_26761_26823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (11))){
var inst_26723 = (state_26748[(2)]);
var state_26748__$1 = (function (){var statearr_26762 = state_26748;
(statearr_26762[(10)] = inst_26723);

return statearr_26762;
})();
var statearr_26763_26824 = state_26748__$1;
(statearr_26763_26824[(2)] = null);

(statearr_26763_26824[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (9))){
var state_26748__$1 = state_26748;
var statearr_26764_26825 = state_26748__$1;
(statearr_26764_26825[(2)] = null);

(statearr_26764_26825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (5))){
var state_26748__$1 = state_26748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26765_26826 = state_26748__$1;
(statearr_26765_26826[(1)] = (8));

} else {
var statearr_26766_26827 = state_26748__$1;
(statearr_26766_26827[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (14))){
var inst_26728 = (state_26748[(11)]);
var inst_26726 = (state_26748[(8)]);
var inst_26726__$1 = (state_26748[(2)]);
var inst_26727 = (inst_26726__$1 == null);
var inst_26728__$1 = cljs.core.not.call(null,inst_26727);
var state_26748__$1 = (function (){var statearr_26767 = state_26748;
(statearr_26767[(11)] = inst_26728__$1);

(statearr_26767[(8)] = inst_26726__$1);

return statearr_26767;
})();
if(inst_26728__$1){
var statearr_26768_26828 = state_26748__$1;
(statearr_26768_26828[(1)] = (15));

} else {
var statearr_26769_26829 = state_26748__$1;
(statearr_26769_26829[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (16))){
var inst_26728 = (state_26748[(11)]);
var state_26748__$1 = state_26748;
var statearr_26770_26830 = state_26748__$1;
(statearr_26770_26830[(2)] = inst_26728);

(statearr_26770_26830[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (10))){
var inst_26720 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
var statearr_26771_26831 = state_26748__$1;
(statearr_26771_26831[(2)] = inst_26720);

(statearr_26771_26831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (18))){
var inst_26731 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
var statearr_26772_26832 = state_26748__$1;
(statearr_26772_26832[(2)] = inst_26731);

(statearr_26772_26832[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (8))){
var inst_26717 = cljs.core.async.close_BANG_.call(null,to);
var state_26748__$1 = state_26748;
var statearr_26773_26833 = state_26748__$1;
(statearr_26773_26833[(2)] = inst_26717);

(statearr_26773_26833[(1)] = (10));


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
});})(c__24578__auto__,jobs,results,process,async))
;
return ((function (switch__23615__auto__,c__24578__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0 = (function (){
var statearr_26774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26774[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__);

(statearr_26774[(1)] = (1));

return statearr_26774;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1 = (function (state_26748){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26775){if((e26775 instanceof Object)){
var ex__23619__auto__ = e26775;
var statearr_26776_26834 = state_26748;
(statearr_26776_26834[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26835 = state_26748;
state_26748 = G__26835;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__ = function(state_26748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1.call(this,state_26748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23616__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__,jobs,results,process,async))
})();
var state__24580__auto__ = (function (){var statearr_26777 = f__24579__auto__.call(null);
(statearr_26777[(6)] = c__24578__auto__);

return statearr_26777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__,jobs,results,process,async))
);

return c__24578__auto__;
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
var G__26837 = arguments.length;
switch (G__26837) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26840 = arguments.length;
switch (G__26840) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__26843 = arguments.length;
switch (G__26843) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24578__auto___26892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___26892,tc,fc){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___26892,tc,fc){
return (function (state_26869){
var state_val_26870 = (state_26869[(1)]);
if((state_val_26870 === (7))){
var inst_26865 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26871_26893 = state_26869__$1;
(statearr_26871_26893[(2)] = inst_26865);

(statearr_26871_26893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (1))){
var state_26869__$1 = state_26869;
var statearr_26872_26894 = state_26869__$1;
(statearr_26872_26894[(2)] = null);

(statearr_26872_26894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (4))){
var inst_26846 = (state_26869[(7)]);
var inst_26846__$1 = (state_26869[(2)]);
var inst_26847 = (inst_26846__$1 == null);
var state_26869__$1 = (function (){var statearr_26873 = state_26869;
(statearr_26873[(7)] = inst_26846__$1);

return statearr_26873;
})();
if(cljs.core.truth_(inst_26847)){
var statearr_26874_26895 = state_26869__$1;
(statearr_26874_26895[(1)] = (5));

} else {
var statearr_26875_26896 = state_26869__$1;
(statearr_26875_26896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (13))){
var state_26869__$1 = state_26869;
var statearr_26876_26897 = state_26869__$1;
(statearr_26876_26897[(2)] = null);

(statearr_26876_26897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (6))){
var inst_26846 = (state_26869[(7)]);
var inst_26852 = p.call(null,inst_26846);
var state_26869__$1 = state_26869;
if(cljs.core.truth_(inst_26852)){
var statearr_26877_26898 = state_26869__$1;
(statearr_26877_26898[(1)] = (9));

} else {
var statearr_26878_26899 = state_26869__$1;
(statearr_26878_26899[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (3))){
var inst_26867 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26869__$1,inst_26867);
} else {
if((state_val_26870 === (12))){
var state_26869__$1 = state_26869;
var statearr_26879_26900 = state_26869__$1;
(statearr_26879_26900[(2)] = null);

(statearr_26879_26900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (2))){
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26869__$1,(4),ch);
} else {
if((state_val_26870 === (11))){
var inst_26846 = (state_26869[(7)]);
var inst_26856 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26869__$1,(8),inst_26856,inst_26846);
} else {
if((state_val_26870 === (9))){
var state_26869__$1 = state_26869;
var statearr_26880_26901 = state_26869__$1;
(statearr_26880_26901[(2)] = tc);

(statearr_26880_26901[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (5))){
var inst_26849 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26850 = cljs.core.async.close_BANG_.call(null,fc);
var state_26869__$1 = (function (){var statearr_26881 = state_26869;
(statearr_26881[(8)] = inst_26849);

return statearr_26881;
})();
var statearr_26882_26902 = state_26869__$1;
(statearr_26882_26902[(2)] = inst_26850);

(statearr_26882_26902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (14))){
var inst_26863 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
var statearr_26883_26903 = state_26869__$1;
(statearr_26883_26903[(2)] = inst_26863);

(statearr_26883_26903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (10))){
var state_26869__$1 = state_26869;
var statearr_26884_26904 = state_26869__$1;
(statearr_26884_26904[(2)] = fc);

(statearr_26884_26904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26870 === (8))){
var inst_26858 = (state_26869[(2)]);
var state_26869__$1 = state_26869;
if(cljs.core.truth_(inst_26858)){
var statearr_26885_26905 = state_26869__$1;
(statearr_26885_26905[(1)] = (12));

} else {
var statearr_26886_26906 = state_26869__$1;
(statearr_26886_26906[(1)] = (13));

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
});})(c__24578__auto___26892,tc,fc))
;
return ((function (switch__23615__auto__,c__24578__auto___26892,tc,fc){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_26887 = [null,null,null,null,null,null,null,null,null];
(statearr_26887[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_26887[(1)] = (1));

return statearr_26887;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_26869){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26888){if((e26888 instanceof Object)){
var ex__23619__auto__ = e26888;
var statearr_26889_26907 = state_26869;
(statearr_26889_26907[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26908 = state_26869;
state_26869 = G__26908;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_26869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_26869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___26892,tc,fc))
})();
var state__24580__auto__ = (function (){var statearr_26890 = f__24579__auto__.call(null);
(statearr_26890[(6)] = c__24578__auto___26892);

return statearr_26890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___26892,tc,fc))
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
var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__){
return (function (state_26929){
var state_val_26930 = (state_26929[(1)]);
if((state_val_26930 === (7))){
var inst_26925 = (state_26929[(2)]);
var state_26929__$1 = state_26929;
var statearr_26931_26949 = state_26929__$1;
(statearr_26931_26949[(2)] = inst_26925);

(statearr_26931_26949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26930 === (1))){
var inst_26909 = init;
var state_26929__$1 = (function (){var statearr_26932 = state_26929;
(statearr_26932[(7)] = inst_26909);

return statearr_26932;
})();
var statearr_26933_26950 = state_26929__$1;
(statearr_26933_26950[(2)] = null);

(statearr_26933_26950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26930 === (4))){
var inst_26912 = (state_26929[(8)]);
var inst_26912__$1 = (state_26929[(2)]);
var inst_26913 = (inst_26912__$1 == null);
var state_26929__$1 = (function (){var statearr_26934 = state_26929;
(statearr_26934[(8)] = inst_26912__$1);

return statearr_26934;
})();
if(cljs.core.truth_(inst_26913)){
var statearr_26935_26951 = state_26929__$1;
(statearr_26935_26951[(1)] = (5));

} else {
var statearr_26936_26952 = state_26929__$1;
(statearr_26936_26952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26930 === (6))){
var inst_26916 = (state_26929[(9)]);
var inst_26912 = (state_26929[(8)]);
var inst_26909 = (state_26929[(7)]);
var inst_26916__$1 = f.call(null,inst_26909,inst_26912);
var inst_26917 = cljs.core.reduced_QMARK_.call(null,inst_26916__$1);
var state_26929__$1 = (function (){var statearr_26937 = state_26929;
(statearr_26937[(9)] = inst_26916__$1);

return statearr_26937;
})();
if(inst_26917){
var statearr_26938_26953 = state_26929__$1;
(statearr_26938_26953[(1)] = (8));

} else {
var statearr_26939_26954 = state_26929__$1;
(statearr_26939_26954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26930 === (3))){
var inst_26927 = (state_26929[(2)]);
var state_26929__$1 = state_26929;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26929__$1,inst_26927);
} else {
if((state_val_26930 === (2))){
var state_26929__$1 = state_26929;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26929__$1,(4),ch);
} else {
if((state_val_26930 === (9))){
var inst_26916 = (state_26929[(9)]);
var inst_26909 = inst_26916;
var state_26929__$1 = (function (){var statearr_26940 = state_26929;
(statearr_26940[(7)] = inst_26909);

return statearr_26940;
})();
var statearr_26941_26955 = state_26929__$1;
(statearr_26941_26955[(2)] = null);

(statearr_26941_26955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26930 === (5))){
var inst_26909 = (state_26929[(7)]);
var state_26929__$1 = state_26929;
var statearr_26942_26956 = state_26929__$1;
(statearr_26942_26956[(2)] = inst_26909);

(statearr_26942_26956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26930 === (10))){
var inst_26923 = (state_26929[(2)]);
var state_26929__$1 = state_26929;
var statearr_26943_26957 = state_26929__$1;
(statearr_26943_26957[(2)] = inst_26923);

(statearr_26943_26957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26930 === (8))){
var inst_26916 = (state_26929[(9)]);
var inst_26919 = cljs.core.deref.call(null,inst_26916);
var state_26929__$1 = state_26929;
var statearr_26944_26958 = state_26929__$1;
(statearr_26944_26958[(2)] = inst_26919);

(statearr_26944_26958[(1)] = (10));


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
});})(c__24578__auto__))
;
return ((function (switch__23615__auto__,c__24578__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23616__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23616__auto____0 = (function (){
var statearr_26945 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26945[(0)] = cljs$core$async$reduce_$_state_machine__23616__auto__);

(statearr_26945[(1)] = (1));

return statearr_26945;
});
var cljs$core$async$reduce_$_state_machine__23616__auto____1 = (function (state_26929){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26929);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26946){if((e26946 instanceof Object)){
var ex__23619__auto__ = e26946;
var statearr_26947_26959 = state_26929;
(statearr_26947_26959[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26929);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26960 = state_26929;
state_26929 = G__26960;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23616__auto__ = function(state_26929){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23616__auto____1.call(this,state_26929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23616__auto____0;
cljs$core$async$reduce_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23616__auto____1;
return cljs$core$async$reduce_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__))
})();
var state__24580__auto__ = (function (){var statearr_26948 = f__24579__auto__.call(null);
(statearr_26948[(6)] = c__24578__auto__);

return statearr_26948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__))
);

return c__24578__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__,f__$1){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__,f__$1){
return (function (state_26966){
var state_val_26967 = (state_26966[(1)]);
if((state_val_26967 === (1))){
var inst_26961 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26966__$1 = state_26966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26966__$1,(2),inst_26961);
} else {
if((state_val_26967 === (2))){
var inst_26963 = (state_26966[(2)]);
var inst_26964 = f__$1.call(null,inst_26963);
var state_26966__$1 = state_26966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26966__$1,inst_26964);
} else {
return null;
}
}
});})(c__24578__auto__,f__$1))
;
return ((function (switch__23615__auto__,c__24578__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__23616__auto__ = null;
var cljs$core$async$transduce_$_state_machine__23616__auto____0 = (function (){
var statearr_26968 = [null,null,null,null,null,null,null];
(statearr_26968[(0)] = cljs$core$async$transduce_$_state_machine__23616__auto__);

(statearr_26968[(1)] = (1));

return statearr_26968;
});
var cljs$core$async$transduce_$_state_machine__23616__auto____1 = (function (state_26966){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_26966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e26969){if((e26969 instanceof Object)){
var ex__23619__auto__ = e26969;
var statearr_26970_26972 = state_26966;
(statearr_26970_26972[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26969;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26973 = state_26966;
state_26966 = G__26973;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__23616__auto__ = function(state_26966){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__23616__auto____1.call(this,state_26966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__23616__auto____0;
cljs$core$async$transduce_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__23616__auto____1;
return cljs$core$async$transduce_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__,f__$1))
})();
var state__24580__auto__ = (function (){var statearr_26971 = f__24579__auto__.call(null);
(statearr_26971[(6)] = c__24578__auto__);

return statearr_26971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__,f__$1))
);

return c__24578__auto__;
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
var G__26975 = arguments.length;
switch (G__26975) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__){
return (function (state_27000){
var state_val_27001 = (state_27000[(1)]);
if((state_val_27001 === (7))){
var inst_26982 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27002_27023 = state_27000__$1;
(statearr_27002_27023[(2)] = inst_26982);

(statearr_27002_27023[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (1))){
var inst_26976 = cljs.core.seq.call(null,coll);
var inst_26977 = inst_26976;
var state_27000__$1 = (function (){var statearr_27003 = state_27000;
(statearr_27003[(7)] = inst_26977);

return statearr_27003;
})();
var statearr_27004_27024 = state_27000__$1;
(statearr_27004_27024[(2)] = null);

(statearr_27004_27024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (4))){
var inst_26977 = (state_27000[(7)]);
var inst_26980 = cljs.core.first.call(null,inst_26977);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27000__$1,(7),ch,inst_26980);
} else {
if((state_val_27001 === (13))){
var inst_26994 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27005_27025 = state_27000__$1;
(statearr_27005_27025[(2)] = inst_26994);

(statearr_27005_27025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (6))){
var inst_26985 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
if(cljs.core.truth_(inst_26985)){
var statearr_27006_27026 = state_27000__$1;
(statearr_27006_27026[(1)] = (8));

} else {
var statearr_27007_27027 = state_27000__$1;
(statearr_27007_27027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (3))){
var inst_26998 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27000__$1,inst_26998);
} else {
if((state_val_27001 === (12))){
var state_27000__$1 = state_27000;
var statearr_27008_27028 = state_27000__$1;
(statearr_27008_27028[(2)] = null);

(statearr_27008_27028[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (2))){
var inst_26977 = (state_27000[(7)]);
var state_27000__$1 = state_27000;
if(cljs.core.truth_(inst_26977)){
var statearr_27009_27029 = state_27000__$1;
(statearr_27009_27029[(1)] = (4));

} else {
var statearr_27010_27030 = state_27000__$1;
(statearr_27010_27030[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (11))){
var inst_26991 = cljs.core.async.close_BANG_.call(null,ch);
var state_27000__$1 = state_27000;
var statearr_27011_27031 = state_27000__$1;
(statearr_27011_27031[(2)] = inst_26991);

(statearr_27011_27031[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (9))){
var state_27000__$1 = state_27000;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27012_27032 = state_27000__$1;
(statearr_27012_27032[(1)] = (11));

} else {
var statearr_27013_27033 = state_27000__$1;
(statearr_27013_27033[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (5))){
var inst_26977 = (state_27000[(7)]);
var state_27000__$1 = state_27000;
var statearr_27014_27034 = state_27000__$1;
(statearr_27014_27034[(2)] = inst_26977);

(statearr_27014_27034[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (10))){
var inst_26996 = (state_27000[(2)]);
var state_27000__$1 = state_27000;
var statearr_27015_27035 = state_27000__$1;
(statearr_27015_27035[(2)] = inst_26996);

(statearr_27015_27035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27001 === (8))){
var inst_26977 = (state_27000[(7)]);
var inst_26987 = cljs.core.next.call(null,inst_26977);
var inst_26977__$1 = inst_26987;
var state_27000__$1 = (function (){var statearr_27016 = state_27000;
(statearr_27016[(7)] = inst_26977__$1);

return statearr_27016;
})();
var statearr_27017_27036 = state_27000__$1;
(statearr_27017_27036[(2)] = null);

(statearr_27017_27036[(1)] = (2));


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
});})(c__24578__auto__))
;
return ((function (switch__23615__auto__,c__24578__auto__){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_27018 = [null,null,null,null,null,null,null,null];
(statearr_27018[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_27018[(1)] = (1));

return statearr_27018;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_27000){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27019){if((e27019 instanceof Object)){
var ex__23619__auto__ = e27019;
var statearr_27020_27037 = state_27000;
(statearr_27020_27037[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27038 = state_27000;
state_27000 = G__27038;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_27000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_27000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__))
})();
var state__24580__auto__ = (function (){var statearr_27021 = f__24579__auto__.call(null);
(statearr_27021[(6)] = c__24578__auto__);

return statearr_27021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__))
);

return c__24578__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27039 = (function (ch,cs,meta27040){
this.ch = ch;
this.cs = cs;
this.meta27040 = meta27040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27041,meta27040__$1){
var self__ = this;
var _27041__$1 = this;
return (new cljs.core.async.t_cljs$core$async27039(self__.ch,self__.cs,meta27040__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27041){
var self__ = this;
var _27041__$1 = this;
return self__.meta27040;
});})(cs))
;

cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27039.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27040","meta27040",1996721353,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27039";

cljs.core.async.t_cljs$core$async27039.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27039");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27039.
 */
cljs.core.async.__GT_t_cljs$core$async27039 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27039(ch__$1,cs__$1,meta27040){
return (new cljs.core.async.t_cljs$core$async27039(ch__$1,cs__$1,meta27040));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27039(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24578__auto___27261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___27261,cs,m,dchan,dctr,done){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___27261,cs,m,dchan,dctr,done){
return (function (state_27176){
var state_val_27177 = (state_27176[(1)]);
if((state_val_27177 === (7))){
var inst_27172 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27178_27262 = state_27176__$1;
(statearr_27178_27262[(2)] = inst_27172);

(statearr_27178_27262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (20))){
var inst_27075 = (state_27176[(7)]);
var inst_27087 = cljs.core.first.call(null,inst_27075);
var inst_27088 = cljs.core.nth.call(null,inst_27087,(0),null);
var inst_27089 = cljs.core.nth.call(null,inst_27087,(1),null);
var state_27176__$1 = (function (){var statearr_27179 = state_27176;
(statearr_27179[(8)] = inst_27088);

return statearr_27179;
})();
if(cljs.core.truth_(inst_27089)){
var statearr_27180_27263 = state_27176__$1;
(statearr_27180_27263[(1)] = (22));

} else {
var statearr_27181_27264 = state_27176__$1;
(statearr_27181_27264[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (27))){
var inst_27124 = (state_27176[(9)]);
var inst_27119 = (state_27176[(10)]);
var inst_27044 = (state_27176[(11)]);
var inst_27117 = (state_27176[(12)]);
var inst_27124__$1 = cljs.core._nth.call(null,inst_27117,inst_27119);
var inst_27125 = cljs.core.async.put_BANG_.call(null,inst_27124__$1,inst_27044,done);
var state_27176__$1 = (function (){var statearr_27182 = state_27176;
(statearr_27182[(9)] = inst_27124__$1);

return statearr_27182;
})();
if(cljs.core.truth_(inst_27125)){
var statearr_27183_27265 = state_27176__$1;
(statearr_27183_27265[(1)] = (30));

} else {
var statearr_27184_27266 = state_27176__$1;
(statearr_27184_27266[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (1))){
var state_27176__$1 = state_27176;
var statearr_27185_27267 = state_27176__$1;
(statearr_27185_27267[(2)] = null);

(statearr_27185_27267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (24))){
var inst_27075 = (state_27176[(7)]);
var inst_27094 = (state_27176[(2)]);
var inst_27095 = cljs.core.next.call(null,inst_27075);
var inst_27053 = inst_27095;
var inst_27054 = null;
var inst_27055 = (0);
var inst_27056 = (0);
var state_27176__$1 = (function (){var statearr_27186 = state_27176;
(statearr_27186[(13)] = inst_27094);

(statearr_27186[(14)] = inst_27055);

(statearr_27186[(15)] = inst_27056);

(statearr_27186[(16)] = inst_27053);

(statearr_27186[(17)] = inst_27054);

return statearr_27186;
})();
var statearr_27187_27268 = state_27176__$1;
(statearr_27187_27268[(2)] = null);

(statearr_27187_27268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (39))){
var state_27176__$1 = state_27176;
var statearr_27191_27269 = state_27176__$1;
(statearr_27191_27269[(2)] = null);

(statearr_27191_27269[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (4))){
var inst_27044 = (state_27176[(11)]);
var inst_27044__$1 = (state_27176[(2)]);
var inst_27045 = (inst_27044__$1 == null);
var state_27176__$1 = (function (){var statearr_27192 = state_27176;
(statearr_27192[(11)] = inst_27044__$1);

return statearr_27192;
})();
if(cljs.core.truth_(inst_27045)){
var statearr_27193_27270 = state_27176__$1;
(statearr_27193_27270[(1)] = (5));

} else {
var statearr_27194_27271 = state_27176__$1;
(statearr_27194_27271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (15))){
var inst_27055 = (state_27176[(14)]);
var inst_27056 = (state_27176[(15)]);
var inst_27053 = (state_27176[(16)]);
var inst_27054 = (state_27176[(17)]);
var inst_27071 = (state_27176[(2)]);
var inst_27072 = (inst_27056 + (1));
var tmp27188 = inst_27055;
var tmp27189 = inst_27053;
var tmp27190 = inst_27054;
var inst_27053__$1 = tmp27189;
var inst_27054__$1 = tmp27190;
var inst_27055__$1 = tmp27188;
var inst_27056__$1 = inst_27072;
var state_27176__$1 = (function (){var statearr_27195 = state_27176;
(statearr_27195[(14)] = inst_27055__$1);

(statearr_27195[(18)] = inst_27071);

(statearr_27195[(15)] = inst_27056__$1);

(statearr_27195[(16)] = inst_27053__$1);

(statearr_27195[(17)] = inst_27054__$1);

return statearr_27195;
})();
var statearr_27196_27272 = state_27176__$1;
(statearr_27196_27272[(2)] = null);

(statearr_27196_27272[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (21))){
var inst_27098 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27200_27273 = state_27176__$1;
(statearr_27200_27273[(2)] = inst_27098);

(statearr_27200_27273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (31))){
var inst_27124 = (state_27176[(9)]);
var inst_27128 = done.call(null,null);
var inst_27129 = cljs.core.async.untap_STAR_.call(null,m,inst_27124);
var state_27176__$1 = (function (){var statearr_27201 = state_27176;
(statearr_27201[(19)] = inst_27128);

return statearr_27201;
})();
var statearr_27202_27274 = state_27176__$1;
(statearr_27202_27274[(2)] = inst_27129);

(statearr_27202_27274[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (32))){
var inst_27119 = (state_27176[(10)]);
var inst_27116 = (state_27176[(20)]);
var inst_27118 = (state_27176[(21)]);
var inst_27117 = (state_27176[(12)]);
var inst_27131 = (state_27176[(2)]);
var inst_27132 = (inst_27119 + (1));
var tmp27197 = inst_27116;
var tmp27198 = inst_27118;
var tmp27199 = inst_27117;
var inst_27116__$1 = tmp27197;
var inst_27117__$1 = tmp27199;
var inst_27118__$1 = tmp27198;
var inst_27119__$1 = inst_27132;
var state_27176__$1 = (function (){var statearr_27203 = state_27176;
(statearr_27203[(10)] = inst_27119__$1);

(statearr_27203[(20)] = inst_27116__$1);

(statearr_27203[(22)] = inst_27131);

(statearr_27203[(21)] = inst_27118__$1);

(statearr_27203[(12)] = inst_27117__$1);

return statearr_27203;
})();
var statearr_27204_27275 = state_27176__$1;
(statearr_27204_27275[(2)] = null);

(statearr_27204_27275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (40))){
var inst_27144 = (state_27176[(23)]);
var inst_27148 = done.call(null,null);
var inst_27149 = cljs.core.async.untap_STAR_.call(null,m,inst_27144);
var state_27176__$1 = (function (){var statearr_27205 = state_27176;
(statearr_27205[(24)] = inst_27148);

return statearr_27205;
})();
var statearr_27206_27276 = state_27176__$1;
(statearr_27206_27276[(2)] = inst_27149);

(statearr_27206_27276[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (33))){
var inst_27135 = (state_27176[(25)]);
var inst_27137 = cljs.core.chunked_seq_QMARK_.call(null,inst_27135);
var state_27176__$1 = state_27176;
if(inst_27137){
var statearr_27207_27277 = state_27176__$1;
(statearr_27207_27277[(1)] = (36));

} else {
var statearr_27208_27278 = state_27176__$1;
(statearr_27208_27278[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (13))){
var inst_27065 = (state_27176[(26)]);
var inst_27068 = cljs.core.async.close_BANG_.call(null,inst_27065);
var state_27176__$1 = state_27176;
var statearr_27209_27279 = state_27176__$1;
(statearr_27209_27279[(2)] = inst_27068);

(statearr_27209_27279[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (22))){
var inst_27088 = (state_27176[(8)]);
var inst_27091 = cljs.core.async.close_BANG_.call(null,inst_27088);
var state_27176__$1 = state_27176;
var statearr_27210_27280 = state_27176__$1;
(statearr_27210_27280[(2)] = inst_27091);

(statearr_27210_27280[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (36))){
var inst_27135 = (state_27176[(25)]);
var inst_27139 = cljs.core.chunk_first.call(null,inst_27135);
var inst_27140 = cljs.core.chunk_rest.call(null,inst_27135);
var inst_27141 = cljs.core.count.call(null,inst_27139);
var inst_27116 = inst_27140;
var inst_27117 = inst_27139;
var inst_27118 = inst_27141;
var inst_27119 = (0);
var state_27176__$1 = (function (){var statearr_27211 = state_27176;
(statearr_27211[(10)] = inst_27119);

(statearr_27211[(20)] = inst_27116);

(statearr_27211[(21)] = inst_27118);

(statearr_27211[(12)] = inst_27117);

return statearr_27211;
})();
var statearr_27212_27281 = state_27176__$1;
(statearr_27212_27281[(2)] = null);

(statearr_27212_27281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (41))){
var inst_27135 = (state_27176[(25)]);
var inst_27151 = (state_27176[(2)]);
var inst_27152 = cljs.core.next.call(null,inst_27135);
var inst_27116 = inst_27152;
var inst_27117 = null;
var inst_27118 = (0);
var inst_27119 = (0);
var state_27176__$1 = (function (){var statearr_27213 = state_27176;
(statearr_27213[(10)] = inst_27119);

(statearr_27213[(27)] = inst_27151);

(statearr_27213[(20)] = inst_27116);

(statearr_27213[(21)] = inst_27118);

(statearr_27213[(12)] = inst_27117);

return statearr_27213;
})();
var statearr_27214_27282 = state_27176__$1;
(statearr_27214_27282[(2)] = null);

(statearr_27214_27282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (43))){
var state_27176__$1 = state_27176;
var statearr_27215_27283 = state_27176__$1;
(statearr_27215_27283[(2)] = null);

(statearr_27215_27283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (29))){
var inst_27160 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27216_27284 = state_27176__$1;
(statearr_27216_27284[(2)] = inst_27160);

(statearr_27216_27284[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (44))){
var inst_27169 = (state_27176[(2)]);
var state_27176__$1 = (function (){var statearr_27217 = state_27176;
(statearr_27217[(28)] = inst_27169);

return statearr_27217;
})();
var statearr_27218_27285 = state_27176__$1;
(statearr_27218_27285[(2)] = null);

(statearr_27218_27285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (6))){
var inst_27108 = (state_27176[(29)]);
var inst_27107 = cljs.core.deref.call(null,cs);
var inst_27108__$1 = cljs.core.keys.call(null,inst_27107);
var inst_27109 = cljs.core.count.call(null,inst_27108__$1);
var inst_27110 = cljs.core.reset_BANG_.call(null,dctr,inst_27109);
var inst_27115 = cljs.core.seq.call(null,inst_27108__$1);
var inst_27116 = inst_27115;
var inst_27117 = null;
var inst_27118 = (0);
var inst_27119 = (0);
var state_27176__$1 = (function (){var statearr_27219 = state_27176;
(statearr_27219[(29)] = inst_27108__$1);

(statearr_27219[(10)] = inst_27119);

(statearr_27219[(20)] = inst_27116);

(statearr_27219[(21)] = inst_27118);

(statearr_27219[(30)] = inst_27110);

(statearr_27219[(12)] = inst_27117);

return statearr_27219;
})();
var statearr_27220_27286 = state_27176__$1;
(statearr_27220_27286[(2)] = null);

(statearr_27220_27286[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (28))){
var inst_27116 = (state_27176[(20)]);
var inst_27135 = (state_27176[(25)]);
var inst_27135__$1 = cljs.core.seq.call(null,inst_27116);
var state_27176__$1 = (function (){var statearr_27221 = state_27176;
(statearr_27221[(25)] = inst_27135__$1);

return statearr_27221;
})();
if(inst_27135__$1){
var statearr_27222_27287 = state_27176__$1;
(statearr_27222_27287[(1)] = (33));

} else {
var statearr_27223_27288 = state_27176__$1;
(statearr_27223_27288[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (25))){
var inst_27119 = (state_27176[(10)]);
var inst_27118 = (state_27176[(21)]);
var inst_27121 = (inst_27119 < inst_27118);
var inst_27122 = inst_27121;
var state_27176__$1 = state_27176;
if(cljs.core.truth_(inst_27122)){
var statearr_27224_27289 = state_27176__$1;
(statearr_27224_27289[(1)] = (27));

} else {
var statearr_27225_27290 = state_27176__$1;
(statearr_27225_27290[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (34))){
var state_27176__$1 = state_27176;
var statearr_27226_27291 = state_27176__$1;
(statearr_27226_27291[(2)] = null);

(statearr_27226_27291[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (17))){
var state_27176__$1 = state_27176;
var statearr_27227_27292 = state_27176__$1;
(statearr_27227_27292[(2)] = null);

(statearr_27227_27292[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (3))){
var inst_27174 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27176__$1,inst_27174);
} else {
if((state_val_27177 === (12))){
var inst_27103 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27228_27293 = state_27176__$1;
(statearr_27228_27293[(2)] = inst_27103);

(statearr_27228_27293[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (2))){
var state_27176__$1 = state_27176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27176__$1,(4),ch);
} else {
if((state_val_27177 === (23))){
var state_27176__$1 = state_27176;
var statearr_27229_27294 = state_27176__$1;
(statearr_27229_27294[(2)] = null);

(statearr_27229_27294[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (35))){
var inst_27158 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27230_27295 = state_27176__$1;
(statearr_27230_27295[(2)] = inst_27158);

(statearr_27230_27295[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (19))){
var inst_27075 = (state_27176[(7)]);
var inst_27079 = cljs.core.chunk_first.call(null,inst_27075);
var inst_27080 = cljs.core.chunk_rest.call(null,inst_27075);
var inst_27081 = cljs.core.count.call(null,inst_27079);
var inst_27053 = inst_27080;
var inst_27054 = inst_27079;
var inst_27055 = inst_27081;
var inst_27056 = (0);
var state_27176__$1 = (function (){var statearr_27231 = state_27176;
(statearr_27231[(14)] = inst_27055);

(statearr_27231[(15)] = inst_27056);

(statearr_27231[(16)] = inst_27053);

(statearr_27231[(17)] = inst_27054);

return statearr_27231;
})();
var statearr_27232_27296 = state_27176__$1;
(statearr_27232_27296[(2)] = null);

(statearr_27232_27296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (11))){
var inst_27075 = (state_27176[(7)]);
var inst_27053 = (state_27176[(16)]);
var inst_27075__$1 = cljs.core.seq.call(null,inst_27053);
var state_27176__$1 = (function (){var statearr_27233 = state_27176;
(statearr_27233[(7)] = inst_27075__$1);

return statearr_27233;
})();
if(inst_27075__$1){
var statearr_27234_27297 = state_27176__$1;
(statearr_27234_27297[(1)] = (16));

} else {
var statearr_27235_27298 = state_27176__$1;
(statearr_27235_27298[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (9))){
var inst_27105 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27236_27299 = state_27176__$1;
(statearr_27236_27299[(2)] = inst_27105);

(statearr_27236_27299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (5))){
var inst_27051 = cljs.core.deref.call(null,cs);
var inst_27052 = cljs.core.seq.call(null,inst_27051);
var inst_27053 = inst_27052;
var inst_27054 = null;
var inst_27055 = (0);
var inst_27056 = (0);
var state_27176__$1 = (function (){var statearr_27237 = state_27176;
(statearr_27237[(14)] = inst_27055);

(statearr_27237[(15)] = inst_27056);

(statearr_27237[(16)] = inst_27053);

(statearr_27237[(17)] = inst_27054);

return statearr_27237;
})();
var statearr_27238_27300 = state_27176__$1;
(statearr_27238_27300[(2)] = null);

(statearr_27238_27300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (14))){
var state_27176__$1 = state_27176;
var statearr_27239_27301 = state_27176__$1;
(statearr_27239_27301[(2)] = null);

(statearr_27239_27301[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (45))){
var inst_27166 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27240_27302 = state_27176__$1;
(statearr_27240_27302[(2)] = inst_27166);

(statearr_27240_27302[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (26))){
var inst_27108 = (state_27176[(29)]);
var inst_27162 = (state_27176[(2)]);
var inst_27163 = cljs.core.seq.call(null,inst_27108);
var state_27176__$1 = (function (){var statearr_27241 = state_27176;
(statearr_27241[(31)] = inst_27162);

return statearr_27241;
})();
if(inst_27163){
var statearr_27242_27303 = state_27176__$1;
(statearr_27242_27303[(1)] = (42));

} else {
var statearr_27243_27304 = state_27176__$1;
(statearr_27243_27304[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (16))){
var inst_27075 = (state_27176[(7)]);
var inst_27077 = cljs.core.chunked_seq_QMARK_.call(null,inst_27075);
var state_27176__$1 = state_27176;
if(inst_27077){
var statearr_27244_27305 = state_27176__$1;
(statearr_27244_27305[(1)] = (19));

} else {
var statearr_27245_27306 = state_27176__$1;
(statearr_27245_27306[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (38))){
var inst_27155 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27246_27307 = state_27176__$1;
(statearr_27246_27307[(2)] = inst_27155);

(statearr_27246_27307[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (30))){
var state_27176__$1 = state_27176;
var statearr_27247_27308 = state_27176__$1;
(statearr_27247_27308[(2)] = null);

(statearr_27247_27308[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (10))){
var inst_27056 = (state_27176[(15)]);
var inst_27054 = (state_27176[(17)]);
var inst_27064 = cljs.core._nth.call(null,inst_27054,inst_27056);
var inst_27065 = cljs.core.nth.call(null,inst_27064,(0),null);
var inst_27066 = cljs.core.nth.call(null,inst_27064,(1),null);
var state_27176__$1 = (function (){var statearr_27248 = state_27176;
(statearr_27248[(26)] = inst_27065);

return statearr_27248;
})();
if(cljs.core.truth_(inst_27066)){
var statearr_27249_27309 = state_27176__$1;
(statearr_27249_27309[(1)] = (13));

} else {
var statearr_27250_27310 = state_27176__$1;
(statearr_27250_27310[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (18))){
var inst_27101 = (state_27176[(2)]);
var state_27176__$1 = state_27176;
var statearr_27251_27311 = state_27176__$1;
(statearr_27251_27311[(2)] = inst_27101);

(statearr_27251_27311[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (42))){
var state_27176__$1 = state_27176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27176__$1,(45),dchan);
} else {
if((state_val_27177 === (37))){
var inst_27144 = (state_27176[(23)]);
var inst_27044 = (state_27176[(11)]);
var inst_27135 = (state_27176[(25)]);
var inst_27144__$1 = cljs.core.first.call(null,inst_27135);
var inst_27145 = cljs.core.async.put_BANG_.call(null,inst_27144__$1,inst_27044,done);
var state_27176__$1 = (function (){var statearr_27252 = state_27176;
(statearr_27252[(23)] = inst_27144__$1);

return statearr_27252;
})();
if(cljs.core.truth_(inst_27145)){
var statearr_27253_27312 = state_27176__$1;
(statearr_27253_27312[(1)] = (39));

} else {
var statearr_27254_27313 = state_27176__$1;
(statearr_27254_27313[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27177 === (8))){
var inst_27055 = (state_27176[(14)]);
var inst_27056 = (state_27176[(15)]);
var inst_27058 = (inst_27056 < inst_27055);
var inst_27059 = inst_27058;
var state_27176__$1 = state_27176;
if(cljs.core.truth_(inst_27059)){
var statearr_27255_27314 = state_27176__$1;
(statearr_27255_27314[(1)] = (10));

} else {
var statearr_27256_27315 = state_27176__$1;
(statearr_27256_27315[(1)] = (11));

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
});})(c__24578__auto___27261,cs,m,dchan,dctr,done))
;
return ((function (switch__23615__auto__,c__24578__auto___27261,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23616__auto__ = null;
var cljs$core$async$mult_$_state_machine__23616__auto____0 = (function (){
var statearr_27257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27257[(0)] = cljs$core$async$mult_$_state_machine__23616__auto__);

(statearr_27257[(1)] = (1));

return statearr_27257;
});
var cljs$core$async$mult_$_state_machine__23616__auto____1 = (function (state_27176){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27258){if((e27258 instanceof Object)){
var ex__23619__auto__ = e27258;
var statearr_27259_27316 = state_27176;
(statearr_27259_27316[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27317 = state_27176;
state_27176 = G__27317;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23616__auto__ = function(state_27176){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23616__auto____1.call(this,state_27176);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23616__auto____0;
cljs$core$async$mult_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23616__auto____1;
return cljs$core$async$mult_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___27261,cs,m,dchan,dctr,done))
})();
var state__24580__auto__ = (function (){var statearr_27260 = f__24579__auto__.call(null);
(statearr_27260[(6)] = c__24578__auto___27261);

return statearr_27260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___27261,cs,m,dchan,dctr,done))
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
var G__27319 = arguments.length;
switch (G__27319) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___27331 = arguments.length;
var i__4731__auto___27332 = (0);
while(true){
if((i__4731__auto___27332 < len__4730__auto___27331)){
args__4736__auto__.push((arguments[i__4731__auto___27332]));

var G__27333 = (i__4731__auto___27332 + (1));
i__4731__auto___27332 = G__27333;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27325){
var map__27326 = p__27325;
var map__27326__$1 = (((((!((map__27326 == null))))?(((((map__27326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27326):map__27326);
var opts = map__27326__$1;
var statearr_27328_27334 = state;
(statearr_27328_27334[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__27326,map__27326__$1,opts){
return (function (val){
var statearr_27329_27335 = state;
(statearr_27329_27335[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27326,map__27326__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_27330_27336 = state;
(statearr_27330_27336[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27321){
var G__27322 = cljs.core.first.call(null,seq27321);
var seq27321__$1 = cljs.core.next.call(null,seq27321);
var G__27323 = cljs.core.first.call(null,seq27321__$1);
var seq27321__$2 = cljs.core.next.call(null,seq27321__$1);
var G__27324 = cljs.core.first.call(null,seq27321__$2);
var seq27321__$3 = cljs.core.next.call(null,seq27321__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27322,G__27323,G__27324,seq27321__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27337 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27338){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta27338 = meta27338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27339,meta27338__$1){
var self__ = this;
var _27339__$1 = this;
return (new cljs.core.async.t_cljs$core$async27337(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27338__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27339){
var self__ = this;
var _27339__$1 = this;
return self__.meta27338;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27338","meta27338",1548434970,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27337.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27337.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27337";

cljs.core.async.t_cljs$core$async27337.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27337");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27337.
 */
cljs.core.async.__GT_t_cljs$core$async27337 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27337(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27338){
return (new cljs.core.async.t_cljs$core$async27337(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27338));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27337(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24578__auto___27501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___27501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___27501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27441){
var state_val_27442 = (state_27441[(1)]);
if((state_val_27442 === (7))){
var inst_27356 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
var statearr_27443_27502 = state_27441__$1;
(statearr_27443_27502[(2)] = inst_27356);

(statearr_27443_27502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (20))){
var inst_27368 = (state_27441[(7)]);
var state_27441__$1 = state_27441;
var statearr_27444_27503 = state_27441__$1;
(statearr_27444_27503[(2)] = inst_27368);

(statearr_27444_27503[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (27))){
var state_27441__$1 = state_27441;
var statearr_27445_27504 = state_27441__$1;
(statearr_27445_27504[(2)] = null);

(statearr_27445_27504[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (1))){
var inst_27343 = (state_27441[(8)]);
var inst_27343__$1 = calc_state.call(null);
var inst_27345 = (inst_27343__$1 == null);
var inst_27346 = cljs.core.not.call(null,inst_27345);
var state_27441__$1 = (function (){var statearr_27446 = state_27441;
(statearr_27446[(8)] = inst_27343__$1);

return statearr_27446;
})();
if(inst_27346){
var statearr_27447_27505 = state_27441__$1;
(statearr_27447_27505[(1)] = (2));

} else {
var statearr_27448_27506 = state_27441__$1;
(statearr_27448_27506[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (24))){
var inst_27415 = (state_27441[(9)]);
var inst_27392 = (state_27441[(10)]);
var inst_27401 = (state_27441[(11)]);
var inst_27415__$1 = inst_27392.call(null,inst_27401);
var state_27441__$1 = (function (){var statearr_27449 = state_27441;
(statearr_27449[(9)] = inst_27415__$1);

return statearr_27449;
})();
if(cljs.core.truth_(inst_27415__$1)){
var statearr_27450_27507 = state_27441__$1;
(statearr_27450_27507[(1)] = (29));

} else {
var statearr_27451_27508 = state_27441__$1;
(statearr_27451_27508[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (4))){
var inst_27359 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27359)){
var statearr_27452_27509 = state_27441__$1;
(statearr_27452_27509[(1)] = (8));

} else {
var statearr_27453_27510 = state_27441__$1;
(statearr_27453_27510[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (15))){
var inst_27386 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27386)){
var statearr_27454_27511 = state_27441__$1;
(statearr_27454_27511[(1)] = (19));

} else {
var statearr_27455_27512 = state_27441__$1;
(statearr_27455_27512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (21))){
var inst_27391 = (state_27441[(12)]);
var inst_27391__$1 = (state_27441[(2)]);
var inst_27392 = cljs.core.get.call(null,inst_27391__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27393 = cljs.core.get.call(null,inst_27391__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27394 = cljs.core.get.call(null,inst_27391__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27441__$1 = (function (){var statearr_27456 = state_27441;
(statearr_27456[(12)] = inst_27391__$1);

(statearr_27456[(10)] = inst_27392);

(statearr_27456[(13)] = inst_27393);

return statearr_27456;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27441__$1,(22),inst_27394);
} else {
if((state_val_27442 === (31))){
var inst_27423 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27423)){
var statearr_27457_27513 = state_27441__$1;
(statearr_27457_27513[(1)] = (32));

} else {
var statearr_27458_27514 = state_27441__$1;
(statearr_27458_27514[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (32))){
var inst_27400 = (state_27441[(14)]);
var state_27441__$1 = state_27441;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27441__$1,(35),out,inst_27400);
} else {
if((state_val_27442 === (33))){
var inst_27391 = (state_27441[(12)]);
var inst_27368 = inst_27391;
var state_27441__$1 = (function (){var statearr_27459 = state_27441;
(statearr_27459[(7)] = inst_27368);

return statearr_27459;
})();
var statearr_27460_27515 = state_27441__$1;
(statearr_27460_27515[(2)] = null);

(statearr_27460_27515[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (13))){
var inst_27368 = (state_27441[(7)]);
var inst_27375 = inst_27368.cljs$lang$protocol_mask$partition0$;
var inst_27376 = (inst_27375 & (64));
var inst_27377 = inst_27368.cljs$core$ISeq$;
var inst_27378 = (cljs.core.PROTOCOL_SENTINEL === inst_27377);
var inst_27379 = ((inst_27376) || (inst_27378));
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27379)){
var statearr_27461_27516 = state_27441__$1;
(statearr_27461_27516[(1)] = (16));

} else {
var statearr_27462_27517 = state_27441__$1;
(statearr_27462_27517[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (22))){
var inst_27400 = (state_27441[(14)]);
var inst_27401 = (state_27441[(11)]);
var inst_27399 = (state_27441[(2)]);
var inst_27400__$1 = cljs.core.nth.call(null,inst_27399,(0),null);
var inst_27401__$1 = cljs.core.nth.call(null,inst_27399,(1),null);
var inst_27402 = (inst_27400__$1 == null);
var inst_27403 = cljs.core._EQ_.call(null,inst_27401__$1,change);
var inst_27404 = ((inst_27402) || (inst_27403));
var state_27441__$1 = (function (){var statearr_27463 = state_27441;
(statearr_27463[(14)] = inst_27400__$1);

(statearr_27463[(11)] = inst_27401__$1);

return statearr_27463;
})();
if(cljs.core.truth_(inst_27404)){
var statearr_27464_27518 = state_27441__$1;
(statearr_27464_27518[(1)] = (23));

} else {
var statearr_27465_27519 = state_27441__$1;
(statearr_27465_27519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (36))){
var inst_27391 = (state_27441[(12)]);
var inst_27368 = inst_27391;
var state_27441__$1 = (function (){var statearr_27466 = state_27441;
(statearr_27466[(7)] = inst_27368);

return statearr_27466;
})();
var statearr_27467_27520 = state_27441__$1;
(statearr_27467_27520[(2)] = null);

(statearr_27467_27520[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (29))){
var inst_27415 = (state_27441[(9)]);
var state_27441__$1 = state_27441;
var statearr_27468_27521 = state_27441__$1;
(statearr_27468_27521[(2)] = inst_27415);

(statearr_27468_27521[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (6))){
var state_27441__$1 = state_27441;
var statearr_27469_27522 = state_27441__$1;
(statearr_27469_27522[(2)] = false);

(statearr_27469_27522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (28))){
var inst_27411 = (state_27441[(2)]);
var inst_27412 = calc_state.call(null);
var inst_27368 = inst_27412;
var state_27441__$1 = (function (){var statearr_27470 = state_27441;
(statearr_27470[(15)] = inst_27411);

(statearr_27470[(7)] = inst_27368);

return statearr_27470;
})();
var statearr_27471_27523 = state_27441__$1;
(statearr_27471_27523[(2)] = null);

(statearr_27471_27523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (25))){
var inst_27437 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
var statearr_27472_27524 = state_27441__$1;
(statearr_27472_27524[(2)] = inst_27437);

(statearr_27472_27524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (34))){
var inst_27435 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
var statearr_27473_27525 = state_27441__$1;
(statearr_27473_27525[(2)] = inst_27435);

(statearr_27473_27525[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (17))){
var state_27441__$1 = state_27441;
var statearr_27474_27526 = state_27441__$1;
(statearr_27474_27526[(2)] = false);

(statearr_27474_27526[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (3))){
var state_27441__$1 = state_27441;
var statearr_27475_27527 = state_27441__$1;
(statearr_27475_27527[(2)] = false);

(statearr_27475_27527[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (12))){
var inst_27439 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27441__$1,inst_27439);
} else {
if((state_val_27442 === (2))){
var inst_27343 = (state_27441[(8)]);
var inst_27348 = inst_27343.cljs$lang$protocol_mask$partition0$;
var inst_27349 = (inst_27348 & (64));
var inst_27350 = inst_27343.cljs$core$ISeq$;
var inst_27351 = (cljs.core.PROTOCOL_SENTINEL === inst_27350);
var inst_27352 = ((inst_27349) || (inst_27351));
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27352)){
var statearr_27476_27528 = state_27441__$1;
(statearr_27476_27528[(1)] = (5));

} else {
var statearr_27477_27529 = state_27441__$1;
(statearr_27477_27529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (23))){
var inst_27400 = (state_27441[(14)]);
var inst_27406 = (inst_27400 == null);
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27406)){
var statearr_27478_27530 = state_27441__$1;
(statearr_27478_27530[(1)] = (26));

} else {
var statearr_27479_27531 = state_27441__$1;
(statearr_27479_27531[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (35))){
var inst_27426 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
if(cljs.core.truth_(inst_27426)){
var statearr_27480_27532 = state_27441__$1;
(statearr_27480_27532[(1)] = (36));

} else {
var statearr_27481_27533 = state_27441__$1;
(statearr_27481_27533[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (19))){
var inst_27368 = (state_27441[(7)]);
var inst_27388 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27368);
var state_27441__$1 = state_27441;
var statearr_27482_27534 = state_27441__$1;
(statearr_27482_27534[(2)] = inst_27388);

(statearr_27482_27534[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (11))){
var inst_27368 = (state_27441[(7)]);
var inst_27372 = (inst_27368 == null);
var inst_27373 = cljs.core.not.call(null,inst_27372);
var state_27441__$1 = state_27441;
if(inst_27373){
var statearr_27483_27535 = state_27441__$1;
(statearr_27483_27535[(1)] = (13));

} else {
var statearr_27484_27536 = state_27441__$1;
(statearr_27484_27536[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (9))){
var inst_27343 = (state_27441[(8)]);
var state_27441__$1 = state_27441;
var statearr_27485_27537 = state_27441__$1;
(statearr_27485_27537[(2)] = inst_27343);

(statearr_27485_27537[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (5))){
var state_27441__$1 = state_27441;
var statearr_27486_27538 = state_27441__$1;
(statearr_27486_27538[(2)] = true);

(statearr_27486_27538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (14))){
var state_27441__$1 = state_27441;
var statearr_27487_27539 = state_27441__$1;
(statearr_27487_27539[(2)] = false);

(statearr_27487_27539[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (26))){
var inst_27401 = (state_27441[(11)]);
var inst_27408 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27401);
var state_27441__$1 = state_27441;
var statearr_27488_27540 = state_27441__$1;
(statearr_27488_27540[(2)] = inst_27408);

(statearr_27488_27540[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (16))){
var state_27441__$1 = state_27441;
var statearr_27489_27541 = state_27441__$1;
(statearr_27489_27541[(2)] = true);

(statearr_27489_27541[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (38))){
var inst_27431 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
var statearr_27490_27542 = state_27441__$1;
(statearr_27490_27542[(2)] = inst_27431);

(statearr_27490_27542[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (30))){
var inst_27392 = (state_27441[(10)]);
var inst_27393 = (state_27441[(13)]);
var inst_27401 = (state_27441[(11)]);
var inst_27418 = cljs.core.empty_QMARK_.call(null,inst_27392);
var inst_27419 = inst_27393.call(null,inst_27401);
var inst_27420 = cljs.core.not.call(null,inst_27419);
var inst_27421 = ((inst_27418) && (inst_27420));
var state_27441__$1 = state_27441;
var statearr_27491_27543 = state_27441__$1;
(statearr_27491_27543[(2)] = inst_27421);

(statearr_27491_27543[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (10))){
var inst_27343 = (state_27441[(8)]);
var inst_27364 = (state_27441[(2)]);
var inst_27365 = cljs.core.get.call(null,inst_27364,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27366 = cljs.core.get.call(null,inst_27364,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27367 = cljs.core.get.call(null,inst_27364,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27368 = inst_27343;
var state_27441__$1 = (function (){var statearr_27492 = state_27441;
(statearr_27492[(16)] = inst_27367);

(statearr_27492[(17)] = inst_27365);

(statearr_27492[(7)] = inst_27368);

(statearr_27492[(18)] = inst_27366);

return statearr_27492;
})();
var statearr_27493_27544 = state_27441__$1;
(statearr_27493_27544[(2)] = null);

(statearr_27493_27544[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (18))){
var inst_27383 = (state_27441[(2)]);
var state_27441__$1 = state_27441;
var statearr_27494_27545 = state_27441__$1;
(statearr_27494_27545[(2)] = inst_27383);

(statearr_27494_27545[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (37))){
var state_27441__$1 = state_27441;
var statearr_27495_27546 = state_27441__$1;
(statearr_27495_27546[(2)] = null);

(statearr_27495_27546[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27442 === (8))){
var inst_27343 = (state_27441[(8)]);
var inst_27361 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27343);
var state_27441__$1 = state_27441;
var statearr_27496_27547 = state_27441__$1;
(statearr_27496_27547[(2)] = inst_27361);

(statearr_27496_27547[(1)] = (10));


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
});})(c__24578__auto___27501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23615__auto__,c__24578__auto___27501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23616__auto__ = null;
var cljs$core$async$mix_$_state_machine__23616__auto____0 = (function (){
var statearr_27497 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27497[(0)] = cljs$core$async$mix_$_state_machine__23616__auto__);

(statearr_27497[(1)] = (1));

return statearr_27497;
});
var cljs$core$async$mix_$_state_machine__23616__auto____1 = (function (state_27441){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27498){if((e27498 instanceof Object)){
var ex__23619__auto__ = e27498;
var statearr_27499_27548 = state_27441;
(statearr_27499_27548[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27549 = state_27441;
state_27441 = G__27549;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23616__auto__ = function(state_27441){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23616__auto____1.call(this,state_27441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23616__auto____0;
cljs$core$async$mix_$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23616__auto____1;
return cljs$core$async$mix_$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___27501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24580__auto__ = (function (){var statearr_27500 = f__24579__auto__.call(null);
(statearr_27500[(6)] = c__24578__auto___27501);

return statearr_27500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___27501,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27551 = arguments.length;
switch (G__27551) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__27555 = arguments.length;
switch (G__27555) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__27553_SHARP_){
if(cljs.core.truth_(p1__27553_SHARP_.call(null,topic))){
return p1__27553_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27553_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27556 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27556 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27557){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27557 = meta27557;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27558,meta27557__$1){
var self__ = this;
var _27558__$1 = this;
return (new cljs.core.async.t_cljs$core$async27556(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27557__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27558){
var self__ = this;
var _27558__$1 = this;
return self__.meta27557;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27557","meta27557",-1624135761,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27556.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27556.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27556";

cljs.core.async.t_cljs$core$async27556.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27556");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27556.
 */
cljs.core.async.__GT_t_cljs$core$async27556 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27556(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27557){
return (new cljs.core.async.t_cljs$core$async27556(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27557));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27556(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24578__auto___27676 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___27676,mults,ensure_mult,p){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___27676,mults,ensure_mult,p){
return (function (state_27630){
var state_val_27631 = (state_27630[(1)]);
if((state_val_27631 === (7))){
var inst_27626 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27632_27677 = state_27630__$1;
(statearr_27632_27677[(2)] = inst_27626);

(statearr_27632_27677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (20))){
var state_27630__$1 = state_27630;
var statearr_27633_27678 = state_27630__$1;
(statearr_27633_27678[(2)] = null);

(statearr_27633_27678[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (1))){
var state_27630__$1 = state_27630;
var statearr_27634_27679 = state_27630__$1;
(statearr_27634_27679[(2)] = null);

(statearr_27634_27679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (24))){
var inst_27609 = (state_27630[(7)]);
var inst_27618 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27609);
var state_27630__$1 = state_27630;
var statearr_27635_27680 = state_27630__$1;
(statearr_27635_27680[(2)] = inst_27618);

(statearr_27635_27680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (4))){
var inst_27561 = (state_27630[(8)]);
var inst_27561__$1 = (state_27630[(2)]);
var inst_27562 = (inst_27561__$1 == null);
var state_27630__$1 = (function (){var statearr_27636 = state_27630;
(statearr_27636[(8)] = inst_27561__$1);

return statearr_27636;
})();
if(cljs.core.truth_(inst_27562)){
var statearr_27637_27681 = state_27630__$1;
(statearr_27637_27681[(1)] = (5));

} else {
var statearr_27638_27682 = state_27630__$1;
(statearr_27638_27682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (15))){
var inst_27603 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27639_27683 = state_27630__$1;
(statearr_27639_27683[(2)] = inst_27603);

(statearr_27639_27683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (21))){
var inst_27623 = (state_27630[(2)]);
var state_27630__$1 = (function (){var statearr_27640 = state_27630;
(statearr_27640[(9)] = inst_27623);

return statearr_27640;
})();
var statearr_27641_27684 = state_27630__$1;
(statearr_27641_27684[(2)] = null);

(statearr_27641_27684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (13))){
var inst_27585 = (state_27630[(10)]);
var inst_27587 = cljs.core.chunked_seq_QMARK_.call(null,inst_27585);
var state_27630__$1 = state_27630;
if(inst_27587){
var statearr_27642_27685 = state_27630__$1;
(statearr_27642_27685[(1)] = (16));

} else {
var statearr_27643_27686 = state_27630__$1;
(statearr_27643_27686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (22))){
var inst_27615 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
if(cljs.core.truth_(inst_27615)){
var statearr_27644_27687 = state_27630__$1;
(statearr_27644_27687[(1)] = (23));

} else {
var statearr_27645_27688 = state_27630__$1;
(statearr_27645_27688[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (6))){
var inst_27609 = (state_27630[(7)]);
var inst_27561 = (state_27630[(8)]);
var inst_27611 = (state_27630[(11)]);
var inst_27609__$1 = topic_fn.call(null,inst_27561);
var inst_27610 = cljs.core.deref.call(null,mults);
var inst_27611__$1 = cljs.core.get.call(null,inst_27610,inst_27609__$1);
var state_27630__$1 = (function (){var statearr_27646 = state_27630;
(statearr_27646[(7)] = inst_27609__$1);

(statearr_27646[(11)] = inst_27611__$1);

return statearr_27646;
})();
if(cljs.core.truth_(inst_27611__$1)){
var statearr_27647_27689 = state_27630__$1;
(statearr_27647_27689[(1)] = (19));

} else {
var statearr_27648_27690 = state_27630__$1;
(statearr_27648_27690[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (25))){
var inst_27620 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27649_27691 = state_27630__$1;
(statearr_27649_27691[(2)] = inst_27620);

(statearr_27649_27691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (17))){
var inst_27585 = (state_27630[(10)]);
var inst_27594 = cljs.core.first.call(null,inst_27585);
var inst_27595 = cljs.core.async.muxch_STAR_.call(null,inst_27594);
var inst_27596 = cljs.core.async.close_BANG_.call(null,inst_27595);
var inst_27597 = cljs.core.next.call(null,inst_27585);
var inst_27571 = inst_27597;
var inst_27572 = null;
var inst_27573 = (0);
var inst_27574 = (0);
var state_27630__$1 = (function (){var statearr_27650 = state_27630;
(statearr_27650[(12)] = inst_27572);

(statearr_27650[(13)] = inst_27574);

(statearr_27650[(14)] = inst_27571);

(statearr_27650[(15)] = inst_27596);

(statearr_27650[(16)] = inst_27573);

return statearr_27650;
})();
var statearr_27651_27692 = state_27630__$1;
(statearr_27651_27692[(2)] = null);

(statearr_27651_27692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (3))){
var inst_27628 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27630__$1,inst_27628);
} else {
if((state_val_27631 === (12))){
var inst_27605 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27652_27693 = state_27630__$1;
(statearr_27652_27693[(2)] = inst_27605);

(statearr_27652_27693[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (2))){
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27630__$1,(4),ch);
} else {
if((state_val_27631 === (23))){
var state_27630__$1 = state_27630;
var statearr_27653_27694 = state_27630__$1;
(statearr_27653_27694[(2)] = null);

(statearr_27653_27694[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (19))){
var inst_27561 = (state_27630[(8)]);
var inst_27611 = (state_27630[(11)]);
var inst_27613 = cljs.core.async.muxch_STAR_.call(null,inst_27611);
var state_27630__$1 = state_27630;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27630__$1,(22),inst_27613,inst_27561);
} else {
if((state_val_27631 === (11))){
var inst_27585 = (state_27630[(10)]);
var inst_27571 = (state_27630[(14)]);
var inst_27585__$1 = cljs.core.seq.call(null,inst_27571);
var state_27630__$1 = (function (){var statearr_27654 = state_27630;
(statearr_27654[(10)] = inst_27585__$1);

return statearr_27654;
})();
if(inst_27585__$1){
var statearr_27655_27695 = state_27630__$1;
(statearr_27655_27695[(1)] = (13));

} else {
var statearr_27656_27696 = state_27630__$1;
(statearr_27656_27696[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (9))){
var inst_27607 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27657_27697 = state_27630__$1;
(statearr_27657_27697[(2)] = inst_27607);

(statearr_27657_27697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (5))){
var inst_27568 = cljs.core.deref.call(null,mults);
var inst_27569 = cljs.core.vals.call(null,inst_27568);
var inst_27570 = cljs.core.seq.call(null,inst_27569);
var inst_27571 = inst_27570;
var inst_27572 = null;
var inst_27573 = (0);
var inst_27574 = (0);
var state_27630__$1 = (function (){var statearr_27658 = state_27630;
(statearr_27658[(12)] = inst_27572);

(statearr_27658[(13)] = inst_27574);

(statearr_27658[(14)] = inst_27571);

(statearr_27658[(16)] = inst_27573);

return statearr_27658;
})();
var statearr_27659_27698 = state_27630__$1;
(statearr_27659_27698[(2)] = null);

(statearr_27659_27698[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (14))){
var state_27630__$1 = state_27630;
var statearr_27663_27699 = state_27630__$1;
(statearr_27663_27699[(2)] = null);

(statearr_27663_27699[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (16))){
var inst_27585 = (state_27630[(10)]);
var inst_27589 = cljs.core.chunk_first.call(null,inst_27585);
var inst_27590 = cljs.core.chunk_rest.call(null,inst_27585);
var inst_27591 = cljs.core.count.call(null,inst_27589);
var inst_27571 = inst_27590;
var inst_27572 = inst_27589;
var inst_27573 = inst_27591;
var inst_27574 = (0);
var state_27630__$1 = (function (){var statearr_27664 = state_27630;
(statearr_27664[(12)] = inst_27572);

(statearr_27664[(13)] = inst_27574);

(statearr_27664[(14)] = inst_27571);

(statearr_27664[(16)] = inst_27573);

return statearr_27664;
})();
var statearr_27665_27700 = state_27630__$1;
(statearr_27665_27700[(2)] = null);

(statearr_27665_27700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (10))){
var inst_27572 = (state_27630[(12)]);
var inst_27574 = (state_27630[(13)]);
var inst_27571 = (state_27630[(14)]);
var inst_27573 = (state_27630[(16)]);
var inst_27579 = cljs.core._nth.call(null,inst_27572,inst_27574);
var inst_27580 = cljs.core.async.muxch_STAR_.call(null,inst_27579);
var inst_27581 = cljs.core.async.close_BANG_.call(null,inst_27580);
var inst_27582 = (inst_27574 + (1));
var tmp27660 = inst_27572;
var tmp27661 = inst_27571;
var tmp27662 = inst_27573;
var inst_27571__$1 = tmp27661;
var inst_27572__$1 = tmp27660;
var inst_27573__$1 = tmp27662;
var inst_27574__$1 = inst_27582;
var state_27630__$1 = (function (){var statearr_27666 = state_27630;
(statearr_27666[(17)] = inst_27581);

(statearr_27666[(12)] = inst_27572__$1);

(statearr_27666[(13)] = inst_27574__$1);

(statearr_27666[(14)] = inst_27571__$1);

(statearr_27666[(16)] = inst_27573__$1);

return statearr_27666;
})();
var statearr_27667_27701 = state_27630__$1;
(statearr_27667_27701[(2)] = null);

(statearr_27667_27701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (18))){
var inst_27600 = (state_27630[(2)]);
var state_27630__$1 = state_27630;
var statearr_27668_27702 = state_27630__$1;
(statearr_27668_27702[(2)] = inst_27600);

(statearr_27668_27702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27631 === (8))){
var inst_27574 = (state_27630[(13)]);
var inst_27573 = (state_27630[(16)]);
var inst_27576 = (inst_27574 < inst_27573);
var inst_27577 = inst_27576;
var state_27630__$1 = state_27630;
if(cljs.core.truth_(inst_27577)){
var statearr_27669_27703 = state_27630__$1;
(statearr_27669_27703[(1)] = (10));

} else {
var statearr_27670_27704 = state_27630__$1;
(statearr_27670_27704[(1)] = (11));

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
});})(c__24578__auto___27676,mults,ensure_mult,p))
;
return ((function (switch__23615__auto__,c__24578__auto___27676,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_27671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27671[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_27671[(1)] = (1));

return statearr_27671;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_27630){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27672){if((e27672 instanceof Object)){
var ex__23619__auto__ = e27672;
var statearr_27673_27705 = state_27630;
(statearr_27673_27705[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27672;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27706 = state_27630;
state_27630 = G__27706;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_27630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_27630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___27676,mults,ensure_mult,p))
})();
var state__24580__auto__ = (function (){var statearr_27674 = f__24579__auto__.call(null);
(statearr_27674[(6)] = c__24578__auto___27676);

return statearr_27674;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___27676,mults,ensure_mult,p))
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
var G__27708 = arguments.length;
switch (G__27708) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27711 = arguments.length;
switch (G__27711) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__27714 = arguments.length;
switch (G__27714) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__24578__auto___27781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27753){
var state_val_27754 = (state_27753[(1)]);
if((state_val_27754 === (7))){
var state_27753__$1 = state_27753;
var statearr_27755_27782 = state_27753__$1;
(statearr_27755_27782[(2)] = null);

(statearr_27755_27782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (1))){
var state_27753__$1 = state_27753;
var statearr_27756_27783 = state_27753__$1;
(statearr_27756_27783[(2)] = null);

(statearr_27756_27783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (4))){
var inst_27717 = (state_27753[(7)]);
var inst_27719 = (inst_27717 < cnt);
var state_27753__$1 = state_27753;
if(cljs.core.truth_(inst_27719)){
var statearr_27757_27784 = state_27753__$1;
(statearr_27757_27784[(1)] = (6));

} else {
var statearr_27758_27785 = state_27753__$1;
(statearr_27758_27785[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (15))){
var inst_27749 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27759_27786 = state_27753__$1;
(statearr_27759_27786[(2)] = inst_27749);

(statearr_27759_27786[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (13))){
var inst_27742 = cljs.core.async.close_BANG_.call(null,out);
var state_27753__$1 = state_27753;
var statearr_27760_27787 = state_27753__$1;
(statearr_27760_27787[(2)] = inst_27742);

(statearr_27760_27787[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (6))){
var state_27753__$1 = state_27753;
var statearr_27761_27788 = state_27753__$1;
(statearr_27761_27788[(2)] = null);

(statearr_27761_27788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (3))){
var inst_27751 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27753__$1,inst_27751);
} else {
if((state_val_27754 === (12))){
var inst_27739 = (state_27753[(8)]);
var inst_27739__$1 = (state_27753[(2)]);
var inst_27740 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27739__$1);
var state_27753__$1 = (function (){var statearr_27762 = state_27753;
(statearr_27762[(8)] = inst_27739__$1);

return statearr_27762;
})();
if(cljs.core.truth_(inst_27740)){
var statearr_27763_27789 = state_27753__$1;
(statearr_27763_27789[(1)] = (13));

} else {
var statearr_27764_27790 = state_27753__$1;
(statearr_27764_27790[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (2))){
var inst_27716 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27717 = (0);
var state_27753__$1 = (function (){var statearr_27765 = state_27753;
(statearr_27765[(9)] = inst_27716);

(statearr_27765[(7)] = inst_27717);

return statearr_27765;
})();
var statearr_27766_27791 = state_27753__$1;
(statearr_27766_27791[(2)] = null);

(statearr_27766_27791[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (11))){
var inst_27717 = (state_27753[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27753,(10),Object,null,(9));
var inst_27726 = chs__$1.call(null,inst_27717);
var inst_27727 = done.call(null,inst_27717);
var inst_27728 = cljs.core.async.take_BANG_.call(null,inst_27726,inst_27727);
var state_27753__$1 = state_27753;
var statearr_27767_27792 = state_27753__$1;
(statearr_27767_27792[(2)] = inst_27728);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (9))){
var inst_27717 = (state_27753[(7)]);
var inst_27730 = (state_27753[(2)]);
var inst_27731 = (inst_27717 + (1));
var inst_27717__$1 = inst_27731;
var state_27753__$1 = (function (){var statearr_27768 = state_27753;
(statearr_27768[(7)] = inst_27717__$1);

(statearr_27768[(10)] = inst_27730);

return statearr_27768;
})();
var statearr_27769_27793 = state_27753__$1;
(statearr_27769_27793[(2)] = null);

(statearr_27769_27793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (5))){
var inst_27737 = (state_27753[(2)]);
var state_27753__$1 = (function (){var statearr_27770 = state_27753;
(statearr_27770[(11)] = inst_27737);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27753__$1,(12),dchan);
} else {
if((state_val_27754 === (14))){
var inst_27739 = (state_27753[(8)]);
var inst_27744 = cljs.core.apply.call(null,f,inst_27739);
var state_27753__$1 = state_27753;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27753__$1,(16),out,inst_27744);
} else {
if((state_val_27754 === (16))){
var inst_27746 = (state_27753[(2)]);
var state_27753__$1 = (function (){var statearr_27771 = state_27753;
(statearr_27771[(12)] = inst_27746);

return statearr_27771;
})();
var statearr_27772_27794 = state_27753__$1;
(statearr_27772_27794[(2)] = null);

(statearr_27772_27794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (10))){
var inst_27721 = (state_27753[(2)]);
var inst_27722 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27753__$1 = (function (){var statearr_27773 = state_27753;
(statearr_27773[(13)] = inst_27721);

return statearr_27773;
})();
var statearr_27774_27795 = state_27753__$1;
(statearr_27774_27795[(2)] = inst_27722);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27753__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27754 === (8))){
var inst_27735 = (state_27753[(2)]);
var state_27753__$1 = state_27753;
var statearr_27775_27796 = state_27753__$1;
(statearr_27775_27796[(2)] = inst_27735);

(statearr_27775_27796[(1)] = (5));


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
});})(c__24578__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23615__auto__,c__24578__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_27776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27776[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_27776[(1)] = (1));

return statearr_27776;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_27753){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27753);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27777){if((e27777 instanceof Object)){
var ex__23619__auto__ = e27777;
var statearr_27778_27797 = state_27753;
(statearr_27778_27797[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27753);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27798 = state_27753;
state_27753 = G__27798;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_27753){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_27753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24580__auto__ = (function (){var statearr_27779 = f__24579__auto__.call(null);
(statearr_27779[(6)] = c__24578__auto___27781);

return statearr_27779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___27781,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27801 = arguments.length;
switch (G__27801) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24578__auto___27855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___27855,out){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___27855,out){
return (function (state_27833){
var state_val_27834 = (state_27833[(1)]);
if((state_val_27834 === (7))){
var inst_27813 = (state_27833[(7)]);
var inst_27812 = (state_27833[(8)]);
var inst_27812__$1 = (state_27833[(2)]);
var inst_27813__$1 = cljs.core.nth.call(null,inst_27812__$1,(0),null);
var inst_27814 = cljs.core.nth.call(null,inst_27812__$1,(1),null);
var inst_27815 = (inst_27813__$1 == null);
var state_27833__$1 = (function (){var statearr_27835 = state_27833;
(statearr_27835[(7)] = inst_27813__$1);

(statearr_27835[(8)] = inst_27812__$1);

(statearr_27835[(9)] = inst_27814);

return statearr_27835;
})();
if(cljs.core.truth_(inst_27815)){
var statearr_27836_27856 = state_27833__$1;
(statearr_27836_27856[(1)] = (8));

} else {
var statearr_27837_27857 = state_27833__$1;
(statearr_27837_27857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (1))){
var inst_27802 = cljs.core.vec.call(null,chs);
var inst_27803 = inst_27802;
var state_27833__$1 = (function (){var statearr_27838 = state_27833;
(statearr_27838[(10)] = inst_27803);

return statearr_27838;
})();
var statearr_27839_27858 = state_27833__$1;
(statearr_27839_27858[(2)] = null);

(statearr_27839_27858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (4))){
var inst_27803 = (state_27833[(10)]);
var state_27833__$1 = state_27833;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27833__$1,(7),inst_27803);
} else {
if((state_val_27834 === (6))){
var inst_27829 = (state_27833[(2)]);
var state_27833__$1 = state_27833;
var statearr_27840_27859 = state_27833__$1;
(statearr_27840_27859[(2)] = inst_27829);

(statearr_27840_27859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (3))){
var inst_27831 = (state_27833[(2)]);
var state_27833__$1 = state_27833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27833__$1,inst_27831);
} else {
if((state_val_27834 === (2))){
var inst_27803 = (state_27833[(10)]);
var inst_27805 = cljs.core.count.call(null,inst_27803);
var inst_27806 = (inst_27805 > (0));
var state_27833__$1 = state_27833;
if(cljs.core.truth_(inst_27806)){
var statearr_27842_27860 = state_27833__$1;
(statearr_27842_27860[(1)] = (4));

} else {
var statearr_27843_27861 = state_27833__$1;
(statearr_27843_27861[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (11))){
var inst_27803 = (state_27833[(10)]);
var inst_27822 = (state_27833[(2)]);
var tmp27841 = inst_27803;
var inst_27803__$1 = tmp27841;
var state_27833__$1 = (function (){var statearr_27844 = state_27833;
(statearr_27844[(10)] = inst_27803__$1);

(statearr_27844[(11)] = inst_27822);

return statearr_27844;
})();
var statearr_27845_27862 = state_27833__$1;
(statearr_27845_27862[(2)] = null);

(statearr_27845_27862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (9))){
var inst_27813 = (state_27833[(7)]);
var state_27833__$1 = state_27833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27833__$1,(11),out,inst_27813);
} else {
if((state_val_27834 === (5))){
var inst_27827 = cljs.core.async.close_BANG_.call(null,out);
var state_27833__$1 = state_27833;
var statearr_27846_27863 = state_27833__$1;
(statearr_27846_27863[(2)] = inst_27827);

(statearr_27846_27863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (10))){
var inst_27825 = (state_27833[(2)]);
var state_27833__$1 = state_27833;
var statearr_27847_27864 = state_27833__$1;
(statearr_27847_27864[(2)] = inst_27825);

(statearr_27847_27864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27834 === (8))){
var inst_27803 = (state_27833[(10)]);
var inst_27813 = (state_27833[(7)]);
var inst_27812 = (state_27833[(8)]);
var inst_27814 = (state_27833[(9)]);
var inst_27817 = (function (){var cs = inst_27803;
var vec__27808 = inst_27812;
var v = inst_27813;
var c = inst_27814;
return ((function (cs,vec__27808,v,c,inst_27803,inst_27813,inst_27812,inst_27814,state_val_27834,c__24578__auto___27855,out){
return (function (p1__27799_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27799_SHARP_);
});
;})(cs,vec__27808,v,c,inst_27803,inst_27813,inst_27812,inst_27814,state_val_27834,c__24578__auto___27855,out))
})();
var inst_27818 = cljs.core.filterv.call(null,inst_27817,inst_27803);
var inst_27803__$1 = inst_27818;
var state_27833__$1 = (function (){var statearr_27848 = state_27833;
(statearr_27848[(10)] = inst_27803__$1);

return statearr_27848;
})();
var statearr_27849_27865 = state_27833__$1;
(statearr_27849_27865[(2)] = null);

(statearr_27849_27865[(1)] = (2));


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
});})(c__24578__auto___27855,out))
;
return ((function (switch__23615__auto__,c__24578__auto___27855,out){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_27850 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27850[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_27850[(1)] = (1));

return statearr_27850;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_27833){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27851){if((e27851 instanceof Object)){
var ex__23619__auto__ = e27851;
var statearr_27852_27866 = state_27833;
(statearr_27852_27866[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27867 = state_27833;
state_27833 = G__27867;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_27833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_27833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___27855,out))
})();
var state__24580__auto__ = (function (){var statearr_27853 = f__24579__auto__.call(null);
(statearr_27853[(6)] = c__24578__auto___27855);

return statearr_27853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___27855,out))
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
var G__27869 = arguments.length;
switch (G__27869) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24578__auto___27914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___27914,out){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___27914,out){
return (function (state_27893){
var state_val_27894 = (state_27893[(1)]);
if((state_val_27894 === (7))){
var inst_27875 = (state_27893[(7)]);
var inst_27875__$1 = (state_27893[(2)]);
var inst_27876 = (inst_27875__$1 == null);
var inst_27877 = cljs.core.not.call(null,inst_27876);
var state_27893__$1 = (function (){var statearr_27895 = state_27893;
(statearr_27895[(7)] = inst_27875__$1);

return statearr_27895;
})();
if(inst_27877){
var statearr_27896_27915 = state_27893__$1;
(statearr_27896_27915[(1)] = (8));

} else {
var statearr_27897_27916 = state_27893__$1;
(statearr_27897_27916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (1))){
var inst_27870 = (0);
var state_27893__$1 = (function (){var statearr_27898 = state_27893;
(statearr_27898[(8)] = inst_27870);

return statearr_27898;
})();
var statearr_27899_27917 = state_27893__$1;
(statearr_27899_27917[(2)] = null);

(statearr_27899_27917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (4))){
var state_27893__$1 = state_27893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27893__$1,(7),ch);
} else {
if((state_val_27894 === (6))){
var inst_27888 = (state_27893[(2)]);
var state_27893__$1 = state_27893;
var statearr_27900_27918 = state_27893__$1;
(statearr_27900_27918[(2)] = inst_27888);

(statearr_27900_27918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (3))){
var inst_27890 = (state_27893[(2)]);
var inst_27891 = cljs.core.async.close_BANG_.call(null,out);
var state_27893__$1 = (function (){var statearr_27901 = state_27893;
(statearr_27901[(9)] = inst_27890);

return statearr_27901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27893__$1,inst_27891);
} else {
if((state_val_27894 === (2))){
var inst_27870 = (state_27893[(8)]);
var inst_27872 = (inst_27870 < n);
var state_27893__$1 = state_27893;
if(cljs.core.truth_(inst_27872)){
var statearr_27902_27919 = state_27893__$1;
(statearr_27902_27919[(1)] = (4));

} else {
var statearr_27903_27920 = state_27893__$1;
(statearr_27903_27920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (11))){
var inst_27870 = (state_27893[(8)]);
var inst_27880 = (state_27893[(2)]);
var inst_27881 = (inst_27870 + (1));
var inst_27870__$1 = inst_27881;
var state_27893__$1 = (function (){var statearr_27904 = state_27893;
(statearr_27904[(8)] = inst_27870__$1);

(statearr_27904[(10)] = inst_27880);

return statearr_27904;
})();
var statearr_27905_27921 = state_27893__$1;
(statearr_27905_27921[(2)] = null);

(statearr_27905_27921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (9))){
var state_27893__$1 = state_27893;
var statearr_27906_27922 = state_27893__$1;
(statearr_27906_27922[(2)] = null);

(statearr_27906_27922[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (5))){
var state_27893__$1 = state_27893;
var statearr_27907_27923 = state_27893__$1;
(statearr_27907_27923[(2)] = null);

(statearr_27907_27923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (10))){
var inst_27885 = (state_27893[(2)]);
var state_27893__$1 = state_27893;
var statearr_27908_27924 = state_27893__$1;
(statearr_27908_27924[(2)] = inst_27885);

(statearr_27908_27924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27894 === (8))){
var inst_27875 = (state_27893[(7)]);
var state_27893__$1 = state_27893;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27893__$1,(11),out,inst_27875);
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
});})(c__24578__auto___27914,out))
;
return ((function (switch__23615__auto__,c__24578__auto___27914,out){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_27909 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27909[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_27909[(1)] = (1));

return statearr_27909;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_27893){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27910){if((e27910 instanceof Object)){
var ex__23619__auto__ = e27910;
var statearr_27911_27925 = state_27893;
(statearr_27911_27925[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27926 = state_27893;
state_27893 = G__27926;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_27893){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_27893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___27914,out))
})();
var state__24580__auto__ = (function (){var statearr_27912 = f__24579__auto__.call(null);
(statearr_27912[(6)] = c__24578__auto___27914);

return statearr_27912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___27914,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27928 = (function (f,ch,meta27929){
this.f = f;
this.ch = ch;
this.meta27929 = meta27929;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27930,meta27929__$1){
var self__ = this;
var _27930__$1 = this;
return (new cljs.core.async.t_cljs$core$async27928(self__.f,self__.ch,meta27929__$1));
});

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27930){
var self__ = this;
var _27930__$1 = this;
return self__.meta27929;
});

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27931 = (function (f,ch,meta27929,_,fn1,meta27932){
this.f = f;
this.ch = ch;
this.meta27929 = meta27929;
this._ = _;
this.fn1 = fn1;
this.meta27932 = meta27932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27933,meta27932__$1){
var self__ = this;
var _27933__$1 = this;
return (new cljs.core.async.t_cljs$core$async27931(self__.f,self__.ch,self__.meta27929,self__._,self__.fn1,meta27932__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27933){
var self__ = this;
var _27933__$1 = this;
return self__.meta27932;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27931.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27927_SHARP_){
return f1.call(null,(((p1__27927_SHARP_ == null))?null:self__.f.call(null,p1__27927_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27931.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27929","meta27929",691600126,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27928","cljs.core.async/t_cljs$core$async27928",1403804085,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27932","meta27932",-1467306892,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27931.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27931";

cljs.core.async.t_cljs$core$async27931.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27931");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27931.
 */
cljs.core.async.__GT_t_cljs$core$async27931 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27931(f__$1,ch__$1,meta27929__$1,___$2,fn1__$1,meta27932){
return (new cljs.core.async.t_cljs$core$async27931(f__$1,ch__$1,meta27929__$1,___$2,fn1__$1,meta27932));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27931(self__.f,self__.ch,self__.meta27929,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27928.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27929","meta27929",691600126,null)], null);
});

cljs.core.async.t_cljs$core$async27928.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27928.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27928";

cljs.core.async.t_cljs$core$async27928.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27928");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27928.
 */
cljs.core.async.__GT_t_cljs$core$async27928 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27928(f__$1,ch__$1,meta27929){
return (new cljs.core.async.t_cljs$core$async27928(f__$1,ch__$1,meta27929));
});

}

return (new cljs.core.async.t_cljs$core$async27928(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27934 = (function (f,ch,meta27935){
this.f = f;
this.ch = ch;
this.meta27935 = meta27935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27936,meta27935__$1){
var self__ = this;
var _27936__$1 = this;
return (new cljs.core.async.t_cljs$core$async27934(self__.f,self__.ch,meta27935__$1));
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27936){
var self__ = this;
var _27936__$1 = this;
return self__.meta27935;
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27935","meta27935",-666518583,null)], null);
});

cljs.core.async.t_cljs$core$async27934.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27934";

cljs.core.async.t_cljs$core$async27934.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27934");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27934.
 */
cljs.core.async.__GT_t_cljs$core$async27934 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27934(f__$1,ch__$1,meta27935){
return (new cljs.core.async.t_cljs$core$async27934(f__$1,ch__$1,meta27935));
});

}

return (new cljs.core.async.t_cljs$core$async27934(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27937 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27937 = (function (p,ch,meta27938){
this.p = p;
this.ch = ch;
this.meta27938 = meta27938;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27939,meta27938__$1){
var self__ = this;
var _27939__$1 = this;
return (new cljs.core.async.t_cljs$core$async27937(self__.p,self__.ch,meta27938__$1));
});

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27939){
var self__ = this;
var _27939__$1 = this;
return self__.meta27938;
});

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27937.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27937.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27938","meta27938",321588810,null)], null);
});

cljs.core.async.t_cljs$core$async27937.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27937.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27937";

cljs.core.async.t_cljs$core$async27937.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async27937");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27937.
 */
cljs.core.async.__GT_t_cljs$core$async27937 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27937(p__$1,ch__$1,meta27938){
return (new cljs.core.async.t_cljs$core$async27937(p__$1,ch__$1,meta27938));
});

}

return (new cljs.core.async.t_cljs$core$async27937(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27941 = arguments.length;
switch (G__27941) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24578__auto___27981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___27981,out){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___27981,out){
return (function (state_27962){
var state_val_27963 = (state_27962[(1)]);
if((state_val_27963 === (7))){
var inst_27958 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
var statearr_27964_27982 = state_27962__$1;
(statearr_27964_27982[(2)] = inst_27958);

(statearr_27964_27982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (1))){
var state_27962__$1 = state_27962;
var statearr_27965_27983 = state_27962__$1;
(statearr_27965_27983[(2)] = null);

(statearr_27965_27983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (4))){
var inst_27944 = (state_27962[(7)]);
var inst_27944__$1 = (state_27962[(2)]);
var inst_27945 = (inst_27944__$1 == null);
var state_27962__$1 = (function (){var statearr_27966 = state_27962;
(statearr_27966[(7)] = inst_27944__$1);

return statearr_27966;
})();
if(cljs.core.truth_(inst_27945)){
var statearr_27967_27984 = state_27962__$1;
(statearr_27967_27984[(1)] = (5));

} else {
var statearr_27968_27985 = state_27962__$1;
(statearr_27968_27985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (6))){
var inst_27944 = (state_27962[(7)]);
var inst_27949 = p.call(null,inst_27944);
var state_27962__$1 = state_27962;
if(cljs.core.truth_(inst_27949)){
var statearr_27969_27986 = state_27962__$1;
(statearr_27969_27986[(1)] = (8));

} else {
var statearr_27970_27987 = state_27962__$1;
(statearr_27970_27987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (3))){
var inst_27960 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27962__$1,inst_27960);
} else {
if((state_val_27963 === (2))){
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27962__$1,(4),ch);
} else {
if((state_val_27963 === (11))){
var inst_27952 = (state_27962[(2)]);
var state_27962__$1 = state_27962;
var statearr_27971_27988 = state_27962__$1;
(statearr_27971_27988[(2)] = inst_27952);

(statearr_27971_27988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (9))){
var state_27962__$1 = state_27962;
var statearr_27972_27989 = state_27962__$1;
(statearr_27972_27989[(2)] = null);

(statearr_27972_27989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (5))){
var inst_27947 = cljs.core.async.close_BANG_.call(null,out);
var state_27962__$1 = state_27962;
var statearr_27973_27990 = state_27962__$1;
(statearr_27973_27990[(2)] = inst_27947);

(statearr_27973_27990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (10))){
var inst_27955 = (state_27962[(2)]);
var state_27962__$1 = (function (){var statearr_27974 = state_27962;
(statearr_27974[(8)] = inst_27955);

return statearr_27974;
})();
var statearr_27975_27991 = state_27962__$1;
(statearr_27975_27991[(2)] = null);

(statearr_27975_27991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27963 === (8))){
var inst_27944 = (state_27962[(7)]);
var state_27962__$1 = state_27962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27962__$1,(11),out,inst_27944);
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
});})(c__24578__auto___27981,out))
;
return ((function (switch__23615__auto__,c__24578__auto___27981,out){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_27976 = [null,null,null,null,null,null,null,null,null];
(statearr_27976[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_27976[(1)] = (1));

return statearr_27976;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_27962){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_27962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e27977){if((e27977 instanceof Object)){
var ex__23619__auto__ = e27977;
var statearr_27978_27992 = state_27962;
(statearr_27978_27992[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27993 = state_27962;
state_27962 = G__27993;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_27962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_27962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___27981,out))
})();
var state__24580__auto__ = (function (){var statearr_27979 = f__24579__auto__.call(null);
(statearr_27979[(6)] = c__24578__auto___27981);

return statearr_27979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___27981,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27995 = arguments.length;
switch (G__27995) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__24578__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto__){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto__){
return (function (state_28058){
var state_val_28059 = (state_28058[(1)]);
if((state_val_28059 === (7))){
var inst_28054 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28060_28098 = state_28058__$1;
(statearr_28060_28098[(2)] = inst_28054);

(statearr_28060_28098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (20))){
var inst_28024 = (state_28058[(7)]);
var inst_28035 = (state_28058[(2)]);
var inst_28036 = cljs.core.next.call(null,inst_28024);
var inst_28010 = inst_28036;
var inst_28011 = null;
var inst_28012 = (0);
var inst_28013 = (0);
var state_28058__$1 = (function (){var statearr_28061 = state_28058;
(statearr_28061[(8)] = inst_28011);

(statearr_28061[(9)] = inst_28010);

(statearr_28061[(10)] = inst_28035);

(statearr_28061[(11)] = inst_28013);

(statearr_28061[(12)] = inst_28012);

return statearr_28061;
})();
var statearr_28062_28099 = state_28058__$1;
(statearr_28062_28099[(2)] = null);

(statearr_28062_28099[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (1))){
var state_28058__$1 = state_28058;
var statearr_28063_28100 = state_28058__$1;
(statearr_28063_28100[(2)] = null);

(statearr_28063_28100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (4))){
var inst_27999 = (state_28058[(13)]);
var inst_27999__$1 = (state_28058[(2)]);
var inst_28000 = (inst_27999__$1 == null);
var state_28058__$1 = (function (){var statearr_28064 = state_28058;
(statearr_28064[(13)] = inst_27999__$1);

return statearr_28064;
})();
if(cljs.core.truth_(inst_28000)){
var statearr_28065_28101 = state_28058__$1;
(statearr_28065_28101[(1)] = (5));

} else {
var statearr_28066_28102 = state_28058__$1;
(statearr_28066_28102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (15))){
var state_28058__$1 = state_28058;
var statearr_28070_28103 = state_28058__$1;
(statearr_28070_28103[(2)] = null);

(statearr_28070_28103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (21))){
var state_28058__$1 = state_28058;
var statearr_28071_28104 = state_28058__$1;
(statearr_28071_28104[(2)] = null);

(statearr_28071_28104[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (13))){
var inst_28011 = (state_28058[(8)]);
var inst_28010 = (state_28058[(9)]);
var inst_28013 = (state_28058[(11)]);
var inst_28012 = (state_28058[(12)]);
var inst_28020 = (state_28058[(2)]);
var inst_28021 = (inst_28013 + (1));
var tmp28067 = inst_28011;
var tmp28068 = inst_28010;
var tmp28069 = inst_28012;
var inst_28010__$1 = tmp28068;
var inst_28011__$1 = tmp28067;
var inst_28012__$1 = tmp28069;
var inst_28013__$1 = inst_28021;
var state_28058__$1 = (function (){var statearr_28072 = state_28058;
(statearr_28072[(8)] = inst_28011__$1);

(statearr_28072[(9)] = inst_28010__$1);

(statearr_28072[(14)] = inst_28020);

(statearr_28072[(11)] = inst_28013__$1);

(statearr_28072[(12)] = inst_28012__$1);

return statearr_28072;
})();
var statearr_28073_28105 = state_28058__$1;
(statearr_28073_28105[(2)] = null);

(statearr_28073_28105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (22))){
var state_28058__$1 = state_28058;
var statearr_28074_28106 = state_28058__$1;
(statearr_28074_28106[(2)] = null);

(statearr_28074_28106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (6))){
var inst_27999 = (state_28058[(13)]);
var inst_28008 = f.call(null,inst_27999);
var inst_28009 = cljs.core.seq.call(null,inst_28008);
var inst_28010 = inst_28009;
var inst_28011 = null;
var inst_28012 = (0);
var inst_28013 = (0);
var state_28058__$1 = (function (){var statearr_28075 = state_28058;
(statearr_28075[(8)] = inst_28011);

(statearr_28075[(9)] = inst_28010);

(statearr_28075[(11)] = inst_28013);

(statearr_28075[(12)] = inst_28012);

return statearr_28075;
})();
var statearr_28076_28107 = state_28058__$1;
(statearr_28076_28107[(2)] = null);

(statearr_28076_28107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (17))){
var inst_28024 = (state_28058[(7)]);
var inst_28028 = cljs.core.chunk_first.call(null,inst_28024);
var inst_28029 = cljs.core.chunk_rest.call(null,inst_28024);
var inst_28030 = cljs.core.count.call(null,inst_28028);
var inst_28010 = inst_28029;
var inst_28011 = inst_28028;
var inst_28012 = inst_28030;
var inst_28013 = (0);
var state_28058__$1 = (function (){var statearr_28077 = state_28058;
(statearr_28077[(8)] = inst_28011);

(statearr_28077[(9)] = inst_28010);

(statearr_28077[(11)] = inst_28013);

(statearr_28077[(12)] = inst_28012);

return statearr_28077;
})();
var statearr_28078_28108 = state_28058__$1;
(statearr_28078_28108[(2)] = null);

(statearr_28078_28108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (3))){
var inst_28056 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28058__$1,inst_28056);
} else {
if((state_val_28059 === (12))){
var inst_28044 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28079_28109 = state_28058__$1;
(statearr_28079_28109[(2)] = inst_28044);

(statearr_28079_28109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (2))){
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28058__$1,(4),in$);
} else {
if((state_val_28059 === (23))){
var inst_28052 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28080_28110 = state_28058__$1;
(statearr_28080_28110[(2)] = inst_28052);

(statearr_28080_28110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (19))){
var inst_28039 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28081_28111 = state_28058__$1;
(statearr_28081_28111[(2)] = inst_28039);

(statearr_28081_28111[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (11))){
var inst_28024 = (state_28058[(7)]);
var inst_28010 = (state_28058[(9)]);
var inst_28024__$1 = cljs.core.seq.call(null,inst_28010);
var state_28058__$1 = (function (){var statearr_28082 = state_28058;
(statearr_28082[(7)] = inst_28024__$1);

return statearr_28082;
})();
if(inst_28024__$1){
var statearr_28083_28112 = state_28058__$1;
(statearr_28083_28112[(1)] = (14));

} else {
var statearr_28084_28113 = state_28058__$1;
(statearr_28084_28113[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (9))){
var inst_28046 = (state_28058[(2)]);
var inst_28047 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28058__$1 = (function (){var statearr_28085 = state_28058;
(statearr_28085[(15)] = inst_28046);

return statearr_28085;
})();
if(cljs.core.truth_(inst_28047)){
var statearr_28086_28114 = state_28058__$1;
(statearr_28086_28114[(1)] = (21));

} else {
var statearr_28087_28115 = state_28058__$1;
(statearr_28087_28115[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (5))){
var inst_28002 = cljs.core.async.close_BANG_.call(null,out);
var state_28058__$1 = state_28058;
var statearr_28088_28116 = state_28058__$1;
(statearr_28088_28116[(2)] = inst_28002);

(statearr_28088_28116[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (14))){
var inst_28024 = (state_28058[(7)]);
var inst_28026 = cljs.core.chunked_seq_QMARK_.call(null,inst_28024);
var state_28058__$1 = state_28058;
if(inst_28026){
var statearr_28089_28117 = state_28058__$1;
(statearr_28089_28117[(1)] = (17));

} else {
var statearr_28090_28118 = state_28058__$1;
(statearr_28090_28118[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (16))){
var inst_28042 = (state_28058[(2)]);
var state_28058__$1 = state_28058;
var statearr_28091_28119 = state_28058__$1;
(statearr_28091_28119[(2)] = inst_28042);

(statearr_28091_28119[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28059 === (10))){
var inst_28011 = (state_28058[(8)]);
var inst_28013 = (state_28058[(11)]);
var inst_28018 = cljs.core._nth.call(null,inst_28011,inst_28013);
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28058__$1,(13),out,inst_28018);
} else {
if((state_val_28059 === (18))){
var inst_28024 = (state_28058[(7)]);
var inst_28033 = cljs.core.first.call(null,inst_28024);
var state_28058__$1 = state_28058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28058__$1,(20),out,inst_28033);
} else {
if((state_val_28059 === (8))){
var inst_28013 = (state_28058[(11)]);
var inst_28012 = (state_28058[(12)]);
var inst_28015 = (inst_28013 < inst_28012);
var inst_28016 = inst_28015;
var state_28058__$1 = state_28058;
if(cljs.core.truth_(inst_28016)){
var statearr_28092_28120 = state_28058__$1;
(statearr_28092_28120[(1)] = (10));

} else {
var statearr_28093_28121 = state_28058__$1;
(statearr_28093_28121[(1)] = (11));

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
});})(c__24578__auto__))
;
return ((function (switch__23615__auto__,c__24578__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23616__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23616__auto____0 = (function (){
var statearr_28094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28094[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23616__auto__);

(statearr_28094[(1)] = (1));

return statearr_28094;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23616__auto____1 = (function (state_28058){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_28058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e28095){if((e28095 instanceof Object)){
var ex__23619__auto__ = e28095;
var statearr_28096_28122 = state_28058;
(statearr_28096_28122[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28123 = state_28058;
state_28058 = G__28123;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23616__auto__ = function(state_28058){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23616__auto____1.call(this,state_28058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23616__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23616__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto__))
})();
var state__24580__auto__ = (function (){var statearr_28097 = f__24579__auto__.call(null);
(statearr_28097[(6)] = c__24578__auto__);

return statearr_28097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto__))
);

return c__24578__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28125 = arguments.length;
switch (G__28125) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__28128 = arguments.length;
switch (G__28128) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__28131 = arguments.length;
switch (G__28131) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24578__auto___28178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___28178,out){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___28178,out){
return (function (state_28155){
var state_val_28156 = (state_28155[(1)]);
if((state_val_28156 === (7))){
var inst_28150 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28157_28179 = state_28155__$1;
(statearr_28157_28179[(2)] = inst_28150);

(statearr_28157_28179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (1))){
var inst_28132 = null;
var state_28155__$1 = (function (){var statearr_28158 = state_28155;
(statearr_28158[(7)] = inst_28132);

return statearr_28158;
})();
var statearr_28159_28180 = state_28155__$1;
(statearr_28159_28180[(2)] = null);

(statearr_28159_28180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (4))){
var inst_28135 = (state_28155[(8)]);
var inst_28135__$1 = (state_28155[(2)]);
var inst_28136 = (inst_28135__$1 == null);
var inst_28137 = cljs.core.not.call(null,inst_28136);
var state_28155__$1 = (function (){var statearr_28160 = state_28155;
(statearr_28160[(8)] = inst_28135__$1);

return statearr_28160;
})();
if(inst_28137){
var statearr_28161_28181 = state_28155__$1;
(statearr_28161_28181[(1)] = (5));

} else {
var statearr_28162_28182 = state_28155__$1;
(statearr_28162_28182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (6))){
var state_28155__$1 = state_28155;
var statearr_28163_28183 = state_28155__$1;
(statearr_28163_28183[(2)] = null);

(statearr_28163_28183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (3))){
var inst_28152 = (state_28155[(2)]);
var inst_28153 = cljs.core.async.close_BANG_.call(null,out);
var state_28155__$1 = (function (){var statearr_28164 = state_28155;
(statearr_28164[(9)] = inst_28152);

return statearr_28164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28155__$1,inst_28153);
} else {
if((state_val_28156 === (2))){
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28155__$1,(4),ch);
} else {
if((state_val_28156 === (11))){
var inst_28135 = (state_28155[(8)]);
var inst_28144 = (state_28155[(2)]);
var inst_28132 = inst_28135;
var state_28155__$1 = (function (){var statearr_28165 = state_28155;
(statearr_28165[(7)] = inst_28132);

(statearr_28165[(10)] = inst_28144);

return statearr_28165;
})();
var statearr_28166_28184 = state_28155__$1;
(statearr_28166_28184[(2)] = null);

(statearr_28166_28184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (9))){
var inst_28135 = (state_28155[(8)]);
var state_28155__$1 = state_28155;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28155__$1,(11),out,inst_28135);
} else {
if((state_val_28156 === (5))){
var inst_28135 = (state_28155[(8)]);
var inst_28132 = (state_28155[(7)]);
var inst_28139 = cljs.core._EQ_.call(null,inst_28135,inst_28132);
var state_28155__$1 = state_28155;
if(inst_28139){
var statearr_28168_28185 = state_28155__$1;
(statearr_28168_28185[(1)] = (8));

} else {
var statearr_28169_28186 = state_28155__$1;
(statearr_28169_28186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (10))){
var inst_28147 = (state_28155[(2)]);
var state_28155__$1 = state_28155;
var statearr_28170_28187 = state_28155__$1;
(statearr_28170_28187[(2)] = inst_28147);

(statearr_28170_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28156 === (8))){
var inst_28132 = (state_28155[(7)]);
var tmp28167 = inst_28132;
var inst_28132__$1 = tmp28167;
var state_28155__$1 = (function (){var statearr_28171 = state_28155;
(statearr_28171[(7)] = inst_28132__$1);

return statearr_28171;
})();
var statearr_28172_28188 = state_28155__$1;
(statearr_28172_28188[(2)] = null);

(statearr_28172_28188[(1)] = (2));


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
});})(c__24578__auto___28178,out))
;
return ((function (switch__23615__auto__,c__24578__auto___28178,out){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_28173 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28173[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_28173[(1)] = (1));

return statearr_28173;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_28155){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_28155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e28174){if((e28174 instanceof Object)){
var ex__23619__auto__ = e28174;
var statearr_28175_28189 = state_28155;
(statearr_28175_28189[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28174;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28190 = state_28155;
state_28155 = G__28190;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_28155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_28155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___28178,out))
})();
var state__24580__auto__ = (function (){var statearr_28176 = f__24579__auto__.call(null);
(statearr_28176[(6)] = c__24578__auto___28178);

return statearr_28176;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___28178,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28192 = arguments.length;
switch (G__28192) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24578__auto___28258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___28258,out){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___28258,out){
return (function (state_28230){
var state_val_28231 = (state_28230[(1)]);
if((state_val_28231 === (7))){
var inst_28226 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
var statearr_28232_28259 = state_28230__$1;
(statearr_28232_28259[(2)] = inst_28226);

(statearr_28232_28259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (1))){
var inst_28193 = (new Array(n));
var inst_28194 = inst_28193;
var inst_28195 = (0);
var state_28230__$1 = (function (){var statearr_28233 = state_28230;
(statearr_28233[(7)] = inst_28195);

(statearr_28233[(8)] = inst_28194);

return statearr_28233;
})();
var statearr_28234_28260 = state_28230__$1;
(statearr_28234_28260[(2)] = null);

(statearr_28234_28260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (4))){
var inst_28198 = (state_28230[(9)]);
var inst_28198__$1 = (state_28230[(2)]);
var inst_28199 = (inst_28198__$1 == null);
var inst_28200 = cljs.core.not.call(null,inst_28199);
var state_28230__$1 = (function (){var statearr_28235 = state_28230;
(statearr_28235[(9)] = inst_28198__$1);

return statearr_28235;
})();
if(inst_28200){
var statearr_28236_28261 = state_28230__$1;
(statearr_28236_28261[(1)] = (5));

} else {
var statearr_28237_28262 = state_28230__$1;
(statearr_28237_28262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (15))){
var inst_28220 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
var statearr_28238_28263 = state_28230__$1;
(statearr_28238_28263[(2)] = inst_28220);

(statearr_28238_28263[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (13))){
var state_28230__$1 = state_28230;
var statearr_28239_28264 = state_28230__$1;
(statearr_28239_28264[(2)] = null);

(statearr_28239_28264[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (6))){
var inst_28195 = (state_28230[(7)]);
var inst_28216 = (inst_28195 > (0));
var state_28230__$1 = state_28230;
if(cljs.core.truth_(inst_28216)){
var statearr_28240_28265 = state_28230__$1;
(statearr_28240_28265[(1)] = (12));

} else {
var statearr_28241_28266 = state_28230__$1;
(statearr_28241_28266[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (3))){
var inst_28228 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28230__$1,inst_28228);
} else {
if((state_val_28231 === (12))){
var inst_28194 = (state_28230[(8)]);
var inst_28218 = cljs.core.vec.call(null,inst_28194);
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28230__$1,(15),out,inst_28218);
} else {
if((state_val_28231 === (2))){
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28230__$1,(4),ch);
} else {
if((state_val_28231 === (11))){
var inst_28210 = (state_28230[(2)]);
var inst_28211 = (new Array(n));
var inst_28194 = inst_28211;
var inst_28195 = (0);
var state_28230__$1 = (function (){var statearr_28242 = state_28230;
(statearr_28242[(7)] = inst_28195);

(statearr_28242[(10)] = inst_28210);

(statearr_28242[(8)] = inst_28194);

return statearr_28242;
})();
var statearr_28243_28267 = state_28230__$1;
(statearr_28243_28267[(2)] = null);

(statearr_28243_28267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (9))){
var inst_28194 = (state_28230[(8)]);
var inst_28208 = cljs.core.vec.call(null,inst_28194);
var state_28230__$1 = state_28230;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28230__$1,(11),out,inst_28208);
} else {
if((state_val_28231 === (5))){
var inst_28195 = (state_28230[(7)]);
var inst_28203 = (state_28230[(11)]);
var inst_28198 = (state_28230[(9)]);
var inst_28194 = (state_28230[(8)]);
var inst_28202 = (inst_28194[inst_28195] = inst_28198);
var inst_28203__$1 = (inst_28195 + (1));
var inst_28204 = (inst_28203__$1 < n);
var state_28230__$1 = (function (){var statearr_28244 = state_28230;
(statearr_28244[(12)] = inst_28202);

(statearr_28244[(11)] = inst_28203__$1);

return statearr_28244;
})();
if(cljs.core.truth_(inst_28204)){
var statearr_28245_28268 = state_28230__$1;
(statearr_28245_28268[(1)] = (8));

} else {
var statearr_28246_28269 = state_28230__$1;
(statearr_28246_28269[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (14))){
var inst_28223 = (state_28230[(2)]);
var inst_28224 = cljs.core.async.close_BANG_.call(null,out);
var state_28230__$1 = (function (){var statearr_28248 = state_28230;
(statearr_28248[(13)] = inst_28223);

return statearr_28248;
})();
var statearr_28249_28270 = state_28230__$1;
(statearr_28249_28270[(2)] = inst_28224);

(statearr_28249_28270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (10))){
var inst_28214 = (state_28230[(2)]);
var state_28230__$1 = state_28230;
var statearr_28250_28271 = state_28230__$1;
(statearr_28250_28271[(2)] = inst_28214);

(statearr_28250_28271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28231 === (8))){
var inst_28203 = (state_28230[(11)]);
var inst_28194 = (state_28230[(8)]);
var tmp28247 = inst_28194;
var inst_28194__$1 = tmp28247;
var inst_28195 = inst_28203;
var state_28230__$1 = (function (){var statearr_28251 = state_28230;
(statearr_28251[(7)] = inst_28195);

(statearr_28251[(8)] = inst_28194__$1);

return statearr_28251;
})();
var statearr_28252_28272 = state_28230__$1;
(statearr_28252_28272[(2)] = null);

(statearr_28252_28272[(1)] = (2));


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
});})(c__24578__auto___28258,out))
;
return ((function (switch__23615__auto__,c__24578__auto___28258,out){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_28253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28253[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_28253[(1)] = (1));

return statearr_28253;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_28230){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_28230);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e28254){if((e28254 instanceof Object)){
var ex__23619__auto__ = e28254;
var statearr_28255_28273 = state_28230;
(statearr_28255_28273[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28230);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28274 = state_28230;
state_28230 = G__28274;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_28230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_28230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___28258,out))
})();
var state__24580__auto__ = (function (){var statearr_28256 = f__24579__auto__.call(null);
(statearr_28256[(6)] = c__24578__auto___28258);

return statearr_28256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___28258,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28276 = arguments.length;
switch (G__28276) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24578__auto___28346 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24578__auto___28346,out){
return (function (){
var f__24579__auto__ = (function (){var switch__23615__auto__ = ((function (c__24578__auto___28346,out){
return (function (state_28318){
var state_val_28319 = (state_28318[(1)]);
if((state_val_28319 === (7))){
var inst_28314 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28320_28347 = state_28318__$1;
(statearr_28320_28347[(2)] = inst_28314);

(statearr_28320_28347[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (1))){
var inst_28277 = [];
var inst_28278 = inst_28277;
var inst_28279 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28318__$1 = (function (){var statearr_28321 = state_28318;
(statearr_28321[(7)] = inst_28279);

(statearr_28321[(8)] = inst_28278);

return statearr_28321;
})();
var statearr_28322_28348 = state_28318__$1;
(statearr_28322_28348[(2)] = null);

(statearr_28322_28348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (4))){
var inst_28282 = (state_28318[(9)]);
var inst_28282__$1 = (state_28318[(2)]);
var inst_28283 = (inst_28282__$1 == null);
var inst_28284 = cljs.core.not.call(null,inst_28283);
var state_28318__$1 = (function (){var statearr_28323 = state_28318;
(statearr_28323[(9)] = inst_28282__$1);

return statearr_28323;
})();
if(inst_28284){
var statearr_28324_28349 = state_28318__$1;
(statearr_28324_28349[(1)] = (5));

} else {
var statearr_28325_28350 = state_28318__$1;
(statearr_28325_28350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (15))){
var inst_28308 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28326_28351 = state_28318__$1;
(statearr_28326_28351[(2)] = inst_28308);

(statearr_28326_28351[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (13))){
var state_28318__$1 = state_28318;
var statearr_28327_28352 = state_28318__$1;
(statearr_28327_28352[(2)] = null);

(statearr_28327_28352[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (6))){
var inst_28278 = (state_28318[(8)]);
var inst_28303 = inst_28278.length;
var inst_28304 = (inst_28303 > (0));
var state_28318__$1 = state_28318;
if(cljs.core.truth_(inst_28304)){
var statearr_28328_28353 = state_28318__$1;
(statearr_28328_28353[(1)] = (12));

} else {
var statearr_28329_28354 = state_28318__$1;
(statearr_28329_28354[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (3))){
var inst_28316 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28318__$1,inst_28316);
} else {
if((state_val_28319 === (12))){
var inst_28278 = (state_28318[(8)]);
var inst_28306 = cljs.core.vec.call(null,inst_28278);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28318__$1,(15),out,inst_28306);
} else {
if((state_val_28319 === (2))){
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28318__$1,(4),ch);
} else {
if((state_val_28319 === (11))){
var inst_28282 = (state_28318[(9)]);
var inst_28286 = (state_28318[(10)]);
var inst_28296 = (state_28318[(2)]);
var inst_28297 = [];
var inst_28298 = inst_28297.push(inst_28282);
var inst_28278 = inst_28297;
var inst_28279 = inst_28286;
var state_28318__$1 = (function (){var statearr_28330 = state_28318;
(statearr_28330[(11)] = inst_28296);

(statearr_28330[(7)] = inst_28279);

(statearr_28330[(8)] = inst_28278);

(statearr_28330[(12)] = inst_28298);

return statearr_28330;
})();
var statearr_28331_28355 = state_28318__$1;
(statearr_28331_28355[(2)] = null);

(statearr_28331_28355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (9))){
var inst_28278 = (state_28318[(8)]);
var inst_28294 = cljs.core.vec.call(null,inst_28278);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28318__$1,(11),out,inst_28294);
} else {
if((state_val_28319 === (5))){
var inst_28279 = (state_28318[(7)]);
var inst_28282 = (state_28318[(9)]);
var inst_28286 = (state_28318[(10)]);
var inst_28286__$1 = f.call(null,inst_28282);
var inst_28287 = cljs.core._EQ_.call(null,inst_28286__$1,inst_28279);
var inst_28288 = cljs.core.keyword_identical_QMARK_.call(null,inst_28279,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28289 = ((inst_28287) || (inst_28288));
var state_28318__$1 = (function (){var statearr_28332 = state_28318;
(statearr_28332[(10)] = inst_28286__$1);

return statearr_28332;
})();
if(cljs.core.truth_(inst_28289)){
var statearr_28333_28356 = state_28318__$1;
(statearr_28333_28356[(1)] = (8));

} else {
var statearr_28334_28357 = state_28318__$1;
(statearr_28334_28357[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (14))){
var inst_28311 = (state_28318[(2)]);
var inst_28312 = cljs.core.async.close_BANG_.call(null,out);
var state_28318__$1 = (function (){var statearr_28336 = state_28318;
(statearr_28336[(13)] = inst_28311);

return statearr_28336;
})();
var statearr_28337_28358 = state_28318__$1;
(statearr_28337_28358[(2)] = inst_28312);

(statearr_28337_28358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (10))){
var inst_28301 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28338_28359 = state_28318__$1;
(statearr_28338_28359[(2)] = inst_28301);

(statearr_28338_28359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (8))){
var inst_28278 = (state_28318[(8)]);
var inst_28282 = (state_28318[(9)]);
var inst_28286 = (state_28318[(10)]);
var inst_28291 = inst_28278.push(inst_28282);
var tmp28335 = inst_28278;
var inst_28278__$1 = tmp28335;
var inst_28279 = inst_28286;
var state_28318__$1 = (function (){var statearr_28339 = state_28318;
(statearr_28339[(7)] = inst_28279);

(statearr_28339[(8)] = inst_28278__$1);

(statearr_28339[(14)] = inst_28291);

return statearr_28339;
})();
var statearr_28340_28360 = state_28318__$1;
(statearr_28340_28360[(2)] = null);

(statearr_28340_28360[(1)] = (2));


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
});})(c__24578__auto___28346,out))
;
return ((function (switch__23615__auto__,c__24578__auto___28346,out){
return (function() {
var cljs$core$async$state_machine__23616__auto__ = null;
var cljs$core$async$state_machine__23616__auto____0 = (function (){
var statearr_28341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28341[(0)] = cljs$core$async$state_machine__23616__auto__);

(statearr_28341[(1)] = (1));

return statearr_28341;
});
var cljs$core$async$state_machine__23616__auto____1 = (function (state_28318){
while(true){
var ret_value__23617__auto__ = (function (){try{while(true){
var result__23618__auto__ = switch__23615__auto__.call(null,state_28318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23618__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23618__auto__;
}
break;
}
}catch (e28342){if((e28342 instanceof Object)){
var ex__23619__auto__ = e28342;
var statearr_28343_28361 = state_28318;
(statearr_28343_28361[(5)] = ex__23619__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23617__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28362 = state_28318;
state_28318 = G__28362;
continue;
} else {
return ret_value__23617__auto__;
}
break;
}
});
cljs$core$async$state_machine__23616__auto__ = function(state_28318){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__23616__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__23616__auto____1.call(this,state_28318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__23616__auto____0;
cljs$core$async$state_machine__23616__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__23616__auto____1;
return cljs$core$async$state_machine__23616__auto__;
})()
;})(switch__23615__auto__,c__24578__auto___28346,out))
})();
var state__24580__auto__ = (function (){var statearr_28344 = f__24579__auto__.call(null);
(statearr_28344[(6)] = c__24578__auto___28346);

return statearr_28344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24580__auto__);
});})(c__24578__auto___28346,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1651840301346
