const path = require("path");

const express = require("express");
const cors = require("cors");
const exphbs = require("express-handlebars");

const dashboardRouters = require("./routers/dashboard-routers");

const app = express();

//middleware excecute for data's form from client to server
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

app.use(cors());

app.options("*", cors());

//template engine
app.engine(
  "handlebars",
  exphbs({
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);

app.set("view engine", "handlebars");

app.set("views", path.join(__dirname, "resources", "views"));

app.use(dashboardRouters);

app.listen(3000);
