const express = require("express");
const generalInfoControllers = require("../controllers/generalInfoControllers");

const hrControllers = require("../controllers/hrControllers");
const prControllers = require("../controllers/prControllers");

const apiRouter = express.Router();

//API
//pr
apiRouter.get("/pr/employees", prControllers.getAllEmployees);

apiRouter.get("/pr/employees/:idEmployee", prControllers.getEmployee);

apiRouter.post("/pr/new-employee", prControllers.addNewEmployee);

apiRouter.post("/pr/update-employee", prControllers.updateEmployee);

apiRouter.post("/pr/delete-employee", prControllers.deleteEmployee);

//hr
apiRouter.get("/hr/employees", hrControllers.getAllEmployees);

apiRouter.get("/hr/employees/:employeeId", hrControllers.getEmployee);

apiRouter.post("/hr/new-employee", hrControllers.addNewEmployee);

apiRouter.post("/hr/update-employee", hrControllers.updateEmployee);

apiRouter.post("/hr/delete-employee", hrControllers.deleteEmployee);

module.exports = apiRouter;

//generalInfo
apiRouter.get("/generalInfo", generalInfoControllers.getGeneralInfo);

apiRouter.get("/generalInfo/update", generalInfoControllers.updateGeneralInfo);
