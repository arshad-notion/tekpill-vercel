import mongoose from "mongoose";

const schema = {
  title: "String",
  postTime: "Date",
  author: "String", // need to populate basic details
  url: "String",
  img: "String",
  hits: "Number",
  tags: "String",
  webURL: "String",
  customId: "String",
};

const articleSchema = new mongoose.Schema(schema);

export const Articles =
  mongoose.models.articles || mongoose.model("articles", articleSchema);
