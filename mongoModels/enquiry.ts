import mongoose from "mongoose";

const schema = {
  email: "String",
  message: "String",
  name: "String",
  subject: "String",
};

const enquirySchema = new mongoose.Schema(schema);

export const Enquiries =
  mongoose.models.enquiries || mongoose.model("enquiries", enquirySchema);
