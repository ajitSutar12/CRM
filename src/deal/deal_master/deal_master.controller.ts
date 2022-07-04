import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { deal_master } from 'src/Entity/deal_master.entity';
import { DealMasterService } from './deal_master.service';

@ApiTags('DealMaster')
@Controller('deal-master')
export class DealMasterController {
    constructor(private readonly dealMasterService: DealMasterService) { }
    
    //-------------------------------------deal add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                contact_id: { type: 'number' },
                deal_name: { type: 'string' },
                deal_value: { type: 'string' },
                deal_discount_in: { type: 'string' },
                deal_discount_input:{ type: 'string' },
                deal_milestone:{ type: 'number' },
                deal_close_date:{ type: 'string' },
                description:{ type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    create(@Body() data: deal_master) {
        return this.dealMasterService.addDealData(data)
    }

    //-------------------------------find one deal using deal_code-------------------//
    @Get(':deal_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('deal_code') deal_code: Number) {
        return this.dealMasterService.getOneDeal(deal_code);
    }

    //-------------------------------find all deal data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll() {
        return this.dealMasterService.getAllDeal()
    }

    //-------------------------------update deal data----------------------------//
    @Put(':deal_code')
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                contact_id: { type: 'number' },
                deal_name: { type: 'string' },
                deal_value: { type: 'string' },
                deal_discount_in: { type: 'string' },
                deal_discount_input:{ type: 'string' },
                deal_milestone:{ type: 'number' },
                deal_close_date:{ type: 'string' },
                description:{ type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    update(@Param('deal_code') deal_code: number, @Body() data: deal_master) {
        return this.dealMasterService.updateDealData(deal_code, data);
    }

    //-------------------------------delete deal data----------------------------//
    @Put('delete/:deal_code')
    @UsePipes(ValidationPipe)
    delete(@Param('deal_code') deal_code: number) {
        return this.dealMasterService.deleteDealData(deal_code)
    }
}
