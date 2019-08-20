'use strict';

// CHANGING THE DOM IN TWO STEPS

// 1) Select the DOM element
// 2) Change properties of the selected element

// METHODS FOR SELECTING ELEMENTS

// 1) Selecting elements with the dot syntax
// 2) Selecting elements by specifying an ID
// 3) Selecting elements by specifying an TAG
// 4) Selecting elements by specifying an CLASS
// 5) Selecting elements using CSS selectors
// 6) Selecting form elements by name attribute

// Selecting with the dot syntax

let docBody = document.body; // returns the document's body element
let docForms = document.forms; // returns an array of forms
let docImgs = document.images; // returns an array of images
let docLinks = document.links; // returns an array of links

let toggleImg = (imgArr, i) => {
	imgArr[i].src ===
	'file:///home/krone/Code/webdev/dev-lab/024_dom-manipulation/img/javascript.png'
		? (imgArr[i].src = './img/nodejs.png')
		: (imgArr[i].src = './img/javascript.png');
};

let i = 0;
let toggle1 = setInterval(() => {
	console.log(i);
	toggleImg(docImgs, 0);
	i > 5 ? clearInterval(toggle1) : i++;
}, 500);

let j = 0;
let toggle2 = setInterval(() => {
	toggleImg(docImgs, 1);
	j > 5 ? clearInterval(toggle2) : j++;
}, 500);

// Selecting elements by specifying an ID

let sq07 = document.getElementById('sq07');

let k = 0;
let toggleColor = setInterval(() => {
	sq07.style.backgroundColor === 'darkred'
		? (sq07.style.backgroundColor = 'darkblue')
		: (sq07.style.backgroundColor = 'darkred');
	k > 10 ? clearInterval(toggleColor) : k++;
}, 250);

// Selecting elements by specifying an TAG

let divs = document.getElementsByTagName('div');

setTimeout(() => {
	for (let d = 0; d < divs.length; d++) {
		divs[d].style.border = '2px solid white';
	}
}, 3000);

// Selecting elements by specifying an CLASS

let squares = document.getElementsByClassName('square');

setTimeout(() => {
	for (let s = 0; s < squares.length; s++) {
		squares[s].innerHTML = `sq${s}`;
	}
}, 4000);

// Selecting elements using CSS selectors

let pieces = document.querySelectorAll('div:nth-last-of-type(3n+1)'); // returns an array of elements

setTimeout(() => {
	for (let p = 0; p < pieces.length; p++) {
		pieces[p].style.backgroundColor = 'cornflowerblue';
	}
}, 1500);

let onePiece = document.querySelector('div:nth-child(2)'); // returns a single element

setTimeout(() => {
	onePiece.style.backgroundColor = 'darkgreen';
}, 2400);
