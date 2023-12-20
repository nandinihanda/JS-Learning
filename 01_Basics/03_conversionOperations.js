let score = "33"

console.log(typeof score)
let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true
// 0 => false
//"" => false
//"nandini" => true

let number= 33

let stringNumber= String(number)
console.log(stringNumber)
console.log(typeof stringNumber)

//**********************************Operations*************************************

let value = 3
let negvalue = -value
console.log(negvalue)
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**2) //power
console.log(2/3)
console.log(2%3)

let str1 = "nandini"

let str2 = " handa"
let str3 = str1 + str2
console.log(str3);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

let counter = 100
counter++ //postfix, gives value 101
console.log(counter)

++counter //prefix, gives value 102
console.log(counter)

