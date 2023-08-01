// let car1 = {
//     name: "Tiago",
//     color: "white",
//     topSpeed: "140kmph"
// }

// let car2 = {
//     name: "Nexon",
//     color: "black",
//     topSpeed: "160kmph"
// }

// let car3 = {
//     name: "Safari",
//     color: "blue",
//     topSpeed: "200kmph"
// }

// let car4 = {
//     name: "nano",
//     color: "yellow",
//     topSpeed: "120kmph"
// }

// let car5 = {
//     name: "Altroz",
//     color: "red",
//     topSpeed: "140kmph"
// }

// first step 
// this -> {}
// step 2
/* this -> {
    name: undefined;
    color: undefined;
    topSpeed: undefined
}
*/
//step 3 
/* this -> {
    name: NameParam;
    color: ColorParam;
    topSpeed: TopSpeedParam
}
*/
function Car(NameParam, ColorParam, TopSpeedParam) {
    this.name = NameParam;
    this.color = ColorParam;
    this.topSpeed = TopSpeedParam;

    this.drive = function () {
        console.log(`I am driving ${this.name} and the color is ${this.color}`)
    }
}

const altroz = new Car("Altroz", "red", "140kmph");
const safari = new Car("Safari", "blue", "200kmph");
const nano = new Car("nano", "yellow", "120kmph");
const nexon = new Car("nexon", "140kmph", "black");
const tiago = new Car("tiago", "white", "140kmph");
//console.log(altroz, safari, nano, nexon, tiago);

altroz.drive();