import { Repository } from "typeorm";
import { Comment } from "../../entities/comment.entity";
import User from "../../entities/user.entity";
import Announcement from "../../entities/announcement.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { iComment, iUpdateComment } from "../../interfaces/comment.interfaces";
import { commentSchema } from "../../schema/comment.schema";

export class CommentService {
  async createComment(
    text: string,
    userId: string,
    announcementId: string
  ): Promise<iComment> {
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

    const newComment = commentSchema.parse(comment);

    return newComment;
  }

  async getComment(id: string): Promise<Comment> {
    const commentRepository: Repository<Comment> =
      AppDataSource.getRepository(Comment);

    const comment = await commentRepository.findOne({
      where: { id: id },
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
      relations: ["user", "announcement"],
    });

    return comments;
  }

  async updateCommentService(
    data: Partial<iUpdateComment>,
    commentId: string
  ): Promise<iComment> {
    const commentRepository: Repository<Comment> =
      AppDataSource.getRepository(Comment);
    const comment: Comment | null = await commentRepository.findOne({
      where: { id: commentId },
      relations: {
        announcement: true,
        user: true,
      },
    });

    if (comment === null) {
      throw new AppError("Comment not found", 404);
    }

    const newComment = commentRepository.create({
      ...comment,
      ...data,
    });

    await commentRepository.save(newComment);

    return commentSchema.parse(newComment);
  }

  async deleteComentsByIdService(commentId: string): Promise<void> {
    const commentRepository: Repository<Comment> =
      AppDataSource.getRepository(Comment);

    const comment: Comment | null = await commentRepository.findOne({
      where: {
        id: commentId,
      },
    });

    if (!comment) {
      throw new AppError("Comment not found", 404);
    }

    await commentRepository.remove(comment);
  }
}
