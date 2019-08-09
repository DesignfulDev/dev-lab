// 'use strict'; // commented out for TypeError when logging 'user2'

// As we've seen, calling a Constructor without the 'new' operator can cause problems:

// Let's first review what happens implicitly (behind the scenes) when we call the Constructor using the 'new' operator.

// The Constructor...:

// 1) creates a blank object; (implicitly)
// 2) assigns the object to the context of 'this'; (implicitly)
// 3) runs the code block inside the function body;
// 		a) usually this means adding properties to the object using the context of 'this' associated with a property name (ex: this.firstName = 'Mauricio');
// 4) returns 'this', i.e. the object; (implicitly)

// If we invoke the Constructor without the 'new' operator, it will skip the implicit steps 1, 2 and 4. In other words, it will only run the code block as a regular function would.

// Since steps 1, 2 and 4 never run, the context of 'this' inside the function refers to the Global Object, therefore, the properties and methods defined within the function body become part of the global namespace.

function User(firstName, lastName, age) {
	// this = {}; (implicitly)
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.sayHi = function() {
		console.log('Hi there!');
	};
	// return this; (implicitly)
}

let user1 = new User('Tony', 'Stark', 51);

console.log(user1); // logs the instantiated object, as expected
user1.sayHi();

let user2 = User('Bruce', 'Banner', 48); // If 'new' is omitted, the function will be executed as a regular function.

console.log(user2); // logs 'undefined' (or throws TypeError in 'use strict') because the Constructor didn't run the implicit return of 'this'.

// But worse than that, when we assined values to 'firstName', 'lastName' and 'age' using the 'this' keyword inside the code block, it created those variables in the Global context, because that's what 'this' refers to when the function skips its implicit Constructor steps 1 and 2 by omitting the 'new' operator.

console.log(
	`Global variables:\n 'firstName': ${firstName}\n 'lastName': ${lastName}\n 'age': ${age}`
);

sayHi(); // its methods are also accessible in the global context;

// HOW TO CREATE SAFE OBJECTS
// that don't run into the risk of being invoked without the 'new' operator

// When defining the Constructor we can make sure it will be run with the 'new' operator by adding an 'if' statement:

function Customer(firstName, lastName, age) {
	// this = {}; (implicitly)
	if (this instanceof Customer) {
		// test if the context of 'this' is an instance of object type 'Customer'
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
		this.sayHi = function() {
			console.log('Hi there!');
		};
	} else {
		// if not, return the function call with the 'new' operator as appropriate
		return new Customer(firstName, lastName, age);
	}
	// return this; (implicitly)
}

let cust1 = Customer('Hank', 'Pym', 67);
let cust2 = new Customer('Scott', 'Lang', 38);

console.log(cust1); // object instantiated correctly
console.log(cust2); // object instantiated correctly
console.log(firstName); // still 'Bruce'

// For more on this topic
// https://youtu.be/w6Bw5zKcpKY
