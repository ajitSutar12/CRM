import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { unit_master } from 'src/Entity/unit_master.entity';
import { UnitMasterService } from './unit_master.service';

@ApiTags('UnitMaster')
@Controller('unit-master')
export class UnitMasterController {
        constructor(private readonly unitMasterService:UnitMasterService){}
    
    //-------------------------------------unit data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    u_name:{type:'string'},
                    u_status:{type:'number'},
                }}})
    create(@Body() data:unit_master){
        return this.unitMasterService.addUnitData(data)
    }
    
    //-------------------------------find one unit using u_code-------------------//
    @Get(':u_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('u_code') u_code:Number){
        return this.unitMasterService.getOneUnit(u_code);
    }
    
    //-------------------------------find all unit data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.unitMasterService.getAllUnit()
    }
    
    //-------------------------------update unit data----------------------------//
    @Put(':u_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            u_name:{type:'string'},
            u_status:{type:'number'},
        }}})
    update(@Param('u_code') u_code: number, @Body() data:unit_master){
        return this.unitMasterService.updateUnitData(u_code,data);
    }
    
    //-------------------------------delete unit data----------------------------//
    @Put('delete/:u_code')
    @UsePipes(ValidationPipe)
    delete(@Param('u_code') u_code: number){
        return this.unitMasterService.deleteUnitData(u_code)
    }
    
}
