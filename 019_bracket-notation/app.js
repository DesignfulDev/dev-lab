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

// ACCESSING PROPERTIES WITH BRACKET NOTATION []

// This can be done by using a string literal that matches the name of the property.

console.log(user['lastName']); // logs 'Lacerda'

// To invoke a method, we use the name of the method as the string literal and put the (parens) after the [brackets] to execute the function.

user['fullName'](); // logs 'Mauricio Lacerda'

console.log(user['greet']); // Otherwise we return the function itself, which can still be useful in some situations (ex: to pass it as an argument to another function).

// WHY THIS IS POWERFUL?

// Because now we can access properties and methods within an object using VARIABLES or EXPRESSIONS that evaluate to a string literal.

console.log(user['birth' + 'day']); // logs 'user.birthday' property

let propName; // as a variable, you can reuse it to access different properties and methods at different times

propName = 'age';
console.log(user[propName]); // logs 38

propName = 'greet';
user[propName](); // calls user.greet()

// By using expressions to access properties in objects, we can create powerful constructs in our code (ex: we can use loops, if statements, functions, or any structure that evaluates to a string literal)

let customer = {
	address0: 'Ty Smith',
	address1: '150 South Main',
	address2: 'Somewhere, MT 00034'
};

let addr = '';

for (let i = 0; i < 3; i++) {
	console.log(customer['address' + i] + '\n'); // This will print the customer's full address nicely formatted to the console
}
