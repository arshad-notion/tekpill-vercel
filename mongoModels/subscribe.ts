import mongoose from "mongoose";

const schema = {
  email: "String",
};

const subscribeSchema = new mongoose.Schema(schema);

export const Subscriber =
  mongoose.models.subscriber || mongoose.model("subscriber", subscribeSchema);
