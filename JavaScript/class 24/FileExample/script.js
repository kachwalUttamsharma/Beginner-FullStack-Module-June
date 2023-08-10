const fs = require("fs");

// fs.readFile('f1.txt', cb);

// function cb(err, data) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// }
const readFileCallbackForSucess = (data) => console.log('This is file data ', data.toString());
const readFileCallbackForError = (data) => console.log('This is my error ', data.toString());
const readFile = (filePath) => fs.promises.readFile(filePath);

console.log("before");

const f1promise = readFile("f1.txt");
f1promise.then(readFileCallbackForSucess).catch(readFileCallbackForError);


const f2promise = readFile("f2.txt");
f2promise.then(readFileCallbackForSucess).catch(readFileCallbackForError);


const f3promise = readFile("f3.txt");
f3promise.then(readFileCallbackForSucess).catch(readFileCallbackForError);

console.log("after")
