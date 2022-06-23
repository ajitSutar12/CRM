import { Module } from '@nestjs/common';
import { UnitMasterService } from './unit_master.service';
import { UnitMasterController } from './unit_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { unit_master } from 'src/Entity/unit_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([unit_master])],
  providers: [UnitMasterService],
  controllers: [UnitMasterController]
})
export class UnitMasterModule {}
