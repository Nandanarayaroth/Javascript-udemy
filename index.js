

// let js = "amazing"
// console.log(40+8+20-10)

// console.log('Jonas')
// console.log(23)

// let firstName = "Bob"
// console.log(firstName)

// let myFirstJob = "Programer"
// let myCurretJob = "Teacher"

// let job1 = "programer"
// let job2 = "tracher"

// let javaScriptIs = true
// console.log(javaScriptIs)

// console.log(typeof true)

// let age = 38
// age = 31

// const birtgYear = 2004
// console.log(birtgYear)
// console.log(age)


// var job = 'programer'
// job = 'Teacher'
// console.log(job)

// firstName = 'SchemmedMan'
// console.log(firstName)


// const ageJonas = 2037-2004
// const ageSara = 2037-2013
// console.log(ageJonas)
// console.log(ageSara)

// const now = 2037
// const ageJonas = now - 1991
// const ageSara = now- 2004
// console.log(ageJonas,ageSara)

// console.log(2**3) power

// const firstName = "Nandana"
// const lastName = "Rayaroth"
// console.log(firstName + ' ' + lastName)

// let x = 10 + 5
// console.log(x)

// let ageJonas = 15
// let ageSara = 18

// console.log(ageJonas > ageSara)

// const now = 2037
// const ageJonas = now - 1994
// const ageSara = now - 2018

// console.log(now - 1991 > now - 2018)

// CHALLENGE 1&2
// function claculateBMI(mass, height){
//     let BMI = mass / (height * height)
//     console.log(BMI)
//     return BMI
// }

// let massOfMark = 95
// let heightofMark = 1.88
// const bmiofMark =  claculateBMI(massOfMark, heightofMark)

// let massOfJohn = 85
// let heightOfJohn = 1.76
// const bmiofJohn = claculateBMI(massOfJohn, heightOfJohn)

// if(bmiofJohn > bmiofMark){
//     console.log("John has higher BMI")
// }
// else{
//     console.log("Mark has higher BMI")
// }

// const firstName = 'Jonas'
// const job = "Teacher"
// const birtgYear = 1991
// const year = 2037

// const Jonas = "I'm "  + firstName + ", a " + (year-birtgYear) + " years old " + job + "!"
// console.log(Jonas)

// const jonaNew = `I'm ${firstName}, a ${year - birtgYear} years old ${job}!`
// console.log(jonaNew)

// const age = 15

// if(age>= 18) {
//     console.log("Sarah can start driving license")
// }
// else{
//     const years = 18 - age
//     console.log(`Sarah is too young. Wait another ${years} years`)
// }

// const birthYear = 1991
// let century
// if(birtgYear <= 2010) {
//      century = 20
// }
// else{
//      century = 21
// }
// console.log(century)

// type conversion
// const inputYear = 1991
// console.log(Number(inputYear),inputYear)
// console.log(Number(inputYear) + 18)

// console.log(Number('Jonas'))
// console.log(typeof NaN)


// // type coversion
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3)
// console.log('23' / '2')

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Jonas'))
// console.log(Boolean({}))
// console.log(Boolean (''))

// const money = 10
// if(money) {
//     console.log("Don't spend it all ;")
// }
// else{
//     console.log("You should get a job!")
// }

// let height
// if(height) {
//     console.log(`YAY! height id defined`)
// }

// const age = 18
// if(age === 10) console.log(`You just become an adult`)
// if(age === 18) console.log('You just become an adult')

// const favorite = Number(prompt("What's your favorite number?"))
// console.log(favorite)
// console.log(typeof favorite)

// if (favorite == 23) {
//     console.log('Cool! 23 is an amazing number')
// }


//   CHALLENGE #3
// function calculateAvg(score1, score2, score3){
//     let avg = (score1+score2+score3) / 3
//     return avg
// }

// let firstDolphi = 96
// let secondDolphi = 108
// let thirdDolphi = 89
// let totalDolpghi = calculateAvg(firstDolphi, secondDolphi, thirdDolphi)
// console.log(`Average of Dolphins is ${totalDolpghi}`)

// let firstKoalas = 88
// let secondKolas = 91
// let thirdKolas = 110
// let totalKoalas = calculateAvg(firstKoalas, secondKolas, thirdKolas)
// console.log(`Average of Koalas is ${totalKoalas}`)

