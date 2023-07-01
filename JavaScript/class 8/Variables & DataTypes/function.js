/**
 * Function Statement, Function Declaration
 * Function Expression
 * Anonymous Function
 * Named Function Expression
 * Parameter vs Arguments
 * Frist class Functions vs Frist Class Citizen
 * Arrow Function
 */

// Function Statement, Function Declaration
// this function will accept following parameters
function SayHi(from, to) {
  return `${from} greeting hi to ${to}`;
}

//Function invocation
console.log(SayHi("shruthi", "Sadab")); // passing arguments into function

//Function Expression
// anonymous function is a function which does not have a name

const sayHiExpression = function () {
  console.log("uttam is Greeting All");
};
// Named Function Expression
const sayHiExpression1 = function xyz() {
  console.log("uttam is Greeting All from xyz");
};
console.log(sayHiExpression());
console.log(sayHiExpression1());

// Arrow Function
const sayHiFromArrow = () => {
  console.log("Gaurangi is Greeting from Arrow Function");
};

console.log(sayHiFromArrow());

// In javascript function cas be used as methods and as variables and can be passed as
// argument into function and can also return function

const hello = () => {
  return "Say Hello";
};

const HelloWorld = (param) => {
  return param;
};

const part1 = HelloWorld(hello);

part1();

console.log(HelloWorld(hello)());
