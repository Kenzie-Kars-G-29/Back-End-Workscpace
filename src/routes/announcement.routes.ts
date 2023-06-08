import { Router } from "express";
import { createAnnouncementController } from "../controllers/announcement.controllers";
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware";
import { createAnnouncementSchema } from "../schema/announcement.schemas";

const announcementRouter = Router();

// Rotas aqui
announcementRouter.post(
  "",
  ensureDataIsValid(createAnnouncementSchema),
  createAnnouncementController
);

export default announcementRouter;
