# clojure-cup-2015
TNTEAM's entry for Clojure Cup 2015

Parenode - A Scheme Using Clojure Macros

This year TNTeam is going to build a scheme implementation using the power of Clojure Macros. We are going to contribute to the ever-growing fragmentation of the sweet minimalist  r5rs Scheme !

We are going to take great advantage from Clojure being a Lisp in order to analyze  Scheme s-expressions (using core.match) - almost for "free", using macros in order to turn Scheme into Clojure Code for Evaluation.

We even managed to devise (an experimental) macro system in the vein
of Scheme's define-syntax (I never got those ellipsis anyway). At the
end of the day, we've demonstrated how Lisps are great for creating
new languages! But to be able to use the syntax, you unfortunately
have to be connected to a Clojure REPL.

For Clojure Cup 2015, we'll host an interactive scheme evaluation environment on the browser, using Codemirror (http://codemirror.net/mode/scheme/index.html) for Syntax coloring.We'll also try to write some paredit -like code to be able to delimit expressions (containing point, top level, etc...) so the user can easily choose what to evaluate.
