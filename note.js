// <---Fndamentals---->
// JAVASCARAIPT => javascript is a high level objectoriented multiple pareadiam progaraming kanguage
//   variables in javascript is not allowed any special characters like &, . also not use keywords 
// but we can use undescore but not for first element 

// <---types of javascript--->
// datatypes:-
// *)primitive data type ->
//  Number ,
//  string
//  Boolean
//  undefined -> mean empty value 
//  null
// 

// <--- Variables in js
// by using let for variable declaration is can change during in the program

// <---Operators in js
// mathematical or arithematic operator 

// <---Strings--->

// <---type conversion--->
// mannualy programmer converting one datatype into another type

//<---- type coversion---->
// javascript automattically converted one dataype into another type in the behind of the code

// <--- fundametal ---->
// history of javascript ->
// first javascript is called Mocha
// then it is changed to javascript
// ecma script is the first version of javscript
// ES6 was the released biggest version in 2015
// 

// DOM 
// Document Object Model: structured representation of html documents allowss javascript to access html elements and styles to manipulate them

// javascript engine : a computer program that execute javascript code 
// compliation enitere code is converted into machine code at once and written to a binary files that can be executed by a computer
// interpretation : interpreter runs through the source code and execute it line by line 
// just in time compilation entire code is converted into machine code at onec then excute immediatly
// 
// 

// scoping and scope in javascipt 
// scoping how our program's variables are organized and accessed "where do varibales live?" or "Where can we access a certain varibale and where not?"
// lexical scoping:Scoping is contolled by placement of functionas and blocks in the code
//
// there are 3 different type of scopes 
// global scope: 
// *)outside of any fucntion or block , 
// *)variable declated in global scope are accessible everywhere

// function scope:
// *) Variables are accessible only inside function, NOT outside
// *) also called loacl scope

// Block scope:
// *)variables are accessible only inside block (block scoped)
// *)HOWEVER this only applies to let and const variables!
// *)functions are also block scoped (only in strict mode)


// Hoisting: make some types of varible accessible/usable in the code before they are actually declared variable lifted to the top of their scope
// Before execution code is scanned for variable declaration and each variable a new property is called in the variable enviornment object

// this keyword: special variable that is created for every exectution context (every function ) take the value of (point to ) the owner of the function in which the this keyword is used
// this is not static it depends on how the function is called, and its value is only assigned when the function is actually called

// primitive datatypes :-> Number ,string, Boolean, undefined, Null, symbol, BigInt
// objects :-> object literals, Arrays, FUnctions, many more...

// memory lifecycle


//MAP     :   map returns a new array containing the results of applying an operation on all original array elements


// FILTER :   filter returns a new array containing the array elements that passed a specificed test condition


// REDUCE :    reduce all array elements down to one single value (e.g. adding all elements together)


//  *) some() : some() method tests whether at least one element in the array passes the test implemented by the provided callback function

// array.some(function(element, index, array) {
    // return true or false based on condition
// })


//*)  every() : every() method tests whether all elements in the array pass the test implemented by the provided callback function

// array.every(function(element, index, array) {
    // return true or false based on condition
// })


// *)  flat() : flat() method creates a new array with all sub-array elements up to a specified depth
// array.flat(depth)
// it is useful when dealing with arrays of arrays(nested data), and you want a single-level array for easy processing

// *)  flatMap() : flatMap() method first maps each element using a mapping function, and then flattens the result by one level.
// array.flatMap(function(element, index, array) {
    // return an array or a value
// })

// *) find() : find() method returns the first element in an array that satisfies a provided testing fucntion
// array.find(function(elemet, index, array) {
    // return true or false
// })


// *) closure is created when a fucntion is able to remember and access its lexical scope(variable) even when the function is executed outside of its original scope
// A function remembers the variables tha were in scope when it was defined, even after that outer function has finished execution.

// *)  sort() : sort() method is used to sort the elements of an array in place(it modifies the original array) and returns the sorted array.
// array.sort([compareFunction])

// *) Array Groupping: => Array grouping is the process of organizing elements of an array into groups (buckets) based on a key or certain condition
// const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits' : 'withdrawal')
// console.log(groupedMovements)

