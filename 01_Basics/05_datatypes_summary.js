// Primitive Datatypes

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123")
const new_id = Symbol("123")

console.log(id == new_id); //output: false

// Reference (Non primitive) Datatypes

// Array, Objects, Functions

const fruits = ["apple","mango","grapes"]; // array

let data = {
    name: "Nandini",  //object
    age: 25
}

function demo()
{
    console.log("Hello world"); //function
}