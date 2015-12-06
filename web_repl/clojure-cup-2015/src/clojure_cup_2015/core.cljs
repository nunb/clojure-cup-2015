(ns clojure-cup-2015.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [clojure-cup-2015.expression :as expr])
  )


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
      ; (println (.-line (get-cursor editor)))
      ;(println (.-ch (get-cursor editor)))
      ; (println (get-selection editor))
      (let [
            code (get-value editor)
            ;meta {:start (.-line (get-cursor editor)) :end (.-ch (get-cursor editor))}
            meta { :start (.-line (.getCursor editor "from"))  :end (.-line (.getCursor editor "to"))   }
            pos {:line  (.-line (get-cursor editor)) :ch (.-ch (get-cursor editor)) }
            response  (expr/handle code meta pos)
            ]
        ; (expr/handle code meta pos)
        (= (response :syntax) "ok" (response :forms) (print (response :forms)))
        (print meta pos )
        (print (response :syntax))
        expressions)
  )

(defn parenode-reload-hook []
  (set! (.-onclick validate-button)
        ;#(println (.-line(get-cursor editor)))
        #(get-expression)
        ))


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
(print (expr/handle "
; See if the input starts with a given symbol.\n(define (match-symbol input pattern)\n  (cond ((null? (remain input)) #f)\n        ((eqv? (car (remain input)) pattern) (r-cdr input))\n        (else #f)))\n; Allow the input to start with one of a list of patterns.\n(define (match-or input pattern)\n  (cond ((null? pattern) #f)\n        ((match-pattern input (car pattern)))\n        (else (match-or input (cdr pattern)))))

" {:start 0 :end 4} {:line 0 :ch 0}))
;; Initialization
(def editor (create-editor codemirror-config))
(parenode-reload-hook)



