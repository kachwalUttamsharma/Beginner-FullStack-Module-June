const myArr = [1, 2, 3, 4, 5];

// result arr -> [1,4,9,16,25]
const calculateSquare = (myArr) => {
  let result = [];

  for (let i = 0; i < myArr.length; i++) {
    result.push(myArr[i] * myArr[i]);
  }
  return result;
};

const result = calculateSquare(myArr);
console.log(result);

// Map -> its an HOF
// it is used when you want to do common operation on all elements of arr
// and it will not change the original array but will return new array

const squaredValue = myArr.map((number, index) => {
  console.log(index, number);
  return number * number;
});

console.log(squaredValue);
console.log(squaredValue === myArr);

const arrOfCurrency = [200, 2300, 1500, 4000, 5000];

// convert them into dollar
const inrToUsd = 82;

function convertIntoDollar(val) {
  return val / inrToUsd;
}
const res = arrOfCurrency.map(convertIntoDollar(val));
console.log(res);
