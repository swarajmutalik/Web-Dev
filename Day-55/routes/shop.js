const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Shop home page");
});

router.get("/about", (req, res) => {
  res.send("About shop");
});

module.exports = router;
