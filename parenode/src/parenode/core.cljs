(ns parenode.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.match :refer-macros [match]])
  (:require-macros [parenode.compiler :as compiler]))

(nodejs/enable-util-print!)

