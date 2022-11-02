var addDays = require("date-fns/addDays");

module.exports = function (days) {
  let result = addDays(new Date("2020-08-22"), days);
  return (
    result.getDate() +
    "-" +
    (result.getMonth() + 1) +
    "-" +
    result.getFullYear()
  );
};
