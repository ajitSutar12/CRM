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
            let msg={message:"Added Successfully"}
            return msg;
        }
    }

    //-------------------------------find one unit using u_code-------------------//
    async getOneUnit(u_code) {
        let result= await this.unitMaster.findOne({ where:{u_code: u_code }});
        if(!result){
            throw new NotFoundException(`${u_code},data not found`);
        }
        if(result.status == 1){
            throw new NotFoundException(`${u_code}, data not found`);
        }
        return result;
    }

    //-------------------------------find all unit data----------------------------//
    async getAllUnit(){
        return await this.unitMaster.find({where: {status:0}});
    }

    //-------------------------------update unit data----------------------------//
    async updateUnitData(u_code,data){
        let output= await this.unitMaster.findOne({ where:{u_code: u_code }});
        if(!output){
            throw new NotFoundException(`${u_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${u_code}, data not found`);
        }
        let result= await this.unitMaster.update(u_code,data);
        if(result){
            let msg={message:"Updated Successfully"}
            return msg;
        }
    }

    //------------------------------delete unit data-------------------------------//
    async deleteUnitData(u_code){
        let output= await this.unitMaster.findOne({ where:{u_code: u_code }});
        if(!output){
            throw new NotFoundException(`${u_code},data not found`);
        }
        if(output.status == 1){
            throw new NotFoundException(`${u_code}, data not found`);
        }
        output.status = 1
        let result = await this.unitMaster.update(u_code, {
        ...(output.status && { status: 1 })});
        if(result){
            let msg={message:"deleted Successfully"};
            return msg;
        }
    }
}
