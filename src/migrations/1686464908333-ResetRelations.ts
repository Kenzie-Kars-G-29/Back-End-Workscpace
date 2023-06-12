import { MigrationInterface, QueryRunner } from "typeorm";

export class ResetRelations1686464908333 implements MigrationInterface {
    name = 'ResetRelations1686464908333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_urls" DROP CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf"`);
        await queryRunner.query(`ALTER TABLE "images_urls" DROP COLUMN "announcementId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_urls" ADD "announcementId" uuid`);
        await queryRunner.query(`ALTER TABLE "images_urls" ADD CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
