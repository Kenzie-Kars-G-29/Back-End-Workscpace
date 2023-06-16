import { Request, Response } from "express";
import createAnnouncementService from "../service/announcement/createAnnouncement.service";
import listAnnouncementService from "../service/announcement/listAnnouncement.service";
import deleteAnnouncementService from "../service/announcement/deleteAnnouncement.service";
import updateAnnouncementService from "../service/announcement/updateAnnouncement.service";

const createAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { images, ...announcement } = req.body;
  const token: any = req.headers.authorization

  const newAnnouncement = await createAnnouncementService(
    announcement,
    images,
    token
  );
    
  const {user, ...createAnnounRest} = newAnnouncement
  const userId = user.id

  return res.status(201).json({...createAnnounRest, userId})
};

const listAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcements = await listAnnouncementService();

  return res.status(200).json(announcements);
};

const updateAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { images, ...announcement } = req.body;

  const announcementResponse = await updateAnnouncementService(
    req.params.id,
    announcement,
    images
  );

  return res.status(200).json(announcementResponse);
};

const deleteAnnouncementController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const announcement = await deleteAnnouncementService(req.params.id);

  return res.status(204).json(announcement);
};

export {
  createAnnouncementController,
  listAnnouncementController,
  updateAnnouncementController,
  deleteAnnouncementController,
};
