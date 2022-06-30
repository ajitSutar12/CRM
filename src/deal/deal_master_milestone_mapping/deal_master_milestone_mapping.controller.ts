import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags,ApiBody } from '@nestjs/swagger';
import { deal_master_Milestone_mapping } from 'src/Entity/deal_master_milestoneMapping';
import { DealMasterMilestoneMappingService } from './deal_master_milestone_mapping.service';

@ApiTags('DealMasterMilestoneMapping')
@Controller('deal-master-milestone-mapping')
export class DealMasterMilestoneMappingController {
    constructor(private readonly dealMasterMilestoneMappingService: DealMasterMilestoneMappingService) { }
    
    //-------------------------------------dealMasterMilestoneMapping add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                deal_id: { type: 'number' },
                deal_milestone_id: { type: 'number' },
                deal_lost_comment: { type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    create(@Body() data: deal_master_Milestone_mapping) {
        return this.dealMasterMilestoneMappingService.addDealData(data)
    }

    //-------------------------------find one dealMasterMilestoneMapping using dmmm_id-------------------//
    @Get(':dmmm_id')
    @UsePipes(ValidationPipe)
    findOne(@Param('dmmm_id') dmmm_id: Number) {
        return this.dealMasterMilestoneMappingService.getOneDeal(dmmm_id);
    }

    //-------------------------------find all dealMasterMilestoneMapping data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll() {
        return this.dealMasterMilestoneMappingService.getAllDeal()
    }

    //-------------------------------update dealMasterMilestoneMapping data----------------------------//
    @Put(':dmmm_id')
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                deal_id: { type: 'number' },
                deal_milestone_id: { type: 'number' },
                deal_lost_comment: { type: 'string' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type:'string' },
            }
        }
    })
    update(@Param('dmmm_id') dmmm_id: number, @Body() data: deal_master_Milestone_mapping) {
        return this.dealMasterMilestoneMappingService.updateDealData(dmmm_id, data);
    }

    //-------------------------------delete dealMasterMilestoneMapping data----------------------------//
    @Delete(':dmmm_id')
    @UsePipes(ValidationPipe)
    delete(@Param('dmmm_id') dmmm_id: number) {
        return this.dealMasterMilestoneMappingService.deleteDealData(dmmm_id)
    }
}
