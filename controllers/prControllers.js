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
    const idEmployee = req.body.id;

    const Employee_Number = req.body.employeeNumber;
    const Last_Name = req.body.lastName;
    const First_Name = req.body.firstName;
    const SSN = req.body.SSN;
    const Pay_Rate = req.body.payRate;
    const Payrates_id = req.body.payratesId;
    const Vacation_Days = req.body.vacationDays;
    const Paid_To_Date = req.body.paidToDate;
    const Paid_Last_Year = req.body.paidLastYear;

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

    const Employee_Number = req.body.employeeNumber;
    const Last_Name = req.body.lastName;
    const First_Name = req.body.firstName;
    const SSN = req.body.SSN;
    const Pay_Rate = req.body.payRate;
    const Payrates_id = req.body.payratesId;
    const Vacation_Days = req.body.vacationDays;
    const Paid_To_Date = req.body.paidToDate;
    const Paid_Last_Year = req.body.paidLastYear;

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
