/* eslint-disable prettier/prettier */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './entities/tag.entities';
import { LeadTag } from './entities/lead-tag.entity';
import { TagsController } from './tags.controller';
import { TagsService } from './tags.service';
import { Module } from '@nestjs/common/decorators/modules/module.decorator';
import { UsersModule } from 'src/users/users.module';
import { AuthModule } from 'src/auth/auth.module';
import { LeadsModule } from 'src/leads/leads.module';
import { CompaniesModule} from 'src/companies/companies.module';
import { ActivitiesModule } from 'src/activities/activities.module';


@Module({
  imports: [TypeOrmModule.forFeature([Tag, LeadTag]), UsersModule,
  AuthModule,
  LeadsModule,
  CompaniesModule,
  ActivitiesModule,
  TagsModule],
  controllers: [TagsController],
  providers: [TagsService],
  exports: [TagsService],
})
export class TagsModule {}
