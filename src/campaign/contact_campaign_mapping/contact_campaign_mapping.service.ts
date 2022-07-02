import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { contact_campaign_mapping } from 'src/Entity/contact_campaign_mapping.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactCampaignMappingService {
    constructor(@InjectRepository(contact_campaign_mapping) private contactCampaignMapping:Repository<contact_campaign_mapping>){}

    //-------------------------------------insert into contact_campaign_mapping---------------------------------//
        
    async addContactCampaignMapping(data){
        let addData = await this.contactCampaignMapping.save(data);
        if(addData){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one contact_campaign_mapping-------------------//
    async getOneContactCampaignMapping(ccm_id) {
        let findUser= await this.contactCampaignMapping.findOne({ where:{ccm_id: ccm_id }, relations:['campaign_master','contact_master']});
        if(!findUser){
            throw new NotFoundException(`${ccm_id},data not found`);
        }
        return findUser;
    }

    //-------------------------------find all contact_campaign_mapping----------------------------//
    async getAllContactCampaignMapping(){
        const result = await this.contactCampaignMapping.createQueryBuilder("campaign_master") 
                        .leftJoinAndSelect("campaign_master.campaign_master",'cm')
                        .leftJoinAndSelect("campaign_master.contact_master",'ctm')
                        .getMany()
        return result
    }

    //-------------------------------update into contact_campaign_mapping----------------------------//
    async updateContactCampaignMapping(ccm_id,data){
        let output= await this.contactCampaignMapping.findOne({ where:{ccm_id: ccm_id }});
        if(!output){
            throw new NotFoundException(`${ccm_id},data not found`);
        }
        let result= await this.contactCampaignMapping.update(ccm_id,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete from contact_campaign_mapping-------------------------------//
    async deleteContactCampaignMapping(ccm_id){
        let output= await this.contactCampaignMapping.findOne({ where:{ccm_id: ccm_id }});
        if(!output){
            throw new NotFoundException(`${ccm_id}, data not found`);
        }
        let result= await this.contactCampaignMapping.delete(ccm_id);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}