/* eslint-disable prettier/prettier */
import { Controller, Post, UseGuards, Body, Request, Patch, Param } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AssignLeadDto } from './dto/assign-lead.dto';
import { UpdateLeadStatusDto } from './dto/update-status.dto';
import { Roles } from 'src/auth/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
@Controller('leads')
export class LeadsController {
    constructor(private readonly leadsService: LeadsService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin', 'manager')
    @Post()
    create(@Body() body, @Request() req) {

    return this.leadsService.create({
        ...body,
         creator: { id: req.user.userId },
    });
    }

    @Patch(':id/assign')
    assignLead(
        @Param('id') id:number,
        @Body() body: AssignLeadDto,
    ){
        return this.leadsService.assignLead(id, body.assigned_to);
    }
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles('admin', 'manager')
    @Patch(':id/status')
    updateStatus(
    @Param('id') id: number,
    @Body() body: UpdateLeadStatusDto,
    @Request() req,
    ) {
    return this.leadsService.updateStatus(id, body.status, req.user.userId);
    }


}