// if(totalDolpghi > totalKoalas){
//     console.log("Dolphias win")
// }
// else if(totalKoalas > totalDolpghi){
//     console.log("Koalas win")
// }
// else if(totalDolpghi === totalKoalas){
//     console.log("It's a tie")
// }
// const hasDriverslicense = true
// const hasGoodVision = true

// console.log(hasDriverslicense && hasGoodVision)
// console.log(hasDriverslicense || hasGoodVision)
// console.log(!hasDriverslicense)

// const isTired = false
// console.log(hasDriverslicense && hasGoodVision && isTired)

// if(hasDriverslicense && hasGoodVision && isTired) {
//     console.log('S')
// }

// const day = 'monday'

// switch(day) {
//     case 'monday' :
//         console.log('Plan course structure')
//         console.log('Go to coding meetup')
//         break;
//     case 'tuesday' :
//         console.log('Prepare theory vedios')
//         break
//     case 'wenesday' :
//     case 'thurseday' :
//         console.log('Write code examples')
//         break
//     case 'friday' : 
//         console.log('Recorde vedios')
//         break
//     case 'saturday' :
//     case 'sunday' :
//         console.log("Enjoy the weekend ")
//     default:
//         console.log('Not a valid day!')
// }

//   conditional is regular switch so the conditional operator   

// const age = 23
// age >= 18 ? console.log("I like to drink coffee") : console.log("I like to drink water")

// let drink2
// if(age >= 18) {
//     drink2 = 'wine'
// }
// else{
//     drink2 = 'water'
// }
// console.log(drink2)

// CHALLENGE 4
// let tip 
// let billValue = 275

// billValue ? (billValue <= 300 && billValue > 50 ? (tip = billValue * (15/100)) : (tip = billValue * (20/100))) : (console.log("Something error"))

// let totalAmount = billValue + tip

// console.log(`Bill value ${billValue}`)
// console.log(`Tip amount ${tip}`)
// console.log(`Total amount ${totalAmount}`)

// 'use strict';

// let hasDriverslicense = false
// const passTest = true

// if(passTest) hasDriverslicense = true
// if(hasDriverslicense) console.log('I can drive ;D');

// const interface = 'Audio'
// const private = 534

// function logger() {
//     console.log('My name is Jonas')
// }

// logger()
// logger()
// logger()

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges)
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// fruitProcessor(5, 0)


// function calcAgel(birthYear) {
//     const age = 2037 - birthYear
//     return age
// }

// const age = calcAgel(2004)
// console.log(age)

// const calcAgel = birthYear => 2037 -birthYear
// const age3 = calcAgel(1991)
// console.log(age3)

// const years = (birthYear , firstName) => {
//     const age = 2037 - birthYear
//     const retirement = 65 - age

//     return `${firstName} retries in ${retirement} years`
// }

// console.log(years(1991, 'Jonas'))
// console.log(years(1980, 'Bob'))

// function cutFruitPieces(fruit) {
//     return fruit = 4
// }

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }

// const calcAgel = function (birthYear) {
//     return 2037 - birthYear
// }

// const yearsUnitRetrienment =  function (birthYear, firstName){
//     const age = calcAgel(birthYear)
//     const retirement = 65 - age

//     if(retirement > 0) {
//         return retirement
//         console.log(`${firstName} retires in ${retirement} years`)
//     }
//     else{
//         return -1
//         console.log(`${firstName} has already retired`)
//     }

//     // return retirement

//     // return `${firstName} retires in ${retirement} years`
    
// }

// console.log(yearsUnitRetrienment(1991, 'Jonas'))
// console.log(yearsUnitRetrienment(1970, 'Mike'))


// CHALLENGE #1 IN FUNCTION

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3

// let scoreDolphins = calcAverage(43, 23, 71)

// let scoreKolas = calcAverage(65, 54, 49)

// function checkWinner(scoreDolphins, scoreKolas){
//     if(scoreDolphins > (scoreKolas*2)){
//         console.log(`Dolphins win (${scoreDolphins} vs ${scoreKolas})`)
//     }
//     else if(scoreKolas > scoreDolphins*2){
//         console.log(`Koalas win (${scoreKolas} vs ${scoreDolphins})`)
//     }
//     else{
//         console.log(`there is no winner`)
//     }
// }

// checkWinner(scoreDolphins, scoreKolas)

// const friend1 = 'Michael'
// const friend2 = 'Steven'
// const friend3 = 'Peter'

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020)

// console.log(friends[0])
// console.log(friends[2])
// console.log(friends.length)
// console.log(friends[friends.length-1])

