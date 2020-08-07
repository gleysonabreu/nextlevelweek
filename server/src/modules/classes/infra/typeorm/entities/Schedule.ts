import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId, JoinColumn } from 'typeorm';
import Classes from './Classes';

@Entity('class_schedule')
class Schedule {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  week_day: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @ManyToOne(type => Classes, classes => classes.schedule)
  @JoinColumn({ referencedColumnName: 'id' })
  classe: Classes;

  @RelationId((schedule: Schedule) => schedule.classe)
  class_id: number;
}

export default Schedule;