"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const comment_entity_1 = require("../../entities/comment.entity");
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const announcement_entity_1 = __importDefault(require("../../entities/announcement.entity"));
const data_source_1 = require("../../data-source");
const errors_1 = require("../../errors");
const comment_schema_1 = require("../../schema/comment.schema");
class CommentService {
    createComment(text, userId, announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepository = data_source_1.AppDataSource.getRepository(comment_entity_1.Comment);
            const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.default);
            const announcementRepository = data_source_1.AppDataSource.getRepository(announcement_entity_1.default);
            const user = yield userRepository.findOne({ where: { id: userId } });
            const announcement = yield announcementRepository.findOne({
                where: { id: announcementId },
            });
            if (!user || !announcement) {
                throw new errors_1.AppError("User or Announcement not found", 404);
            }
            const comment = commentRepository.create({ text, user, announcement });
            yield commentRepository.save(comment);
            const newComment = comment_schema_1.commentSchema.parse(comment);
            return newComment;
        });
    }
    getComment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepository = data_source_1.AppDataSource.getRepository(comment_entity_1.Comment);
            const comment = yield commentRepository.findOne({
                where: { id: id },
            });
            if (!comment) {
                throw new errors_1.AppError("Comment not found", 404);
            }
            return comment;
        });
    }
    getCommentsByAnnouncementId(announcementId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepository = data_source_1.AppDataSource.getRepository(comment_entity_1.Comment);
            const comments = yield commentRepository.find({
                where: { announcement: { id: announcementId } },
                relations: ["user", "announcement"]
            });
            return comments;
        });
    }
    updateCommentService(data, commentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepository = data_source_1.AppDataSource.getRepository(comment_entity_1.Comment);
            const comment = yield commentRepository.findOne({
                where: { id: commentId },
                relations: {
                    announcement: true,
                    user: true,
                },
            });
            if (comment === null) {
                throw new errors_1.AppError("Comment not found", 404);
            }
            const newComment = commentRepository.create(Object.assign(Object.assign({}, comment), data));
            yield commentRepository.save(newComment);
            return comment_schema_1.commentSchema.parse(newComment);
        });
    }
    deleteComentsByIdService(commentId) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentRepository = data_source_1.AppDataSource.getRepository(comment_entity_1.Comment);
            const comment = yield commentRepository.findOne({
                where: {
                    id: commentId,
                },
            });
            if (!comment) {
                throw new errors_1.AppError("Comment not found", 404);
            }
            yield commentRepository.remove(comment);
        });
    }
}
exports.CommentService = CommentService;
