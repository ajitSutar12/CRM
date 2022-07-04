import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { contact_master } from 'src/Entity/contact_master.entity';
import { task_management } from 'src/Entity/task_management.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaskManagementService {
    constructor(
        @InjectRepository(task_management)
        private readonly taskManagement: Repository<task_management>,
        ){}

    //------------------Insert record in contact_master------------------//
    async addTaskManagement(data){
        var result = await this.taskManagement.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from contact_master------------------//
    async findAllTaskManagement(){
        var result = await this.taskManagement.find({where:{status:0}})
        return result
    }

    //------------------Finding one record from contact_master-------------------//
    async findOneTaskManagement(tm_code){
        var result = await this.taskManagement.findOne({where: {tm_code:tm_code}})
        if(!result){
            throw new NotFoundException(`${tm_code} is not exist`)
          }
          if(result.status == 1){
            throw new NotFoundException(`${tm_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from contact_master------------------//
    async updateTaskManagement(tm_code, data){
        var output = await this.taskManagement.findOne({where: {tm_code:tm_code}})
        if(!output){
            throw new NotFoundException(`${tm_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${tm_code}, data not found`);
        }
        var result = await this.taskManagement.update(tm_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from contact_master------------------//
    async deleteTaskManagement(tm_code){
        var output = await this.taskManagement.findOne({where: {tm_code:tm_code}})
        if(!output){
            throw new NotFoundException(`${tm_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${tm_code}, data not found`);
        }
        output.status = 1
        let result = await this.taskManagement.update(tm_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}