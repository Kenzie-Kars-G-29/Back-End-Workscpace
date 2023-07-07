"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const user_controllers_1 = require("../controllers/user.controllers");
const ensureAuth_middleware_1 = __importDefault(require("../middleware/ensureAuth.middleware"));
const ensureDataIsValid_middleware_1 = __importDefault(require("../middleware/ensureDataIsValid.middleware"));
const user_schemas_1 = require("../schema/user.schemas");
const ensureUserExists_middleware_1 = require("../middleware/user/ensureUserExists.middleware");
exports.userRoutes = (0, express_1.Router)();
exports.userRoutes.post("", (0, ensureDataIsValid_middleware_1.default)(user_schemas_1.userSchema), user_controllers_1.createUserController);
exports.userRoutes.get("", user_controllers_1.listAllUsersController);
exports.userRoutes.get("/userlogged", ensureAuth_middleware_1.default, user_controllers_1.listUserController);
exports.userRoutes.get("/:id", ensureAuth_middleware_1.default, user_controllers_1.listUserIdController);
exports.userRoutes.patch("/:id", ensureAuth_middleware_1.default, (0, ensureDataIsValid_middleware_1.default)(user_schemas_1.userSchemaUpdate), user_controllers_1.updateUserController);
exports.userRoutes.delete("/:id", ensureUserExists_middleware_1.ensureUserExistsMiddleware, user_controllers_1.deleteUserController);
