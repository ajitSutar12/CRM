import { Module } from '@nestjs/common';
import { EventTypeMasterService } from './event_type_master.service';
import { EventTypeMasterController } from './event_type_master.controller';
import { event_type_master } from 'src/Entity/event_type_master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([event_type_master])],
  providers: [EventTypeMasterService],
  controllers: [EventTypeMasterController]
})
export class EventTypeMasterModule {}