// *) findIndex() : findeIndex() method returns the index of the first element in an array that staisfies a given condition(provided by a callback function)
// array.findIndex(function(element, index, array) {
    // return true or false based on condition
// })

// const numbers = [5, 12, 8, 130, 44]
// const index = numbers.findIndex(num => num > 10)
// console.log(index)

// const users = [
//     {id: 1, name: 'Alice'},
//     {id: 2, name: 'Bob'},
//     {id: 3, name: 'Charlie'}
// ]

// const index2 = users.findIndex(user => user.id === 2)
// console.log(index2)


// *)  findLast() : findLast() method returns the last elements in an array that satisfies a provided testing function
// array.findLast(callback(element, index, array))

// const numbers = [5, 12, 8, 130, 44]
// const lastMatch = numbers.findLast(num => num > 10)
// console.log(lastMatch)

// *) findLastIndex() : findLastIndex() method returns the index of the last element in an array that satisfies a provided testing function
// array.findLastIndex(callback(element, index, array))

// const numbers = [5, 12, 8, 130, 44]
// const lastIndex = numbers.findLastIndex(num => num > 10)
// console.log(lastIndex)

//  *) reverse() :=> reverse() method reverse the elements of an array it modifies the original array 
// array.reverse()

//  *) toReversed() :=> toReversed() method returns a new array with elements in reverse order
//  const newArray = array.toReversed()


// for referense

//  ---to mutate original---     
// *add orignial:
    // -> .push  (end)
    // -> .unshift (start)
// *remove from original:
    // -> .poop  (end)
    // -> .shift (start)
    // -> .splice   (any)
// *others:
    // -> .reverse
    // -> .sort
    // -> .fill

// ---A new array based on original
// *Same length as original:
    // -> .map  (loop)
// *Filtered using condition:
    // -> .filter
// *Taking portion of original:
    // -> .slice
// *With one item replaced:
    // -> .width
// *Flattened:
    // .flat
    // .flatMap
// *Reversed:
    //  .toReversed
// *Sorted:
    //  .toSorted
// *With deleted items:
    //  .toSpliced
// *Joining two arrays:
    //   .concat

// ---An array index---
//  *Based on value:
    //  .indexOf
//  *Based on test condition:
    // .findIndex
    // .findLastIndex

//  ---An array element---
// *Based on test condition:
    // .find
    // .findLast
// *Based on position:
    // .at

// ---Know if array includes---
// *Based on value:
    //  .includes
// *Based on test condition:
    //  .some
    // .every

// ---A new String---
// *Based on separator
    // .join

// ---To transform to value---
// *Based on accumulator
    // .reduce   (Boil down array to single value of any type: or even new array or object)

// ---To just loop array---
// *Based on callback:
    // .forEach   (Does not create a new array.just loops over it.)


// Array Tools
// Grouping an array by crategories:
    // object.groupBy

// Creating a new array from scratch:
    // Array.from

// Creating a new array from scratech with n empty position (use together with .fill method)
    // new Array(n)

// Joining2 or more arrays:
    // [...arr1, ...arr2]

// Creating a new array containing unique values from arr
    // [...new Set(arr)]

// Creating a new array containing unique elements that are present in both arr1 and arr2
    // [...new Set(arr1).intersection(new Set(arr2))]
    


// DOM is the intrface between javascript and browser 
// Allows us to make javascript interact with browser
// We can write Javascript to create modify and delete html elements
// DOM tree is generated from html document which we can then intract with


//Propagation :=>  in the DOM when an event occurs(like a click), it doesn't just trigger the handler on the element itself. it goes through a process called Event Propagation.
// there are three phases of event propagation
// 1. Caapturing Phase(capture phase)
// 2. Target Phase
// 3. Bubbling Phase

// 1 =>  Capturing Phase  :->  In the Capturing Phase, the event starts from the window object and travels down the DOM tree towards the target element
// 2 =>  Target Phase   :-> This is when the event reaches the actual target element where the event occurred(eg the button itself). Both capture and bubble phase handlers can run during this phase, but mostly it is implicit
// 3 =>  Bubbling Phase :-> In the Bubling Phase the event bubbles back up from the target element to the root(window)

