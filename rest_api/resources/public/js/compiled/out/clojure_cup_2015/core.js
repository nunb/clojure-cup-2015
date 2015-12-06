// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure_cup_2015.core');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.match');
goog.require('cljs.core.async');
goog.require('clojure_cup_2015.expression');
goog.require('cljs.reader');
clojure_cup_2015.core.scheme_literals__GT_keywords = (function clojure_cup_2015$core$scheme_literals__GT_keywords(literals,a_seq){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([a_seq], true),literals))){
return cljs.core.keyword.call(null,a_seq);
} else {
return a_seq;

}
});
cljs.core.enable_console_print_BANG_.call(null);
console.log("============ WELCOME TO PARENODE CONSOLE =====================");
clojure_cup_2015.core.validate_button = document.getElementById("validate");
clojure_cup_2015.core.parenode_api = "http://clojurecup.parenode.org:9000/eval";
clojure_cup_2015.core.parenode_repl_div = "parenode-repl-response";
clojure_cup_2015.core.codemirror_config = new cljs.core.PersistentArrayMap(null, 5, ["value",document.getElementById("default-template").value,"mode","scheme","readOnly",false,"styleActiveLine",true,"lineNumbers",true], null);
clojure_cup_2015.core.create_editor = (function clojure_cup_2015$core$create_editor(config){
return CodeMirror(document.getElementById("scheme-codemirror"),cljs.core.clj__GT_js.call(null,config));
});
clojure_cup_2015.core.editor = clojure_cup_2015.core.create_editor.call(null,clojure_cup_2015.core.codemirror_config);
clojure_cup_2015.core.scroll_div_to_bottom = (function clojure_cup_2015$core$scroll_div_to_bottom(div_id){
var element = document.getElementById(div_id);
return element.scrollTop = element.scrollHeight;
});
clojure_cup_2015.core.render_eval = (function clojure_cup_2015$core$render_eval(response,root_div){
var status = response.call(null,new cljs.core.Keyword(null,"status","status",-1997798413));
var body = response.call(null,new cljs.core.Keyword(null,"body","body",-2049205669));
if(cljs.core._EQ_.call(null,status,(200))){
var element = document.createElement("div");
element.className = "alert alert-info row";

element.innerHTML = body;

return document.getElementById(root_div).appendChild(element);
} else {
var element = document.createElement("div");
element.className = "alert alert-danger row";

element.innerHTML = [cljs.core.str("Error "),cljs.core.str(status),cljs.core.str(":  "),cljs.core.str(body)].join('');

return document.getElementById(root_div).appendChild(element);
}
});
clojure_cup_2015.core.get_value = (function clojure_cup_2015$core$get_value(var_args){
var args17059 = [];
var len__5818__auto___17062 = arguments.length;
var i__5819__auto___17063 = (0);
while(true){
if((i__5819__auto___17063 < len__5818__auto___17062)){
args17059.push((arguments[i__5819__auto___17063]));

var G__17064 = (i__5819__auto___17063 + (1));
i__5819__auto___17063 = G__17064;
continue;
} else {
}
break;
}

var G__17061 = args17059.length;
switch (G__17061) {
case 1:
return clojure_cup_2015.core.get_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_cup_2015.core.get_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17059.length)].join('')));

}
});

clojure_cup_2015.core.get_value.cljs$core$IFn$_invoke$arity$1 = (function (editor){
return editor.getValue();
});

clojure_cup_2015.core.get_value.cljs$core$IFn$_invoke$arity$2 = (function (editor,separator){
return editor.getValue(separator);
});

