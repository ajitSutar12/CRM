import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { expense_type_master } from 'src/Entity/expense_type_master.entity';
import { ExpenseTypeMasterService } from './expense_type_master.service';

@ApiTags('ExpenseTypeMaster')
@Controller('expense-type-master')
export class ExpenseTypeMasterController {
    constructor(private readonly expenseTypeMasterService:ExpenseTypeMasterService){}
    
    //-------------------------------------ExpenseType data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    e_type:{type:'string'},
                }}})
    create(@Body() data:expense_type_master){
        return this.expenseTypeMasterService.addExpenseTypeData(data)
    }
    
    //-------------------------------find one ExpenseType using etm_code-------------------//
    @Get(':etm_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('etm_code') etm_code:Number){
        return this.expenseTypeMasterService.getOneExpenseType(etm_code);
    }
    
    //-------------------------------find all ExpenseType data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.expenseTypeMasterService.getAllExpenseType()
    }
    
    //-------------------------------update ExpenseType data----------------------------//
    @Put(':etm_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            e_type:{type:'string'},
        }}})
    update(@Param('etm_code') etm_code: number, @Body() data:expense_type_master){
        return this.expenseTypeMasterService.updateExpenseTypeData(etm_code,data);
    }
    
    //-------------------------------delete ExpenseType data----------------------------//
    @Put('delete/:etm_code')
    @UsePipes(ValidationPipe)
    delete(@Param('etm_code') etm_code: number){
        return this.expenseTypeMasterService.deleteExpenseTypeData(etm_code)
    }
}
