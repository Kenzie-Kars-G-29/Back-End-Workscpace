import { z } from "zod";
import {
  createAnnouncementReturnSchema,
  createAnnouncementSchema,
  createAnnouncementWithImageReturnSchema,
  createAnnouncementWithImageSchema,
} from "../schema/announcement.schemas";

type tAnnouncement = z.infer<typeof createAnnouncementSchema>;
type tAnnouncementWithImage = z.infer<typeof createAnnouncementWithImageSchema>;
type tAnnouncementReturn = z.infer<typeof createAnnouncementReturnSchema>;
type tAnnouncementWithImageReturn = z.infer<
  typeof createAnnouncementWithImageReturnSchema
>;

export {
  tAnnouncement,
  tAnnouncementReturn,
  tAnnouncementWithImage,
  tAnnouncementWithImageReturn,
};
