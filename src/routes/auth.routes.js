import { Router } from "express";
import {
  register,
  login,
  logout,
  dashboard,
  verify
} from "../controllers/auth.controller.js";
import {authRequired} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middelware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schema.js'
const router = Router();

// Ruta del Login
router.post("/register", validateSchema(registerSchema) ,register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);

// Rutas internas del usuario
router.get("/verify", verify);
router.get("/dashboard",authRequired,dashboard);

export default router;
