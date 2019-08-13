'use strict';

/*

EXERCISE ON OBJECTS

For a possible game, set up the creation of an object that uses a prototype. Use Object.create(), a constructor function, or a class, to create a game character object. Set up the prototype to have the following properties:

- speed (default value: 6)
- strength (default value: 8)
- hitpoints (default value: 150)
- a method that determines damage per second and returns it. That is equal to speed * strength.

Create one object providing values for speed and hitpoints. Let strength use default value. Then display damage per second.

*/

// USING Object.create()

let playerProto = {
	speed: 6,
	strength: 8,
	hitPoints: 150,
	damagePerSecond: function() {
		return this.speed * this.strength;
	}
};

let playerOne = Object.create(playerProto, {
	speed: { value: 4 },
	hitPoints: { value: 200 }
});

console.log(playerOne);
console.log(`Damage per second: ${playerOne.damagePerSecond()}`);

// USING CONSTRUCTOR

function Player(speed, strength, hitPoints) {
	this.speed = speed || 6;
	this.strength = strength || 8;
	this.hitPoints = hitPoints || 150;
	this.damagePerSecond = function() {
		return this.speed * this.strength;
	};
}

Player.prototype = playerProto;
let playerTwo = new Player(9, null, 320);

console.log(playerTwo);
console.log(`Damage per second: ${playerTwo.damagePerSecond()}`);

// USING CLASS

class Hero {
	constructor(speed, strength, hitPoints) {
		this.speed = speed || 6;
		this.strength = strength || 8;
		this.hitPoints = hitPoints || 150;
	}
	damagePerSecond() {
		return this.speed * this.strength;
	}
}

// Tried to assign an object to prototype, but it doesn't work
// And using 'strict' mode it throws a TypeError

/*
Hero.prototype = {
	speed: 6,
	strength: 8,
	hitPoints: 150
};
*/

// Only adds prototype properties separately
Hero.prototype.speed = 6;
Hero.prototype.strength = 8;
Hero.prototype.hitPoints = 150;

let playerThree = new Hero(7, null, 220);

console.log(playerThree);
console.log(`Damage per second: ${playerThree.damagePerSecond()}`);
