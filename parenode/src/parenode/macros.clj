(ns parenode.macros
  (:require [clojure.core.match :refer [match]]))

(defn scheme-body->cljs [body]
  (if (seq? body) 
    (map
     (fn [statement] `(scheme->cljs ~statement))
     body)
    body))


(defmacro scheme->cljs [exp]

  (match [exp]
         [(false :<< seq?)] exp
         
         [(['car alist] :seq)] `(first (scheme->cljs ~alist))
         
         [(['cdr alist] :seq)] `(rest (scheme->cljs  ~alist))

         [(['cons elt alist] :seq)] `(cons (scheme->cljs ~elt) (scheme->cljs ~alist))
         
         [(['lambda args body] :seq)] `(fn ~(into [] args) ~(scheme-body->cljs body))

         [(['letrec* bindings body] :seq)] `(let ~(into []
                                                    (mapcat
                                                     (fn [[target a_binding]]
                                                       [target `(scheme->cljs ~a_binding)])
                                                     bindings))
                                              ~(scheme-body->cljs body))
         
         [(['define target a_binding] :seq)] `(def ~target (scheme->cljs ~a_binding)) 

         [(['cond & conditions] :seq)]  (cons `cond
                                              (mapcat
                                                (fn [[cnd op]]
                                                  (if (= cnd 'else)
                                                    [:else `(scheme->cljs ~op)]
                                                    `[(scheme->cljs ~cnd) (scheme->cljs ~op)]))
                                                conditions))
         
         [(['begin & exprs] :seq)] (cons `do (scheme-body->cljs exprs))
         
         [(['quote an_exp] :seq)] `'~an_exp
         
         [([proc & args] :seq)] (cons `(scheme->cljs ~proc)  (scheme-body->cljs args))
         
         [([] :seq)] nil

         [:default] `(:error in ~exp)))

(defn change-tpl-seq
  [literals a_seq]
  ;; there must be only one ellipsis for the tpl to be good!!
  ;; if there are many of them, the will be matched against the same pattern!!
  (cond (seq? a_seq) (let [a_seq_modified (if (= '... (last a_seq)) (into '(& $$ellipsis$$)
                                                                        (pop (reverse a_seq)))
                                              a_seq)]
                       `([~@a_seq_modified] :seq))
        (some #{a_seq} literals) (keyword a_seq) 
        :else a_seq))

(defn scheme-tpl->cljs
  [pattern literals]
  (->> pattern
       (clojure.walk/postwalk (partial change-tpl-seq literals))
       ))


