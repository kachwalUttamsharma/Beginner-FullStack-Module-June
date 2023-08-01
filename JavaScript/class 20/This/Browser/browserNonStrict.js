//console.log(this);

// function test() {
//     console.log(this);
// }

// test();

// let obj = {
//     name: "adam",
//     age: "26",
//     getFullInfo: function () {
//         console.log(this.name + " "+ this.age);
//         console.log(this);
//     }
// }

// obj.getFullInfo();

let obj2 = {
    name: "steve",
    age: "32",
    testFunction: function f() {
        function g() {
            console.log(this);
        }
        g();
    }
}

obj2.testFunction();