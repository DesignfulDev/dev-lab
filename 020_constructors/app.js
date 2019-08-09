// 'use strict'; // commented out for TypeError when logging 'user2'

// For more details on Constructors refer to:
// https://javascript.info/constructor-new
// https://www.youtube.com/playlist?list=PLTo9PCskHpbFc08fi-4TNIZ8qG0pO3Ph7

// USING CONSTRUCTORS

// FIVE IMPORTANT CONCEPTS
// 1) Invoking a function with the keyword 'new' determines whether or not that function is a Constructor
// 2) The Constructor instantiates (i.e. creates an instance of) a new object which is bound to 'this'
// 3) The Constructor is invoked with the value of 'this' equal to the newly instantiated object
// 4) The Constructor's own 'prototype' property determines the prototype of the new objects it instantiates
// 5) The Constructor 'returns' the object it instantiates

// DEFINITION: Contructor is a function that instantiates an object, then returns it.

// Defining a Constructor function is syntactically identical to defining a regular function, except that, by convention, the Constructor should take a capital first letter on its identifier.

// CONSTRUCTOR VS. REGULAR FUNCTIONS: the 'new' keyword

// It is only when calling the Constructor function with keyword 'new' that things will behave differently from regular functions. When a Constructor is called with 'new', three steps happen:

// 1*) An empty object is created and assigned to 'this';

// 2**) The function body executes, usually to modify 'this', adding properties and methods to it;

// 3*) The value of 'this' is returned.

// * Theses steps happen implicitly. More on that later.
// ** This is not syntactically necessary, although it's kinda pointless to define a Constructor that does not return an object.

function User(firstName, lastName, age) {
	// this = {}; (implicitly)
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.magicNumber = 42;
	this.sayHi = function() {
		console.log('Hi there!');
	};
	// return this; (implicitly)
}

// After the Constructor is defined, use the keyword 'new' to tell the JavaScript engine you are invoking the function AS a Constructor.

let user1 = new User('Tony', 'Stark', 51);

console.log(user1); // logs the instantiated object
user1.sayHi();
console.log(user1.magicNumber); // 42

let user2 = User('Bruce', 'Banner', 48); // If 'new' is omitted, the function will be executed as a regular function.

// This means steps 1 and 3 will never run, and no object will be instanciated and assigned (or bound) to 'this', nor will it be returned.

console.log(user2); // logs 'undefined' (or throws TypeError in 'use strict')

// Also, since steps 1 and 3 never run, the value of 'this' inside the function refers to the Global Object, therefore, the properties and methods defined within the function become part of the global namespace.

console.log(
	`Global variables:\n 'firstName': ${firstName}\n 'lastName': ${lastName}\n 'age': ${age}`
);

sayHi(); // is accessible everywhere; logs 'Hi there'

// CONSTRUCTOR PROTOTYPES

// It is possible to define prototypes and assign them to the Constructor. That way, every object instance created by that Constructor will have its prototype associated with it.

const USER_PROTO = {
	fullName: function() {
		return `${this.firstName} ${this.lastName}`;
	},
	greet: function() {
		console.log(`Hello, world! I'm ${this.firstName}!`);
	},
	whatsThis: function() {
		console.log(this);
	}
};

User.prototype = USER_PROTO;

let user3 = new User('Steve', 'Rogers', 97);

console.log(user3.fullName()); // logs 'Steve Rogers'
console.log(user3); // 'user3' is instantiated with prototype 'USER_PROTO' and inherited its values and functionallity.

// CONSTRUCTORS IMPLICITLY RETURN THE OBJECT

// As mentioned before, the Constructor will implicitly return the object it instantiated (no need of the 'return' keyword).

// But what happens if you use 'return' inside the Constructor?

// That will depend on what is being returned.

// 1) If 'return' is called with an object, the Constructor will return that object instead of 'this';
// 2) If 'return' is called with a primitive data type, it's ignored and 'this' is returned instead

function Wizard(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.magicNumber = 42;
	this.sayHi = function() {
		console.log('Hi there!');
	};
	return {
		// returning an object supersedes 'this'
		firstName: 'Doctor',
		lastName: 'Strange',
		age: 41
	};
}

let cust1 = new Wizard('Ancient', 'One', 1627);
console.log(cust1); // Doctor Strange supersedes the Ancient One

function Hero(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.magicNumber = 42;
	this.sayHi = function() {
		console.log('Hi there!');
	};
	return this.magicNumber; // returning a primitive will be ignored
}

let hero1 = new Hero('Clint', 'Barton', 39);
console.log(hero1); // logs Hawkeye's object

// However, if the constructor is called without 'new', there will be no implicit return of 'this', so the returned value will always be the one defined in the function (or 'undefined' if there is no return statement)

let hero2 = Hero('Natasha', 'Romanov', 35);
console.log(hero2); // logs 42

// For more details on Constructors and the 'new' operator refer to:
// https://javascript.info/constructor-new
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// ANOTHER EXAMPLE TO SOLIDIFY THINGS

function Question(weight, correctAns, studentAns) {
	this.weight = weight;
	this.correctAns = correctAns;
	this.studentAns = studentAns;
	this.isCorrect =
		this.studentAns.toUpperCase() === this.correctAns.toUpperCase();
}

const QUESTION_PROTO = {
	getScore: function() {
		return this.isCorrect ? this.weight : 0;
	}
};

Question.prototype = QUESTION_PROTO;

let questions = [],
	finalScore = 0,
	maxScore = 0;

questions.push(new Question(2, 'B', 'b'));
questions.push(new Question(1, 'C', 'a'));
questions.push(new Question(1, 'C', 'c'));
questions.push(new Question(3, 'D', 'a'));
questions.push(new Question(3, 'A', 'a'));

for (let q in questions) {
	finalScore += questions[q].getScore();
	maxScore += questions[q].weight;
}

console.log(`The final score was ${finalScore} out of ${maxScore}`);

// CHALLENGE:

// Create a Question object that takes the problem statement defined by the instructor as an input. Prompt the instructor to create answer options A through D. Allow them to define which one is the correct answer. Prompt the insctructor to create a five-question exam. Then prompt a student to give his answers. Compare the student's answers with the instructor feedback. Log the student final grade.
