import { Body, Controller, Delete, Get, Param, Post, Put, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { call_log_management } from 'src/Entity/call_log_management.entity';
import { PaginationDto } from 'src/pagination/pagination.dto';
import { PaginationInterface } from 'src/pagination/pagination.interface';
import { CallLogManagementService } from '../call_log_management/call_log_management.service'
import { Pagination } from './pagination/pagination';

@ApiTags('call-log-management')
@Controller('call-log-management')
export class CallLogManagementController {
    constructor(private readonly CallLogManagementService: CallLogManagementService) {}

    //------------------Insert record in call_log_management------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                call_subject:{type: 'string'},
                phone_number:{type: 'string'},
                call_type:{type: 'string'},
                call_status_id:{type: 'number'},
                call_hour:{type: 'string'},
                call_minute:{type: 'string'},
                call_second:{type: 'string'},
                description:{type: 'string'},
                followup_date:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'},                
                followup_status:{type: 'number'},
                followup_actual_date : {type : 'string'},
                Followup_by: {type:'number'}
            }
        }
    })
    
    async save(@Body() data:call_log_management){
        return await this.CallLogManagementService.addCallLogManagement(data)
    }

    //------------------Finding all records from call_log_management------------------//
    @Get()
    async find(@Request() request, @Body() dataTableParameters: PaginationDto
    ): Promise<Pagination<call_log_management>>{
        return await this.CallLogManagementService.findAllCallLogManagement({
            limit: request.query.hasOwnProperty('limit') ? request.query.limit : dataTableParameters.length,
            page: request.query.hasOwnProperty('page') ? request.query.page : dataTableParameters.start,
            filterData: dataTableParameters.filterData,
        })
    }

    //------------------Finding one record from call_log_management-------------------//
    @Get(':clm_code')
    findOne(@Param('clm_code') clm_code: number){
        return this.CallLogManagementService.findOneCallLogManagement(clm_code)
    }

    //------------------Update single record from call_log_management------------------//
    @Put(':clm_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                call_subject:{type: 'string'},
                phone_number:{type: 'string'},
                call_type:{type: 'string'},
                call_status_id:{type: 'number'},
                call_hour:{type: 'string'},
                call_minute:{type: 'string'},
                call_second:{type: 'string'},
                description:{type: 'string'},
                followup_date:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'},                
                followup_status:{type: 'number'},
                followup_actual_date : {type : 'string'},
                Followup_by: {type:'number'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('clm_code') clm_code: number, @Body() data:call_log_management){
        return this.CallLogManagementService.updateCallLogManagement(clm_code,data)
    }

    //------------------Delete single record from call_log_management------------------//
    @Put('delete/:clm_code')
    delete(@Param('clm_code') clm_code: number){
        return this.CallLogManagementService.deleteCallLogManagement(clm_code)
    }
}