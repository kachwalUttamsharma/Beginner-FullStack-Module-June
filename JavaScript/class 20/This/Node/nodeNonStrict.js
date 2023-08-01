// points to empty object
// console.log(this);

// This inside function
// function test() {
//     console.log(this); // this is pointing to some object
// }

// test();

// This keyword inside the object

// let obj = {
//     name: "adam",
//     age: "32",
//     getPrintInfo: function() {
//         console.log(this.name, " ", this.age);
//     }
// }

// obj.getPrintInfo();

// This keyword from a function that is insdie a function inside an object

let obj2 = {
    name: "steve",
    age: "26",
    testFunction: function f() {
        function g() {
            console.log(this);
        }
        g();
    }
}

obj2.testFunction();