//functions - peice of code which can be reused
// parameters - placeholders or local variables
// ~ params are used in function declaration/definition
//arguments - when invoking or callng a function


// function declaration
function greet(wish, name) {
    console.log("Good "+wish+" "+ name);
}


// function invoke
greet("Morning");
greet("Afternoon","virat");
greet("Evening", "kohli");
greet(); // dont pass any argument


let a = "luck";
greet(a,"nousheen ");


// return statements
// by default the functions return undefined, when we dont have return statement
// the code after return statement is not executed

function rupees(dollars) {
    console.log("1 dollar is 82.16 rupees");
    return (dollars*82.16).toFixed(2);
}

const pants = parseFloat(rupees(250));
const shirt = parseFloat(rupees(30));
const shoes = parseFloat(rupees(250));

const cost = [pants, shirt, shoes];
console.log(cost[0]+cost[1]+cost[2]);


// function expressions 
// ~ we assingn a function to a variable
// ~ while calling that function we can use variable name

//anonymous functions
var add = function(num1 , num2) {
    return num1 + num2;
}
console.log(add(2, 2));

// arrow functions 
var multiply = (num1, num2)=> num1*num2;
console.log(multiply(2,3));