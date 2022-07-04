import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { financial_year } from 'src/Entity/financial_year.entity';
import { FinancialYearService } from './financial_year.service'

@ApiTags('financial-year')
@Controller('financial-year')
export class FinancialYearController {
    constructor(private readonly FinancialYearService: FinancialYearService) {}

    //------------------Insert record in financial_year------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
                schema:{
                    type: 'object',
                    properties:{
                        fy:{type: 'string'},
                        fy_start_month:{type: 'string'},
                        fy_end_month:{type: 'string'},
                        fy_status:{type: 'number'},
                        created_by:{type: 'number'},
                        created_timestamp : {type : 'string'},
                        updated_by:{type: 'number'},
                        updated_timestamp: {type : 'string'}
                    }
                }
            })
    
    async save(@Body() data:financial_year){
        return await this.FinancialYearService.addFinancialYear(data)
    }

    //------------------Finding all records from financial_year------------------//
    @Get()
    find(){
        return this.FinancialYearService.findAllFinancialYear()
    }

    //------------------Finding one record from financial_year-------------------//
    @Get(':fy_code')
    findOne(@Param('fy_code') fy_code: number){
        return this.FinancialYearService.findOneFinancialYear(fy_code)
    }

    //------------------Update single record from financial_year------------------//
    @Put(':fy_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                fy:{type: 'string'},
                fy_start_month:{type: 'string'},
                fy_end_month:{type: 'string'},
                fy_status:{type: 'number'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('fy_code') fy_code: number, @Body() data:financial_year){
        return this.FinancialYearService.updateFinancialYear(fy_code,data)
    }

    //------------------Delete single record from financial_year------------------//
    @Put('delete/:fy_code')
    delete(@Param('fy_code') fy_code: number){
        return this.FinancialYearService.deleteFinancialYear(fy_code)
    }
}
