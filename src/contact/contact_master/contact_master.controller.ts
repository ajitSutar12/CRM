import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ContactMasterService } from './contact_master.service'

@ApiTags('contact-master')
@Controller('contact-master')
export class ContactMasterController {
    constructor(private readonly ContactMasterService: ContactMasterService) {}

    //------------------Insert record in contact_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                c_first_name:{type: 'string'},
                c_last_name:{type: 'string'},
                c_name:{type: 'string'},
                c_number:{type: 'string'},
                c_email:{type: 'string'},
                c_tags:{type: 'string'},
                c_designation:{type: 'string'},
                c_csc_code:{type: 'number'},
                c_c_address:{type: 'string'},
                c_website:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    
    async save(@Body() data){
        return await this.ContactMasterService.addContactMaster(data)
    }

    //------------------Finding all records from contact_master------------------//
    @Get()
    find(){
        return this.ContactMasterService.findAllContactMaster()
    }

    //------------------Finding one record from contact_master-------------------//
    @Get(':c_code')
    findOne(@Param('c_code') c_code: number){
        return this.ContactMasterService.findOneContactMaster(c_code)
    }

    //------------------Update single record from contact_master------------------//
    @Put(':c_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                c_first_name:{type: 'string'},
                c_last_name:{type: 'string'},
                c_name:{type: 'string'},
                c_number:{type: 'string'},
                c_email:{type: 'string'},
                c_tags:{type: 'string'},
                c_designation:{type: 'string'},
                c_csc_code:{type: 'number'},
                c_c_address:{type: 'string'},
                c_website:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('c_code') c_code: number, @Body() data){
        return this.ContactMasterService.updateContactMaster(c_code,data)
    }

    //------------------Delete single record from contact_master------------------//
    @Delete(':c_code')
    delete(@Param('c_code') c_code: number){
        return this.ContactMasterService.deleteContactMaster(c_code)
    }
}
