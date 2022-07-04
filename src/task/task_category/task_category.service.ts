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
        var result = await this.taskCategory.find({where:{status:0}})
        return result
    }

    //------------------Finding one record from task_category-------------------//
    async findOneTaskCategory(tc_code){
        var result = await this.taskCategory.findOne({where: {tc_code:tc_code}})
        if(!result){
            throw new NotFoundException(`${tc_code} is not exist`)
          }
          if(result.status == 1){
            throw new NotFoundException(`${tc_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from task_category------------------//
    async updateTaskCategory(tc_code, data){
        var output = await this.taskCategory.findOne({where: {tc_code:tc_code}})
        if(!output){
            throw new NotFoundException(`${tc_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${tc_code}, data not found`);
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
        if(output.status == 1){
            throw new NotFoundException(`${tc_code}, data not found`);
        }
        output.status = 1
        let result = await this.taskCategory.update(tc_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}