import { Module } from '@nestjs/common';
import { FinancialYearService } from './financial_year.service';
import { FinancialYearController } from './financial_year.controller';

@Module({
  providers: [FinancialYearService],
  controllers: [FinancialYearController]
})
export class FinancialYearModule {}
