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

user.fullName(); // Mauricio Lacerda

user['fullName'](); // Mauricio Lacerda

console.log(user['birthday'].getFullYear()); // 1981

var propName = 'lastName';

console.log(user[propName]); // Lacerda

var methodName = 'fullName';

user[methodName](); // Mauricio Lacerda

// Bracket notation is powerful because it adds flexibility to the way you can extract data from objects.

let customerAddress = {
  addressLine1: 'Ty Smith',
  addressLine2: '150 South Main',
  addressLine3: 'Somewhere, MT 00034'
};

let fullAddress = '';

for (let i = 1; i <= 3; i++) {
  // Here we use property names concatenated with an iterating number
  fullAddress += customerAddress['addressLine' + i] + '\n';
}

console.log(fullAddress);

// In this particular case we could also achieve the same effect using a new ES6 loop syntax 'for...in'

let completeAddress = '';

for (let line in customerAddress) {
  completeAddress += customerAddress[line] + '\n';
}

console.log('---');
console.log(completeAddress);
