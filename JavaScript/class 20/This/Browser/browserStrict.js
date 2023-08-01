'use strict'

//console.log(this);

// function test() {
//     console.log(this);
// }

// test();

// let obj = {
//     name: "adam",
//     age: "32",
//     getFullInfo: function() {
//         console.log(this.name + " "+this.age);
//     }
// }

// obj.getFullInfo();

let obj2 = {
    name: "steve",
    age: "26",
    testFunc: function f() {
        function g() {
            console.log(this);
        }
        g();
    }
}

obj2.testFunc();