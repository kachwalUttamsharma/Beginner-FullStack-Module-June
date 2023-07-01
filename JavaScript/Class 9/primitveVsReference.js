const a = 10;
let b = a;
b = 20;

console.log(a);
console.log(b);

const obj = { name: "sindhu", lastName: "penmetsa" };
const obj1 = { ...obj }; // spread
obj1.name = "chandra";

// for in loop
for (let key in obj) {
  console.log(key, obj.key);
}

console.log(obj);
console.log(obj1);

let arr = [1, 2, 3];
let arr1 = [...arr]; // spread
arr1 = [5, 6, 7];

console.log(arr);
console.log(arr1);
