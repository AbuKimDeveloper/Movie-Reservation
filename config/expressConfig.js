import express from "express";
import router from "../routes/router.js"; // Your route handlers
import cors from "cors";

export default async (app) => {
  app.use(cors());
  app.use(express.json({ extended: true }));
  app.use(express.urlencoded({ extended: false }));
  app.use(router);
};
