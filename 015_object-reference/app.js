'use strict';

// Objects are passed by reference. This means the variable does not hold the value of the object itself. Instead, it hold a reference that points to a location in memory where the object and its values are stored.

var user = {
	firstName: 'Mauricio',
	lastName: 'Lacerda',
	age: 38,
	birthday: new Date('1981-02-17T10:55:00.000-03:00'),
	fullName: function() {
		console.log(this.firstName + ' ' + this.lastName);
		return 0;
	}
};

// If we try to make a copy of the object by assigning another varible using the original variable, it won't create an actual copy of the object. It will create a copy of the pointer that is a reference to the same object.

var userCopy = user;

console.log(userCopy.age); // logs 38

user.age = 42; // this means if we change 'user.age', 'userCopy.age' will also be affected

console.log(userCopy.age); // now logs 42

// The only way to create an actual copy of an object is to reassign the entire object to a new variable

var trueCopy = {
	firstName: 'Mauricio',
	lastName: 'Lacerda',
	age: 38,
	birthday: new Date('1981-02-17T10:55:00.000-03:00'),
	fullName: function() {
		console.log(this.firstName + ' ' + this.lastName);
		return 0;
	}
};

user.lastName = 'Ferreira'; // change in the original object

console.log(user.lastName); // logs 'Ferreira'
console.log(trueCopy.lastName); // logs 'Lacerda'
