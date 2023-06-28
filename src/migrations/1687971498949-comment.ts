import { MigrationInterface, QueryRunner } from "typeorm";

export class Comment1687971498949 implements MigrationInterface {
    name = 'Comment1687971498949'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "text" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "announcementId" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "cpf" character varying(11), "phone" character varying(15), "birthday" date NOT NULL, "description" character varying NOT NULL, "cep" character varying(9), "state" character varying(45) NOT NULL, "city" character varying(45) NOT NULL, "street" character varying(45) NOT NULL, "number" character varying(5) NOT NULL, "complement" character varying(20) NOT NULL, "isSeller" boolean NOT NULL DEFAULT false, "resetToken" character varying, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images_urls" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "coverImage" character varying NOT NULL, "firstImage" character varying NOT NULL, "secondImage" character varying NOT NULL, "thirdImage" character varying, "fourthImage" character varying, "fifthImage" character varying, "sixthImage" character varying, "announcementId" uuid, CONSTRAINT "REL_e5607e2d07253b8aaecd726d8b" UNIQUE ("announcementId"), CONSTRAINT "PK_49691f9ecfa04fe6c8882e555f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "brand" character varying(20) NOT NULL, "model" character varying(50) NOT NULL, "color" character varying(20) NOT NULL, "year" character varying(4) NOT NULL, "fuel" character varying(8) NOT NULL, "km" numeric(12,2) NOT NULL DEFAULT '0', "price" numeric(12,2) NOT NULL DEFAULT '0', "fipeTablePrice" numeric(12,2) NOT NULL DEFAULT '0', "isPublic" boolean NOT NULL, "userId" uuid, "imageId" uuid, CONSTRAINT "REL_c23f7f4f1d95aef7c4e0306d19" UNIQUE ("imageId"), CONSTRAINT "PK_b3ad760876ff2e19d58e05dc8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "images_urls" ADD CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_c23f7f4f1d95aef7c4e0306d199" FOREIGN KEY ("imageId") REFERENCES "images_urls"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_c23f7f4f1d95aef7c4e0306d199"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_1968b95a7c6d64a81b1b3b5aad4"`);
        await queryRunner.query(`ALTER TABLE "images_urls" DROP CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2bf4aa41d384038daf10e39a8e8"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`DROP TABLE "announcements"`);
        await queryRunner.query(`DROP TABLE "images_urls"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
    }

}
