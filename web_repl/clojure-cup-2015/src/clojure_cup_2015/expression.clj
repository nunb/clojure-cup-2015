(ns clojure-cup-2015.expression
  (:require [clojure.pprint :refer [pprint]]
    [clojure.string :as string]
            [clojure.tools.reader :as reader]
            [clojure.tools.reader.reader-types :as rt])
  )



(defn- try-read [rdr feature]
  {:pre [(#{:clj :cljs} feature)]}
  (when rdr
    (reader/read {:read-cond :allow :features #{feature} :eof ::EOF} rdr)))

(defn lined-read
  ([string] (lined-read string :clj))
  ([string feature]
   (let [rdr (rt/indexing-push-back-reader string)]
     (take-while #(not= ::EOF %) (repeatedly #(try-read rdr feature))))))

(defn find-form [forms pos]
  (let [cur-line (inc (:line pos))
        cur-col (:ch pos)]
    (loop [prev nil
           left forms]
      (when-let [f (first left)]
        (let [{:keys [line end-line column end-column]} (meta f)]
          (cond
            (and (symbol? f)
                 (= line cur-line)) f
            (and end-line line
                 (<= line cur-line)
                 (>= end-line cur-line)) f
            :else (recur f (rest left)))))

      )))

(defn prep-code [code meta]
  (if (or (not meta)
          (not (:start meta)))
    code
    (str (reduce str "" (repeat (:start meta 0) "\n"))
         code)))

(defn clear-scheme-booleans [code]
  (let [code-false   (clojure.string/replace code #"#f" "false")
     code-true   (clojure.string/replace code-false #"#t" "true")
     ]
    code-true
  ))

(defn handle [msg meta pos]
  (let [
        code (prep-code (clear-scheme-booleans msg) meta)
        forms (lined-read code)
        ;forms (if-not pos forms [(find-form forms pos)])

       forms (if-not pos forms (let [form (find-form forms pos)] (if (nil? form) [] [form])))

        ]
    forms))



