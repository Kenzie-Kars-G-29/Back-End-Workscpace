import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableAnnouncement1686194268928 implements MigrationInterface {
    name = 'AlterTableAnnouncement1686194268928'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "year" character varying(4) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcements" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "announcements" ADD "year" integer NOT NULL`);
    }

}
