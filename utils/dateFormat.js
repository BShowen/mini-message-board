const options = {
  month: "short",
  day: "numeric",
  year: "numeric",
};
const dateTimeFormatter = new Intl.DateTimeFormat("en-US", options);

module.exports = dateTimeFormatter;
