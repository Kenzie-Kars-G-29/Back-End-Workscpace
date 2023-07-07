"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comment_controller_1 = require("../controllers/comment.controller");
const ensureAuth_middleware_1 = __importDefault(require("../middleware/ensureAuth.middleware"));
const ensureDataIsValid_middleware_1 = __importDefault(require("../middleware/ensureDataIsValid.middleware"));
const comment_schema_1 = require("../schema/comment.schema");
const router = (0, express_1.Router)();
const commentController = new comment_controller_1.CommentController();
router.post("/", ensureAuth_middleware_1.default, (0, ensureDataIsValid_middleware_1.default)(comment_schema_1.createCommentSchema), commentController.createComment);
router.get("/:id", ensureAuth_middleware_1.default, commentController.getComment);
router.get("/announcement/:announcementId", ensureAuth_middleware_1.default, commentController.getCommentsByAnnouncementId);
router.patch("/:id", ensureAuth_middleware_1.default, (0, ensureDataIsValid_middleware_1.default)(comment_schema_1.updateCommentSchema), commentController.updateCommentController);
router.delete("/:id", ensureAuth_middleware_1.default, commentController.deleteCommentController);
exports.default = router;
