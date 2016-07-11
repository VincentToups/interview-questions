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
	