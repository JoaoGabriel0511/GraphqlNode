import { MigrationInterface, QueryRunner } from "typeorm";

export class Cat1704243914819 implements MigrationInterface {
    name = 'Cat1704243914819'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "test" ("id" SERIAL NOT NULL, CONSTRAINT "PK_5417af0062cf987495b611b59c7" PRIMARY KEY ("id")); COMMENT ON COLUMN "test"."id" IS 'ID'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "test"`);
    }

}
