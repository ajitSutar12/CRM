import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product_type } from 'src/Entity/product_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductTypeService {
    constructor(
        @InjectRepository(product_type)
        private readonly productType: Repository<product_type>,
        ){}

    //------------------Insert record in product_type------------------//
    async addProductType(data){
        var result = await this.productType.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from product_type------------------//
    async findAllProductType(){
        var result = await this.productType.find()
        return result
    }

    //------------------Finding one record from product_type-------------------//
    async findOneProductType(pt_code){
        var result = await this.productType.findOne({where: {pt_code:pt_code}})
        if(!result){
            throw new NotFoundException(`${pt_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from product_type------------------//
    async updateProductType(pt_code, data){
        var output = await this.productType.findOne({where: {pt_code:pt_code}})
        if(!output){
            throw new NotFoundException(`${pt_code} is not exist`)
        }
        var result = await this.productType.update(pt_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from product_type------------------//
    async deleteProductType(pt_code){
        var output = await this.productType.findOne({where: {pt_code:pt_code}})
        if(!output){
            throw new NotFoundException(`${pt_code} is not exist`)
        }
        var result = await this.productType.delete(pt_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}
