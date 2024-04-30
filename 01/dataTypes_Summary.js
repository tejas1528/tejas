/* 
--> Primitive
    -> 7 types : Number, String, Boolean, Null, Undefined, Symbol, BigInt

--> Reference(Non Primitive)
    -> Array, Objects, Functions
*/

const id = Symbol('123')
const emailId = Symbol('123')
let userEmail;
const bigNumber = 3456543576654356754n

// console.log(id == emailId);

const names = ["Tejas", "Xyz", "IAdib"]
let myObj = {
    name: "tejas",
    age: 22,
}

const myFunction = function(){
    console.log("Hello");
}

console.log(typeof myFunction);








// -------------------------------------------------------------------------------------

let myName = "Tejas"

let myNameTwo = myName
myNameTwo = "Shah"

console.log(myNameTwo);
console.log(myName);

let userOne = {
    email: "abcd@.com",
    id: 1234,
}

let userTwo = userOne

userTwo.email = "abc@gamil.com"

console.log(userOne.email);
console.log(userTwo.email);