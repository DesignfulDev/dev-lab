// Arrays

let arr1 = [];
console.log(arr1.length);

arr1 = [100, 79, 55];
console.log(arr1);
console.log(arr1.length);

let arr2 = new Array(365, 32, 789, 4579);
console.log(arr2);
console.log(arr2.length);

let arr3 = [97, 32, 65, 88, 95, 45, 78, 76, 89, 67, 97];

console.log(`Here's the array ${arr3.toString()}`);

// Array Methods: Push, Pop, Shift, Unshift

console.log(arr3.length);

arr3.push(55);

console.log(arr3.length);

let elem = arr3.pop();
console.log(elem);
console.log(arr3.length);

arr3.shift();
console.log(arr3.length);
console.log(arr3);

arr3.unshift(55);
console.log(arr3.length);
console.log(arr3);

console.clear();

// Applying Arrays to print the day of the week

let date = new Date(),
  day = date.getDay(),
  weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

console.log(`Today is ${weekdays[day]}`);

// Working with array methods:
// toSring(), join(), reverse(), sort(), indexOf(), lastIndexOf()

let numbers = [49, 6, 22, 57, 17, 18, 245, 3687];

console.log(numbers.toString());
console.log(numbers.join(' - '));
console.log(numbers.reverse());
console.log(numbers); // the .reverse() method changes the array
console.log(numbers.sort()); // .sort has a bug comparing place values (digits in ones place, tens place, hundreds place, etc.)
console.log(numbers); // the .sort() method also changes the array
console.log(numbers.indexOf(18)); // returns the index of found element searching from the START of the array
console.log(numbers.lastIndexOf(18)); // returns the index of found element searching from the END of the array
console.log(numbers.indexOf(55)); // when .indexOf finds no match, it returns -1

console.clear();

// Spliting strings apart...into arrays

let message = `Hello, how are you doing? I'm doing fine!`;
console.log(message);
let msgArr = message.split('? ');
console.log(msgArr);

let url = `https://www.youtube.com/watch?v=DiQd7y2yIRA`;
console.log(url);
let querry = url.split('?');
console.log(querry);

// Splice up your array

const animals = [
  'hippo',
  'elephant',
  'lion',
  'llama',
  'orangutang',
  'weasel',
  'orchid',
  'rat',
  'lizard',
  'dog'
];

let primate = animals.splice(4, 3);
console.log(animals, primate);
animals.splice(2, 0, 'horse', 'cat'); // adds animals before index 2
console.log(animals); // .splice() changes the original array

console.clear();

// Exercise: splice the fruits
// Remove all duplicated fruits from the array

let fruits = [
  'banana',
  'kiwi',
  'mango',
  'kiwi',
  'apple',
  'kiwi',
  'pear',
  'banana',
  'apple'
];
console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   while (fruits.indexOf(fruits[i]) !== fruits.lastIndexOf(fruits[i])) {
//     fruits.splice(fruits.lastIndexOf(fruits[i]), 1);
//   }
// }

for (let i = 0; i < fruits.length; i++) {
  if (fruits.indexOf(fruits[i]) !== fruits.lastIndexOf(fruits[i])) {
    fruits.splice(fruits.lastIndexOf(fruits[i]), 1);
  }
}

console.log(fruits);
