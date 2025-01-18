for (let i = 0; i < 100; i++) {
  console.log(i);
}

let obj = {
  name: "Swaraj",
  role: "SOC Analyst",
  Company: "BT",
};

for (const key in obj) {
  console.log(key);
}

for (const c of "Swaraj") {
  console.log(c);
}

let a = 0;
while (a < 5) {
  console.log(a);
  a++;
}

let b = 10;
do {
  console.log(b);
} while (b < 6);
