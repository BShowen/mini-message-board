var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const messages = [
    {
      title: "My first message",
      body: "The body of my first message",
    },
    {
      title: "My second message",
      body: "The body of my second message",
    },
    {
      title: "My third message",
      body: "The body of my third message",
    },
  ];
  res.render("index", { messages });
});

module.exports = router;
