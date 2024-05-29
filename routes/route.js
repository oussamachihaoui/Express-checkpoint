const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "home.html"));
});

router.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "contact.html"));
});

router.get("/services", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "services.html"));
});

module.exports = router;
