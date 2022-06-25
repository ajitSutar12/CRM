import { Module } from '@nestjs/common';
import { TaskCategoryService } from './task_category.service';
import { TaskCategoryController } from './task_category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { task_category } from 'src/Entity/task_category.entity';

@Module({
  imports:[TypeOrmModule.forFeature([task_category])],
  providers: [TaskCategoryService],
  controllers: [TaskCategoryController]
})
export class TaskCategoryModule {}
