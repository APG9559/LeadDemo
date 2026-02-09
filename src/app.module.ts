import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CompaniesModule } from './companies/companies.module';
import { LeadsModule } from './leads/leads.module';
import { ActivitiesModule } from './activities/activities.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'crm',
      autoLoadEntities: true,
      synchronize: true, // development only
    }),
    UsersModule,
    AuthModule,
    CompaniesModule,
    LeadsModule,
    ActivitiesModule,
    TagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
