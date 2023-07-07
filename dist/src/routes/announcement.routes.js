"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const announcement_controllers_1 = require("../controllers/announcement.controllers");
const ensureDataIsValid_middleware_1 = __importDefault(require("../middleware/ensureDataIsValid.middleware"));
const announcement_schemas_1 = require("../schema/announcement.schemas");
const ensureAnnouncementExist_middleware_1 = __importDefault(require("../middleware/announcement/ensureAnnouncementExist.middleware"));
const ensureAuth_middleware_1 = __importDefault(require("../middleware/ensureAuth.middleware"));
const ensureIsSeller_1 = __importDefault(require("../middleware/user/ensureIsSeller"));
const announcementRouter = (0, express_1.Router)();
announcementRouter.post("", ensureAuth_middleware_1.default, ensureIsSeller_1.default, (0, ensureDataIsValid_middleware_1.default)(announcement_schemas_1.createAnnouncementWithImageSchema), announcement_controllers_1.createAnnouncementController); // Token is required
announcementRouter.get("", announcement_controllers_1.listAnnouncementController);
announcementRouter.get("/:id", announcement_controllers_1.listAnnouncementIdController);
announcementRouter.put("/:id", ensureAuth_middleware_1.default, ensureIsSeller_1.default, (0, ensureDataIsValid_middleware_1.default)(announcement_schemas_1.createAnnouncementWithImageSchema), announcement_controllers_1.updateAnnouncementController); // Token is required
announcementRouter.delete("/:id", ensureAuth_middleware_1.default, ensureIsSeller_1.default, ensureAnnouncementExist_middleware_1.default, announcement_controllers_1.deleteAnnouncementController); // Token is required
exports.default = announcementRouter;
