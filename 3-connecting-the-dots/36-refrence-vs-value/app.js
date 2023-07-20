// Reference vs Value
// Primitive Data Types
// String, number, boolean, undefined, null, symbol
// Arrays, functions, Objects = object
// typeof operator

// when assigning primitive data type value to a variable any
// changes are made directly to that value, without affecting
// original value

// when assigning non-primitive data type value to a variable
// is done by reference so any changes will affect all the
// references

let a = 2;
let b = a;
console.log(`${b} and ${a}`);
b = 6;
console.log(`${b} and ${a}`);

let arr = [2,3,4,5];
let arr2 = arr;
console.log(`${arr} and ${arr2}`);
arr2[0] = 1;
// made chnages to only arr2 but changes are reflected in arr also
console.log(`${arr} and ${arr2}`);