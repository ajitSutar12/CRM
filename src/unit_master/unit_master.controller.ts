import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UnitMasterService } from './unit_master.service';

@ApiTags('UnitMaster')
@Controller('unit-master')
export class UnitMasterController {
        constructor(private readonly unitMasterService:UnitMasterService){}
    
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    u_name:{type:'string'},
                    u_status:{type:'number'},
                }}})
    create(@Body() data){
        return this.unitMasterService.addUnitData(data)
    }
    
    @Get(':u_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('u_code') u_code:Number){
        return this.unitMasterService.getOneUnit(u_code);
    }
    
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.unitMasterService.getAllUnit()
    }
    
    @Put(':u_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{type:'object'}})
    update(@Param('u_code') u_code: number, @Body() data){
        return this.unitMasterService.updateUnitData(u_code,data);
    }
    
    @Delete(':u_code')
    @UsePipes(ValidationPipe)
    delete(@Param('u_code') u_code: number){
        return this.unitMasterService.deleteUnitData(u_code)
    }
    
}
