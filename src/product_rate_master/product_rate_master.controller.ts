import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { product_rate_master } from 'src/Entity/product_rate_master.entity';
import { ProductRateMasterService } from './product_rate_master.service'

@ApiTags('product-rate-master')
@Controller('product-rate-master')
export class ProductRateMasterController {
    constructor(private readonly ProductRateMasterService: ProductRateMasterService) {}

    //------------------Insert record in product_rate_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
                schema:{
                    type: 'object',
                    properties:{
                        p_code:{type:'number'},
                        p_rate:{type:'string'},
                        date:{type:'string'},
                        pr_status:{type:'number'},
                        created_by:{type:'number'},
                        created_timestamp:{type:'string'},
                        updated_by:{type:'number'},
                        updated_timestamp:{type:'string'}
                    }
                }
            })
    
    async save(@Body() data:product_rate_master){
        return await this.ProductRateMasterService.addProductRateMaster(data)
    }

    //------------------Finding all records from product_rate_master------------------//
    @Get()
    find(){
        return this.ProductRateMasterService.findAllProductRateMaster()
    }

    //------------------Finding one record from product_rate_master-------------------//
    @Get(':pr_code')
    findOne(@Param('pr_code') pr_code: number){
        return this.ProductRateMasterService.findOneProductRateMaster(pr_code)
    }

    //------------------Update single record from product_rate_master------------------//
    @Put(':pr_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                p_code:{type:'number'},
                p_rate:{type:'string'},
                date:{type:'string'},
                pr_status:{type:'number'},
                created_by:{type:'number'},
                created_timestamp:{type:'string'},
                updated_by:{type:'number'},
                updated_timestamp:{type:'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('pr_code') pr_code: number, @Body() data:product_rate_master){
        return this.ProductRateMasterService.updateProductRateMaster(pr_code,data)
    }

    //------------------Delete single record from product_rate_master------------------//
    @Delete(':pr_code')
    delete(@Param('pr_code') pr_code: number){
        return this.ProductRateMasterService.deleteProductRateMaster(pr_code)
    }
}
