import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_master } from 'src/Entity/user_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserMasterService {
    constructor(@InjectRepository(user_master) private userMaster:Repository<user_master>){}

//-------------------------------------user data add---------------------------------//
    
async addUserData(data){
    let addData = await this.userMaster.save(data);
    if(addData){
        let msg={message:"User Data Added Successfully"}
        return msg;
    }
}

//-------------------------------find one user using user_code-------------------//
async getOneUser(user_code) {
    let findUser= await this.userMaster.findOne({ where:{user_code: user_code }});
    if(!findUser){
        throw new NotFoundException(`${user_code},data not found`);
    }
    return findUser;
  }

//-------------------------------find all user data----------------------------//
async getAllUser(){
    return await this.userMaster.find();
}

//-------------------------------update user data----------------------------//
async updateUserData(user_code,data){
    let findUser= await this.userMaster.findOne({ where:{user_code: user_code }});
    if(!findUser){
        throw new NotFoundException(`${user_code},data not found`);
    }
    let updateData= await this.userMaster.update(user_code,data);
    if(updateData){
        let msg={message:"User Data updated Successfully"}
        return msg;
    }
}

//------------------------------delete user data-------------------------------//
async deleteUserData(user_code){
    let findUser= await this.userMaster.findOne({ where:{user_code: user_code }});
    if(!findUser){
        throw new NotFoundException(`${user_code},data not found`);
    }
    let deleteData= await this.userMaster.delete(user_code);
    if(deleteData){
        let msg={message:"User Data deleted Successfully"};
        return msg;
    }
}

}
