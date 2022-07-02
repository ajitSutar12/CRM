import { Module } from '@nestjs/common';
import { ExpenseMasterService } from './expense_master.service';
import { ExpenseMasterController } from './expense_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { expense_master } from 'src/Entity/expense_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([expense_master])],
  providers: [ExpenseMasterService],
  controllers: [ExpenseMasterController]
})
export class ExpenseMasterModule {}
