// reduce
// to "reduce" an array into a single value
// iterates through original array, callback function
// reduces to a single value - it can be a  number, array, object
// syntax:
// array.reduce(callback(accumulator, currentValue), initialValue);
// 1 parameter ('acc') - accumulator: The value accumulated so far (starts with initialValue if provided).
// 2 parameter ('curr') - current iteration/value
// 3 initialValue: An optional initial value for the accumulator. 
//   If not provided, the first element of the array will be used as the initial accumulator value.


const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1, salary: 200 },
  { name: 'peter', age: 25, position: 'designer', id: 2, salary: 300 },
  { name: 'susy', age: 30, position: 'the boss', id: 3, salary: 500 },
  { name: 'anna', age: 35, position: 'the boss', id: 4, salary: 500 },
];

const total = people.reduce(function (acc, currItem) {
  console.log(`total ${acc}`);
  console.log(`current money : ${currItem.salary}`);
  acc += currItem.salary;
  return acc;
}, 500); // here 500 denotes initial value of accumulator

console.log(total);
