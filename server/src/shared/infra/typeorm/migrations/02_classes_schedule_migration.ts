import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class ClassesSchedule implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: 'class_schedule',
        columns: [
          {
            name: "id",
            isPrimary: true,
            type: 'int',
            generationStrategy: 'increment',
            isGenerated: true,
          },
          {
            name: 'week_day',
            type: 'int',
          },
          {
            name: 'from',
            type: 'int',
          },
          {
            name: 'to',
            type: 'int',
          },
          {
            name: 'class_id',
            type: 'int',
          },
        ]
      }));

      await queryRunner.createForeignKey("class_schedule", new TableForeignKey({
        columnNames: ['class_id'],
        referencedColumnNames: ['id'],
        referencedTableName: "classes",
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      }))
    }

    async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('class_schedule');
    }


}