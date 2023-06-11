import { z } from "zod";
import {
  imageUrlReturnSchema,
  imageUrlSchema,
  listImageUrlSchema,
} from "../schema/imgUrl.schema";

type tImageUrl = z.infer<typeof imageUrlSchema>;
type tImageUrlReturn = z.infer<typeof imageUrlReturnSchema>;
type tListImageUrl = z.infer<typeof listImageUrlSchema>;

interface tImages {
  coverImage: string;
  firstImage: string;
  secondImage: string;
  thirdImage: string;
  fourthImage: string;
  fifthImage: string;
  sixthImage: string;
}

export { tImageUrl, tImageUrlReturn, tImages, tListImageUrl };
