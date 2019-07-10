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

const summary = (acc, num) => acc + num;
const filterBig = num => num > 3;

const sumNum = newNumbers.filter(filterBig).reduce(summary, 10);

console.log(sumNum);

console.log('=================');

const coreMessage = message => message;

console.log(coreMessage('Hello'));

const greetUser = (fn, user) => {
  console.log(`${user}, know that ${fn}.`);
  return user => {
    console.log(user + ' hahaha I love bacon');
  };
};

greetUser(
  coreMessage('with great power comes great responsability'),
  'Mauricio'
);
