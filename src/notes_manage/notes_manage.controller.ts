import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { notes_manage } from 'src/Entity/notes_manage.entity';
import { NotesManageService } from './notes_manage.service';

@ApiTags('notes-manage')
@Controller('notes-manage')
export class NotesManageController {
    constructor(private readonly NotesManageService: NotesManageService) {}

    //------------------Insert record in contact_email_mapping------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
                schema:{
                    type: 'object',
                    properties:{
                        notes_subject:{type: 'string'},
                        notes_content:{type: 'string'},
                        contact_id:{type: 'number'},
                        created_by:{type: 'number'},
                        created_timestamp : {type : 'string'},
                        updated_by:{type: 'number'},
                        updated_timestamp: {type : 'string'}
                    }
                }
            })
    
    async save(@Body() data:notes_manage){
        return await this.NotesManageService.addNotesManage(data)
    }

    //------------------Finding all records from contact_email_mapping------------------//
    @Get()
    find(){
        return this.NotesManageService.findNotesManage()
    }

    //------------------Finding one record from contact_email_mapping-------------------//
    @Get(':notes_code')
    findOne(@Param('notes_code') notes_code: number){
        return this.NotesManageService.findOneNotesManage(notes_code)
    }

    //------------------Update single record from contact_email_mapping------------------//
    @Put(':notes_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                notes_subject:{type: 'string'},
                notes_content:{type: 'string'},
                contact_id:{type: 'number'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('notes_code') notes_code: number, @Body() data:notes_manage){
        return this.NotesManageService.updateNotesManage(notes_code,data)
    }

    //------------------Delete single record from contact_email_mapping------------------//
    @Put('delete/:notes_code')
    delete(@Param('notes_code') notes_code: number){
        return this.NotesManageService.deleteNotesManage(notes_code)
    }
}
