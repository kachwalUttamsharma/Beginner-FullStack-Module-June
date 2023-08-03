/*
class
constructor
instance variables
instance methods
static methods
inheritance
*/


class Person {

    // instance variables (data containers) and actions
    constructor(_name, _age, _address, _phoneNumber) {
        this.name = _name;
        this.age = _age;
        this.address = _address;
        this.phoneNumber = _phoneNumber;
    }

    // instance methods
    hello() {
        console.log(`${this.name} is greeting you hello`);
    }

    walk() {
        console.log('Person is walking');
    }

    // static methods belong class not to object
    static staticHello() {
        console.log("This a static method");
    }
}

// common -> specific
// DRY -> dont repeat yourself
class Teacher extends Person {

    constructor(name, age, phoneNumber, address, subject, experience, classStrength) {
        super(name, age, address, phoneNumber);
        this.subject = subject;
        this.experience = experience;
        this.classStrength = classStrength;
    }
}

class Student extends Person {
    constructor(name, age, cgpa) {
        super(name, age);
        this.cgpa = cgpa;
    }
}
// let person1 = new Person("Areeb", '23', "XXXXXX", "+91236827");

// let teacher = new Teacher("Adam", "32", "+9123232", "qwerty", "History", "5Years", "50");

// console.log(teacher);

// console.log(person1);

// person1.hello();

// Person.staticHello();

let student = new Student("Chandra", "24", "8.5");
console.log(student);
student.hello();