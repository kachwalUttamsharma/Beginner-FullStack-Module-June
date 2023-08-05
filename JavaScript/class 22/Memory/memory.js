// primitive and non primitive

// primitives
let firstPerson = "chandra";
let secondPerson = "athrava";

firstPerson = secondPerson;

// console.log(firstPerson);
// console.log(secondPerson);

// non primitives
let firstPersonObj = {
    name: "Chandra"
}

let secondPersonObj = {
    name: "Athrava"
}

firstPersonObj = secondPersonObj;

// console.log("from obj", firstPersonObj.name);
// console.log("from obj", secondPersonObj.name);




// let person2 = person1; 
// console.log(person1.name);
// console.log(person2.name);

// person2.name = "steve";

// console.log(person1.name);
// console.log(person2.name);

// how can we clone a object 
// pass by reference -> pass by value
// shallow clone/copy or deep copy/clone

let person1 = {
    name: "adam",
    age: "25",
    address: {
        city: "Mumbai",
        pincode: "123456"
    }
}

// let person2 = {...person1}; 
// console.log(person1);
// console.log(JSON.stringify(person1));
// console.log(JSON.parse(JSON.stringify(person1)));

let person2 = JSON.parse(JSON.stringify(person1));
person2.name = "steve";
person2.address.city = "Hyderabad";
console.log(person1.address.city);
console.log(person2.address.city);

