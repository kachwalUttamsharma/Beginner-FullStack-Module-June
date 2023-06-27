/* Numbers  where you can store +ve, -ve, decimals (float & double) */
const a = 10;
const b = -10;
const c = 10.001;
const d = -10.001;

/* string can store character or group of character */
const e = "a";
const f = "abcd";

/* boolean can store true or false */
const g = true;
const h = false;

// for single line comment
// multi line /* */

// null -> empty
const i = null;

// undefined ->
// creating a vairble goes through  2 steps
// you declare a variable -> default value is assigned which is undefined
// then you intialize it ->

let name = "uttam";
//  ----- browser does as below
let name1;
// never do  this in actual code
name1 = undefined;
name1 = "uttam";

// reference types

// array
// collection of values which can store different data types

const arr = [1, 2, 3, 4, 5];
const arr1 = [1, "uttam", false];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// objects - custom datatype where you can put multiple different information using
// different data types

const person = {
  firstName: "rama",
  lastName: "krishna",
  phoneNumber: "894#####",
  age: 20,
};

console.log(person.firstName);

// functions - create a function when you want to do specific task

// (---) parameter
// {----} function body
function bevarageNescafeMachine(drink, quantity) {
  return `I need ${quantity} ${drink}`;
}

console.log(bevarageNescafeMachine("coffee", 4));
console.log(bevarageNescafeMachine("tea", 2));
