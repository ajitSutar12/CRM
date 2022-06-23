import { Module } from '@nestjs/common';
import { ContactMasterService } from './contact_master.service';
import { ContactMasterController } from './contact_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact_master } from 'src/Entity/contact_master.entity';

@Module({
  imports: [ TypeOrmModule.forFeature([contact_master])],
  providers: [ContactMasterService],
  controllers: [ContactMasterController]
})
export class ContactMasterModule {}
