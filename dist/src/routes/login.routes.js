"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
const ensureDataIsValid_middleware_1 = __importDefault(require("../middleware/ensureDataIsValid.middleware"));
const login_schema_1 = require("../schema/login.schema");
const login_controller_1 = require("../controllers/login.controller");
exports.loginRouter = (0, express_1.Router)();
exports.loginRouter.post("", (0, ensureDataIsValid_middleware_1.default)(login_schema_1.loginSchema), login_controller_1.createLoginController);
exports.loginRouter.post("/forgot-password", login_controller_1.forgotPasswordController);
exports.loginRouter.patch("/reset-password/:token", /* ensureDataIsValid(resetPasswordSchema), */ login_controller_1.resetPasswordController);
