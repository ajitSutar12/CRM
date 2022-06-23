import { Module } from '@nestjs/common';
import { MenuMasterService } from './menu_master.service';
import { MenuMasterController } from './menu_master.controller';
import { menu_master } from 'src/Entity/menu_master.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([menu_master])],
  providers: [MenuMasterService],
  controllers: [MenuMasterController]
})
export class MenuMasterModule {}
