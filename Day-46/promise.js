console.log("Introduction to Promises.");

let prom1 = new Promise((resolve, reject) => {
  let a = Math.random();
  if (a > 0.5) {
    reject("No random number was generated.");
  } else {
    setTimeout(() => {
      console.log("Yes I am done.");
      resolve("Swaraj");
    }, 3000);
  }
});
