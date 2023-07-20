// find
// returns single instance - (in this case object)
// returns first match, if no match undefined
// great for getting unique value

const people = [
  { name: 'bob', age: 20, position: 'developer', id: 1 },
  { name: 'peter', age: 25, position: 'designer', id: 2 },
  { name: 'susy', age: 30, position: 'the boss', id: 3 },
  { name: 'anna', age: 35, position: 'the boss', id: 4 },
];
const names = ['bob', 'peter', 'susy'];
console.log(
  names.find(function (name) {
    return name === 'zelda';
  })
);

const person = people.find(function (person) {
  return person.id === 3;
});

console.log(person.name);


//filter returns an array of elements which satisfy the condition
//while find returns first instance of object which satisfy the conditon
const person2 = people.filter(function (person) {
  return person.id === 3;
});

console.log(person2[0].name);
