import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { activity_moniter } from 'src/Entity/activity_moniter.entity';
import { transaction_master } from 'src/Entity/transaction_master.entity';
import { ActivityMoniterModule } from './activity_moniter/activity_moniter.module';
import { TransactionMasterModule } from './transaction_master/transaction_master.module';

@Module({
  imports: [TypeOrmModule.forFeature([activity_moniter, transaction_master]),
    ActivityMoniterModule, 
    TransactionMasterModule]
})
export class ActivityModule {}
