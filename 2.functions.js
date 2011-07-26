console.log('');


function someFunc(){
	console.log('someFunc');
}
someFunc();


var sameSomeFunc = function(){
	console.log('sameSomeFunc');
};
sameSomeFunc();


var withNamedArgs = function(arg1, arg2){
	console.log('arg1 => %s, arg2 => %s', arg1, arg2);
};
withNamedArgs('first', 'second');
withNamedArgs('only first'); // <- args always optional


var anonArgs = function(){
	console.log('anonArgs:');
	console.log(arguments);
};
anonArgs();
anonArgs('arg1', 2, [1,2,3], {id:4});


var outer = function(){
	var outer_i = 0;

	var inner = function(inner_i){
		console.log('outer i: %d, inner i: %d', outer_i, inner_i);
	};

	inner(outer_i++);
};
outer();


var pitfall = function(){

};
pitfall();


console.log('');
