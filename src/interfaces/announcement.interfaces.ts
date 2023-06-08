import { z } from "zod";
import {
  createAnnouncementReturnSchema,
  createAnnouncementSchema,
} from "../schema/announcement.schemas";

type announcement = z.infer<typeof createAnnouncementSchema>;
type announcementReturn = z.infer<typeof createAnnouncementReturnSchema>;

export { announcement, announcementReturn };
