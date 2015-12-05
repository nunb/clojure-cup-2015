(ns clojure-cup-2015.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def parenode-api "http://localhost:3000/parenode/convert")

(def parenode-repl-div "parenode-repl-response")

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn render-script [script, root-div]
  (let [
        the-script (.createElement js/document  "script")
        the-script-value script]
    ; if you need to load a js file
    ;(set! (.-type the-script) "text/javascript")
    ;(set! (.-src the-script) "url_file")
    (print root-div)
    (set! (.-innerHTML the-script) the-script-value)
    (.appendChild (.getElementById  js/document root-div) the-script)))

(defn convert-scheme [expression]
  (go (let [response (<! (http/post parenode-api {:with-credentials? false}
                                    :json-params {:expression expression}))]
        (render-script (:script (:body response)) parenode-repl-div)
        ; (prn (map :script (:json response)))
        )))


(convert-scheme "(def varA \"test\"")

(defn on-js-reload []
          ;; optionally touch your app-state to force rerendering depending on
          ;; your application
          ;; (swap! app-state update-in [:__figwheel_counter] inc)
           )
