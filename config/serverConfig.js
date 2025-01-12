import express from "express";
import { PORT } from "./envVariables.js";
import dbConnection from "./dbConnection.js";
import configureExpress from "./expressConfig.js";

export const startServer = async () => {
  const app = express();
  await dbConnection();
  await configureExpress(app);
  app
    .listen(PORT, () => {
      console.log(`Server Listening on ${PORT}`);
    })
    .on("error", (error) => {
      console.log(`Error While Starting Application: ${error}`);
    });
};