clojure_cup_2015.core.get_value.cljs$lang$maxFixedArity = 2;
clojure_cup_2015.core.get_selection = (function clojure_cup_2015$core$get_selection(editor){
return editor.getSelection();
});
clojure_cup_2015.core.get_cursor = (function clojure_cup_2015$core$get_cursor(editor){
return editor.getCursor();
});
clojure_cup_2015.core.render_script = (function clojure_cup_2015$core$render_script(script,root_div){
var the_script = document.createElement("script");
var the_script_value = script;
the_script.innerHTML = the_script_value;

return document.getElementById(root_div).appendChild(the_script);
});
clojure_cup_2015.core.convert_scheme = (function clojure_cup_2015$core$convert_scheme(expression){
cljs.core.print.call(null,cljs.core.first.call(null,expression));

var json_params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exp","exp",-261706262),cljs.core.mapv.call(null,cljs.core.str,expression)], null);
var c__12288__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12288__auto__,json_params){
return (function (){
var f__12289__auto__ = (function (){var switch__12223__auto__ = ((function (c__12288__auto__,json_params){
return (function (state_17091){
var state_val_17092 = (state_17091[(1)]);
if((state_val_17092 === (1))){
var inst_17083 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_17084 = [false,json_params];
var inst_17085 = cljs.core.PersistentHashMap.fromArrays(inst_17083,inst_17084);
var inst_17086 = cljs_http.client.post.call(null,clojure_cup_2015.core.parenode_api,inst_17085);
var state_17091__$1 = state_17091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17091__$1,(2),inst_17086);
} else {
if((state_val_17092 === (2))){
var inst_17088 = (state_17091[(2)]);
var inst_17089 = clojure_cup_2015.core.render_eval.call(null,inst_17088,clojure_cup_2015.core.parenode_repl_div);
var state_17091__$1 = state_17091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17091__$1,inst_17089);
} else {
return null;
}
}
});})(c__12288__auto__,json_params))
;
return ((function (switch__12223__auto__,c__12288__auto__,json_params){
return (function() {
var clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto__ = null;
var clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto____0 = (function (){
var statearr_17096 = [null,null,null,null,null,null,null];
(statearr_17096[(0)] = clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto__);

(statearr_17096[(1)] = (1));

return statearr_17096;
});
var clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto____1 = (function (state_17091){
while(true){
var ret_value__12225__auto__ = (function (){try{while(true){
var result__12226__auto__ = switch__12223__auto__.call(null,state_17091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12226__auto__;
}
break;
}
}catch (e17097){if((e17097 instanceof Object)){
var ex__12227__auto__ = e17097;
var statearr_17098_17100 = state_17091;
(statearr_17098_17100[(5)] = ex__12227__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12225__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17101 = state_17091;
state_17091 = G__17101;
continue;
} else {
return ret_value__12225__auto__;
}
break;
}
});
clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto__ = function(state_17091){
switch(arguments.length){
case 0:
return clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto____0.call(this);
case 1:
return clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto____1.call(this,state_17091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$0 = clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto____0;
clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto__.cljs$core$IFn$_invoke$arity$1 = clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto____1;
return clojure_cup_2015$core$convert_scheme_$_state_machine__12224__auto__;
})()
;})(switch__12223__auto__,c__12288__auto__,json_params))
})();
var state__12290__auto__ = (function (){var statearr_17099 = f__12289__auto__.call(null);
(statearr_17099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12288__auto__);

return statearr_17099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12290__auto__);
});})(c__12288__auto__,json_params))
);

return c__12288__auto__;
});
clojure_cup_2015.core.get_expression = (function clojure_cup_2015$core$get_expression(){
var selection = clojure_cup_2015.core.get_selection.call(null,clojure_cup_2015.core.editor);
var pos = ((cljs.core.empty_QMARK_.call(null,selection))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),clojure_cup_2015.core.get_cursor.call(null,clojure_cup_2015.core.editor).line,new cljs.core.Keyword(null,"ch","ch",-554717905),clojure_cup_2015.core.get_cursor.call(null,clojure_cup_2015.core.editor).ch], null):null);
var meta = null;
var code = ((cljs.core.empty_QMARK_.call(null,selection))?clojure_cup_2015.core.get_value.call(null,clojure_cup_2015.core.editor):selection);
var response = clojure_cup_2015.expression.handle.call(null,code,meta,pos);
if(cljs.core._EQ_.call(null,response.call(null,new cljs.core.Keyword(null,"syntax","syntax",-1637761676)),"ok")){
return clojure_cup_2015.core.convert_scheme.call(null,response.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350)));
} else {
return cljs.core.print.call(null,response.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350)));
}
});
clojure_cup_2015.core.parenode_reload_hook = (function clojure_cup_2015$core$parenode_reload_hook(){
return clojure_cup_2015.core.validate_button.onclick = (function (){
return clojure_cup_2015.core.get_expression.call(null);
});
});
clojure_cup_2015.core.parenode_reload_hook.call(null);

//# sourceMappingURL=core.js.map?rel=1449439848259