import { Module } from '@nestjs/common';
import { CallStatusMasterService } from './call_status_master.service';
import { CallStatusMasterController } from './call_status_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { call_status_master } from 'src/Entity/call_status_master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([call_status_master])],
  providers: [CallStatusMasterService],
  controllers: [CallStatusMasterController]
})
export class CallStatusMasterModule {}