// friends[2] = 'Jay'
// console.log(friends)

// const friends = ['Michael', 'Steven', 'Peter']
// // Add elements
// const newLength = friends.push('Jay')
// console.log(friends)
// console.log(newLength)

// friends.unshift('John')
// // unshift add elements at the starting of the array
// console.log(friends)

// // Remove elements
// friends.pop()
// const popped = friends.pop()
// console.log(popped)
// console.log(friends)

// friends.shift()
// // remove first elments
// console.log(friends)

// console.log(friends.indexOf('Steven'))
// console.log(friends.indexOf('Bob'))

// friends.push(23)
// console.log(friends.includes('Steven'))
// console.log(friends.includes('Bob'))
// console.log(friends.includes(23))

// if(friends.includes('Steven')) {
//     console.log('You have')
// }

// CHALLENGE #2 IN ARRAY
// function calcTip(billValue){
//     let tip
//     let totalAmount
//     if(billValue >50 && billValue<= 300){
//         tip = billValue * (15/100)
//         return totalAmount = tip + billValue
//     }else if(billValue > 300){
//         tip = billValue * (20/100)
//         return totalAmount = tip + billValue
//     }
//     else{
//         return billValue
//     }
// }

// const bill = [125, 555, 44]

// const tip = []
// tip.push(calcTip(bill[0]))
// tip.push(calcTip(bill[1]))
// tip.push(calcTip(bill[2]))

// console.log(tip)

// const JonasArray = [
//     "Jonas",
//     "Schmedtman",
//     2037-1991,
//     "teacher",
//     ['Michael', 'Peter', 'Steven']
// ]

// const Jonas = {
//     firstName : "Jonas",
//     lastName : "Schmedtman",
//     age : 2037 - 1991,
//     friends : ['Michel', 'Peter', 'Steven']
// }

// console.log(Jonas)

// console.log(Jonas.lastName)
// console.log(Jonas['lastName'])
// // it return the value of lastName same as above

// const nameKey = 'Name'
// console.log(Jonas['first' + nameKey])
// console.log(Jonas['last' + nameKey])


// const interestedIn = prompt("What do you want to known about Jonas? Choose between firstName, lastName, age, job, and friends")
// console.log(Jonas[interestedIn])

// if (Jonas[interestedIn]) {
//     console.log(Jonas[interestedIn])
// }
// else{
//     console.log('Wrong request! Choose between FirstName, lastName, age, job and friednds')
// }

// add elements in object
// Jonas.location = 'Portugal'
// Jonas['twitter'] = '@jonasschmedtman'
// console.log(Jonas)

// console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends, and his best friend is called ${Jonas.friends[0]}` )

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtman',
//     birthYear : 1991,
//     job: 'teacher',
//     friends : ['Michael', 'Peter', "Steven"],
//     hasDriversLicense : true,

//     calAge: function () {
//         console.log(this)
//         return 2037 -this.birthYear
//     },
//     getSummmery : function(){
//         return `${this.firstName} is a ${this.calAge()}-years old ${jonas.job}, and he has ${this.hasDriversLicense ? "a driver's license" : "no drivers license"}`
//     }
// }

// console.log(jonas.calAge())
// console.log(jonas.age)
// console.log(jonas.age)

// console.log(`${jonas.firstName} is a ${jonas.age}-years old ${jonas.job}, and he has a driver's license`)
// console.log(jonas.getSummmery())

// console.log(jonas['calAge'](1991))

// CHALLENGE #3 OBJECTS

// const mark = {
//     fullName: "Mark Vincent",
//     mass : 78,
//     height: 1.69,
//     calcBMI : function() {
//         this.bmi = this.mass / (this.height * this.height)
//         return  this.bmi
//     }
// }

// const john = {
//     fullName: "John Joseph",
//     mass : 92,
//     height: 1.95,
//     calcBMI : function() {
//         this.bmi = this.mass / (this.height * this.height)
//         return this.bmi
//     }
// }
// mark.calcBMI()
// console.log(mark.bmi)
// john.calcBMI()
// console.log(john.bmi)

// if(mark.bmi > john.bmi){
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// }
// else{
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }


// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights competion ${rep}`)
// }

// const JonasArray = [
//     'Jonas', 
//     'Schmedtman',
//     2037-1991,
//     'teacher',
//     ['Michael', 'Peter', "Steven"]
// ]
// const types = []

