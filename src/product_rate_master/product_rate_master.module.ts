import { Module } from '@nestjs/common';
import { ProductRateMasterService } from './product_rate_master.service';
import { ProductRateMasterController } from './product_rate_master.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product_rate_master } from 'src/Entity/product_rate_master.entity';

@Module({
  imports:[TypeOrmModule.forFeature([product_rate_master])],
  providers: [ProductRateMasterService],
  controllers: [ProductRateMasterController]
})
export class ProductRateMasterModule {}
