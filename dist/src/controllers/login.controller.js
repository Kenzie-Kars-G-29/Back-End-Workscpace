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
exports.resetPasswordController = exports.forgotPasswordController = exports.createLoginController = void 0;
const loginUser_service_1 = __importDefault(require("../service/login/loginUser.service"));
const forgotPassword_service_1 = require("../service/login/forgotPassword.service");
const resetPassword_service_1 = require("../service/login/resetPassword.service");
const createLoginController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const loginData = request.body;
    const token = yield (0, loginUser_service_1.default)(loginData);
    return response.json({ token });
});
exports.createLoginController = createLoginController;
const forgotPasswordController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = request.body;
    try {
        const result = yield (0, forgotPassword_service_1.forgotPasswordService)(email);
        return response.status(200).json(result);
    }
    catch (error) {
        return response.status(404).json({ message: "Usuário não encontrado!" });
    }
});
exports.forgotPasswordController = forgotPasswordController;
const resetPasswordController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = request.params;
    const { newPassword } = request.body;
    try {
        const result = yield (0, resetPassword_service_1.resetPasswordService)(token, newPassword);
        return response.status(200).json(result);
    }
    catch (error) {
        return response.status(500);
    }
});
exports.resetPasswordController = resetPasswordController;
