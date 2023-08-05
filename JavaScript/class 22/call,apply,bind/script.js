
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

function getFullInfo(city, school, modeOfTravel) {
    console.log("this keyword", this);
    console.log("My Name is", this.firstname, this.lastname, 
    "and I learn/teach ", this.subject);
    console.log("school name", school, "city", city, "mode of travel", modeOfTravel);
}
let Student = {
    firstname: "chandra",
    lastname: "sekhar",
    subject: "history",

}

let Teacher = {
    firstname: "Anshuman",
    lastname: "Singh",
    subject: "HLD"
}
let arr = ["Hyderabad", "Scaler Tech", "Bike"];

console.log(getFullInfo.call(Teacher, arr[0], arr[1], arr[3]));
console.log(getFullInfo.apply(Student, arr));
const TeacherInfo = getFullInfo.bind(Teacher, arr[0], arr[1], arr[2]);
console.log(TeacherInfo);
TeacherInfo();
