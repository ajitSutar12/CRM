import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { campaign_master } from 'src/Entity/campaign_master.entity';
import { PaginationOptionsInterface } from 'src/pagination/pagination.option.interface';
import { ILike, In, Repository } from 'typeorm';
import { Pagination } from './campaign_pagination.ts/pagination';

@Injectable()
export class CampaignMasterService {
    constructor(@InjectRepository(campaign_master) private campaignMaster:Repository<campaign_master>){}

    //-------------------------------------insert into campaign_master---------------------------------//
        
    async addCampaignMaster(data){
        let addData = await this.campaignMaster.save(data);
        if(addData){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one campaign_master-------------------//
    async getOneCampaignMaster(cm_code) {
        let findUser= await this.campaignMaster.findOne({ where:{cm_code: cm_code }, relations:['campaign_type_master']});
        if(!findUser){
            throw new NotFoundException(`${cm_code},data not found`);
        }
        return findUser;
    }
    
    //-------------------------------find all campaign_master----------------------------//
    async getAllCampaignMaster(options: PaginationOptionsInterface,): Promise<Pagination<campaign_master[]>> {
        var object = {}
        console.log(object)
        for (var key in options.filterData){
            object[key] = In(options.filterData[key])   
        }
        const [data, recordsTotal] = await this.campaignMaster.createQueryBuilder('campaign_master')
          .leftJoinAndSelect('campaign_master.campaign_type_master', 'ctm')
          .take(options.limit)
          .skip(options.page)
          .where(object)
          .orderBy('campaign_master.cm_code', 'DESC')
          .getManyAndCount()
        return new Pagination<campaign_master[]>({
          data,
          recordsTotal,
        });
      }

    //-------------------------------update into campaign_master----------------------------//
    async updateCampaignMaster(cm_code,data){
        let output= await this.campaignMaster.findOne({ where:{cm_code: cm_code }});
        if(!output){
            throw new NotFoundException(`${cm_code},data not found`);
        }
        let result= await this.campaignMaster.update(cm_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete from campaign_master-------------------------------//
    async deleteCampaignMaster(cm_code){
        let output= await this.campaignMaster.findOne({ where:{cm_code: cm_code }});
        if(!output){
            throw new NotFoundException(`${cm_code}, data not found`);
        }
        let result= await this.campaignMaster.delete(cm_code);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }

    //-----------------------pagination---------------------------------//
    
}
