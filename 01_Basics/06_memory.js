// Stack memory is used in primitive types

// Heap memory is used in non primitive types

let name1="nandini"
let name2=name1
name2="ayana"            //data goes to stack memory
console.log(name1);
console.log(name2);

let user1={
    email:"test@gmail.com",
    age:"25"                       //data goes to heap memory
}
let user2=user1
user2.email="demo@gmail.com"
console.log(user1.email);
console.log(user2.email);