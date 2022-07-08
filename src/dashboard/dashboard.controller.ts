import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service'

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly DashboardService: DashboardService){}

    @Get('OpenTasks')
    async getOpenTask(){
        return await this.DashboardService.getOpenTask()
    }

    @Get('TodaysFolloup')
    async getTodaysFolloup(){
        return await this.DashboardService.getTodaysFolloup()
    }

    @Get('TotalCount')
    async getTotalClients(){
        return await this.DashboardService.getCount()
    }
}
