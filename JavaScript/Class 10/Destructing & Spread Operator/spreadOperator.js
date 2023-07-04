const arr = [1, 2, 3, 4, 5];

// shadow clone
const arr1 = [...arr];
const arr2 = arr.slice();
const arr3 = arr;
// console.log(arr === arr1, arr2 === arr, arr3 === arr);
// console.log(arr1, arr2, arr3, arr);

// arr -> x987
//
// difference between == and ===

const a = 10;
const b = "10";

// console.log(a == b);
// console.log(typeof a, typeof b);
// console.log(a === b);

const p = [1, 2, 3];
const q = [4, 5, 6];

// contatinate both arrays
const r = p.concat(q);
const s = [...p, ...q];

console.log(r);
console.log(s);
