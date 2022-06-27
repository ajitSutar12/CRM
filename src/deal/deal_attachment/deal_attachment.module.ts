import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { deal_attachment } from 'src/Entity/deal_attachment.entity';
import { DealAttachmentController } from './deal_attachment.controller';
import { DealAttachmentService } from './deal_attachment.service';

@Module({
  imports:[TypeOrmModule.forFeature([deal_attachment])],
  controllers: [DealAttachmentController],
  providers: [DealAttachmentService]
})
export class DealAttachmentModule {}
