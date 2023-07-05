import { z } from "zod";
import { returnUserSchema } from "./user.schemas";
import { createAnnouncementReturnSchema } from "./announcement.schemas";

const commentSchema = z.object({
  id: z.string().uuid(),
  text: z.string(),
  user: returnUserSchema,
  announcement: createAnnouncementReturnSchema,
  createdAt: z.date(),
  timeSinceCreation: z.string(),
});

const allCommentSchema = commentSchema.array();

const createCommentSchema = commentSchema.omit({
  id: true,
  user: true,
  announcement: true,
  createdAt: true,
  timeSinceCreation: true,
});

const updateCommentSchema = createCommentSchema.partial();

export {
  commentSchema,
  allCommentSchema,
  createCommentSchema,
  updateCommentSchema,
};
