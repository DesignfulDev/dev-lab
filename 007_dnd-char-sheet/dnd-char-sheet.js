const charFactory = (
  playerName,
  charName,
  charClass,
  charLevel,
  charAbilities,
  charBackground
) => {
  return {
    playerName,
    charName,
    charClass,
    charAbilities,
    charLevel,
    charBackground
  };
};

const genAbilityScores = (str, dex, con, int, wis, cha) => {
  return {
    str,
    dex,
    con,
    int,
    wis,
    cha
  };
};

const charClass = (className, classLevels, hitDie) => {
  return {
    className,
    classLevels,
    hitDie
  };
};

const volkov = charFactory(
  'Mauricio',
  'Lucan Volkov',
  charClass('wizard', 4, 6),
  4,
  genAbilityScores(8, 16, 13, 18, 12, 8),
  'Cloistered Schoolar'
);

console.log(volkov);
console.log(volkov.charAbilities);
console.log(volkov.charClass.classLevels);

const getCharName = (objName, propName) => objName[propName];

const bartolomeu = charFactory(
  'Renato',
  'Cedric Olof Jameson Bartolomeu III',
  'bard',
  4,
  'Gay Performer'
);

console.log(bartolomeu);

const khalia = charFactory(
  'Chini',
  'Khalia Smykker Selger',
  'paladin',
  4,
  'Lesbian revolutionary'
);

console.log(khalia);

const sieg = charFactory(
  'Palmito',
  'Sieg Whatever',
  'warlock',
  4,
  'Possessed asshole'
);

console.log(sieg);

const partyFactory = (...playerChar) => playerChar;

const newParty = partyFactory(volkov, bartolomeu, khalia, sieg);

console.log(newParty);

console.log(getCharName(volkov, 'charAbilities').str);

console.log(volkov.charAbilities);

let volkovAbilities = [];

for (let ability in volkov.charAbilities) {
  volkovAbilities.push(volkov.charAbilities[ability]);
}

console.log(volkovAbilities);

let goodAbilities = volkovAbilities.some(num => num > 16);
console.log(goodAbilities);
