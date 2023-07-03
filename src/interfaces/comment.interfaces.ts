import Announcement from "../entities/announcement.entity";
import User from "../entities/user.entity";

export interface Comment {
  id: string;
  text: string;
  user: User;
  announcements: Announcement;
  createdAt: Date;
}
