// be default when ever you are creating object, constructor function will called

class Car {
    constructor(NameParam, ColorParam, TopSpeedParam) {
        this.name = NameParam;
        this.color = ColorParam;
        this.topSpeed = TopSpeedParam;
    }
}

let Alto = new Car("alto", "red", "100kmph");
console.log(Alto);