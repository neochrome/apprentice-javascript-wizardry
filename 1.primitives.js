console.log('');

// -------------------- array
var arr = [1,2,3];
console.log('an array:', arr);

// -------------------- object
var obj = { prop1: 1, prop2: 'two' };
console.log('an object:', obj);
console.log('prop1 => %d', obj['prop1']);


console.log('iterating properties of an object:');
for(var name in obj){
	console.log(name + ' => ' + obj[name]);
}

// -------------------- map & reduce
var mapped = [1,2,3].map(function(item){
	return item * 2;
});
console.log('[1,2,3] mapped as:', mapped);


var reduced = [1,2,3].reduce(function(acc, item){
	return acc + item;
});
console.log('[1,2,3] reduced with addition: %d', reduced);


// -------------------- null & undefined
var iAmNull = null, iAmUndefined;
console.log('i am null:', iAmNull);
console.log('and i am undefined:', iAmUndefined);


// -------------------- types
console.log('typeof');
console.log('string', '=>', typeof 'string');
console.log(123, '=>', typeof 123);
console.log([1,2,3], '=>', typeof [1,2,3]);
console.log({id:1}, '=>', typeof {id:1});
console.log(new Date(), '=>', typeof new Date());
console.log(function(){}, '=>', typeof function(){});
console.log(null, '=>', typeof null);
console.log(undefined, '=>', typeof undefined);
undefined = 'what are you talking about? i\'m not undefined!'; // <- please don't do this! :(
console.log(undefined, '=>', typeof undefined);


console.log('');
