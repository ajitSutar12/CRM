import { Module } from '@nestjs/common';
import { ProductMasterController } from './product_master.controller';
import { ProductMasterService } from './product_master.service';

@Module({
  controllers: [ProductMasterController],
  providers: [ProductMasterService]
})
export class ProductMasterModule {}
