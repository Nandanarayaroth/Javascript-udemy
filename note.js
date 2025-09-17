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
