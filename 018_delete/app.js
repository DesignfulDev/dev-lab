'use strict';

var user = {
	firstName: 'Mauricio',
	lastName: 'Lacerda',
	age: 38,
	birthday: new Date('1981-02-17T10:55:00.000-03:00'),
	fullName: function() {
		console.log(this.firstName + ' ' + this.lastName);
		return 0;
	},
	greet: function() {
		console.log(`Hello world, I'm ${this.firstName}!`);
	},
	whatsThis: function() {
		console.log(this);
	}
};

// REMOVING PROPERTIES delete

// We've seen how delete can be used to remove elements from an array, however, when we do so, it creates an sparse array - that is, an array with an empty 'undefined' slot

let animals = ['dog', 'cat', 'lizard', 'giraffe', 'horse'];

console.log(animals); // logs full array

delete animals[2]; // removes the element in position 2

console.log(animals); // position 2 now is empty and returns 'undefined'

// The main use of delete is to remove properties and methods from Objects

console.log(user); // logs the full object
console.log(user.birthday); // logs the birthday

delete user.birthday;

console.log(user); // 'birthday' is no longer a property of 'user'
console.log(user.birthday); // returns 'undefined'

delete user.whatsThis; // this works on functions and methods as well; just remember not to include () at the end of the method name

console.log(user); // the method is gone
console.log(user.whatsThis); // returns 'undefined'
