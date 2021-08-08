const generalInfo = require("../models/generalInfo");
const GeneralInfo = require("../models/generalInfo");
const hr = require("../models/hr");
const pr = require("../models/pr");

const totalIncomeHandler = (sqlFilterHr) => {
  return new Promise((resolve, reject) => {
    const employeeIds = [];

    hr.filterEmployee(sqlFilterHr, (result) => {
      if (result.recordsets.length > 0) {
        result.recordsets[0].forEach((item) =>
          employeeIds.push(item.Employee_ID)
        );
      }

      const sqlPr = `SELECT Paid_To_Date FROM employee WHERE idEmployee IN (
            ${employeeIds.join(",")})`;

      //here
      pr.filterEmployees(sqlPr, (result) => {
        let totalIncome;
        if (result.length > 0) {
          totalIncome = result.reduce(
            (total, currItem) => (total += currItem.Paid_To_Date),
            0
          );
        }

        if (totalIncome) resolve(totalIncome);
        else reject(new Error("Fail!"));
      });
    });
  });
};

exports.getGeneralInfo = async (req, res, next) => {
  const generalInfo = await GeneralInfo.find();
  res.status(200).json(generalInfo);
};

exports.updateGeneralInfo = async (req, res, next) => {
  //totalIncomeShareholders
  const totalIncomeShareholders = await totalIncomeHandler(
    "SELECT Employee_ID FROM Personal WHERE Shareholder_Status = 0"
  );
  const totalIncomeStaffs = await totalIncomeHandler(
    "SELECT Employee_ID FROM Personal WHERE Shareholder_Status = 1"
  );
  const totalIncomeMen = await totalIncomeHandler(
    "SELECT Employee_ID FROM Personal WHERE Gender = 0"
  );
  const totalIncomeWomen = await totalIncomeHandler(
    "SELECT Employee_ID FROM Personal WHERE Gender = 1"
  );
  const totalIncomeFullTime = await totalIncomeHandler(
    "SELECT Employee_ID FROM Personal WHERE Benefit_Plans = 1"
  );
  const totalIncomePartTime = await totalIncomeHandler(
    "SELECT Employee_ID FROM Personal WHERE Benefit_Plans = 2"
  );

  const countGeneralInfoDocuments = await GeneralInfo.find().countDocuments();

  if (countGeneralInfoDocuments === 0) {
    const generalInfo = new GeneralInfo({
      totalIncomeShareholders,
      totalIncomeStaffs,
      totalIncomeMen,
      totalIncomeWomen,
      totalIncomeFullTime,
      totalIncomePartTime,
    });

    await generalInfo
      .save()
      .then((result) => res.send(result))
      .catch((err) => console.log(err));

    res.send({ message: "Update to date general info" });
  } else {
    const generalInfo = await GeneralInfo.findOne();

    await generalInfo.updateOne({
      totalIncomeShareholders,
      totalIncomeStaffs,
      totalIncomeMen,
      totalIncomeWomen,
      totalIncomeFullTime,
      totalIncomePartTime,
    });

    await generalInfo.save();

    res.json({ message: "Update to date general info" });
  }
};
