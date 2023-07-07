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
const announcement_entity_1 = __importDefault(require("../../entities/announcement.entity"));
const data_source_1 = require("../../data-source");
const imageUrl_entity_1 = __importDefault(require("../../entities/imageUrl.entity"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../../errors");
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const createAnnouncementService = (announc, images, token) => __awaiter(void 0, void 0, void 0, function* () {
    const repository = data_source_1.AppDataSource.getRepository(announcement_entity_1.default);
    const imagesRepository = data_source_1.AppDataSource.getRepository(imageUrl_entity_1.default);
    const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.default);
    let userId = "";
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            throw new errors_1.AppError(error.message, 401);
        }
        userId = decoded.id;
    });
    const findUser = yield userRepository.findOneBy({
        id: userId
    });
    const imageUrl = imagesRepository.create(Object.assign({}, images));
    yield imagesRepository.save(imageUrl);
    const newAnnouncement = repository.create(Object.assign(Object.assign({}, announc), { user: findUser, image: imageUrl }));
    yield repository.save(newAnnouncement);
    imageUrl.announcement = newAnnouncement;
    yield imagesRepository.save(imageUrl);
    return newAnnouncement;
});
exports.default = createAnnouncementService;
