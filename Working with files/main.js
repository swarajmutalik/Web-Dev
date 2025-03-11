const fs = require("fs");

console.log("Start");
fs.writeFileSync("swaraj.txt", "Hello how is it going?");
fs.writeFile("swaraj2.txt", "He is a good boy", () => {
  console.log("Done");
  fs.readFile("swaraj2.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("swaraj.txt", "jhtnkhn", (e,d) => {
    console.log(d)
})

console.log("End");
