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
import { AuthorModule } from './author/author.module';

// # Parameters for Vercel Postgres Templates
// POSTGRES_URL=postgresql://neondb_owner:npg_RiVTOe8rF2DC@ep-sparkling-king-ai5gyig5-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require
// POSTGRES_URL_NON_POOLING=postgresql://neondb_owner:npg_RiVTOe8rF2DC@ep-sparkling-king-ai5gyig5.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require
// POSTGRES_USER=neondb_owner
// POSTGRES_HOST=ep-sparkling-king-ai5gyig5-pooler.c-4.us-east-1.aws.neon.tech
// POSTGRES_PASSWORD=npg_RiVTOe8rF2DC
// POSTGRES_DATABASE=neondb

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-sparkling-king-ai5gyig5-pooler.c-4.us-east-1.aws.neon.tech',
      port: 5432,
      username: 'neondb_owner',
      password: 'npg_RiVTOe8rF2DC',
      database: 'neondb',
      autoLoadEntities: true,
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    UsersModule,
    AuthModule,
    CompaniesModule,
    LeadsModule,
    ActivitiesModule,
    TagsModule,
    AuthorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
