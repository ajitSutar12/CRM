import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact_email_mapping_attachment } from 'src/Entity/contact_email_mapping_attachment.entity';
import { ContactEmailMappingAttachmentController } from './contact_email_mapping_attachment.controller';
import { ContactEmailMappingAttachmentService } from './contact_email_mapping_attachment.service';

@Module({
  imports: [ TypeOrmModule.forFeature([contact_email_mapping_attachment])],
  controllers: [ContactEmailMappingAttachmentController],
  providers: [ContactEmailMappingAttachmentService]
})
export class ContactEmailMappingAttachmentModule {}
