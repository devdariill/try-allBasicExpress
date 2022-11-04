// const express = require("express");
const {Router} = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Home Page");
});
router.get("/about", (req, res) => {
  res.sen("About Page");
});

module.exports = router;

// function HomeRoutes(app) {
//   app.get("/", (req, res) => {
//     res.send("Home Page");
//   });
//   app.get("/about", (req, res) => {
//     res.send("About Page");
//   });
// }
// module.exports = HomeRoutes;

