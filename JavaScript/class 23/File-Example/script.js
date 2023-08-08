// read data from file and console log it
const fs = require('fs');

// synchronous way

// console.log("before 1");

// let data1 = fs.readFileSync('f1.txt');
// let data2 = fs.readFileSync('f2.txt');
// let data3 = fs.readFileSync('f3.txt');

// console.log('data from 2 : ', data1);
// console.log('data from 3 : ', data2);
// console.log('data from 4 : ', data3);

// console.log("after 5");

// Async way

console.log("before");

function readFileCallback1(err, data) {
    if(err) {
        console.log(err, data);
    } else {
        console.log("1");
        console.log(data);
    } 
}

function readFileCallback2(err, data) {
    if(err) {
        console.log(err, data);
    } else {
        console.log("2");
        console.log(data);
    } 
}
function readFileCallback3(err, data) {
    if(err) {
        console.log(err, data);
    } else {
        console.log("3");
        console.log(data);
    } 
}
fs.readFile('f1.txt', readFileCallback1);
fs.readFile('f2.txt',readFileCallback2);
fs.readFile('f3.txt',readFileCallback3);

console.log("after");

