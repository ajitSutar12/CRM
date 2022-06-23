import { Module } from '@nestjs/common';
import { UserMasterService } from './user_master.service';
import { UserMasterController } from './user_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user_master } from 'src/Entity/user_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([user_master])],
  providers: [UserMasterService],
  controllers: [UserMasterController]
})
export class UserMasterModule {}
