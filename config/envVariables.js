import dotenv from "dotenv";

dotenv.config();

export default {
  DB_CONNECTION: process.env.DB_CONNECTION,
};
