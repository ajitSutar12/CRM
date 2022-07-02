import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tax_master } from 'src/Entity/tax_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TaxMasterService {
    constructor(@InjectRepository(tax_master) private taxMaster:Repository<tax_master>){}

    //-------------------------------------Tax data add---------------------------------//
        
    async addTaxData(data){
        let result = await this.taxMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one Tax  data using t_code-------------------//
    async getOneTax(t_code) {
        let result= await this.taxMaster.findOne({ where:{t_code: t_code }, relations:['user_master_created','user_master_updated']});
        if(!result){
            throw new NotFoundException(`${t_code},data not found`);
        }
        return result;
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
        let output= await this.taxMaster.findOne({ where:{t_code: t_code }});
        if(!output){
            throw new NotFoundException(`${t_code},data not found`);
        }
        let result= await this.taxMaster.update(t_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete Tax data-------------------------------//
    async deleteTaxData(t_code){
        let output= await this.taxMaster.findOne({ where:{t_code: t_code }});
        if(!output){
            throw new NotFoundException(`${t_code},data not found`);
        }
        let result= await this.taxMaster.delete(t_code);
        if(result){
            let msg={message:"Deleted Successfully"};
            return msg;
        }
    }
}
