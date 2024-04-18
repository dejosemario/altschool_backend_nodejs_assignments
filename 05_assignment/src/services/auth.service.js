import User from "../models/user.schema.js";
import { ErrorWithStatus } from "../middlewares/error.js";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";

export const register = async (name, email, password, confirmPassword) => {
  const user = await User.findOne({ email });
  if (user) {
    throw new ErrorWithStatus("User already exists", 400);
  }
  password = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password, confirmPassword });
  await newUser.save();
  delete newUser.password;
  return newUser;
};

export const login = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new ErrorWithStatus("User not found", 404);
  }
  if (!bycrypt.compareSync(password, user.password)) {
    throw new ErrorWithStatus("Invalid password", 400);
  }
  const JWT_SECRET = process.env.JWT_SECRET;
  const token = Jwt.sign(
    { email: user.email, _id: user._id, sub: user._id },
    JWT_SECRET,
    { expiresIn: "10m" }
  );
  return token;
};
