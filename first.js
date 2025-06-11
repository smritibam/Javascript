//Variable declaration rules
let a = 67;
console.log(a);
a = "harry";
console.log(a);
//var 6harry=7//not allowed(against rule of naming variable))
//let var=8(var is reserved keyword of js)
let $ = 45;
console.log($);
let _ = 45;
console.log(_);
let harry = 450;
console.log(harry);
var Harry = 790; //case sensitive
console.log(Harry);

//variable properties
const accountId = 144553;
let accountEmail = "hitesh@google.com";
var accountPassword = "12345";
accountcity = "jaipur";
let accountState;
//acout id=2//not allowed

accoutEmail = "hc@hc.com";
accountPassword = "21212121";
accountcity = "bengaluru";

console.table([accountId, accoutEmail, accountPassword]);

//difference between var,let,const
console.log("javacript tutorial 3:var,let,const");
var a = 45;
var a = "this"; //same variable can be declared again
var c = null;
var d = undefined;
const author = "smriti"; //cant be changed cant be redeclared and needs initialization during declaration
{
  var b = "harry";
  console.log(b);
}
console.log(a);
console.log(author);

let k;
k = 50;
console.log(k); //doesnt need initialization during declaration same goes for var

//let k="samosa" //cant be redeclared
