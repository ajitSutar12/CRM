import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { event_status_master } from 'src/Entity/event_status_master.entity';
import { EventStatusMasterService } from '../event_status_master/event_status_master.service'

@ApiTags('event-status-master')
@Controller('event-status-master')
export class EventStatusMasterController {
    constructor(private readonly EventStatusMasterService: EventStatusMasterService) {}

    //------------------Insert record in event_status_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_status:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data: event_status_master){
        return await this.EventStatusMasterService.addEventStatusMaster(data)
    }

    //------------------Finding all records from event_status_master------------------//
    @Get()
    find(){
        return this.EventStatusMasterService.findAllEventStatusMaster()
    }

    //------------------Finding one record from event_status_master-------------------//
    @Get(':esm_code')
    findOne(@Param('esm_code') esm_code: number){
        return this.EventStatusMasterService.findOneEventStatusMaster(esm_code)
    }

    //------------------Update single record from event_status_master------------------//
    @Put(':esm_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_status:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('esm_code') esm_code: number, @Body() data: event_status_master){
        return this.EventStatusMasterService.updateEventStatusMaster(esm_code,data)
    }

    //------------------Delete single record from event_status_master------------------//
    @Delete(':esm_code')
    delete(@Param('esm_code') esm_code: number){
        return this.EventStatusMasterService.deleteEventStatusMaster(esm_code)
    }
}
