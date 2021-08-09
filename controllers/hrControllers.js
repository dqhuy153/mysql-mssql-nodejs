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
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const middleInitial = req.body.middleInitial;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const email = req.body.email;
    const socialSecurityNumber = req.body.socialSecurityNumber;
    const phoneNumber = req.body.phoneNumber;
    const gender = req.body.gender;
    const driversLicense = req.body.driversLicense;
    const maritalStatus = req.body.maritalStatus;
    const shareholderStatus = req.body.shareholderStatus;
    const benefitPlans = req.body.benefitPlans;
    const ethnicity = req.body.ethnicity;

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
    const employeeId = req.body.id;

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const middleInitial = req.body.middleInitial;
    const address1 = req.body.address1;
    const address2 = req.body.address2;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const email = req.body.email;
    const socialSecurityNumber = req.body.socialSecurityNumber;
    const phoneNumber = req.body.phoneNumber;
    const gender = req.body.gender;
    const driversLicense = req.body.driversLicense;
    const maritalStatus = req.body.maritalStatus;
    const shareholderStatus = req.body.shareholderStatus;
    const benefitPlans = req.body.benefitPlans;
    const ethnicity = req.body.ethnicity;

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
    const employeeId = req.body.id;

    hr.deleteEmployee(employeeId, (result) => {
      res.status(200).json(result);
    });
  },
};
