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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAnnouncementIdController = exports.deleteAnnouncementController = exports.updateAnnouncementController = exports.listAnnouncementController = exports.createAnnouncementController = void 0;
const createAnnouncement_service_1 = __importDefault(require("../service/announcement/createAnnouncement.service"));
const listAnnouncement_service_1 = __importDefault(require("../service/announcement/listAnnouncement.service"));
const deleteAnnouncement_service_1 = __importDefault(require("../service/announcement/deleteAnnouncement.service"));
const updateAnnouncement_service_1 = __importDefault(require("../service/announcement/updateAnnouncement.service"));
const listAnnouncementId_service_1 = __importDefault(require("../service/announcement/listAnnouncementId.service"));
const createAnnouncementController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { images } = _a, announcement = __rest(_a, ["images"]);
    const token = req.headers.authorization;
    const newAnnouncement = yield (0, createAnnouncement_service_1.default)(announcement, images, token);
    const { user } = newAnnouncement, createAnnounRest = __rest(newAnnouncement, ["user"]);
    const userId = user.id;
    return res.status(201).json(Object.assign(Object.assign({}, createAnnounRest), { userId }));
});
exports.createAnnouncementController = createAnnouncementController;
const listAnnouncementController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const announcements = yield (0, listAnnouncement_service_1.default)();
    return res.status(200).json(announcements);
});
exports.listAnnouncementController = listAnnouncementController;
const listAnnouncementIdController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const announId = request.params.id;
    const announ = yield (0, listAnnouncementId_service_1.default)(announId);
    return response.status(200).json(announ);
});
exports.listAnnouncementIdController = listAnnouncementIdController;
const updateAnnouncementController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _b = req.body, { images } = _b, announcement = __rest(_b, ["images"]);
    const announcementResponse = yield (0, updateAnnouncement_service_1.default)(req.params.id, announcement, images);
    return res.status(200).json(announcementResponse);
});
exports.updateAnnouncementController = updateAnnouncementController;
const deleteAnnouncementController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const announcement = yield (0, deleteAnnouncement_service_1.default)(req.params.id);
    return res.status(204).json(announcement);
});
exports.deleteAnnouncementController = deleteAnnouncementController;
