(ns clojure-cup-2015.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]])
  )


(enable-console-print!)
(.log js/console "============ WELCOME TO PARENODE CONSOLE =====================")

;; define your app data so that it doesn't get over-written on reload
(def validate-button (.getElementById js/document "validate"))
(def parenode-api "http://localhost:3000/parenode/convert")
(def codemirror-config {"value"           (.-innerHTML (.getElementById js/document "default-template")),
                        "mode"            "scheme",
                        "readOnly"        false,
                        "styleActiveLine" true,
                        "lineNumbers"     true,
                        })
(defonce app-state (atom {:text "Hello world!"}))


(defn convert-scheme [expression]
  (let [response (http/post parenode-api
                            {:with-credentials? false
                             :json-params       {:expression expression}})]
    (print response)
    response)
  "")

(defn render-script [script, root-div]
  let [element (d/string-to-dom (str "<script></script>"))]
  )

;(convert-scheme "(def varA \"test\"")

(defn create-editor [config]
  (js/CodeMirror (.getElementById js/document "scheme-codemirror") (clj->js config)))

; Content manipulation methods
(defn get-value
  ([editor] (.getValue editor))
  ([editor separator] (.getValue editor separator))

  )

; Cursor and selection methods
(defn get-selection
  [editor]
  (.getSelection editor))

(defn get-cursor
  [editor]
  (.getCursor editor))

(defn get-expression []
  (println (.-line (get-cursor editor)))
  (println (.-ch (get-cursor editor)))
  (println (get-selection editor))
  )

(defn parenode-reload-hook []
  (set! (.-onclick validate-button)
        ;#(println (.-line(get-cursor editor)))
        #(get-expression)
        ))


;; Initialization
(def editor (create-editor codemirror-config))
(parenode-reload-hook)
