import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product_master } from 'src/Entity/product_master.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductMasterService {
    constructor(@InjectRepository(product_master) private productMaster:Repository<product_master>){}

    //-------------------------------------ProductMaster data add---------------------------------//
        
    async addProductData(data){
        let addProductData = await this.productMaster.save(data);
        if(addProductData){
            let msg={message:"Product Data Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one Product using uma_code-------------------//
    async getOneProduct(p_code) {
        let findProduct= await this.productMaster.findOne({ where:{p_code: p_code }});
        if(!findProduct){
            throw new NotFoundException(`${p_code},data not found`);
        }
        return findProduct;
      }
    
    //-------------------------------find all Product data----------------------------//
    async getAllProduct(){
        return await this.productMaster.find();
    }
    
    //-------------------------------update Product data----------------------------//
    async updateProductData(p_code,data){
        let findProduct= await this.productMaster.findOne({ where:{p_code: p_code }});
        if(!findProduct){
            throw new NotFoundException(`${p_code},data not found`);
        }
        let updateProductData= await this.productMaster.update(p_code,data);
        if(updateProductData){
            let msg={message:"Product Data updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete Product data-------------------------------//
    async deleteProductData(p_code){
        let findProduct= await this.productMaster.findOne({ where:{p_code: p_code }});
        if(!findProduct){
            throw new NotFoundException(`${p_code},data not found`);
        }
        let deleteProductData= await this.productMaster.delete(p_code);
        if(deleteProductData){
            let msg={message:"Product Data deleted Successfully"};
            return msg;
        }
    }
}
