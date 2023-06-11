import { MigrationInterface, QueryRunner } from "typeorm";

export class NewRelations1686465524791 implements MigrationInterface {
    name = 'NewRelations1686465524791'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_urls" ADD "announcementId" uuid`);
        await queryRunner.query(`ALTER TABLE "images_urls" ADD CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_urls" DROP CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf"`);
        await queryRunner.query(`ALTER TABLE "images_urls" DROP COLUMN "announcementId"`);
    }

}
