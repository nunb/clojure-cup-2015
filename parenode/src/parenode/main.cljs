(ns parenode.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.match :refer-macros [match]]
            [cljs.reader :as reader])
  (:require-macros [parenode.compiler :as compiler]))

(nodejs/enable-util-print!)

(defn scheme-literals->keywords
  [literals a-seq]
  (cond
    (some #{a-seq} literals) (keyword a-seq)
    :else  a-seq))

(def express (nodejs/require "express"))
(def app (express))

(def bodyParser (nodejs/require "body-parser"))
(def multer (nodejs/require "multer"))

(.use app (.json bodyParser))

(def upload (multer))





(.post app "/eval" (.array upload) (fn [req res next]
                                     (let [req-exp   (get  (js->clj   (.. req -body)) "exp")
                                           result (compiler/evaluate-string! req-exp)]
                                       (.send res (str result) ))))

(defn -main [& args]
  (let [server (.listen app
                        7000
                        (fn[]
                          (.log js/console "parenode web repl is up!")))]
    server))

(set! *main-cli-fn* -main)
