import { Module } from '@nestjs/common';
import { ExpenseTypeMasterModule } from './expense_type_master/expense_type_master.module';
import { ExpenseMasterModule } from './expense_master/expense_master.module';

@Module({
  imports: [ExpenseTypeMasterModule, ExpenseMasterModule]
})
export class ExpenseModule {}
