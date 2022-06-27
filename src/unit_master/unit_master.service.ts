import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { unit_master } from 'src/Entity/unit_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitMasterService {
    constructor(@InjectRepository(unit_master) private unitMaster:Repository<unit_master>){}

    //-------------------------------------unit data add---------------------------------//
        
    async addUnitData(data){
        let result = await this.unitMaster.save(data);
        if(result){
            let msg={message:"Data Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one unit using u_code-------------------//
    async getOneUnit(u_code) {
        let result= await this.unitMaster.findOne({ where:{u_code: u_code }});
        if(!result){
            throw new NotFoundException(`${u_code},data not found`);
        }
        return result;
    }

    //-------------------------------find all unit data----------------------------//
    async getAllUnit(){
        return await this.unitMaster.find();
    }

    //-------------------------------update unit data----------------------------//
    async updateUnitData(u_code,data){
        let output= await this.unitMaster.findOne({ where:{u_code: u_code }});
        if(!output){
            throw new NotFoundException(`${u_code},data not found`);
        }
        let result= await this.unitMaster.update(u_code,data);
        if(result){
            let msg={message:"Data updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete unit data-------------------------------//
    async deleteUnitData(u_code){
        let output= await this.unitMaster.findOne({ where:{u_code: u_code }});
        if(!output){
            throw new NotFoundException(`${u_code},data not found`);
        }
        let result= await this.unitMaster.delete(u_code);
        if(result){
            let msg={message:"Data deleted Successfully"};
            return msg;
        }
    }
}
