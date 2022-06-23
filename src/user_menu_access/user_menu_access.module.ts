import { Module } from '@nestjs/common';
import { UserMenuAccessController } from './user_menu_access.controller';
import { UserMenuAccessService } from './user_menu_access.service';

@Module({
  controllers: [UserMenuAccessController],
  providers: [UserMenuAccessService]
})
export class UserMenuAccessModule {}
