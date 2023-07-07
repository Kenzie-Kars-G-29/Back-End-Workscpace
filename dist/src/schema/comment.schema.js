"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCommentSchema = exports.createCommentSchema = exports.allCommentSchema = exports.commentSchema = void 0;
const zod_1 = require("zod");
const user_schemas_1 = require("./user.schemas");
const announcement_schemas_1 = require("./announcement.schemas");
const commentSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    text: zod_1.z.string(),
    user: user_schemas_1.returnUserSchema,
    announcement: announcement_schemas_1.createAnnouncementReturnSchema,
    createdAt: zod_1.z.date(),
    timeSinceCreation: zod_1.z.string(),
});
exports.commentSchema = commentSchema;
const allCommentSchema = commentSchema.array();
exports.allCommentSchema = allCommentSchema;
const createCommentSchema = commentSchema.omit({
    id: true,
    user: true,
    announcement: true,
    createdAt: true,
    timeSinceCreation: true,
});
exports.createCommentSchema = createCommentSchema;
const updateCommentSchema = createCommentSchema.partial();
exports.updateCommentSchema = updateCommentSchema;
