const express = require("express");
const blog = require("./routes/blog");
const shop = require("./routes/shop");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/blog", blog);
app.use("/shop", shop);

app.get("/", (req, res) => {
  console.log("Get Request");
  res.send("Hello World");
});

app.get("/index", (req, res) => {
  console.log("Index");
  //   res.send("Hello index");
  res.sendFile("templates/index.html", { root: __dirname });
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4, name: ["swaraj", "kartik"] });
});

app.post("/", (req, res) => {
  console.log("Post Request");
  res.send("Hello World Post");
});

app.listen(3000, () => {
  console.log(`Serving on port ${port}`);
});
