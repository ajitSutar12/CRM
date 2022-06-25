import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { event_status_master } from 'src/Entity/event_status_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventStatusMasterService {
    constructor(
        @InjectRepository(event_status_master)
        private readonly eventStatusMaster: Repository<event_status_master>,
        ){}

    //------------------Insert record in event_status_master------------------//
    async addEventStatusMaster(data){
        var result = await this.eventStatusMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from event_status_master------------------//
    async findAllEventStatusMaster(){
        var result = await this.eventStatusMaster.find()
        return result
    }

    //------------------Finding one record from event_status_master-------------------//
    async findOneEventStatusMaster(esm_code){
        var result = await this.eventStatusMaster.findOne({where: {esm_code:esm_code}})
        if(!result){
            throw new NotFoundException(`${esm_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from event_status_master------------------//
    async updateEventStatusMaster(esm_code, data){
        var output = await this.eventStatusMaster.findOne({where: {esm_code:esm_code}})
        if(!output){
            throw new NotFoundException(`${esm_code} is not exist`)
        }
        var result = await this.eventStatusMaster.update(esm_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from event_status_master------------------//
    async deleteEventStatusMaster(esm_code){
        var output = await this.eventStatusMaster.findOne({where: {esm_code:esm_code}})
        if(!output){
            throw new NotFoundException(`${esm_code} is not exist`)
        }
        var result = await this.eventStatusMaster.delete(esm_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}
