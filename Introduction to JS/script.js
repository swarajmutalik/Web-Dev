alert("Hello");

console.log("Code is running");

var a = prompt("Enter your number:");
var isTrue = confirm(
  "Are you sure you want to leave this page and blast your computer "
);

if (isTrue) {
  console.log("Computer is blasting");
} else {
  console.log("Computer is not blasting");
}

console.log("Your number is " + a);
