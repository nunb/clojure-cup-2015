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
if(cljs.core.truth_((function (){var and__4748__auto__ = v;
if(cljs.core.truth_(and__4748__auto__)){
return (v > (0));
} else {
return and__4748__auto__;
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
return cljs.core.reduce.call(null,(function (p1__15180_SHARP_,p2__15179_SHARP_){
var vec__15182 = clojure.string.split.call(null,p2__15179_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__15182,(0),null);
var v = cljs.core.nth.call(null,vec__15182,(1),null);
return cljs.core.assoc.call(null,p1__15180_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__15183_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__15183_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__15184){
var vec__15186 = p__15184;
var k = cljs.core.nth.call(null,vec__15186,(0),null);
var v = cljs.core.nth.call(null,vec__15186,(1),null);
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
return (function (p1__15187_SHARP_){
return [cljs.core.str("\\"),cljs.core.str(p1__15187_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var and__4748__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__4748__auto__){
var and__4748__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__4748__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__4748__auto____$1;
}
} else {
return and__4748__auto__;
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
return cljs.core.async.map.call(null,(function (p1__15188_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15188_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15193 = arguments.length;
var i__5819__auto___15194 = (0);
while(true){
if((i__5819__auto___15194 < len__5818__auto___15193)){
args__5825__auto__.push((arguments[i__5819__auto___15194]));

var G__15195 = (i__5819__auto___15194 + (1));
i__5819__auto___15194 = G__15195;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15191){
var vec__15192 = p__15191;
var default_headers = cljs.core.nth.call(null,vec__15192,(0),null);
return ((function (vec__15192,default_headers){
return (function (request){
var temp__4423__auto__ = (function (){var or__4760__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
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
;})(vec__15192,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq15189){
var G__15190 = cljs.core.first.call(null,seq15189);
var seq15189__$1 = cljs.core.next.call(null,seq15189);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic(G__15190,seq15189__$1);
});
cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15200 = arguments.length;
var i__5819__auto___15201 = (0);
while(true){
if((i__5819__auto___15201 < len__5818__auto___15200)){
args__5825__auto__.push((arguments[i__5819__auto___15201]));

var G__15202 = (i__5819__auto___15201 + (1));
i__5819__auto___15201 = G__15202;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15198){
var vec__15199 = p__15198;
var accept = cljs.core.nth.call(null,vec__15199,(0),null);
return ((function (vec__15199,accept){
return (function (request){
var temp__4423__auto__ = (function (){var or__4760__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
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
;})(vec__15199,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq15196){
var G__15197 = cljs.core.first.call(null,seq15196);
var seq15196__$1 = cljs.core.next.call(null,seq15196);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic(G__15197,seq15196__$1);
});
cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15207 = arguments.length;
var i__5819__auto___15208 = (0);
while(true){
if((i__5819__auto___15208 < len__5818__auto___15207)){
args__5825__auto__.push((arguments[i__5819__auto___15208]));

var G__15209 = (i__5819__auto___15208 + (1));
i__5819__auto___15208 = G__15209;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15205){
var vec__15206 = p__15205;
var content_type = cljs.core.nth.call(null,vec__15206,(0),null);
return ((function (vec__15206,content_type){
return (function (request){
var temp__4423__auto__ = (function (){var or__4760__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
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
;})(vec__15206,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq15203){
var G__15204 = cljs.core.first.call(null,seq15203);
var seq15203__$1 = cljs.core.next.call(null,seq15203);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic(G__15204,seq15203__$1);
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
var map__15212 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__15212__$1 = ((((!((map__15212 == null)))?((((map__15212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15212):map__15212);
var encoding = cljs.core.get.call(null,map__15212__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__15212__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
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
var map__15218 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__15218__$1 = ((((!((map__15218 == null)))?((((map__15218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15218):map__15218);
var decoding = cljs.core.get.call(null,map__15218__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__15218__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__15218,map__15218__$1,decoding,decoding_opts){
return (function (p1__15214_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__15214_SHARP_,decoding,decoding_opts);
});})(map__15218,map__15218__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__15218,map__15218__$1,decoding,decoding_opts,transit_decode){
return (function (p1__15215_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15215_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__15218,map__15218__$1,decoding,decoding_opts,transit_decode))
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
return cljs.core.async.map.call(null,(function (p1__15220_SHARP_){
return cljs_http.client.decode_body.call(null,p1__15220_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__15224){
var map__15225 = p__15224;
var map__15225__$1 = ((((!((map__15225 == null)))?((((map__15225.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15225.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15225):map__15225);
var req = map__15225__$1;
var query_params = cljs.core.get.call(null,map__15225__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__15230){
var map__15231 = p__15230;
var map__15231__$1 = ((((!((map__15231 == null)))?((((map__15231.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15231.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15231):map__15231);
var request = map__15231__$1;
var form_params = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__15231__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__4748__auto__ = form_params;
if(cljs.core.truth_(and__4748__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4748__auto__;
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
var seq__15239_15245 = cljs.core.seq.call(null,params);
var chunk__15240_15246 = null;
var count__15241_15247 = (0);
var i__15242_15248 = (0);
while(true){
if((i__15242_15248 < count__15241_15247)){
var vec__15243_15249 = cljs.core._nth.call(null,chunk__15240_15246,i__15242_15248);
var k_15250 = cljs.core.nth.call(null,vec__15243_15249,(0),null);
var v_15251 = cljs.core.nth.call(null,vec__15243_15249,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_15251)){
form_data.append(cljs.core.name.call(null,k_15250),cljs.core.first.call(null,v_15251),cljs.core.second.call(null,v_15251));
} else {
form_data.append(cljs.core.name.call(null,k_15250),v_15251);
}

var G__15252 = seq__15239_15245;
var G__15253 = chunk__15240_15246;
var G__15254 = count__15241_15247;
var G__15255 = (i__15242_15248 + (1));
seq__15239_15245 = G__15252;
chunk__15240_15246 = G__15253;
count__15241_15247 = G__15254;
i__15242_15248 = G__15255;
continue;
} else {
var temp__4425__auto___15256 = cljs.core.seq.call(null,seq__15239_15245);
if(temp__4425__auto___15256){
var seq__15239_15257__$1 = temp__4425__auto___15256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15239_15257__$1)){
var c__5563__auto___15258 = cljs.core.chunk_first.call(null,seq__15239_15257__$1);
var G__15259 = cljs.core.chunk_rest.call(null,seq__15239_15257__$1);
var G__15260 = c__5563__auto___15258;
var G__15261 = cljs.core.count.call(null,c__5563__auto___15258);
var G__15262 = (0);
seq__15239_15245 = G__15259;
chunk__15240_15246 = G__15260;
count__15241_15247 = G__15261;
i__15242_15248 = G__15262;
continue;
} else {
var vec__15244_15263 = cljs.core.first.call(null,seq__15239_15257__$1);
var k_15264 = cljs.core.nth.call(null,vec__15244_15263,(0),null);
var v_15265 = cljs.core.nth.call(null,vec__15244_15263,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_15265)){
form_data.append(cljs.core.name.call(null,k_15264),cljs.core.first.call(null,v_15265),cljs.core.second.call(null,v_15265));
} else {
form_data.append(cljs.core.name.call(null,k_15264),v_15265);
}

var G__15266 = cljs.core.next.call(null,seq__15239_15257__$1);
var G__15267 = null;
var G__15268 = (0);
var G__15269 = (0);
seq__15239_15245 = G__15266;
chunk__15240_15246 = G__15267;
count__15241_15247 = G__15268;
i__15242_15248 = G__15269;
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
return (function (p__15273){
var map__15274 = p__15273;
var map__15274__$1 = ((((!((map__15274 == null)))?((((map__15274.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15274.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15274):map__15274);
var request = map__15274__$1;
var multipart_params = cljs.core.get.call(null,map__15274__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__15274__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__4748__auto__ = multipart_params;
if(cljs.core.truth_(and__4748__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__4748__auto__;
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
return (function (p1__15276_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__15276_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__15281){
var map__15282 = p__15281;
var map__15282__$1 = ((((!((map__15282 == null)))?((((map__15282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15282):map__15282);
var req = map__15282__$1;
var query_params = cljs.core.get.call(null,map__15282__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__4423__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__4423__auto__)){
var spec = temp__4423__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__4423__auto__,map__15282,map__15282__$1,req,query_params){
return (function (p1__15277_SHARP_){
return cljs.core.merge.call(null,p1__15277_SHARP_,query_params);
});})(spec,temp__4423__auto__,map__15282,map__15282__$1,req,query_params))
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
var args__5825__auto__ = [];
var len__5818__auto___15288 = arguments.length;
var i__5819__auto___15289 = (0);
while(true){
if((i__5819__auto___15289 < len__5818__auto___15288)){
args__5825__auto__.push((arguments[i__5819__auto___15289]));

var G__15290 = (i__5819__auto___15289 + (1));
i__5819__auto___15289 = G__15290;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__15286){
var vec__15287 = p__15286;
var credentials = cljs.core.nth.call(null,vec__15287,(0),null);
return ((function (vec__15287,credentials){
return (function (req){
var credentials__$1 = (function (){var or__4760__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__4760__auto__)){
return or__4760__auto__;
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
;})(vec__15287,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq15284){
var G__15285 = cljs.core.first.call(null,seq15284);
var seq15284__$1 = cljs.core.next.call(null,seq15284);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic(G__15285,seq15284__$1);
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
var args__5825__auto__ = [];
var len__5818__auto___15295 = arguments.length;
var i__5819__auto___15296 = (0);
while(true){
if((i__5819__auto___15296 < len__5818__auto___15295)){
args__5825__auto__.push((arguments[i__5819__auto___15296]));

var G__15297 = (i__5819__auto___15296 + (1));
i__5819__auto___15296 = G__15297;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15293){
var vec__15294 = p__15293;
var req = cljs.core.nth.call(null,vec__15294,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

cljs_http.client.delete$.cljs$lang$applyTo = (function (seq15291){
var G__15292 = cljs.core.first.call(null,seq15291);
var seq15291__$1 = cljs.core.next.call(null,seq15291);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic(G__15292,seq15291__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15302 = arguments.length;
var i__5819__auto___15303 = (0);
while(true){
if((i__5819__auto___15303 < len__5818__auto___15302)){
args__5825__auto__.push((arguments[i__5819__auto___15303]));

var G__15304 = (i__5819__auto___15303 + (1));
i__5819__auto___15303 = G__15304;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15300){
var vec__15301 = p__15300;
var req = cljs.core.nth.call(null,vec__15301,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

cljs_http.client.get.cljs$lang$applyTo = (function (seq15298){
var G__15299 = cljs.core.first.call(null,seq15298);
var seq15298__$1 = cljs.core.next.call(null,seq15298);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(G__15299,seq15298__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15309 = arguments.length;
var i__5819__auto___15310 = (0);
while(true){
if((i__5819__auto___15310 < len__5818__auto___15309)){
args__5825__auto__.push((arguments[i__5819__auto___15310]));

var G__15311 = (i__5819__auto___15310 + (1));
i__5819__auto___15310 = G__15311;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15307){
var vec__15308 = p__15307;
var req = cljs.core.nth.call(null,vec__15308,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

cljs_http.client.head.cljs$lang$applyTo = (function (seq15305){
var G__15306 = cljs.core.first.call(null,seq15305);
var seq15305__$1 = cljs.core.next.call(null,seq15305);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic(G__15306,seq15305__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15316 = arguments.length;
var i__5819__auto___15317 = (0);
while(true){
if((i__5819__auto___15317 < len__5818__auto___15316)){
args__5825__auto__.push((arguments[i__5819__auto___15317]));

var G__15318 = (i__5819__auto___15317 + (1));
i__5819__auto___15317 = G__15318;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15314){
var vec__15315 = p__15314;
var req = cljs.core.nth.call(null,vec__15315,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq15312){
var G__15313 = cljs.core.first.call(null,seq15312);
var seq15312__$1 = cljs.core.next.call(null,seq15312);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic(G__15313,seq15312__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15323 = arguments.length;
var i__5819__auto___15324 = (0);
while(true){
if((i__5819__auto___15324 < len__5818__auto___15323)){
args__5825__auto__.push((arguments[i__5819__auto___15324]));

var G__15325 = (i__5819__auto___15324 + (1));
i__5819__auto___15324 = G__15325;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15321){
var vec__15322 = p__15321;
var req = cljs.core.nth.call(null,vec__15322,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

cljs_http.client.move.cljs$lang$applyTo = (function (seq15319){
var G__15320 = cljs.core.first.call(null,seq15319);
var seq15319__$1 = cljs.core.next.call(null,seq15319);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic(G__15320,seq15319__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15330 = arguments.length;
var i__5819__auto___15331 = (0);
while(true){
if((i__5819__auto___15331 < len__5818__auto___15330)){
args__5825__auto__.push((arguments[i__5819__auto___15331]));

var G__15332 = (i__5819__auto___15331 + (1));
i__5819__auto___15331 = G__15332;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15328){
var vec__15329 = p__15328;
var req = cljs.core.nth.call(null,vec__15329,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

cljs_http.client.options.cljs$lang$applyTo = (function (seq15326){
var G__15327 = cljs.core.first.call(null,seq15326);
var seq15326__$1 = cljs.core.next.call(null,seq15326);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic(G__15327,seq15326__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15337 = arguments.length;
var i__5819__auto___15338 = (0);
while(true){
if((i__5819__auto___15338 < len__5818__auto___15337)){
args__5825__auto__.push((arguments[i__5819__auto___15338]));

var G__15339 = (i__5819__auto___15338 + (1));
i__5819__auto___15338 = G__15339;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15335){
var vec__15336 = p__15335;
var req = cljs.core.nth.call(null,vec__15336,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

cljs_http.client.patch.cljs$lang$applyTo = (function (seq15333){
var G__15334 = cljs.core.first.call(null,seq15333);
var seq15333__$1 = cljs.core.next.call(null,seq15333);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic(G__15334,seq15333__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15344 = arguments.length;
var i__5819__auto___15345 = (0);
while(true){
if((i__5819__auto___15345 < len__5818__auto___15344)){
args__5825__auto__.push((arguments[i__5819__auto___15345]));

var G__15346 = (i__5819__auto___15345 + (1));
i__5819__auto___15345 = G__15346;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15342){
var vec__15343 = p__15342;
var req = cljs.core.nth.call(null,vec__15343,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

cljs_http.client.post.cljs$lang$applyTo = (function (seq15340){
var G__15341 = cljs.core.first.call(null,seq15340);
var seq15340__$1 = cljs.core.next.call(null,seq15340);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic(G__15341,seq15340__$1);
});
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__5825__auto__ = [];
var len__5818__auto___15351 = arguments.length;
var i__5819__auto___15352 = (0);
while(true){
if((i__5819__auto___15352 < len__5818__auto___15351)){
args__5825__auto__.push((arguments[i__5819__auto___15352]));

var G__15353 = (i__5819__auto___15352 + (1));
i__5819__auto___15352 = G__15353;
continue;
} else {
}
break;
}

var argseq__5826__auto__ = ((((1) < args__5825__auto__.length))?(new cljs.core.IndexedSeq(args__5825__auto__.slice((1)),(0))):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5826__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__15349){
var vec__15350 = p__15349;
var req = cljs.core.nth.call(null,vec__15350,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

cljs_http.client.put.cljs$lang$applyTo = (function (seq15347){
var G__15348 = cljs.core.first.call(null,seq15347);
var seq15347__$1 = cljs.core.next.call(null,seq15347);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic(G__15348,seq15347__$1);
});

//# sourceMappingURL=client.js.map?rel=1449439845308