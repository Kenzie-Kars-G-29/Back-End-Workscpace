"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const ensureIsSellerMiddleware = (request, response, next) => {
    let token = request.headers.authorization;
    token = token.split(" ")[1];
    jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY, (error, decoded) => {
        if (decoded.isSeller == false) {
            return response.status(401).json({
                message: "This user is not Seller"
            });
        }
        return next();
    });
};
exports.default = ensureIsSellerMiddleware;
