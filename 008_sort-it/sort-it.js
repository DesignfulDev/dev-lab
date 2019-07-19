// Write conditionals to sort three numbers (6, -5, 2) largest to smallest. Output the results to the console.

const num1 = 6,
  num2 = -5,
  num3 = 2;

if (num1 < num2 && num1 < num3) {
  console.log(num1);
  if (num2 < num3) {
    console.log(num2, num3);
  } else {
    console.log(num3, num2);
  }
} else if (num2 < num1 && num2 < num3) {
  console.log(num2);
  if (num1 < num3) {
    console.log(num1, num3);
  } else {
    console.log(num3.toString(), '-', num1);
  }
} else {
  console.log(num3);
  if (num1 < num2) {
    console.log(num1, num2);
  } else {
    console.log(num2, num1);
  }
}

console.clear();

// Generate a random number between 0 and 10 until you get a 5. Log how many iterations it took.

let endNum = 5,
  randNum,
  counter = 0;

while (randNum !== endNum) {
  randNum = Math.round(Math.random() * 10);
  console.log(randNum);
  counter++;
}

console.log(`The loop took ${counter} times to reach ${endNum}`);

console.clear();

// Log the sentence backwards.

let sentence = 'The red bear jumped over the Big fence!',
  backwards = '';

// console.log(sentence[sentence.length - 1]);

for (let i = sentence.length - 1; i >= 0; --i) {
  backwards += sentence[i];
}

console.log(backwards);

console.clear();

// Find the multiples of 6 between 1 and 100;

for (let i = 0; i <= 100; ++i) {
  if (i % 6 === 0) {
    console.log(i);
  }

  if (i > 50) {
    break;
  }
}

console.clear();

// Write the Fibonacci sequence until it reaches 1000

let x = 0,
  y = 1,
  z = 1;

while (z < 1000) {
  console.log(z);
  z = x + y;
  x = y;
  y = z;
}

console.clear();

// Write a loop that displays any number between 1 - 100 that is a multiple of both 3 and 5

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
