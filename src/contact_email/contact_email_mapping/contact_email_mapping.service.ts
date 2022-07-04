import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { contact_email_mapping } from 'src/Entity/contact_email_mapping.entity';

@Injectable()
export class ContactEmailMappingService {
    constructor(
        @InjectRepository(contact_email_mapping)
        private readonly contactEmailMapping: Repository<contact_email_mapping>,
        ){}

    //------------------Insert record in contact_email_mapping------------------//
    async addContactEmailMapping(data){
        var result = await this.contactEmailMapping.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from contact_email_mapping------------------//
    async findContactEmailMapping(){
        var result = await this.contactEmailMapping.find({where:{status:0}})
        return result
    }

    //------------------Finding one record from contact_email_mapping-------------------//
    async findOneContactEmailMapping(cei_code){
        var result = await this.contactEmailMapping.findOne({where: {cei_code:cei_code}})
        if(!result){
            throw new NotFoundException(`${cei_code} is not exist`)
        }
        if(result.status == 1){
            throw new NotFoundException(`${cei_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from contact_email_mapping------------------//
    async updateContactEmailMapping(cei_code, data){
        var output = await this.contactEmailMapping.findOne({where: {cei_code:cei_code}})
        if(!output){
            throw new NotFoundException(`${cei_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${cei_code}, data not found`);
        }
        var result = await this.contactEmailMapping.update(cei_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from contact_email_mapping------------------//
    async deleteContactEmailMapping(cei_code){
        var output = await this.contactEmailMapping.findOne({where: {cei_code:cei_code}})
        if(!output){
            throw new NotFoundException(`${cei_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${cei_code}, data not found`);
        }
        output.status = 1
        let result = await this.contactEmailMapping.update(cei_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
