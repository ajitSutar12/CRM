import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { document_master } from 'src/Entity/document_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DocumentMasterService {
    constructor(
        @InjectRepository(document_master)
        private readonly documentMaster: Repository<document_master>,
        ){}

    //------------------Insert record in document_master------------------//
    async addDocumentMaster(data){
        var result = await this.documentMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from document_master------------------//
    async findAllDocumentMaster(){
        var result = await this.documentMaster.find({where:{status:0}})
        return result
    }

    //------------------Finding one record from document_master-------------------//
    async findOneDocumentMaster(dm_code){
        var result = await this.documentMaster.findOne({where: {dm_code:dm_code}})
        if(!result){
            throw new NotFoundException(`${dm_code} is not exist`)
        }
        if(result.status == 1){
            throw new NotFoundException(`${dm_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from document_master------------------//
    async updateDocumentMaster(dm_code, data){
        var output = await this.documentMaster.findOne({where: {dm_code:dm_code}})
        if(!output){
            throw new NotFoundException(`${dm_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${dm_code}, data not found`);
        }
        var result = await this.documentMaster.update(dm_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from document_master------------------//
    async deleteDocumentMaster(dm_code){
        var output = await this.documentMaster.findOne({where: {dm_code:dm_code}})
        if(!output){
            throw new NotFoundException(`${dm_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${dm_code}, data not found`);
        }
        output.status = 1
        let result = await this.documentMaster.update(dm_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}