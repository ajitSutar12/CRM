import { Module } from '@nestjs/common';
import { TaskCategoryModule } from './task_category/task_category.module';
import { TaskManagementModule } from './task_management/task_management.module';

@Module({
    imports:[TaskManagementModule, TaskCategoryModule]
})
export class TaskModule {}
