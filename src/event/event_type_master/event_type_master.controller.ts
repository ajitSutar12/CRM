import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { event_type_master } from 'src/Entity/event_type_master.entity';
import { EventTypeMasterService } from '../event_type_master/event_type_master.service'

@ApiTags('event-type-master')
@Controller('event-type-master')
export class EventTypeMasterController {
    constructor(private readonly EventTypeMasterService: EventTypeMasterService) {}

    //------------------Insert record in event_type_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_type:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data:event_type_master){
        return await this.EventTypeMasterService.addEventTypeMaster(data)
    }

    //------------------Finding all records from event_type_master------------------//
    @Get()
    find(){
        return this.EventTypeMasterService.findAllEventTypeMaster()
    }

    //------------------Finding one record from event_type_master-------------------//
    @Get(':etm_code')
    findOne(@Param('etm_code') etm_code: number){
        return this.EventTypeMasterService.findOneEventTypeMaster(etm_code)
    }

    //------------------Update single record from event_type_master------------------//
    @Put(':etm_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_type:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('etm_code') etm_code: number, @Body() data:event_type_master){
        return this.EventTypeMasterService.updateEventTypeMaster(etm_code,data)
    }

    //------------------Delete single record from event_type_master------------------//
    @Put('delete/:etm_code')
    delete(@Param('etm_code') etm_code: number){
        return this.EventTypeMasterService.deleteEventTypeMaster(etm_code)
    }
}