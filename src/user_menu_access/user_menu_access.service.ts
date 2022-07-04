import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_menu_access } from 'src/Entity/user_menu_access.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserMenuAccessService {
    constructor(@InjectRepository(user_menu_access) private userMenuAccess:Repository<user_menu_access>){}

    //-------------------------------------UserMenuAccess data add---------------------------------//
        
    async addUserMenuData(data){
        let result = await this.userMenuAccess.save(data);
        if(result){
            let msg={message:"Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one UserMenuAccess using uma_code-------------------//
    async getOneUserMenu(uma_code) {
        let result= await this.userMenuAccess.findOne({ where:{uma_code: uma_code },relations:['user_master','menu_master']});
        if(!result){
            throw new NotFoundException(`${uma_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${uma_code}, data not found`);
        }
        return result;
      }
    
    //-------------------------------find all UserMenuAccess data----------------------------//
    async getAllUserMenu(){
        var result = await this.userMenuAccess.createQueryBuilder("user_menu_access") 
                                .leftJoinAndSelect("user_menu_access.user_master",'um')
                                .leftJoinAndSelect("user_menu_access.menu_master",'mm')
                                .where({status:0})
                                .getMany()
        return result;
    }
    
    //-------------------------------update UserMenuAccess data----------------------------//
    async updateUserMenuData(uma_code,data){
        let output= await this.userMenuAccess.findOne({ where:{uma_code: uma_code }});
        if(!output){
            throw new NotFoundException(`${uma_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${uma_code}, data not found`);
        }
        let result= await this.userMenuAccess.update(uma_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete UserMenuAccess data-------------------------------//
    async deleteUserMenuData(uma_code){
        let output= await this.userMenuAccess.findOne({ where:{uma_code: uma_code }});
        if(!output){
            throw new NotFoundException(`${uma_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${uma_code}, data not found`);
        }
        output.status = 1
        let result = await this.userMenuAccess.update(uma_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
