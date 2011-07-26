console.log('');


// equvivalent: var AType = function(){...}
function Person(name){			// <- constructor
	this.name = name;
	this.Praise = function(){ // <- object method
		console.log('%s rulez!', this.name);
	};
}

var calvin = new Person('Calvin'),
		hobbes = new Person('Hobbes');
console.log(calvin)
console.log(hobbes);

calvin.Praise();
hobbes.Praise();


// overriding existing method on object
calvin.Praise = function(){
	console.log('%s rulez more!', this.name);
};
calvin.Praise();

// adding method to object
hobbes.Faint = function(){
	console.log('%s faints.', this.name);
};
hobbes.Faint();


console.log('');
