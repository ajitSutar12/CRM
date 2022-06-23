import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { user_menu_access } from 'src/Entity/user_menu_access.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserMenuAccessService {
    constructor(@InjectRepository(user_menu_access) private userMenuAccess:Repository<user_menu_access>){}

    //-------------------------------------UserMenuAccess data add---------------------------------//
        
    async addUserMenuData(data){
        let addUserMenuAccessData = await this.userMenuAccess.save(data);
        if(addUserMenuAccessData){
            let msg={message:"UserMenuAccess Data Added Successfully"}
            return msg;
        }
    }
    
    //-------------------------------find one UserMenuAccess using uma_code-------------------//
    async getOneUserMenu(uma_code) {
        let findUserMenu= await this.userMenuAccess.findOne({ where:{uma_code: uma_code }});
        if(!findUserMenu){
            throw new NotFoundException(`${uma_code},data not found`);
        }
        return findUserMenu;
      }
    
    //-------------------------------find all UserMenuAccess data----------------------------//
    async getAllUserMenu(){
        return await this.userMenuAccess.find();
    }
    
    //-------------------------------update UserMenuAccess data----------------------------//
    async updateUserMenuData(uma_code,data){
        let findUserMenu= await this.userMenuAccess.findOne({ where:{uma_code: uma_code }});
        if(!findUserMenu){
            throw new NotFoundException(`${uma_code},data not found`);
        }
        let updateUserMenuAccessData= await this.userMenuAccess.update(uma_code,data);
        if(updateUserMenuAccessData){
            let msg={message:"UserRole Data updated Successfully"}
            return msg;
        }
    }
    
    //------------------------------delete UserMenuAccess data-------------------------------//
    async deleteUserMenuData(uma_code){
        let findUserMenu= await this.userMenuAccess.findOne({ where:{uma_code: uma_code }});
        if(!findUserMenu){
            throw new NotFoundException(`${uma_code},data not found`);
        }
        let deleteUserMenuAccessData= await this.userMenuAccess.delete(uma_code);
        if(deleteUserMenuAccessData){
            let msg={message:"UserRole Data deleted Successfully"};
            return msg;
        }
    }
}
