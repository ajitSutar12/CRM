import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deal_master } from 'src/Entity/deal_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DealMasterService {
    constructor(@InjectRepository(deal_master) private dealMaster:Repository<deal_master>){}

    //-------------------------------------deal add---------------------------------//
        
    async addDealData(data){
        let result = await this.dealMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one deal using deal_code-------------------//
    async getOneDeal(deal_code) {
        let output= await this.dealMaster.findOne({ where:{deal_code: deal_code }, relations:['contact_master','deal_milestone_master']});
        if(!output){
            throw new NotFoundException(`${deal_code},data not found`);
        }
        return output;
      }
    
    //-------------------------------find all deal data----------------------------//
    async getAllDeal(){
        var result = await this.dealMaster.createQueryBuilder("deal_master")
                                .offset(1)
                                .limit(2)
                                .leftJoinAndSelect("deal_master.contact_master",'cm')
                                .leftJoinAndSelect("deal_master.deal_milestone_master",'dmm')
                                .getMany()
        return result;
    }
    
    //-------------------------------update deal data----------------------------//
    async updateDealData(deal_code,data){
        let output= await this.dealMaster.findOne({ where:{deal_code: deal_code }});
        if(!output){
            throw new NotFoundException(`${deal_code},data not found`);
        }
        let result= await this.dealMaster.update(deal_code,data);
        if(result){
            let msg={message:"updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete deal data-------------------------------//
    async deleteDealData(deal_code){
        let output= await this.dealMaster.findOne({ where:{deal_code: deal_code }});
        if(!output){
            throw new NotFoundException(`${deal_code},data not found`);
        }
        let result= await this.dealMaster.delete(deal_code);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
