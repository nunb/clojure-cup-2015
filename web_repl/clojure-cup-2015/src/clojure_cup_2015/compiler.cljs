(ns clojure-cup-2015.compiler
  (:require [cljs.core.match :refer-macros [match]]
            [cljs.reader :as reader])
  (:require-macros [clojure-cup-2015.macros :as compiler-macros]))



(defn scheme-literals->keywords
  [literals a-seq]
  (cond
    (some #{a-seq} literals) (keyword a-seq)
    :else  a-seq))

