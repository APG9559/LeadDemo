/* eslint-disable prettier/prettier */
import { Entity, ManyToOne, PrimaryColumn, JoinColumn } from 'typeorm';
import { Lead } from '../../leads/entities/lead.entities';
import { Tag } from './tag.entities';

@Entity('lead_tags')
export class LeadTag {

  @PrimaryColumn()
  lead_id: number;

  @PrimaryColumn()
  tag_id: number;

  @ManyToOne(() => Lead, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'lead_id' })
  lead: Lead;

  @ManyToOne(() => Tag, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'tag_id' })
  tag: Tag;
}
