'use strict';

// var user = {
// 	firstName: 'Mauricio',
// 	lastName: 'Lacerda',
// 	age: 38,
// 	birthday: new Date('1981-02-17T10:55:00.000-03:00'),
// 	fullName: function() {
// 		console.log(this.firstName + ' ' + this.lastName);
// 		return 0;
// 	},
// 	greet: function() {
// 		console.log(`Hello world, I'm ${this.firstName}!`);
// 	},
// 	whatsThis: function() {
// 		console.log(this);
// 	}
// };

// USING CONSTRUCTORS

// A contructor is a function that instantiates (i.e. creates an instance of) an object.

// To define a constructor function is similar to defining a normal function, except that, by convention, you should use an uppercase letter on the function identifier.

function User(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

// The keyword 'this' inside the constructor will refer to the object instantiated with the function.

// After the constructor is defined, you use the keyword 'new' to tell the JavaScript engine you are invoking the function AS a constructor.

let user1 = new User('Mauricio', 'Lacerda', 38); // The keyword 'new' is important; if don't use it, the function will be executed as a normal function, and will not return an instance of the object.

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

let user2 = new User('Amanda', 'Reis', 37);

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
