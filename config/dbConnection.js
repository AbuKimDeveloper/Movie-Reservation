import mongoose from "mongoose";
import { DB_CONNECTION } from "./envVariables";

export default async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(DB_CONNECTION);
  } catch (error) {
    console.error("Error Connecting to MongoDB", error);
  }
};
