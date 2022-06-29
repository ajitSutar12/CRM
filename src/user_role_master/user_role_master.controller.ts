import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { user_role_master } from 'src/Entity/user_role_master.entity';
import { UserRoleMasterService } from './user_role_master.service';

@ApiTags('UserRoleMaster')
@Controller('user-role-master')
export class UserRoleMasterController {
    constructor(private readonly userRoleMasterService: UserRoleMasterService) { }
    
    //-------------------------------------userRole data add---------------------------------//
    @Post()
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                role_name: { type: 'string' },
                role_status: { type: 'number' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    create(@Body() data:user_role_master) {
        return this.userRoleMasterService.addUserRoleData(data)
    }

    //-------------------------------find one userRole using role_code-------------------//
    @Get(':role_code')
    @UsePipes(ValidationPipe)
    findOne(@Param('role_code') role_code: Number) {
        return this.userRoleMasterService.getOneUserRole(role_code);
    }

    //-------------------------------find all userRole data----------------------------//
    @Get()
    @UsePipes(ValidationPipe)
    findAll() {
        return this.userRoleMasterService.getAllUserRole()
    }

    //-------------------------------update userRole data----------------------------//
    @Put(':role_code')
    @UsePipes(ValidationPipe)
    @ApiBody({
        schema: {
            type: 'object',
            properties: {
                role_name: { type: 'string' },
                role_status: { type: 'number' },
                created_by: { type: 'number' },
                created_timestamp: { type: 'string' },
                updated_by: { type: 'number' },
                updated_timestamp: { type: 'string' },
            }
        }
    })
    update(@Param('role_code') role_code: number, @Body() data:user_role_master) {
        return this.userRoleMasterService.updateUserRoleData(role_code, data);
    }

    //-------------------------------delete userRole data----------------------------//
    @Delete(':role_code')
    @UsePipes(ValidationPipe)
    delete(@Param('role_code') role_code: number) {
        return this.userRoleMasterService.deleteUserRoleData(role_code)
    }

}
