import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deal_master_product_mapping } from 'src/Entity/deal_master_product_mapping';
import { Repository } from 'typeorm';

@Injectable()
export class DealMasterProductMappingService {
    constructor(@InjectRepository(deal_master_product_mapping) private dealMasterProductMapping:Repository<deal_master_product_mapping>){}

    //-------------------------------------dealMasterProductMapping add---------------------------------//
        
    async addDealData(data){
        let result = await this.dealMasterProductMapping.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one dealMasterProductMapping using dmmm_id-------------------//
    async getOneDeal(dmpm_code) {
        let output= await this.dealMasterProductMapping.findOne({ where:{dmpm_code: dmpm_code }, relations:['deal_master','product_master']});
        if(!output){
            throw new NotFoundException(`${dmpm_code},data not found`);
        }
        return output;
      }
    
    //-------------------------------find all dealMasterProductMapping data----------------------------//
    async getAllDeal(){
        var result = await this.dealMasterProductMapping.createQueryBuilder("deal_master_product_mapping") 
                                .leftJoinAndSelect("deal_master_product_mapping.deal_master",'dm')
                                .leftJoinAndSelect("deal_master_product_mapping.product_master",'pm')
                                .getMany()
        return result;
    }
    
    //-------------------------------update dealMasterProductMapping data----------------------------//
    async updateDealData(dmpm_code,data){
        let output= await this.dealMasterProductMapping.findOne({ where:{dmpm_code: dmpm_code }});
        if(!output){
            throw new NotFoundException(`${dmpm_code},data not found`);
        }
        let result= await this.dealMasterProductMapping.update(dmpm_code,data);
        if(result){
            let msg={message:"updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete dealMasterProductMapping data-------------------------------//
    async deleteDealData(dmpm_code){
        let output= await this.dealMasterProductMapping.findOne({ where:{dmpm_code: dmpm_code }});
        if(!output){
            throw new NotFoundException(`${dmpm_code},data not found`);
        }
        let result= await this.dealMasterProductMapping.delete(dmpm_code);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
