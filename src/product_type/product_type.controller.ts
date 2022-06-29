import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { product_type } from 'src/Entity/product_type.entity';
import { ProductTypeService } from '../product_type/product_type.service'

@ApiTags('product-type')
@Controller('product-type')
export class ProductTypeController {
    constructor(private readonly ProductTypeService: ProductTypeService) {}

    //------------------Insert record in product_type------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                pt:{type: 'string'},
                p_status:{type: 'number'}
            }
        }
    })
    
    async save(@Body() data:product_type){
        return await this.ProductTypeService.addProductType(data)
    }

    //------------------Finding all records from product_type------------------//
    @Get()
    find(){
        return this.ProductTypeService.findAllProductType()
    }

    //------------------Finding one record from product_type-------------------//
    @Get(':pt_code')
    findOne(@Param('pt_code') pt_code: number){
        return this.ProductTypeService.findOneProductType(pt_code)
    }

    //------------------Update single record from product_type------------------//
    @Put(':pt_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                pt:{type: 'string'},
                p_status:{type: 'number'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('pt_code') pt_code: number, @Body() data:product_type){
        return this.ProductTypeService.updateProductType(pt_code,data)
    }

    //------------------Delete single record from product_type------------------//
    @Delete(':pt_code')
    delete(@Param('pt_code') pt_code: number){
        return this.ProductTypeService.deleteProductType(pt_code)
    }
}
