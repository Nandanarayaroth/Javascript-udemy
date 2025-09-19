'use strict'

const Person = function(firstName, birthYear) {
    // console.log(this)
    this.firstName = firstName
    this.birthYear = birthYear
    
}

const jonas = new Person('Jonas', 1991)
console.log(jonas)

// 1. new empty object is  created
// 2. function is called, this = {}
// 3.{} linked to prototype
// 4. function automatically return 

const matilda = new Person('Matilda', 2017)
const jack = new Person('Jack', 1975)
console.log(matilda, jack)

console.log(jonas instanceof Person)
console.log(matilda instanceof Person)


// prototype -> creating method for person 
console.log(Person.prototype)

Person.prototype.calcAge = function() {  
    console.log(2037 - this.birthYear)
}

jonas.calcAge()
matilda.calcAge()

console.log(jonas.__proto__)
console.log(jonas.__proto__ === Person.prototype)

console.log(Person.prototype.isPrototypeOf(jonas))
console.log(Person.prototype.isPrototypeOf(matilda))
console.log(Person.prototype.isPrototypeOf(Person))

// .prototypeOfLinkedObjects
Person.prototype.species = 'Homo Sapiens'
console.log(jonas.species, matilda.species)

console.log(jonas.hasOwnProperty('firstName'))
console.log(jonas.hasOwnProperty('species'))

console.log(jonas.__proto__)
console.log(jonas.__proto__.__proto__)

console.dir(Person.prototype.constructor)

const arr = [3, 6, 4, 5, 6, 9,3]
console.log(arr.__proto__)
console.log(arr.__proto__ === Array.prototype)

console.log(arr.__proto__.__proto__)

Array.prototype.unique = function(){
    return[...new Set(this)]

}

console.log(arr.unique())

const h1 = document.querySelector('h1')
console.dir(x => x + 1)

// challenge1

const Car = function (make, speed){
    this.make = make
    this.speed = speed
}


Car.prototype.accelerate = function() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car.prototype.brake = function(){
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const bmw = new Car('BMW', 120)
const mercedes= new Car('Mercedes', 95)

bmw.accelerate()
bmw.brake()

mercedes.accelerate()
mercedes.brake()

// ES6 Classes


class PersonCl{
    constructor(fullName, birthYear){
        this.fullName = fullName
        this.birthYear = birthYear
    }
    calcAge() {
        console.log(2037 - this.birthYear)
    }
    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    get age() {
        return 2037 - this.birthYear
    }

    set fullName(name) {
        console.log(name)
        if(name.includes(' '))this._fullName = name
        else alert(`${name} is not a full name!`)
    }

    get fullName() {
        return this._fullName
    }

}

const jessica = new PersonCl('jessica Davis', 1996)
console.log(jessica)
jessica.calcAge()
console.log(jessica.age)

console.log(jessica.__proto__ === PersonCl.prototype)
// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`)
// }

jessica.greet()

const walter = new PersonCl('Walter White', 1965)

const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop()
    },

    set latest(mov){
        this.movements.push(mov)
    }
}

console.log(account.latest)

account.latest = 50
console.log(account.movements)


const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },
    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }
}

const steven = Object.create(PersonProto)
console.log(steven)

steven.name = 'Steven'
steven.birthYear = 2002
steven.calcAge()

console.log(steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1979)
sarah.calcAge()


// challenge2
class Carcl {
    constructor(make, speed){
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake(){
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

const ford = new Carcl('ford', 120)
ford.accelerate()
ford.brake()
console.log(ford.speedUS)
console.log(ford.speedUS = 50)

// practice

class Recl {
    constructor(make, speed){
        this.make = make
        this.speed = speed
    }

    accelerate(){
        this.speed += 10
        console.log(this.speed)
    }

    brake(){
        this.speed -= 5
        console.log(this.speed)
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed * 1.6
    }
}

const bmw2 = new Recl('BMW', 120)
bmw2.accelerate()
bmw2.brake()
console.log(bmw2.speedUS)
console.log(bmw2.speedUS = 50)

//  // /// /// /// ///


// Inheritance between classes : constructor fucntion

const Person2 = function (firstName, birthYear) {
    this.firstName = firstName
    this.birthYear = birthYear
}

Person2.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}

const Student = function(firstName, birthYear, course) {
    Person2.call(this, firstName, birthYear)
    this.course = course
}

// Linking prototype
Student.prototype = Object.create(Person2.prototype)

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`)
}

const mike = new Student('Mike', 2020, 'Computer Science')
mike.introduce()
mike.calcAge()

// console.log(mike.__proto__)
// console.log(mike__proto_.__proto__)

console.log(mike instanceof Student)
console.log(mike instanceof Person2)

Student.prototype.constructor = Student
console.log(Student.prototype.constructor)


// Challenge 3

const Car2 = function (make, speed) {
    this.make = make
    this.speed = speed
}

Car2.prototype.accelerate = function() {
    this.speed += 10
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

Car2.prototype.brake = function() {
    this.speed -= 5
    console.log(`${this.make} is going at ${this.speed} km/h`)
}

const EV = function(make, speed, charge) {
    Car2.call(this, make, speed)
    this.charge = charge
}

EV.prototype = Object.create(Car.prototype)

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo
}

EV.prototype.accelerate = function() {
    this.speed += 20
    this.charge--
    console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
    )
}

const tesla = new EV('Tesla', 120, 23)
tesla.chargeBattery(90)
console.log(tesla)
tesla.brake()
tesla.accelerate()
 

// practice

// const Car2 = function(make, speed) {
//     this.make = make
//     this.speed = speed
// }

// const EV = function(make, speed, battery) {
//     Car2.call(this, make, speed)
//     battery = this.battery
// }

// EV.prototype.chargeBattery = function(chargeTo) {
//     this.battery = chargeTo
//     console.log(`${this.battery}`)
// }

// EV.prototype.accelerate = function() {
//     this.speed += 20
//     this.battery -= 1
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.battery}`)
// }

// const tesla2 = new EV('Tesla', 120, 23)
// tesla2.chargeBattery(90)
// tesla2.accelerate()



class PersonCll {
    constructor(fullName, birthYear) {
        this.fullName = fullName
        this.birthYear = birthYear
    }

