import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product_category } from 'src/Entity/product_category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoryService {
    constructor(
        @InjectRepository(product_category)
        private readonly productCategory: Repository<product_category>,
        ){}

    //------------------Insert record in product_category------------------//
    async addProductCategory(data){
        var result = await this.productCategory.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from product_category------------------//
    async findAllProductCategory(){
        var result = await this.productCategory.find()
        return result
    }

    //------------------Finding one record from product_category-------------------//
    async findOneProductCategory(pc_code){
        var result = await this.productCategory.findOne({where: {pc_code:pc_code}})
        if(!result){
            throw new NotFoundException(`${pc_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from product_category------------------//
    async updateProductCategory(pc_code, data){
        var output = await this.productCategory.findOne({where: {pc_code:pc_code}})
        if(!output){
            throw new NotFoundException(`${pc_code} is not exist`)
        }
        var result = await this.productCategory.update(pc_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from product_category------------------//
    async deleteProductCategory(pc_code){
        var output = await this.productCategory.findOne({where: {pc_code:pc_code}})
        if(!output){
            throw new NotFoundException(`${pc_code} is not exist`)
        }
        var result = await this.productCategory.delete(pc_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}

