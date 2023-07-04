// function printFirstName(name) {
//   console.log(name);
// }

// function printLastName(name) {
//   console.log(name);
// }

// // DRY - Dont repeat yourself
// const printFullName = `${printFirstName("uttam")} ${printLastName("sharma")}`;

// console.log(printFullName);

//A callback function is a function passed into another function as an argument,
//which is then invoked inside the outer function to complete some sort action.

//Any function that takes in a function or returns one out is a higher-order function

// printfulname is higher order function
// printname is callback function
// const printFullName = (name, callbackFunc) => {
//   console.log(callbackFunc(name));
// };

// const printName = (name) => {
//   return name;
// };

// const res = `${printFullName("uttam", printName)} ${printFullName(
//   "sharma",
//   printName
// )}`;

// console.log(res);

//------------------------------------------------------------------------

// version 1
const myRadiusArr = [2, 3, 4, 5, 6];

// to define area, circumference, and diameter for all of these numbers (circle)
// area - > pie(3.14) *r*r
// circumference -> 2*pie*r
// diamter -> 2*r

const calculateArea = (myRadiusArr) => {
  let result = [];

  for (let i = 0; i < myRadiusArr.length; i++) {
    result.push(Math.PI * myRadiusArr[i] * myRadiusArr[i]);
  }
  return result;
};

const calculateCircumference = (myRadiusArr) => {
  let result = [];

  for (let i = 0; i < myRadiusArr.length; i++) {
    result.push(2 * Math.PI * myRadiusArr[i]);
  }
  return result;
};

const calculateDiameter = (myRadiusArr) => {
  let result = [];

  for (let i = 0; i < myRadiusArr.length; i++) {
    result.push(2 * myRadiusArr[i]);
  }
  return result;
};

const diameter = calculateDiameter(myRadiusArr);
const circumference = calculateCircumference(myRadiusArr);
const area = calculateArea(myRadiusArr);

console.log("diameter :", diameter);
console.log("circumference :", circumference);
console.log("area : ", area);

// ---------------------------------------------------------

// version using callback and HOF

function circleAreaFn(radius) {
  return Math.PI * radius * radius; // 12..
} // logic for area

function circleCircumferenceFn(radius) {
  return 2 * Math.PI * radius;
}

function circleDiameterFn(radius) {
  return 2 * radius;
}

function calculate(radiusArr, formulae) {
  let result = [];

  for (let i = 0; i < radiusArr.length; i++) {
    result.push(formulae(radiusArr[i]));
  }
  return result;
}

let finalAreas = calculate(myRadiusArr, circleAreaFn);
let finalCircumferences = calculate(myRadiusArr, circleCircumferenceFn);
let finaldiameter = calculate(myRadiusArr, circleDiameterFn);

console.log("This is Area Array -> ", finalAreas);
console.log("This is Circumference Array -> ", finalCircumferences);
console.log("This is Diamter Array -> ", finaldiameter);
