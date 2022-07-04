import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { transaction_master } from 'src/Entity/transaction_master.entity';
import { TransactionMasterController } from './transaction_master.controller';
import { TransactionMasterService } from './transaction_master.service';

@Module({
  imports : [TypeOrmModule.forFeature([transaction_master])],
  controllers: [TransactionMasterController],
  providers: [TransactionMasterService]
})
export class TransactionMasterModule {}
