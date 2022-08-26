import { MigrationInterface, QueryRunner } from 'typeorm';

export class CoffeeRefactor1661519533762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "COFFEE" RENAME COLUMN "name" TO "title"',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE "COFFEE" RENAME COLUMN "title" TO "name"',
    );
  }
}
