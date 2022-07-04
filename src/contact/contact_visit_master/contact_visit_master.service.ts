import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { contact_visit_master } from 'src/Entity/contact_visit_master.entity';

@Injectable()
export class ContactVisitMasterService {
    constructor(
        @InjectRepository(contact_visit_master)
        private readonly contactVisitMaster: Repository<contact_visit_master>,
        ){}

    //------------------Insert record in contact_visit_master------------------//
    async addContactVisitMaster(data){
        var result = await this.contactVisitMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from contact_visit_master------------------//
    async findContactVisitMaster(){
        var result = await this.contactVisitMaster.createQueryBuilder('contact_visit_master')
                        .leftJoinAndSelect('contact_visit_master.contact_master','cm')
                        .where({status:0})
                        .getMany()
        return result
    }

    //------------------Finding one record from contact_visit_master-------------------//
    async findOneContactVisitMaster(cv_code){
        var result = await this.contactVisitMaster.findOne({where: {cv_code:cv_code}, relations:['contact_master']})
        if(!result){
            throw new NotFoundException(`${cv_code} is not exist`)
        }
        if(result.status == 1){
            throw new NotFoundException(`${cv_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from contact_visit_master------------------//
    async updateContactVisitMaster(cv_code, data){
        var output = await this.contactVisitMaster.findOne({where: {cv_code:cv_code}})
        if(!output){
            throw new NotFoundException(`${cv_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${cv_code}, data not found`);
        }
        var result = await this.contactVisitMaster.update(cv_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from contact_visit_master------------------//
    async deleteContactVisitMaster(cv_code){
        var output = await this.contactVisitMaster.findOne({where: {cv_code:cv_code}})
        if(!output){
            throw new NotFoundException(`${cv_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${cv_code}, data not found`);
        }
        output.status = 1
        let result = await this.contactVisitMaster.update(cv_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
