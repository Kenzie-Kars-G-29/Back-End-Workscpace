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
exports.forgotPasswordService = exports.passwordResetTokens = void 0;
const user_entity_1 = __importDefault(require("../../entities/user.entity"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const data_source_1 = require("../../data-source");
const crypto_1 = __importDefault(require("crypto"));
exports.passwordResetTokens = {};
const forgotPasswordService = (email /* userData: IUser */) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userRepository = data_source_1.AppDataSource.getRepository(user_entity_1.default);
        const user = yield userRepository.findOne({
            where: {
                email,
            }
        });
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        const resetToken = crypto_1.default.randomBytes(32).toString('hex');
        exports.passwordResetTokens[user.id] = resetToken;
        yield userRepository.save(Object.assign(Object.assign({}, user), { resetToken: resetToken }));
        const transporter = nodemailer_1.default.createTransport({
            host: process.env.EMAIL_HOST,
            port: 587,
            auth: {
                user: process.env.EMAIL_HOST_USER,
                pass: process.env.EMAIL_HOST_PASSWORD
            },
            tls: { rejectUnauthorized: false }
        });
        transporter.sendMail({
            from: `Motors Shop <${process.env.EMAIL_HOST_USER}>`,
            to: email,
            subject: "Recuperação de Senha!",
            html: `<p>Olá ${user.name}, clique no link para redefinir sua senha: <a href="http://localhost:5173/forget-password/${resetToken}">Redefinir Senha</a></p>`
        });
        return { message: "Email enviado!" };
    }
    catch (error) {
        throw new Error("Usuário não encontrado!");
    }
});
exports.forgotPasswordService = forgotPasswordService;
//http://localhost:5173/forget-password?token=${resetToken}
