const express = require("express");
const router = express.Router();

router.post("/new", (req, res) => {
  console.log(req.body["author"]);
  console.log(req.body["message-content"]);
  res.redirect("/");
});

module.exports = router;
