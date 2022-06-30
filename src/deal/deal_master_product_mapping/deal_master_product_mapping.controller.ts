import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { deal_master_product_mapping } from 'src/Entity/deal_master_product_mapping';
import { DealMasterProductMappingService } from './deal_master_product_mapping.service';

@ApiTags('DealMasterProductMapping')
@Controller('deal-master-product-mapping')
export class DealMasterProductMappingController {
    constructor(private readonly dealMasterProductMappingService: DealMasterProductMappingService) { }
    
    //-------------------------------------dealMasterProductMapping add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                deal_id: { type: 'number' },
                product_code: { type: 'number' },
                product_qty:{ type: 'number' },
                product_rate: { type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    create(@Body() data: deal_master_product_mapping) {
        return this.dealMasterProductMappingService.addDealData(data)
    }

    //-------------------------------find one dealMasterProductMapping using dmpm_code-------------------//
    @Get(':dmpm_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('dmpm_code') dmpm_code: Number) {
        return this.dealMasterProductMappingService.getOneDeal(dmpm_code);
    }

    //-------------------------------find all dealMasterProductMapping data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll() {
        return this.dealMasterProductMappingService.getAllDeal()
    }

    //-------------------------------update dealMasterProductMapping data----------------------------//
    @Put(':dmpm_code')
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                deal_id: { type: 'number' },
                product_code: { type: 'number' },
                product_qty:{ type: 'number' },
                product_rate: { type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    update(@Param('dmpm_code') dmpm_code: number, @Body() data: deal_master_product_mapping) {
        return this.dealMasterProductMappingService.updateDealData(dmpm_code, data);
    }

    //-------------------------------delete dealMasterProductMapping data----------------------------//
    @Delete(':dmpm_code')
    @UsePipes(ValidationPipe)
    delete(@Param('dmpm_code') dmpm_code: number) {
        return this.dealMasterProductMappingService.deleteDealData(dmpm_code)
    }
}
