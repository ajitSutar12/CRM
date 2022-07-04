import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { campaign_type_master } from 'src/Entity/campaign_type_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CampaignTypeMasterService {
    constructor(
        @InjectRepository(campaign_type_master)
        private readonly campaignTypeMaster: Repository<campaign_type_master>,
        ){}

    //------------------Insert record in campaign_type_master------------------//
    async addCampaignTypeMaster(data){
        var result = await this.campaignTypeMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from campaign_type_master------------------//
    async findAllCampaignTypeMaster(){
        var result = await this.campaignTypeMaster.find({where:{status:0}})
        return result
    }

    //------------------Finding one record from campaign_type_master-------------------//
    async findOneCampaignTypeMaster(ct_code){
        var result = await this.campaignTypeMaster.findOne({where: {ct_code:ct_code}})
        if(!result){
            throw new NotFoundException(`${ct_code} is not exist`)
        }
        if(result.status == 1){
            throw new NotFoundException(`${ct_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from campaign_type_master------------------//
    async updateCampaignTypeMaster(ct_code, data){
        var output = await this.campaignTypeMaster.findOne({where: {ct_code:ct_code}})
        if(!output){
            throw new NotFoundException(`${ct_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${ct_code}, data not found`);
        }
        var result = await this.campaignTypeMaster.update(ct_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from campaign_type_master------------------//
    async deleteCampaignTypeMaster(ct_code){
        var output = await this.campaignTypeMaster.findOne({where: {ct_code:ct_code}})
        if(!output){
            throw new NotFoundException(`${ct_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${ct_code}, data not found`);
        }
        output.status = 1
        let result = await this.campaignTypeMaster.update(ct_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}