import { Module } from '@nestjs/common';
import { DealAttachmentController } from './deal_attachment.controller';
import { DealAttachmentService } from './deal_attachment.service';

@Module({
  controllers: [DealAttachmentController],
  providers: [DealAttachmentService]
})
export class DealAttachmentModule {}
