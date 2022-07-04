import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { contact_visit_master } from 'src/Entity/contact_visit_master.entity';
import { ContactVisitMasterService } from './contact_visit_master.service'

@ApiTags('contact-visit-master')
@Controller('contact-visit-master')
export class ContactVisitMasterController {
    constructor(private readonly ContactVisitMasterService: ContactVisitMasterService) {}

    //------------------Insert record in contact_visit_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                c_code:{type: 'number'},
                v_datetime:{type: 'string'},
                v_purpose:{type: 'string'},
                v_description:{type: 'string'},
                v_type:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    
    async save(@Body() data: contact_visit_master){
        return await this.ContactVisitMasterService.addContactVisitMaster(data)
    }

    //------------------Finding all records from contact_visit_master------------------//
    @Get()
    find(){
        return this.ContactVisitMasterService.findContactVisitMaster()
    }

    //------------------Finding one record from contact_visit_master-------------------//
    @Get(':cv_code')
    findOne(@Param('cv_code') cv_code: number){
        return this.ContactVisitMasterService.findOneContactVisitMaster(cv_code)
    }

    //------------------Update single record from contact_visit_master------------------//
    @Put(':cv_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                c_code:{type: 'number'},
                v_datetime:{type: 'string'},
                v_purpose:{type: 'string'},
                v_description:{type: 'string'},
                v_type:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('cv_code') cv_code: number, @Body() data:contact_visit_master){
        return this.ContactVisitMasterService.updateContactVisitMaster(cv_code,data)
    }

    //------------------Delete single record from contact_visit_master------------------//
    @Put('delete/:cv_code')
    delete(@Param('cv_code') cv_code: number){
        return this.ContactVisitMasterService.deleteContactVisitMaster(cv_code)
    }
}