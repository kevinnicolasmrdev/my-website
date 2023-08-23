import { Router } from "express";
import {
  getPublicProjects
} from "../controllers/project.controllers.js";

const router = Router();

/* Ruta Publica */

router.get(
  "/portfolio",
  getPublicProjects,
);


export default router;
