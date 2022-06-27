import { Module } from '@nestjs/common';
import { CampaignMasterModule } from './campaign_master/campaign_master.module';
import { CampaignTypeMasterModule } from './campaign_type_master/campaign_type_master.module';
import { ContactCampaignMappingModule } from './contact_campaign_mapping/contact_campaign_mapping.module';

@Module({
  imports: [CampaignMasterModule,CampaignTypeMasterModule,ContactCampaignMappingModule]
})
export class CampaignModule {}
