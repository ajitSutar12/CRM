import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { task_management } from 'src/Entity/task_management.entity';
import { call_log_management } from 'src/Entity/call_log_management.entity';
import { contact_master } from 'src/Entity/contact_master.entity';
import { deal_master } from 'src/Entity/deal_master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([task_management,call_log_management, contact_master, deal_master])],
  providers: [DashboardService],
  controllers: [DashboardController]
})
export class DashboardModule {}
