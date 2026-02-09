/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { TagsService } from './tags.service';

@Controller('tags')
export class TagsController {

  constructor(private readonly service: TagsService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post(':leadId/:tagId')
  attachTag(
    @Param('leadId') leadId: string,
    @Param('tagId') tagId: string,
  ) {
    return this.service.assignTagToLead(+leadId, +tagId);
  }
}
