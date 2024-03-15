import mongoose from "mongoose";

const schema = {
  countryName: "String",
  "2g": "String",
  "3g": "String",
  "4g": "String",
  "5g": "String",
};

const coverageSchema = new mongoose.Schema(schema);

export const Coverage =
  mongoose.models.coverage || mongoose.model("coverage", coverageSchema);

export type ICoverage = {
  countryName: String;
  "2g": String;
  "3g": String;
  "4g": String;
  "5g": String;
};
