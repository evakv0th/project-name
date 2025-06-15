import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { OfficesModule } from './offices/offices.module';
import { CompaniesModule } from './companies/companies.module';
import { ReportsModule } from './reports/reports.module';
import { Company } from './companies/entities/company.entity';
import { Office } from './offices/entities/office.entity';
import { Report } from './reports/entities/report.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'glibkv',
      password: 'link7799',
      database: 'postgres',
      entities: [User, Company, Office, Report],
      synchronize: true,
    }),
    UsersModule,
    OfficesModule,
    CompaniesModule,
    ReportsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
