// map
// does return a new array and size will be same as original array
// does not change size of original array
// uses values from original array when making new one

const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'the boss' },
];

const ages = people.map(function (person) {
  return person.age + 20;
});
console.log(ages);

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 20,
  };
});
console.log(newPeople);

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

document.body.innerHTML = names.join('');

console.log(names);
