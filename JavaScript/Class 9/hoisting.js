// console.log(a); // undefined
// printName("Sadab"); // undefined

const a = 4;

const printName = function printName(name) {
  console.log("My Name is ", name);
};

console.log(a); // 4
printName("Sadab"); // My Name is Sadab

//IIFE

// Let, Const are solving hoisting problem
/**
 * when you declare variable with let & const
 * so those variable will not be accessible before intialization and
 * at this moment they will be in a temporal dead zone
 */
