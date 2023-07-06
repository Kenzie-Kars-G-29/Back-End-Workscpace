import { Request, Response } from "express";
import { CommentService } from "../service/comment/comment.service";
import { iComment, iUpdateComment } from "../interfaces/comment.interfaces";

const commentService = new CommentService();

export class CommentController {
  async createComment(req: Request, res: Response) {
    const { text, userId, announcementId } = req.body;

    try {
      const comment = await commentService.createComment(
        text,
        userId,
        announcementId
      );

      return res.status(201).json(comment);
    } catch (err: any) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  }

  async getComment(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const comment = await commentService.getComment(id);
      return res.json(comment);
    } catch (err: any) {
      return res.status(500).json({ error: err.message });
    }
  }

  async getCommentsByAnnouncementId(req: Request, res: Response) {
    const { announcementId } = req.params;

    try {
      const comments = await commentService.getCommentsByAnnouncementId(
        announcementId
      );
      return res.json(comments);
    } catch (err: any) {
      // declare err as any
      return res.status(500).json({ error: err.message });
    }
  }

  async updateCommentController(req: Request, res: Response) {
    const commentId = req.params.id;
    const updatedValues: iUpdateComment = req.body;
    const updatedUser: iComment = await commentService.updateCommentService(
      updatedValues,
      commentId
    );

    return res.json(updatedUser);
  }

  async deleteCommentController(req: Request, res: Response) {
    await commentService.deleteComentsByIdService(req.params.commentId);

    return res.status(204).send();
  }
}
