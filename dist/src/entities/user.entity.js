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
const bcryptjs_1 = require("bcryptjs");
const typeorm_1 = require("typeorm");
const announcement_entity_1 = __importDefault(require("./announcement.entity"));
const comment_entity_1 = require("./comment.entity");
let User = class User {
    static findById(id) {
        throw new Error('Method not implemented.');
    }
    hashPassword() {
        const isEncrypted = (0, bcryptjs_1.getRounds)(this.password);
        if (!isEncrypted) {
            this.password = (0, bcryptjs_1.hashSync)(this.password, 10);
        }
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 11, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date" }),
    __metadata("design:type", String)
], User.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    __metadata("design:type", String)
], User.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 9, nullable: true }),
    __metadata("design:type", String)
], User.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], User.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], User.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 45 }),
    __metadata("design:type", String)
], User.prototype, "street", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 5 }),
    __metadata("design:type", String)
], User.prototype, "number", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], User.prototype, "complement", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], User.prototype, "isSeller", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "resetToken", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], User.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.OneToMany)(() => announcement_entity_1.default, (announcement) => announcement.user),
    __metadata("design:type", Array)
], User.prototype, "announcements", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => comment_entity_1.Comment, (comment) => comment.user),
    __metadata("design:type", Array)
], User.prototype, "comments", void 0);
User = __decorate([
    (0, typeorm_1.Entity)("users")
], User);
exports.default = User;
