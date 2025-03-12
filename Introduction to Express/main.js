const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Hello about");
});

app.get("/contact", (req, res) => {
  res.send("Hello contact us");
});

app.get("/blog/:slug/", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(`hello ${req.params.slug}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
