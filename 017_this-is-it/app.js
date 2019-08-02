// 'use strict'; // commented strict otherwise the code won't work. WHY?

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

// UNDERSTANDING THIS

// 'this' is a keyword that refers to the Object invoking the method or function in which 'this' appears;

user.greet(); // points to the value of 'firstName' inside Object 'user'
user.fullName(); // same thing here

// The value of 'this' changes depending on the context on which it was called

// WHEN this IS GLOBAL

// When the JavaScript engine starts, it creates a Global Object.

let panther = 'Wakanda forever!'; // When we declare variables in the Global environment, that variable becomes part of the Global Object

let warCry = function() {
	console.log(this.panther);
};

warCry(); // Since 'warCry()' was called in the Global environment, and 'panther' is a variable attached to the Global Object 'this' points to the Global object

// When 'this' is called within an Object, it's value is the Object that called it, otherwise the value of 'this' is the Global object

user.whatsThis(); // As with the 'greet' method (above), here 'this' also points to the Object 'user'

console.log(this); // Here, 'this' points to the Global Object, which in the context of a browser, it's the Window Object

console.log('##############################');

// WHEN 'this' GETS CONFUSING

let sysAdmin = {
	firstName: 'Steven',
	lastName: 'Strange',
	fName: user.fullName // copies (doesn't execute) method in 'user' to 'fName'
};

sysAdmin.fName(); // logs 'Steven Strange'. WHY?

// Because the method 'fName' was invoked inside the Object 'sysAdmin'.

// It doesn't matter where the code in 'fName' was written (in this case inside 'user.fullName'). The Execution Context of 'this' became 'sysAdmin' when that object invoked 'fName'.

let tank = user.fullName; // copies the method to a Global Variable

tank(); // logs 'undefined undefined'. WHY??

// Because 'tank' is attached to the Global Object, and when we called it, it tried to grab the properties 'firstName' and 'lastName' FROM the Global Object. Since they are not defined there (only inside 'user' or 'sysAdmin') the call logged 'undefined undefined'.

var firstName = 'Hulk'; // if we define 'firstName' in the Global Object
tank(); // now it logs 'Hulk undefined'
var lastName = 'Smash'; // Same thing with 'lastName'
tank(); // now it logs 'Hulk Smash'

// WHEN 'this' GETS TRICKY

var agent = {
	firstName: 'Phill',
	lastName: 'Coulson',
	nickname: this.firstName // Notice how 'this' is called from a property, and not a method inside of a method.
};

console.log(`Agent's nickname is ${agent.nickname}.`); // Hulk. WHY??

// Remeber de definition of 'this':

// 'this' is a keyword that refers to the Object invoking the method or function in which 'this' appears;

// Because we are not invoking a method or function, 'this' is going to refer to the Global Object.

// KEY TAKEAWAYS

// 1. The Global Object is created whenever the JavaScript engine starts
// 2. The keyword 'this' refers to the object that invoked the funcion/ method
// 3. Otherwise... 'this' refers to the Global Object
