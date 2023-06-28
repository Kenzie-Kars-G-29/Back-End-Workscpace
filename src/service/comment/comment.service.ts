import { Repository } from "typeorm";
import { Comment } from "../../entities/comment.entity";
import User from "../../entities/user.entity";
import Announcement from "../../entities/announcement.entity";
import { AppDataSource } from "../../data-source";
import jwt from "jsonwebtoken";
import { AppError } from "../../errors";

export class CommentService {
  async createComment(
    text: string,
    userId: string,
    announcementId: string
  ): Promise<Comment> {
    const commentRepository: Repository<Comment> =
      AppDataSource.getRepository(Comment);
    const userRepository: Repository<User> = AppDataSource.getRepository(User);
    const announcementRepository: Repository<Announcement> =
      AppDataSource.getRepository(Announcement);

    const user = await userRepository.findOne({ where: { id: userId } });
    const announcement = await announcementRepository.findOne({
      where: { id: announcementId },
    });

    if (!user || !announcement) {
      throw new AppError("User or Announcement not found", 404);
    }

    const comment = commentRepository.create({ text, user, announcement });

    await commentRepository.save(comment);

    return comment;
  }

  async getComment(id: string): Promise<Comment> {
    const commentRepository: Repository<Comment> =
      AppDataSource.getRepository(Comment);

    const comment = await commentRepository.findOne({
      where: { id: Number(id) },
    });

    if (!comment) {
      throw new AppError("Comment not found", 404);
    }

    return comment;
  }

  async getCommentsByAnnouncementId(
    announcementId: string
  ): Promise<Comment[]> {
    const commentRepository: Repository<Comment> =
      AppDataSource.getRepository(Comment);

    const comments = await commentRepository.find({
      where: { announcement: { id: announcementId } },
    });

    return comments;
  }
}
