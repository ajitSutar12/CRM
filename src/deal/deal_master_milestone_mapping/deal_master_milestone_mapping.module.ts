import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { deal_master_milestone_mapping } from 'src/Entity/deal_master_milestone_mapping';
import { DealMasterMilestoneMappingController } from './deal_master_milestone_mapping.controller';
import { DealMasterMilestoneMappingService } from './deal_master_milestone_mapping.service';

@Module({
  imports:[TypeOrmModule.forFeature([deal_master_milestone_mapping])],
  controllers: [DealMasterMilestoneMappingController],
  providers: [DealMasterMilestoneMappingService]
})
export class DealMasterMilestoneMappingModule {}
