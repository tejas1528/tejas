const name = "tejas"
const age = 22

// console.log(name + age + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${age}`);

const gameName = new String('tejas-ts-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// console.log(gameName);

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-9, 6)
console.log(anotherString);

const newStringOne = "   tejas    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tejas.com/tejas%20shah"

console.log(url.replace('%20', '-'))

console.log(url.includes('tejas'))
console.log(url.includes('shah'))

console.log(gameName.split('-'));