// for(let i = 0; i<JonasArray.length; i++){
//     if(typeof JonasArray[i] !== 'string') continue
//     console.log(JonasArray[i])
//     types[i] = typeof JonasArray[i]
// }

// console.log(types)

// for(let i = 0; i < JonasArray.length; i++){
//     if(typeof JonasArray[i] === 'number') break
//     console.log(JonasArray[i], typeof JonasArray[i])
// }

// const years = [1991, 2007, 1969, 2020]
// const age = []

// for(let i=0; i <years.length; i++) {
//     age.push(2037 - years[i])
// }

// console.log(age)

// const jonas = [
//     'Jonas',
//     'Schmedtman',
//     2037-1991,
//     'teacher',
//     ['Micheal', 'Peter', 'Steven']
// ]

// for(let i = jonas.length-1; i >= 0; i--){
//     console.log(i, jonas[i])
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`--------Starting ${exercise}`)

//     for(let rep = 1; rep<=5; rep++){
//         console.log(`Lifting weight repetation ${rep}`)
//     }
// }

// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetations ${rep}`)
// }

// let rep = 1
// while(rep <= 10){
//     console.log('Lifiing')
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

// while(dice !== 6){
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() *6) +1
// }


// // CHALLENGE #5 
// function calcTip(bill_value){
//     let tip
//     if(bill_value > 50 && bill_value < 300){
//         tip = bill_value * (15/100)
//         return tip
//     }else if(bill_value > 300) {
//         tip = bill_value * (20/100)
//         return tip
//     }else{
//         return bill_value
//     }
// }

// const bill = [22,295,176,440,37,105,10,1100,86,52]
// let tip = []
// let totals = []

// for(let i = 0; i< bill.length; i++){
//     let restore = calcTip(bill[i])
//     tip.push(restore)
//     restore = restore + bill[i]
//     totals.push(restore)
// }

// console.log(tip)
// console.log(totals)


// function calcAverage(arr) {
//     let sum = 0
//     for(let i = 0 ; i< arr.length; i++){
//         sum = arr[i] + sum
//     }
//     console.log (sum/(arr.length))
//     console.log(sum)
// }

// calcAverage([2,3,6])

// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         value : Number(prompt('Degree celsius'))
//     }

//     console.log(measurement.value)
//     console.warn(measurement.value)
//     console.error(measurement.value)

//     const kelvin = measureKelvin.value + 273
//     return kelvin

// }
// console.log(measureKelvin())

// 'use strct'

// function calAge(birthYear) {
//     const age = 2037 - birthYear
//     function printAge(){
//         const output = `${firstName} You are ${age}, born in ${birthYear}`
//         console.assert(output)

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str)

        
//         }
//         // console.log(str)
//         console.log(millenial)
//     }
//     printAge()
//     return age
// }

// const firstName = 'Jonas'
// calAge(1991)
// console.log(age)
// printAge()

// console.log(me)
// console.log(job)
// console.log(year)


// var me = 'Onemanshow'
// let job = 'teacher'
// const year = 1991

// console.log(addDecl(2,3))
// // console.log(addExpr(2,3))
// console.log(addArrow)
// // console.log(addArrow(2,3))

// function addDecl(a,b) {
//     return a+b
// }

// const addExpr = function (a,b) {
//     return a+b
// }
// const addArrow = (a,b) => a+b

// if(!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart() {
//     console.log('All product deleted')
// }

// this keyword
// console.log(this)

// const calAge = function (birthYear) {
//     console.log(2037 - birthYear)
//     // console.log(this)
// }
// calAge(1991)

// const calAgeArrow = birthYear => {
//     console.log(2037 - birthYear)
//     // console.log(this)
// }
// calAgeArrow(1980)

// const jonas = {
//     year: 1991,
//     calAge: function(){
//         // console.log(this)
//         console.log(2037 - this.year)
//     }
// }
// jonas.calAge()

// const matilda = {
//     year: 2017
// }
// matilda.calAge = jonas.calAge

// matilda.calAge()

// const f = jonas.calAge
// f()

