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
const listAnnouncementService = () => __awaiter(void 0, void 0, void 0, function* () {
    const repository = data_source_1.AppDataSource.getRepository(announcement_entity_1.default);
    const announcements = yield repository
        .createQueryBuilder('announcement')
        .leftJoinAndSelect('announcement.image', 'image')
        .leftJoin('announcement.user', 'user')
        .select(['announcement', 'image', 'user.id', 'user.name'])
        .getMany();
    return announcements;
});
exports.default = listAnnouncementService;
