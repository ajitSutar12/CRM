import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { company_master } from 'src/Entity/company_master.entity';
import { CompanyMasterService } from './company_master.service'

@ApiTags('company-master')
@Controller('company-master')
export class CompanyMasterController {
    constructor(private readonly CompanyMasterService: CompanyMasterService) {}

    //------------------Insert record in company_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
                schema:{
                    type: 'object',
                    properties:{
                        company_name:{type: 'string'},
                        company_contact:{type: 'string'},
                        company_email:{type: 'string'},
                        company_address:{type: 'string'},
                        name_format:{type: 'string'},
                        date_format:{type: 'string'},
                        calendar_week:{type: 'string'},
                        created_by:{type: 'number'},
                        created_timestamp : {type : 'string'},
                        updated_by:{type: 'number'},
                        updated_timestamp: {type : 'string'}
                    }
                }
            })
    
    async save(@Body() data: company_master){
        return await this.CompanyMasterService.addCompanyMaster(data)
    }

    //------------------Finding all records from company_master------------------//
    @Get()
    find(){
        return this.CompanyMasterService.findAllCompanyMaster()
    }

    //------------------Finding one record from company_master-------------------//
    @Get(':company_code')
    findOne(@Param('company_code') company_code: number){
        return this.CompanyMasterService.findOneCompanyMaster(company_code)
    }

    //------------------Update single record from company_master------------------//
    @Put(':company_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                company_name:{type: 'string'},
                company_contact:{type: 'string'},
                company_email:{type: 'string'},
                company_address:{type: 'string'},
                name_format:{type: 'string'},
                date_format:{type: 'string'},
                calendar_week:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('company_code') company_code: number, @Body() data:company_master){
        return this.CompanyMasterService.updateCompanyMaster(company_code,data)
    }

    //------------------Delete single record from company_master------------------//
    @Put('delete/:company_code')
    delete(@Param('company_code') company_code: number){
        return this.CompanyMasterService.deleteCompanyMaster(company_code)
    }
}
