const arr = [2, 3, 4, 5, 6];

// push method (to ad new item into arr)
arr.push(7);
arr.push(8);
// pop method (to remove any item from arr)
arr.pop();

// to find length of array
// console.log(arr.length);
// console.log(arr);

// unshift is used to add item at the start
arr.unshift(0);
// console.log("unshifting 0", arr);
arr.unshift(1);
// console.log("unshifting 1", arr);
// shift is used to remove first item from the array [0]
arr.shift();
// console.log("using shift", arr);

// slice is used slice an array from the index given
const arr1 = [
  "uttam",
  "sharma",
  "jyothi sharma",
  "rama krishna",
  "shadab",
  "sindhu",
  "Chandra",
];
const arr2 = arr1.slice(2, 6);
// console.log(arr2);

arr.forEach((i) => {
  console.log(i);
});
