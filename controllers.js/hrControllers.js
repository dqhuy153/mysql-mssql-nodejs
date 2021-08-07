const hr = require("../models/hr");

module.exports = {
  //GET: /hr/employees
  getAllEmployees(req, res, next) {
    hr.getAllEmployees((hrEmployees) => {
      res.status(200).json(hrEmployees);
    });
  },

  //GET: /hr/employee/:employeeId
  getEmployee(req, res, next) {
    const employeeId = req.params.employeeId;

    hr.getEmployee(employeeId, (hrEmployee) => {
      res.status(200).json(hrEmployee);
    });
  },

  //POST: /hr/new-employee
  addNewEmployee(req, res, next) {
    const firstName = "D";
    const lastName = "Nguyen Van";
    const middleInitial = "Abc";
    const address1 = "Da nang";
    const address2 = "a";
    const city = "Da nang";
    const state = "DN";
    const zip = "55000"; //numeric
    const email = "a@gmail.com";
    const socialSecurityNumber = "abc";
    const phoneNumber = "0905053532";
    const gender = true;
    const driversLicense = "abc";
    const maritalStatus = "abc";
    const shareholderStatus = true;
    const benefitPlans = 1; //numeric
    const ethnicity = "abc";

    hr.addNewEmployee(
      {
        firstName,
        lastName,
        middleInitial,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        socialSecurityNumber,
        phoneNumber,
        gender,
        driversLicense,
        maritalStatus,
        shareholderStatus,
        benefitPlans,
        ethnicity,
      },
      (result) => {
        res.status(200).json(result);
      }
    );
  },

  //POST: /hr/update-employee
  updateEmployee(req, res, next) {
    const employeeId = req.body.employeeId || 5;

    const firstName = "D";
    const lastName = "Nguyen Van";
    const middleInitial = "Abc";
    const address1 = "Da nang";
    const address2 = "a";
    const city = "Da nang";
    const state = "DN";
    const zip = "55000"; //numeric
    const email = "ab@gmail.com";
    const socialSecurityNumber = "abc";
    const phoneNumber = "0905053532";
    const gender = true;
    const driversLicense = "abc";
    const maritalStatus = "abcd";
    const shareholderStatus = true;
    const benefitPlans = 1; //numeric
    const ethnicity = "abcd";

    hr.updateEmployee(
      {
        employeeId,
        firstName,
        lastName,
        middleInitial,
        address1,
        address2,
        city,
        state,
        zip,
        email,
        socialSecurityNumber,
        phoneNumber,
        gender,
        driversLicense,
        maritalStatus,
        shareholderStatus,
        benefitPlans,
        ethnicity,
      },
      (result) => {
        res.status(200).json(result);
      }
    );
  },

  //GET: /hr/delete-employee
  deleteEmployee(req, res, next) {
    const employeeId = 6;

    hr.deleteEmployee(employeeId, (result) => {
      res.status(200).json(result);
    });
  },
};
