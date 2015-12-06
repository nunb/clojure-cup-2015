(ns parenode.core
  (:require [cljs.nodejs :as nodejs])
  (:require-macros [parenode.compiler :as compiler]))

(nodejs/enable-util-print!)
