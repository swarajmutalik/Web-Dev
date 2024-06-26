console.log("Introduction to promises.");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was generated");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Swaraj");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was generated 2");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Swaraj 2");
    }, 1000);
  }
});

// prom1
//   .then((a) => {
//     console.log(a);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let p3 = Promise.race([prom1, prom2]);
p3.then((a) => {
  console.log(a);
}).catch((err) => {
  console.log(err);
});
