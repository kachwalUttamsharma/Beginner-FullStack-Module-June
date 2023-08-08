const fs = require('fs');

console.log("before");

function readFileCallback1(err, data) {
    if(err) {
        console.log(err);
    } else {
        console.log(data.toString());
        fs.readFile('f2.txt',readFileCallback2);
    } 
}

function readFileCallback2(err, data) {
    if(err) {
        console.log(err, data);
    } else {
        console.log(data.toString());
        fs.readFile('f3.txt',readFileCallback3);
    } 
}
function readFileCallback3(err, data) {
    if(err) {
        console.log(err, data);
    } else {
        console.log(data.toString());
    } 
}
fs.readFile('f1.txt', readFileCallback1);

console.log("after");
