(defproject parenode "0.1.0-SNAPSHOT"
  :description "parenode : Scheme for JavaScript - Clojure Cup 2015 by TNTeam"
  :url "http://clojurecup.parenode.org"
  :license {:name "MIT"
            :url "http://opensource.org/licenses/BSD-3-Clause"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.clojure/core.match "0.3.0-alpha4"]]
  :plugins [[lein-cljsbuild "1.1.1"]]
  :cljsbuild {
              :builds [{:source-paths ["src"]
                        :compiler {:main parenode.core
                                   :output-to "out/parenode.js"
                                   :output-dir "out"
                                   :optimizations :none}}]}
  :profiles {:dev {:dependencies [[com.cemerick/piggieback "0.2.1"]
                                  [org.clojure/tools.nrepl "0.2.12"]]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})
