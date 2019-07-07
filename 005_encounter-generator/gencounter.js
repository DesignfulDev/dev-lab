'use strict';

// Welcome

let playerName = 'Maurice';

const getPlayer = player => player || 'Adventurer';

const greetPlayer = getPlayer =>
  console.log(`Welcome, ${getPlayer(playerName)}! Shall we play a game?`);

greetPlayer(getPlayer);

// Define the party

const party = [
  { charName: 'Bogon', charClass: 'fighter', charLevel: 4 },
  { charName: 'Myrrah', charClass: 'rogue', charLevel: 3 },
  { charName: 'Erick', charClass: 'cleric', charLevel: 3 },
  { charName: 'Fury', charClass: 'barbarian', charLevel: 2 },
  { charName: 'Andraxis', charClass: 'wizard', charLevel: 5 }
];

let lvlThree = party.filter(charater => charater.charLevel === 3);
console.log(lvlThree);

const printChar = charater =>
  console.log(
    `${charater.charName} is a level ${charater.charLevel} ${
      charater.charClass
    }`
  );

party.forEach(printChar);

const findWizard = party.findIndex(char => char.charClass === 'wizard');
console.log(
  `There is at least one wizard in the party, at index ${findWizard}`
);

// Determine encounter difficulty

let encounterDifficulty = 'hard';

const characterThresholds = [
  ['charlevel', 'easy', 'balanced', 'hard', 'deadly'],
  [1, 25, 50, 75, 100],
  [2, 50, 100, 150, 200],
  [3, 75, 150, 225, 400],
  [4, 125, 250, 375, 500],
  [5, 250, 500, 750, 1100]
];

const displayChallengeMessage = encounterDifficulty => {
  const challengeMessage = `This encounter's challenge will be ${encounterDifficulty}.`;

  switch (encounterDifficulty) {
    case 'easy':
      console.log(challengeMessage);
      break;
    case 'balanced':
      console.log(challengeMessage);
      break;
    case 'hard':
      console.log(challengeMessage);
      break;
    case 'deadly':
      console.log(challengeMessage);
      break;
    default:
      console.log('Please select a challenge for the encounter');
      break;
  }
};

displayChallengeMessage(encounterDifficulty);

// for (let i = 0; i < characterThresholds[0].length; i++) {}

// Calculate party level

// Calculate encounter level

// Match party and encounter level
