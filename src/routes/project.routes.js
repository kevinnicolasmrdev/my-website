import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  deleteProject,
  createProject,
  getProject,
  getProjects,
  upgradeProject,
  getPublicProjects
} from "../controllers/project.controllers.js";
import { createProjectSchema } from "../schemas/project.schema.js";
import { validateSchema } from "../middlewares/validator.middelware.js";

const router = Router();

router.get(
  "/project",
  authRequired,
  getProjects
);

router.get(
  "/project/:id",
  authRequired,
  getProject
);

router.post(
  "/project",
  authRequired,
  validateSchema(createProjectSchema),
  createProject
);

router.delete(
  "/project/:id",
  authRequired,
  deleteProject
);

router.put(
  "/project/:id",
  authRequired,
  upgradeProject
);



/* Ruta Publica */

router.get(
  "/portfolio",
  getPublicProjects,
);


export default router;
