"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnnouncementWithImageReturnSchema = exports.createAnnouncementWithImageSchema = exports.updateAnnouncementSchema = exports.listAnnouncementSchema = exports.createAnnouncementReturnSchema = exports.createAnnouncementSchema = void 0;
const zod_1 = require("zod");
const imgUrl_schema_1 = require("./imgUrl.schema");
const createAnnouncementSchema = zod_1.z.object({
    description: zod_1.z.string(),
    brand: zod_1.z.string(),
    model: zod_1.z.string().max(50),
    color: zod_1.z.string().max(20),
    year: zod_1.z.string().max(4),
    fuel: zod_1.z.string().max(9),
    km: zod_1.z.string(),
    price: zod_1.z.string(),
    fipeTablePrice: zod_1.z.string(),
    isPublic: zod_1.z.boolean(),
});
exports.createAnnouncementSchema = createAnnouncementSchema;
const createAnnouncementWithImageSchema = createAnnouncementSchema.extend({
    images: imgUrl_schema_1.imageUrlSchema,
});
exports.createAnnouncementWithImageSchema = createAnnouncementWithImageSchema;
const createAnnouncementReturnSchema = createAnnouncementSchema.extend({
    id: zod_1.z.string().uuid(),
});
exports.createAnnouncementReturnSchema = createAnnouncementReturnSchema;
const createAnnouncementWithImageReturnSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    description: zod_1.z.string(),
    brand: zod_1.z.string(),
    model: zod_1.z.string().max(50),
    color: zod_1.z.string().max(20),
    year: zod_1.z.string().max(4),
    fuel: zod_1.z.string().max(9),
    km: zod_1.z.string(),
    price: zod_1.z.string(),
    fipeTablePrice: zod_1.z.string(),
    isPublic: zod_1.z.boolean(),
    userId: zod_1.z.string(),
    images: zod_1.z.object({
        id: zod_1.z.string().uuid(),
        coverImage: zod_1.z.string(),
        firstImage: zod_1.z.string(),
        secondImage: zod_1.z.string(),
        thirdImage: zod_1.z.string().nullable().default(null),
        fourthImage: zod_1.z.string().nullable().default(null),
        fifthImage: zod_1.z.string().nullable().default(null),
        sixthImage: zod_1.z.string().nullable().default(null),
    }),
}); // Provisório
exports.createAnnouncementWithImageReturnSchema = createAnnouncementWithImageReturnSchema;
const listAnnouncementSchema = zod_1.z.array(createAnnouncementReturnSchema);
exports.listAnnouncementSchema = listAnnouncementSchema;
const updateAnnouncementSchema = createAnnouncementSchema.deepPartial();
exports.updateAnnouncementSchema = updateAnnouncementSchema;
