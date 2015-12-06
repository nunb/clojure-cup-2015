// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4425__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4425__auto__)){
var req = temp__4425__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__22233){
var vec__22234 = p__22233;
var k = cljs.core.nth.call(null,vec__22234,(0),null);
var v = cljs.core.nth.call(null,vec__22234,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__22236 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__22236)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__22236)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__22236)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__22236)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__22236)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__22236)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__22237){
var map__22241 = p__22237;
var map__22241__$1 = ((((!((map__22241 == null)))?((((map__22241.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22241.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22241):map__22241);
var request = map__22241__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__22241__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__22241__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__22241__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__16917__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__22243 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__22243,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__22243,response_type);

G__22243.setTimeoutInterval(timeout);

G__22243.setWithCredentials(send_credentials);

return G__22243;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__22244){
var map__22271 = p__22244;
var map__22271__$1 = ((((!((map__22271 == null)))?((((map__22271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22271):map__22271);
var request = map__22271__$1;
var request_method = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__22271__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__16917__auto__ = request_method;
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__19457__auto___22297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___22297,channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___22297,channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_22283){
var state_val_22284 = (state_22283[(1)]);
if((state_val_22284 === (1))){
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22283__$1,(2),cancel);
} else {
if((state_val_22284 === (2))){
var inst_22274 = (state_22283[(2)]);
var inst_22275 = xhr__$1.isComplete();
var inst_22276 = cljs.core.not.call(null,inst_22275);
var state_22283__$1 = (function (){var statearr_22285 = state_22283;
(statearr_22285[(7)] = inst_22274);

return statearr_22285;
})();
if(inst_22276){
var statearr_22286_22298 = state_22283__$1;
(statearr_22286_22298[(1)] = (3));

} else {
var statearr_22287_22299 = state_22283__$1;
(statearr_22287_22299[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (3))){
var inst_22278 = xhr__$1.abort();
var state_22283__$1 = state_22283;
var statearr_22288_22300 = state_22283__$1;
(statearr_22288_22300[(2)] = inst_22278);

(statearr_22288_22300[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (4))){
var state_22283__$1 = state_22283;
var statearr_22289_22301 = state_22283__$1;
(statearr_22289_22301[(2)] = null);

(statearr_22289_22301[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22284 === (5))){
var inst_22281 = (state_22283[(2)]);
var state_22283__$1 = state_22283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22283__$1,inst_22281);
} else {
return null;
}
}
}
}
}
});})(c__19457__auto___22297,channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__19345__auto__,c__19457__auto___22297,channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__19346__auto__ = null;
var cljs_http$core$xhr_$_state_machine__19346__auto____0 = (function (){
var statearr_22293 = [null,null,null,null,null,null,null,null];
(statearr_22293[(0)] = cljs_http$core$xhr_$_state_machine__19346__auto__);

(statearr_22293[(1)] = (1));

return statearr_22293;
});
var cljs_http$core$xhr_$_state_machine__19346__auto____1 = (function (state_22283){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_22283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e22294){if((e22294 instanceof Object)){
var ex__19349__auto__ = e22294;
var statearr_22295_22302 = state_22283;
(statearr_22295_22302[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22303 = state_22283;
state_22283 = G__22303;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__19346__auto__ = function(state_22283){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__19346__auto____1.call(this,state_22283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__19346__auto____0;
cljs_http$core$xhr_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__19346__auto____1;
return cljs_http$core$xhr_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___22297,channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__19459__auto__ = (function (){var statearr_22296 = f__19458__auto__.call(null);
(statearr_22296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___22297);

return statearr_22296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___22297,channel,request_url,method,headers__$1,xhr__$1,map__22271,map__22271__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__22304){
var map__22321 = p__22304;
var map__22321__$1 = ((((!((map__22321 == null)))?((((map__22321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22321):map__22321);
var request = map__22321__$1;
var timeout = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__22321__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_22337 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel))
,((function (channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_22337], null));

if(cljs.core.truth_(cancel)){
var c__19457__auto___22338 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___22338,req_22337,channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___22338,req_22337,channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel){
return (function (state_22327){
var state_val_22328 = (state_22327[(1)]);
if((state_val_22328 === (1))){
var state_22327__$1 = state_22327;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22327__$1,(2),cancel);
} else {
if((state_val_22328 === (2))){
var inst_22324 = (state_22327[(2)]);
var inst_22325 = jsonp__$1.cancel(req_22337);
var state_22327__$1 = (function (){var statearr_22329 = state_22327;
(statearr_22329[(7)] = inst_22324);

return statearr_22329;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22327__$1,inst_22325);
} else {
return null;
}
}
});})(c__19457__auto___22338,req_22337,channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel))
;
return ((function (switch__19345__auto__,c__19457__auto___22338,req_22337,channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel){
return (function() {
var cljs_http$core$jsonp_$_state_machine__19346__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__19346__auto____0 = (function (){
var statearr_22333 = [null,null,null,null,null,null,null,null];
(statearr_22333[(0)] = cljs_http$core$jsonp_$_state_machine__19346__auto__);

(statearr_22333[(1)] = (1));

return statearr_22333;
});
var cljs_http$core$jsonp_$_state_machine__19346__auto____1 = (function (state_22327){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_22327);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e22334){if((e22334 instanceof Object)){
var ex__19349__auto__ = e22334;
var statearr_22335_22339 = state_22327;
(statearr_22335_22339[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22327);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22340 = state_22327;
state_22327 = G__22340;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__19346__auto__ = function(state_22327){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__19346__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__19346__auto____1.call(this,state_22327);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__19346__auto____0;
cljs_http$core$jsonp_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__19346__auto____1;
return cljs_http$core$jsonp_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___22338,req_22337,channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel))
})();
var state__19459__auto__ = (function (){var statearr_22336 = f__19458__auto__.call(null);
(statearr_22336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___22338);

return statearr_22336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___22338,req_22337,channel,jsonp__$1,map__22321,map__22321__$1,request,timeout,callback_name,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__22341){
var map__22344 = p__22341;
var map__22344__$1 = ((((!((map__22344 == null)))?((((map__22344.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22344.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22344):map__22344);
var request__$1 = map__22344__$1;
var request_method = cljs.core.get.call(null,map__22344__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1449412232328