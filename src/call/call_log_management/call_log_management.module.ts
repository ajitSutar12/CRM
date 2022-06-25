import { Module } from '@nestjs/common';
import { CallLogManagementService } from './call_log_management.service';
import { CallLogManagementController } from './call_log_management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { call_log_management } from 'src/Entity/call_log_management.entity';

@Module({
  imports:[TypeOrmModule.forFeature([call_log_management])],
  providers: [CallLogManagementService],
  controllers: [CallLogManagementController]
})
export class CallLogManagementModule {}
