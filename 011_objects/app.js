'use strict';

// DEFINING OBJECTS

// Create an Object using Object Literals
const dog = {
  name: 'Fiona',
  type: 'York Shire',
  age: 4,
  speak() {
    console.log('woof woof');
  },
  eat() {
    console.log('nom nom nom');
  }
};

console.log(`${dog.name} is a ${dog.age} year-old ${dog.type}`);
console.log(dog.speak());
console.log(dog.eat());

// Let's add another Object within the dog object

dog.parentage = {
  mother: 'Ruby',
  father: 'Spike'
};

dog.vetVisits = ['2018-11-13', '2019-02-19', '2019-05-04', '2019-07-09'];

console.log(dog, dog.vetVisits, dog.parentage);
console.log(dog.parentage.mother);

// Create an empty Object
// then add properties and methods using dot.notation

const cat = {};

cat.name = 'Caramelo';
cat.type = 'Siamese';
cat.age = 6;
cat.speak = () => {
  console.log('meaw meaw');
};
cat.eat = () => {
  console.log('nommy nommy');
};

console.log(cat);

// Create an Object using the Constructor

const bird = new Object();
bird.type = 'Parrot';
bird.name = 'Napoleon';
bird.age = 3;
bird.speak = () => {
  console.log('pew pew');
};
bird.eat = () => {
  console.log('crack crack');
};

console.log(bird);

// User Defined Objects

//Data from the program
let firstName = 'Amanda';
let lastName = 'Reis';
let birthDate = new Date('1981-07-21T14:23:00.000-03:00');

// ECMAScript defines a string interchange format for date-times based upon a simplification of the ISO 8601 Extended Format.

// The format is as follows: YYYY-MM-DDTHH:mm:ss.sssZ

// Z is the time zone offset specified as “Z” (for UTC) or either “+” or “-” followed by a time expression HH:mm

// Source: http://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15

console.log(birthDate);

//User connects

const amandareis = {
  firstName: firstName,
  lastName: lastName,
  age: 37,
  birthDate: birthDate,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`;
  },
  incrementAge: function() {
    this.age++;
  },
  birthDay: function() {
    console.log('Happy Birthday');
    this.incrementAge();
  },
  checkBirthdayOnLogin: function() {
    const today = new Date();
    if (
      today.getDate() === this.birthDate.getDate() &&
      today.getMonth() === this.birthDate.getMonth()
    ) {
      this.birthDay();
    }
  }
};

amandareis.checkBirthdayOnLogin();
console.log(amandareis.age);
console.log(amandareis.getFullName());

// UNDERSTANDING THIS

// Key concepts about 'this' to keep track of:
// 1) The Global Object is created whenever the JavaScript engine starts
// 1.1) In the context of a browser, the Global Object is the Window object
// 2) The keyword 'this' refers to the object invoking that FUNCTION
// 3) ...otherwise 'this' refers to the Global Object

// 4) NOW THIS WILL GET WEIRD: if 'this' tries to refer to a PROPERTY value inside of an object (instead of a FUNCTION or METHOD) it will not point to that value. It will, instead, point to a variable in the Global Object with the same name as the property that 'this' tried to refer to. If, in the context of the Global Object, there is no variable defined with the same name as that property, it will return 'undefined'. See more on lecture 72 at time 09:43
