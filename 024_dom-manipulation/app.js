// 'use strict';

// CHANGING THE DOM IN TWO STEPS

// 1) Select the DOM element
// 2) Change properties of the selected element

// METHODS FOR SELECTING ELEMENTS

// 1) Selecting with the dot syntax
// 2) Selecting by specifying an ID
// 3) Selecting by specifying an TAG
// 4) Selecting by specifying an CLASS
// 5) Selecting using CSS selectors
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
}, 1000);

let j = 0;
let toggle2 = setInterval(() => {
	console.log(j);
	toggleImg(docImgs, 1);
	j > 5 ? clearInterval(toggle2) : j++;
}, 1000);
