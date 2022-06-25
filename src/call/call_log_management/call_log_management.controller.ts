import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CallLogManagementService } from '../call_log_management/call_log_management.service'

@ApiTags('call-log-master')
@Controller('call-log-master')
export class CallLogManagementController {
    constructor(private readonly CallLogManagementService: CallLogManagementService) {}

    //------------------Insert record in contact_master------------------//
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
    
    async save(@Body() data){
        return await this.CallLogManagementService.addCallLogManagement(data)
    }

    //------------------Finding all records from contact_master------------------//
    @Get()
    find(){
        return this.CallLogManagementService.findAllCallLogManagement()
    }

    //------------------Finding one record from contact_master-------------------//
    @Get(':clm_code')
    findOne(@Param('clm_code') clm_code: number){
        return this.CallLogManagementService.findOneCallLogManagement(clm_code)
    }

    //------------------Update single record from contact_master------------------//
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
    update(@Param('clm_code') clm_code: number, @Body() data){
        return this.CallLogManagementService.updateCallLogManagement(clm_code,data)
    }

    //------------------Delete single record from contact_master------------------//
    @Delete(':clm_code')
    delete(@Param('clm_code') clm_code: number){
        return this.CallLogManagementService.deleteCallLogManagement(clm_code)
    }
}