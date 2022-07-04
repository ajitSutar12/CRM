import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { call_log_management } from 'src/Entity/call_log_management.entity';
import { PaginationInterface } from 'src/pagination/pagination.interface';
import { ILike, In, Repository } from 'typeorm';
import { Pagination } from './pagination/pagination';

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
    async findAllCallLogManagement(options: PaginationInterface,): Promise<Pagination<call_log_management[]>>{
        var object = {}
        for (var key in options.filterData) {
            object[key] = In(options.filterData[key])
        }
        console.log(object)
        var [data,recordsTotal] = await this.callLogManagement.createQueryBuilder("call_log_management")
                        .innerJoinAndSelect("call_log_management.call_status_master","csm")
                        .take(options.limit)
                        .skip(options.page)
                        .where(object)
                        .andWhere({status:0})
                        .getManyAndCount()
        return new Pagination<call_log_management[]>({
            data,
            recordsTotal,
          });
    }

    //------------------Finding one record from call_log_management-------------------//
    async findOneCallLogManagement(clm_code){
        var result = await this.callLogManagement.findOne({where: {clm_code:clm_code}, relations:['call_status_master']})
        if(!result){
            throw new NotFoundException(`${clm_code} is not exist`)
        }
        if(result.status == 1){
            throw new NotFoundException(`${clm_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from call_log_management------------------//
    async updateCallLogManagement(clm_code, data){
        var output = await this.callLogManagement.findOne({where: {clm_code:clm_code}})
        if(!output){
            throw new NotFoundException(`${clm_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${clm_code}, data not found`);
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
        if(output.status == 1){
            throw new NotFoundException(`${clm_code}, data not found`);
        }
        output.status = 1
        let result = await this.callLogManagement.update(clm_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}