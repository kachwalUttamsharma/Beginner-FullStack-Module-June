
// let Student = {
//     firstname: "chandra",
//     lastname: "sekhar",
//     subject: "history",
//     getFullInfo: function() {
//         console.log("My Name is", this.firstname, this.lastname, 
//         "and I learn/teach ", this.subject)
//     }
// }

// let Teacher = {
//     firstname: "Anshuman",
//     lastname: "Singh",
//     subject: "HLD",
//     getFullInfo: function() {
//         console.log("My Name is", this.firstname, this.lastname, 
//         "and I learn/teach ", this.subject)
//     }
// }

// console.log(Teacher.getFullInfo());

function getFullInfo() {
    console.log("My Name is", this.firstname, this.lastname, 
    "and I learn/teach ", this.subject)
}
let Student = {
    firstname: "chandra",
    lastname: "sekhar",
    subject: "history",
    getFullInfo: getFullInfo(this)
}

let Teacher = {
    firstname: "Anshuman",
    lastname: "Singh",
    subject: "HLD",
    getFullInfo: getFullInfo(this)
}

console.log(Teacher.getFullInfo);