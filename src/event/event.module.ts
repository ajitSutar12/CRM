import { Module } from '@nestjs/common';
import { EventTypeMasterModule } from './event_type_master/event_type_master.module';

@Module({
  imports: [EventTypeMasterModule]
})
export class EventModule {}
