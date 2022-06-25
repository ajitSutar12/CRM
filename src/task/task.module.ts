import { Module } from '@nestjs/common';
import { task_category } from 'src/Entity/task_category.entity';
import { task_management } from 'src/Entity/task_management.entity';

@Module({
    imports:[task_management, task_category]
})
export class TaskModule {}
