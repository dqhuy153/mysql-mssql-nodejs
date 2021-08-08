const hr = require("../models/hr");

module.exports = {
  getIndex: (req, res, next) => {
    // res.render("main");
    hr.getEmployee(3, (result) => {
      res.send(result);
    });
  },
};
