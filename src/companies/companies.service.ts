/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entities';

@Injectable()
export class CompaniesService {
    constructor(
        @InjectRepository(Company)
        private companyRepository: Repository<Company>,
    ){}

    async create(data: Partial<Company>) {
    const company = this.companyRepository.create(data);
    return this.companyRepository.save(company);
  }

  async findAll() {
    return this.companyRepository.find();
  }
}
