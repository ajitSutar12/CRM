import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { contact_master } from 'src/Entity/contact_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactMasterService {
    constructor(
        @InjectRepository(contact_master)
        private readonly contactMaster: Repository<contact_master>,
        ){}

    //------------------Insert record in contact_master------------------//
    async addContactMaster(data){
        var result = await this.contactMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from contact_master------------------//
    async findAllContactMaster(){
        var result = await this.contactMaster.find()
        return result
    }

    //------------------Finding one record from contact_master-------------------//
    async findOneContactMaster(c_code){
        var result = await this.contactMaster.findOne({where: {c_code:c_code}})
        if(!result){
            throw new NotFoundException(`${c_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from contact_master------------------//
    async updateContactMaster(c_code, data){
        var company = await this.contactMaster.findOne({where: {c_code:c_code}})
        if(!company){
            throw new NotFoundException(`${c_code} is not exist`)
        }
        var result = await this.contactMaster.update(c_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from contact_master------------------//
    async deleteContactMaster(c_code){
        var company = await this.contactMaster.findOne({where: {c_code:c_code}})
        if(!company){
            throw new NotFoundException(`${c_code} is not exist`)
        }
        var result = await this.contactMaster.delete(c_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}
