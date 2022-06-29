import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { task_category } from 'src/Entity/task_category.entity';
import { TaskCategoryService } from '../task_category/task_category.service'

@ApiTags('task-category')
@Controller('task-category')
export class TaskCategoryController {
    constructor(private readonly TaskCategoryService: TaskCategoryService) {}

    //------------------Insert record in event_related_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_relation:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data:task_category){
        return await this.TaskCategoryService.addTaskCategory(data)
    }

    //------------------Finding all records from event_related_master------------------//
    @Get()
    find(){
        return this.TaskCategoryService.findAllTaskCategory()
    }

    //------------------Finding one record from event_related_master-------------------//
    @Get(':tc_code')
    findOne(@Param('tc_code') tc_code: number){
        return this.TaskCategoryService.findOneTaskCategory(tc_code)
    }

    //------------------Update single record from event_related_master------------------//
    @Put(':tc_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                event_relation:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('tc_code') tc_code: number, @Body() data:task_category){
        return this.TaskCategoryService.updateTaskCategory(tc_code,data)
    }

    //------------------Delete single record from event_related_master------------------//
    @Delete(':tc_code')
    delete(@Param('tc_code') tc_code: number){
        return this.TaskCategoryService.deleteTaskCategory(tc_code)
    }
}