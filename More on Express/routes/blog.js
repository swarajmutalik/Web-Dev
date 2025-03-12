const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/about", (req, res) => {
  res.send("About Birds");
});

router.get("/blogpost/:slug", (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`);
});

module.exports = router;
