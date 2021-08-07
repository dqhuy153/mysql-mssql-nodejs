const pr = require("../models/pr");

module.exports = {
  //GET: /pr/employees
  getAllEmployees(req, res, next) {
    pr.getAllEmployees((result) => {
      res.status(200).json(result);
    });
  },

  //GET: /pr/employees/:idEmployee
  getEmployee(req, res, next) {
    const idEmployee = req.params.idEmployee;

    pr.getEmployee(idEmployee, (result) => {
      res.status(200).json(result);
    });
  },

  //POST: /pr/new-employee
  addNewEmployee(req, res, next) {
    const Employee_Number = 3;
    const idEmployee = 3;
    const Last_Name = "A";
    const First_Name = "Nguyen";
    const SSN = 3243;
    const Pay_Rate = 3;
    const Payrates_id = 1;
    const Vacation_Days = 10;
    const Paid_To_Date = 99;
    const Paid_Last_Year = 99;

    pr.addNewEmployee(
      {
        Employee_Number,
        idEmployee,
        Last_Name,
        First_Name,
        SSN,
        Pay_Rate,
        Payrates_id,
        Vacation_Days,
        Paid_To_Date,
        Paid_Last_Year,
      },
      (result) => {
        res.status(200).json(result);
      }
    );
  },

  //PUT: /pr/employees (update)
  updateEmployee(req, res, next) {
    const idEmployee = req.body.id;

    const Employee_Number = 3;
    const Last_Name = "B";
    const First_Name = "Nguyen";
    const SSN = 300;
    const Pay_Rate = 3;
    const Payrates_id = 2;
    const Vacation_Days = 12;
    const Paid_To_Date = 90;
    const Paid_Last_Year = 99;

    pr.updateEmployee(
      {
        Employee_Number,
        idEmployee,
        Last_Name,
        First_Name,
        SSN,
        Pay_Rate,
        Payrates_id,
        Vacation_Days,
        Paid_To_Date,
        Paid_Last_Year,
      },
      (result) => {
        res.status(200).json(result);
      }
    );
  },

  //DELTE: /pr/employees
  deleteEmployee(req, res, next) {
    const idEmployee = req.body.id;

    pr.deleteEmployee(idEmployee, (result) => {
      res.status(200).json(result);
    });
  },
};
