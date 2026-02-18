//!loops
//! do while
//do{}while(condition)

let i = 11;
do {
    //logic
    console.log(i)
    //i=i+1
    i++
} while (i <= 10)

//while
//while(condition){}
let j = 11;
while (j <= 10) {
    console.log('while', j);
    j++
}
//for
//for(initialization;condition;inc/dcr){}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}
control transfer statement
break,continue
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
}
for (let i = 0; i <= 10; i++) {
      if (i == 5) {
        continue;
      }
    console.log(i)
 }
print even number 1-10
for (let i = 0; i <= 10; i++) {
    if (i % 2===1) {
          continue
    }
    console.log(i)
  }
//for in
//for of
