import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { ProductMasterService } from './product_master.service';

@ApiTags('ProductMaster')
@Controller('product-master')
export class ProductMasterController {
    constructor(private readonly productMasterService:ProductMasterService){}
    
    //-------------------------------------ProductMaster data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    p:{type:'string'},
                    pc_code:{type:'number'},
                    pt_code:{type:'number'},
                    p_unit:{type:'number'},
                    p_image:{type:'string'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'},
                }}})
    create(@Body() data){
        return this.productMasterService.addProductData(data)
    }
    
    //-------------------------------find one Product using uma_code-------------------//
    @Get(':p_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('p_code') p_code:Number){
        return this.productMasterService.getOneProduct(p_code);
    }
    
    //-------------------------------find all Product data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.productMasterService.getAllProduct();
    }
    
    //-------------------------------update Product data----------------------------//
    @Put(':p_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            p:{type:'string'},
            pc_code:{type:'number'},
            pt_code:{type:'number'},
            p_unit:{type:'number'},
            p_image:{type:'string'},
            created_by:{type:'number'},
            created_timestamp:{type:'string'},
            updated_by:{type:'number'},
            updated_timestamp:{type:'string'},
        }}})
    update(@Param('p_code') p_code: number, @Body() data){
        return this.productMasterService.updateProductData(p_code,data);
    }
    
    //------------------------------delete Product data-------------------------------//
    @Delete(':p_code')
    @UsePipes(ValidationPipe)
    delete(@Param('p_code') p_code: number){
        return this.productMasterService.deleteProductData(p_code);
    }
}
