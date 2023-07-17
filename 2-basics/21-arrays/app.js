// arrays - objects, used to store list of items
// 0 based indexing []

const fruits = ['apple', 'orange', 'banana', 33, null, undefined];

console.log(fruits);
console.log(fruits[0]);

fruits[0] = 'blueberrys';
console.log(fruits[0]);
console.log(fruits);

let fruit = fruits[1];
console.log(fruit);

//tip: we cannot reassign array reference
// to a different array
//fruits = ['orange', 'mango'];