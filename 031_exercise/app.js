let tableObj = {
	methodHead: 'Method',
	descHead: 'Description',
	methods: [
		'getElementById()',
		'getElementsByTagName()',
		'getElementsByClassName()',
		'querySelector()',
		'querySelectorAll()'
	],
	descriptions: [
		"Selects the first element it encounters with the ID you enter. The ID is entered as a string. (e.g. document.getElementById('content');) This method will return a single node.",
		"Selects all the elements in the DOM for the tag you enter. The tag value is entered as a string. (e.g. document.getElementsByTagName('li');) This method returns an array of all the matching nodes.",
		"Selects all the elements in the DOM that is assigned the class that you enter. The class name should be expressed as a string. (e.g. document.getElementById('li');) This method returns an array of all the matching nodes.",
		"Selects the first element in the DOM that matches the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelector('#content li');) This method returns the first element that matches the criteria.",
		"Selects all the elements in the DOM that match the criteria you enter. You can use any CSS selector as the criteria. This method is very powerful for those that know CSS selectors. The CSS selector is entered as a string. (e.g. document.querySelectorAll('#content li');) This method returns an array of all elements that match the criteria."
	]
};

// Selecting the table

let tableHead = document.querySelector('#table > table > thead').children;
console.log(tableHead);

let tableBody = document.querySelector('#table > table > tbody').children;
console.log(tableBody);

// Adding the titles

let headCells = tableHead[0].children;

headCells[0].innerHTML = tableObj.methodHead;
headCells[1].innerHTML = tableObj.descHead;

// Filling the method column

let colMethod = [];

for (let i = 0; i < tableBody.length; i++) {
	colMethod.push(tableBody[i].firstElementChild); // select the Method column
	colMethod[i].innerHTML = tableObj.methods[i]; // fill the data
}

// Filling the description column

let colDesc = [];

for (let i = 0; i < tableBody.length; i++) {
	colDesc.push(tableBody[i].lastElementChild); // select the Description column
	colDesc[i].innerHTML = tableObj.descriptions[i]; // fill the data
}
