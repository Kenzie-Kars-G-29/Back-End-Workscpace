import { NextFunction, Response, Request } from "express";
import { Repository } from "typeorm";
import Announcement from "../../entities/announcement.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const ensureAnnouncementExist = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const repository: Repository<Announcement> =
    AppDataSource.getRepository(Announcement);

  const announcement = await repository.findOne({
    where: {
      id: req.params.id,
    },
  });

  if (!announcement) {
    throw new AppError("Announcement not found.", 404);
  }

  return next();
};

export default ensureAnnouncementExist;
