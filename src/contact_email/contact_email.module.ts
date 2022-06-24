import { Module } from '@nestjs/common';
import { ContactEmailMappingModule } from './contact_email_mapping/contact_email_mapping.module';
import { ContactEmailMappingAttachmentModule } from './contact_email_mapping_attachment/contact_email_mapping_attachment.module';

@Module({
  imports: [ContactEmailMappingModule, ContactEmailMappingAttachmentModule]
})
export class ContactEmailModule {}
