'use strict';

// ...continued from previous exercise
// SELECTING FORM ELEMENTS BY NAME ATTRIBUTE

// use the name attribute in the form element to select an array of elements that match the search query

let firstNameNode = document.getElementsByName('first-name'); // returns an array

// Just as you can retrieve a value inside an input field, you can also set or edit that field with the '.value' property

document.getElementsByName('first-name')[0].value = 'Amanda';

// Some form fields are selectable directly with dot notation:

// 1) Select the document
// 2) Select the form by name attribute (ex: 'player')
// 3) Select the field by name attribute (ex: 'email', or 'subscribe')
// 4) Select the field's property to work with (ex: 'value')

// NOTE: the names used can be found in the HTML document

document.player.email.value = 'mau@rice.com'; // sets the email field
document.player.subscribe.value = 'no'; // sets the radio field
document.player.whereFrom.value = 'dndbeyond'; // sets the options field;

// To check all properties you can work with:

console.dir(document.player.whereFrom);
