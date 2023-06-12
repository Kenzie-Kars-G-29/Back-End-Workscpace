import { Repository } from "typeorm";
import Announcement from "../../entities/announcement.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const deleteAnnouncementService = async (id: string): Promise<void> => {
  const repository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const announcement = await repository.findOne({
    where: {
      id: id,
    },
  });

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  await repository.delete(announcement);
};

export default deleteAnnouncementService;
