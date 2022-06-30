import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags,ApiBody } from '@nestjs/swagger';
import { deal_attachment } from 'src/Entity/deal_attachment.entity';
import { DealAttachmentService } from './deal_attachment.service';

@ApiTags('DealAttachment')
@Controller('deal-attachment')
export class DealAttachmentController {
    constructor(private readonly dealAttachmentService: DealAttachmentService) { }
    
    //-------------------------------------dealAttachment add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                deal_code: { type: 'number' },
                attachment_name: { type: 'string' },
                attachment_path: { type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    create(@Body() data: deal_attachment) {
        return this.dealAttachmentService.addDealData(data)
    }

    //-------------------------------find one dealAttachment using da_code-------------------//
    @Get(':da_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('da_code') da_code: Number) {
        return this.dealAttachmentService.getOneDeal(da_code);
    }

    //-------------------------------find all dealAttachment data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll() {
        return this.dealAttachmentService.getAllDeal()
    }

    //-------------------------------update dealAttachment data----------------------------//
    @Put(':da_code')
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                deal_code: { type: 'number' },
                attachment_name: { type: 'string' },
                attachment_path: { type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    update(@Param('da_code') da_code: number, @Body() data: deal_attachment) {
        return this.dealAttachmentService.updateDealData(da_code, data);
    }

    //-------------------------------delete dealAttachment data----------------------------//
    @Delete(':da_code')
    @UsePipes(ValidationPipe)
    delete(@Param('da_code') da_code: number) {
        return this.dealAttachmentService.deleteDealData(da_code)
    }
}
