import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Announcement from "../../entities/announcement.entity";
import ImageUrl from "../../entities/imageUrl.entity";
import { AppError } from "../../errors";
import {
  tAnnouncement,
  tAnnouncementWithImageReturn,
} from "../../interfaces/announcement.interfaces";

const updateAnnouncementService = async (
  id: string,
  announcement: tAnnouncement,
  image: any
): Promise<tAnnouncementWithImageReturn | any> => {
  const annoncementRepository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);
  const imageUrlRepository: Repository<ImageUrl> =
    AppDataSource.getRepository(ImageUrl);

  // Procurar announcement por id
  const oldAnnouncement = await annoncementRepository.findOne({
    where: {
      id: id,
    },
  });

  if (!oldAnnouncement) {
    throw new AppError("Announcement not found.", 404);
  }

  // Procurar image correspondente por id do announcement
  const oldImageUrl = await imageUrlRepository.findOne({
    where: {
      announcement: {
        id: oldAnnouncement.id,
      },
    },
  });

  if (!oldImageUrl) {
    throw new AppError("Images not found.", 404);
  }

  // Fazer o update
  const newAnnouncement = annoncementRepository.create({
    ...oldAnnouncement,
    ...announcement,
  });
  const announcementReturn = await annoncementRepository.save(newAnnouncement);

  const newImageUrl = imageUrlRepository.create({
    ...oldImageUrl,
    ...image,
  });
  const imageReturn = await imageUrlRepository.save(newImageUrl);

  //Montar um retorno
  const response = {
    ...announcementReturn,
    images: { ...imageReturn },
  };

  // const validatedReturn: tAnnouncementWithImageReturn =
  //   createAnnouncementWithImageReturnSchema.parse(response);

  return response;
};

export default updateAnnouncementService;
