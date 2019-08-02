'use strict';

var user = {
  firstName: 'Mauricio',
  lastName: 'Lacerda',
  age: 38,
  birthday: new Date('1981-02-17T10:55:00.000-03:00'),
  fullName: function() {
    console.log(this.firstName + ' ' + this.lastName);
  }
};

user.fullName();

console.log(user);

// The 'delete' keyword is used mainly to remove properties from objects

delete user.birthday;

console.log(user);

var arr = [54, 32, 12, 7, 89, 66];

console.log(arr);

// It can be used in arrays, but in this case it will generate Sparse Arrays

delete arr[2]; // this will produce a Sparse Array
// A Sparse Array is an array with an undefined element in its midst

console.log(arr); // sparse array with element arr[2] empty or undefined
console.log(arr[2]); // undefined

// To delete elements from the array without making it Sparse, it's necessary to use the .splice() method

delete user.fullName; // 'delete' also can be used to remove methods

// since you're not calling the method/function, don't use (parenthesis)

console.log(user);
