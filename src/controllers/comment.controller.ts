import { Request, Response } from "express";
import { CommentService } from "../service/comment/comment.service";

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
}
