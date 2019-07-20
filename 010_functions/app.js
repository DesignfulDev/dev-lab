// Difference between function declarations and function expressions
// Function expressions are not hoisted

greet(); // I can call the function before it is defined in the code

function greet() {
  console.log('hey now, brown cow');
}

greet(); // or after it. It makes no difference.

// Hoisting is considered bad practice and makes code more confusing

// Function declarations are hoisted

let x = function hello() {
  // you assign a var with a different name
  console.log('hello, world');
};
x(); // when calling the function you have to use the variable name
console.log(x.name); // but the function name is still 'test'
//test(); // and if you try to call the function from it's name it will throw an 'Uncaught ReferenceError: test is not defined at app.js'

console.clear();

// Handling parameters

const sum = (num, add) => {
  num = num || 0; // this is called short-circuit evalutation
  add = add || 0; // if the 1st value is falsy, the 2nd is assigned
  let total = num + add;
  console.log(total);
};

sum(5, 6), sum(100, -4), sum(7), sum();

console.log('####');

const multi = (num = 1, multi = 1) => {
  // Alternatively to handling the parameters inside the function definition you can assign a default value to the parameters
  let total = num * multi;
  console.log(total);
};

multi(5, 6), multi(100, -4), multi(7), multi();

console.clear();

// Create a function that generates a random number between the numbers provided

const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
};
console.log(randomNum(1, 60));

const lottery = (random, min = 1, max = 60, draws = 6) => {
  let result = [];
  for (let i = 1; i <= draws; i++) {
    result.push(random(min, max));
  }
  return result;
};

let firstDraw = lottery(randomNum, 1, 100, 11);
console.log(firstDraw);

let secondDraw = lottery(randomNum);
console.log(secondDraw);

console.clear();

// Understanding Scope

function scoped() {
  var num1 = 10;
  console.log('Inside 1: ' + num1); // If the function doesn't the variable inside its scope, it will look in the global scope;
  console.log('Inside 2: ' + num2);
}

scoped(); // this call runs because num2 is hoisted, but it's undefined

var num1 = 25,
  num2 = 75;
scoped();
console.log('Outside 1: ' + num1); // In the global scope, num1 is still 25
console.log('Outside 2: ' + num2);

function letScope() {
  let int1 = 100;
  console.log('Let Inside 1: ' + int1);
  console.log('Let Inside 2: ' + int2);
}

//letScope(); // this call cant' access int2 before initialization
let int1 = 255,
  int2 = 755;
letScope();
console.log('Let Outside 1: ' + int1);
console.log('Let Outside 2: ' + int2);

console.clear();

// Higher Order Functions

/*
const greetings = () => {
  console.log('Hello there!');
};

setTimeout(greetings, 1500);

setTimeout(() => {
  console.clear();
  console.log('Hello there!');
}, 3000);

*/

/*
let i = 0;
let intervalId = setInterval(() => {
  console.log('  ID: ' + i);
  i++;
  if (i > 47) {
    clearInterval(intervalId);
  }
}, 30);

let j = 0;
let intervalId2 = setInterval(() => {
  console.log('JX: ' + j);
  j++;
  if (j > 52) {
    clearInterval(intervalId2);
  }
}, 70);
*/

console.clear();

// Exercise: Write a function that returns a Fibonacci as an array. The length of the sequence should be passed in as an argument.

let fibSeq = len => {
  let x = 0,
    y = 1,
    z = 1,
    seq = [];
  for (i = 0; i < len; i++) {
    seq.push(z);
    z = x + y;
    x = y;
    y = z;
  }
  return seq;
};

let firstPass = fibSeq(10).join('\n');
let secondPass = fibSeq(20).join('\n');
console.log(firstPass);
console.log(secondPass);

// Exercise: create an arrow function that will accept a number and return the number with an indication of whether it's odd or even. Define the entire function in one line.

const oddEven = num => (num % 2 === 0 ? `${num} is even.` : `${num} is odd.`);

let newNumber = Math.floor(Math.random() * 60 + 1);

console.log(oddEven(newNumber));
