import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tax_master } from 'src/Entity/tax_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaxMasterService {
    constructor(@InjectRepository(tax_master) private taxMaster:Repository<tax_master>){}

    //-------------------------------------Tax data add---------------------------------//
        
    async addTaxData(data){
        let addTaxData = await this.taxMaster.save(data);
        if(addTaxData){
            let msg={message:"Tax Data Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one Tax  data using t_code-------------------//
    async getOneTax(t_code) {
        let findTax= await this.taxMaster.findOne({ where:{t_code: t_code }, relations:['user_master_created','user_master_updated']});
        if(!findTax){
            throw new NotFoundException(`${t_code},data not found`);
        }
        return findTax;
      }
    
    //-------------------------------find all Tax data----------------------------//
    async getAllTaxData(){
        var result = await this.taxMaster.createQueryBuilder("tax_master") 
                        .leftJoinAndSelect("tax_master.user_master_created",'umc')
                        .leftJoinAndSelect("tax_master.user_master_updated",'umu')
                        .getMany()
        return result;
    }
    
    //-------------------------------update userRole data----------------------------//
    async updateTaxData(t_code,data){
        let findTax= await this.taxMaster.findOne({ where:{t_code: t_code }});
        if(!findTax){
            throw new NotFoundException(`${t_code},data not found`);
        }
        let updateTaxData= await this.taxMaster.update(t_code,data);
        if(updateTaxData){
            let msg={message:"Tax Data updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete Tax data-------------------------------//
    async deleteTaxData(t_code){
        let findTax= await this.taxMaster.findOne({ where:{t_code: t_code }});
        if(!findTax){
            throw new NotFoundException(`${t_code},data not found`);
        }
        let deleteTaxData= await this.taxMaster.delete(t_code);
        if(deleteTaxData){
            let msg={message:"Tax Data deleted Successfully"};
            return msg;
        }
    }
}
