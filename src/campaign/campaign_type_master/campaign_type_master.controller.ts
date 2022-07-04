import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { campaign_type_master } from 'src/Entity/campaign_type_master.entity';
import { CampaignTypeMasterService } from '../campaign_type_master/campaign_type_master.service'

@ApiTags('campaign-type-master')
@Controller('campaign-type-master')
export class CampaignTypeMasterController {
    constructor(private readonly CampaignTypeMasterService: CampaignTypeMasterService) {}

    //------------------Insert record in campaign_type_master------------------//
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
    
    async save(@Body() data: campaign_type_master){
        return await this.CampaignTypeMasterService.addCampaignTypeMaster(data)
    }

    //------------------Finding all records from campaign_type_master------------------//
    @Get()
    find(){
        return this.CampaignTypeMasterService.findAllCampaignTypeMaster()
    }

    //------------------Finding one record from campaign_type_master-------------------//
    @Get(':ct_code')
    findOne(@Param('ct_code') ct_code: number){
        return this.CampaignTypeMasterService.findOneCampaignTypeMaster(ct_code)
    }

    //------------------Update single record from campaign_type_master------------------//
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
    update(@Param('ct_code') ct_code: number, @Body() data: campaign_type_master){
        return this.CampaignTypeMasterService.updateCampaignTypeMaster(ct_code,data)
    }

    //------------------Delete single record from campaign_type_master------------------//
    @Put('delete/:ct_code')
    delete(@Param('ct_code') ct_code: number){
        return this.CampaignTypeMasterService.deleteCampaignTypeMaster(ct_code)
    }
}