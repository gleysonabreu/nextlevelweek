import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import User from './User';
import Schedule from './Schedule';

@Entity('classes')
class Classes {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  subject: string;

  @Column({ type: 'decimal' })
  cost: number;

  @Column()
  user_id: number;

  @ManyToOne(type => User, user => user.classes, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @OneToMany(type => Schedule, schedule => schedule.classe, {
    cascade: ['insert', 'remove', 'update'],
  })
  schedule: Schedule[];

}

export default Classes;