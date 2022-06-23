import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { unit_master } from 'src/Entity/unit_master.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UnitMasterService {
    constructor(@InjectRepository(unit_master) private unitMaster:Repository<unit_master>){}

//-------------------------------------unit data add---------------------------------//
    
async addUnitData(data){
    let addUnitData = await this.unitMaster.save(data);
    if(addUnitData){
        let msg={message:"Data Added Successfully"}
        return msg;
    }
}

//-------------------------------find one unit using u_code-------------------//
async getOneUnit(u_code) {
    let findUnit= await this.unitMaster.findOne({ where:{u_code: u_code }});
    if(!findUnit){
        throw new NotFoundException(`${u_code},data not found`);
    }
    return findUnit;
  }

//-------------------------------find all unit data----------------------------//
async getAllUnit(){
    return await this.unitMaster.find();
}

//-------------------------------update unit data----------------------------//
async updateUnitData(u_code,data){
    let findUnit= await this.unitMaster.findOne({ where:{u_code: u_code }});
    if(!findUnit){
        throw new NotFoundException(`${u_code},data not found`);
    }
    let updateUnitData= await this.unitMaster.update(u_code,data);
    if(updateUnitData){
        let msg={message:"Data updated Successfully"}
        return msg;
    }
}

//------------------------------delete unit data-------------------------------//
async deleteUnitData(u_code){
    let findUnit= await this.unitMaster.findOne({ where:{u_code: u_code }});
    if(!findUnit){
        throw new NotFoundException(`${u_code},data not found`);
    }
    let deleteUnitData= await this.unitMaster.delete(u_code);
    if(deleteUnitData){
        let msg={message:"Data deleted Successfully"};
        return msg;
    }
}
}
