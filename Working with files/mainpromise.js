import fs from "fs/promises";

let a = await fs.readFile("swaraj.txt");
let b = await fs.appendFile("swaraj.txt", "\n\n\ngood one");

console.log(a.toString(),b);
