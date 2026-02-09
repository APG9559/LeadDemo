/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Activity } from './entities/activity.entity';

@Injectable()
export class ActivitiesService {
    constructor(
        @InjectRepository(Activity)
        private activitiesRepository: Repository<Activity>,
    ){}
    
    async create(data: Partial<Activity>){
        const newActivity = this.activitiesRepository.create(data);
        return this.activitiesRepository.save(newActivity);    
    }

    async findAll(){
        return this.activitiesRepository.find();
    }

    async findByLead(leadId:number){
        return this.activitiesRepository.find({
            where: { lead: { id: leadId } },
            relations: ['user'],
        });
    }



}
