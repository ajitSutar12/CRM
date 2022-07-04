import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { call_status_master } from 'src/Entity/call_status_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CallStatusMasterService {
    constructor(
        @InjectRepository(call_status_master)
        private readonly callStatusMaster: Repository<call_status_master>,
        ){}

    //------------------Insert record in call_status_master------------------//
    async addCallStatusMaster(data){
        var result = await this.callStatusMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from call_status_master------------------//
    async findAllCallStatusMaster(){
        var result = await this.callStatusMaster.find({where:{status:0}})
        return result
    }

    //------------------Finding one record from call_status_master-------------------//
    async findOneCallStatusMaster(csm_code){
        var result = await this.callStatusMaster.findOne({where: {csm_code:csm_code}})
        if(!result){
            throw new NotFoundException(`${csm_code} is not exist`)
        }
        if(result.status == 1){
            throw new NotFoundException(`${csm_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from call_status_master------------------//
    async updateCallStatusMaster(csm_code, data){
        var output = await this.callStatusMaster.findOne({where: {csm_code:csm_code}})
        if(!output){
            throw new NotFoundException(`${csm_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${csm_code}, data not found`);
        }
        var result = await this.callStatusMaster.update(csm_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from call_status_master------------------//
    async deleteCallStatusMaster(csm_code){
        var output = await this.callStatusMaster.findOne({where: {csm_code:csm_code}})
        if(!output){
            throw new NotFoundException(`${csm_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${csm_code}, data not found`);
        }
        output.status = 1
        let result = await this.callStatusMaster.update(csm_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}