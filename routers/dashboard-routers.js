const express = require("express");
const hrControllers = require("../controllers.js/hrControllers");
const prControllers = require("../controllers.js/prControllers");

const Router = express.Router();

//pr
Router.get("/pr/employees", prControllers.getAllEmployees);

Router.get("/pr/employees/:idEmployee", prControllers.getEmployee);

Router.get("/pr/new-employee", prControllers.addNewEmployee);

Router.get("/pr/update-employee", prControllers.updateEmployee);

Router.get("/pr/delete-employee", prControllers.deleteEmployee);

//hr
Router.get("/hr/employees", hrControllers.getAllEmployees);

Router.get("/hr/employees/:employeeId", hrControllers.getEmployee);

Router.get("/hr/new-employee", hrControllers.addNewEmployee);

Router.get("/hr/update-employee", hrControllers.updateEmployee);

Router.get("/hr/delete-employee", hrControllers.deleteEmployee);

module.exports = Router;
