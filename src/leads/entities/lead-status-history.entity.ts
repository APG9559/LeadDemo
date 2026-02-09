/* eslint-disable prettier/prettier */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
} from 'typeorm';
import { Lead } from './lead.entities';
import { User } from '../../users/entities/users.entity';
import { LeadStatus } from './lead.entities';

@Entity('lead_status_history')
export class LeadStatusHistory {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Lead)
  @JoinColumn({ name: 'lead_id' })
  lead: Lead;

  @Column({
    type: 'enum',
    enum: LeadStatus,
    nullable: true,
  })
  old_status: LeadStatus;

  @Column({
    type: 'enum',
    enum: LeadStatus,
  })
  new_status: LeadStatus;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'changed_by' })
  changed_by: User;

  @CreateDateColumn()
  changed_at: Date;
}
