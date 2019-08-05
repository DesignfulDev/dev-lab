'use strict';

var user = {
	firstName: 'Mauricio',
	lastName: 'Lacerda',
	age: 38,
	birthday: new Date('1981-02-17T10:55:00.000-03:00'),
	fullName: function() {
		console.log(this.firstName + ' ' + this.lastName);
		return 0;
	},
	greet: function() {
		console.log(`Hello world, I'm ${this.firstName}!`);
	},
	whatsThis: function() {
		console.log(this);
	}
};
