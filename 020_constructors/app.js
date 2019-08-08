// 'use strict'; // commented out for TypeError when logging 'user2'

// USING CONSTRUCTORS

// A Contructor is a function that instantiates (i.e. creates an instance of) an object.

// Defining a Constructor function is similar to defining a regular function, except that, by convention, you should use an uppercase letter on the function identifier.

function User(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

// The keyword 'this' inside the Constructor will refer to the object instantiated by the function call.

// After the Constructor is defined, use the keyword 'new' to tell the JavaScript engine you are invoking the function AS a Constructor.

let user1 = new User('Tony', 'Stark', 51); // The keyword 'new' is important (or rather essential) when calling a Constructor;

console.log(user1); // logs the Object

let user2 = User('Bruce', 'Banner', 48); // If don't use the 'new' keyword, the function will be executed as a regular function, and will not return an instance of the object.

console.log(user2); // logs 'undefined' (or throws TypeError in 'use strict')

// NOTICE:

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
console.log(user3); // 'user3' is instantiated with prototype 'USER_PROTO'

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
