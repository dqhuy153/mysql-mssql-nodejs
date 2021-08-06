const mysql = require("mysql");

const pr = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "pr",
});

module.exports = pr;
