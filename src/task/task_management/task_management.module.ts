import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { task_management } from 'src/Entity/task_management.entity';
import { TaskManagementController } from './task_management.controller';
import { TaskManagementService } from './task_management.service';

@Module({
    imports:[TypeOrmModule.forFeature([task_management])],
    providers: [TaskManagementService],
    controllers: [TaskManagementController]
})
export class TaskManagementModule {}
