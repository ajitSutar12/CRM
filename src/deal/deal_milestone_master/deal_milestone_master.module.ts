import { Module } from '@nestjs/common';
import { DealMilestoneMasterController } from './deal_milestone_master.controller';
import { DealMilestoneMasterService } from './deal_milestone_master.service';

@Module({
  controllers: [DealMilestoneMasterController],
  providers: [DealMilestoneMasterService]
})
export class DealMilestoneMasterModule {}
