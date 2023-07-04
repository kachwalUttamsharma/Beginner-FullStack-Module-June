/**
 * Destructing  -> It helps to unpack array or
 * object into different variables
 */

const arr = [1, 23, 34, "uttam", "sharma"];

// a = 5, b= 3
// a = 3, b= 5

// swapping 2 numbers
// const arr1 = [5, 3];
// let a = arr1[1];
// let b = arr1[0];

const [b, a] = [5, 3];
console.log("b: ", b);
console.log("a: ", a);

// assign variable from objects
const obj = { x: 3.6, y: 7.4, z: 6.54 };

// const x = obj.x
// const y = obj.y
// const z = obj.z

const { x: x1, y: y1, z: z1 } = obj;
console.log(x1, y1, z1);

// Assign variables from nested objects
const nest = {
  start: { x: 5, y: 6 },
  end: { x: 6, y: -9 },
};

const {
  start: { x: startX, y: startY },
} = nest;

console.log(startX);

// put all reamining element into rest arr
const [p, q, , , ...z] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(z);
