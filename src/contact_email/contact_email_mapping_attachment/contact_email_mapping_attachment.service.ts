import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { contact_email_mapping_attachment } from 'src/Entity/contact_email_mapping_attachment.entity';

@Injectable()
export class ContactEmailMappingAttachmentService {
    constructor(
        @InjectRepository(contact_email_mapping_attachment)
        private readonly contactEmailMappingAttachment: Repository<contact_email_mapping_attachment>,
        ){}

    //------------------Insert record in contact_email_mapping_attachment------------------//
    async addContactEmailMappingAttachment(data){
        var result = await this.contactEmailMappingAttachment.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from contact_email_mapping_attachment------------------//
    async findContactEmailMappingAttachment(){
        var result = await this.contactEmailMappingAttachment.createQueryBuilder('contact_email_mapping_attachment')
                        .leftJoinAndSelect('contact_email_mapping_attachment.contact_email_mapping','cem')
                        .getMany()
        return result
    }

    //------------------Finding one record from contact_email_mapping_attachment-------------------//
    async findOneContactEmailMappingAttachment(cema_code){
        var result = await this.contactEmailMappingAttachment.findOne({where: {cema_code:cema_code}, relations:['contact_email_mapping']})
        if(!result){
            throw new NotFoundException(`${cema_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from contact_email_mapping_attachment------------------//
    async updateContactEmailMappingAttachment(cema_code, data){
        var company = await this.contactEmailMappingAttachment.findOne({where: {cema_code:cema_code}})
        if(!company){
            throw new NotFoundException(`${cema_code} is not exist`)
        }
        var result = await this.contactEmailMappingAttachment.update(cema_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from contact_email_mapping_attachment------------------//
    async deleteContactEmailMappingAttachment(cema_code){
        var company = await this.contactEmailMappingAttachment.findOne({where: {cema_code:cema_code}})
        if(!company){
            throw new NotFoundException(`${cema_code} is not exist`)
        }
        var result = await this.contactEmailMappingAttachment.delete(cema_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}