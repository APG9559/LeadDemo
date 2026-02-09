/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead, LeadStatus } from './entities/lead.entities';
import { LeadStatusHistory } from './entities/lead-status-history.entity';

@Injectable()
export class LeadsService {

  constructor(
    @InjectRepository(Lead)
    private leadsRepository: Repository<Lead>,
    @InjectRepository(LeadStatusHistory)
    private leadStatusHistoryRepository: Repository<LeadStatusHistory>,
  ) {}

  async create(data: Partial<Lead>) {
    const lead = this.leadsRepository.create(data);
    return this.leadsRepository.save(lead);
  }

  async assignLead(leadId: number, userId: number){
    return this.leadsRepository.update(leadId, 
        {
            assignee:{ id: userId },
        }
    );
  }

  async updateStatus(leadId: number, status: LeadStatus, userId: number) {

  const lead = await this.leadsRepository.findOne({ where: { id: leadId } });

  const oldStatus = lead.status;

  lead.status = status;
  await this.leadsRepository.save(lead);

  await this.leadStatusHistoryRepository.save({
    lead: { id: leadId },
    old_status: oldStatus,
    new_status: status,
    changed_by: { id: userId },
  });

  return lead;
}


}
