import { MigrationInterface, QueryRunner } from "typeorm";

export class Update1686467242047 implements MigrationInterface {
    name = 'Update1686467242047'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ADD "imageId" uuid`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "UQ_c23f7f4f1d95aef7c4e0306d199" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_c23f7f4f1d95aef7c4e0306d199" FOREIGN KEY ("imageId") REFERENCES "images_urls"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_c23f7f4f1d95aef7c4e0306d199"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "UQ_c23f7f4f1d95aef7c4e0306d199"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "imageId"`);
    }

}
