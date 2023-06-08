import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableAnnouncements1686195138029 implements MigrationInterface {
    name = 'AlterTableAnnouncements1686195138029'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "km"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "km" numeric(12,2) NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "km"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "km" integer NOT NULL`);
    }

}
