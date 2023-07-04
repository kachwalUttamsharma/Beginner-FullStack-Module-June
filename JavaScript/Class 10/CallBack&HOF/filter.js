// Filter - Filter is a HOF which will work based on condition and
// will only have values insde the array fpr which condition
// is satisfied

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const evenArr = arr.filter((num) => {
  return num % 2 == 0;
});

const oddArr = arr.filter((num) => {
  return num % 2 != 0;
});

const greterThan10 = arr.filter((num) => {
  return num > 10;
});
console.log("even arr", evenArr);
console.log("odd arr", oddArr);
console.log("greater than 10", greterThan10);
