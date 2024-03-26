import * as authService from "../services/auth.service.js";
import * as validation from "../validations/auth.validation.js";

export async function register(req, res) {
  try {
    const { name, email, password, confirmPassword } = req.body;
    const user = await authService.register(name, email, password, confirmPassword);
    res
      .status(201)
      .json({ message: "User registered successfully", user: user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export function login(req, res) {
  res.send("Login successful");
}
