'use strict';

// CREATING NEW NODES AND ADDING THEM TO THE HTML DOCUMENT

/*

let existingNode = document.querySelector('someElementSelector')

let createdNode = document.createElement(tagName);
let textNode = document.createTextNode(text);

createdNode.appendChild(textNode);
existingNode.appendChild(createdNode);
or...
existingNode.insertBefore(createdNode);

*/

let liNew = document.createElement('li');
liNew.setAttribute('class', 'listItem');
console.log(liNew);

let liText = document.createTextNode('List item 6');
liNew.appendChild(liText);
console.log(liNew);

let fullList = document.querySelector('.list');
fullList.appendChild(liNew);

// Insert Before

let divNew = document.createElement('div');
divNew.setAttribute('class', 'square blueSquare');
divNew.appendChild(document.createTextNode('New Div'));

let parentSquare = document.querySelector('.squares:nth-child(3)');
let sq11 = document.querySelector(
	'.squares:nth-child(3) > .square:nth-last-child(2)'
);

setTimeout(() => {
	parentSquare.insertBefore(divNew, sq11);
}, 2500);
