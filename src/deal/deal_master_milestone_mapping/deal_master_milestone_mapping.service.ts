import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deal_master_milestone_mapping } from 'src/Entity/deal_master_milestone_mapping';
import { Repository } from 'typeorm';

@Injectable()
export class DealMasterMilestoneMappingService {
    constructor(@InjectRepository(deal_master_milestone_mapping) private dealMasterMilestoneMapping:Repository<deal_master_milestone_mapping>){}

    //-------------------------------------dealMasterMilestoneMapping add---------------------------------//
        
    async addDealData(data){
        let result = await this.dealMasterMilestoneMapping.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one dealMasterMilestoneMapping using dmmm_id-------------------//
    async getOneDeal(dmmm_id) {
        let output= await this.dealMasterMilestoneMapping.findOne({ where:{dmmm_id: dmmm_id }, relations:['deal_master','deal_milestone_master']});
        if(!output){
            throw new NotFoundException(`${dmmm_id},data not found`);
        }
        return output;
      }
    
    //-------------------------------find all dealMasterMilestoneMapping data----------------------------//
    async getAllDeal(){
        var result = await this.dealMasterMilestoneMapping.createQueryBuilder("deal_master_Milestone_mapping") 
                                .leftJoinAndSelect("deal_master_Milestone_mapping.deal_master",'dm')
                                .leftJoinAndSelect("deal_master_Milestone_mapping.deal_milestone_master",'dmm')
                                .getMany()
        return result;
    }
    
    //-------------------------------update dealMasterMilestoneMapping data----------------------------//
    async updateDealData(dmmm_id,data){
        let output= await this.dealMasterMilestoneMapping.findOne({ where:{dmmm_id: dmmm_id }});
        if(!output){
            throw new NotFoundException(`${dmmm_id},data not found`);
        }
        let result= await this.dealMasterMilestoneMapping.update(dmmm_id,data);
        if(result){
            let msg={message:"updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete dealMasterMilestoneMapping data-------------------------------//
    async deleteDealData(dmmm_id){
        let output= await this.dealMasterMilestoneMapping.findOne({ where:{dmmm_id: dmmm_id }});
        if(!output){
            throw new NotFoundException(`${dmmm_id},data not found`);
        }
        let result= await this.dealMasterMilestoneMapping.delete(dmmm_id);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
