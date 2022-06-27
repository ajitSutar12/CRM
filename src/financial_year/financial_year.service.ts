import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { financial_year } from 'src/Entity/financial_year.entity';

@Injectable()
export class FinancialYearService {
    constructor(
        @InjectRepository(financial_year)
        private readonly financialYear: Repository<financial_year>,
        ){}

    //------------------Insert record in financial_year------------------//
    async addFinancialYear(data){
        var result = await this.financialYear.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from financial_year------------------//
    async findAllFinancialYear(){
        var result = await this.financialYear.createQueryBuilder("financial_year") 
                        .leftJoinAndSelect("financial_year.user_master_created",'umc')
                        .leftJoinAndSelect("financial_year.user_master_updated",'umu')
                        .getMany()
        return result;
    }

    //------------------Finding one record from financial_year-------------------//
    async findOneFinancialYear(fy_code){
        var result = await this.financialYear.findOne({where: {fy_code:fy_code},relations:['user_master_created','user_master_updated']})
        if(!result){
            throw new NotFoundException(`${fy_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from financial_year------------------//
    async updateFinancialYear(fy_code, data){
        var output = await this.financialYear.findOne({where: {fy_code:fy_code}})
        if(!output){
            throw new NotFoundException(`${fy_code} is not exist`)
        }
        var result = await this.financialYear.update(fy_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from financial_year------------------//
    async deleteFinancialYear(fy_code){
        var output = await this.financialYear.findOne({where: {fy_code:fy_code}})
        if(!output){
            throw new NotFoundException(`${fy_code} is not exist`)
        }
        var result = await this.financialYear.delete(fy_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}
