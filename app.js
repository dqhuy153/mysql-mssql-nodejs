const express = require("express");
const cors = require("cors");

const dashboardRouters = require("./routers/dashboard-routers");

const app = express();

app.use(express.json());

app.use(cors());

app.options("*", cors());

// app.use(express.static(path.join(__dirname, "public")));

// //HTTP logger
// app.use(morgan("combined"));

// //template engine
// app.engine(
//   "handlebars",
//   exphbs({
//     helpers: {
//       sum: (a, b) => a + b,
//     },
//   })
// );

// app.set("view engine", "handlebars");

// app.set("views", path.join(__dirname, "resources", "views"));

app.use(dashboardRouters);

app.listen(3000);
