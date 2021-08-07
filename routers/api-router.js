const express = require("express");

const hrControllers = require("../controllers.js/hrControllers");
const prControllers = require("../controllers.js/prControllers");

const apiRouter = express.Router();

//API
//pr
apiRouter.get("/pr/employees", prControllers.getAllEmployees);

apiRouter.get("/pr/employees/:idEmployee", prControllers.getEmployee);

apiRouter.post("/pr/new-employee", prControllers.addNewEmployee);

apiRouter.get("/pr/update-employee", prControllers.updateEmployee);

apiRouter.get("/pr/delete-employee", prControllers.deleteEmployee);

//hr
apiRouter.get("/hr/employees", hrControllers.getAllEmployees);

apiRouter.get("/hr/employees/:employeeId", hrControllers.getEmployee);

apiRouter.post("/hr/new-employee", hrControllers.addNewEmployee);

apiRouter.post("/hr/update-employee", hrControllers.updateEmployee);

apiRouter.post("/hr/delete-employee", hrControllers.deleteEmployee);

module.exports = apiRouter;
