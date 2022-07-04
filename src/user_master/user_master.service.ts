import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_master } from 'src/Entity/user_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserMasterService {
    constructor(@InjectRepository(user_master) private userMaster:Repository<user_master>){}

    //-------------------------------------user data add---------------------------------//
        
    async addUserData(data){
        let result = await this.userMaster.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one user using user_code-------------------//
    async getOneUser(user_code) {
        let result= await this.userMaster.findOne({ where:{user_code: user_code }, relations:['user_role_master']});
        if(!result){
            throw new NotFoundException(`${user_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${user_code}, data not found`);
        }
        return result;
    }

    //-------------------------------find all user data----------------------------//
    async getAllUser(){
        const result = await this.userMaster.createQueryBuilder("user_master") 
                        .leftJoinAndSelect("user_master.user_role_master",'ur')
                        .where({status:0})
                        .getMany()
        return result
    }

    //-------------------------------update user data----------------------------//
    async updateUserData(user_code,data){
        let output= await this.userMaster.findOne({ where:{user_code: user_code }});
        if(!output){
            throw new NotFoundException(`${user_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${user_code}, data not found`);
        }
        let result= await this.userMaster.update(user_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete user data-------------------------------//
    async deleteUserData(user_code){
        let output= await this.userMaster.findOne({ where:{user_code: user_code }});
        if(!output){
            throw new NotFoundException(`${user_code}, data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${user_code}, data not found`);
        }
        output.status = 1
        let result = await this.userMaster.update(user_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }

}
