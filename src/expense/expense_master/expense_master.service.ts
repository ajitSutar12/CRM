import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { expense_master } from 'src/Entity/expense_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ExpenseMasterService {
    constructor(@InjectRepository(expense_master) private expenseMaster:Repository<expense_master>){}

    //-------------------------------------expense data add---------------------------------//
        
    async addExpenseData(data){
        let result = await this.expenseMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one expense using user_code-------------------//
    async getOneExpense(em_code) {
        let result= await this.expenseMaster.findOne({ where:{em_code: em_code }, relations:['expense_type_master','user_master','task_management']});
        if(!result){
            throw new NotFoundException(`${em_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${em_code}, data not found`);
        }
        return result;
    }

    //-------------------------------find all expense data----------------------------//
    async getAllExpense(){
        const result = await this.expenseMaster.createQueryBuilder("expense_master") 
                        .leftJoinAndSelect("expense_master.expense_type_master",'etm')
                        .leftJoinAndSelect("expense_master.user_master",'um')
                        .leftJoinAndSelect("expense_master.task_management",'tm')
                        .where({status :0 })
                        .getMany()
        return result
    }

    //-------------------------------update expense data----------------------------//
    async updateExpenseData(em_code,data){
        let output= await this.expenseMaster.findOne({ where:{em_code: em_code }});
        if(!output){
            throw new NotFoundException(`${em_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${em_code}, data not found`);
        }
        let result= await this.expenseMaster.update(em_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete expense data-------------------------------//
    async deleteExpenseData(em_code){
        let output= await this.expenseMaster.findOne({ where:{em_code: em_code }});
        if(!output){
            throw new NotFoundException(`${em_code}, data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${em_code}, data not found`);
        }
        output.status = 1
        let result = await this.expenseMaster.update(em_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
