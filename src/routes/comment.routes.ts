import { Router } from "express";
import { CommentController } from "../controllers/comment.controller";

const router = Router();
const commentController = new CommentController();

router.post("/", commentController.createComment);
router.get("/:id", commentController.getComment);
router.get(
  "/announcement/:announcementId",
  commentController.getCommentsByAnnouncementId
);

export default router;
