'use strict';

// THE CLASS KEYWORD (ES6)

// Classes are a new syntax introduced in ES6 to create objects and make use of prototypal inheritance.

// Different from pure Constructor functions, classes require that you use the 'new' operator to create instances of objects.

// In many ways, Classes in JavaScript are just a cleaner and more concise syntax to instantiate objects.

class Question {
	constructor(weight, correctAns, studentAns) {
		this.weight = weight;
		this.correctAns = correctAns;
		this.studentAns = studentAns;
		this.isCorrect =
			this.correctAns.toUpperCase() === this.studentAns.toUpperCase();
	}

	getScore() {
		return this.isCorrect ? this.weight : 0;
	}
}

console.dir(Question); // 'constructor' and 'getScore' will be prototyped into objects instantiated with 'Question' class

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
