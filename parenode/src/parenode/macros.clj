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

         [(['define-syntax syntax-name (['syntax-rules literals pattern-templates] :seq)] :seq)] `(define-syntax-macro ~syntax-name
                                                                                                    ~literals
                                                                                                    ~pattern-templates) 
         
         [(['begin & exprs] :seq)] (cons `do (scheme-body->cljs exprs))
         
         [(['quote an_exp] :seq)] `'~an_exp
         
         [([proc & args] :seq)] (cons `(scheme->cljs ~proc)  (scheme-body->cljs args))
         
         [([] :seq)] nil

         [:default] `(:error in ~exp)))

(defn ellipsis-seq
  [a_seq]
  (if (= '... (last a_seq)) (into '(& $$ellipsis$$)
                                  (pop (reverse a_seq)))
      a_seq))

(defn change-tpl-seq
  [ a_seq]
  ;; there must be only one ellipsis for the tpl to be good!!
  ;; if there are many of them, the will be matched against the same pattern!!
  (cond (seq? a_seq) (let [a_seq_modified (ellipsis-seq a_seq)]
                       `([~@a_seq_modified] :seq))

        :else a_seq))

(defn  remove-ellipsis
  [a-seq]
  (clojure.walk/postwalk #(if (and (seq? %)(= '... (last %)))
                            (into '((eval $$ellipsis$$))
                                  (pop (reverse %)))
                            %)  
                            a-seq))

(defn scheme-literals->keywords
  [literals a_seq]
  (cond
    (some #{a_seq} literals) (keyword a_seq)
    :else  a_seq))

(defn scheme-tpl->cljs
  [pattern literals]
  (->> pattern
       (clojure.walk/postwalk (comp (partial scheme-literals->keywords literals)
                                    change-tpl-seq))))

(defn define-syntax-match-row
  [literals pattern template]
  `([~(scheme-tpl->cljs pattern literals)] (scheme->cljs  ~(remove-ellipsis template)) ))

(defn define-syntax-matches
  [literals pattern-templates]
  (let [pattern-templates-pairs (partition 2 2 pattern-templates)]
    (mapcat
     (fn [[p t]]
       (let [inspected-pattern-in (pop p)
             inspected-pattern (if (= 1 (count inspected-pattern-in))
                                 (first inspected-pattern-in)
                                 inspected-pattern-in)]
         (define-syntax-match-row literals inspected-pattern t)))
     pattern-templates-pairs)))

(defmacro define-syntax-macro
  [macro-name
   literals
   pattern-templates]
  (let [input (gensym 'input)
        pattern-rows (define-syntax-matches literals  pattern-templates)]
    `(defmacro ~macro-name
       [~input]
       (let [input-lit-kws# (scheme-literals->keywords ~literals ~input) ]
         (match [input-lit-kws#]
                ~@pattern-rows)))))
