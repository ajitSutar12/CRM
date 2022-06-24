import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact_email_mapping } from 'src/Entity/contact_email_mapping.entity';
import { ContactEmailMappingController } from './contact_email_mapping.controller';
import { ContactEmailMappingService } from './contact_email_mapping.service';

@Module({
  imports: [ TypeOrmModule.forFeature([contact_email_mapping])],
  controllers: [ContactEmailMappingController],
  providers: [ContactEmailMappingService]
})
export class ContactEmailMappingModule {}
