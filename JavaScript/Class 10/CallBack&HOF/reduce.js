// it reduces arr of inputs into 1 output

// sum of elements of array -> input as list of elements but output
// would be sum

const arr = [3, 7, 8, 2];

function sumOfAllElements(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

const totalSum = arr.reduce((result, number) => {
  console.log("previous value : ", result);
  result += number;
  return result;
}, 0);

// console.log(totalSum);

const person = [
  { firstName: "Pravina", lastName: "R", age: "25" },
  { firstName: "Chandra", lastName: "Sekhar", age: "23" },
  { firstName: "uttam", lastName: "sharma", age: "26" },
  { firstName: "areeb", lastName: "khan", age: "25" },
];

// output {25: 2, 23: 1, 26: 1}
// const obj = {
//   25: 2,
//   23: 1,
//   26: 1,
// };

// const groupByAge = person.reduce((acc, it) => {
//   const age = it.age;
//   acc[age] = acc[age] + 1 || 1;
//   return acc;
// }, {});

const res = person.reduce((accum, obj) => {
  const age = obj.age;
  if (accum[age]) {
    accum[age]++;
  } else {
    accum[age] = 1;
  }
  return accum;
}, {});
console.log(typeof res);
console.log(res);

const res1 = person.filter((num) => {
  return num.age > 25;
});

console.log(res1);
