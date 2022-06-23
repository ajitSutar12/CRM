import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product_master } from 'src/Entity/product_master.entity';
import { ProductMasterController } from './product_master.controller';
import { ProductMasterService } from './product_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([product_master])],
  controllers: [ProductMasterController],
  providers: [ProductMasterService]
})
export class ProductMasterModule {}
