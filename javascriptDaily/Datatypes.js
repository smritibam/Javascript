//*Assignment 
let d = 50;
let e = 5

//d=d+10
d += 10
console.log(d)

//comparison op
//(==),(===)

//logical operator
//and(&&),or(||),not(!)

//!ternary operator[condition? statement_a: statement_b]
let age = 17
let canVote = age >= 18 ? "yes" : 'no'
console.log(canVote)

//unary
//post/pre
let num = 0
//post inc/dec
console.log(num++)
//pre
console.log(++num)
console.log(num)
// type conversion
//implicit/type coercing
console.log(10 + '10')
console.log(10 - '5')// - dpesnt work with string
console.log(10-'a')//not a number(NaN)
// explicit =>
console.log(Number('465')); 
console.log(String(754));

console.log(Boolean(45))
console.log(Boolean("isjdjweugubf"));
console.log(Boolean(45));
console.log((Boolean(0)));

let number = 23

console.log(number.toString())
console.log(parseInt(number))

// truthy & falsy
//falsy
// *0,'',false,null,undefined
console.log(Boolean(''))
console.log(Boolean(' '));
console.log(Boolean(null));
console.log(Boolean(0))
console.log(Boolean(1));

if (age !==0) {
    console.log('run')
}
if (age) {
  console.log("run");
}
let res = null

if (res === null || res === undefined) {
    
}

if (!res) {
}

if ('') {
    console.log(true)
}


