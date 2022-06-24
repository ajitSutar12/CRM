import { Module } from '@nestjs/common';
import { FinancialYearService } from './financial_year.service';
import { FinancialYearController } from './financial_year.controller';
import { financial_year } from 'src/Entity/financial_year.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([financial_year])],
  providers: [FinancialYearService],
  controllers: [FinancialYearController]
})
export class FinancialYearModule {}
