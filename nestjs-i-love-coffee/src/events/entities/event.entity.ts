import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

// @Index(['name', 'type']) : for composite index
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() // for fast access, creates index in table.column
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
