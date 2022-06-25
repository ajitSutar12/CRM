import { Module } from '@nestjs/common';
import { CallStatusMasterModule } from './call_status_master/call_status_master.module';
import { CallLogManagementModule } from './call_log_management/call_log_management.module';

@Module({
  imports: [CallStatusMasterModule, CallLogManagementModule]
})
export class CallModule {}
