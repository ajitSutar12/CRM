import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { expense_type_master } from 'src/Entity/expense_type_master.entity';
import { ExpenseTypeMasterController } from './expense_type_master.controller';
import { ExpenseTypeMasterService } from './expense_type_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([expense_type_master])],
  controllers: [ExpenseTypeMasterController],
  providers: [ExpenseTypeMasterService]
})
export class ExpenseTypeMasterModule {}
