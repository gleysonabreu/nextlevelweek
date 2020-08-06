import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Classes from './Classes';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  whatsapp: string;

  @Column()
  bio: string;

  @OneToMany(type => Classes, classes => classes.user)
  classes: Classes[];

}

export default User;