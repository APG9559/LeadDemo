/* eslint-disable prettier/prettier */
import { Controller, Get, Post, UseGuards, Body } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CompaniesService } from './companies.service';

@Controller('companies')
export class CompaniesController {
constructor(private readonly CompaniesService: CompaniesService) {}
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body) {
    return this.CompaniesService.create(body);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.CompaniesService.findAll();
  }
}
