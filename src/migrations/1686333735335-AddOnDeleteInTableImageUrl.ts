import { MigrationInterface, QueryRunner } from "typeorm";

export class AddOnDeleteInTableImageUrl1686333735335 implements MigrationInterface {
    name = 'AddOnDeleteInTableImageUrl1686333735335'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_urls" DROP CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf"`);
        await queryRunner.query(`ALTER TABLE "images_urls" ADD CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images_urls" DROP CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf"`);
        await queryRunner.query(`ALTER TABLE "images_urls" ADD CONSTRAINT "FK_e5607e2d07253b8aaecd726d8bf" FOREIGN KEY ("announcementId") REFERENCES "announcements"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
