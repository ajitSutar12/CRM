import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { call_log_management } from 'src/Entity/call_log_management.entity';
import { task_management } from 'src/Entity/task_management.entity';
import { Repository } from 'typeorm';
import * as moment from "moment";
import { contact_master } from 'src/Entity/contact_master.entity';
import { deal_master } from 'src/Entity/deal_master.entity';

@Injectable()
export class DashboardService {
    constructor(
        @InjectRepository(task_management)
        private readonly taskManagement: Repository<task_management>,
        @InjectRepository(call_log_management)
        private readonly callLogManagement: Repository<call_log_management>,
        @InjectRepository(contact_master)
        private readonly contactMaster: Repository<contact_master>,
        @InjectRepository(deal_master)
        private readonly dealMaster: Repository<deal_master>,
    ){}

    async getOpenTask(){
        var result = await this.taskManagement.createQueryBuilder()
                        .where({t_status:'in progress'})
                        .andWhere({status:0})
                        .getMany()
        return result
    }

    async getTodaysFolloup(){
        var today1 = moment().format('YYYY-MM-DD')
        var result = await this.callLogManagement.createQueryBuilder()
                        .where("followup_date =:today",{today : today1})
                        .andWhere({status:0})
                        .getMany()
        return result
    }

    async getCount(){
        var result1 = await this.contactMaster.createQueryBuilder('n')
                        .select('COUNT(DISTINCT(`c_name`))', 'countTotalClients')
                        .where({status:0})
                        .getRawOne()

        let client_count = parseInt(result1.countTotalClients);

        let result2 = await this.dealMaster.count({ where:{status: 0 }});

        let result3 = await this.callLogManagement.count({ where:{status: 0 }});

        var result4  = await this.taskManagement.createQueryBuilder()
                        .where({status:0})
                        .getCount()

        var result = {"client_count" : client_count,"deal_count":result2,"calls_count": result3,"task_count":result4}
        return result
    }

}
