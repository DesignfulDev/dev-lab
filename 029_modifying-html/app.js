'use strict';

// TECHNIQUES FOR MODIFYING HTML

/*

let node = document.querySelector('someElementSelector')

node.innerHTML;
node.outerHTML;
node.insertAdjacentHTML('location', 'stringToInsert');
	There are 04 possible values for 'location':
	1) beforebegin: inserts HTML before the opening tag of 'node';
	2) afterbegin: inserts HTML after the opening tag of 'node';
	3) beforeend: inserts HTML before the closing tag of 'node';
	4) afterend: inserts HTML after the closing tag of 'node';

*/

// .innerHTML returns, as a string, the text between the targeted element's opening and closing tags, exclusive.

let item2 = document.querySelector('.listItem:nth-child(2)');
console.log(item2.innerHTML);

// But it returns the entire text, including tags that might exist inside the targeted element.

let item3 = document.querySelector('.listItem:nth-child(3)');
console.log(item3.innerHTML); // includes 'span' tags

// .outerHTML does the same as .innerHTML, but it includes the target element's opening and closing tags

console.log(item3.outerHTML); // includes 'li' tags - and its attributes.

// You can use this to change the HTML

// But you have to include all child tags that you want inside the element

setTimeout(() => {
	item3.innerHTML =
		'This <span class="item-span">list item</span> was <strong>changed</strong>';
}, 1500);

// insert text or HTML code relative to a node with '.insertAdjacentHTML'

setTimeout(() => {
	item2.insertAdjacentHTML('afterbegin', 'added ');
}, 2500);

setTimeout(() => {
	item2.insertAdjacentHTML('beforeend', ' added');
}, 3500);

setTimeout(() => {
	item2.insertAdjacentHTML(
		'beforebegin',
		'<li class="listItem">added list item</li>'
	);
}, 4500);

setTimeout(() => {
	item3.insertAdjacentHTML(
		'afterend',
		'<li class="listItem">added <span class="item-span">list item</span></li>'
	);
}, 5500);
