import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { campaign_master } from 'src/Entity/campaign_master.entity';
import { CampaignMasterController } from './campaign_master.controller';
import { CampaignMasterService } from './campaign_master.service';

@Module({
  imports: [TypeOrmModule.forFeature([campaign_master])],
  controllers: [CampaignMasterController],
  providers: [CampaignMasterService]
})
export class CampaignMasterModule {}
