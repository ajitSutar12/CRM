import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { transaction_master } from 'src/Entity/transaction_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionMasterService {
    constructor(
        @InjectRepository(transaction_master)
        private readonly transactionMaster: Repository<transaction_master>,
        ){}

    //------------------Insert record in transaction_status_master------------------//
    async addTransactionMaster(data){
        var result = await this.transactionMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from transaction_status_master------------------//
    async findAllTransactionMaster(){
        var result = await this.transactionMaster.find({where : {status:0}})
        return result
    }

    //------------------Finding one record from transaction_status_master-------------------//
    async findOneTransactionMaster(t_code){
        var result = await this.transactionMaster.findOne({where: {t_code:t_code}})
        if(!result){
            throw new NotFoundException(`${t_code} is not exist`)
          }
        if(result.status == 1){
            throw new NotFoundException(`${t_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from transaction_status_master------------------//
    async updateTransactionMaster(t_code, data){
        var output = await this.transactionMaster.findOne({where: {t_code:t_code}})
        if(!output){
            throw new NotFoundException(`${t_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${t_code}, data not found`);
        }
        var result = await this.transactionMaster.update(t_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from transaction_status_master------------------//
    async deleteTransactionMaster(t_code){
        var output = await this.transactionMaster.findOne({where: {t_code:t_code}})
        if(!output){
            throw new NotFoundException(`${t_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${t_code}, data not found`);
        }
        output.status = 1
        let result = await this.transactionMaster.update(t_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
