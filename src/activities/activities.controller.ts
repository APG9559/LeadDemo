/* eslint-disable prettier/prettier */
import { Body, Controller, Post, UseGuards, Request, Get, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ActivitiesService } from './activities.service';

@Controller('activities')
export class ActivitiesController {
    constructor(private readonly activityService: ActivitiesService) {}
    @UseGuards(JwtAuthGuard)
    @Post()
    createActivity(@Body() body, @Request() req) {
        return this.activityService.create({
            ...body,
            user: { id: req.user.userId },

        });
    }

    @UseGuards(JwtAuthGuard)
    @Get('lead/:leadId')
    getActivities(@Param('leadId') leadId: number) {
        return this.activityService.findByLead(leadId);
    }
}
