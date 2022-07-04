import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product_master } from 'src/Entity/product_master.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductMasterService {
    constructor(@InjectRepository(product_master) private productMaster:Repository<product_master>){}

    //-------------------------------------ProductMaster data add---------------------------------//
        
    async addProductData(data){
        let result = await this.productMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one Product using uma_code-------------------//
    async getOneProduct(p_code) {
        let result= await this.productMaster.findOne({ where:{p_code: p_code }, relations:['product_category','product_type','unit_master']});
        if(!result){
            throw new NotFoundException(`${p_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${p_code}, data not found`);
        }
        return result;
      }
    
    //-------------------------------find all Product data----------------------------//
    async getAllProduct(){
        var result = await this.productMaster.createQueryBuilder("product_master") 
                        .leftJoinAndSelect("product_master.product_category",'pc')
                        .leftJoinAndSelect("product_master.product_type",'pt')
                        .leftJoinAndSelect("product_master.unit_master",'um')
                        .where({status:0})
                        .getMany()
        return result;
    }
    
    //-------------------------------update Product data----------------------------//
    async updateProductData(p_code,data){
        let output= await this.productMaster.findOne({ where:{p_code: p_code }});
        if(!output){
            throw new NotFoundException(`${p_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${p_code}, data not found`);
        }
        let result= await this.productMaster.update(p_code,data);
        if(result){
            let msg={message:"updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete Product data-------------------------------//
    async deleteProductData(p_code){
        let output= await this.productMaster.findOne({ where:{p_code: p_code }});
        if(!output){
            throw new NotFoundException(`${p_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${p_code}, data not found`);
        }
        output.status = 1
        let result = await this.productMaster.update(p_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
