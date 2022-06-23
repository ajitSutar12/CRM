import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserRoleMasterService } from './user_role_master.service';

@ApiTags('UserRoleMaster')
@Controller('user-role-master')
export class UserRoleMasterController {
    constructor(private readonly userRoleMasterService:UserRoleMasterService){}

@Post()
@UsePipes(ValidationPipe)
@ApiBody({ schema:{
            type:'object',
            properties:{
                role_name:{type:'string'},
                role_status:{type:'number'},
                created_by:{type:'number'},
                created_timestamp:{type:'string'},
                updated_by:{type:'number'},
                updated_timestamp:{type:'string'},
            }}})
create(@Body() data){
    return this.userRoleMasterService.addUserRoleData(data)
}

@Get(':role_code')
@UsePipes(ValidationPipe)
findOne(@Param('role_code') role_code:Number){
    return this.userRoleMasterService.getOneUserRole(role_code);
}

@Get()
@UsePipes(ValidationPipe)
findAll(){
    return this.userRoleMasterService.getAllUserRole()
}

@Put(':role_code')
@UsePipes(ValidationPipe)
@ApiBody({ schema:{type:'object'}})
update(@Param('role_code') role_code: number, @Body() data){
    return this.userRoleMasterService.updateUserRoleData(role_code,data);
}

@Delete(':role_code')
@UsePipes(ValidationPipe)
delete(@Param('role_code') role_code: number){
    return this.userRoleMasterService.deleteUserRoleData(role_code)
}

}
