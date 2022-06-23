import { Module } from '@nestjs/common';
import { ProductRateMasterService } from './product_rate_master.service';
import { ProductRateMasterController } from './product_rate_master.controller';

@Module({
  providers: [ProductRateMasterService],
  controllers: [ProductRateMasterController]
})
export class ProductRateMasterModule {}
