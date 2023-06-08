import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1686163235635 implements MigrationInterface {
    name = 'CreateTables1686163235635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "cpf" character varying(10) NOT NULL, "phone" character varying(12) NOT NULL, "birthday" date NOT NULL, "description" character varying NOT NULL, "cep" character varying(8) NOT NULL, "state" character varying(45) NOT NULL, "city" character varying(45) NOT NULL, "street" character varying(45) NOT NULL, "number" character varying(5) NOT NULL, "complement" character varying(20) NOT NULL, "isSeller" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "announcements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "brand" character varying(20) NOT NULL, "model" character varying(50) NOT NULL, "color" character varying(20) NOT NULL, "year" integer NOT NULL, "fuel" character varying(8) NOT NULL, "km" integer NOT NULL, "price" numeric(12,2) NOT NULL DEFAULT '0', "fipeTablePrice" numeric(12,2) NOT NULL DEFAULT '0', "isPublic" boolean NOT NULL, "sellerIdId" uuid, CONSTRAINT "PK_b3ad760876ff2e19d58e05dc8b0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Announcement_images_urls" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "coverImage" character varying NOT NULL, "firstImage" character varying NOT NULL, "secondImage" character varying NOT NULL, "thirdImage" character varying, "fourthImage" character varying, "fifthImage" character varying, "sixthImage" character varying, "announcementId" uuid, CONSTRAINT "PK_5550ca4bfc5570d063ceb4b7b24" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_3a861b8d1582b7f4bd005f1b94d" FOREIGN KEY ("sellerIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Announcement_images_urls" ADD CONSTRAINT "FK_7cec9fda2bd4a342f04253babf5" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Announcement_images_urls" DROP CONSTRAINT "FK_7cec9fda2bd4a342f04253babf5"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_3a861b8d1582b7f4bd005f1b94d"`);
        await queryRunner.query(`DROP TABLE "Announcement_images_urls"`);
        await queryRunner.query(`DROP TABLE "announcements"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
