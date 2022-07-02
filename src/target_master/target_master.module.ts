import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { target_master } from 'src/Entity/target_master.entity';
import { TargetMasterController } from './target_master.controller';
import { TargetMasterService } from './target_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([target_master])],
  controllers: [TargetMasterController],
  providers: [TargetMasterService]
})
export class TargetMasterModule {}
