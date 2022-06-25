import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { task_category } from 'src/Entity/task_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskCategoryService {
    constructor(
        @InjectRepository(task_category)
        private readonly taskCategory: Repository<task_category>,
        ){}

    //------------------Insert record in task_category------------------//
    async addTaskCategory(data){
        var result = await this.taskCategory.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from task_category------------------//
    async findAllTaskCategory(){
        var result = await this.taskCategory.find()
        return result
    }

    //------------------Finding one record from task_category-------------------//
    async findOneTaskCategory(tc_code){
        var result = await this.taskCategory.findOne({where: {tc_code:tc_code}})
        if(!result){
            throw new NotFoundException(`${tc_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from task_category------------------//
    async updateTaskCategory(tc_code, data){
        var output = await this.taskCategory.findOne({where: {tc_code:tc_code}})
        if(!output){
            throw new NotFoundException(`${tc_code} is not exist`)
        }
        var result = await this.taskCategory.update(tc_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from task_category------------------//
    async deleteTaskCategory(tc_code){
        var output = await this.taskCategory.findOne({where: {tc_code:tc_code}})
        if(!output){
            throw new NotFoundException(`${tc_code} is not exist`)
        }
        var result = await this.taskCategory.delete(tc_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}