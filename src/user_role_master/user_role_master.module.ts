import { Module } from '@nestjs/common';
import { UserRoleMasterService } from './user_role_master.service';
import { UserRoleMasterController } from './user_role_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user_role_master } from 'src/Entity/user_role_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([user_role_master])],
  providers: [UserRoleMasterService],
  controllers: [UserRoleMasterController]
})
export class UserRoleMasterModule {}
