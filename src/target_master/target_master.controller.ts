import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { target_master } from 'src/Entity/target_master.entity';
import { TargetMasterService } from './target_master.service';

@ApiTags('TargetMaster')
@Controller('target-master')
export class TargetMasterController {
    constructor(private readonly targetMasterService:TargetMasterService){}

    //-------------------------------------target data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    t_sdate:{type:'string'},
                    t_edate:{type:'string'},
                    t_user_id:{type:'number'},
                    t_product_id:{type:'number'},
                    t_numbers:{type:'number'},
                    t_e_amount:{type:'string'},
                    t_status:{type:'string'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'},
                }}})
    create(@Body() data:target_master){
        return this.targetMasterService.addTargetData(data)
    }

    //-------------------------------find one target using user_code-------------------//
    @Get(':tm_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('tm_code') tm_code:Number){
        return this.targetMasterService.getOneTarget(tm_code);
    }

    //-------------------------------find all target data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.targetMasterService.getAllTarget()
    }

    //-------------------------------update target data----------------------------//
    @Put(':tm_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            t_sdate:{type:'string'},
            t_edate:{type:'string'},
            t_user_id:{type:'number'},
            t_product_id:{type:'number'},
            t_numbers:{type:'number'},
            t_e_amount:{type:'string'},
            t_status:{type:'string'},
            created_by:{type:'number'},
            created_timestamp:{type:'string'},
            updated_by:{type:'number'},
            updated_timestamp:{type:'string'},
        }}})
    update(@Param('tm_code') tm_code: number, @Body() data:target_master){
        return this.targetMasterService.updateTargetData(tm_code,data);
    }

    //------------------------------delete target data-------------------------------//
    @Delete(':tm_code')
    @UsePipes(ValidationPipe)
    delete(@Param('tm_code') tm_code: number){
        return this.targetMasterService.deleteTargetData(tm_code)
    }

}
