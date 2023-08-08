// let hello = "Hello";
// let hello2 = "Hello 2";

// console.log(hello);

// for(let i=0; i<10000000000; i++) {
//     // fethcing data from server
// }

// console.log(hello2); // blocking in nature

// Async
// non blocking in nature

let hello3 = "Hello 3";
let hello4 = "Hello 4";
let hello5 = "Hello 5";
let hello6 = "Hello 6";

console.log(hello3);
console.log(hello4);

setTimeout(function() {
    console.log(hello5);
}, 0);

console.log(hello6);