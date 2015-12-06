(ns rest-api.core
  (:require [rest-api.compiler :as compiler])
  (:use compojure.core)
  (:use org.httpkit.server)
  (:require [cheshire.core :refer :all])
  (:require [ring.middleware.json :as middleware]
            [ring.middleware.resource :as mid-resource])
  (:require [compojure.handler :as handler]
            [compojure.route :as route])

  (:gen-class))

(def ip "0.0.0.0")
(def port "9000")

(defroutes app-routes
           (GET "/" []
                (str "Welcome to Parenode"))

           (POST "/eval"
                 [:as req]
                 (generate-string  {:result (let [exprs (get-in req [:body :exp] )]
                                              (last  (map
                                                      compiler/eval-scheme
                                                      exprs)))})))


(def app (->(handler/site app-routes)
        (mid-resource/wrap-resource "public")
          (middleware/wrap-json-body)))

(defn -main []
  (let [_ (.addShutdownHook (Runtime/getRuntime)
                            (Thread. (fn []
                                     (str "Parenode Server Has Gone Down !"))))
        fn-stop-server (run-server app
                                   {:ip   ip
                                    :port (Integer/parseInt port)})]

      (str "Parenode Server Started - Listening on " ip ":" port )
    fn-stop-server)) ;this function, returned by main, will be used to stop the server.
