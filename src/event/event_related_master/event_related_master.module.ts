import { Module } from '@nestjs/common';
import { EventRelatedMasterService } from './event_related_master.service';
import { EventRelatedMasterController } from './event_related_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { event_related_master } from 'src/Entity/event_related_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([event_related_master])],
  providers: [EventRelatedMasterService],
  controllers: [EventRelatedMasterController]
})
export class EventRelatedMasterModule {}
