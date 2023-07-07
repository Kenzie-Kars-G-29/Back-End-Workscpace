"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../../data-source");
const announcement_entity_1 = __importDefault(require("../../entities/announcement.entity"));
const imageUrl_entity_1 = __importDefault(require("../../entities/imageUrl.entity"));
const errors_1 = require("../../errors");
const updateAnnouncementService = (id, announcement, image) => __awaiter(void 0, void 0, void 0, function* () {
    const annoncementRepository = data_source_1.AppDataSource.getRepository(announcement_entity_1.default);
    const imageUrlRepository = data_source_1.AppDataSource.getRepository(imageUrl_entity_1.default);
    // Procurar announcement por id
    const oldAnnouncement = yield annoncementRepository.findOne({
        where: {
            id: id,
        },
    });
    if (!oldAnnouncement) {
        throw new errors_1.AppError("Announcement not found.", 404);
    }
    // Procurar image correspondente por id do announcement
    const oldImageUrl = yield imageUrlRepository.findOne({
        where: {
            announcement: {
                id: oldAnnouncement.id,
            },
        },
    });
    if (!oldImageUrl) {
        throw new errors_1.AppError("Images not found.", 404);
    }
    // Fazer o update
    const newAnnouncement = annoncementRepository.create(Object.assign(Object.assign({}, oldAnnouncement), announcement));
    const announcementReturn = yield annoncementRepository.save(newAnnouncement);
    const newImageUrl = imageUrlRepository.create(Object.assign(Object.assign({}, oldImageUrl), image));
    const imageReturn = yield imageUrlRepository.save(newImageUrl);
    //Montar um retorno
    const response = Object.assign(Object.assign({}, announcementReturn), { images: Object.assign({}, imageReturn) });
    // const validatedReturn: tAnnouncementWithImageReturn =
    //   createAnnouncementWithImageReturnSchema.parse(response);
    return response;
});
exports.default = updateAnnouncementService;
