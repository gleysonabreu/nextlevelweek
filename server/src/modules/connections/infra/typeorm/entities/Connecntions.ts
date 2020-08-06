import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('connections')
class Connecntions {
  @PrimaryGeneratedColumn('increment')
  id: number;
  
  @Column()
  user_id: number;

  @CreateDateColumn()
  create_at: Date;
}

export default Connecntions;