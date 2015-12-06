(ns parenode.core
  (:require [parenode.compiler :as compiler]
            [compojure.core :refer :all]
            
            [compojure.route :as route]
            [compojure.handler :as handler]
            [ring.middleware.resource :refer :all]
            [ring.middleware.json :as middleware]
            )
  (:use ring.adapter.jetty)
  (:gen-class))


(defroutes main-routes
  (POST "/"
        [:as req] (println (get req :body)))
  (route/resources "/resources")
  (route/not-found "Page not found"))


(def app
  (-> (handler/site main-routes)
      (middleware/wrap-json-body)
      (wrap-resource  "public")))



(defn -main[]
 (let [_ (.addShutdownHook (Runtime/getRuntime)
                           (Thread. (fn []
                                      (println (str "Parenode Web Repl has gone down !")))))
       server (run-jetty app {:port 8080 :join? false})]

   server))