    calcAge() {
        console.log(2037 - this.birthYear)
    }

    greet() {
        console.log(`Hey ${this.fullName}`)
    }

    get age() {
        return 2037 - this.birthYear
    }

    set fullName(name) {
        if (name.includes(' ')) this._fullName = name
        else alert(`${name} is not a full name`)
    }

    get fullName() {
        return this._fullName
    }

    static hey() {
        console.log(`Hey there`)
    }
}


class StudentCl extends PersonCll {
    constructor(fullName, birthYear, course) {

        super(fullName, birthYear)
        this.course = course
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`)
    }

    // overriding
    calcAge() {
        console.log(`Im ${2037 - this.birthYear} years old, but as a student I feel more like ${2037 - this.birthYear + 10 }`)
    }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science')
martha.introduce()
martha.calcAge()


// inheritance between classes : Object.create

const PersonProto2 = {
    calcAge() {
        console.log(2037 - this.birthYear)
    },

    init(firstName, birthYear) {
        this.firstName = firstName
        this.birthYear = birthYear
    }
}

const steven2 = Object.create(PersonProto2)

const StudentProto =Object.create(PersonProto2)
StudentProto.init = function(firstName, birthYear, course) {

    PersonProto2.init.call(this, firstName, birthYear)
    this.course = course

}

const jay = Object.create(StudentProto)
jay.init('Jay', 2010, 'Computer SCience')
// jay.introduce()
jay.calcAge()


// Encapsulation
class Account {
    locale = navigator.language;
    bank = 'Bankist';
    #movements = []
    #pin;

    constructor(owner, currency, pin){
        this.owner = owner
        this.currency = currency
        this.#pin = pin
        this.movements = []
        // this.locale = navigator.language

        console.log(`Thanks for opening an accounr, ${owner}`)
    }

    getMovements() {
        return this.#movements
    }

    deposit(val) {
        this.movements.push(val)
    }

    withdraw(val) {
        this.deposit(-val)
    }

    approveLoan(val) {
        if(this.approveLoan(val)) {
            this.deposit(val)
            console.log(`Loan approved`)
        }
    }
    requestLoan(val) {
        if(this.approveLoan(val)) {

        }
    }
}

const acc1 = new Account("jonas", "EUR", 1111)
acc1.deposit(300)
acc1.withdraw(100)
// acc1.dsffsdf = []
console.log(acc1)


// acc1.movements.push(250)
// acc1.movements.push(-140)

// acc1.deposit(250)
// acc1.withdraw(140)
// acc1.requestLoan(1000)
// acc1.approveLoan(1000)

// console.log(acc1)
// console.log(acc1.pin)


// challenge 4

class Carc{
    constructor(make, speed) {
        this.make = make
        this.speed = speed
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5
        console.log(`${this.make} is going at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

class EVCl extends Carc{
    #charge;

    constructor(make, speed, charge) {
        super(make, speed)
        this.#charge = charge
    }

    chargeBattery(chargeTo) {
        this.charge = chargeTo
    }

    accelerate() {
        this.speed += 20
        this.#charge--
        console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
    }
}

const rivian = new EVCl('Rivian',120, 23)
console.log(rivian)



// const EV = function (make, speed, charge) {
//     Car.call(this, make, speed)
//     this.charge = charge
// }

// EV.prototype = Object.create(Car.prototype)

// EV.prototype.chargeBattery = function (chargeTo) {
//     this.charge = chargeTo
// }

// EV.prototype.accelerate = function() {
//     this.speed += 20
//     this.charge--
//     console.log(`${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`)
// }