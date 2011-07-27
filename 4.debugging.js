// --------------------- "around alias" or putting logging in there
var obj = { 
	method1: function(){ console.log('method1'); }, 
	method2: function(){ console.log('method2'); }
};

var around = function(obj, before, after){
	if(typeof before === 'undefined') { before = function(){}; }
	if(typeof after === 'undefined') { after = function(){}; }
	for(var name in obj){
		if(typeof obj[name] === 'function'){
			obj[name] = function(old, name){
				return function(){
					before.call(this, name, new Date(), arguments);
					old.apply(this, arguments);
					after.call(this, name, new Date(), arguments);
				};
			}.call(obj, obj[name], name);
		}
	}
};

around(
	obj, 
	function(name, when, args){
		console.log('%d: before %s, with args:', when, name, args);
	},
	function(name, when, args){
		console.log('%d: after %s, with args:', when, name, args);
	}
);

obj.method1(1,2,3);
obj.method2(4,5,6);
