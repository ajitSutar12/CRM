import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { event_type_master } from 'src/Entity/event_type_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventTypeMasterService {
    constructor(
        @InjectRepository(event_type_master)
        private readonly eventTypeMaster: Repository<event_type_master>,
        ){}

    //------------------Insert record in event_type_master------------------//
    async addEventTypeMaster(data){
        var result = await this.eventTypeMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from event_type_master------------------//
    async findAllEventTypeMaster(){
        var result = await this.eventTypeMaster.find()
        return result
    }

    //------------------Finding one record from event_type_master-------------------//
    async findOneEventTypeMaster(etm_code){
        var result = await this.eventTypeMaster.findOne({where: {etm_code:etm_code}})
        if(!result){
            throw new NotFoundException(`${etm_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from event_type_master------------------//
    async updateEventTypeMaster(etm_code, data){
        var company = await this.eventTypeMaster.findOne({where: {etm_code:etm_code}})
        if(!company){
            throw new NotFoundException(`${etm_code} is not exist`)
        }
        var result = await this.eventTypeMaster.update(etm_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from event_type_master------------------//
    async deleteEventTypeMaster(etm_code){
        var company = await this.eventTypeMaster.findOne({where: {etm_code:etm_code}})
        if(!company){
            throw new NotFoundException(`${etm_code} is not exist`)
        }
        var result = await this.eventTypeMaster.delete(etm_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}