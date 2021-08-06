const express = require("express");

const dashboardRouters = require("./routers/dashboard-routers");

const app = express();

app.use(express.json());

app.use(dashboardRouters);

app.listen(3000);
