// 'use strict'; // commented out for TypeError when logging 'user2'

// USING CONSTRUCTORS

// FIVE IMPORTANT CONCEPTS
// 1) Invoking a function with the keyword 'new' determines whether or not that function is a Constructor
// 2) The Constructor instantiates (i.e. creates an instance of) a new object which is bound to 'this'
// 3) The Constructor is invoked with the value of 'this' equal to the newly instantiated object
// 4) The Constructor's own 'prototype' property determines the prototype of the new objects it instantiates
// 5) The Constructor 'returns' the object it instantiates

// DEFINITION:
// A Contructor is a function that instantiates an object.

// Defining a Constructor function is syntactically identical to defining a regular function, except that, by convention, the Constructor should take an uppercase first letter on the function identifier.

function User(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.magicNumber = 42;
	// you can add both properties and  methods to Constructors
	this.sayHi = function() {
		console.log('Hi there!');
	};
}

// CONSTRUCTOR VS. REGULAR FUNCTIONS

// It is only when calling the Constructor function with keyword 'new' that things will behave differently from regular functions:

// 1) When a Constructor function is called, it passes the object as the value of 'this'. In other words, the value of 'this' inside the Constructor will refer to the object instantiated by the function call.

// 2) The Constructor function will implicitly return (no need to use the 'return' keyword) the object it instantiated. More on that later.

// After the Constructor is defined, use the keyword 'new' to tell the JavaScript engine you are invoking the function AS a Constructor.

let user1 = new User('Tony', 'Stark', 51); // The keyword 'new' is important (or rather essential) when calling a Constructor;

console.log(user1); // logs the instantiated object
user1.sayHi();
console.log(user1.magicNumber);

let user2 = User('Bruce', 'Banner', 48); // If don't use the 'new' keyword, the function will be executed as a regular function, and will not return an instance of the object.

console.log(user2); // logs 'undefined' (or throws TypeError in 'use strict')

// Also, since we didn't use the keyword 'new' to create 'user2', the value of 'this' inside the function was the Global Object, therefore, the variables 'firstName', 'lastName' and 'age' became global variables.

console.log(
	`Global variables:\n 'firstName': ${firstName}\n 'lastName': ${lastName}\n 'age': ${age}`
);

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

// As mentioned before, the Constructor will implicitly return the object it instantiated (no need to use the 'return' keyword).

// But what happens if you use 'return' inside the Constructor?

// That will depend on what is being returned.

// 1) If 'return' is called with an object, the Constructor will return that object instead of 'this';
// 2) If 'return' is called with a primitive data type, it's ignored and 'this' is returned instead

function Customer(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.magicNumber = 42;
	// you can add both properties and  methods to Constructors
	this.sayHi = function() {
		console.log('Hi there!');
	};
	return {
		// returning an object
		firstName: 'Ancient',
		lastName: 'One',
		age: 1627
	};
}

Customer.prototype = USER_PROTO;

let cust1 = new Customer('Doctor', 'Strange', 41);
console.log(cust1); // Ancient One will supercede Doctor Strange

function Hero(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.magicNumber = 42;
	// you can add both properties and  methods to Constructors
	this.sayHi = function() {
		console.log('Hi there!');
	};
	return this.magicNumber; // will be ignored
}

let hero1 = new Hero('Clint', 'Barton', 39);
console.log(hero1); // logs Hawkeye's object

// For more details on Constructors refer to:
// https://javascript.info/constructor-new

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
