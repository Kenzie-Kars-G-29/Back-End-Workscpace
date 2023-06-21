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
import ensureAuthMidlleware from "../middleware/ensureAuth.middleware";
import ensureIsSellerMiddleware from "../middleware/user/ensureIsSeller";

const announcementRouter = Router();

announcementRouter.post(
  "",
  ensureAuthMidlleware,
  ensureIsSellerMiddleware,
  ensureDataIsValid(createAnnouncementWithImageSchema),
  createAnnouncementController
); // Token is required

announcementRouter.get("", listAnnouncementController); 

announcementRouter.put(
  "/:id",
  ensureAuthMidlleware,
  ensureIsSellerMiddleware,
  ensureDataIsValid(createAnnouncementWithImageSchema),
  updateAnnouncementController
); // Token is required

announcementRouter.delete(
  "/:id",
  ensureAuthMidlleware,
  ensureIsSellerMiddleware,
  ensureAnnouncementExist,
  deleteAnnouncementController
); // Token is required

export default announcementRouter;
