import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CallStatusMasterService } from '../call_status_master/call_status_master.service'

@ApiTags('call-status-master')
@Controller('call-status-master')
export class CallStatusMasterController {
    constructor(private readonly CallStatusMasterService: CallStatusMasterService) {}

    //------------------Insert record in menu_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                call_status:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data){
        return await this.CallStatusMasterService.addCallStatusMaster(data)
    }

    //------------------Finding all records from menu_master------------------//
    @Get()
    find(){
        return this.CallStatusMasterService.findAllCallStatusMaster()
    }

    //------------------Finding one record from menu_master-------------------//
    @Get(':csm_code')
    findOne(@Param('csm_code') csm_code: number){
        return this.CallStatusMasterService.findOneCallStatusMaster(csm_code)
    }

    //------------------Update single record from menu_master------------------//
    @Put(':csm_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                call_status:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('csm_code') csm_code: number, @Body() data){
        return this.CallStatusMasterService.updateCallStatusMaster(csm_code,data)
    }

    //------------------Delete single record from menu_master------------------//
    @Delete(':csm_code')
    delete(@Param('csm_code') csm_code: number){
        return this.CallStatusMasterService.deleteCallStatusMaster(csm_code)
    }
}