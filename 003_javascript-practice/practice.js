const namesArr = [
  'amanda',
  'mauricio',
  'leonardo',
  'natalia',
  'luiza',
  'zeca',
  'marilza'
];

console.log(`Original array: ${namesArr}`);

const clearArr = () => {
  let arrSize = namesArr.length;
  for (let i = 0; i < arrSize; i++) {
    namesArr.pop();
  }
};

const addNameEnd = newName => namesArr.push(newName);
const addNameBegin = newName => namesArr.unshift(newName);

addNameEnd('cintia');
console.log(`Array after ADDING name at the END: ${namesArr}`);

addNameBegin('elzira');
console.log(`Array after ADDING name at the BEGINNING: ${namesArr}`);

const searchName = nameQuery => {
  let arrSize = namesArr.length;
  for (let i = 0; i < arrSize; i++) {
    if (nameQuery === namesArr[i]) {
      console.log(`Found ${namesArr[i]}!`);
      break;
    } else {
      console.log(`Sorry, I couldn't find ${nameQuery}.`);
      break;
    }
  }
};

searchName('elzira');

const removeNameEnd = () => namesArr.pop();
const removeNameBegin = () => namesArr.shift();

removeNameEnd();
console.log(`Array after REMOVING name at the END: ${namesArr}`);
removeNameBegin();
console.log(`Array after REMOVING name at the BEGINNING: ${namesArr}`);
searchName('elzira');
removeNameEnd();
console.log(`Array after REMOVING name at the END: ${namesArr}`);
searchName('amanda');

clearArr();
console.log(namesArr);
