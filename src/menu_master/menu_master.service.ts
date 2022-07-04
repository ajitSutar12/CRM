import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { menu_master } from 'src/Entity/menu_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenuMasterService {
    constructor(
        @InjectRepository(menu_master)
        private readonly menuMaster: Repository<menu_master>,
        ){}

    //------------------Insert record in menu_master------------------//
    async addMenuMaster(data){
        var result = await this.menuMaster.save(data)
        if(result){
            var msg = {message : "Added successfully"}
            return msg
        }
    }

    //------------------Finding all records from menu_master------------------//
    async findAllMenuMaster(){
        var result = await this.menuMaster.find({where:{status:0}})
        return result
    }

    //------------------Finding one record from menu_master-------------------//
    async findOneMenuMaster(m_code){
        var result = await this.menuMaster.findOne({where: {m_code:m_code}})
        if(!result){
            throw new NotFoundException(`${m_code} is not exist`)
          }
          if(result.status == 1){
            throw new NotFoundException(`${m_code}, data not found`);
        }
        return result
    }

    //------------------Update single record from menu_master------------------//
    async updateMenuMaster(m_code, data){
        var output = await this.menuMaster.findOne({where: {m_code:m_code}})
        if(!output){
            throw new NotFoundException(`${m_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${m_code}, data not found`);
        }
        var result = await this.menuMaster.update(m_code, data)
        if(result){
            var msg = {message : "Updated successfully"}
            return msg
        }
    }

    //------------------Delete single record from menu_master------------------//
    async deleteMenuMaster(m_code){
        var output = await this.menuMaster.findOne({where: {m_code:m_code}})
        if(!output){
            throw new NotFoundException(`${m_code} is not exist`)
        }
        if(output.status == 1){
            throw new NotFoundException(`${m_code}, data not found`);
        }
        output.status = 1
        let result = await this.menuMaster.update(m_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}