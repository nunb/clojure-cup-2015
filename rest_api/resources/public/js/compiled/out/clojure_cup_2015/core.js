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

element.innerHTML = body.call(null,new cljs.core.Keyword(null,"result","result",1415092211));

return document.getElementById(root_div).appendChild(element);
} else {
var element = document.createElement("div");
element.className = "alert alert-error row";

element.innerHTML = [cljs.core.str("Error "),cljs.core.str(status)].join('');

return document.getElementById(root_div).appendChild(element);
}
});
clojure_cup_2015.core.get_value = (function clojure_cup_2015$core$get_value(var_args){
var args12184 = [];
var len__5818__auto___12187 = arguments.length;
var i__5819__auto___12188 = (0);
while(true){
if((i__5819__auto___12188 < len__5818__auto___12187)){
args12184.push((arguments[i__5819__auto___12188]));

var G__12189 = (i__5819__auto___12188 + (1));
i__5819__auto___12188 = G__12189;
continue;
} else {
}
break;
}

var G__12186 = args12184.length;
switch (G__12186) {
case 1:
return clojure_cup_2015.core.get_value.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure_cup_2015.core.get_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12184.length)].join('')));

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
var c__12072__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12072__auto__,json_params){
return (function (){
var f__12073__auto__ = (function (){var switch__12051__auto__ = ((function (c__12072__auto__,json_params){
return (function (state_12216){
var state_val_12217 = (state_12216[(1)]);
if((state_val_12217 === (1))){
var inst_12208 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),new cljs.core.Keyword(null,"json-params","json-params",-1112693596)];
var inst_12209 = [false,json_params];
var inst_12210 = cljs.core.PersistentHashMap.fromArrays(inst_12208,inst_12209);
var inst_12211 = cljs_http.client.post.call(null,clojure_cup_2015.core.parenode_api,inst_12210);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12216__$1,(2),inst_12211);
} else {
if((state_val_12217 === (2))){
var inst_12213 = (state_12216[(2)]);
var inst_12214 = clojure_cup_2015.core.render_eval.call(null,inst_12213,clojure_cup_2015.core.parenode_repl_div);
var state_12216__$1 = state_12216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12216__$1,inst_12214);
} else {
return null;
}
}
});})(c__12072__auto__,json_params))
;
return ((function (switch__12051__auto__,c__12072__auto__,json_params){
return (function() {
var clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto__ = null;
var clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto____0 = (function (){
var statearr_12221 = [null,null,null,null,null,null,null];
(statearr_12221[(0)] = clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto__);

(statearr_12221[(1)] = (1));

return statearr_12221;
});
var clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto____1 = (function (state_12216){
while(true){
var ret_value__12053__auto__ = (function (){try{while(true){
var result__12054__auto__ = switch__12051__auto__.call(null,state_12216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12054__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12054__auto__;
}
break;
}
}catch (e12222){if((e12222 instanceof Object)){
var ex__12055__auto__ = e12222;
var statearr_12223_12225 = state_12216;
(statearr_12223_12225[(5)] = ex__12055__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12053__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12226 = state_12216;
state_12216 = G__12226;
continue;
} else {
return ret_value__12053__auto__;
}
break;
}
});
clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto__ = function(state_12216){
switch(arguments.length){
case 0:
return clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto____0.call(this);
case 1:
return clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto____1.call(this,state_12216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto__.cljs$core$IFn$_invoke$arity$0 = clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto____0;
clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto__.cljs$core$IFn$_invoke$arity$1 = clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto____1;
return clojure_cup_2015$core$convert_scheme_$_state_machine__12052__auto__;
})()
;})(switch__12051__auto__,c__12072__auto__,json_params))
})();
var state__12074__auto__ = (function (){var statearr_12224 = f__12073__auto__.call(null);
(statearr_12224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12072__auto__);

return statearr_12224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12074__auto__);
});})(c__12072__auto__,json_params))
);

return c__12072__auto__;
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

//# sourceMappingURL=core.js.map?rel=1449432430112