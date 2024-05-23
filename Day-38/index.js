console.log("Loops");

let a = 1;
// console.log(a);
// console.log(a + 1);
// console.log(a + 2);


// for Loop
for(let i = 0; i < 100; i++){
    console.log(a + i)
}

// for..in Loop 
let obj = {
  name: "Swaraj",
  role: "Data Analyst",
  company: "NewAI",
};

for (const key in obj) {
  console.log(key);
}

// for..of Loop 
for (const c of "Swaraj") {
  console.log(c);
}

// while Loop 
let i = 0;
while (i < 60) {
  console.log(i);
  i++;
}

// do..while Loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j < 6);
