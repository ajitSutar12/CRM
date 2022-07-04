import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { event_master } from 'src/Entity/event_master.entity';
import { EventMasterService } from '../event_master/event_master.service'

@ApiTags('event-master')
@Controller('event-master')
export class EventMasterController {
    constructor(private readonly EventMasterService: EventMasterService) {}

    //------------------Insert record in contact_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                etm_code:{type: 'number'},
                event_priority:{type: 'string'},
                event_status_id:{type: 'number'},
                start_date:{type: 'string'},
                start_time:{type: 'string'},
                end_date:{type: 'string'},
                end_time:{type: 'string'},
                email_invitation:{type: 'number'},
                event_rel_id:{type: 'number'},
                event_rel_sub_id:{type: 'number'},
                event_description : {type : 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    
    async save(@Body() data: event_master){
        return await this.EventMasterService.addEventMaster(data)
    }

    //------------------Finding all records from contact_master------------------//
    @Get()
    find(){
        return this.EventMasterService.findAllEventMaster()
    }

    //------------------Finding one record from contact_master-------------------//
    @Get(':event_code')
    findOne(@Param('event_code') event_code: number){
        return this.EventMasterService.findOneEventMaster(event_code)
    }

    //------------------Update single record from contact_master------------------//
    @Put(':event_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                etm_code:{type: 'number'},
                event_priority:{type: 'string'},
                event_status_id:{type: 'number'},
                start_date:{type: 'string'},
                start_time:{type: 'string'},
                end_date:{type: 'string'},
                end_time:{type: 'string'},
                email_invitation:{type: 'number'},
                event_rel_id:{type: 'number'},
                event_rel_sub_id:{type: 'number'},
                event_description : {type : 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('event_code') event_code: number, @Body() data: event_master){
        return this.EventMasterService.updateEventMaster(event_code,data)
    }

    //------------------Delete single record from contact_master------------------//
    @Put('delete/:event_code')
    delete(@Param('event_code') event_code: number){
        return this.EventMasterService.deleteEventMaster(event_code)
    }
}