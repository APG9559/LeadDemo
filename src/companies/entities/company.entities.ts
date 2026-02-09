/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('companies')
export class Company {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  website: string;

  @Column({ nullable: true })
  industry: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  country: string;
}
