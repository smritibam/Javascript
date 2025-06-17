//Q1create a variable of type string and try to add a number to it
let a = "hello";
let b = 35
console.log(a + b)//string+number
//output=hello35

//Q2.find datatype of string using typeof
console.log(a);//printing the value
console.log(typeof (a+b))//type of variable

//Q3.create a const object .Can you change it to hold a number later

const obj = { 
    name: "smriti",
    section:1,
    isPrincipal:false
}
//obj="hahaha" (constant object cannot hold string or num value)

//Q4-add new  key to  const object 
obj['hawa']= "bataas"
obj['friend'] = "swikriti"
console.log(obj)

const a2 = 45 //new variable
console.log(a2)

//Q5 write a program to create a word meaning dictionary of 5 word

const dictionary = {
    appreciate: "recognize the full worth of",
    galactoid: "milky or resembling milk",
    tantalize: "to torment with something desirable that is just out of reach",
    cockamamie: "ridiculous, pointless, or nonsensical",
    errantry:"behavior or performance like that of a traveling knight"
    }
    console.log(dictionary)
