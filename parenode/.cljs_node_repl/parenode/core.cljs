(ns parenode.core
  (:require [cljs.nodejs :as nodejs])
  (:require [cljs.core.match :refer-macros [match]]))

(nodejs/enable-util-print!)

(defn -main [& args])
