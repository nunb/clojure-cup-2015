(defproject parenode "0.1.0-SNAPSHOT"
  :description "parenode : Scheme On Clojure - Clojure Cup 2015 by TNTeam"
  :url "http://clojurecup.parenode.org"
  :license {:name "MIT"
            :url "http://opensource.org/licenses/BSD-3-Clause"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/core.match "0.3.0-alpha4"]
                 [ring/ring-core "1.4.0"]
                 [ring/ring-jetty-adapter "1.4.0"]
                 [ring/ring-json "0.4.0"] 
                 [compojure "1.4.0"]]
  :profiles {:uberjar {:aot :all}}
  :main parenode.core)
