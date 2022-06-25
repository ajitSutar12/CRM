import { Module } from '@nestjs/common';
import { EventTypeMasterModule } from './event_type_master/event_type_master.module';
import { EventStatusMasterModule } from './event_status_master/event_status_master.module';
import { EventRelatedMasterModule } from './event_related_master/event_related_master.module';
import { EventMasterModule } from './event_master/event_master.module';

@Module({
  imports: [EventTypeMasterModule, EventStatusMasterModule, EventRelatedMasterModule, EventMasterModule]
})
export class EventModule {}
