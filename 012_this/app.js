// 'use strict';

// UNDERSTANDING THIS

// ### KEY CONCEPTS about 'this' to keep track of ###

// 1) The Global Object is created whenever the JavaScript engine starts
// 1.1) In the context of a browser, the Global Object is the Window object
// 1.2) ...but even contexts outside a browser (like in an instance of Node.js), there's still a Global Object, but it is not the browser window.
// 2) The keyword 'this' refers to the object invoking that FUNCTION
// 3) ...otherwise 'this' refers to the Global Object

// 4) NOW THIS WILL GET WEIRD: if 'this' tries to refer to a PROPERTY value inside of an object (instead of a FUNCTION or METHOD) it will not point to that value. It will, instead, point to a variable in the Global Object with the same name as the property that 'this' tried to refer to. If, in the context of the Global Object, there is no variable defined with the same name as that property, it will return 'undefined'. See more on lecture 72 at time 09:43

var myName = 'Mauricio'; // variable created in the Global namespace

// The code bellow will only work if the command 'use strict' is disabled;

var printName = function() {
  console.log(this.myName);
};

printName(); // will print the string 'Mauricio'

let secName = 'Amanda';

const logName = function() {
  console.log(this.secName);
};

logName(); // will print undefined

// The difference in the output has to do with the way the keyword 'var' and the keywords 'let' and 'const' are differently implemented.

// 1) The scope of variables created with the 'var' keyword is either:
// 1.1) the Function inside of which the variable was created, or;
// 1.2) if the variable is declared as a global variable, its scope the Global environment, or the Global namespace;

// 2) The scope of variables created with the keywords 'let' and 'const' is the {code block} within which the variable was created

// 3) Variables created with keywords 'let' and 'const' are NOT HOISTED, while variables created with keyword 'var' is.

// Source: https://youtu.be/9_10SWEW3-g

// ##################################################
console.clear();

var user1 = {
  firstName: 'Steven',
  lastName: 'Hancock',
  fullName: function() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
};

user1.fullName();

var user2 = {
  firstName: 'Barry',
  lastName: 'Allen',
  fName: user1.fullName // the method is PASSED into 'fName'; it is not being invoked or executed. This means what gets passed into 'fName' is not the value returned by calling 'user.fullName()'. Instead, 'fName' receives the Function itself.
};

user2.fName(); // when fName is called inside of 'user2', the 'this' keyword will refer to that object that is calling the Function; that means 'user2', not 'user1'.

// In other words 'user1' didn't call the method fullName. Instead 'user2' called the method 'fName', which contains a copy of the 'user1' method 'fullName', that was passed into the method 'fName' when the object 'user2' was created.

// The comparison bellow returns true because they have the same VALUE, not because they have the same reference.

console.log(user1.fullName === user2.fName);

// Now let's declare a Global variable and PASS the 'user1.fullName' method into it.

var test = user1.fullName; // Note that we are not executing the Function and passing it's returned value, we are PASSING the Function itself to the global variable 'test'.

test(); // When 'test' is called, it returns 'undefined undefined';

// WHY??

// Because 'test' is a GLOBAL variable, so 'this' inside the 'fullName' method is called in the context of the Global Object. And because there are no variables or properties defined as 'firstName' and 'lastName' inside the Global Object, their values are 'undefined' and 'undefined';

var firstName = 'Sarah'; // if I declare 'firstName' to the Global Object
test(); // Sarah undefined

var user3 = {
  firstName: 'Leo',
  nickname: this.firstName
};

console.log(user3.nickname); // returns Sarah

// This will get weird (see item 4, above)

// Because when we define the property 'nickname' and we refer to 'this' outside of a Function, it will lookup to what 'this' is bound to, and in this case it's the Global Object. Because we've defined a global variable 'firstName', 'this.firstName' will refer to its value.

var user4 = {
  firstName: 'Pete',
  nickname: function() {
    return this.firstName;
  }
};

console.log(user4.nickname()); // Pete

// Because we refered to 'this' inside of a Function, it pointed to the Object calling that Function, in that case, 'user4'
