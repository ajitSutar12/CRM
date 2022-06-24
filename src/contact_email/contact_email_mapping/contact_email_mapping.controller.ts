import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ContactEmailMappingService } from './contact_email_mapping.service'

@ApiTags('contact-email-mapping')
@Controller('contact-email-mapping')
export class ContactEmailMappingController {
    constructor(private readonly ContactEmailMappingService: ContactEmailMappingService) {}

    //------------------Insert record in contact_email_mapping------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
                schema:{
                    type: 'object',
                    properties:{
                        c_code:{type: 'number'},
                        to_email:{type: 'string'},
                        cc_email:{type: 'string'},
                        bcc_email:{type: 'string'},
                        subject:{type: 'string'},
                        email_content:{type: 'string'},
                        created_by:{type: 'number'},
                        created_timestamp : {type : 'string'},
                        updated_by:{type: 'number'},
                        updated_timestamp: {type : 'string'}
                    }
                }
            })
    
    async save(@Body() data){
        return await this.ContactEmailMappingService.addContactEmailMapping(data)
    }

    //------------------Finding all records from contact_email_mapping------------------//
    @Get()
    find(){
        return this.ContactEmailMappingService.findContactEmailMapping()
    }

    //------------------Finding one record from contact_email_mapping-------------------//
    @Get(':cei_code')
    findOne(@Param('cei_code') cei_code: number){
        return this.ContactEmailMappingService.findOneContactEmailMapping(cei_code)
    }

    //------------------Update single record from contact_email_mapping------------------//
    @Put(':cei_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                c_code:{type: 'number'},
                to_email:{type: 'string'},
                cc_email:{type: 'string'},
                bcc_email:{type: 'string'},
                subject:{type: 'string'},
                email_content:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('cei_code') cei_code: number, @Body() data){
        return this.ContactEmailMappingService.updateContactEmailMapping(cei_code,data)
    }

    //------------------Delete single record from contact_email_mapping------------------//
    @Delete(':cei_code')
    delete(@Param('cei_code') cei_code: number){
        return this.ContactEmailMappingService.deleteContactEmailMapping(cei_code)
    }
}
