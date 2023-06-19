import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tAnnouncement } from "../../interfaces/announcement.interfaces";
import ImageUrl from "../../entities/imageUrl.entity";
import Announcement from "../../entities/announcement.entity";

const listAnnouncementService = async (): Promise<tAnnouncement[] | any[]> => {
  const repository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

    const announcements = await repository
    .createQueryBuilder('announcement')
    .leftJoinAndSelect('announcement.image', 'image')
    .leftJoin('announcement.user', 'user')
    .select(['announcement', 'image', 'user.id', 'user.name'])
    .getMany();

  return announcements;
};

export default listAnnouncementService;
