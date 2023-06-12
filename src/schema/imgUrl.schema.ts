import { z } from "zod";

const imageUrlSchema = z.object({
  coverImage: z.string(),
  firstImage: z.string(),
  secondImage: z.string(),
  thirdImage: z.string().nullable().default(null),
  fourthImage: z.string().nullable().default(null),
  fifthImage: z.string().nullable().default(null),
  sixthImage: z.string().nullable().default(null),
});

const imageUrlReturnSchema = imageUrlSchema.extend({
  id: z.string().uuid(),
});

const listImageUrlSchema = z.array(imageUrlReturnSchema);

export { imageUrlSchema, imageUrlReturnSchema, listImageUrlSchema };
