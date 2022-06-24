import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { product_rate_master } from 'src/Entity/product_rate_master.entity';

@Injectable()
export class ProductRateMasterService {
    constructor(
        @InjectRepository(product_rate_master)
        private readonly productRateMaster: Repository<product_rate_master>,
        ){}

    //------------------Insert record in product_rate_master------------------//
    async addProductRateMaster(data){
        var result = await this.productRateMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from product_rate_master------------------//
    async findAllProductRateMaster(){
        var result = await this.productRateMaster.createQueryBuilder("product_rate_master") 
                        .leftJoinAndSelect("product_rate_master.product_master",'pm')
                        .getMany()
        return result;
    }

    //------------------Finding one record from product_rate_master-------------------//
    async findOneProductRateMaster(pr_code){
        var result = await this.productRateMaster.findOne({where: {pr_code:pr_code}, relations:['product_master']})
        if(!result){
            throw new NotFoundException(`${pr_code} is not exist`)
          }
        return result
    }

    //------------------Update single record from product_rate_master------------------//
    async updateProductRateMaster(pr_code, data){
        var company = await this.productRateMaster.findOne({where: {pr_code:pr_code}})
        if(!company){
            throw new NotFoundException(`${pr_code} is not exist`)
        }
        var result = await this.productRateMaster.update(pr_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from product_rate_master------------------//
    async deleteProductRateMaster(pr_code){
        var company = await this.productRateMaster.findOne({where: {pr_code:pr_code}})
        if(!company){
            throw new NotFoundException(`${pr_code} is not exist`)
        }
        var result = await this.productRateMaster.delete(pr_code)
        if(result){
            var msg = {message : "Deleted successfully"}
            return msg
        }
    }
}
