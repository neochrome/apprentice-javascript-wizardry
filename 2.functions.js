// -------------------- declaring functions
function someFunc(){
	console.log('someFunc');
}
someFunc();


var sameSomeFunc = function(){
	console.log('sameSomeFunc');
};
sameSomeFunc();


var evalSomeFunc = new Function('console.log(\'evalSomeFunc\');');
evalSomeFunc();


// -------------------- arguments
var namedArgs = function(arg1, arg2){
	console.log('arg1 => %s, arg2 => %s', arg1, arg2);
};
namedArgs('first', 'second');
namedArgs('only first'); // <- args always optional


var anonArgs = function(){
	console.log('anonArgs:');
	console.log(arguments);
};
anonArgs();
anonArgs('arg1', 2, [1,2,3], {id:4});


// -------------------- scoping
var outer = function(){
	var outer_i = 0;

	var inner = function(inner_i){
		console.log('outer i: %d, inner i: %d', outer_i, inner_i);
	};

	inner(outer_i++);
};
outer();

// -------------------- pitfall & solution
var pitfall = function(){
	var arr = [];
	for(var i = 0; i < 3; i++){
		arr.push(function(){
			console.log('pitfall: %d', i);
		});
	}
	for(var j = 0; j < arr.length; j++){
		arr[j]();
	}
};
pitfall();
var solution = function(){
	var arr = [];
	for(var i = 0; i < 3; i++){
		arr.push(function(x){
			return function(){
				console.log('solution: %d', x);
			};
		}(i));
	}
	for(var j = 0; j < arr.length; j++){
		arr[j]();
	}
};
solution();


// --------------------- self executing
(function(){
	var protectedByScope = 'i am safe!';
	console.log(protectedByScope);
})();
console.log(protectedByScope);
