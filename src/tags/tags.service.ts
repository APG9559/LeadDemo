/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tag } from './entities/tag.entities';
import { LeadTag } from './entities/lead-tag.entity';

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tag)
        private tagsRepository: Repository<Tag>,
        @InjectRepository(LeadTag)
        private leadTagRepository: Repository<LeadTag>,
    ) {}

    create(data: Partial<Tag>){
        const tag = this.tagsRepository.create(data);

        return this.tagsRepository.save(tag);
    }

    findAll(){
        return this.tagsRepository.find();
    }

    async assignTagToLead(leadId: number, tagId: number) {
        const leadTag = this.leadTagRepository.create({
            lead_id: leadId,
            tag_id: tagId,
        });

     return this.leadTagRepository.save(leadTag);
}

}