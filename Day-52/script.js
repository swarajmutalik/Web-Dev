// const http = require("node:http");

// import http from "http";

// const hostname = "127.0.0.1";
// const port = 3000;
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/html");
//   res.end("<h1> Hello World</h1>");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server is running at http://${hostname}:${port}/`);
// });

// import { a, b, c, d, e } from "./mymodules.js";
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// import name from "./mymodules.js";
// console.log(name);

const a = require("./oldmodules.js");
console.log(a, __dirname, __filename);
