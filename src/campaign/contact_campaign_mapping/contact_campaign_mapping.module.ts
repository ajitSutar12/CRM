import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact_campaign_mapping } from 'src/Entity/contact_campaign_mapping.entity';
import { ContactCampaignMappingController } from './contact_campaign_mapping.controller';
import { ContactCampaignMappingService } from './contact_campaign_mapping.service';

@Module({
  imports: [TypeOrmModule.forFeature([contact_campaign_mapping])],
  controllers: [ContactCampaignMappingController],
  providers: [ContactCampaignMappingService]
})
export class ContactCampaignMappingModule {}
