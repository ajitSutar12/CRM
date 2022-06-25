import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { TaskManagementService} from './task_management.service'

@ApiTags('task-management')
@Controller('task-management')
export class TaskManagementController {
    constructor(private readonly TaskManagementService: TaskManagementService) {}

    //------------------Insert record in task_management------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                t_name:{type: 'string'},
                t_c_id:{type: 'number'},
                t_due_date:{type: 'string'},
                t_due_time:{type: 'string'},
                t_priority:{type: 'string'},
                t_status:{type: 'string'},
                deal_code:{type: 'number'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    
    async save(@Body() data){
        return await this.TaskManagementService.addTaskManagement(data)
    }

    //------------------Finding all records from task_management------------------//
    @Get()
    find(){
        return this.TaskManagementService.findAllTaskManagement()
    }

    //------------------Finding one record from task_management-------------------//
    @Get(':tm_code')
    findOne(@Param('tm_code') event_code: number){
        return this.TaskManagementService.findOneTaskManagement(event_code)
    }

    //------------------Update single record from task_management------------------//
    @Put(':tm_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                t_name:{type: 'string'},
                t_c_id:{type: 'number'},
                t_due_date:{type: 'string'},
                t_due_time:{type: 'string'},
                t_priority:{type: 'string'},
                t_status:{type: 'string'},
                deal_code:{type: 'number'},
                created_by:{type: 'number'},
                created_timestamp : {type : 'string'},
                updated_by:{type: 'number'},
                updated_timestamp: {type : 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('tm_code') tm_code: number, @Body() data){
        return this.TaskManagementService.updateTaskManagement(tm_code,data)
    }

    //------------------Delete single record from task_management------------------//
    @Delete(':tm_code')
    delete(@Param('tm_code') tm_code: number){
        return this.TaskManagementService.deleteTaskManagement(tm_code)
    }
}
