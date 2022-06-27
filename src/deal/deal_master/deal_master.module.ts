import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { deal_master } from 'src/Entity/deal_master.entity';
import { DealMasterController } from './deal_master.controller';
import { DealMasterService } from './deal_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([deal_master])],
  controllers: [DealMasterController],
  providers: [DealMasterService]
})
export class DealMasterModule {}
