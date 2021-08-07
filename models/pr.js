const prConnector = require("../database/pr-my-sql");

const pr = {
  filterEmployees(sql, callback) {
    prConnector.getConnection((err, connection) => {
      if (err) {
        return callback(err);
      }

      connection.query(sql, (err, result, fields) => {
        if (err) {
          return callback(err);
        }

        callback(result);
      });
    });
  },

  getAllEmployees(callback) {
    prConnector.getConnection((err, connection) => {
      if (err) {
        return callback(err);
      }

      connection.query("SELECT * FROM employee", (err, result, fields) => {
        if (err) {
          return callback(err);
        }

        callback(result);
      });
    });
  },

  //GET: /pr/employees/:idEmployee
  getEmployee(idEmployee, callback) {
    prConnector.getConnection((err, connection) => {
      if (err) {
        return callback(err);
      }

      connection.query(
        `SELECT * FROM employee WHERE idEmployee = ${idEmployee}`,
        (err, result, fields) => {
          if (err) {
            return callback(err);
          }

          if (result.length == 0) {
            return callback({
              message: "Not found employee!",
            });
          }
          callback(result);
        }
      );
    });
  },

  //POST: /pr/new-employee
  addNewEmployee(
    {
      Employee_Number,
      idEmployee,
      Last_Name,
      First_Name,
      SSN,
      Pay_Rate,
      Payrates_id,
      Vacation_Days,
      Paid_To_Date,
      Paid_Last_Year,
    },
    callback
  ) {
    prConnector.getConnection((err, connection) => {
      if (err) {
        return callback(err);
      }

      connection.query(
        "INSERT INTO employee(Employee_Number, idEmployee, Last_Name, First_Name, SSN, Pay_Rate, Payrates_id, Vacation_Days, Paid_To_Date, Paid_Last_Year) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [
          Employee_Number,
          idEmployee,
          Last_Name,
          First_Name,
          SSN,
          Pay_Rate,
          Payrates_id,
          Vacation_Days,
          Paid_To_Date,
          Paid_Last_Year,
        ],
        (err, result, fields) => {
          if (err) {
            return callback(err);
          }

          callback(result);
        }
      );
    });
  },

  //PUT: /pr/employees (update)
  updateEmployee(
    {
      Employee_Number,
      idEmployee,
      Last_Name,
      First_Name,
      SSN,
      Pay_Rate,
      Payrates_id,
      Vacation_Days,
      Paid_To_Date,
      Paid_Last_Year,
    },
    callback
  ) {
    prConnector.getConnection((err, connection) => {
      if (err) throw err;

      connection.query(
        `SELECT * FROM employee WHERE idEmployee = ${idEmployee}`,
        (err, result) => {
          if (result.length == 0) {
            return res.send({ message: "Not found employee!" });
          }

          connection.query(
            `UPDATE employee SET Employee_Number = ?, Last_Name = ?, First_Name = ?, SSN = ?, Pay_Rate =? , Payrates_id = ?, Vacation_Days = ?, Paid_To_Date  = ?, Paid_Last_Year = ? WHERE idEmployee = ${idEmployee}`,
            [
              Employee_Number,
              Last_Name,
              First_Name,
              SSN,
              Pay_Rate,
              Payrates_id,
              Vacation_Days,
              Paid_To_Date,
              Paid_Last_Year,
            ],
            (err, result, fields) => {
              if (err) {
                return callback(err);
              }

              callback(result);
            }
          );
        }
      );
    });
  },

  //DELTE: /pr/employees
  deleteEmployee(idEmployee, callback) {
    prConnector.getConnection((err, connection) => {
      if (err) {
        return callback(err);
      }
      connection.query(
        `SELECT * FROM employee WHERE idEmployee = ${idEmployee}`,
        (err, result) => {
          if (result.length == 0) {
            return callback({ message: "Not found employee!" });
          }

          connection.query(
            `DELETE FROM employee WHERE idEmployee = ${idEmployee}`,
            (err, result, fields) => {
              if (err) {
                return callback(err);
              }
              callback(result);
            }
          );
        }
      );
    });
  },
};

module.exports = pr;
