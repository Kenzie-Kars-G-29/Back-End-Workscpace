import { Repository } from "typeorm";
import {
  tAnnouncement,
  tAnnouncementWithImageReturn,
} from "../../interfaces/announcement.interfaces";
import Announcement from "../../entities/announcement.entity";
import { AppDataSource } from "../../data-source";
import { createAnnouncementWithImageReturnSchema } from "../../schema/announcement.schemas";
import ImageUrl from "../../entities/imageUrl.entity";
import { tImages } from "../../interfaces/imageUrl.interfaces";

const createAnnouncementService = async (
  announc: tAnnouncement,
  images: tImages
): Promise<tAnnouncementWithImageReturn> => {
  const repository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);
  const imagesRepository: Repository<ImageUrl> =
    AppDataSource.getRepository(ImageUrl);

  const announcement: Announcement = repository.create(announc);
  const imageUrl: ImageUrl = imagesRepository.create(images);

  const announcementResponse = await repository.save(announcement);

  imageUrl.announcement = announcement;
  const imageUrlResponse = await imagesRepository.save(imageUrl);

  const response = {
    ...announcementResponse,
    images: { ...imageUrlResponse },
  };

  const validatedReturn: tAnnouncementWithImageReturn =
    createAnnouncementWithImageReturnSchema.parse(response);

  return validatedReturn;
};

export default createAnnouncementService;
