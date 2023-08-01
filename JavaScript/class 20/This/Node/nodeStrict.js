'use strict'

// simple console log
//console.log(this);

// This is inside function

// function Test() {
//     console.log(this);
// }

// Test();

// This keyword from a function inside an object

// let obj = {
//     name: "Adam",
//     age: "26",
//     getFullInfo: function() {
//         console.log(this.name + " "+ this.age);
//     }
// }

// obj.getFullInfo();

// This keyword from a function that is insdie a function inside an object

let obj2 = {
    name: "Steve",
    age: "32",
    testFunction: function f() {
        function g() {
            console.log(this);
        }
        g();
    }
}

obj2.testFunction();