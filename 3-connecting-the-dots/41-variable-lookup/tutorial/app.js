// Variable Lookup - the js looks for variable in local scope first then moves to globally
// {} - code block

const globalNumber = 5;

function add(num1, num2) {
  // const globalNumber = 20; //local
  const result = num1 + num2 + globalNumber;
  function multiply() {
    // const globalNumber = 100;
    const multiplyResult = result * globalNumber; // result is accessible to inner functions
    console.log(multiplyResult);
  }
  console.log(multiplyResult);

  multiply();
  return result;
}

console.log(add(3, 4));
