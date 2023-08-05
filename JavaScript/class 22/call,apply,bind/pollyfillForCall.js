Function.prototype.myCall = function(thisContext, ...args) {
    let currentContext = thisContext || this;
    let randomProp = Math.random();
    while( currentContext[randomProp] !== undefined ){
        randomProp = Math.random();
    }
    currentContext[randomProp] = this;
    let result = currentContext[randomProp](...args);
    delete currentContext[randomProp];
    return result;
}

let Student = {
    firstname: "chandra",
    lastname: "sekhar",
    subject: "history",

}

function getFullInfo(city, school, modeOfTravel) {
    console.log("this keyword", this);
    console.log("My Name is", this.firstname, this.lastname, 
    "and I learn/teach ", this.subject);
    console.log("school name", school, "city", city, "mode of travel", modeOfTravel);
}
console.log(getFullInfo);
getFullInfo.myCall(Student, "Hyderabad", "Scaler Tech", "Bike");