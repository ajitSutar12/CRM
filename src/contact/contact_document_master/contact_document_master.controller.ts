import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { contact_document_master } from 'src/Entity/contact_document_master.entity';
import { ContactDocumentMasterService } from './contact_document_master.service';

@ApiTags('contact-document-master')
@Controller('contact-document-master')
export class ContactDocumentMasterController {
    constructor(private readonly ContactDocumentMasterService:ContactDocumentMasterService){}

    //-------------------------------------insert into contact_document_master---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ 
        schema:{
            type:'object',
            properties:{
                c_id:{type:'number'},
                d_id:{type:'number'},
                deal_id:{type:'number'},
                attachment:{type:'string'},
                created_by:{type:'number'},
                created_timestamp:{type:'string'},
                updated_by:{type:'number'},
                updated_timestamp:{type:'string'}
            }
        }
    })
    create(@Body() data: contact_document_master){
        return this.ContactDocumentMasterService.addContactDocumentMaster(data)
    }

    //-------------------------------find one contact_document_master-------------------//
    @Get(':cdm_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('cdm_code') cdm_code:Number){
        return this.ContactDocumentMasterService.getOneContactDocumentMaster(cdm_code);
    }

    //-------------------------------find all contact_document_master----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.ContactDocumentMasterService.getAllContactDocumentMaster()
    }

    //-------------------------------update into contact_document_master----------------------------//
    @Put(':cdm_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ 
        schema:{
            type:'object',
            properties:{
                c_id:{type:'number'},
                d_id:{type:'number'},
                deal_id:{type:'number'},
                attachment:{type:'string'},
                created_by:{type:'number'},
                created_timestamp:{type:'string'},
                updated_by:{type:'number'},
                updated_timestamp:{type:'string'}
            }
        }
    })
    update(@Param('cdm_code') cdm_code: number, @Body() data : contact_document_master){
        return this.ContactDocumentMasterService.updateContactDocumentMaster(cdm_code,data);
    }

    //------------------------------delete from contact_document_master-------------------------------//
    @Put('delete/:cdm_code')
    @UsePipes(ValidationPipe)
    delete(@Param('cdm_code') cdm_code: number){
        return this.ContactDocumentMasterService.deleteContactDocumentMaster(cdm_code)
    }
}