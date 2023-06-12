import { MigrationInterface, QueryRunner } from "typeorm";

export class Update1686408137010 implements MigrationInterface {
    name = 'Update1686408137010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP CONSTRAINT "FK_3a861b8d1582b7f4bd005f1b94d"`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "sellerIdId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" ADD "sellerIdId" uuid`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD CONSTRAINT "FK_3a861b8d1582b7f4bd005f1b94d" FOREIGN KEY ("sellerIdId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
