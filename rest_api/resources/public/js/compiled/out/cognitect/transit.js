// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__18235_18239 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__18236_18240 = null;
var count__18237_18241 = (0);
var i__18238_18242 = (0);
while(true){
if((i__18238_18242 < count__18237_18241)){
var k_18243 = cljs.core._nth.call(null,chunk__18236_18240,i__18238_18242);
var v_18244 = (b[k_18243]);
(a[k_18243] = v_18244);

var G__18245 = seq__18235_18239;
var G__18246 = chunk__18236_18240;
var G__18247 = count__18237_18241;
var G__18248 = (i__18238_18242 + (1));
seq__18235_18239 = G__18245;
chunk__18236_18240 = G__18246;
count__18237_18241 = G__18247;
i__18238_18242 = G__18248;
continue;
} else {
var temp__4425__auto___18249 = cljs.core.seq.call(null,seq__18235_18239);
if(temp__4425__auto___18249){
var seq__18235_18250__$1 = temp__4425__auto___18249;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18235_18250__$1)){
var c__17720__auto___18251 = cljs.core.chunk_first.call(null,seq__18235_18250__$1);
var G__18252 = cljs.core.chunk_rest.call(null,seq__18235_18250__$1);
var G__18253 = c__17720__auto___18251;
var G__18254 = cljs.core.count.call(null,c__17720__auto___18251);
var G__18255 = (0);
seq__18235_18239 = G__18252;
chunk__18236_18240 = G__18253;
count__18237_18241 = G__18254;
i__18238_18242 = G__18255;
continue;
} else {
var k_18256 = cljs.core.first.call(null,seq__18235_18250__$1);
var v_18257 = (b[k_18256]);
(a[k_18256] = v_18257);

var G__18258 = cljs.core.next.call(null,seq__18235_18250__$1);
var G__18259 = null;
var G__18260 = (0);
var G__18261 = (0);
seq__18235_18239 = G__18258;
chunk__18236_18240 = G__18259;
count__18237_18241 = G__18260;
i__18238_18242 = G__18261;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args18262 = [];
var len__17976__auto___18265 = arguments.length;
var i__17977__auto___18266 = (0);
while(true){
if((i__17977__auto___18266 < len__17976__auto___18265)){
args18262.push((arguments[i__17977__auto___18266]));

var G__18267 = (i__17977__auto___18266 + (1));
i__17977__auto___18266 = G__18267;
continue;
} else {
}
break;
}

var G__18264 = args18262.length;
switch (G__18264) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18262.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__18269 = (i + (2));
var G__18270 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__18269;
ret = G__18270;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18271_18275 = cljs.core.seq.call(null,v);
var chunk__18272_18276 = null;
var count__18273_18277 = (0);
var i__18274_18278 = (0);
while(true){
if((i__18274_18278 < count__18273_18277)){
var x_18279 = cljs.core._nth.call(null,chunk__18272_18276,i__18274_18278);
ret.push(x_18279);

var G__18280 = seq__18271_18275;
var G__18281 = chunk__18272_18276;
var G__18282 = count__18273_18277;
var G__18283 = (i__18274_18278 + (1));
seq__18271_18275 = G__18280;
chunk__18272_18276 = G__18281;
count__18273_18277 = G__18282;
i__18274_18278 = G__18283;
continue;
} else {
var temp__4425__auto___18284 = cljs.core.seq.call(null,seq__18271_18275);
if(temp__4425__auto___18284){
var seq__18271_18285__$1 = temp__4425__auto___18284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18271_18285__$1)){
var c__17720__auto___18286 = cljs.core.chunk_first.call(null,seq__18271_18285__$1);
var G__18287 = cljs.core.chunk_rest.call(null,seq__18271_18285__$1);
var G__18288 = c__17720__auto___18286;
var G__18289 = cljs.core.count.call(null,c__17720__auto___18286);
var G__18290 = (0);
seq__18271_18275 = G__18287;
chunk__18272_18276 = G__18288;
count__18273_18277 = G__18289;
i__18274_18278 = G__18290;
continue;
} else {
var x_18291 = cljs.core.first.call(null,seq__18271_18285__$1);
ret.push(x_18291);

var G__18292 = cljs.core.next.call(null,seq__18271_18285__$1);
var G__18293 = null;
var G__18294 = (0);
var G__18295 = (0);
seq__18271_18275 = G__18292;
chunk__18272_18276 = G__18293;
count__18273_18277 = G__18294;
i__18274_18278 = G__18295;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18296_18300 = cljs.core.seq.call(null,v);
var chunk__18297_18301 = null;
var count__18298_18302 = (0);
var i__18299_18303 = (0);
while(true){
if((i__18299_18303 < count__18298_18302)){
var x_18304 = cljs.core._nth.call(null,chunk__18297_18301,i__18299_18303);
ret.push(x_18304);

var G__18305 = seq__18296_18300;
var G__18306 = chunk__18297_18301;
var G__18307 = count__18298_18302;
var G__18308 = (i__18299_18303 + (1));
seq__18296_18300 = G__18305;
chunk__18297_18301 = G__18306;
count__18298_18302 = G__18307;
i__18299_18303 = G__18308;
continue;
} else {
var temp__4425__auto___18309 = cljs.core.seq.call(null,seq__18296_18300);
if(temp__4425__auto___18309){
var seq__18296_18310__$1 = temp__4425__auto___18309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18296_18310__$1)){
var c__17720__auto___18311 = cljs.core.chunk_first.call(null,seq__18296_18310__$1);
var G__18312 = cljs.core.chunk_rest.call(null,seq__18296_18310__$1);
var G__18313 = c__17720__auto___18311;
var G__18314 = cljs.core.count.call(null,c__17720__auto___18311);
var G__18315 = (0);
seq__18296_18300 = G__18312;
chunk__18297_18301 = G__18313;
count__18298_18302 = G__18314;
i__18299_18303 = G__18315;
continue;
} else {
var x_18316 = cljs.core.first.call(null,seq__18296_18310__$1);
ret.push(x_18316);

var G__18317 = cljs.core.next.call(null,seq__18296_18310__$1);
var G__18318 = null;
var G__18319 = (0);
var G__18320 = (0);
seq__18296_18300 = G__18317;
chunk__18297_18301 = G__18318;
count__18298_18302 = G__18319;
i__18299_18303 = G__18320;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__18321_18325 = cljs.core.seq.call(null,v);
var chunk__18322_18326 = null;
var count__18323_18327 = (0);
var i__18324_18328 = (0);
while(true){
if((i__18324_18328 < count__18323_18327)){
var x_18329 = cljs.core._nth.call(null,chunk__18322_18326,i__18324_18328);
ret.push(x_18329);

var G__18330 = seq__18321_18325;
var G__18331 = chunk__18322_18326;
var G__18332 = count__18323_18327;
var G__18333 = (i__18324_18328 + (1));
seq__18321_18325 = G__18330;
chunk__18322_18326 = G__18331;
count__18323_18327 = G__18332;
i__18324_18328 = G__18333;
continue;
} else {
var temp__4425__auto___18334 = cljs.core.seq.call(null,seq__18321_18325);
if(temp__4425__auto___18334){
var seq__18321_18335__$1 = temp__4425__auto___18334;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18321_18335__$1)){
var c__17720__auto___18336 = cljs.core.chunk_first.call(null,seq__18321_18335__$1);
var G__18337 = cljs.core.chunk_rest.call(null,seq__18321_18335__$1);
var G__18338 = c__17720__auto___18336;
var G__18339 = cljs.core.count.call(null,c__17720__auto___18336);
var G__18340 = (0);
seq__18321_18325 = G__18337;
chunk__18322_18326 = G__18338;
count__18323_18327 = G__18339;
i__18324_18328 = G__18340;
continue;
} else {
var x_18341 = cljs.core.first.call(null,seq__18321_18335__$1);
ret.push(x_18341);

var G__18342 = cljs.core.next.call(null,seq__18321_18335__$1);
var G__18343 = null;
var G__18344 = (0);
var G__18345 = (0);
seq__18321_18325 = G__18342;
chunk__18322_18326 = G__18343;
count__18323_18327 = G__18344;
i__18324_18328 = G__18345;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args18346 = [];
var len__17976__auto___18357 = arguments.length;
var i__17977__auto___18358 = (0);
while(true){
if((i__17977__auto___18358 < len__17976__auto___18357)){
args18346.push((arguments[i__17977__auto___18358]));

var G__18359 = (i__17977__auto___18358 + (1));
i__17977__auto___18358 = G__18359;
continue;
} else {
}
break;
}

var G__18348 = args18346.length;
switch (G__18348) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18346.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__18349 = obj;
G__18349.push(kfn.call(null,k),vfn.call(null,v));

return G__18349;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x18350 = cljs.core.clone.call(null,handlers);
x18350.forEach = ((function (x18350,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__18351 = cljs.core.seq.call(null,coll);
var chunk__18352 = null;
var count__18353 = (0);
var i__18354 = (0);
while(true){
if((i__18354 < count__18353)){
var vec__18355 = cljs.core._nth.call(null,chunk__18352,i__18354);
var k = cljs.core.nth.call(null,vec__18355,(0),null);
var v = cljs.core.nth.call(null,vec__18355,(1),null);
f.call(null,v,k);

var G__18361 = seq__18351;
var G__18362 = chunk__18352;
var G__18363 = count__18353;
var G__18364 = (i__18354 + (1));
seq__18351 = G__18361;
chunk__18352 = G__18362;
count__18353 = G__18363;
i__18354 = G__18364;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18351);
if(temp__4425__auto__){
var seq__18351__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18351__$1)){
var c__17720__auto__ = cljs.core.chunk_first.call(null,seq__18351__$1);
var G__18365 = cljs.core.chunk_rest.call(null,seq__18351__$1);
var G__18366 = c__17720__auto__;
var G__18367 = cljs.core.count.call(null,c__17720__auto__);
var G__18368 = (0);
seq__18351 = G__18365;
chunk__18352 = G__18366;
count__18353 = G__18367;
i__18354 = G__18368;
continue;
} else {
var vec__18356 = cljs.core.first.call(null,seq__18351__$1);
var k = cljs.core.nth.call(null,vec__18356,(0),null);
var v = cljs.core.nth.call(null,vec__18356,(1),null);
f.call(null,v,k);

var G__18369 = cljs.core.next.call(null,seq__18351__$1);
var G__18370 = null;
var G__18371 = (0);
var G__18372 = (0);
seq__18351 = G__18369;
chunk__18352 = G__18370;
count__18353 = G__18371;
i__18354 = G__18372;
continue;
}
} else {
return null;
}
}
break;
}
});})(x18350,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x18350;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args18373 = [];
var len__17976__auto___18379 = arguments.length;
var i__17977__auto___18380 = (0);
while(true){
if((i__17977__auto___18380 < len__17976__auto___18379)){
args18373.push((arguments[i__17977__auto___18380]));

var G__18381 = (i__17977__auto___18380 + (1));
i__17977__auto___18380 = G__18381;
continue;
} else {
}
break;
}

var G__18375 = args18373.length;
switch (G__18375) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18373.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit18376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit18376 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta18377){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta18377 = meta18377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit18376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18378,meta18377__$1){
var self__ = this;
var _18378__$1 = this;
return (new cognitect.transit.t_cognitect$transit18376(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta18377__$1));
});

cognitect.transit.t_cognitect$transit18376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18378){
var self__ = this;
var _18378__$1 = this;
return self__.meta18377;
});

cognitect.transit.t_cognitect$transit18376.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18376.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit18376.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18376.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit18376.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta18377","meta18377",1288312328,null)], null);
});

cognitect.transit.t_cognitect$transit18376.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit18376.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit18376";

cognitect.transit.t_cognitect$transit18376.cljs$lang$ctorPrWriter = (function (this__17515__auto__,writer__17516__auto__,opt__17517__auto__){
return cljs.core._write.call(null,writer__17516__auto__,"cognitect.transit/t_cognitect$transit18376");
});

cognitect.transit.__GT_t_cognitect$transit18376 = (function cognitect$transit$__GT_t_cognitect$transit18376(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18377){
return (new cognitect.transit.t_cognitect$transit18376(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta18377));
});

}

return (new cognitect.transit.t_cognitect$transit18376(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1449412230063