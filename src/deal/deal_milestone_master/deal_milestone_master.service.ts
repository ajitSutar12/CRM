import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deal_milestone_master } from 'src/Entity/deal_milestone_master';
import { Repository } from 'typeorm';

@Injectable()
export class DealMilestoneMasterService {
    constructor(@InjectRepository(deal_milestone_master) private dealMilestoneMaster:Repository<deal_milestone_master>){}

    //-------------------------------------dealMilestoneMaster add---------------------------------//
        
    async addDealData(data:deal_milestone_master){
        let result = await this.dealMilestoneMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one dealMilestoneMaster using dm_code-------------------//
    async getOneDeal(dm_code) {
        let output= await this.dealMilestoneMaster.findOne({ where:{dm_code: dm_code }});
        if(!output){
            throw new NotFoundException(`${dm_code},data not found`);
        }
        return output;
      }
    
    //-------------------------------find all dealMilestoneMaster data----------------------------//
    async getAllDeal(){
        var result = await this.dealMilestoneMaster.find();
        return result;
    }
    
    //-------------------------------update dealMilestoneMaster data----------------------------//
    async updateDealData(dm_code,data){
        let output= await this.dealMilestoneMaster.findOne({ where:{dm_code: dm_code }});
        if(!output){
            throw new NotFoundException(`${dm_code},data not found`);
        }
        let result= await this.dealMilestoneMaster.update(dm_code,data);
        if(result){
            let msg={message:"updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete dealMilestoneMaster data-------------------------------//
    async deleteDealData(dm_code){
        let output= await this.dealMilestoneMaster.findOne({ where:{dm_code: dm_code }});
        if(!output){
            throw new NotFoundException(`${dm_code},data not found`);
        }
        let result= await this.dealMilestoneMaster.delete(dm_code);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
