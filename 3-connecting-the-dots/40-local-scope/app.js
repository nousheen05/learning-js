// Local Scope
// can not be access from outside code blocks(functions, if-else, normal{})
// if block/normal block{} - DoNOT use VAR(it becomes global)

let name = 'bobo';

function calculate() {
  let name = 'john';
  const age = 25;
  // code goes here

  // if we dont use any keyword for variable,it takes as global scope
  becomesGlobal = 'global variable';
}

calculate();
console.log(becomesGlobal); // runs without an error
console.log(name); // global variable

if (true) {
  const name = 'john';
}

{
  const name = 'john';
  const special = 'special';
}
console.log(special); // error

console.log(`my name is ${name} and I'm awesome`);
