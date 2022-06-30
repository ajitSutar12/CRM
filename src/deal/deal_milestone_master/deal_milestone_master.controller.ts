import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { deal_milestone_master } from 'src/Entity/deal_milestone_master';
import { DealMilestoneMasterService } from './deal_milestone_master.service';

@ApiTags('DealMilestoneMaster')
@Controller('deal-milestone-master')
export class DealMilestoneMasterController {
    constructor(private readonly dealMilestoneMasterService: DealMilestoneMasterService) { }
    
    //-------------------------------------dealMilestoneMaster add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type:'object',
            properties: {
                deal_milestone: { type: 'string' },
            }
        }
    })
<<<<<<< Updated upstream
    create(@Body() data:deal_milestone_master) {
=======
    create(@Body() data: deal_milestone_master) {
>>>>>>> Stashed changes
        return this.dealMilestoneMasterService.addDealData(data)
    }

    //-------------------------------find one dealMilestoneMaster using dm_code-------------------//
    @Get(':dm_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('dm_code') dm_code: Number) {
        return this.dealMilestoneMasterService.getOneDeal(dm_code);
    }

    //-------------------------------find all dealMilestoneMaster data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.dealMilestoneMasterService.getAllDeal()
    }

    //-------------------------------update dealMilestoneMaster data----------------------------//
    @Put(':dm_code')
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                deal_milestone: { type: 'string' }
            }
        }
    })
    update(@Param('dm_code') dm_code: number, @Body() data: deal_milestone_master) {
        return this.dealMilestoneMasterService.updateDealData(dm_code, data);
    }

    //-------------------------------delete dealMilestoneMaster data----------------------------//
    @Delete(':dm_code')
    @UsePipes(ValidationPipe)
    delete(@Param('dm_code') dm_code: number) {
        return this.dealMilestoneMasterService.deleteDealData(dm_code)
    }
}
