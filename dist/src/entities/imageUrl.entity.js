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
const announcement_entity_1 = __importDefault(require("./announcement.entity"));
let ImageUrl = class ImageUrl {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], ImageUrl.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], ImageUrl.prototype, "coverImage", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], ImageUrl.prototype, "firstImage", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], ImageUrl.prototype, "secondImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ImageUrl.prototype, "thirdImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ImageUrl.prototype, "fourthImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ImageUrl.prototype, "fifthImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], ImageUrl.prototype, "sixthImage", void 0);
__decorate([
    (0, typeorm_1.OneToOne)((type) => announcement_entity_1.default, (announcement) => announcement.image, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", announcement_entity_1.default)
], ImageUrl.prototype, "announcement", void 0);
ImageUrl = __decorate([
    (0, typeorm_1.Entity)("images_urls")
], ImageUrl);
exports.default = ImageUrl;
