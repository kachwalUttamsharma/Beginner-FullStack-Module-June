// let person = {
//     name: "uttam",
//     age: "26",
//     phone: [1234,56789]
// }

// console.log(person);
// console.log(person.hasOwnProperty(name));
// // console.log(person.hasOwnProperty(gender));

function Car(carName, carColor) {
    this.name = carName;
    this.color = carColor;
}

Car.prototype.drive = function() {
    console.log(`I am driving ${this.name}`);
}

Car.prototype.hasOwnProperty = function() {
    console.log("Applying Brake");
}
let car1 = new Car("BMW", "Red");
let car2 = new Car("Mercedes", "Black");

console.log(car1);


function TataCars(brand) {
    this.brand = brand
}

TataCars.prototype = Car;

const tataCars = new TataCars("tata");
console.log(tataCars);
// console.log(car1.drive());
// console.log(car1.hasOwnProperty);
// console.log(car2);


// class NewCar {
//     hasOwnProperty() {
//         console.log("applying brakes");
//     }
// }
// let newCar = new NewCar();
// console.log(newCar);

console.log(car1.toString())