import { Module } from '@nestjs/common';
import { CallStatusMasterModule } from './call_status_master/call_status_master.module';

@Module({
  imports: [CallStatusMasterModule]
})
export class CallModule {}
