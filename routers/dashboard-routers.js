const express = require("express");

const dashboardControllers = require("../controllers.js/dashboardControllers");

const dashboardRouter = express.Router();

//UI
//dashboard
dashboardRouter.get("/", dashboardControllers.getIndex);

module.exports = dashboardRouter;
