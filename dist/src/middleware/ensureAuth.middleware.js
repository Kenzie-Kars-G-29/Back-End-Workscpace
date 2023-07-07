"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ensureAuthMidlleware = (request, response, next) => {
    let token = request.headers.authorization;
    if (!token) {
        return response.status(401).json({
            message: "Token is required"
        });
    }
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (error) {
            return response.status(401).json({
                message: "Invalid Token"
            });
        }
        response.locals.userId = decoded.sub;
        return next();
    });
};
exports.default = ensureAuthMidlleware;
