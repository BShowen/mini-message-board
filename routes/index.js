var express = require("express");
var router = express.Router();

const options = {
  month: "short",
  day: "numeric",
  year: "numeric",
};
const dateTimeFormatter = new Intl.DateTimeFormat("en-US", options);

const messages = [
  {
    author: "Edward",
    body: "The body of my first message",
    date: dateTimeFormatter.format(new Date()),
  },
  {
    author: "Laila W.",
    body: "The body of my second message",
    date: dateTimeFormatter.format(new Date()),
  },
  {
    author: "Erik",
    body: "The body of my third message",
    date: dateTimeFormatter.format(new Date()),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { messages });
});

router.post("/new", (req, res) => {
  const newMessage = {
    author: req.body["author"],
    body: req.body["message-content"],
    date: dateTimeFormatter.format(new Date()),
  };
  messages.push(newMessage);
  res.redirect("/");
});

module.exports = router;
