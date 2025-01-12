import { JWT_SECRET } from "./envVariables.js";
export const jwtConfig = {
  secret: JWT_SECRET,
  expiresIn: "7d",
};
