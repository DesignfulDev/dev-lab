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

const volkov = charFactory(
  'Mauricio',
  'Lucan Volkov',
  'wizard',
  4,
  {
    str: 8,
    dex: 16,
    con: 13,
    int: 18,
    wis: 12,
    cha: 8
  },
  'Cloistered Schoolar'
);

console.log(volkov);
console.log(volkov.charAbilities);

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
