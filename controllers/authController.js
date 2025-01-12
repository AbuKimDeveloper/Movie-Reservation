import { generateRefreshToken, generateToken } from "../utils/jwtUtil.js";
import { userModel } from "../models/index.js";
import CrudService from "../services/crudServices.js";
const crudFunctions = new CrudService(userModel);

export const login = async (req, res) => {
  const { email, password } = req.body;
  const query = { email: email };
  const user = await crudFunctions.getOneByQuery(query);
  const isPasswordValid = await userModel.comparePassword(password);
  if (!isPasswordValid)
    return res.status(401).json({ message: "Invalid Credentials" });
  const accessToken = generateToken({ userId: user._id, role: user.role });
  const refreshToken = generateRefreshToken({ userId: user._id });
  user.refreshToken = refreshToken;
  return res.status(200).json({ accessToken, refreshToken });
};
