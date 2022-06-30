import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { contact_campaign_mapping } from 'src/Entity/contact_campaign_mapping.entity';
import { ContactCampaignMappingService } from './contact_campaign_mapping.service';

@ApiTags('contact-campaign-mapping')
@Controller('contact-campaign-mapping')
export class ContactCampaignMappingController {
    constructor(private readonly ContactCampaignMappingService:ContactCampaignMappingService){}

    //-------------------------------------insert into contact_campaign_mapping---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    c_id:{type:'number'},
                    camp_id:{type:'number'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'}
                }}})
    create(@Body() data: contact_campaign_mapping){
        return this.ContactCampaignMappingService.addContactCampaignMapping(data)
    }

    //-------------------------------find one contact_campaign_mapping-------------------//
    @Get(':ccm_id')
    @UsePipes(ValidationPipe)
    findOne(@Param('ccm_id') ccm_id:Number){
        return this.ContactCampaignMappingService.getOneContactCampaignMapping(ccm_id);
    }

    //-------------------------------find all contact_campaign_mapping----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.ContactCampaignMappingService.getAllContactCampaignMapping()
    }

    //-------------------------------update into contact_campaign_mapping----------------------------//
    @Put(':ccm_id')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            c_id:{type:'number'},
            camp_id:{type:'number'},
            created_by:{type:'number'},
            created_timestamp:{type:'string'},
            updated_by:{type:'number'},
            updated_timestamp:{type:'string'}
        }}})
    update(@Param('ccm_id') ccm_id: number, @Body() data:contact_campaign_mapping){
        return this.ContactCampaignMappingService.updateContactCampaignMapping(ccm_id,data);
    }

    //------------------------------delete from contact_campaign_mapping-------------------------------//
    @Delete(':ccm_id')
    @UsePipes(ValidationPipe)
    delete(@Param('ccm_id') ccm_id: number){
        return this.ContactCampaignMappingService.deleteContactCampaignMapping(ccm_id)
    }
}