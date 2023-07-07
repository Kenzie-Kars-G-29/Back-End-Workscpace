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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentController = void 0;
const comment_service_1 = require("../service/comment/comment.service");
const commentService = new comment_service_1.CommentService();
class CommentController {
    createComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { text, userId, announcementId } = req.body;
            try {
                const comment = yield commentService.createComment(text, userId, announcementId);
                return res.status(201).json(comment);
            }
            catch (err) {
                console.log(err);
                return res.status(500).json({ error: err.message });
            }
        });
    }
    getComment(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const comment = yield commentService.getComment(id);
                return res.json(comment);
            }
            catch (err) {
                return res.status(500).json({ error: err.message });
            }
        });
    }
    getCommentsByAnnouncementId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { announcementId } = req.params;
            try {
                const comments = yield commentService.getCommentsByAnnouncementId(announcementId);
                return res.json(comments);
            }
            catch (err) {
                // declare err as any
                return res.status(500).json({ error: err.message });
            }
        });
    }
    updateCommentController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const commentId = req.params.id;
            const updatedValues = req.body;
            const updatedUser = yield commentService.updateCommentService(updatedValues, commentId);
            return res.json(updatedUser);
        });
    }
    deleteCommentController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield commentService.deleteComentsByIdService(req.params.commentId);
            return res.status(204).send();
        });
    }
}
exports.CommentController = CommentController;
