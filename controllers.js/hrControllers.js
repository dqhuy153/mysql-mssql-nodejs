const mssql = require("mssql");

const hr = require("../database/hr-sql-server");

module.exports = {
  //GET: /hr/employees
  getAllEmployees(req, res, next) {
    hr.then((pool) => {
      // create Request object
      return pool.query`SELECT * FROM Personal`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/employee/:employeeId
  getEmployee(req, res, next) {
    const employeeId = req.params.employeeId;

    hr.then((pool) => {
      // create Request object
      return pool.query`SELECT * FROM Personal where Employee_ID = ${employeeId}`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/new-employee
  addNewEmployee(req, res, next) {
    const firstName = "a";
    const lastName = "a";
    const middleInitial = "a";
    const address1 = "a";
    const address2 = "a";
    const city = "a";
    const state = "a";
    const zip = "a";
    const email = "a";
    const socialSecurityNumber = "a";
    const driversLicense = "a";
    const maritalStatus = "a";
    const shareholderStatus = "a";
    const benefitPlans = "a";
    const ethnicity = "a";

    hr.then((pool) => {
      // create Request object
      return pool
        .request()
        .input("First_Name", firstName)
        .input("Last_Name", lastName)
        .input("Middle_Initial", middleInitial)
        .input("Address1", address1)
        .input("Address2", address2)
        .input("City", city)
        .input("State", state)
        .input("Zip", zip)
        .input("Email", email)
        .input("Social_Security_Number", socialSecurityNumber)
        .input("Drivers_License", driversLicense)
        .input("Marital_Status", maritalStatus)
        .input("Gender", gender)
        .input("Shareholder_Status", shareholderStatus)
        .input("Benefit_Plans", benefitPlans)
        .input("Ethnicity", ethnicity).query`INSERT INTO Personal(
        ,[First_Name]
        ,[Last_Name]
        ,[Middle_Initial]
        ,[Address1]
        ,[Address2]
        ,[City]
        ,[State]
        ,[Zip]
        ,[Email]
        ,[Phone_Number]
        ,[Social_Security_Number]
        ,[Drivers_License]
        ,[Marital_Status]
        ,[Gender]
        ,[Shareholder_Status]
        ,[Benefit_Plans]
        ,[Ethnicity])
      VALUES (@First_Name, 
        @Last_Name,
        @Middle_Initial, 
        @Address1,
        @Address2, 
        @City, @State,
        @Zip, @Email,
        @Phone_Number, 
        @Social_Security_Number,
        @Drivers_License,
        @Marital_Status,
        @Gender,
        @Shareholder_Status,
        @Benefit_Plans,
        @Ethnicity)`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/update-employee
  updateEmployee(req, res, next) {
    hr.then((pool) => {
      // create Request object
      return pool.query`select * from Personal where Employee_ID = ${employeeId}`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },

  //GET: /hr/delete-employee
  deleteEmployee(req, res, next) {
    hr.then((pool) => {
      // create Request object
      return mssql.query`select * from Personal where Employee_ID = ${employeeId}`;
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => res.send(err));
  },
};
