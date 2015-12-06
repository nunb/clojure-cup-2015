(define a (+ 2 3))

(define b (lamda(x) (+ x 1)))

(letrec* ((a 1)
	  (b (lamda(x) (+ x 1)))
	  (+ a (b 3))))

(define-syntax a-macro
  (syntax-rules (plus moins)
		((a plus b) (+ a b)
		 (a moins b) (- a b))))

(cond
  (< 1 2) true
  (> 2 3) false
  else "hi!")

(begin
 (+ 1 2))
