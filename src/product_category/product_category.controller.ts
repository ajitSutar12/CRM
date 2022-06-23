import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ProductCategoryService } from '../product_category/product_category.service'

@ApiTags('product-category')
@Controller('product-category')
export class ProductCategoryController {
    constructor(private readonly ProductCategoryService: ProductCategoryService) {}

    //------------------Insert record in product_category------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                pc:{type: 'string'},
                p_status:{type: 'number'}
            }
        }
    })
    
    async save(@Body() data){
        return await this.ProductCategoryService.addProductCategory(data)
    }

    //------------------Finding all records from product_category------------------//
    @Get()
    find(){
        return this.ProductCategoryService.findAllProductCategory()
    }

    //------------------Finding one record from product_category-------------------//
    @Get(':pc_code')
    findOne(@Param('pc_code') pc_code: number){
        return this.ProductCategoryService.findOneProductCategory(pc_code)
    }

    //------------------Update single record from product_category------------------//
    @Put(':pc_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                pc:{type: 'string'},
                p_status:{type: 'number'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('pc_code') pc_code: number, @Body() data){
        return this.ProductCategoryService.updateProductCategory(pc_code,data)
    }

    //------------------Delete single record from product_category------------------//
    @Delete(':pc_code')
    delete(@Param('pc_code') pc_code: number){
        return this.ProductCategoryService.deleteProductCategory(pc_code)
    }
}