// EventDelegation  :-> event delegation is a technique where instead of attaching event listeners to multiple child elements, we attach a single event listener to a common ancestor (parent) then we use the event's target property to determine which child was interacted with
// Why Use Event Delegation : -> *improves performance, *Easier to manage dynamic elements(added after page load), *Less memory consumption(fewer event listener)
//  

// different types of the script loading

// 1) Regular -> end of body
//  *) Browser stops parsing HTMl when it finds script 
//  *) Dowload script, runs it, then continues building the page,
//  *)This is can block the page from showing quickly

// 2) async -> async in head 
//  *) Script loads in parallel with HTML parsing
//  *) When the file is ready , browser pause HTML, runs the script, then continues
//  *) Script run as soon as they are downloaded -> order is not guaranteed
//  *) Good for independent  script 

// 3) deffer -> deffer in head
//  *) SCript loads in parallel with HTML parsing 
//  *) But execution is delayed until the HTML is fully parsed.
//  *) Script with defer keep their order(1st, 2nd, 3rd..)
//  *) Best for most app scripts: page loads fast, DOM is ready, and order is safe.

// Object Oriented Programming with javascript
// oop:
//  is a programming paradam based on object , we use object to modal to describe the real-world or abstract version
// Object may contain data(property) and code(methods) By using object , we pack data and the corresponding behaviour into one block 
// In oop object are self-contained pices/block of code -> we group related data(variables) and behaviour(methods) together into a single unit as an object. that objects are like mini-program because it is self contained block

// Classes and Instance (traditional oop)
// *) class is a blueprint from which we can create new object

// <--Properties of the oops-->
// 1)Absraction :-> ignoring or hinding details that don't matter, allowing usr to get an overview perspective of the thing we're implementing,instead of messing with details that don't really matter to our implementation.
// 2)Encapsulation :-> keeping propeties and methods private inside the class, so they are not accessible from outside the class, Some methods can be exposed as a public interface (API)
// 3)Inheritance  :-> Making all properties and methods of a certain class available to a child class forming a hierarchica; relatioship between classes. This allows us to reuse common logic and to model real-world relatioship
// 4)Polymorphism :-> A child class can overwrite a method it inherit from a parent class 

// oop in javscript
// *)Prototypal inheritance: The prototype contains methods (behavior) that are accessible to all objects linked to that prototype
// three way to implement prototypal inheritance in javascript ::

// 1)Constructor functions :-
//  * Technique to create objects from a function
//  *This is how built-in objects like Arrays,Maps, or Sets are actually implemented.
// 2)ES6 classes
//  * Modern alternative to constructor function syntx
//  * Syntatic sugae behind the secenes ES6 classes work exactly like constructor functions
//  * ES6 classes do NOT behave like classes in "classical OOP" 
// 3)Object.create()
//  *The easiest and most straightforward way of linking an object to a prototype object.

//  Prototype inheritance / delegation work


// ES6 classes
// 1.classes are not hoisted
// 2.Classes are first class citizen
// 3. Classses are executed in strict mode

// inheritance between classes 
//      the real classes are not existing in the javascript
//      


// project planning
// 1.users stories :- user's prespective all users stroies put toghther dec\scribe the enteire application
// 2.features
// 3.flowchart:- what we will build
// 4.Architecture:- how we will build it
// Development


// synchronous code :- 
//  *) simply means excute tha code line by line in the exact order of excution
//  *) Each line of code waits for previous line to finish eg: alert box
//  *) Long-running operations block code execution -> demerit

//  Asynchronous :-
//  *)Asynchronous code is executed after a task that runs in the "backgorund" finishes
//  *)Asynchronous code is non-blocking
//  *)Execution doesn't wait for an asynchronous task to finish its work
//  *) Callback functions alone do not make code asynchronous!, it depends on calls the callback it it's immediatley called then -> synchronous  , if it is called later (like after a timer, event, or network request) -> asynchronous

// AJX :- Asynchronous Javascript And Xml : allows us to commun icate with remote web servers in asynchronous way, With AJAx calls, we can request data from web servers dynamically.

// API :- Application Programming Interface : Piece of software that can be used by another piece if software, in order to allow applications to talk to each other and exchange informations between them.

// Online API :- Application running on a server, that recives request for data, and sends data back as response.
