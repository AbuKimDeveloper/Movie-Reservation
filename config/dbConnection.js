import mongoose from "mongoose";
import { DB_CONNECTION } from "./envVariables.js";
export default async () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(DB_CONNECTION);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error Connecting to MongoDB", error);
  }
};
