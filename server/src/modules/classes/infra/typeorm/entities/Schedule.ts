import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne } from 'typeorm';
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

  @ManyToOne(type => Classes, classes => classes.schedule, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  classe: Schedule;

  @OneToOne(type => Classes, classes => classes.id)
  class_id: number;

}

export default Schedule;