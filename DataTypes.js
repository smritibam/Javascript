/*
for document read using ecma(tc39.es)
"Sometimes, you can use MDN documentation, but for the original documentation, use ECMAScript."
*/

//Datatype conversion
let score = "33abc"; // string to number
console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber); //prints score as a number type

console.log(valueInNumber); //show the value of score as NaN(not a number)because score  has a string value

//"33"= 33
//"33abc"=NaN
//true=1;false=0

let inlog = true; //boolean to number
console.log(inlog);
let logical = Number(inlog);
console.log(logical);

//day3. Primitive Data types:String,Number,Boolean,Null,Undefined,Symbol,BigInt

let a = null;
let b = 345;
let c = true; // can also be false
let d = BigInt("567");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
console.log(a, b, c, d, e, f, g);
console.log(typeof c); //type of variable
console.log(typeof g);

const int = 100;
const scorevalue = 100.3;
const isLoggedIn = false;
const outsideTemp = null; //empty temp value
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

const bigNumber = 34567890987654321n;

//Reference type(non primitive):Array,Objects,Functions
const heros = ["shaktiman", "naagraj", "doga"]; //Array

let obj = {
  name: "smriti",
  age: 22,
}; //object
console.log(obj);
console.log(heros);

const myfunction = function () {
  console.log("hello isshh");
};
console.log(typeof myfunction); //datatype :object function

//Datatype of nonprimitive function is Object
