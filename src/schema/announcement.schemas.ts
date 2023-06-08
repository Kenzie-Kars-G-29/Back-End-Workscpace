import { z } from "zod";

const createAnnouncementSchema = z.object({
  description: z.string(),
  brand: z.string(),
  model: z.string().max(50),
  color: z.string().max(20),
  year: z.string().max(4),
  fuel: z.string().max(9),
  km: z.number(),
  price: z.number(),
  fipeTablePrice: z.number(),
  isPublic: z.boolean(),
});

const createAnnouncementReturnSchema = createAnnouncementSchema.extend({
  id: z.string().uuid(),
});

const listAnnouncementSchema = z.array(createAnnouncementReturnSchema);

const updateAnnouncementSchema = createAnnouncementSchema.deepPartial();

export {
  createAnnouncementSchema,
  createAnnouncementReturnSchema,
  listAnnouncementSchema,
  updateAnnouncementSchema,
};
