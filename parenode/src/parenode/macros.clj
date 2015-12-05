(ns parenode.macros
  (:require [clojure.core.match :refer [match]]))



(defmacro scheme->cljs [exp]
  (match [exp]
         [(['car alist] :seq)] `(first (scheme->cljs ~alist))
         [(['cdr alist] :seq)] `(rest (scheme->cljs  ~alist))
         [(['cons elt alist] :seq)] `(cons (scheme->cljs ~elt) (scheme->cljs ~alist))
         [(['lambda args body] :seq)] `(fn ~(into [] args)  ~(map
                                                         (fn [statement] `(scheme->cljs ~statement))
                                                         body))
         [(['define target binding] :seq)] `(def ~target (scheme->cljs ~binding)) 
         [(['if cond do_true do_false] :seq)] `(if (scheme->cljs @cond) (scheme->cljs ~do_true) (scheme->cljs ~do_false))
         [(['quote an_exp] :seq)] `'~an_exp
         [([proc & args] :seq)] (cons `(scheme->cljs ~proc)  (map (fn [arg] `(scheme->cljs ~arg)) args))
         [a_symbol]  a_symbol
         [:default] :error))
