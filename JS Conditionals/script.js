console.log("Conditionals in JS");

let age = 15;
let grace = 2;

// if ((age + grace) > 18) {
//   console.log("You can drive");
// } else {
//   console.log("You cannot drive");
// }

if (age == 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("Are you Kidding me ?");
} else {
  console.log("You cannot drive");
}

let d = 4;
let e = 6;

let c = d > e ? d - e : e - d;
console.log(c);
