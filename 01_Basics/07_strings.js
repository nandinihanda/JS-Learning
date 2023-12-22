const name="nandini"
const repocount=50

console.log(name+repocount+" value") // old syntax
console.log(`Hello my name is ${name} and my repo count is ${repocount}`) // new syntax to join the things

const newname= new String("Nandini") // another way to declare the string using object
console.log(newname);
console.log(newname[0]);
console.log(newname.__proto__);
console.log(newname.length);
console.log(newname.toUpperCase());
console.log(newname.charAt(5))
console.log(newname.indexOf("a"))

const newstring=newname.substring(0,4)
console.log(newstring)
const anotherstring=newname.slice(-8,3)
console.log(anotherstring)

const stringnew="    nandini    "
console.log(stringnew);
console.log(stringnew.trim());

const url="https://github.com/nandinihanda/JS-Basics"
console.log(url.replace("Basics","Learning"))

console.log(url.includes("nandini"))



