import { Module } from '@nestjs/common';
import { DealMasterModule } from './deal_master/deal_master.module';
import { DealAttachmentModule } from './deal_attachment/deal_attachment.module';
import { DealMasterProductMappingModule } from './deal_master_product_mapping/deal_master_product_mapping.module';
import { DealMilestoneMasterModule } from './deal_milestone_master/deal_milestone_master.module';
import { DealMasterMilestoneMappingModule } from './deal_master_milestone_mapping/deal_master_milestone_mapping.module';
import { NotesManagementDealModule } from './notes_management_deal/notes_management_deal.module';

@Module({
  imports: [DealMasterModule, DealAttachmentModule, DealMasterProductMappingModule, DealMilestoneMasterModule, DealMasterMilestoneMappingModule, NotesManagementDealModule]
})
export class DealModule {}
