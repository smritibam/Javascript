//String in Javascript
const name = "smrit bam";
const repoCount = 50;
console.log(name + repoCount + "Value"); //Outdated way

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //Modern way to write string

//string declaration
const gamename = new String("smritbam");
console.log(gamename[0]);
console.log(gamename.__proto__); //to access the object in string
console.log(gamename.charAt(3));
console.log(gamename.indexOf("t"));

console.log(gamename.length);
console.log(gamename.toUpperCase());

const newString = gamename.substring(0, 4);
console.log(newString); //it reads from 0 to 3 of string"smrit"

const str = gamename.slice(-8, 4);
console.log(str); 


//trim and replace method
const newStringOne = "  smrit  "
console.log(newStringOne)
console.log(newStringOne.trim())//removes starting and ending spaces

//const new = newStringOne.trim(new)
//console.log(new)

const url="https://www.youtube.com/youtube#"
console.log(url.replace("#","+"))

console.log(url.includes("youtube"))//to check if the string is present or not

//use mdn reference for more string methods