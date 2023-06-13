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
import jwt from "jsonwebtoken"
import { AppError } from "../../errors";
import User from "../../entities/user.entity";

const createAnnouncementService = async (
  announc: tAnnouncement,
  images: tImages,
  token: string
): Promise<tAnnouncementWithImageReturn> => {
  const repository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);
  const imagesRepository: Repository<ImageUrl> =
    AppDataSource.getRepository(ImageUrl);
  const userRepository: Repository<User> = 
    AppDataSource.getRepository(User)
  
  let userId = ""
  
  token = token.split(" ")[1]
  
  jwt.verify(token, process.env.SECRET_KEY!, (error, decoded: any) => {
    if(error){
        throw new AppError(error.message, 401)
    }
    
    userId = decoded.id
  })

  const findUser = await userRepository.findOneBy({
    id: userId
})

  const announcement: Announcement = repository.create({...announc, user:findUser!});
  const imageUrl: ImageUrl = imagesRepository.create(images);

  const announcementResponse = await repository.save(announcement);

  imageUrl.announcement = announcement;
  const imageUrlResponse = await imagesRepository.save(imageUrl);

  const response = {
    ...announcementResponse,
    images: { ...imageUrlResponse },
    userId
  };

  const validatedReturn: tAnnouncementWithImageReturn =
    createAnnouncementWithImageReturnSchema.parse(response);

  return validatedReturn;
};

export default createAnnouncementService;
