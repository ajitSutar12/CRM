import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { deal_attachment } from 'src/Entity/deal_attachment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DealAttachmentService {
    constructor(@InjectRepository(deal_attachment) private dealAttachment:Repository<deal_attachment>){}

    //-------------------------------------dealAttachment add---------------------------------//
        
    async addDealData(data){
        let result = await this.dealAttachment.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one dealAttachment using da_code-------------------//
    async getOneDeal(da_code) {
        let output= await this.dealAttachment.findOne({ where:{da_code: da_code }, relations:['deal_master']});
        if(!output){
            throw new NotFoundException(`${da_code},data not found`);
        }
        return output;
      }
    
    //-------------------------------find all dealAttachment data----------------------------//
    async getAllDeal(){
        var result = await this.dealAttachment.createQueryBuilder("deal_attachment") 
                                .leftJoinAndSelect("deal_attachment.deal_master",'dm')
                                .getMany()
        return result;
    }
    
    //-------------------------------update dealAttachment data----------------------------//
    async updateDealData(da_code,data){
        let output= await this.dealAttachment.findOne({ where:{da_code: da_code }});
        if(!output){
            throw new NotFoundException(`${da_code},data not found`);
        }
        let result= await this.dealAttachment.update(da_code,data);
        if(result){
            let msg={message:"updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete dealAttachment data-------------------------------//
    async deleteDealData(da_code){
        let output= await this.dealAttachment.findOne({ where:{da_code: da_code }});
        if(!output){
            throw new NotFoundException(`${da_code},data not found`);
        }
        let result= await this.dealAttachment.delete(da_code);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
