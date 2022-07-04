import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { activity_moniter } from 'src/Entity/activity_moniter.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ActivityMoniterService {
    constructor(@InjectRepository(activity_moniter) private activityMoniter:Repository<activity_moniter>){}

    //-------------------------------------insert into activity_moniter---------------------------------//
    async addAcitvityMoniter(data){
        let result = await this.activityMoniter.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one activity_moniter-------------------//
    async findOneAcitvityMoniter(am_code) {
        let result= await this.activityMoniter.findOne({ where:{am_code: am_code}, relations:['transaction_master']});
        if(!result){
            throw new NotFoundException(`${am_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${am_code},data not found`);
        }

        return result;
    }

    //-------------------------------find all activity_moniter----------------------------//
    async findAllAcitvityMoniter(){
        const result = await this.activityMoniter.createQueryBuilder("activity_moniter") 
                        .leftJoinAndSelect("activity_moniter.transaction_master",'cm')
                        .where({status:0})
                        .getMany()
        return result
    }

    //-------------------------------update into activity_moniter----------------------------//
    async updateAcitvityMoniter(am_code,data){
        let output= await this.activityMoniter.findOne({ where:{am_code: am_code }});
        if(!output){
            throw new NotFoundException(`${am_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${am_code}, data not found`);
        }
        let result= await this.activityMoniter.update(am_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete from activity_moniter-------------------------------//
    async deleteAcitvityMoniter(am_code){
        let output= await this.activityMoniter.findOne({ where:{am_code: am_code }});
        if(!output){
            throw new NotFoundException(`${am_code}, data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${am_code}, data not found`);
        }
        output.status = 1
        let result = await this.activityMoniter.update(am_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
