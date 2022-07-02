import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { target_master } from 'src/Entity/target_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TargetMasterService {
    constructor(@InjectRepository(target_master) private targetMaster:Repository<target_master>){}

    //-------------------------------------target data add---------------------------------//
        
    async addTargetData(data){
        let result = await this.targetMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one target using user_code-------------------//
    async getOneTarget(tm_code) {
        let result= await this.targetMaster.findOne({ where:{tm_code: tm_code }, relations:['user_master','product_master']});
        if(!result){
            throw new NotFoundException(`${tm_code},data not found`);
        }
        return result;
    }

    //-------------------------------find all target data----------------------------//
    async getAllTarget(){
        const result = await this.targetMaster.createQueryBuilder("target_master") 
                        .leftJoinAndSelect("target_master.user_master",'um')
                        .leftJoinAndSelect("target_master.product_master",'pm')
                        .getMany()
        return result
    }

    //-------------------------------update target data----------------------------//
    async updateTargetData(tm_code,data){
        let output= await this.targetMaster.findOne({ where:{tm_code: tm_code }});
        if(!output){
            throw new NotFoundException(`${tm_code},data not found`);
        }
        let result= await this.targetMaster.update(tm_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete target data-------------------------------//
    async deleteTargetData(tm_code){
        let output= await this.targetMaster.findOne({ where:{tm_code: tm_code }});
        if(!output){
            throw new NotFoundException(`${tm_code}, data not found`);
        }
        let result= await this.targetMaster.delete(tm_code);
        if(result){
            let msg={message:"Deleted Successfully"};
            return msg;
        }
    }
}
