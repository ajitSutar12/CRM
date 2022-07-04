import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { expense_type_master } from 'src/Entity/expense_type_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpenseTypeMasterService {
    constructor(@InjectRepository(expense_type_master) private expenseTypeMaster:Repository<expense_type_master>){}

    //-------------------------------------ExpenseType data add---------------------------------//
        
    async addExpenseTypeData(data){
        let result = await this.expenseTypeMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one ExpenseType using etm_code-------------------//
    async getOneExpenseType(etm_code) {
        let result= await this.expenseTypeMaster.findOne({ where:{etm_code: etm_code }});
        if(!result){
            throw new NotFoundException(`${etm_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${etm_code}, data not found`);
        }
        return result;
    }

    //-------------------------------find all ExpenseType data----------------------------//
    async getAllExpenseType(){
        return await this.expenseTypeMaster.find({where:{status:0}});
    }

    //-------------------------------update ExpenseType data----------------------------//
    async updateExpenseTypeData(etm_code,data){
        let output= await this.expenseTypeMaster.findOne({ where:{etm_code: etm_code }});
        if(!output){
            throw new NotFoundException(`${etm_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${etm_code}, data not found`);
        }
        let result= await this.expenseTypeMaster.update(etm_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete ExpenseType data-------------------------------//
    async deleteExpenseTypeData(etm_code){
        let output= await this.expenseTypeMaster.findOne({ where:{etm_code: etm_code }});
        if(!output){
            throw new NotFoundException(`${etm_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${etm_code}, data not found`);
        }
        output.status = 1
        let result = await this.expenseTypeMaster.update(etm_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
