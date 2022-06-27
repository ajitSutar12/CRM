import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { notes_management_deal } from 'src/Entity/notes_management_deal';
import { NotesManagementDealController } from './notes_management_deal.controller';
import { NotesManagementDealService } from './notes_management_deal.service';

@Module({
  imports:[TypeOrmModule.forFeature([notes_management_deal])],
  controllers: [NotesManagementDealController],
  providers: [NotesManagementDealService]
})
export class NotesManagementDealModule {}
