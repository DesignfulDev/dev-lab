'use strict';

// JavaScript commands for traversing the DOM IN MODERN BROWSERS

/*

In modern browsers you can use this properties to traverse the DOM without worrying about #text nodes between elements.

.firstElementChild
.lastElementChild
.children
.previousElementSibling
.nextElementSibling

*/

let sec1 = document.querySelector('.squares:nth-child(2)');
let sec2 = sec1.nextElementSibling;
let header = sec1.previousElementSibling;

let sec1children = sec1.children;
let sec2children = sec1.nextElementSibling.children;

setTimeout(() => {
	for (let i = 0; i < sec2children.length; i++) {
		sec2children[i].style.backgroundColor = 'olive';
	}
}, 2000);
