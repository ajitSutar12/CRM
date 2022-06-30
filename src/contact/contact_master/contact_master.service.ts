import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { contact_master } from 'src/Entity/contact_master.entity';
import { In, Repository } from 'typeorm';

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
    async findAllContactMaster(data){
        var result =  await this.contactMaster.find({where: {c_c_address: In(data.c_c_address), c_first_name: In(data.c_first_name)}})
        // await this.contactMaster.createQueryBuilder("contact_master")
        //                 .where("contact_master.c_first_name IN (:c_first_name)", { c_first_name: data.c_first_name })
        //                 .andWhere("contact_master.c_c_address IN (:c_c_address)", { c_c_address: data.c_c_address })
        //                 //.andWhere("contact_master.")
        //                 .getMany();
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
        var output = await this.contactMaster.findOne({where: {c_code:c_code}})
        if(!output){
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
        var output = await this.contactMaster.findOne({where: {c_code:c_code}})
        if(!output){
            throw new NotFoundException(`${c_code} is not exist`)
        }
        var result = await this.contactMaster.delete(c_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}
