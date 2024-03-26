import { Router } from "express";
import * as authController from "../controllers/auth.controller.js";
import { generateMiddleWare } from "../middlewares/route.middleware.js";
import { registerSchema } from "../validations/auth.validation.js";

const authRoute = Router();

authRoute.post("/register", generateMiddleWare(registerSchema), authController.register);

authRoute.post("/login", authController.login);

export default authRoute;
