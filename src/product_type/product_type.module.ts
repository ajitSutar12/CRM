import { Module } from '@nestjs/common';
import { ProductTypeService } from './product_type.service';
import { ProductTypeController } from './product_type.controller';
import { product_type } from 'src/Entity/product_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ TypeOrmModule.forFeature([product_type])],
  providers: [ProductTypeService],
  controllers: [ProductTypeController]
})
export class ProductTypeModule {}
