import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class ClassesMigration implements MigrationInterface {

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
            name: 'subject',
            type: 'varchar',
          },
          {
            name: 'cost',
            type: 'int',
          },
          {
            name: 'user_id',
            type: 'int',
          },
        ]
      }));

      await queryRunner.createForeignKey("classes", new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: "users",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }))
    }

    async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('classes');
    }


}