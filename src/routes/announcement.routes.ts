import { Router } from "express";
import {
  createAnnouncementController,
  deleteAnnouncementController,
  listAnnouncementController,
  updateAnnouncementController,
} from "../controllers/announcement.controllers";
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware";
import { createAnnouncementWithImageSchema } from "../schema/announcement.schemas";
import ensureAnnouncementExist from "../middleware/announcement/ensureAnnouncementExist.middleware";

const announcementRouter = Router();

announcementRouter.post(
  "",
  ensureDataIsValid(createAnnouncementWithImageSchema),
  createAnnouncementController
); // Token is required

announcementRouter.get("", listAnnouncementController); // Token is required

announcementRouter.put(
  "/:id",
  ensureDataIsValid(createAnnouncementWithImageSchema),
  updateAnnouncementController
); // Token is required

announcementRouter.delete(
  "/:id",
  ensureAnnouncementExist,
  deleteAnnouncementController
); // Token is required

export default announcementRouter;
