Q1
--

Suppose we have the following piece of code.

    document.addEventListener('DOMContentLoaded',function(){
		main(3);
	});
	
	console.log("Hello World");
	function main(n){
		console.log("Hello Inside Main",n);
		setTimeout(function(){
			f(n);
		},0);	
		console.log("After timeout.");
	}
	console.log("After main");
	
	function f(n){
		console.log("Inside f!",n);
		if(n>0){
			main(n-1);
		} else {
			g();
		}
	}
	
	function g(){
		console.log("Done!");
	}
	
Stored in a file `./q1.js`
	
What will the console output be if we load this in the following HTML page?

	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="utf-8">
			<title>Hello World</title>
			<script src="./q1.js"></script>
		</head>
		<body>
		</body>
	</html>

Q2
--

One of the most confusing aspects of Javascript is the behavior of the
`this` variable.

Describe how Javascript decides what the value of `this` in different
contexts.

Bonus!
------

What is printed to the console by this expression:

    var a = {value:10}
	var b = {value:11}
	
	function f(){
		console.log(this);
	}
	
	f()
	f.bind(a)();
	f.bind(a).call(b);
	
Q3
--

What is wrong with this picture?

    var x = document.querySelector("#some-existing-text-input").value;
    var i = parseInt(x.trim());
	// Do something with i
	
Hint: you can assume that `x` contains only digits and there is still
a problem.

Q4
--

JQuery enjoyed a long period of popularity. Why was that so and what
do you think accounts for its slow fall from grace? 


