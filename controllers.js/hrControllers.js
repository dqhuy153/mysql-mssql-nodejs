const mssql = require("mssql");

const hr = require("../database/hr-sql-server");

module.exports = {
  //GET: /hr/employees
  getAllEmployees(req, res, next) {
    hr.then((err) => {
      if (err) console.log(err);

      // create Request object
      return mssql.query`select * from Personal`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/employee/:employeeId
  getEmployee(req, res, next) {
    const employeeId = req.params.employeeId;

    hr.then((err) => {
      if (err) console.log(err);

      // create Request object
      return mssql.query`select * from Personal where Employee_ID = ${employeeId}`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/new-employee
  addNewEmployee(req, res, next) {
    hr.then((err) => {
      if (err) console.log(err);

      // create Request object
      return mssql.query`select * from Personal where Employee_ID = ${employeeId}`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/update-employee
  updateEmployee(req, res, next) {
    hr.then((err) => {
      if (err) console.log(err);

      // create Request object
      return mssql.query`select * from Personal where Employee_ID = ${employeeId}`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/delete-employee
  deleteEmployee(req, res, next) {
    hr.then((err) => {
      if (err) console.log(err);

      // create Request object
      return mssql.query`select * from Personal where Employee_ID = ${employeeId}`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },
};
