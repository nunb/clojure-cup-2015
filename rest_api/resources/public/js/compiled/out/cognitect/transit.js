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
var seq__10833_10837 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__10834_10838 = null;
var count__10835_10839 = (0);
var i__10836_10840 = (0);
while(true){
if((i__10836_10840 < count__10835_10839)){
var k_10841 = cljs.core._nth.call(null,chunk__10834_10838,i__10836_10840);
var v_10842 = (b[k_10841]);
(a[k_10841] = v_10842);

var G__10843 = seq__10833_10837;
var G__10844 = chunk__10834_10838;
var G__10845 = count__10835_10839;
var G__10846 = (i__10836_10840 + (1));
seq__10833_10837 = G__10843;
chunk__10834_10838 = G__10844;
count__10835_10839 = G__10845;
i__10836_10840 = G__10846;
continue;
} else {
var temp__4425__auto___10847 = cljs.core.seq.call(null,seq__10833_10837);
if(temp__4425__auto___10847){
var seq__10833_10848__$1 = temp__4425__auto___10847;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10833_10848__$1)){
var c__5563__auto___10849 = cljs.core.chunk_first.call(null,seq__10833_10848__$1);
var G__10850 = cljs.core.chunk_rest.call(null,seq__10833_10848__$1);
var G__10851 = c__5563__auto___10849;
var G__10852 = cljs.core.count.call(null,c__5563__auto___10849);
var G__10853 = (0);
seq__10833_10837 = G__10850;
chunk__10834_10838 = G__10851;
count__10835_10839 = G__10852;
i__10836_10840 = G__10853;
continue;
} else {
var k_10854 = cljs.core.first.call(null,seq__10833_10848__$1);
var v_10855 = (b[k_10854]);
(a[k_10854] = v_10855);

var G__10856 = cljs.core.next.call(null,seq__10833_10848__$1);
var G__10857 = null;
var G__10858 = (0);
var G__10859 = (0);
seq__10833_10837 = G__10856;
chunk__10834_10838 = G__10857;
count__10835_10839 = G__10858;
i__10836_10840 = G__10859;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/VectorBuilder");
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
var args10860 = [];
var len__5818__auto___10863 = arguments.length;
var i__5819__auto___10864 = (0);
while(true){
if((i__5819__auto___10864 < len__5818__auto___10863)){
args10860.push((arguments[i__5819__auto___10864]));

var G__10865 = (i__5819__auto___10864 + (1));
i__5819__auto___10864 = G__10865;
continue;
} else {
}
break;
}

var G__10862 = args10860.length;
switch (G__10862) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10860.length)].join('')));

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
var G__10867 = (i + (2));
var G__10868 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__10867;
ret = G__10868;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/SymbolHandler");
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
var seq__10869_10873 = cljs.core.seq.call(null,v);
var chunk__10870_10874 = null;
var count__10871_10875 = (0);
var i__10872_10876 = (0);
while(true){
if((i__10872_10876 < count__10871_10875)){
var x_10877 = cljs.core._nth.call(null,chunk__10870_10874,i__10872_10876);
ret.push(x_10877);

var G__10878 = seq__10869_10873;
var G__10879 = chunk__10870_10874;
var G__10880 = count__10871_10875;
var G__10881 = (i__10872_10876 + (1));
seq__10869_10873 = G__10878;
chunk__10870_10874 = G__10879;
count__10871_10875 = G__10880;
i__10872_10876 = G__10881;
continue;
} else {
var temp__4425__auto___10882 = cljs.core.seq.call(null,seq__10869_10873);
if(temp__4425__auto___10882){
var seq__10869_10883__$1 = temp__4425__auto___10882;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10869_10883__$1)){
var c__5563__auto___10884 = cljs.core.chunk_first.call(null,seq__10869_10883__$1);
var G__10885 = cljs.core.chunk_rest.call(null,seq__10869_10883__$1);
var G__10886 = c__5563__auto___10884;
var G__10887 = cljs.core.count.call(null,c__5563__auto___10884);
var G__10888 = (0);
seq__10869_10873 = G__10885;
chunk__10870_10874 = G__10886;
count__10871_10875 = G__10887;
i__10872_10876 = G__10888;
continue;
} else {
var x_10889 = cljs.core.first.call(null,seq__10869_10883__$1);
ret.push(x_10889);

var G__10890 = cljs.core.next.call(null,seq__10869_10883__$1);
var G__10891 = null;
var G__10892 = (0);
var G__10893 = (0);
seq__10869_10873 = G__10890;
chunk__10870_10874 = G__10891;
count__10871_10875 = G__10892;
i__10872_10876 = G__10893;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/MapHandler");
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
var seq__10894_10898 = cljs.core.seq.call(null,v);
var chunk__10895_10899 = null;
var count__10896_10900 = (0);
var i__10897_10901 = (0);
while(true){
if((i__10897_10901 < count__10896_10900)){
var x_10902 = cljs.core._nth.call(null,chunk__10895_10899,i__10897_10901);
ret.push(x_10902);

var G__10903 = seq__10894_10898;
var G__10904 = chunk__10895_10899;
var G__10905 = count__10896_10900;
var G__10906 = (i__10897_10901 + (1));
seq__10894_10898 = G__10903;
chunk__10895_10899 = G__10904;
count__10896_10900 = G__10905;
i__10897_10901 = G__10906;
continue;
} else {
var temp__4425__auto___10907 = cljs.core.seq.call(null,seq__10894_10898);
if(temp__4425__auto___10907){
var seq__10894_10908__$1 = temp__4425__auto___10907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10894_10908__$1)){
var c__5563__auto___10909 = cljs.core.chunk_first.call(null,seq__10894_10908__$1);
var G__10910 = cljs.core.chunk_rest.call(null,seq__10894_10908__$1);
var G__10911 = c__5563__auto___10909;
var G__10912 = cljs.core.count.call(null,c__5563__auto___10909);
var G__10913 = (0);
seq__10894_10898 = G__10910;
chunk__10895_10899 = G__10911;
count__10896_10900 = G__10912;
i__10897_10901 = G__10913;
continue;
} else {
var x_10914 = cljs.core.first.call(null,seq__10894_10908__$1);
ret.push(x_10914);

var G__10915 = cljs.core.next.call(null,seq__10894_10908__$1);
var G__10916 = null;
var G__10917 = (0);
var G__10918 = (0);
seq__10894_10898 = G__10915;
chunk__10895_10899 = G__10916;
count__10896_10900 = G__10917;
i__10897_10901 = G__10918;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/SetHandler");
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
var seq__10919_10923 = cljs.core.seq.call(null,v);
var chunk__10920_10924 = null;
var count__10921_10925 = (0);
var i__10922_10926 = (0);
while(true){
if((i__10922_10926 < count__10921_10925)){
var x_10927 = cljs.core._nth.call(null,chunk__10920_10924,i__10922_10926);
ret.push(x_10927);

var G__10928 = seq__10919_10923;
var G__10929 = chunk__10920_10924;
var G__10930 = count__10921_10925;
var G__10931 = (i__10922_10926 + (1));
seq__10919_10923 = G__10928;
chunk__10920_10924 = G__10929;
count__10921_10925 = G__10930;
i__10922_10926 = G__10931;
continue;
} else {
var temp__4425__auto___10932 = cljs.core.seq.call(null,seq__10919_10923);
if(temp__4425__auto___10932){
var seq__10919_10933__$1 = temp__4425__auto___10932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10919_10933__$1)){
var c__5563__auto___10934 = cljs.core.chunk_first.call(null,seq__10919_10933__$1);
var G__10935 = cljs.core.chunk_rest.call(null,seq__10919_10933__$1);
var G__10936 = c__5563__auto___10934;
var G__10937 = cljs.core.count.call(null,c__5563__auto___10934);
var G__10938 = (0);
seq__10919_10923 = G__10935;
chunk__10920_10924 = G__10936;
count__10921_10925 = G__10937;
i__10922_10926 = G__10938;
continue;
} else {
var x_10939 = cljs.core.first.call(null,seq__10919_10933__$1);
ret.push(x_10939);

var G__10940 = cljs.core.next.call(null,seq__10919_10933__$1);
var G__10941 = null;
var G__10942 = (0);
var G__10943 = (0);
seq__10919_10923 = G__10940;
chunk__10920_10924 = G__10941;
count__10921_10925 = G__10942;
i__10922_10926 = G__10943;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/UUIDHandler");
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
var args10944 = [];
var len__5818__auto___10955 = arguments.length;
var i__5819__auto___10956 = (0);
while(true){
if((i__5819__auto___10956 < len__5818__auto___10955)){
args10944.push((arguments[i__5819__auto___10956]));

var G__10957 = (i__5819__auto___10956 + (1));
i__5819__auto___10956 = G__10957;
continue;
} else {
}
break;
}

var G__10946 = args10944.length;
switch (G__10946) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10944.length)].join('')));

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
var G__10947 = obj;
G__10947.push(kfn.call(null,k),vfn.call(null,v));

return G__10947;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x10948 = cljs.core.clone.call(null,handlers);
x10948.forEach = ((function (x10948,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__10949 = cljs.core.seq.call(null,coll);
var chunk__10950 = null;
var count__10951 = (0);
var i__10952 = (0);
while(true){
if((i__10952 < count__10951)){
var vec__10953 = cljs.core._nth.call(null,chunk__10950,i__10952);
var k = cljs.core.nth.call(null,vec__10953,(0),null);
var v = cljs.core.nth.call(null,vec__10953,(1),null);
f.call(null,v,k);

var G__10959 = seq__10949;
var G__10960 = chunk__10950;
var G__10961 = count__10951;
var G__10962 = (i__10952 + (1));
seq__10949 = G__10959;
chunk__10950 = G__10960;
count__10951 = G__10961;
i__10952 = G__10962;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10949);
if(temp__4425__auto__){
var seq__10949__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10949__$1)){
var c__5563__auto__ = cljs.core.chunk_first.call(null,seq__10949__$1);
var G__10963 = cljs.core.chunk_rest.call(null,seq__10949__$1);
var G__10964 = c__5563__auto__;
var G__10965 = cljs.core.count.call(null,c__5563__auto__);
var G__10966 = (0);
seq__10949 = G__10963;
chunk__10950 = G__10964;
count__10951 = G__10965;
i__10952 = G__10966;
continue;
} else {
var vec__10954 = cljs.core.first.call(null,seq__10949__$1);
var k = cljs.core.nth.call(null,vec__10954,(0),null);
var v = cljs.core.nth.call(null,vec__10954,(1),null);
f.call(null,v,k);

var G__10967 = cljs.core.next.call(null,seq__10949__$1);
var G__10968 = null;
var G__10969 = (0);
var G__10970 = (0);
seq__10949 = G__10967;
chunk__10950 = G__10968;
count__10951 = G__10969;
i__10952 = G__10970;
continue;
}
} else {
return null;
}
}
break;
}
});})(x10948,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x10948;
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
var args10971 = [];
var len__5818__auto___10977 = arguments.length;
var i__5819__auto___10978 = (0);
while(true){
if((i__5819__auto___10978 < len__5818__auto___10977)){
args10971.push((arguments[i__5819__auto___10978]));

var G__10979 = (i__5819__auto___10978 + (1));
i__5819__auto___10978 = G__10979;
continue;
} else {
}
break;
}

var G__10973 = args10971.length;
switch (G__10973) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10971.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit10974 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit10974 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta10975){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta10975 = meta10975;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit10974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10976,meta10975__$1){
var self__ = this;
var _10976__$1 = this;
return (new cognitect.transit.t_cognitect$transit10974(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta10975__$1));
});

cognitect.transit.t_cognitect$transit10974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10976){
var self__ = this;
var _10976__$1 = this;
return self__.meta10975;
});

cognitect.transit.t_cognitect$transit10974.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10974.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit10974.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10974.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit10974.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta10975","meta10975",-1793705841,null)], null);
});

cognitect.transit.t_cognitect$transit10974.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit10974.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit10974";

cognitect.transit.t_cognitect$transit10974.cljs$lang$ctorPrWriter = (function (this__5358__auto__,writer__5359__auto__,opt__5360__auto__){
return cljs.core._write.call(null,writer__5359__auto__,"cognitect.transit/t_cognitect$transit10974");
});

cognitect.transit.__GT_t_cognitect$transit10974 = (function cognitect$transit$__GT_t_cognitect$transit10974(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10975){
return (new cognitect.transit.t_cognitect$transit10974(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta10975));
});

}

return (new cognitect.transit.t_cognitect$transit10974(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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

//# sourceMappingURL=transit.js.map?rel=1449440890522