// var firstName = 'Matilda'

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge : function(){
//         console.log(this)
//         console.log(2037 - this.year)

//         const isMillenial = function(){
//             console.log(this.year >= 1981 && this.year <= 1996 )
//         }
//         isMillenial()
//     },
//     greet : () => {
//         console.log(this)
//         console.log(`Hey ${this.firstName}`)
//     },
// }
// jonas.greet()
// jonas.calcAge()

// const addExpr = function(a, b) {
//     console.log(arguments)
//     return a+b
// }

// addExpr(2, 5)
// addExpr(2, 5, 8, 12)

// var addArrow = (a, b) => {

//     return a+b
// }
// // addArrow(2, 5, 8)
// const jessica = {
//     firstName :'Jessica',
//     lastName : 'Williams',
//     age: 27
// };

// const marriedJessica = jessica
// marriedJessica.lastName ='Davis'

// console.log('Before', jessica)
// console.log('After', marriedJessica)

// jessica.age = 30


// 'use strict'

// const restaurant = {
//     name: 'classico Italiano',
//     location : 'Via Angel Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian, Organic'],
//     starteMenu : ['Focaccia', 'Brushetta', 'Garlic', 'Bread', 'Caprese Salad'],
//     mainMenu : ['Pizza', 'Pasta', 'Risotto'],
//     order: function(starterIndex, mainIndex) {
//         return(this.starteMenu[starterIndex], this.mainMenu(mainIndex))
//     } 
// }

// const arr = [2, 3, 4]
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// const [x, y, z] = arr
// console.log(x, y, z)
// console.log(arr)

// let [main, secondary] = restaurant.categories
// console.log(main, secondary)

// // const temp = main
// // main = secondary
// // secondary = temp
// // console.log(main, secondary)

// [main, secondary] = [secondary, main]
// console.log(main, secondary)

// const [stater , mainCourse] = restaurant.order(2, 0)
// console.log(stater, mainCourse)

// const nested = [2, 4, [5, 6]]
// // const [i, j] = nested
// // console.log(i, j)
// const [i, [j,k]] = nested
// console.log(i, j, k)


// const [p = 1,q = 1,r = 1] = [8,9]
// console.log(p,q,r)
// 

// // destructring object

// const restaurant = {
//     name: 'Classico Italiano',
//     location : 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories : ['Italian', 'Pizzeria', 'Vegetaian', 'Organic'],
//     startMenu : ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risoto'],
//     openingHours: {
//         thu : {
//             open: 12,
//             close: 22
//         },
//         fri: {
//             open: 12,
//             close: 23
//         },
//         sat: {
//             open: 0,
//             close: 24
//         }
//     },
//     order: function (starterIndex, mainIndex) {
//         return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
//     },

//     orderDelivery: function({starterIndex, mainIndex, time, address}) {
//         console.log(`Order recieved! ${this.startMenu [starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
//     },
//     orderPaste: function(ing1, ing2, ing3){
//         console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
//     },
//     orderPizza: function(mainIngredient, ...otherIngrediens) {
//         console.log(mainIngredient)
//         console.log(otherIngrediens)
//     }
// }

// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del Sole, 21',
//     mainIndex: 2,
//     starterIndex: 2
// })

// const rest1 = {
//     name : 'Capri',
//     // numGuests: 20,
// }
// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi'
// }

// rest1.numGuests = rest1.numGuests || 10
// rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ||= 10
// rest2.numGuests ||= 10

// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// // rest2.owner = rest2.owner && '<ANONYMOUS>'
// rest1.owner &&= '<ANONYMOUS>'
// rest2.owner &&= '<ANONYMOUS>'

// console.log(rest1)
// console.log(rest2)

// const guests = restaurant.numGuests || 10
// console.log(guests)

// const guestCorrect = restaurant.numGuests ?? 10 ;
// console.log(guestCorrect)

// console.log(3 || 'Jonas')
// console.log('' || 'Jonas')
// console.log(true || 0)
// console.log(undefined || null)
// console.log(undefined || 0 || '' || 'Hello' || 23 || null)

// restaurant.numGuests =  0
// const guests1 = restaurant.numGuests ? restaurant.
// numGuests : 10
// console.log(guests1)

// const guests2 = restaurant.numGuests || 10
// console.log(guests2)

// console.log('___AND___')
// console.log(0 && 'Jonas')
// console.log(7 && 'Jonas')
// console.log('Hello' && 23 && null && 'jonas')

// if(restaurant.orderPizza) {
//     restaurant.orderPizza('mushroom', 'spinach')
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach')



// const [Pizza, , ,risotto, ...otherFood] = [
//     ...restaurant.mainMenu,
//     ...restaurant.startMenu
// ]
// console.log(Pizza, risotto, otherFood)

// const { sat, ...weekdays } = restaurant.openingHours
// console.log(weekdays)


// const add = function(...numbers) {
//     let sum = 0

//     for(let i = 0; i<numbers.length; i++){
//         sum += numbers[i]
//     }
//     console.log(sum)
// }

// add(2,3)
// add(5, 3, 7, 2)
// add(8, 2, 5, 3, 2, 1, 4)

// const x = [23, 5, 7]
// add(...x)

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
// restaurant.orderPizza('mushrooms')


// const { name, openingHours, categories} = restaurant 
// console.log( name, openingHours, categories)

// const {name: restaurantName, openingHours: hours, categories: tags} = restaurant
// console.log(restaurantName, hours, tags)

// const { menu = [], startMenu: staters = []} = restaurant
// console.log(menu, staters)

// let a = 111
// let b = 999
// const obj = { a: 23, b: 7, c: 14 }

// // ({a, b} = obj)
// // console.log(a, b)

// // Nested objects
// const {fri: { open: o, close: c}} = openingHours
// console.log(o, c)

// // Spreda Operator
// const arr = [7, 8, 9]
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)

