import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class ConnectionsMigration implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'connections',
        columns: [
          {
            name: "id",
            isPrimary: true,
            type: 'int',
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'create_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'user_id',
            type: 'int',
          },
        ]
      }));

      await queryRunner.createForeignKey("connections", new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: "users",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }))
    }

    async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('class_schedule');
    }


}