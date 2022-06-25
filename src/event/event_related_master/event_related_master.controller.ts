import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { EventRelatedMasterService } from '../event_related_master/event_related_master.service'

@ApiTags('event-related-master')
@Controller('event-related-master')
export class EventRelatedMasterController {
    constructor(private readonly EventRelatedMasterService: EventRelatedMasterService) {}

    //------------------Insert record in event_related_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_relation:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data){
        return await this.EventRelatedMasterService.addEventRelatedMaster(data)
    }

    //------------------Finding all records from event_related_master------------------//
    @Get()
    find(){
        return this.EventRelatedMasterService.findAllEventRelatedMaster()
    }

    //------------------Finding one record from event_related_master-------------------//
    @Get(':erm_code')
    findOne(@Param('erm_code') erm_code: number){
        return this.EventRelatedMasterService.findOneEventRelatedMaster(erm_code)
    }

    //------------------Update single record from event_related_master------------------//
    @Put(':erm_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_relation:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('erm_code') erm_code: number, @Body() data){
        return this.EventRelatedMasterService.updateEventRelatedMaster(erm_code,data)
    }

    //------------------Delete single record from event_related_master------------------//
    @Delete(':erm_code')
    delete(@Param('erm_code') erm_code: number){
        return this.EventRelatedMasterService.deleteEventRelatedMaster(erm_code)
    }
}