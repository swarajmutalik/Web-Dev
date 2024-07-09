const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time : ", Date.now());
  next();
});

// defining the home page route
router.get("/", (req, res) => {
  res.send("Birds Home Page");
});

// defining the about page
router.get("/about", (req, res) => {
  res.send("About Birds");
});

module.exports = router;
