import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { task_category } from 'src/Entity/task_category.entity';
import { TaskCategoryService } from '../task_category/task_category.service'

@ApiTags('TaskCategory')
@Controller('task-category')
export class TaskCategoryController {
    constructor(private readonly TaskCategoryService: TaskCategoryService) {}

    //------------------Insert record in task_category------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                task_category:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data:task_category){
        return await this.TaskCategoryService.addTaskCategory(data)
    }

    //------------------Finding all records from task_categoryr------------------//
    @Get()
    find(){
        return this.TaskCategoryService.findAllTaskCategory()
    }

    //------------------Finding one record from task_category-------------------//
    @Get(':tc_code')
    findOne(@Param('tc_code') tc_code: number){
        return this.TaskCategoryService.findOneTaskCategory(tc_code)
    }

    //------------------Update single record from task_category------------------//
    @Put(':tc_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                task_category:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('tc_code') tc_code: number, @Body() data:task_category){
        return this.TaskCategoryService.updateTaskCategory(tc_code,data)
    }

    //------------------Delete single record from task_category------------------//
    @Put('delete/:tc_code')
    delete(@Param('tc_code') tc_code: number){
        return this.TaskCategoryService.deleteTaskCategory(tc_code)
    }
}