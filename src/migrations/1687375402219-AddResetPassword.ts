import { MigrationInterface, QueryRunner } from "typeorm";

export class AddResetPassword1687375402219 implements MigrationInterface {
    name = 'AddResetPassword1687375402219'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "resetToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetToken"`);
    }

}
