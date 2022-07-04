import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { user_master } from 'src/Entity/user_master.entity';
import { UserMasterService } from './user_master.service';

@ApiTags('UserMaster')
@Controller('user-master')
export class UserMasterController {
    constructor(private readonly userMasterService:UserMasterService){}

    //-------------------------------------user data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
                type:'object',
                properties:{
                    first_name:{type:'string'},
                    middle_name:{type:'string'},
                    last_name:{type:'string'},
                    mobile_number:{type:'string'},
                    email_address:{type:'string'},
                    gender:{type:'string'},
                    address:{type:'string'},
                    photo:{type:'string'},
                    user_role_type:{type:'string'},
                    user_role_id:{type:'number'},
                    url:{type:'string'},
                    created_date:{type:'string'},
                    created_by:{type:'number'},
                    user_status:{type:'number'},
                    username:{type:'string'},
                    password:{type:'string'},
                    password_change_date:{type:'string'},
                    updated_by:{type:'number'},
                    updated_timestamp:{type:'string'},
                }}})
    create(@Body() data:user_master){
        return this.userMasterService.addUserData(data)
    }

    //-------------------------------find one user using user_code-------------------//
    @Get(':user_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('user_code') user_code:Number){
        return this.userMasterService.getOneUser(user_code);
    }

    //-------------------------------find all user data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll(){
        return this.userMasterService.getAllUser()
    }

    //-------------------------------update user data----------------------------//
    @Put(':user_code')
    @UsePipes(ValidationPipe)
    @ApiBody({ schema:{
        type:'object',
        properties:{
            first_name:{type:'string'},
            middle_name:{type:'string'},
            last_name:{type:'string'},
            mobile_number:{type:'string'},
            email_address:{type:'string'},
            gender:{type:'string'},
            address:{type:'string'},
            photo:{type:'string'},
            user_role_type:{type:'string'},
            user_role_id:{type:'number'},
            url:{type:'string'},
            created_date:{type:'string'},
            created_by:{type:'number'},
            user_status:{type:'number'},
            username:{type:'string'},
            password:{type:'string'},
            password_change_date:{type:'string'},
            updated_by:{type:'number'},
            updated_timestamp:{type:'string'},
        }}})
    update(@Param('user_code') user_code: number, @Body() data:user_master){
        return this.userMasterService.updateUserData(user_code,data);
    }

    //------------------------------delete user data-------------------------------//
    @Put('delete/:user_code')
    @UsePipes(ValidationPipe)
    delete(@Param('user_code') user_code: number){
        return this.userMasterService.deleteUserData(user_code)
    }

}
