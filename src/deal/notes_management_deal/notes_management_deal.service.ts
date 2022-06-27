import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { notes_management_deal } from 'src/Entity/notes_management_deal';
import { Repository } from 'typeorm';

@Injectable()
export class NotesManagementDealService {
    constructor(@InjectRepository(notes_management_deal) private notesManagementDeal:Repository<notes_management_deal>){}

    //-------------------------------------notesManagementDeal add---------------------------------//
        
    async addNotesManagementDealData(data){
        let result = await this.notesManagementDeal.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one notesManagementDeal using notes_code-------------------//
    async getOneNotesManagementDeal(notes_code) {
        let output= await this.notesManagementDeal.findOne({ where:{notes_code: notes_code }, relations:['deal_master','contact_master']});
        if(!output){
            throw new NotFoundException(`${notes_code},data not found`);
        }
        return output;
      }
    
    //-------------------------------find all notesManagementDeal data----------------------------//
    async getAllNotesManagementDeal(){
        var result = await this.notesManagementDeal.createQueryBuilder("notes_management_deal") 
                                .leftJoinAndSelect("notes_management_deal.deal_master",'dm')
                                .leftJoinAndSelect("notes_management_deal.contact_master",'cm')
                                .getMany()
        return result;
    }
    
    //-------------------------------update notesManagementDeal data----------------------------//
    async updateNotesManagementDealData(notes_code,data){
        let output= await this.notesManagementDeal.findOne({ where:{notes_code: notes_code }});
        if(!output){
            throw new NotFoundException(`${notes_code},data not found`);
        }
        let result= await this.notesManagementDeal.update(notes_code,data);
        if(result){
            let msg={message:"updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete notesManagementDeal data-------------------------------//
    async deleteNotesManagementDealData(notes_code){
        let output= await this.notesManagementDeal.findOne({ where:{notes_code: notes_code }});
        if(!output){
            throw new NotFoundException(`${notes_code},data not found`);
        }
        let result= await this.notesManagementDeal.delete(notes_code);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
