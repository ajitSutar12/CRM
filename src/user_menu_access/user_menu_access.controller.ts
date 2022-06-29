import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { user_menu_access } from 'src/Entity/user_menu_access.entity';
import { UserMenuAccessService } from './user_menu_access.service';

@ApiTags('UserMenuAccess')
@Controller('user-menu-access')
export class UserMenuAccessController {
        constructor(private readonly userMenuAccessService:UserMenuAccessService){}
    
    //-------------------------------------UserMenuAccess data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    user_code:{type:'number'},
                    menu_code:{type:'number'},
                    create_status:{type:'number'},
                    read_status:{type:'number'},
                    update_status:{type:'number'},
                    delete_status:{type:'number'},
                    created_by:{type:'number'},
                    created_timestamp:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'},
                }}})
    create(@Body() data:user_menu_access){
        return this.userMenuAccessService.addUserMenuData(data)
    }
    
    //-------------------------------find one UserMenuAccess using uma_code-------------------//
    @Get(':uma_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('uma_code') uma_code:Number){
        return this.userMenuAccessService.getOneUserMenu(uma_code);
    }
    
    //-------------------------------find all UserMenuAccess data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.userMenuAccessService.getAllUserMenu()
    }
    
     //-------------------------------update UserMenuAccess data----------------------------//
    @Put(':uma_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            user_code:{type:'number'},
            menu_code:{type:'number'},
            create_status:{type:'number'},
            read_status:{type:'number'},
            update_status:{type:'number'},
            delete_status:{type:'number'},
            created_by:{type:'number'},
            created_timestamp:{type:'string'},
            updated_by:{type:'number'},
            updated_timestamp:{type:'string'},
        }}})
    update(@Param('uma_code') uma_code: number, @Body() data:user_menu_access){
        return this.userMenuAccessService.updateUserMenuData(uma_code,data);
    }
    
     //-------------------------------delete UserMenuAccess data----------------------------//
    @Delete(':uma_code')
    @UsePipes(ValidationPipe)
    delete(@Param('uma_code') uma_code: number){
        return this.userMenuAccessService.deleteUserMenuData(uma_code)
    }
    
}
