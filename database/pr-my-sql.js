const mysql = require("mysql");

const prConnector = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "123123",
  database: "pr",
});

module.exports = prConnector;
