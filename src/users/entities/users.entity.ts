/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
export enum Role {
  ADMIN = 'admin',
  MANAGER = 'manager',
  SALES_REP = 'sales_rep',
}


@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password_hash: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;
  
  @Column({
  type: 'enum',
  enum: Role,
  default: Role.SALES_REP,
    })
    role: Role;
}
