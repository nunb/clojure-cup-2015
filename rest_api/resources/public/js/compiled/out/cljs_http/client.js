// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__16905__auto__ = v;
if(cljs.core.truth_(and__16905__auto__)){
return (v > (0));
} else {
return and__16905__auto__;
}
})())){
return v;
} else {
return null;
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__22349_SHARP_,p2__22348_SHARP_){
var vec__22351 = clojure.string.split.call(null,p2__22348_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__22351,(0),null);
var v = cljs.core.nth.call(null,vec__22351,(1),null);
return cljs.core.assoc.call(null,p1__22349_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__22352_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__22352_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__22353){
var vec__22355 = p__22353;
var k = cljs.core.nth.call(null,vec__22355,(0),null);
var v = cljs.core.nth.call(null,vec__22355,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__22356_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__22356_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__16905__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__16905__auto__){
var and__16905__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__16905__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__16905__auto____$1;
}
} else {
return and__16905__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__22357_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22357_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22362 = arguments.length;
var i__17977__auto___22363 = (0);
while(true){
if((i__17977__auto___22363 < len__17976__auto___22362)){
args__17983__auto__.push((arguments[i__17977__auto___22363]));

var G__22364 = (i__17977__auto___22363 + (1));
i__17977__auto___22363 = G__22364;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22360){
var vec__22361 = p__22360;
var default_headers = cljs.core.nth.call(null,vec__22361,(0),null);
return ((function (vec__22361,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__16917__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var default_headers__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22361,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq22358){
var G__22359 = cljs.core.first.call(null,seq22358);
var seq22358__$1 = cljs.core.next.call(null,seq22358);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__22359,seq22358__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22369 = arguments.length;
var i__17977__auto___22370 = (0);
while(true){
if((i__17977__auto___22370 < len__17976__auto___22369)){
args__17983__auto__.push((arguments[i__17977__auto___22370]));

var G__22371 = (i__17977__auto___22370 + (1));
i__17977__auto___22370 = G__22371;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22367){
var vec__22368 = p__22367;
var accept = cljs.core.nth.call(null,vec__22368,(0),null);
return ((function (vec__22368,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__16917__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var accept__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22368,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq22365){
var G__22366 = cljs.core.first.call(null,seq22365);
var seq22365__$1 = cljs.core.next.call(null,seq22365);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__22366,seq22365__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22376 = arguments.length;
var i__17977__auto___22377 = (0);
while(true){
if((i__17977__auto___22377 < len__17976__auto___22376)){
args__17983__auto__.push((arguments[i__17977__auto___22377]));

var G__22378 = (i__17977__auto___22377 + (1));
i__17977__auto___22377 = G__22378;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22374){
var vec__22375 = p__22374;
var content_type = cljs.core.nth.call(null,vec__22375,(0),null);
return ((function (vec__22375,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__16917__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var content_type__$1 = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__22375,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq22372){
var G__22373 = cljs.core.first.call(null,seq22372);
var seq22372__$1 = cljs.core.next.call(null,seq22372);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__22373,seq22372__$1);
});
cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var map__22381 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__22381__$1 = ((((!((map__22381 == null)))?((((map__22381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22381):map__22381);
var encoding = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__22381__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__22387 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__22387__$1 = ((((!((map__22387 == null)))?((((map__22387.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22387.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22387):map__22387);
var decoding = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__22387__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__22387,map__22387__$1,decoding,decoding_opts){
return (function (p1__22383_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__22383_SHARP_,decoding,decoding_opts);
});})(map__22387,map__22387__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__22387,map__22387__$1,decoding,decoding_opts,transit_decode){
return (function (p1__22384_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22384_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__22387,map__22387__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var params = temp__4423__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__22389_SHARP_){
return cljs_http.client.decode_body.call(null,p1__22389_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__22393){
var map__22394 = p__22393;
var map__22394__$1 = ((((!((map__22394 == null)))?((((map__22394.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22394.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22394):map__22394);
var req = map__22394__$1;
var query_params = cljs.core.get.call(null,map__22394__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__22399){
var map__22400 = p__22399;
var map__22400__$1 = ((((!((map__22400 == null)))?((((map__22400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22400):map__22400);
var request = map__22400__$1;
var form_params = cljs.core.get.call(null,map__22400__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__22400__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__22400__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__16905__auto__ = form_params;
if(cljs.core.truth_(and__16905__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16905__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__22408_22414 = cljs.core.seq.call(null,params);
var chunk__22409_22415 = null;
var count__22410_22416 = (0);
var i__22411_22417 = (0);
while(true){
if((i__22411_22417 < count__22410_22416)){
var vec__22412_22418 = cljs.core._nth.call(null,chunk__22409_22415,i__22411_22417);
var k_22419 = cljs.core.nth.call(null,vec__22412_22418,(0),null);
var v_22420 = cljs.core.nth.call(null,vec__22412_22418,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_22420)){
form_data.append(cljs.core.name.call(null,k_22419),cljs.core.first.call(null,v_22420),cljs.core.second.call(null,v_22420));
} else {
form_data.append(cljs.core.name.call(null,k_22419),v_22420);
}

var G__22421 = seq__22408_22414;
var G__22422 = chunk__22409_22415;
var G__22423 = count__22410_22416;
var G__22424 = (i__22411_22417 + (1));
seq__22408_22414 = G__22421;
chunk__22409_22415 = G__22422;
count__22410_22416 = G__22423;
i__22411_22417 = G__22424;
continue;
} else {
var temp__4425__auto___22425 = cljs.core.seq.call(null,seq__22408_22414);
if(temp__4425__auto___22425){
var seq__22408_22426__$1 = temp__4425__auto___22425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22408_22426__$1)){
var c__17720__auto___22427 = cljs.core.chunk_first.call(null,seq__22408_22426__$1);
var G__22428 = cljs.core.chunk_rest.call(null,seq__22408_22426__$1);
var G__22429 = c__17720__auto___22427;
var G__22430 = cljs.core.count.call(null,c__17720__auto___22427);
var G__22431 = (0);
seq__22408_22414 = G__22428;
chunk__22409_22415 = G__22429;
count__22410_22416 = G__22430;
i__22411_22417 = G__22431;
continue;
} else {
var vec__22413_22432 = cljs.core.first.call(null,seq__22408_22426__$1);
var k_22433 = cljs.core.nth.call(null,vec__22413_22432,(0),null);
var v_22434 = cljs.core.nth.call(null,vec__22413_22432,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_22434)){
form_data.append(cljs.core.name.call(null,k_22433),cljs.core.first.call(null,v_22434),cljs.core.second.call(null,v_22434));
} else {
form_data.append(cljs.core.name.call(null,k_22433),v_22434);
}

var G__22435 = cljs.core.next.call(null,seq__22408_22426__$1);
var G__22436 = null;
var G__22437 = (0);
var G__22438 = (0);
seq__22408_22414 = G__22435;
chunk__22409_22415 = G__22436;
count__22410_22416 = G__22437;
i__22411_22417 = G__22438;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__22442){
var map__22443 = p__22442;
var map__22443__$1 = ((((!((map__22443 == null)))?((((map__22443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22443):map__22443);
var request = map__22443__$1;
var multipart_params = cljs.core.get.call(null,map__22443__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__22443__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__16905__auto__ = multipart_params;
if(cljs.core.truth_(and__16905__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__16905__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__22445_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__22445_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__22450){
var map__22451 = p__22450;
var map__22451__$1 = ((((!((map__22451 == null)))?((((map__22451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22451):map__22451);
var req = map__22451__$1;
var query_params = cljs.core.get.call(null,map__22451__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__22451,map__22451__$1,req,query_params){
return (function (p1__22446_SHARP_){
return cljs.core.merge.call(null,p1__22446_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__22451,map__22451__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22457 = arguments.length;
var i__17977__auto___22458 = (0);
while(true){
if((i__17977__auto___22458 < len__17976__auto___22457)){
args__17983__auto__.push((arguments[i__17977__auto___22458]));

var G__22459 = (i__17977__auto___22458 + (1));
i__17977__auto___22458 = G__22459;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__22455){
var vec__22456 = p__22455;
var credentials = cljs.core.nth.call(null,vec__22456,(0),null);
return ((function (vec__22456,credentials){
return (function (req){
var credentials__$1 = (function (){var or__16917__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__22456,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq22453){
var G__22454 = cljs.core.first.call(null,seq22453);
var seq22453__$1 = cljs.core.next.call(null,seq22453);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__22454,seq22453__$1);
});
/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__4423__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__4423__auto__)){
var oauth_token = temp__4423__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__4423__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__4423__auto__)){
var custom_channel = temp__4423__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22464 = arguments.length;
var i__17977__auto___22465 = (0);
while(true){
if((i__17977__auto___22465 < len__17976__auto___22464)){
args__17983__auto__.push((arguments[i__17977__auto___22465]));

var G__22466 = (i__17977__auto___22465 + (1));
i__17977__auto___22465 = G__22466;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22462){
var vec__22463 = p__22462;
var req = cljs.core.nth.call(null,vec__22463,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq22460){
var G__22461 = cljs.core.first.call(null,seq22460);
var seq22460__$1 = cljs.core.next.call(null,seq22460);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__22461,seq22460__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22471 = arguments.length;
var i__17977__auto___22472 = (0);
while(true){
if((i__17977__auto___22472 < len__17976__auto___22471)){
args__17983__auto__.push((arguments[i__17977__auto___22472]));

var G__22473 = (i__17977__auto___22472 + (1));
i__17977__auto___22472 = G__22473;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22469){
var vec__22470 = p__22469;
var req = cljs.core.nth.call(null,vec__22470,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq22467){
var G__22468 = cljs.core.first.call(null,seq22467);
var seq22467__$1 = cljs.core.next.call(null,seq22467);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__22468,seq22467__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22478 = arguments.length;
var i__17977__auto___22479 = (0);
while(true){
if((i__17977__auto___22479 < len__17976__auto___22478)){
args__17983__auto__.push((arguments[i__17977__auto___22479]));

var G__22480 = (i__17977__auto___22479 + (1));
i__17977__auto___22479 = G__22480;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22476){
var vec__22477 = p__22476;
var req = cljs.core.nth.call(null,vec__22477,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq22474){
var G__22475 = cljs.core.first.call(null,seq22474);
var seq22474__$1 = cljs.core.next.call(null,seq22474);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__22475,seq22474__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22485 = arguments.length;
var i__17977__auto___22486 = (0);
while(true){
if((i__17977__auto___22486 < len__17976__auto___22485)){
args__17983__auto__.push((arguments[i__17977__auto___22486]));

var G__22487 = (i__17977__auto___22486 + (1));
i__17977__auto___22486 = G__22487;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22483){
var vec__22484 = p__22483;
var req = cljs.core.nth.call(null,vec__22484,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq22481){
var G__22482 = cljs.core.first.call(null,seq22481);
var seq22481__$1 = cljs.core.next.call(null,seq22481);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__22482,seq22481__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22492 = arguments.length;
var i__17977__auto___22493 = (0);
while(true){
if((i__17977__auto___22493 < len__17976__auto___22492)){
args__17983__auto__.push((arguments[i__17977__auto___22493]));

var G__22494 = (i__17977__auto___22493 + (1));
i__17977__auto___22493 = G__22494;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22490){
var vec__22491 = p__22490;
var req = cljs.core.nth.call(null,vec__22491,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq22488){
var G__22489 = cljs.core.first.call(null,seq22488);
var seq22488__$1 = cljs.core.next.call(null,seq22488);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__22489,seq22488__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22499 = arguments.length;
var i__17977__auto___22500 = (0);
while(true){
if((i__17977__auto___22500 < len__17976__auto___22499)){
args__17983__auto__.push((arguments[i__17977__auto___22500]));

var G__22501 = (i__17977__auto___22500 + (1));
i__17977__auto___22500 = G__22501;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22497){
var vec__22498 = p__22497;
var req = cljs.core.nth.call(null,vec__22498,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq22495){
var G__22496 = cljs.core.first.call(null,seq22495);
var seq22495__$1 = cljs.core.next.call(null,seq22495);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__22496,seq22495__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22506 = arguments.length;
var i__17977__auto___22507 = (0);
while(true){
if((i__17977__auto___22507 < len__17976__auto___22506)){
args__17983__auto__.push((arguments[i__17977__auto___22507]));

var G__22508 = (i__17977__auto___22507 + (1));
i__17977__auto___22507 = G__22508;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22504){
var vec__22505 = p__22504;
var req = cljs.core.nth.call(null,vec__22505,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq22502){
var G__22503 = cljs.core.first.call(null,seq22502);
var seq22502__$1 = cljs.core.next.call(null,seq22502);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__22503,seq22502__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22513 = arguments.length;
var i__17977__auto___22514 = (0);
while(true){
if((i__17977__auto___22514 < len__17976__auto___22513)){
args__17983__auto__.push((arguments[i__17977__auto___22514]));

var G__22515 = (i__17977__auto___22514 + (1));
i__17977__auto___22514 = G__22515;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22511){
var vec__22512 = p__22511;
var req = cljs.core.nth.call(null,vec__22512,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq22509){
var G__22510 = cljs.core.first.call(null,seq22509);
var seq22509__$1 = cljs.core.next.call(null,seq22509);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__22510,seq22509__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__17983__auto__ = [];
var len__17976__auto___22520 = arguments.length;
var i__17977__auto___22521 = (0);
while(true){
if((i__17977__auto___22521 < len__17976__auto___22520)){
args__17983__auto__.push((arguments[i__17977__auto___22521]));

var G__22522 = (i__17977__auto___22521 + (1));
i__17977__auto___22521 = G__22522;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((1) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17984__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__22518){
var vec__22519 = p__22518;
var req = cljs.core.nth.call(null,vec__22519,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq22516){
var G__22517 = cljs.core.first.call(null,seq22516);
var seq22516__$1 = cljs.core.next.call(null,seq22516);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__22517,seq22516__$1);
});

//# sourceMappingURL=client.js.map?rel=1449412232534