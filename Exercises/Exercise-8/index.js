/* Create a faulty calculator using JS 

This faulty calculator is doing the following - 
1. It is taking two numbers as input from the user
2.It is performing wrong operations as follows - 

    + --> -
    * --> + 
    - --> /
    / --> ** 

It performs wrong operations 10% of the times

*/

let random = Math.random();
console.log(random);
let a = prompt("Enter the first number");
let c = prompt("Enter Operation");
let b = prompt("Enter the second number");

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.1) {
  console.log(`The result is ${a} ${c} ${b}`);
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
