import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tAnnouncement } from "../../interfaces/announcement.interfaces";
import ImageUrl from "../../entities/imageUrl.entity";
import Announcement from "../../entities/announcement.entity";
import { AppError } from "../../errors";

const listAnnouncementIdService = async (id: string) => {
  const repository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const announcement = await repository.findOne({
    where: {
      id: id,
    },
    relations: ["user.announcements", "image"],
  });

  if (!announcement) {
    throw new AppError("Announcement not found.", 404);
  }

  return announcement;
};

export default listAnnouncementIdService;
