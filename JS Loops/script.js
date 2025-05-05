console.log("JS Loops");

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }

let obj = {
  name: "Swaraj",
  role:"CyberSecurity Analyst",

}

for (const key in obj) {
    const element = obj[key]; 
    console.log(element);   
}

for (const c of "Swaraj") {
  console.log(c);
}

i = 5;
while (i < 6){
  console.log(i);
  i++;
}