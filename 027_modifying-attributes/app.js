'use strict';

// MODIFYING ATTRIBUTES ON HTML ELEMENTS

// This methods are particularly effective on HTML attibutes that are reserved words in JavaScript (ex: class, for) because they will avoid errors

/*

.getAttribute('attribute');
.setAttribute('attribute', 'value');
.hasAttribute('attribute');
.removeAttribute('attribute');

*/

let sq5 = document.querySelector('#sq05');
console.log(sq5);

let sq5att = sq5.getAttribute('class');
console.log(sq5att);

let hasId = sq5.hasAttribute('id');
console.log(hasId);

setTimeout(() => {
	sq5.removeAttribute('class');
}, 1500);

setTimeout(() => {
	sq5.setAttribute('class', 'square');
}, 3000);

setTimeout(() => {
	sq5.setAttribute('class', 'square blueSquare');
}, 4500);
