import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { campaign_type_master } from 'src/Entity/campaign_type_master.entity';
import { CampaignTypeMasterService } from './campaign_type_master.service';
import { CampaignTypeMasterController } from './campaign_type_master.controller';

@Module({
  imports:[TypeOrmModule.forFeature([campaign_type_master])],
  controllers: [CampaignTypeMasterController],
  providers: [CampaignTypeMasterService]
})
export class CampaignTypeMasterModule {}
