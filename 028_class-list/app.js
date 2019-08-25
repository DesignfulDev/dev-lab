'use strict';

// WORKING WITH .classList

/*

.classList.add('class');
.classList.remove('class');
.classList.toggle('class');
.classList.length;
.classList.contains('class');

*/

let sq6 = document.querySelector('#sq06');

sq6.classList.add('small-font');

setTimeout(() => {
	sq6.classList.remove('small-font');

	setInterval(() => {
		sq6.classList.toggle('blueSquare');

		let sq6len = sq6.classList.length;
		let sq6cont = sq6.classList.contains('blueSquare');

		console.log(sq6len, sq6cont);
	}, 1000);
}, 2000);
