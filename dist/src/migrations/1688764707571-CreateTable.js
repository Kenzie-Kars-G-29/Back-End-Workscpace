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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable1688764707571 = void 0;
class CreateTable1688764707571 {
    constructor() {
        this.name = 'CreateTable1688764707571';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "comment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "announcementId" uuid, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying(11), "phone" character varying(15), "birthday" date NOT NULL, "description" character varying NOT NULL, "cep" character varying(9), "state" character varying(45) NOT NULL, "city" character varying(45) NOT NULL, "street" character varying(45) NOT NULL, "number" character varying(5) NOT NULL, "complement" character varying(20) NOT NULL, "isSeller" boolean NOT NULL DEFAULT false, "resetToken" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "images_urls" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "coverImage" character varying NOT NULL, "firstImage" character varying NOT NULL, "secondImage" character varying NOT NULL, "thirdImage" character varying, "fourthImage" character varying, "fifthImage" character varying, "sixthImage" character varying, "announcementId" uuid, CONSTRAINT "REL_e5607e2d07253b8aaecd726d8b" UNIQUE ("announcementId"), CONSTRAINT "PK_49691f9ecfa04fe6c8882e555f5" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "brand" character varying(20) NOT NULL, "model" character varying(50) NOT NULL, "color" character varying(20) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(8) NOT NULL, "km" numeric(12,2) NOT NULL DEFAULT '0', "price" numeric(12,2) NOT NULL DEFAULT '0', "fipeTablePrice" numeric(12,2) NOT NULL DEFAULT '0', "isPublic" boolean NOT NULL, "userId" uuid, "imageId" uuid, CONSTRAINT "REL_c23f7f4f1d95aef7c4e0306d19" UNIQUE ("imageId"), CONSTRAINT "PK_b3ad760876ff2e19d58e05dc8b0" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_68af9910d29a58bf047f82c4c7a" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "images_urls" ADD CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
            yield queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_c23f7f4f1d95aef7c4e0306d199" FOREIGN KEY ("imageId") REFERENCES "images_urls"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_c23f7f4f1d95aef7c4e0306d199"`);
            yield queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4"`);
            yield queryRunner.query(`ALTER TABLE "images_urls" DROP CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf"`);
            yield queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_68af9910d29a58bf047f82c4c7a"`);
            yield queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_c0354a9a009d3bb45a08655ce3b"`);
            yield queryRunner.query(`DROP TABLE "announcements"`);
            yield queryRunner.query(`DROP TABLE "images_urls"`);
            yield queryRunner.query(`DROP TABLE "users"`);
            yield queryRunner.query(`DROP TABLE "comment"`);
        });
    }
}
exports.CreateTable1688764707571 = CreateTable1688764707571;
