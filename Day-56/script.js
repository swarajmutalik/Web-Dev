const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog");
const fs = require("fs");

// app.use(express.static("public"));
app.use("/blog", blog);

app.use((req, res, next) => {
  console.log(req.headers);
  req.swaraj = "Hello My name is Swaraj Mutalik";
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`);
  console.log(`${Date.now()} is a ${req.method}`);
  console.log("Middleware-1");
  // res.send("Middleware-1 has taken over");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware-2");
  req.swaraj = "I am Swaraj";
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
  console.log("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Us");
});

app.get("/contact", (req, res) => {
  res.send("Contact Us");
});

app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
