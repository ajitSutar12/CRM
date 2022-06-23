import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { tax_master } from 'src/Entity/tax_master.entity';
import { TaxMasterController } from './tax_master.controller';
import { TaxMasterService } from './tax_master.service';

@Module({
  imports:[TypeOrmModule.forFeature([tax_master])],
  controllers: [TaxMasterController],
  providers: [TaxMasterService]
})
export class TaxMasterModule {}
