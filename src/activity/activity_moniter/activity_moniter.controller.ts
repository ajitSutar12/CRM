import { Body, Controller, Delete, Get, Param, Post, Put, Request, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { activity_moniter } from 'src/Entity/activity_moniter.entity';
import { ActivityMoniterService } from './activity_moniter.service';

@ApiTags('activity-moniter')
@Controller('activity-moniter')
export class ActivityMoniterController {
    constructor(private readonly ActivityMoniterService: ActivityMoniterService) {}

    //------------------Insert record in activity_moniter------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                activity:{type: 'string'},
                t_id:{type: 'number'},
                created_by:{type: 'number'},
                created_timestamp: {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    
    async save(@Body() data: activity_moniter){
        return await this.ActivityMoniterService.addAcitvityMoniter(data)
    }

    //------------------Finding all records from activity_moniter------------------//
    @Get()
    find(){
        return this.ActivityMoniterService.findAllAcitvityMoniter()
    }

    //------------------Finding one record from activity_moniter-------------------//
    @Get(':am_code')
    findOne(@Param('am_code') am_code: number){
        return this.ActivityMoniterService.findOneAcitvityMoniter(am_code)
    }

    //------------------Update single record from activity_moniter------------------//
    @Put(':am_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                activity:{type: 'string'},
                t_id:{type: 'number'},
                created_by:{type: 'number'},
                created_timestamp: {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('am_code') am_code: number, @Body() data:activity_moniter){
        return this.ActivityMoniterService.updateAcitvityMoniter(am_code,data)
    }

    //------------------Delete single record from activity_moniter------------------//
    @Delete(':am_code')
    delete(@Param('am_code') am_code: number){
        return this.ActivityMoniterService.deleteAcitvityMoniter(am_code)
    }
}
