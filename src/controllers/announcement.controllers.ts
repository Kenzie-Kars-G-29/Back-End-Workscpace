import { Request, Response } from "express";
import createAnnouncementService from "../service/announcement/createAnnouncement.service";

const createAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcement = await createAnnouncementService(req.body);

  return res.status(200).json(announcement);
};

export { createAnnouncementController };
