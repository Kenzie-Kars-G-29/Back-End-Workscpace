import { z } from "zod";
import { DeepPartial } from "typeorm";
import {
  allCommentSchema,
  commentSchema,
  createCommentSchema,
} from "../schema/comment.schema";

type iComment = z.infer<typeof commentSchema>;
type iCreateComment = z.infer<typeof createCommentSchema>;
type iAllComment = z.infer<typeof allCommentSchema>;
type iUpdateComment = DeepPartial<iComment>;

export type { iComment, iCreateComment, iAllComment, iUpdateComment };