// const newArr = [1, 2, ...arr]
// console.log(newArr)

// console.log(...newArr)

// const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu)

// const mainMenuCopy = [...restaurant.mainMenu]
// const menuu = [...restaurant.startMenu, ...restaurant.mainMenu]
// console.log(menuu)

// const str = 'Jonas'
// const letters = [...str, '', 's. ']
// console.log(letters)
// console.log(letters)
// console.log(...str)

// const ingredients = [prompt(`let's make pasta! Ingredient 1?`)]

// // CHALLENGE#1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players
// console.log(players1, players2)

// const [gk, ...fieldPlayers] = players1
// console.log(gk, fieldPlayers)

// const allplayers = [...players1, ...players2]
// console.log(allplayers)

// const players1FInal = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// console.log(players1FInal)

// const {odds: {team1, x: draw, team2}} = game
// console.log(team1, draw, team2)

// const printGoals = function(...players) {
//     console.log(players)
//     console.log(`${players.length} goals were scored`)
// }

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// // printGoals('Davies', 'Muller')
// printGoals(...game.scored)

// team1 < team2 && console.log('Team 1 is more likely to win')
// team1 > team2 && console.log('Team 2 is more likely to win')

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

//  const openingHours = {
//         [weekdays[3]] : {
//             open: 12,
//             close: 22
//         },
//         [weekdays[4]]: {
//             open: 12,
//             close: 23
//         },
//         ['weekdays[5']: {
//             open: 0,
//             close: 24
//         }
//     }

// const restaurant = {
//     name: 'Classico Italiano',
//     location : 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories : ['Italian', 'Pizzeria', 'Vegetaian', 'Organic'],
//     startMenu : ['Focaccia', 'Brushetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risoto'],
//     openingHours,
   
//     order(starterIndex, mainIndex) {
//         return [this.startMenu[starterIndex], this.mainMenu[mainIndex]]
//     },

//     orderDelivery({starterIndex, mainIndex, time, address}) {
//         console.log(`Order recieved! ${this.startMenu [starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
//     },
//     orderPaste(ing1, ing2, ing3){
//         console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
//     },
//     orderPizza(mainIngredient, ...otherIngrediens) {
//         console.log(mainIngredient)
//         console.log(otherIngrediens)
//     }
// }

// const menu = [...restaurant.startMenu, ...restaurant.mainMenu]

// for(const item of menu) console.log(item)

// for(const [i, el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`)
// }

// console.log([...menu.entries()])

// if(restaurant.openingHours && restaurant.openingHours.mon) 
// console.log(restaurant.openingHours.mon.open)

// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.mon?.open)

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// for(const day of days) {
//     console.log(day)
//     const open = restaurant.openingHours[day] ?.open || 'closed' ;
//     console.log(`On ${day}, we open at ${open}`)

// }

// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// const users = [
//     {name : 'Jonas',
//         email: 'hello@jonas.io'
//     }
// ]

// console.log(users[0]?.name ?? 'Usesr array empty')

// if(users.length > 0) console.log(users[0].name)
// else console.log(`user array empty`)  

// const properties = Object.keys(openingHours)
// console.log(properties)

// let openStr = `We are open on ${properties.length} days`

// for(const day of (openingHours)) {
//     openStr += `${day}`
// }
// console.log(openStr)

// const values = Object.values(openingHours)
// console.log(values)

// const entries = Object.entries(openingHours)
// console.log(entries)

