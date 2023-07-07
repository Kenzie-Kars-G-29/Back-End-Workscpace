"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.loginSchema = void 0;
const zod_1 = require("zod");
const loginSchema = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string()
});
exports.loginSchema = loginSchema;
const resetPasswordSchema = zod_1.z.object({
    newPassword: zod_1.z.string().min(6),
});
exports.resetPasswordSchema = resetPasswordSchema;
