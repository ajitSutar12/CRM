import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CampaignTypeMasterService } from '../campaign_type_master/campaign_type_master.service'

@ApiTags('campaign-type-master')
@Controller('campaign-type-master')
export class CampaignTypeMasterController {
    constructor(private readonly CampaignTypeMasterService: CampaignTypeMasterService) {}

    //------------------Insert record in menu_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                type:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data){
        return await this.CampaignTypeMasterService.addCampaignTypeMaster(data)
    }

    //------------------Finding all records from menu_master------------------//
    @Get()
    find(){
        return this.CampaignTypeMasterService.findAllCampaignTypeMaster()
    }

    //------------------Finding one record from menu_master-------------------//
    @Get(':ct_code')
    findOne(@Param('ct_code') ct_code: number){
        return this.CampaignTypeMasterService.findOneCampaignTypeMaster(ct_code)
    }

    //------------------Update single record from menu_master------------------//
    @Put(':ct_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                type:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('ct_code') ct_code: number, @Body() data){
        return this.CampaignTypeMasterService.updateCampaignTypeMaster(ct_code,data)
    }

    //------------------Delete single record from menu_master------------------//
    @Delete(':ct_code')
    delete(@Param('ct_code') ct_code: number){
        return this.CampaignTypeMasterService.deleteCampaignTypeMaster(ct_code)
    }
}