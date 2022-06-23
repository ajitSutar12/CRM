import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { user_menu_access } from 'src/Entity/user_menu_access.entity';
import { UserMenuAccessController } from './user_menu_access.controller';
import { UserMenuAccessService } from './user_menu_access.service';

@Module({
  imports:[TypeOrmModule.forFeature([user_menu_access])],
  controllers: [UserMenuAccessController],
  providers: [UserMenuAccessService]
})
export class UserMenuAccessModule {}
