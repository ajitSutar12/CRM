import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_role_master } from 'src/Entity/user_role_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRoleMasterService {
    constructor(@InjectRepository(user_role_master) private userRoleMaster:Repository<user_role_master>){}

    //-------------------------------------userRole data add---------------------------------//
        
    async addUserRoleData(data){
        let result = await this.userRoleMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one userRole using role_code-------------------//
    async getOneUserRole(role_code) {
        let result= await this.userRoleMaster.findOne({ where:{role_code: role_code }});
        if(!result){
            throw new NotFoundException(`${role_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${role_code}, data not found`);
        }
        return result;
      }
    
    //-------------------------------find all userRole data----------------------------//
    async getAllUserRole(){
        var result = await this.userRoleMaster.createQueryBuilder("user_role_master") 
                                .where({status:0})
                                .getMany()
        return result;
    }
    
    //-------------------------------update userRole data----------------------------//
    async updateUserRoleData(role_code,data){
        let output= await this.userRoleMaster.findOne({ where:{role_code: role_code }});
        if(!output){
            throw new NotFoundException(`${role_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${role_code}, data not found`);
        }
        let result= await this.userRoleMaster.update(role_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete userRole data-------------------------------//
    async deleteUserRoleData(role_code){
        let output= await this.userRoleMaster.findOne({ where:{role_code: role_code }});
        if(!output){
            throw new NotFoundException(`${role_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${role_code}, data not found`);
        }
        output.status = 1
        let result = await this.userRoleMaster.update(role_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
