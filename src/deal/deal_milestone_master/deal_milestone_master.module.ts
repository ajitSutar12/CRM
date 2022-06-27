import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { deal_milestone_master } from 'src/Entity/deal_milestone_master';
import { DealMilestoneMasterController } from './deal_milestone_master.controller';
import { DealMilestoneMasterService } from './deal_milestone_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([deal_milestone_master])],
  controllers: [DealMilestoneMasterController],
  providers: [DealMilestoneMasterService]
})
export class DealMilestoneMasterModule {}
