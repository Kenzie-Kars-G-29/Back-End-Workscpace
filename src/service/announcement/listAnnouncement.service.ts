import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tAnnouncement } from "../../interfaces/announcement.interfaces";
import ImageUrl from "../../entities/imageUrl.entity";

const listAnnouncementService = async (): Promise<tAnnouncement[] | any[]> => {
  // const repository: Repository<Announcement> =
  //   AppDataSource.getRepository(Announcement);
  const ImageRepository: Repository<ImageUrl> =
    AppDataSource.getRepository(ImageUrl);

  const announcements = await ImageRepository.find({
    relations: {
      announcement: true,
    },
  });

  return announcements;
};

export default listAnnouncementService;
