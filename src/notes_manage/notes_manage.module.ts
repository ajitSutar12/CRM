import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { notes_manage } from 'src/Entity/notes_manage.entity';
import { NotesManageController } from './notes_manage.controller';
import { NotesManageService } from './notes_manage.service';

@Module({
  imports: [TypeOrmModule.forFeature([notes_manage])],
  controllers: [NotesManageController],
  providers: [NotesManageService]
})
export class NotesManageModule {}
