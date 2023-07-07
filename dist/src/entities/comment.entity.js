"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("./user.entity"));
const announcement_entity_1 = __importDefault(require("./announcement.entity"));
let Comment = exports.Comment = class Comment {
    get timeSinceCreation() {
        const differenceInSeconds = (new Date().getTime() - this.createdAt.getTime()) / 1000;
        const years = Math.floor(differenceInSeconds / 31536000);
        if (years > 1) {
            return `${years} years ago`;
        }
        const months = Math.floor((differenceInSeconds % 31536000) / 2592000);
        if (months > 1) {
            return `${months} months ago`;
        }
        const days = Math.floor(((differenceInSeconds % 31536000) % 2592000) / 86400);
        if (days > 1) {
            return `${days} days ago`;
        }
        const hours = Math.floor((((differenceInSeconds % 31536000) % 2592000) % 86400) / 3600);
        if (hours > 1) {
            return `${hours} hours ago`;
        }
        const minutes = Math.floor(((((differenceInSeconds % 31536000) % 2592000) % 86400) % 3600) / 60);
        if (minutes > 1) {
            return `${minutes} minutes ago`;
        }
        return `${Math.floor(differenceInSeconds)} seconds ago`;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Comment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Comment.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp" }),
    __metadata("design:type", Date)
], Comment.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.default),
    __metadata("design:type", user_entity_1.default)
], Comment.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => announcement_entity_1.default),
    __metadata("design:type", announcement_entity_1.default)
], Comment.prototype, "announcement", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: "timeAgo" }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Comment.prototype, "timeSinceCreation", null);
exports.Comment = Comment = __decorate([
    (0, typeorm_1.Entity)()
], Comment);
