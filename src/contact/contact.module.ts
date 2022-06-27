import { Module } from '@nestjs/common';
import { ContactDocumentMasterModule } from './contact_document_master/contact_document_master.module';
import { ContactMasterModule } from './contact_master/contact_master.module';
import { DocumentMasterModule } from './document_master/document_master.module';

@Module({
  imports: [ContactMasterModule,ContactDocumentMasterModule, DocumentMasterModule]
})
export class ContactModule {}
