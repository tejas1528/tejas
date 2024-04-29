let age = undefined

console.log(typeof age)
console.log(typeof(age))

let valueInNUmber = Number(age)
console.log(typeof valueInNUmber)
console.log(valueInNUmber)

/*
"33" --> 33,type-number
"33abc" --> Nan(not a number), type-number
true --> 1,false --> 0, type-number
*/


let isLoggedIn = "t"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

//any number except 0 --> true
//0 --> false
//"" -->false
//"anything in  between" --> true

let numberNum = 22

let stringNum = String(numberNum)
console.log(stringNum)
console.log(typeof stringNum)