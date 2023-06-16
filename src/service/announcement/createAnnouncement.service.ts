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
) => {
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

  const imageUrl: ImageUrl = imagesRepository.create({
    ...images,
  })

  await imagesRepository.save(imageUrl)
  
  const newAnnouncement: Announcement = repository.create({
    ...announc,
    user: findUser!,
    image: imageUrl
  })

  await repository.save(newAnnouncement)

  imageUrl.announcement = newAnnouncement
  
  await imagesRepository.save(imageUrl)

  return newAnnouncement
}  

export default createAnnouncementService;
