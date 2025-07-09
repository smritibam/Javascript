//#NUMBERS
const score = 400;
console.log(score);
console.log(typeof score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); //for decimal value
//console.log(typeof balance)
const otherNumber = 123.8966;
console.log(otherNumber.toPrecision(3)); //for precision value
const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //1,000,000 for us standard
console.log(hundreds.toLocaleString("en-IN")); //10,00,000 for indian standard\n

//+++++Maths+++
console.log(Math); //object in itself
console.log(Math.abs(-4)); //change negative to positive

console.log(Math.round(4.6)); //roundoff value
//console.log(Math.ceil(4.6))
//console.log(Math.floor(4.6))//ceil and floor are to choose upper & lower value in roundoff

console.log(Math.min(4, 8, 9, 5, 3, 6));
console.log(Math.max(4, 8, 9, 5, 3, 6)); //highest and lowest value of array

console.log(Math.random()); //0 to 1 value
console.log(Math.random() * 10 + 1); //1 to 10 value

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //values are greater than min and less than max
