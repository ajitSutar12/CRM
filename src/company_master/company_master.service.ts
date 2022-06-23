import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { company_master } from '../Entity/company_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyMasterService {
    constructor(
        @InjectRepository(company_master)
        private readonly companyMaster: Repository<company_master>,
        ){}

    //------------------Insert record in company_master------------------//
    async addCompanyMaster(data){
        var result = await this.companyMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from company_master------------------//
    async findAllCompanyMaster(){
        var result = await this.companyMaster.find()
        return result
    }

    //------------------Finding one record from company_master-------------------//
    async findOneCompanyMaster(company_code){
        var result = await this.companyMaster.findOne({where: {company_code:company_code}})
        if(!result){
            throw new NotFoundException(`${company_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from company_master------------------//
    async updateCompanyMaster(company_code, data: company_master){
        var company = await this.companyMaster.findOne({where: {company_code:company_code}})
        if(!company){
            throw new NotFoundException(`${company_code} is not exist`)
        }
        var result = await this.companyMaster.update(company_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from company_master------------------//
    async deleteCompanyMaster(company_code){
        var company = await this.companyMaster.findOne({where: {company_code:company_code}})
        if(!company){
            throw new NotFoundException(`${company_code} is not exist`)
        }
        var result = await this.companyMaster.delete(company_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}
