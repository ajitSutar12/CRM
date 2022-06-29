import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe,Request } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { campaign_master } from 'src/Entity/campaign_master.entity';
import { PaginationDto } from 'src/pagination/pagination.dto';
import { CampaignMasterService } from './campaign_master.service';
import { Pagination } from './campaign_pagination.ts/pagination';

@ApiTags('campaign-master')
@Controller('campaign-master')
export class CampaignMasterController {
    constructor(private readonly CampaignMasterService:CampaignMasterService){}

    //-------------------------------------insert into campaign_master---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    c_t_id:{type:'number'},
                    c_name:{type:'string'},
                    c_status:{type:'string'},
                    c_s_date:{type:'string'},
                    c_e_date:{type:'string'},
                    c_e_r:{type:'string'},
                    b_cost:{type:'string'},
                    a_cost:{type:'string'},
                    e_response:{type:'string'},
                    description:{type:'number'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'}
                }}})
    create(@Body() data){
        return this.CampaignMasterService.addCampaignMaster(data)
    }

    //-------------------------------find one campaign_master-------------------//
    @Get(':cm_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('cm_code') cm_code:Number){
        return this.CampaignMasterService.getOneCampaignMaster(cm_code);
    }

    //-------------------------------find all campaign_master----------------------------//
    @Get()
    async findAll(@Request() request, @Body() dataTableParameters: PaginationDto
    ): Promise<Pagination<campaign_master>> {
        return await this.CampaignMasterService.getAllCampaignMaster({
            limit: request.query.hasOwnProperty('limit') ? request.query.limit : dataTableParameters.length,
            page: request.query.hasOwnProperty('page') ? request.query.page : dataTableParameters.start,
            filterData: dataTableParameters.filterData
        });
    }

    //-------------------------------update into campaign_master----------------------------//
    @Put(':cm_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            c_t_id:{type:'number'},
            c_name:{type:'string'},
            c_status:{type:'string'},
            c_s_date:{type:'string'},
            c_e_date:{type:'string'},
            c_e_r:{type:'string'},
            b_cost:{type:'string'},
            a_cost:{type:'string'},
            e_response:{type:'string'},
            description:{type:'number'},
            created_by:{type:'number'},
            created_timestamp:{type:'string'},
            updated_by:{type:'number'},
            updated_timestamp:{type:'string'}
        }}})
    update(@Param('cm_code') cm_code: number, @Body() data){
        return this.CampaignMasterService.updateCampaignMaster(cm_code,data);
    }

    //------------------------------delete from campaign_master-------------------------------//
    @Delete(':cm_code')
    @UsePipes(ValidationPipe)
    delete(@Param('cm_code') cm_code: number){
        return this.CampaignMasterService.deleteCampaignMaster(cm_code)
    }

    //-------------------------pagination---------------------//
   

}