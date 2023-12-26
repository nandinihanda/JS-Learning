//singleton
//Object.create

//object literals
const mySym=Symbol("key1")
const jsuser={
    name:"Nandini",
    "full name":"Nandini Handa",
    age:"25",
    [mySym]:"mykey1",
    location:"Bangalore",
    email:"nandini@gmail.com",
    isLoggedIn:false,
    lastlogin:["monday","friday"]
}

console.log(jsuser.email)
console.log(jsuser["email"]);
console.log(jsuser["full name"]);
console.log(jsuser[mySym]);

Object.freeze(jsuser)//it will lock the object and now we can't do any changes in it
jsuser.email="handa@gmail.com"
console.log(jsuser)