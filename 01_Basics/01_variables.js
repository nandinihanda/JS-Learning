const accountId=182799
let accountEmail="nandini@gmail.com"
var accountPassword="123456"
accountCity="Bangalore"
let accountState

// accountId=2 // not allowed

accountEmail="handa@gmail.com"
accountPassword="564789"
accountCity="Pune"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/* Prefer not to use var because of issue in block scope and functional scope */