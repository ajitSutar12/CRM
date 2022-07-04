import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { tax_master } from 'src/Entity/tax_master.entity';
import { TaxMasterService } from './tax_master.service';

@ApiTags('TaxMaster')
@Controller('tax-master')
export class TaxMasterController {
    constructor(private readonly taxMasterService:TaxMasterService){}

    //-------------------------------------Tax data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    t_name:{type:'string'},
                    t_status:{type:'number'},
                    t_percentage:{type:'string'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'},
                }}})
    create(@Body() data:tax_master){
        return this.taxMasterService.addTaxData(data)
    }
    
    //-------------------------------find one Tax data using t_code-------------------//
    @Get(':t_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('role_code') role_code:Number){
        return this.taxMasterService.getOneTax(role_code);
    }
    
    //-------------------------------find all Tax data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.taxMasterService.getAllTaxData()
    }
    
    //-------------------------------update userRole data----------------------------//
    @Put(':t_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            t_name:{type:'string'},
            t_status:{type:'number'},
            t_percentage:{type:'string'},
            created_by:{type:'number'},
            created_timestamp:{type:'string'},
            updated_by:{type:'number'},
            updated_timestamp:{type:'string'},
        }}})
    update(@Param('t_code') t_code: number, @Body() data:tax_master){
        return this.taxMasterService.updateTaxData(t_code,data);
    }
    
    //------------------------------delete Tax data-------------------------------//
    @Put('delete/:t_code')
    @UsePipes(ValidationPipe)
    delete(@Param('role_code') role_code: number){
        return this.taxMasterService.deleteTaxData(role_code)
    }
}
