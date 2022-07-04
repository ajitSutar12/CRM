import { Module } from '@nestjs/common';
import { ActivityMoniterService } from './activity_moniter.service';
import { ActivityMoniterController } from './activity_moniter.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { activity_moniter } from 'src/Entity/activity_moniter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([activity_moniter])],
  providers: [ActivityMoniterService],
  controllers: [ActivityMoniterController]
})
export class ActivityMoniterModule {}
