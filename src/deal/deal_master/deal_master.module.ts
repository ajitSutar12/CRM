import { Module } from '@nestjs/common';
import { DealMasterController } from './deal_master.controller';
import { DealMasterService } from './deal_master.service';

@Module({
  controllers: [DealMasterController],
  providers: [DealMasterService]
})
export class DealMasterModule {}
