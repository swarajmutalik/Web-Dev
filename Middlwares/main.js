const exp = require("constants");
const express = require("express");
const { fstat } = require("fs");
const app = express();
const fs = require("fs");
const port = 3000;

app.use(express.static("public"));

app.use((req, res, next) => {
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.params} \n`);
  console.log(`${Date.now} is a ${req.method}`);
  // console.log("m1");
  next();
});

app.use((req, res, next) => {
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello about");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
