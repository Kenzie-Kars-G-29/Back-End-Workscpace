import { Router } from "express";
import { CommentController } from "../controllers/comment.controller";
import ensureAuthMidlleware from "../middleware/ensureAuth.middleware";
import ensureDataIsValid from "../middleware/ensureDataIsValid.middleware";
import {
  createCommentSchema,
  updateCommentSchema,
} from "../schema/comment.schema";

const router = Router();
const commentController = new CommentController();

router.post(
  "/",
  ensureAuthMidlleware,
  ensureDataIsValid(createCommentSchema),
  commentController.createComment
);
router.get("/:id", ensureAuthMidlleware, commentController.getComment);
router.get(
  "/announcement/:announcementId",
  ensureAuthMidlleware,
  commentController.getCommentsByAnnouncementId
);
router.patch(
  "/:id",
  ensureAuthMidlleware,
  ensureDataIsValid(updateCommentSchema),
  commentController.updateCommentController
);
router.delete(
  "/:id",
  ensureAuthMidlleware,
  commentController.deleteCommentController
);

export default router;
