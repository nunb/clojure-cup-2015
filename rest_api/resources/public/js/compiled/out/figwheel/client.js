// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27166 = cljs.core._EQ_;
var expr__27167 = (function (){var or__16917__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27166.call(null,"true",expr__27167))){
return true;
} else {
if(cljs.core.truth_(pred__27166.call(null,"false",expr__27167))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27167)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__27169__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27169 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27170__i = 0, G__27170__a = new Array(arguments.length -  0);
while (G__27170__i < G__27170__a.length) {G__27170__a[G__27170__i] = arguments[G__27170__i + 0]; ++G__27170__i;}
  args = new cljs.core.IndexedSeq(G__27170__a,0);
} 
return G__27169__delegate.call(this,args);};
G__27169.cljs$lang$maxFixedArity = 0;
G__27169.cljs$lang$applyTo = (function (arglist__27171){
var args = cljs.core.seq(arglist__27171);
return G__27169__delegate(args);
});
G__27169.cljs$core$IFn$_invoke$arity$variadic = G__27169__delegate;
return G__27169;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27172){
var map__27175 = p__27172;
var map__27175__$1 = ((((!((map__27175 == null)))?((((map__27175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27175):map__27175);
var message = cljs.core.get.call(null,map__27175__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27175__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16917__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16917__auto__)){
return or__16917__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16905__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16905__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16905__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19457__auto___27337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___27337,ch){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___27337,ch){
return (function (state_27306){
var state_val_27307 = (state_27306[(1)]);
if((state_val_27307 === (7))){
var inst_27302 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27308_27338 = state_27306__$1;
(statearr_27308_27338[(2)] = inst_27302);

(statearr_27308_27338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (1))){
var state_27306__$1 = state_27306;
var statearr_27309_27339 = state_27306__$1;
(statearr_27309_27339[(2)] = null);

(statearr_27309_27339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (4))){
var inst_27259 = (state_27306[(7)]);
var inst_27259__$1 = (state_27306[(2)]);
var state_27306__$1 = (function (){var statearr_27310 = state_27306;
(statearr_27310[(7)] = inst_27259__$1);

return statearr_27310;
})();
if(cljs.core.truth_(inst_27259__$1)){
var statearr_27311_27340 = state_27306__$1;
(statearr_27311_27340[(1)] = (5));

} else {
var statearr_27312_27341 = state_27306__$1;
(statearr_27312_27341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (15))){
var inst_27266 = (state_27306[(8)]);
var inst_27281 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27266);
var inst_27282 = cljs.core.first.call(null,inst_27281);
var inst_27283 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27282);
var inst_27284 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27283)].join('');
var inst_27285 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27284);
var state_27306__$1 = state_27306;
var statearr_27313_27342 = state_27306__$1;
(statearr_27313_27342[(2)] = inst_27285);

(statearr_27313_27342[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (13))){
var inst_27290 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27314_27343 = state_27306__$1;
(statearr_27314_27343[(2)] = inst_27290);

(statearr_27314_27343[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (6))){
var state_27306__$1 = state_27306;
var statearr_27315_27344 = state_27306__$1;
(statearr_27315_27344[(2)] = null);

(statearr_27315_27344[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (17))){
var inst_27288 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27316_27345 = state_27306__$1;
(statearr_27316_27345[(2)] = inst_27288);

(statearr_27316_27345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (3))){
var inst_27304 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27306__$1,inst_27304);
} else {
if((state_val_27307 === (12))){
var inst_27265 = (state_27306[(9)]);
var inst_27279 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27265,opts);
var state_27306__$1 = state_27306;
if(cljs.core.truth_(inst_27279)){
var statearr_27317_27346 = state_27306__$1;
(statearr_27317_27346[(1)] = (15));

} else {
var statearr_27318_27347 = state_27306__$1;
(statearr_27318_27347[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (2))){
var state_27306__$1 = state_27306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27306__$1,(4),ch);
} else {
if((state_val_27307 === (11))){
var inst_27266 = (state_27306[(8)]);
var inst_27271 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27272 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27266);
var inst_27273 = cljs.core.async.timeout.call(null,(1000));
var inst_27274 = [inst_27272,inst_27273];
var inst_27275 = (new cljs.core.PersistentVector(null,2,(5),inst_27271,inst_27274,null));
var state_27306__$1 = state_27306;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27306__$1,(14),inst_27275);
} else {
if((state_val_27307 === (9))){
var inst_27266 = (state_27306[(8)]);
var inst_27292 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27293 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27266);
var inst_27294 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27293);
var inst_27295 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27294)].join('');
var inst_27296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27295);
var state_27306__$1 = (function (){var statearr_27319 = state_27306;
(statearr_27319[(10)] = inst_27292);

return statearr_27319;
})();
var statearr_27320_27348 = state_27306__$1;
(statearr_27320_27348[(2)] = inst_27296);

(statearr_27320_27348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (5))){
var inst_27259 = (state_27306[(7)]);
var inst_27261 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27262 = (new cljs.core.PersistentArrayMap(null,2,inst_27261,null));
var inst_27263 = (new cljs.core.PersistentHashSet(null,inst_27262,null));
var inst_27264 = figwheel.client.focus_msgs.call(null,inst_27263,inst_27259);
var inst_27265 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27264);
var inst_27266 = cljs.core.first.call(null,inst_27264);
var inst_27267 = figwheel.client.autoload_QMARK_.call(null);
var state_27306__$1 = (function (){var statearr_27321 = state_27306;
(statearr_27321[(9)] = inst_27265);

(statearr_27321[(8)] = inst_27266);

return statearr_27321;
})();
if(cljs.core.truth_(inst_27267)){
var statearr_27322_27349 = state_27306__$1;
(statearr_27322_27349[(1)] = (8));

} else {
var statearr_27323_27350 = state_27306__$1;
(statearr_27323_27350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (14))){
var inst_27277 = (state_27306[(2)]);
var state_27306__$1 = state_27306;
var statearr_27324_27351 = state_27306__$1;
(statearr_27324_27351[(2)] = inst_27277);

(statearr_27324_27351[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (16))){
var state_27306__$1 = state_27306;
var statearr_27325_27352 = state_27306__$1;
(statearr_27325_27352[(2)] = null);

(statearr_27325_27352[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (10))){
var inst_27298 = (state_27306[(2)]);
var state_27306__$1 = (function (){var statearr_27326 = state_27306;
(statearr_27326[(11)] = inst_27298);

return statearr_27326;
})();
var statearr_27327_27353 = state_27306__$1;
(statearr_27327_27353[(2)] = null);

(statearr_27327_27353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27307 === (8))){
var inst_27265 = (state_27306[(9)]);
var inst_27269 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27265,opts);
var state_27306__$1 = state_27306;
if(cljs.core.truth_(inst_27269)){
var statearr_27328_27354 = state_27306__$1;
(statearr_27328_27354[(1)] = (11));

} else {
var statearr_27329_27355 = state_27306__$1;
(statearr_27329_27355[(1)] = (12));

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
});})(c__19457__auto___27337,ch))
;
return ((function (switch__19345__auto__,c__19457__auto___27337,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19346__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19346__auto____0 = (function (){
var statearr_27333 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27333[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19346__auto__);

(statearr_27333[(1)] = (1));

return statearr_27333;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19346__auto____1 = (function (state_27306){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_27306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e27334){if((e27334 instanceof Object)){
var ex__19349__auto__ = e27334;
var statearr_27335_27356 = state_27306;
(statearr_27335_27356[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27357 = state_27306;
state_27306 = G__27357;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19346__auto__ = function(state_27306){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19346__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19346__auto____1.call(this,state_27306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19346__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19346__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___27337,ch))
})();
var state__19459__auto__ = (function (){var statearr_27336 = f__19458__auto__.call(null);
(statearr_27336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___27337);

return statearr_27336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___27337,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27358_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27358_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27365 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27365){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27363 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27364 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27363,_STAR_print_newline_STAR_27364,base_path_27365){
return (function() { 
var G__27366__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27366 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27367__i = 0, G__27367__a = new Array(arguments.length -  0);
while (G__27367__i < G__27367__a.length) {G__27367__a[G__27367__i] = arguments[G__27367__i + 0]; ++G__27367__i;}
  args = new cljs.core.IndexedSeq(G__27367__a,0);
} 
return G__27366__delegate.call(this,args);};
G__27366.cljs$lang$maxFixedArity = 0;
G__27366.cljs$lang$applyTo = (function (arglist__27368){
var args = cljs.core.seq(arglist__27368);
return G__27366__delegate(args);
});
G__27366.cljs$core$IFn$_invoke$arity$variadic = G__27366__delegate;
return G__27366;
})()
;})(_STAR_print_fn_STAR_27363,_STAR_print_newline_STAR_27364,base_path_27365))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27364;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27363;
}}catch (e27362){if((e27362 instanceof Error)){
var e = e27362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27365], null));
} else {
var e = e27362;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27365))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27369){
var map__27376 = p__27369;
var map__27376__$1 = ((((!((map__27376 == null)))?((((map__27376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27376):map__27376);
var opts = map__27376__$1;
var build_id = cljs.core.get.call(null,map__27376__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27376,map__27376__$1,opts,build_id){
return (function (p__27378){
var vec__27379 = p__27378;
var map__27380 = cljs.core.nth.call(null,vec__27379,(0),null);
var map__27380__$1 = ((((!((map__27380 == null)))?((((map__27380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27380):map__27380);
var msg = map__27380__$1;
var msg_name = cljs.core.get.call(null,map__27380__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27379,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27379,map__27380,map__27380__$1,msg,msg_name,_,map__27376,map__27376__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27379,map__27380,map__27380__$1,msg,msg_name,_,map__27376,map__27376__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27376,map__27376__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27386){
var vec__27387 = p__27386;
var map__27388 = cljs.core.nth.call(null,vec__27387,(0),null);
var map__27388__$1 = ((((!((map__27388 == null)))?((((map__27388.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27388.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27388):map__27388);
var msg = map__27388__$1;
var msg_name = cljs.core.get.call(null,map__27388__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27387,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27390){
var map__27400 = p__27390;
var map__27400__$1 = ((((!((map__27400 == null)))?((((map__27400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27400):map__27400);
var on_compile_warning = cljs.core.get.call(null,map__27400__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27400__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27400,map__27400__$1,on_compile_warning,on_compile_fail){
return (function (p__27402){
var vec__27403 = p__27402;
var map__27404 = cljs.core.nth.call(null,vec__27403,(0),null);
var map__27404__$1 = ((((!((map__27404 == null)))?((((map__27404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27404):map__27404);
var msg = map__27404__$1;
var msg_name = cljs.core.get.call(null,map__27404__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27403,(1));
var pred__27406 = cljs.core._EQ_;
var expr__27407 = msg_name;
if(cljs.core.truth_(pred__27406.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27407))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27406.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27407))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27400,map__27400__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__,msg_hist,msg_names,msg){
return (function (state_27623){
var state_val_27624 = (state_27623[(1)]);
if((state_val_27624 === (7))){
var inst_27547 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27547)){
var statearr_27625_27671 = state_27623__$1;
(statearr_27625_27671[(1)] = (8));

} else {
var statearr_27626_27672 = state_27623__$1;
(statearr_27626_27672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (20))){
var inst_27617 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27627_27673 = state_27623__$1;
(statearr_27627_27673[(2)] = inst_27617);

(statearr_27627_27673[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (27))){
var inst_27613 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27628_27674 = state_27623__$1;
(statearr_27628_27674[(2)] = inst_27613);

(statearr_27628_27674[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (1))){
var inst_27540 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27540)){
var statearr_27629_27675 = state_27623__$1;
(statearr_27629_27675[(1)] = (2));

} else {
var statearr_27630_27676 = state_27623__$1;
(statearr_27630_27676[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (24))){
var inst_27615 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27631_27677 = state_27623__$1;
(statearr_27631_27677[(2)] = inst_27615);

(statearr_27631_27677[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (4))){
var inst_27621 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27623__$1,inst_27621);
} else {
if((state_val_27624 === (15))){
var inst_27619 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27632_27678 = state_27623__$1;
(statearr_27632_27678[(2)] = inst_27619);

(statearr_27632_27678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (21))){
var inst_27578 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27633_27679 = state_27623__$1;
(statearr_27633_27679[(2)] = inst_27578);

(statearr_27633_27679[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (31))){
var inst_27602 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27602)){
var statearr_27634_27680 = state_27623__$1;
(statearr_27634_27680[(1)] = (34));

} else {
var statearr_27635_27681 = state_27623__$1;
(statearr_27635_27681[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (32))){
var inst_27611 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27636_27682 = state_27623__$1;
(statearr_27636_27682[(2)] = inst_27611);

(statearr_27636_27682[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (33))){
var inst_27600 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27637_27683 = state_27623__$1;
(statearr_27637_27683[(2)] = inst_27600);

(statearr_27637_27683[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (13))){
var inst_27561 = figwheel.client.heads_up.clear.call(null);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(16),inst_27561);
} else {
if((state_val_27624 === (22))){
var inst_27582 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27583 = figwheel.client.heads_up.append_message.call(null,inst_27582);
var state_27623__$1 = state_27623;
var statearr_27638_27684 = state_27623__$1;
(statearr_27638_27684[(2)] = inst_27583);

(statearr_27638_27684[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (36))){
var inst_27609 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27639_27685 = state_27623__$1;
(statearr_27639_27685[(2)] = inst_27609);

(statearr_27639_27685[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (29))){
var inst_27593 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27640_27686 = state_27623__$1;
(statearr_27640_27686[(2)] = inst_27593);

(statearr_27640_27686[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (6))){
var inst_27542 = (state_27623[(7)]);
var state_27623__$1 = state_27623;
var statearr_27641_27687 = state_27623__$1;
(statearr_27641_27687[(2)] = inst_27542);

(statearr_27641_27687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (28))){
var inst_27589 = (state_27623[(2)]);
var inst_27590 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27591 = figwheel.client.heads_up.display_warning.call(null,inst_27590);
var state_27623__$1 = (function (){var statearr_27642 = state_27623;
(statearr_27642[(8)] = inst_27589);

return statearr_27642;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(29),inst_27591);
} else {
if((state_val_27624 === (25))){
var inst_27587 = figwheel.client.heads_up.clear.call(null);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(28),inst_27587);
} else {
if((state_val_27624 === (34))){
var inst_27604 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(37),inst_27604);
} else {
if((state_val_27624 === (17))){
var inst_27569 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27643_27688 = state_27623__$1;
(statearr_27643_27688[(2)] = inst_27569);

(statearr_27643_27688[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (3))){
var inst_27559 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27559)){
var statearr_27644_27689 = state_27623__$1;
(statearr_27644_27689[(1)] = (13));

} else {
var statearr_27645_27690 = state_27623__$1;
(statearr_27645_27690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (12))){
var inst_27555 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27646_27691 = state_27623__$1;
(statearr_27646_27691[(2)] = inst_27555);

(statearr_27646_27691[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (2))){
var inst_27542 = (state_27623[(7)]);
var inst_27542__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27623__$1 = (function (){var statearr_27647 = state_27623;
(statearr_27647[(7)] = inst_27542__$1);

return statearr_27647;
})();
if(cljs.core.truth_(inst_27542__$1)){
var statearr_27648_27692 = state_27623__$1;
(statearr_27648_27692[(1)] = (5));

} else {
var statearr_27649_27693 = state_27623__$1;
(statearr_27649_27693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (23))){
var inst_27585 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27585)){
var statearr_27650_27694 = state_27623__$1;
(statearr_27650_27694[(1)] = (25));

} else {
var statearr_27651_27695 = state_27623__$1;
(statearr_27651_27695[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (35))){
var state_27623__$1 = state_27623;
var statearr_27652_27696 = state_27623__$1;
(statearr_27652_27696[(2)] = null);

(statearr_27652_27696[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (19))){
var inst_27580 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27580)){
var statearr_27653_27697 = state_27623__$1;
(statearr_27653_27697[(1)] = (22));

} else {
var statearr_27654_27698 = state_27623__$1;
(statearr_27654_27698[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (11))){
var inst_27551 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27655_27699 = state_27623__$1;
(statearr_27655_27699[(2)] = inst_27551);

(statearr_27655_27699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (9))){
var inst_27553 = figwheel.client.heads_up.clear.call(null);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(12),inst_27553);
} else {
if((state_val_27624 === (5))){
var inst_27544 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27623__$1 = state_27623;
var statearr_27656_27700 = state_27623__$1;
(statearr_27656_27700[(2)] = inst_27544);

(statearr_27656_27700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (14))){
var inst_27571 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27571)){
var statearr_27657_27701 = state_27623__$1;
(statearr_27657_27701[(1)] = (18));

} else {
var statearr_27658_27702 = state_27623__$1;
(statearr_27658_27702[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (26))){
var inst_27595 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27623__$1 = state_27623;
if(cljs.core.truth_(inst_27595)){
var statearr_27659_27703 = state_27623__$1;
(statearr_27659_27703[(1)] = (30));

} else {
var statearr_27660_27704 = state_27623__$1;
(statearr_27660_27704[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (16))){
var inst_27563 = (state_27623[(2)]);
var inst_27564 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27565 = figwheel.client.format_messages.call(null,inst_27564);
var inst_27566 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27567 = figwheel.client.heads_up.display_error.call(null,inst_27565,inst_27566);
var state_27623__$1 = (function (){var statearr_27661 = state_27623;
(statearr_27661[(9)] = inst_27563);

return statearr_27661;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(17),inst_27567);
} else {
if((state_val_27624 === (30))){
var inst_27597 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27598 = figwheel.client.heads_up.display_warning.call(null,inst_27597);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(33),inst_27598);
} else {
if((state_val_27624 === (10))){
var inst_27557 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27662_27705 = state_27623__$1;
(statearr_27662_27705[(2)] = inst_27557);

(statearr_27662_27705[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (18))){
var inst_27573 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27574 = figwheel.client.format_messages.call(null,inst_27573);
var inst_27575 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27576 = figwheel.client.heads_up.display_error.call(null,inst_27574,inst_27575);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(21),inst_27576);
} else {
if((state_val_27624 === (37))){
var inst_27606 = (state_27623[(2)]);
var state_27623__$1 = state_27623;
var statearr_27663_27706 = state_27623__$1;
(statearr_27663_27706[(2)] = inst_27606);

(statearr_27663_27706[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27624 === (8))){
var inst_27549 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27623__$1 = state_27623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27623__$1,(11),inst_27549);
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
});})(c__19457__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19345__auto__,c__19457__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto____0 = (function (){
var statearr_27667 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27667[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto__);

(statearr_27667[(1)] = (1));

return statearr_27667;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto____1 = (function (state_27623){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_27623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e27668){if((e27668 instanceof Object)){
var ex__19349__auto__ = e27668;
var statearr_27669_27707 = state_27623;
(statearr_27669_27707[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27668;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27708 = state_27623;
state_27623 = G__27708;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto__ = function(state_27623){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto____1.call(this,state_27623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__,msg_hist,msg_names,msg))
})();
var state__19459__auto__ = (function (){var statearr_27670 = f__19458__auto__.call(null);
(statearr_27670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_27670;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__,msg_hist,msg_names,msg))
);

return c__19457__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19457__auto___27771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto___27771,ch){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto___27771,ch){
return (function (state_27754){
var state_val_27755 = (state_27754[(1)]);
if((state_val_27755 === (1))){
var state_27754__$1 = state_27754;
var statearr_27756_27772 = state_27754__$1;
(statearr_27756_27772[(2)] = null);

(statearr_27756_27772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (2))){
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27754__$1,(4),ch);
} else {
if((state_val_27755 === (3))){
var inst_27752 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27754__$1,inst_27752);
} else {
if((state_val_27755 === (4))){
var inst_27742 = (state_27754[(7)]);
var inst_27742__$1 = (state_27754[(2)]);
var state_27754__$1 = (function (){var statearr_27757 = state_27754;
(statearr_27757[(7)] = inst_27742__$1);

return statearr_27757;
})();
if(cljs.core.truth_(inst_27742__$1)){
var statearr_27758_27773 = state_27754__$1;
(statearr_27758_27773[(1)] = (5));

} else {
var statearr_27759_27774 = state_27754__$1;
(statearr_27759_27774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (5))){
var inst_27742 = (state_27754[(7)]);
var inst_27744 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27742);
var state_27754__$1 = state_27754;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27754__$1,(8),inst_27744);
} else {
if((state_val_27755 === (6))){
var state_27754__$1 = state_27754;
var statearr_27760_27775 = state_27754__$1;
(statearr_27760_27775[(2)] = null);

(statearr_27760_27775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (7))){
var inst_27750 = (state_27754[(2)]);
var state_27754__$1 = state_27754;
var statearr_27761_27776 = state_27754__$1;
(statearr_27761_27776[(2)] = inst_27750);

(statearr_27761_27776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27755 === (8))){
var inst_27746 = (state_27754[(2)]);
var state_27754__$1 = (function (){var statearr_27762 = state_27754;
(statearr_27762[(8)] = inst_27746);

return statearr_27762;
})();
var statearr_27763_27777 = state_27754__$1;
(statearr_27763_27777[(2)] = null);

(statearr_27763_27777[(1)] = (2));


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
});})(c__19457__auto___27771,ch))
;
return ((function (switch__19345__auto__,c__19457__auto___27771,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19346__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19346__auto____0 = (function (){
var statearr_27767 = [null,null,null,null,null,null,null,null,null];
(statearr_27767[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19346__auto__);

(statearr_27767[(1)] = (1));

return statearr_27767;
});
var figwheel$client$heads_up_plugin_$_state_machine__19346__auto____1 = (function (state_27754){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_27754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e27768){if((e27768 instanceof Object)){
var ex__19349__auto__ = e27768;
var statearr_27769_27778 = state_27754;
(statearr_27769_27778[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27754);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27779 = state_27754;
state_27754 = G__27779;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19346__auto__ = function(state_27754){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19346__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19346__auto____1.call(this,state_27754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19346__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19346__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto___27771,ch))
})();
var state__19459__auto__ = (function (){var statearr_27770 = f__19458__auto__.call(null);
(statearr_27770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto___27771);

return statearr_27770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto___27771,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19457__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19457__auto__){
return (function (){
var f__19458__auto__ = (function (){var switch__19345__auto__ = ((function (c__19457__auto__){
return (function (state_27800){
var state_val_27801 = (state_27800[(1)]);
if((state_val_27801 === (1))){
var inst_27795 = cljs.core.async.timeout.call(null,(3000));
var state_27800__$1 = state_27800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27800__$1,(2),inst_27795);
} else {
if((state_val_27801 === (2))){
var inst_27797 = (state_27800[(2)]);
var inst_27798 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27800__$1 = (function (){var statearr_27802 = state_27800;
(statearr_27802[(7)] = inst_27797);

return statearr_27802;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27800__$1,inst_27798);
} else {
return null;
}
}
});})(c__19457__auto__))
;
return ((function (switch__19345__auto__,c__19457__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19346__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19346__auto____0 = (function (){
var statearr_27806 = [null,null,null,null,null,null,null,null];
(statearr_27806[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19346__auto__);

(statearr_27806[(1)] = (1));

return statearr_27806;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19346__auto____1 = (function (state_27800){
while(true){
var ret_value__19347__auto__ = (function (){try{while(true){
var result__19348__auto__ = switch__19345__auto__.call(null,state_27800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19348__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19348__auto__;
}
break;
}
}catch (e27807){if((e27807 instanceof Object)){
var ex__19349__auto__ = e27807;
var statearr_27808_27810 = state_27800;
(statearr_27808_27810[(5)] = ex__19349__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19347__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27811 = state_27800;
state_27800 = G__27811;
continue;
} else {
return ret_value__19347__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19346__auto__ = function(state_27800){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19346__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19346__auto____1.call(this,state_27800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19346__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19346__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19346__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19346__auto__;
})()
;})(switch__19345__auto__,c__19457__auto__))
})();
var state__19459__auto__ = (function (){var statearr_27809 = f__19458__auto__.call(null);
(statearr_27809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19457__auto__);

return statearr_27809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19459__auto__);
});})(c__19457__auto__))
);

return c__19457__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27812){
var map__27819 = p__27812;
var map__27819__$1 = ((((!((map__27819 == null)))?((((map__27819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27819):map__27819);
var ed = map__27819__$1;
var formatted_exception = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27819__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27821_27825 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27822_27826 = null;
var count__27823_27827 = (0);
var i__27824_27828 = (0);
while(true){
if((i__27824_27828 < count__27823_27827)){
var msg_27829 = cljs.core._nth.call(null,chunk__27822_27826,i__27824_27828);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27829);

var G__27830 = seq__27821_27825;
var G__27831 = chunk__27822_27826;
var G__27832 = count__27823_27827;
var G__27833 = (i__27824_27828 + (1));
seq__27821_27825 = G__27830;
chunk__27822_27826 = G__27831;
count__27823_27827 = G__27832;
i__27824_27828 = G__27833;
continue;
} else {
var temp__4425__auto___27834 = cljs.core.seq.call(null,seq__27821_27825);
if(temp__4425__auto___27834){
var seq__27821_27835__$1 = temp__4425__auto___27834;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27821_27835__$1)){
var c__17720__auto___27836 = cljs.core.chunk_first.call(null,seq__27821_27835__$1);
var G__27837 = cljs.core.chunk_rest.call(null,seq__27821_27835__$1);
var G__27838 = c__17720__auto___27836;
var G__27839 = cljs.core.count.call(null,c__17720__auto___27836);
var G__27840 = (0);
seq__27821_27825 = G__27837;
chunk__27822_27826 = G__27838;
count__27823_27827 = G__27839;
i__27824_27828 = G__27840;
continue;
} else {
var msg_27841 = cljs.core.first.call(null,seq__27821_27835__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27841);

var G__27842 = cljs.core.next.call(null,seq__27821_27835__$1);
var G__27843 = null;
var G__27844 = (0);
var G__27845 = (0);
seq__27821_27825 = G__27842;
chunk__27822_27826 = G__27843;
count__27823_27827 = G__27844;
i__27824_27828 = G__27845;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27846){
var map__27849 = p__27846;
var map__27849__$1 = ((((!((map__27849 == null)))?((((map__27849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27849):map__27849);
var w = map__27849__$1;
var message = cljs.core.get.call(null,map__27849__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16905__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16905__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16905__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27857 = cljs.core.seq.call(null,plugins);
var chunk__27858 = null;
var count__27859 = (0);
var i__27860 = (0);
while(true){
if((i__27860 < count__27859)){
var vec__27861 = cljs.core._nth.call(null,chunk__27858,i__27860);
var k = cljs.core.nth.call(null,vec__27861,(0),null);
var plugin = cljs.core.nth.call(null,vec__27861,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27863 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27857,chunk__27858,count__27859,i__27860,pl_27863,vec__27861,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27863.call(null,msg_hist);
});})(seq__27857,chunk__27858,count__27859,i__27860,pl_27863,vec__27861,k,plugin))
);
} else {
}

var G__27864 = seq__27857;
var G__27865 = chunk__27858;
var G__27866 = count__27859;
var G__27867 = (i__27860 + (1));
seq__27857 = G__27864;
chunk__27858 = G__27865;
count__27859 = G__27866;
i__27860 = G__27867;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27857);
if(temp__4425__auto__){
var seq__27857__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27857__$1)){
var c__17720__auto__ = cljs.core.chunk_first.call(null,seq__27857__$1);
var G__27868 = cljs.core.chunk_rest.call(null,seq__27857__$1);
var G__27869 = c__17720__auto__;
var G__27870 = cljs.core.count.call(null,c__17720__auto__);
var G__27871 = (0);
seq__27857 = G__27868;
chunk__27858 = G__27869;
count__27859 = G__27870;
i__27860 = G__27871;
continue;
} else {
var vec__27862 = cljs.core.first.call(null,seq__27857__$1);
var k = cljs.core.nth.call(null,vec__27862,(0),null);
var plugin = cljs.core.nth.call(null,vec__27862,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27872 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27857,chunk__27858,count__27859,i__27860,pl_27872,vec__27862,k,plugin,seq__27857__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27872.call(null,msg_hist);
});})(seq__27857,chunk__27858,count__27859,i__27860,pl_27872,vec__27862,k,plugin,seq__27857__$1,temp__4425__auto__))
);
} else {
}

var G__27873 = cljs.core.next.call(null,seq__27857__$1);
var G__27874 = null;
var G__27875 = (0);
var G__27876 = (0);
seq__27857 = G__27873;
chunk__27858 = G__27874;
count__27859 = G__27875;
i__27860 = G__27876;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27877 = [];
var len__17976__auto___27880 = arguments.length;
var i__17977__auto___27881 = (0);
while(true){
if((i__17977__auto___27881 < len__17976__auto___27880)){
args27877.push((arguments[i__17977__auto___27881]));

var G__27882 = (i__17977__auto___27881 + (1));
i__17977__auto___27881 = G__27882;
continue;
} else {
}
break;
}

var G__27879 = args27877.length;
switch (G__27879) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27877.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17983__auto__ = [];
var len__17976__auto___27888 = arguments.length;
var i__17977__auto___27889 = (0);
while(true){
if((i__17977__auto___27889 < len__17976__auto___27888)){
args__17983__auto__.push((arguments[i__17977__auto___27889]));

var G__27890 = (i__17977__auto___27889 + (1));
i__17977__auto___27889 = G__27890;
continue;
} else {
}
break;
}

var argseq__17984__auto__ = ((((0) < args__17983__auto__.length))?(new cljs.core.IndexedSeq(args__17983__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17984__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27885){
var map__27886 = p__27885;
var map__27886__$1 = ((((!((map__27886 == null)))?((((map__27886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27886):map__27886);
var opts = map__27886__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27884){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27884));
});

//# sourceMappingURL=client.js.map?rel=1449412237566