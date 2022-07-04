import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { document_master } from 'src/Entity/document_master.entity';
import { DocumentMasterService } from './document_master.service'

@ApiTags('document-master')
@Controller('document-master')
export class DocumentMasterController {
    constructor(private readonly DocumentMasterService: DocumentMasterService) {}

    //------------------Insert record in document_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                d_name:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data: document_master){
        return await this.DocumentMasterService.addDocumentMaster(data)
    }

    //------------------Finding all records from document_master------------------//
    @Get()
    find(){
        return this.DocumentMasterService.findAllDocumentMaster()
    }

    //------------------Finding one record from document_master-------------------//
    @Get(':dm_code')
    findOne(@Param('dm_code') dm_code: number){
        return this.DocumentMasterService.findOneDocumentMaster(dm_code)
    }

    //------------------Update single record from document_master------------------//
    @Put(':dm_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                d_name:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('dm_code') dm_code: number, @Body() data: document_master){
        return this.DocumentMasterService.updateDocumentMaster(dm_code,data)
    }

    //------------------Delete single record from document_master------------------//
    @Put('delete/:dm_code')
    delete(@Param('dm_code') dm_code: number){
        return this.DocumentMasterService.deleteDocumentMaster(dm_code)
    }
}