// for(const [key, {open, close }] of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`)
// }


// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrusia Dortmund',
//     players: [
//         [
//             'Neuer',
//             'Pavard',
//             'Martinez',
//             'Alaba',
//             'Davies',
//             'Kimmich',
//             'Goretzka',
//             'Coman',
//             'Muller',
//             'Gnarby',
//             'Lewandowski',
//         ],
//         [
//             'Bruki',
//             'Schulz',
//             'Hummels',
//             'Akanji',
//             'Hakimi',
//             'Weigl',
//             'Witsel',
//             'Hazard',
//             'Brandt',
//             'Sancho',
//             'Gotze'
//         ],
//     ],
//     score: '4:0',
//     scored: ['Lewandwoski', 'Gnarby', 'Lewandowski', 'Hummls'],
//     date: 'Nov 9th 2037',
//     odds: {
//         team1: 1.33,
//         x: 3.25,
//         team2: 6.5,
//     },
// }

// for(const [i, player] of game.scored.entries())
//     console.log(`Goal ${i + 1}: ${player}`)

// for(const [team, odd] of Object.entries(game.odds)) {
//     const teamStr = team == 'x' ? 'draw' : `Victory ${game[team]}`
//     console.log(`Odd of ${teamStr} ${odd}`)
// }


// const orderSet = new Set([
//     `Pasta`,
//     `Pizza`,
//     `Pizza`, 
//     `Risotto`, 
//     `Pasta`, 
//     `Pizza`
// ])
// console.log(orderSet)

// console.log(new Set('Jonas'))

// console.log(orderSet.size)
// console.log(orderSet.has(`Pizza`))
// console.log(orderSet.has('Bread'))
// orderSet.add(`Garlic Bread`)
// orderSet.add('Garlic Bread')
// orderSet.delete('Rispttp')

// console.log(orderSet)

// for(const order of orderSet) console.log(order)

// const staff = [
//     'Waiter',
//     'Chef',
//     'Waiter',
//     'Manager',
//     'Chef',
//     'Waiter'
// ]

// const staffUnique = [...new Set(staff)]
// console/log(staffUnique)
// console.log(
//     new Set(['Waiter', 'Chef'])
// )

// const italianFood = new Set([
//     'pasta',
//     'gnocchi',
//     'tomatoes',
//     'olives oil',
//     'garlic',
//     'ball'
// ])

// const mexicanFood = new Set([
//     'tortillas',
//     'beans',
//     'rice',
//     'tomatoes',
//     'avocado',
//     'garlic'
// ])
// const commonFoods = italianFood.intersection(mexicanFood)
// console.log(`InterSection: `, commonFoods)
// console.log([commonFoods])

// const italianMexicanFunsion = italianFood.union(mexicanFood)
// console.log('union', italianFood)

// console.log(new Set([...italianFood, ...mexicanFood]))

// const uniqueitalianFoods = italianFood.difference(mexicanFood)
// console.log(`Difference italian`, uniqueitalianFoods)

// const uniqueMexicanFoods = mexicanFood.difference(italianFood)
// console.log('Difference mexican', uniqueMexicanFoods)

// const uniqueItalianMexicanFoods = italianFood.symmetricDifference(mexicanFood)
// console.log(uniqueItalianMexicanFoods)


// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openingHours = {
//   [weekdays[3]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
// };

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetrian', 'Organic'],
//     staterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu : [ 'Pizza', 'Pasta', 'Risotto' ],

//     openingHours,

//     order(starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },

//     orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
//         console.log(
//         `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//         );
//     },

//     orderPasta(ing1, ing2, ing3) {
//         console.log(
//         `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//         );
//     },

//     orderPizza(mainIngredient, ...otherIngredients) {
//         console.log(mainIngredient);
//         console.log(otherIngredients);
//     },
// }

// const rest = new Map()

// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// console.log(rest.set(2, 'Lisbon, Portugal'))

// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23)
// .set(true, 'We are open:D')
// .set(false, `We are closed :(`)


// console.log(rest.get('name'))
// console.log(rest.get(true))
// console.log(rest.get(1))

// const time = 21
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')))


// console.log(rest.has('categories'))
// rest.delete(2)

// const arr = [1,2]
// rest.set(arr, 'Test')
// console.log(rest)
// console.log(rest.size)

// console.log(rest.get(arr))

