import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { menu_master } from 'src/Entity/menu_master.entity';
import { MenuMasterService } from '../menu_master/menu_master.service'

@ApiTags('menu-master')
@Controller('menu-master')
export class MenuMasterController {
    constructor(private readonly MenuMasterService: MenuMasterService) {}

    //------------------Insert record in menu_master------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                m_name:{type: 'string'},
                m_subname:{type: 'string'}
            }
        }
    })
    
    async save(@Body() data:menu_master){
        return await this.MenuMasterService.addMenuMaster(data)
    }

    //------------------Finding all records from menu_master------------------//
    @Get()
    find(){
        return this.MenuMasterService.findAllMenuMaster()
    }

    //------------------Finding one record from menu_master-------------------//
    @Get(':m_code')
    findOne(@Param('m_code') m_code: number){
        return this.MenuMasterService.findOneMenuMaster(m_code)
    }

    //------------------Update single record from menu_master------------------//
    @Put(':m_code')
    @ApiBody({
        schema:{
            type: 'object',
            properties:{
                m_name:{type: 'string'},
                m_subname:{type: 'string'}
            }
        }
    })
    @UsePipes(ValidationPipe)
    update(@Param('m_code') m_code: number, @Body() data:menu_master){
        return this.MenuMasterService.updateMenuMaster(m_code,data)
    }

    //------------------Delete single record from menu_master------------------//
    @Delete(':m_code')
    delete(@Param('m_code') m_code: number){
        return this.MenuMasterService.deleteMenuMaster(m_code)
    }
}
