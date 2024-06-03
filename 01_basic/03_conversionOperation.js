let score = true

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0

let isLoggedIn = ""
let valueInBoolean = Boolean(isLoggedIn)

console.log(valueInBoolean);

// 1 => true; 0 => false
// "" => false
// "Vijay" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// ******************************************** Operations *************************************************

let value =3
let negValue = -value
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); 2 to power 3
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello "
let str2 = "Vijay"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 +2);
console.log(1 + 2 + "32");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num2);


let gameCounter = 100
gameCounter++
console.log(gameCounter);

/*
link to study
https://tc39.es/ecma262/#sec-abstract-operations
*/