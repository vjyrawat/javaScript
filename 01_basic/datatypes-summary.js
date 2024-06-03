/* 
Primitive 

7 types : String, Number, Boolean, null, undefined, Symbol, BigInt
*/


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(id);
console.log(anotherId);

const bigNumber = 342765898967n

/*
Reference (Non Primitive)

Arry, Objects, Functions
*/

const heros = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name : "Vijay",
    age : 22
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof myFunction);