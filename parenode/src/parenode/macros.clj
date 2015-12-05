(ns parenode.macros
  (:require [clojure.core.match :refer [match]]))

(defmacro scheme->cljs [exp]
  (match [exp]
         [a_symbol]  a_symbol
         [(['car alist] :seq)] `(first (scheme->cljs ~alist))
         [(['cdr alist] :seq)] `(rest (scheme->cljs  ~alist))
         [(['cons elt alist] :seq)] `(cons (scheme->cljs ~elt) (scheme->cljs ~alist))
         [(['lambda args body] :seq)] `(fn ~(into [] args)  ~(map
                                                         (fn [statement] `(scheme->cljs ~statement))
                                                         body))
         [(['define target binding] :seq)] `(def ~target (scheme->cljs ~binding)) 
         [(['quote an_exp] :seq)] `'~an_exp
         [([proc & args] :seq)] (cons `(scheme->cljs ~proc)  (map (fn [arg] `(scheme->cljs ~arg)) args))
         [([] :seq)] nil
         [:default] :error))
