//stack(primitive data type)  non primitive data type(heap)
let myYoutubeName = "smritibam";

let anothername = myYoutubeName;
anothername = "chaiaurcode";

console.log(anothername);
console.log(myYoutubeName);

let user0ne = {
  email: "user@google.com",
  upi: "user@ybl",
};
let userTwo = user0ne;
userTwo.email = "smriti@google.com";

console.log(user0ne.email);
console.log(userTwo.email);

function greet() {
  let name = "Alice"; // 'name' stored in the stack
  console.log("Hello, " + name);
}
greet(); //function call

let person = {
  name: "Alice",
  age: 30,
}; //person is reference stored in stack and object is stored in heap

let x = 10;
let y = x; // copy of x is made
y = 20;
console.log(x); // 10 — x is not affected
//x and y are stored in the stack. Changing y doesn’t affect x.

let obj1 = { name: "Ishu" };
let obj2 = obj1;
obj2.name = "Smriti";
console.log(obj1.name); // Smriti — because both point to the same object in the heap
// obj1 and obj2 store references (in the stack) to the same object in the heap.

//how heap and stack works together
let a = 5;
let b = a;
b = 10;
console.log(a); // 5 — independent copies on the stack

let d = 5;
let e = a;
f = 10;
console.log(d); // 5 — independent copies on the stack
//obj1 and obj2 on stack hold a reference to the same object on the heap

// Stack is faster but limited in size.
// Heap is slower but allows for more complex and flexible data
