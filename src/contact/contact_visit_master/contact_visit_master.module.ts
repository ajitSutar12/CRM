import { Module } from '@nestjs/common';
import { ContactVisitMasterService } from './contact_visit_master.service';
import { ContactVisitMasterController } from './contact_visit_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { contact_visit_master } from 'src/Entity/contact_visit_master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([contact_visit_master])],
  providers: [ContactVisitMasterService],
  controllers: [ContactVisitMasterController]
})
export class ContactVisitMasterModule {}
