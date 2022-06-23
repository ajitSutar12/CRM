import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { TaxMasterService } from './tax_master.service';

@ApiTags('TaxMaster')
@Controller('tax-master')
export class TaxMasterController {
    constructor(private readonly taxMasterService:TaxMasterService){}

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
    create(@Body() data){
        return this.taxMasterService.addTaxData(data)
    }
    
    @Get(':t_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('role_code') role_code:Number){
        return this.taxMasterService.getOneTax(role_code);
    }
    
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.taxMasterService.getAllTaxData()
    }
    
    @Put(':t_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{type:'object'}})
    update(@Param('role_code') role_code: number, @Body() data){
        return this.taxMasterService.updateTaxData(role_code,data);
    }
    
    @Delete(':t_code')
    @UsePipes(ValidationPipe)
    delete(@Param('role_code') role_code: number){
        return this.taxMasterService.deleteTaxData(role_code)
    }
}
