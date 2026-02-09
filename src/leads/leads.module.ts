import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Lead } from './entities/lead.entities';
import { LeadStatusHistory } from './entities/lead-status-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lead, LeadStatusHistory])],
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}
