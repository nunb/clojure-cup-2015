(ns clojure-cup-2015.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require-macros [clojure-cup-2015.macros :as cmacros]) 
  (:require [cljs-http.client :as http]
            [cljs.core.match :refer-macros [match]]
            [cljs.core.async :refer [<!]]
            [clojure-cup-2015.expression :as expr]))

(defn scheme-literals->keywords
  [literals a-seq]
  (cond
    (some #{a-seq} literals) (keyword a-seq)
    :else  a-seq))

(enable-console-print!)
(.log js/console "============ WELCOME TO PARENODE CONSOLE =====================")

;; define your app data so that it doesn't get over-written on reload
(def validate-button (.getElementById js/document "validate"))
(def parenode-api "http://localhost:3000/parenode/convert")
(def parenode-repl-div "parenode-repl-response")

(def codemirror-config {"value"           (.-innerHTML (.getElementById js/document "default-template")),
                        "mode"            "scheme",
                        "readOnly"        false,
                        "styleActiveLine" true,
                        "lineNumbers"     true,
                        })

(defn create-editor [config]
  (js/CodeMirror (.getElementById js/document "scheme-codemirror") (clj->js config)))

(def editor (create-editor codemirror-config))

(defn scroll-div-to-bottom [div-id]
      (let [element (.getElementById js/document div-id)]
           (set! (.-scrollTop element) (.-scrollHeight element))
           )

      )

(defn render-eval [response root-div]
        (let [element (.createElement js/document  "div")]
             (set! (.-className element) "alert alert-info row")
          (set! (.-innerHTML element) response)
          (.appendChild (.getElementById  js/document root-div) element)))





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

(defn render-script [script, root-div]
  (let [
        the-script (.createElement js/document  "script")
        the-script-value script]
    (set! (.-innerHTML the-script) the-script-value)
    (.appendChild (.getElementById  js/document root-div) the-script)))

(defn convert-scheme [expression]
  (print (first expression))
  ; (go (let [response (<! (http/post parenode-api {:with-credentials? false} :json-params {:expression expression}))](render-eval response parenode-repl-div)))
  (let [exp (first expression)
        response (cmacros/scheme->clj  exp)
        ]
    (render-eval response parenode-repl-div)))

(defn get-expression []
      (let [
            selection (get-selection editor)
            pos (if (empty? selection)
                  {:line  (.-line (get-cursor editor)) :ch (.-ch (get-cursor editor)) }
                  nil)
            meta nil
            code (if (empty? selection) (get-value editor) selection)
            response  (expr/handle code meta pos)
            ]
        (if (= (response :syntax) "ok")
          (convert-scheme (response :forms))
          (print (response :forms))
          ))
  )

(defn parenode-reload-hook []
  (set! (.-onclick validate-button)
        #(get-expression)
        ))





;; Initialization
(parenode-reload-hook)



