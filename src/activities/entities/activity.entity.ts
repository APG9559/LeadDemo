/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Lead } from '../../leads/entities/lead.entities';
import { User } from '../../users/entities/users.entity';

export enum ActivityType {
  CALL = 'call',
  EMAIL = 'email',
  MEETING = 'meeting',
  NOTE = 'note',
  TASK = 'task',
}

@Entity('activities')
export class Activity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lead)
  @JoinColumn({ name: 'lead_id' })
  lead: Lead;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'enum',
    enum: ActivityType,
  })
  type: ActivityType;

  @Column({ nullable: true })
  subject: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  scheduled_at: Date;

  @Column({ nullable: true })
  completed_at: Date;
}
