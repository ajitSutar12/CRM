import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { event_status_master } from 'src/Entity/event_status_master.entity';
import { EventStatusMasterController } from './event_status_master.controller';
import { EventStatusMasterService } from './event_status_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([event_status_master])],
  controllers: [EventStatusMasterController],
  providers: [EventStatusMasterService]
})
export class EventStatusMasterModule {}
