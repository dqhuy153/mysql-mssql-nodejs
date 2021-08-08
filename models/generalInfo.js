const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GeneralInfo = new Schema(
  {
    totalIncomeShareholders: { type: Number, required: true },
    totalIncomeStaffs: { type: Number, required: true },
    totalIncomeMen: { type: Number, required: true },
    totalIncomeWomen: { type: Number, required: true },
    totalIncomeFullTime: { type: Number, required: true },
    totalIncomePartTime: { type: Number, required: true },

    // createdAd: {type:Date, default:Date.now},
    // updatedAd: {type:Date, default:Date.now},
  },
  { timestamps: true }
);
//Add plugins
module.exports = mongoose.model("GeneralInfo", GeneralInfo);
