import { Module } from '@nestjs/common';
import { DealMasterModule } from './deal_master/deal_master.module';
import { DealAttachmentModule } from './deal_attachment/deal_attachment.module';
import { DealMasterProductMappingModule } from './deal_master_product_mapping/deal_master_product_mapping.module';
import { DealMilestoneMasterModule } from './deal_milestone_master/deal_milestone_master.module';

@Module({
  imports: [DealMasterModule, DealAttachmentModule, DealMasterProductMappingModule, DealMilestoneMasterModule]
})
export class DealModule {}
