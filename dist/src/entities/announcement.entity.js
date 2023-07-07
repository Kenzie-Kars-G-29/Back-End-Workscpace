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
const typeorm_1 = require("typeorm");
const user_entity_1 = __importDefault(require("./user.entity"));
const imageUrl_entity_1 = __importDefault(require("./imageUrl.entity"));
const comment_entity_1 = require("./comment.entity");
let Announcement = class Announcement {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], Announcement.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], Announcement.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Announcement.prototype, "brand", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Announcement.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], Announcement.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 4 }),
    __metadata("design:type", String)
], Announcement.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 8 }),
    __metadata("design:type", String)
], Announcement.prototype, "fuel", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", String)
], Announcement.prototype, "km", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", String)
], Announcement.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 12, scale: 2, default: 0 }),
    __metadata("design:type", String)
], Announcement.prototype, "fipeTablePrice", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", Boolean)
], Announcement.prototype, "isPublic", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.default, (user) => user.announcements, { onDelete: "CASCADE" }),
    __metadata("design:type", user_entity_1.default)
], Announcement.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => imageUrl_entity_1.default, (image) => image.announcement),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", imageUrl_entity_1.default)
], Announcement.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.announcement),
    __metadata("design:type", Array)
], Announcement.prototype, "comments", void 0);
Announcement = __decorate([
    (0, typeorm_1.Entity)("announcements")
], Announcement);
exports.default = Announcement;
