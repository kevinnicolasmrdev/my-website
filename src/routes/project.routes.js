import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  deleteProject,
  createProject,
  getProject,
  getProjects,
  upgradeProject,
} from "../controllers/project.controllers.js";
import { createProjectSchema } from "../schemas/project.schema.js";
import { validateSchema } from "../middlewares/validator.middelware.js";

const router = Router();

router.get(
  "/project",
  authRequired,
  validateSchema(createProjectSchema),
  getProjects
);

router.get(
  "/project/:id",
  authRequired,
  validateSchema(createProjectSchema),
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
  validateSchema(createProjectSchema),
  deleteProject
);

router.put(
  "/project/:id",
  authRequired,
  validateSchema(createProjectSchema),
  upgradeProject
);

export default router;
