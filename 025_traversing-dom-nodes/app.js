'use strict';

// JAVASCRIPT COMMANDS FOR TRAVERSING THE DOM

/*

.parentNode
.childNodes
.firstChild
.lastChild
.nextSibling
.previousSibling

*/

let node = document.querySelector('.list');
console.log(node); // logs ul element with class='list'

console.log(node.parentNode); // logs div element with class='content'
console.log(node.childNodes); // logs an array of children li's and #text nodes
console.log(node.nextSibling); // logs a #text node

// What are #text nodes?

/*

Everything in an HTML document is converted into a node. EVERYTHING!

This means all its elements, all its tags, and all text between each tag, even text outside elements (meaning text after an element's closing tag and before the next element's opening tag).

Go to the console and open the #text node printed by the command 'console.log(node.nextSibling)' by clicking in the arrow to its left.
Notice the property '.nodeValue'.
It has a value of a carriage return symbol.
This means exacly that:
 => After the closing 'ul.list' tag, there is a carriage return that jumps to the next line of code, where the closing 'div.content' tag is.

*/

let newNode = document.querySelector('.listItem:nth-child(3)');
console.log(newNode); // logs list item 3 node
console.log(newNode.nextSibling); // logs #text node, as expected

// But you can keep traversing the DOM with dot syntax
console.log(newNode.nextSibling.nextSibling); // logs list item 4 node
console.log(newNode.nextSibling.nextSibling.nextSibling); // #text node

// ...and so on.

console.log('===========================');

/*

.nodeType
.nodeName
.attributes
.nodeValue

*/

// Every node has a type, and the .nodeType property returns a number that defines it:

// Most common types are:
// 1 for element nodes
// 2 for attribute nodes
// 3 for text nodes

let sq05 = document.querySelector('#sq05');

console.log(sq05.nodeType); // logs 1

// The .nodeName property returns the element's tag name in UPPERCASE

console.log(sq05.nodeName); // logs 'DIV'

// If .nodeName is called in a #text node, it returns #text

console.log(node.nextSibling.nodeName); // logs #text

// the .attributes property returns an attribute node in form of a Map object (iterable key-value pairs) that contain the element's attributes (ex: id, class, name, src, href, etc.) and its respective values

console.log(sq05.attributes); // logs a Map object with class="square" and id="sq05"

// the .nodeValue property returns:
// 1) 'null' if it's called on an element node
// 2) an attribute's value if it's called on an attribute node
// 2) the text content, if it's a #text node

console.log(sq05.nodeValue); // logs 'null'

console.log(sq05.attributes[0].nodeValue); // logs the value of 'class' attribute
console.log(sq05.attributes[1].nodeValue); // logs the value of 'id' attribute

// IMPORTANT CONCEPT:

// When you have a node that is derived from an HTML element, its child node is a #text node that contains the contents of that element

console.log(sq05.childNodes);

// If you use '.firstChild' on an element that contains text between its opening and closing tags, it will return a #text node with a value equal to the text between the tags

console.log(sq05.firstChild); // logs #text with nodeValue: '005'

// Or you can access the text value directly

console.log(sq05.firstChild.nodeValue); // logs '005'

// And you can use that to change the text inside the element:

sq05.firstChild.nodeValue = 'HEY!';
console.log(sq05.firstChild.nodeValue); // logs 'HEY!'

// You can also change an attribute

sq05.attributes[0].nodeValue = 'square blueSquare'; // adds the blueSquare class to the 'sq05' div

let squares = document.querySelector('.squares:nth-child(3)');

let sqList = squares.childNodes;

// Change background color of squares after 2 seconds

setTimeout(() => {
	for (let i = 0; i < sqList.length; i++) {
		if (sqList[i].nodeType === 1) {
			sqList[i].style.backgroundColor = 'olive';
		}
	}
}, 2500);
