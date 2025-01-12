import dotenv from "dotenv";

dotenv.config();
export const DB_CONNECTION = process.env.DB_CONNECTION;
export const PORT = process.env.PORT;
export const JWT_SECRET = process.env.JWT_SECRET;
export const NODE_ENV = process.env.NODE_ENV;
