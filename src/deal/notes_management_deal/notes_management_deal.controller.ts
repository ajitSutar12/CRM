import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { NotesManagementDealService } from './notes_management_deal.service';

@ApiTags('NotesManagementDeal')
@Controller('notes-management-deal')
export class NotesManagementDealController {
    constructor(private readonly notesManagementDealService: NotesManagementDealService) { }
    
    //-------------------------------------notesManagementDeal add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                notes_subject:{ type: 'string' },
                note_content:{ type: 'string' },
                contact_id: { type: 'number' },
                deal_id: { type: 'number' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    create(@Body() data) {
        return this.notesManagementDealService.addNotesManagementDealData(data)
    }

    //-------------------------------find one notesManagementDeal using notes_code-------------------//
    @Get(':notes_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('notes_code') notes_code: Number) {
        return this.notesManagementDealService.getOneNotesManagementDeal(notes_code);
    }

    //-------------------------------find all notesManagementDeal data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll() {
        return this.notesManagementDealService.getAllNotesManagementDeal()
    }

    //-------------------------------update notesManagementDeal data----------------------------//
    @Put(':notes_code')
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                notes_subject:{ type: 'string' },
                note_content:{ type: 'string' },
                contact_id: { type: 'number' },
                deal_id: { type: 'number' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    update(@Param('notes_code') notes_code: number, @Body() data) {
        return this.notesManagementDealService.updateNotesManagementDealData(notes_code, data);
    }

    //-------------------------------delete notesManagementDeal data----------------------------//
    @Delete(':notes_code')
    @UsePipes(ValidationPipe)
    delete(@Param('notes_code') notes_code: number) {
        return this.notesManagementDealService.deleteNotesManagementDealData(notes_code)
    }
}
