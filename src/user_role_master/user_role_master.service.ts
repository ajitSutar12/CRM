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
        let result= await this.userRoleMaster.findOne({ where:{role_code: role_code }, relations:['user_master_created','user_master_updated']});
        if(!result){
            throw new NotFoundException(`${role_code},data not found`);
        }
        return result;
      }
    
    //-------------------------------find all userRole data----------------------------//
    async getAllUserRole(){
        var result = await this.userRoleMaster.createQueryBuilder("user_role_master") 
                                .leftJoinAndSelect("user_role_master.user_master_created",'umc')
                                .leftJoinAndSelect("user_role_master.user_master_updated",'umu')
                                .getMany()
        return result;
    }
    
    //-------------------------------update userRole data----------------------------//
    async updateUserRoleData(role_code,data){
        let output= await this.userRoleMaster.findOne({ where:{role_code: role_code }});
        if(!output){
            throw new NotFoundException(`${role_code},data not found`);
        }
        let result= await this.userRoleMaster.update(role_code,data);
        if(result){
            let msg={message:"UserRole Data updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete userRole data-------------------------------//
    async deleteUserRoleData(role_code){
        let output= await this.userRoleMaster.findOne({ where:{role_code: role_code }});
        if(!output){
            throw new NotFoundException(`${role_code},data not found`);
        }
        let result= await this.userRoleMaster.delete(role_code);
        if(result){
            let msg={message:"UserRole Data deleted Successfully"};
            return msg;
        }
    }
}
