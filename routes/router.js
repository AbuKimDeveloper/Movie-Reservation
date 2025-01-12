import express from "express";
const router = express.Router();
import apis from "./api/index.js";

router.use("/movie", apis);

export default router;
