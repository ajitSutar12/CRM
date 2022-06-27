import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { deal_master_product_mapping } from 'src/Entity/deal_master_product_mapping';
import { DealMasterProductMappingController } from './deal_master_product_mapping.controller';
import { DealMasterProductMappingService } from './deal_master_product_mapping.service';

@Module({
  imports:[TypeOrmModule.forFeature([deal_master_product_mapping])],
  controllers: [DealMasterProductMappingController],
  providers: [DealMasterProductMappingService]
})
export class DealMasterProductMappingModule {}
