(defproject rest_api "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [compojure "1.4.0"]                        ; web framework routing and ring
                 [javax.servlet/servlet-api "2.5"]
                 [ring "1.4.0"]
                 [ring/ring-json "0.4.0"]
                 [http-kit "2.1.19"]
                 [cheshire "5.3.1"]
                 [org.clojure/core.match "0.3.0-alpha4"]]




  :jvm-opts ["-Xms256m" "-Xmx2g" "-server" "-d64" "-XX:+UseParallelGC" "-XX:ParallelGCThreads=4"]
  :main rest-api.core
  :aot :all

  :ring {:handler rest-api.core/app}
  :plugins [[lein-ring "0.9.7"]]


  :profiles {:dev {:dependencies [[javax.servlet/servlet-api "2.5"]
                                  [ring-mock "0.1.5"]]}}

  )
