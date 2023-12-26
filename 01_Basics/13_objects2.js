const gmailuser=new Object() //singleton object
const yahoouser={} // non-singleton object

gmailuser.id="123"
gmailuser.name="Nandini"
gmailuser.isloggedin=false



console.log(gmailuser);
//console.log(yahoouser);

const user1={
    email:"test@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nandini",
            lastname:"Handa"
        }
    }
}
console.log(user1.fullname.userfullname);

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}

const obj3=Object.assign(obj1,obj2)  //first syntax to join the objects
console.log(obj3);

const obj4=Object.assign({},obj1,obj2)  //second syntax to join the objects
console.log(obj4);

//both methods will give you the same output

const obj5={...obj1,...obj2}
console.log(obj5);