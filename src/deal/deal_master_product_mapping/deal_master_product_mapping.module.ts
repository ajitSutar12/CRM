import { Module } from '@nestjs/common';
import { DealMasterProductMappingController } from './deal_master_product_mapping.controller';
import { DealMasterProductMappingService } from './deal_master_product_mapping.service';

@Module({
  controllers: [DealMasterProductMappingController],
  providers: [DealMasterProductMappingService]
})
export class DealMasterProductMappingModule {}
