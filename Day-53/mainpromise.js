import fs from "fs/promises";

let a = await fs.readFile("file.txt");

let b = await fs.writeFile("file.txt", "Introduction to promises");
console.log(a.toString() ,b);
