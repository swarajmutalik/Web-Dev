const { error } = require("console");
const fs = require("fs");
// console.log(fs);

console.log("Starting");
// fs.writeFileSync("file.txt", "Hello World");

fs.writeFile("newfile.txt", "New File is Created", () => {
  console.log("Done");
  fs.readFile("newfile.txt", (error, data) => {
    console.log(error, data.toString());
  });
});

fs.appendFile("file.txt", " How are you doing ? I am fine thank you for asking", (e, d) => {
  console.log(d);
});
console.log("Ending");
