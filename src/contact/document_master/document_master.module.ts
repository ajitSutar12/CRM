import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { document_master } from 'src/Entity/document_master.entity';
import { DocumentMasterController } from './document_master.controller';
import { DocumentMasterService } from './document_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([document_master])],
  controllers: [DocumentMasterController],
  providers: [DocumentMasterService]
})
export class DocumentMasterModule {}
