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

let numbers = [49, 6, 22, 57, 17, 18];

// .forEach()

const hellos = animals.forEach(() => console.log('Hey now, brown cow!')); // runs once for every element in the array;
console.log(hellos); // returns undefined

const favAnimals = animals.forEach(animal =>
  console.log(`${animal} is a ${typeof animal} that represents an animal.`)
);

console.log(favAnimals); // returns undefined

numbers.forEach(number =>
  console.log(`${number} is a ${typeof number} that represents a number`)
);

// .map()

const firstLetter = animals.map(animal =>
  typeof animal[0] === 'string' ? animal[0].toUpperCase() : 'not a string'
);
console.log(firstLetter);

const squaredNumbers = numbers.map(num => num ** 2);
console.log(squaredNumbers);

// .filter()

const animalsThatStartWithL = animals.filter(animal => animal[0] === 'l');
console.log(animalsThatStartWithL);

// .findIndex()

let animalIndex = animals.findIndex(animal => animal === 'lizard');
console.log(`The index of ${animals[animalIndex]} is ${animalIndex}`);

// .reduce()

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(numbers.reduce(reducer, 276));

// .every()

const greater = element => element > 50;
console.log(numbers.every(greater));

const onlyStrings = element => typeof element === 'string';
console.log(animals.every(onlyStrings));

// .some()

const even = element => element % 2 === 0;
console.log(numbers.some(even));

const anyNumber = element => typeof element === 'undefined';
console.log(numbers.some(anyNumber));

// .reduce() review

console.log('### REDUCE REDUX ###');

let findMax = numbers.reduce((acc, val) => (val > acc ? (acc = val) : acc), 0);
console.log(findMax);

let findMin = numbers.reduce((acc, val) => (val < acc ? (acc = val) : acc));
console.log(findMin);

let numAvg = numbers.reduce((acc, val, i, arr) => {
  acc += val;
  return i === arr.length - 1 ? acc / arr.length : acc;
});
console.log(numAvg);

// Simulate .filter() with .reduce()

let myFilter = numbers.reduce((acc, val) => {
  return acc > val ? (acc = val) : acc;
}, []);

console.log(myFilter);
