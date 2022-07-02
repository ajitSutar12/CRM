import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { contact_email_mapping_attachment } from 'src/Entity/contact_email_mapping_attachment.entity';
import { ContactEmailMappingAttachmentService } from './contact_email_mapping_attachment.service'

@ApiTags('contact-email-mapping-attachment')
@Controller('contact-email-mapping-attachment')
export class ContactEmailMappingAttachmentController {
    constructor(private readonly ContactEmailMappingAttachmentService: ContactEmailMappingAttachmentService) {}

    //------------------Insert record in contact_email_mapping_attachment------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
                schema:{
                    type: 'object',
                    properties:{
                        cei_code:{type: 'number'},
                        attachment_path:{type: 'string'},
                        created_by:{type: 'number'},
                        created_timestamp : {type : 'string'},
                        updated_by:{type: 'number'},
                        updated_timestamp: {type : 'string'}
                    }
                }
            })
    
    async save(@Body() data: contact_email_mapping_attachment){
        return await this.ContactEmailMappingAttachmentService.addContactEmailMappingAttachment(data)
    }

    //------------------Finding all records from contact_email_mapping------------------//
    @Get()
    find(){
        return this.ContactEmailMappingAttachmentService.findContactEmailMappingAttachment()
    }

    //------------------Finding one record from contact_email_mapping-------------------//
    @Get(':cema_code')
    findOne(@Param('cema_code') cema_code: number){
        return this.ContactEmailMappingAttachmentService.findOneContactEmailMappingAttachment(cema_code)
    }

    //------------------Update single record from contact_email_mapping------------------//
    @Put(':cema_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                cei_code:{type: 'number'},
                attachment_path:{type: 'string'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('cema_code') cema_code: number, @Body() data:contact_email_mapping_attachment){
        return this.ContactEmailMappingAttachmentService.updateContactEmailMappingAttachment(cema_code,data)
    }

    //------------------Delete single record from contact_email_mapping------------------//
    @Delete(':cema_code')
    delete(@Param('cema_code') cema_code: number){
        return this.ContactEmailMappingAttachmentService.deleteContactEmailMappingAttachment(cema_code)
    }
}