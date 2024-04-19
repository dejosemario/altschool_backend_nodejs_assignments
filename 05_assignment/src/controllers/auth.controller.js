import * as authService from "../services/auth.service.js";

import * as validation from "../validations/auth.validation.js";
import {ErrorWithStatus} from "../middlewares/error.js";

export async function register(req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const user = await authService.register(
      name,
      email,
      password,
      confirmPassword
    );//
    res
      .status(201)
      .json({ message: "User registered successfully", user: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const token = await authService.login(email, password);
    res.json({ message: "Login successful", accessToken: token });
  } catch(error){
    res.status(400).json({ messagei: error.message });
  }
}
