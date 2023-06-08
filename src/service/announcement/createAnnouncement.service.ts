import { Repository } from "typeorm";
import {
  announcement,
  announcementReturn,
} from "../../interfaces/announcement.interfaces";
import Announcement from "../../entities/announcement.entity";
import { AppDataSource } from "../../data-source";
import { createAnnouncementReturnSchema } from "../../schema/announcement.schemas";

const createAnnouncementService = async (
  body: announcement
): Promise<announcementReturn> => {
  const repository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const announcement: Announcement = repository.create(body);

  await repository.save(announcement);

//   const validatedReturn: announcementReturn =
//     createAnnouncementReturnSchema.parse(announcement);

  return announcement;
};

export default createAnnouncementService;
