const express = require("express");

const dashboardControllers = require("../controllers/dashboardControllers");

const dashboardRouter = express.Router();

//UI
//dashboard
dashboardRouter.get("/", dashboardControllers.getIndex);

module.exports = dashboardRouter;
