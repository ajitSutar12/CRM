import { Module } from '@nestjs/common';
import { CompanyMasterService } from './company_master.service';
import { CompanyMasterController } from './company_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { company_master } from 'src/Entity/company_master.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([company_master])],
  providers: [CompanyMasterService],
  controllers: [CompanyMasterController]
})
export class CompanyMasterModule {}