// const question = new Map([
//     ['question', 'What is the best programming language in the world?'],
//     [1,'c'],
//     [2, 'Java'],
//     [3, 'Javascipt'],
//     ['correct', 3],
//     [true, 'correct'],
//     [false, 'Try again!']
// ])
// console.log(question)

// console.log(Object.entries(openingHours))
// const hoursMap = new Map(Object.entries(openingHours))

// console.log(hoursMap)

// for(const [key, value] of question){

//     if(typeof key === 'number'){
//         console.log(`Answer ${key}: ${value}`)
//     }
// }

// const answer = Number(prompt(`Your answer`))
// console.log(answer)

// console.log(question.get(question.get(`correct`) === answer))

// console.log(...question)
// console.log(question.entries())
// console.log([...question.keys()])


// const gameEvents = new Map([
//   [17, 'Goal'],
//   [36, '🔁 Substitution'],
//   [47, '⚽️ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽️ GOAL'],
//   [80, '⚽️ GOAL'],
//   [92, '🔶 Yellow card'],
// ])

// const event = [...new Set(gameEvents.values())]
// console.log(event)

// gameEvents.delete(64)
// console.log(gameEvents)

// console.log(
//     `An event happend, on average, every ${90 / gameEvents.size} minutes`
// )
// const time = [...gameEvents.keys()].pop()
// console.log(time)

// for(const [min, event] of gameEvents) {
//     const half = min <= 45 ? 'FIRST' : 'SECOND'
//     console.log(`[${half} HALF] ${min}: ${event}`)
// }


const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

console.log(`a+very+nice+string`. split('+'))
console.log(`Jonas Schmedtman`. split(''))

const [firstName, lastName] = `Jonas Schedtman`.split(' ')

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ')
console.log(newName)

const capitalizeName = function(name) {
   const names = name.split(' ')
   const namesUpper = []

   for(const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()))

   }
   console.log(namesUpper.join(' '))
}
capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedtman')


const message = 'Go to gate 23!'
console.log(message.padStart(25, '+').padEnd(30, '+'))
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'))

const maskCreditCard = function(number) {
    const str = number + ''
    const last = str.slice(-4)
    // console.log(str)
    return last.padStart(str.length, '*')
}

console.log(maskCreditCard(123123))
console.log(maskCreditCard(12345678910))
console.log(maskCreditCard('1365498720'))

const message2 = 'Bad weather... All Departues Delayed...'
console.log(message2.repeat(5))

const planesInline = function(n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
}

planesInline(5)
planesInline(3)
planesInline(12)

// const airline = `TAP Air Portugal`
// const plane = `A320`

// console.log(plane[0])
// console.log(plane[1])
// console.log(plane[2])
// console.log(`B737`[0])

// console.log(airline.length)
// console.log('B737', length)

// console.log(airline.indexOf('r'))
// console.log(airline.lastIndexOf('r'))
// console.log(airline.indexOf('portugal'))

// console.log(airline.slice(4))
// console.log(airline.slice(4, 7))

// console.log(airline.slice(0, airline.indexOf('')))
// console.log(airline.slice(airline.lastIndexOf('') + 1))

// console.log(airline.slice(-2))
// console.log(airline.slice(1,-1))

// const checkMiddleSeat = function(seat) {

//     const s = seat.slice(-1)
//     if(s === 'B' || s === 'E')
//         console.log(`You got the middle seat`)
//     else
//         console.log(`You got licky`)
// }

// checkMiddleSeat('11B')
// checkMiddleSeat('23c')
// checkMiddleSeat('3E')

// console.log(new String('jonas'))
// console.log(typeof new String('jonas'))

// console.log(typeof new String)

// console.log(airline.toLowerCase())
// console.log(airline.toUpperCase())

// const passenger = 'jOnAS'
// const passengerLower = passenger.toLocaleLowerCase()
// const passengerCorrect = passengerLower[0].toUpperCase()+ passengerLower.slice(1)
// console.log(passengerCorrect)

// const email = `hello@jonas.io`
// const loginEmail = `Hello@jonas.Io \n`

// const lowerEmail = loginEmail.toLowerCase()
// const trmmedEmail = loginEmail.trim()
// console.log(trmmedEmail)

// const normalizedEmail = loginEmail.toLocaleLowerCase().trim()
// console.log(normalizedEmail)
// console.log(email === normalizedEmail)

// const priceGB = `288,97E`
// const priceUS = priceGB.replace('E', 'S').replace(`,`, `.`)

// const announcement = `Allcpassengers come to barding door 23!`

// 


//     
