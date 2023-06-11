import { z } from "zod";
import { imageUrlSchema } from "./imgUrl.schema";

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

const createAnnouncementWithImageSchema = createAnnouncementSchema.extend({
  images: imageUrlSchema,
});

const createAnnouncementReturnSchema = createAnnouncementSchema.extend({
  id: z.string().uuid(),
});

const createAnnouncementWithImageReturnSchema = z.object({
  description: z.string(),
  brand: z.string(),
  model: z.string().max(50),
  color: z.string().max(20),
  year: z.string().max(4),
  fuel: z.string().max(9),
  km: z.string(),
  price: z.string(),
  fipeTablePrice: z.string(),
  isPublic: z.boolean(),
  id: z.string().uuid(),
  images: z.object({
    coverImage: z.string(),
    firstImage: z.string(),
    secondImage: z.string(),
    thirdImage: z.string().nullable().default(null),
    fourthImage: z.string().nullable().default(null),
    fifthImage: z.string().nullable().default(null),
    sixthImage: z.string().nullable().default(null),
    id: z.string().uuid(),
  }),
}); // Provisório

const listAnnouncementSchema = z.array(createAnnouncementReturnSchema);

const updateAnnouncementSchema = createAnnouncementSchema.deepPartial();

export {
  createAnnouncementSchema,
  createAnnouncementReturnSchema,
  listAnnouncementSchema,
  updateAnnouncementSchema,
  createAnnouncementWithImageSchema,
  createAnnouncementWithImageReturnSchema,
};
