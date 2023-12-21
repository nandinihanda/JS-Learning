console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

// above are all basic operators

console.log(null > 0) // output: false
console.log(null == 0) // output: false
console.log(null >= 0) // output: true

// The reason is that an equality check == and comparisions >, <, >=, <= work differently.
//Comparisions convert null to a number, treating it as 0.

console.log("2" === 2) //this will check the datatype as well