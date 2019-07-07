const animals = [
  'hippo',
  'tiger',
  'lion',
  'seal',
  'cheetah',
  'monkey',
  'salamander',
  'elephant'
];

const foundAnimal = animals.findIndex(animal => animal === 'monkey');
console.log(foundAnimal);

// const startsWithS = animals.findIndex(animal => animal[0] === 's');
const startsWithS = animals.findIndex(animal => animal.startsWith('s'));

console.log(startsWithS);

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator is ${accumulator}.`);
  console.log(`The value of currentValue is ${currentValue}.`);
  return accumulator + currentValue;
}, 256);

console.log(newSum);
