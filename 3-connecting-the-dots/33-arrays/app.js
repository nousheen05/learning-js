// arrays propeties and methods

let fruits = ['mango','banana','orange'];

//length
console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

//concat
let colors = ['blue', 'yellow','black'];
let newArr = fruits.concat(colors);
console.log(newArr);

//reverse
console.log(newArr.reverse());

//unshift - adds element to starting of array
//shift - removes element from starting of array
//push, pop

// newArr.unshift('white');
// console.log(newArr);

// newArr.shift();
// console.log(newArr);


// newArr.push('white');
// console.log(newArr);

// newArr.pop();
// console.log(newArr);


//splice - mutates original array(it removes elements from original array)
let a1 = newArr.splice(0, 3); //0-start index,3-count of elements
console.log(a1);
console.log(newArr);

//slice - do not change the orginal array
let a2 = newArr.slice(0, 1);
console.log(a2);
console.log(newArr);


