import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { event_master } from 'src/Entity/event_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventMasterService {
    constructor(
        @InjectRepository(event_master)
        private readonly eventMaster: Repository<event_master>,
        ){}

    //------------------Insert record in event_master------------------//
    async addEventMaster(data){
        var result = await this.eventMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from event_master------------------//
    async findAllEventMaster(){
        var result = await this.eventMaster.createQueryBuilder("event_master")
                        .innerJoinAndSelect("event_master.event_type_master","etm")
                        .innerJoinAndSelect("event_master.event_status_master","esm")
                        .innerJoinAndSelect("event_master.event_related_master","erm")
                        .getMany()
        return result
    }

    //------------------Finding one record from event_master-------------------//
    async findOneEventMaster(event_code){
        var result = await this.eventMaster.findOne({where: {event_code:event_code}, relations:['event_related_master','event_status_master','event_type_master']})
        if(!result){
            throw new NotFoundException(`${event_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from event_master------------------//
    async updateEventMaster(event_code, data){
        var output = await this.eventMaster.findOne({where: {event_code:event_code}})
        if(!output){
            throw new NotFoundException(`${event_code} is not exist`)
        }
        var result = await this.eventMaster.update(event_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from event_master------------------//
    async deleteEventMaster(event_code){
        var output = await this.eventMaster.findOne({where: {event_code:event_code}})
        if(!output){
            throw new NotFoundException(`${event_code} is not exist`)
        }
        var result = await this.eventMaster.delete(event_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}