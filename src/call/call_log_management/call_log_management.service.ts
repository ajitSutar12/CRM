import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { call_log_management } from 'src/Entity/call_log_management.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CallLogManagementService {
    constructor(
        @InjectRepository(call_log_management)
        private readonly callLogManagement: Repository<call_log_management>,
        ){}

    //------------------Insert record in call_log_management------------------//
    async addCallLogManagement(data){
        var result = await this.callLogManagement.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from call_log_management------------------//
    async findAllCallLogManagement(){
        var result = await this.callLogManagement.createQueryBuilder("call_log_management")
                        .innerJoinAndSelect("call_log_management.call_status_master","csm")
                        .getMany()
        return result
    }

    //------------------Finding one record from call_log_management-------------------//
    async findOneCallLogManagement(clm_code){
        var result = await this.callLogManagement.findOne({where: {clm_code:clm_code}, relations:['call_status_master']})
        if(!result){
            throw new NotFoundException(`${clm_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from call_log_management------------------//
    async updateCallLogManagement(clm_code, data){
        var output = await this.callLogManagement.findOne({where: {clm_code:clm_code}})
        if(!output){
            throw new NotFoundException(`${clm_code} is not exist`)
        }
        var result = await this.callLogManagement.update(clm_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from call_log_management------------------//
    async deleteCallLogManagement(clm_code){
        var output = await this.callLogManagement.findOne({where: {clm_code:clm_code}})
        if(!output){
            throw new NotFoundException(`${clm_code} is not exist`)
        }
        var result = await this.callLogManagement.delete(clm_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}