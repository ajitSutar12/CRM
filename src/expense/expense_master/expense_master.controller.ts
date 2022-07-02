import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { expense_master } from 'src/Entity/expense_master.entity';
import { ExpenseMasterService } from './expense_master.service';

@ApiTags('ExpenseMaster')
@Controller('expense-master')
export class ExpenseMasterController {
    constructor(private readonly expenseMasterService:ExpenseMasterService){}

    //-------------------------------------expense data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    e_type_id:{type:'number'},
                    user_id:{type:'number'},
                    task_id:{type:'number'},
                    e_narration:{type:'string'},
                    e_amount:{type:'string'},
                    e_attachment:{type:'string'},
                    e_approval_status:{type:'number'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'},
                }}})
    create(@Body() data:expense_master){
        return this.expenseMasterService.addExpenseData(data)
    }

    //-------------------------------find one expense using user_code-------------------//
    @Get(':em_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('em_code') em_code:Number){
        return this.expenseMasterService.getOneExpense(em_code);
    }

    //-------------------------------find all expense data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.expenseMasterService.getAllExpense()
    }

    //-------------------------------update expense data----------------------------//
    @Put(':em_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            e_type_id:{type:'number'},
                    user_id:{type:'number'},
                    task_id:{type:'number'},
                    e_narration:{type:'string'},
                    e_amount:{type:'string'},
                    e_attachment:{type:'string'},
                    e_approval_status:{type:'number'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'},
        }}})
    update(@Param('em_code') em_code: number, @Body() data:expense_master){
        return this.expenseMasterService.updateExpenseData(em_code,data);
    }

    //------------------------------delete expense data-------------------------------//
    @Delete(':em_code')
    @UsePipes(ValidationPipe)
    delete(@Param('em_code') em_code: number){
        return this.expenseMasterService.deleteExpenseData(em_code)
    }

}
