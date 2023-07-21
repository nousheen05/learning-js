// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// getElementsByClassName('classname');

// it returns a node-list =  array-like object
// index, length propertyv works on node list but not array methods

const listItems = document.getElementsByClassName('special');
listItems[1].style.color = 'blue';
