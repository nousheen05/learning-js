// Select the element or group of elements the we want
// Decide the effect we want to apply to the selection

// querySelector('any css(selecting)'); - selects single
// querySelectorAll('any css') - selects all

const result = document.querySelector('#result');
result.style.backgroundColor = 'blue';

const item = document.querySelector('.special');
// console.log(item);

const lastItem = document.querySelector('li:last-child');
// console.log(lastItem);

const list = document.querySelectorAll('.special');


// we can use array methods too
list.forEach(function(item) {
  console.log(item);
  item.style.color = 'yellow';
});
