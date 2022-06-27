import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact_document_master } from 'src/Entity/contact_document_master.entity';
import { ContactDocumentMasterController } from './contact_document_master.controller';
import { ContactDocumentMasterService } from './contact_document_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([contact_document_master])],
  controllers: [ContactDocumentMasterController],
  providers: [ContactDocumentMasterService]
})
export class ContactDocumentMasterModule {}
