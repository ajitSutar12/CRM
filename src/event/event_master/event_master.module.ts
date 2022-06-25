import { Module } from '@nestjs/common';
import { EventMasterService } from './event_master.service';
import { EventMasterController } from './event_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { event_master } from 'src/Entity/event_master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([event_master])],
  providers: [EventMasterService],
  controllers: [EventMasterController]
})
export class EventMasterModule {}
