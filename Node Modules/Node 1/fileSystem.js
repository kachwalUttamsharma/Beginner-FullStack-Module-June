const fs = require('fs');

// Read, Create, Update, Delete

// read
const content = fs.readFileSync('file1.txt');

// explicity converting
console.log(content.toString());
// implicity converting
console.log("content of first 1 " + content);

// write
try {
    fs.writeFileSync('file2.txt', 'This is the content of file2');
    console.log('data is entered into file 2');
} catch(err) {
    console.log(err);
}

// update or append a file
try {
    fs.writeFileSync('file3.txt', 'This is the content for file 3 ');
    console.log('data is entered into file 3');
    fs.appendFileSync('file3.txt', 'This is updated data for file 3');
    console.log('data updated into file 3');
} catch(err) {
    console.log(err);
}


// delete

try {
    fs.unlinkSync('file3.txt');
    console.log('file3 is deleted');
    fs.writeFileSync('file3.txt', 'This is the content for file 3 ');
    console.log('data is entered into file 3');
    fs.appendFileSync('file3.txt', 'This is updated data for file 3');
    console.log('data updated into file 3');
} catch(err) {
    console.log(err);
}


// readfilesync, writefilesync, appendfilesync, unlinksync

// creating directories and manipulating them