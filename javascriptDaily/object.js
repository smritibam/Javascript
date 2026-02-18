// objects
//new keyword
const obj=new Object()
//object literal
const user = {
    name: 'Smriti',
    email: 'smriti@123',
    age: 34
}
// console.log(user)
// * accessing object properties
console.log(user.email)//
let user_email = user.email
console.log(user_email);

// *bracket notation([])in cases of space we cannot use dot so we use this()
console.log(user['name'])
console.log(user["user age"]);

let key = 'name'
// console.log(user.key)
console.log(user["key"]);
console.log(user[key]);

// !modify object properties
user.age = 27
console.log(user.age);

// adding new properties
user.password = 12345
console.log(user);

delete user.age
// {}
const user1 = {
  name: "Smriti",
  email: "smriti@123",
  age: 34,
  address:{
      city: '',
      street:123
  }
}
console.log(user1.address.street)

if (user.address) {
    if (user.address.street) {
        console.log(user.address.street)
    }
}

