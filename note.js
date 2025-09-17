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


// some() : some() method tests whether at least one element in the array passes the test implemented by the provided callback function

// array.some(function(element, index, array) {
    // return true or false based on condition
// })


// every() : every() method tests whether all elements in the array pass the test implemented by the provided callback function

// array.every(function(element, index, array) {
    // return true or false based on condition
// })


// flat() : flat() method creates a new array with all sub-array elements up to a specified depth
// array.flat(depth)
// it is useful when dealing with arrays of arrays(nested data), and you want a single-level array for easy processing

// flatMap() : flatMap() method first maps each element using a mapping function, and then flattens the result by one level.
// array.flatMap(function(element, index, array) {
    // return an array or a value
// })

// find() : find() method returns the first element in an array that satisfies a provided testing fucntion
// array.find(function(elemet, index, array) {
    // return true or false
// })