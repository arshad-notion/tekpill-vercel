import mongoose from "mongoose";

const schema = {
  name: "String",
  imgUrl: "String",
  hits: "String",
};

const brandSchema = new mongoose.Schema(schema);

export const Brand =
  mongoose.models.brand || mongoose.model("brand", brandSchema);
