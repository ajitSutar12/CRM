import { IsString ,MaxLength} from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { task_management } from './task_management.entity';

@Entity()
export class task_category{
  
    @PrimaryGeneratedColumn()
    tc_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(40)
    task_category: String;

    @OneToMany(()=> task_management, task_management =>task_management.task_category)
    task_management:task_management[]
}