/* eslint-disable prettier/prettier */
import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import { JoinColumn } from 'typeorm/decorator/relations/JoinColumn';
import {User} from '../../users/entities/users.entity';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { Company } from 'src/companies/entities/company.entities';

export enum LeadStatus {
    CREATED = 'created',
    PROCESSING = 'processing',
    FINISHED = 'finished',
}

@Entity('leads')
export class Lead{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column({nullable : true})
    email: string;

    @Column()
    phone: string;

    @Column({
        type: 'enum',
        enum: LeadStatus,
        default: LeadStatus.CREATED,
    })
    status: LeadStatus;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_id'})
    creator: User;

    
    @ManyToOne(() => User, { nullable: true })
    @JoinColumn({ name: 'assigned_to' })
    assignee: User;
    
    @ManyToOne(() => Company, { nullable: true })
    @JoinColumn({ name: 'company_id' })
    company: Company;


}