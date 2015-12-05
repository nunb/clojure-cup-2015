(ns clojure-cup-2015.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(def parenode-api "http://localhost:3000/parenode/convert")

(enable-console-print!)

(println "Edits to this text should show up in your developer console.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn convert-scheme [expression]
  (let [response (http/post parenode-api
                            {:with-credentials? false
                             :json-params {:expression expression}})]


    (let [script (response :status)] )
    (print response)
    response)
    "")

(defn render-script [script, root-div]
  (let [element (d/string-to-dom (str "<script></script>")
  )

(convert-scheme "(def varA \"test\"")

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
