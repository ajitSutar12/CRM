import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { notes_manage } from 'src/Entity/notes_manage.entity';

@Injectable()
export class NotesManageService {
    constructor(
        @InjectRepository(notes_manage)
        private readonly notesManage: Repository<notes_manage>,
        ){}

    //------------------Insert record in notes_manage------------------//
    async addNotesManage(data){
        var result = await this.notesManage.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from notes_manage------------------//
    async findNotesManage(){
        var result = await this.notesManage.createQueryBuilder('notes_manage')
                        .leftJoinAndSelect('notes_manage.contact_master','cm')
                        .where({status:0})
                        .getMany()
        return result
    }

    //------------------Finding one record from notes_manage-------------------//
    async findOneNotesManage(notes_code){
        var result = await this.notesManage.findOne({where: {notes_code:notes_code}, relations:['contact_master']})
        if(!result){
            throw new NotFoundException(`${notes_code} is not exist`)
          }
          if(result.status == 1){
            throw new NotFoundException(`${notes_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from notes_manage------------------//
    async updateNotesManage(notes_code, data){
        var output = await this.notesManage.findOne({where: {notes_code:notes_code}})
        if(!output){
            throw new NotFoundException(`${notes_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${notes_code}, data not found`);
        }
        var result = await this.notesManage.update(notes_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from notes_manage------------------//
    async deleteNotesManage(notes_code){
        var output = await this.notesManage.findOne({where: {notes_code:notes_code}})
        if(!output){
            throw new NotFoundException(`${notes_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${notes_code}, data not found`);
        }
        output.status = 1
        let result = await this.notesManage.update(notes_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
