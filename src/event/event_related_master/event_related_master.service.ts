import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { event_related_master } from 'src/Entity/event_related_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventRelatedMasterService {
    constructor(
        @InjectRepository(event_related_master)
        private readonly eventRelatedMaster: Repository<event_related_master>,
        ){}

    //------------------Insert record in event_related_master------------------//
    async addEventRelatedMaster(data){
        var result = await this.eventRelatedMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from event_related_master------------------//
    async findAllEventRelatedMaster(){
        var result = await this.eventRelatedMaster.find()
        return result
    }

    //------------------Finding one record from event_related_master-------------------//
    async findOneEventRelatedMaster(erm_code){
        var result = await this.eventRelatedMaster.findOne({where: {erm_code:erm_code}})
        if(!result){
            throw new NotFoundException(`${erm_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from event_related_master------------------//
    async updateEventRelatedMaster(erm_code, data){
        var output = await this.eventRelatedMaster.findOne({where: {erm_code:erm_code}})
        if(!output){
            throw new NotFoundException(`${erm_code} is not exist`)
        }
        var result = await this.eventRelatedMaster.update(erm_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from event_related_master------------------//
    async deleteEventRelatedMaster(erm_code){
        var output = await this.eventRelatedMaster.findOne({where: {erm_code:erm_code}})
        if(!output){
            throw new NotFoundException(`${erm_code} is not exist`)
        }
        var result = await this.eventRelatedMaster.delete(erm_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}