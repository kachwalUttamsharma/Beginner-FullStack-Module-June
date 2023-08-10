const fs = require("fs");
const readFileCallbackForSucess = (data) => console.log('This is file data ', data.toString());
const readFileCallbackForError = (data) => console.log('This is my error ', data.toString());
const readFile = (filePath) => fs.promises.readFile(filePath);

const f1promise = readFile("f1.txt");

f1promise.then((data) => {
    readFileCallbackForSucess(data);
    return readFile("f2.txt");
}).then((data) => {
    readFileCallbackForSucess(data);
    return readFile("f3.txt");
}).then((data) => {
    readFileCallbackForSucess(data);
}).catch((err) => readFileCallbackForError(err));