'use strict';

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

var volkov = {
  playerName: 'Mauricio',
  charNAme: 'Lucan Volkov',
  classLevels: [
    {
      className: 'wizard',
      classLevel: 3
    },
    {
      className: 'fighter',
      classLevel: 1
    }
  ],
  getClassLevel: function() {
    return this.classLevels[0].classLevel + this.classLevels[1].classLevel;
  }
};

let volkovLevel = volkov.getClassLevel();
console.log(`Volkov has ${volkovLevel} total class levels.`);

console.log(user);

// PROTOTYPAL INHERITANCE

// Every object that is defined with the object constructor 'new Object', or with the object literal {} inherits at least one prototype which is defined in the property '__proto__'

// Question: if I use Object.create() and pass no arguments, will it inherit '__proto__'? Find out bellow.

console.log(user.__proto__);

// This means that any data or functionality that exists within an object's prototype can also be accessed by the object itself.

console.log(user.hasOwnProperty('firstName'));

// the method '.hasOwnProperty' was not defined in the 'user' object literal.
// Where did it come from ?
// It came from its prototype; 'user' inherited this functionality from its prototype

// PROTOTYPE CHAINING

// When a property or method is called from an object, JavaScript will first lookup within the own object definition for a property or method with that name. If it doesn't find it, it will lookup into the object prototype. It will continue to do so until it reaches the highest level prototype, which is the Object prototype

user.hasOwnProperty = function() {
  console.log("I'm a homonymous method");
};

user.hasOwnProperty('firstName'); // since we defined a homonymous method, the call will invoke the method that was created in the object definition, and it won't reach its prototype method.

console.log(user.__proto__.hasOwnProperty('firstName'));
console.log(user);

// An object prototype can have other prototypes which it inherits from. This is called 'prototype chaining'. The highest level prototype is the Object prototype, which all other objects inherit from.

let arr = ['foo', 'bar', 42]; // Arrays are also objects, this means they can inherit from the Object prototype

console.log(arr.toString()); // 'toString' is defined in the Object prototype, therefore array objects have access to that method

console.log('################################');

// DEFINING PROTORYPES WITH Object.create

// To create an object using Object.create(), first you need to create a prototype to pass into that method.

const playerProto = {
  charClass: 'wizard',
  charLevel: 3
};

const player = Object.create(playerProto); // When calling the method, you pass in the prototype you created.
console.log(player);

// If you pass 'null' as an argument, the object created will have no prototypes, no properties, and no methods associated with it - not even the Object __proto__, which is the highest level prototype.

const nullObj = Object.create(null);
console.log(nullObj);
