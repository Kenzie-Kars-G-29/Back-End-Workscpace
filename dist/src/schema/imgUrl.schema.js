"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listImageUrlSchema = exports.imageUrlReturnSchema = exports.imageUrlSchema = void 0;
const zod_1 = require("zod");
const imageUrlSchema = zod_1.z.object({
    coverImage: zod_1.z.string(),
    firstImage: zod_1.z.string(),
    secondImage: zod_1.z.string(),
    thirdImage: zod_1.z.string().nullable().default(null),
    fourthImage: zod_1.z.string().nullable().default(null),
    fifthImage: zod_1.z.string().nullable().default(null),
    sixthImage: zod_1.z.string().nullable().default(null),
});
exports.imageUrlSchema = imageUrlSchema;
const imageUrlReturnSchema = imageUrlSchema.extend({
    id: zod_1.z.string().uuid(),
});
exports.imageUrlReturnSchema = imageUrlReturnSchema;
const listImageUrlSchema = zod_1.z.array(imageUrlReturnSchema);
exports.listImageUrlSchema = listImageUrlSchema;
