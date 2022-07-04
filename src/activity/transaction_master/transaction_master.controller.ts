import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { transaction_master } from 'src/Entity/transaction_master.entity';
import { TransactionMasterService } from '../transaction_master/transaction_master.service'

@ApiTags('transaction-master')
@Controller('transaction-master')
export class TransactionMasterController {
    constructor(private readonly TransactionMasterService: TransactionMasterService) {}

    //------------------Insert record in transaction_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                t_name:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data:transaction_master){
        return await this.TransactionMasterService.addTransactionMaster(data)
    }

    //------------------Finding all records from transaction_master------------------//
    @Get()
    find(){
        return this.TransactionMasterService.findAllTransactionMaster()
    }

    //------------------Finding one record from transaction_master-------------------//
    @Get(':t_code')
    findOne(@Param('t_code') t_code: number){
        return this.TransactionMasterService.findOneTransactionMaster(t_code)
    }

    //------------------Update single record from transaction_master------------------//
    @Put(':t_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                t_name:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('t_code') t_code: number, @Body() data: transaction_master){
        return this.TransactionMasterService.updateTransactionMaster(t_code,data)
    }

    //------------------Delete single record from transaction_master------------------//
    @Delete(':t_code')
    delete(@Param('t_code') t_code: number){
        return this.TransactionMasterService.deleteTransactionMaster(t_code)
    }
}
