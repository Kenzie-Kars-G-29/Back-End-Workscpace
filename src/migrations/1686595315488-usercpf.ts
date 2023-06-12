import { MigrationInterface, QueryRunner } from "typeorm";

export class Usercpf1686595315488 implements MigrationInterface {
    name = 'Usercpf1686595315488'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying(12) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" character varying(10) NOT NULL`);
    }

}
