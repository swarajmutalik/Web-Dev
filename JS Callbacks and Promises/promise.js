console.log("This is a Promise");
let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was generated");
  } else {
    setTimeout(() => {
      console.log("Yes I am done");
      resolve("Harry");
    }, 3000);
  }
});

let prom2 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a < 0.5) {
    reject("No random number was generated too");
  } else {
    setTimeout(() => {
      console.log("Yes I am done 2");
      resolve("Harry2");
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

let prom3 = Promise.all([prom1, prom2]);
prom3
  .then((a) => {
    console.log(a);
  })
  .catch((e) => {
    console.log(e);
  });

let prom4 = Promise.allSettled([prom1, prom2]);
prom4
  .then((a) => {
    console.log(a);
  })
  .catch((e) => {
    console.log(e);
  });

let prom5 = Promise.race([prom1, prom2]);
prom5
  .then((a) => {
    console.log(a);
  })
  .catch((e) => {
    console.log(e);
  });
