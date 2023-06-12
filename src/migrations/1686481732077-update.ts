import { MigrationInterface, QueryRunner } from "typeorm";

export class Update1686481732077 implements MigrationInterface {
    name = 'Update1686481732077'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "km"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "km" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "price" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "fipeTablePrice"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "fipeTablePrice" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "fipeTablePrice"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "fipeTablePrice" numeric(12,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "price" numeric(12,2) NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "km"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "km" numeric(12,2) NOT NULL DEFAULT '0'`);
    }

}
