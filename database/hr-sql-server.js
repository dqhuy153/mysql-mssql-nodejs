const mssql = require("mssql");

// config for your database
var config = {
  user: "sa",
  password: "123123",
  server: "HUY",
  database: "HR",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
  },
};

const hrConnector = mssql.connect(config);

module.exports = hrConnector;
