import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { contact_document_master } from 'src/Entity/contact_document_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactDocumentMasterService {
    constructor(@InjectRepository(contact_document_master) 
        private ContactDocumentMaster:Repository<contact_document_master>){}

    //-------------------------------------insert into contact_document_master---------------------------------//
        
    async addContactDocumentMaster(data){
        let addData = await this.ContactDocumentMaster.save(data);
        if(addData){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one contact_document_master-------------------//
    async getOneContactDocumentMaster(cdm_code) {
        let findUser= await this.ContactDocumentMaster.findOne({ where:{cdm_code: cdm_code }, relations:['contact_master','document_master','deal_master']});
        if(!findUser){
            throw new NotFoundException(`${cdm_code},data not found`);
        }
        return findUser;
    }

    //-------------------------------find all contact_document_master----------------------------//
    async getAllContactDocumentMaster(){
        const result = await this.ContactDocumentMaster.createQueryBuilder("contact_document_master") 
                        .leftJoinAndSelect("contact_document_master.contact_master",'cm')
                        .leftJoinAndSelect("contact_document_master.document_master",'dm')
                        .leftJoinAndSelect("contact_document_master.deal_master",'dem')
                        .getMany()
        return result
    }

    //-------------------------------update into contact_document_master----------------------------//
    async updateContactDocumentMaster(cdm_code,data){
        let output= await this.ContactDocumentMaster.findOne({ where:{cdm_code: cdm_code }});
        if(!output){
            throw new NotFoundException(`${cdm_code},data not found`);
        }
        let result= await this.ContactDocumentMaster.update(cdm_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete from contact_document_master-------------------------------//
    async deleteContactDocumentMaster(cdm_code){
        let output= await this.ContactDocumentMaster.findOne({ where:{cdm_code: cdm_code }});
        if(!output){
            throw new NotFoundException(`${cdm_code}, data not found`);
        }
        let result= await this.ContactDocumentMaster.delete(cdm_code);
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}