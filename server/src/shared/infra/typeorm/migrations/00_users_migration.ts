import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class UserMigration implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'users',
        columns: [
          {
            name: "id",
            isPrimary: true,
            type: 'int',
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'avatar',
            type: 'varchar',
          },
          {
            name: 'whatsapp',
            type: 'varchar',
          },
          {
            name: 'bio',
            type: 'varchar',
          },  
        ]
      }));
    }

    async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('users');
    }


}