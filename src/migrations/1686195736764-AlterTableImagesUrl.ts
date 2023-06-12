import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableImagesUrl1686195736764 implements MigrationInterface {
    name = 'AlterTableImagesUrl1686195736764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images_urls" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "coverImage" character varying NOT NULL, "firstImage" character varying NOT NULL, "secondImage" character varying NOT NULL, "thirdImage" character varying, "fourthImage" character varying, "fifthImage" character varying, "sixthImage" character varying, "announcementId" uuid, CONSTRAINT "PK_49691f9ecfa04fe6c8882e555f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "images_urls" ADD CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_urls" DROP CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf"`);
        await queryRunner.query(`DROP TABLE "images_urls"`);
    }

}
