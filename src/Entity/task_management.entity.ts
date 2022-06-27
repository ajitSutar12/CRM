import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import { deal_master } from './deal_master.entity';
import { task_category } from './task_category.entity';

@Entity()
export class task_management{

    @PrimaryGeneratedColumn()
    tm_code : Number;

    @Column({nullable:true, length:200})
    @IsString()
    t_name: String;

    @Column({nullable:true})
    @IsNumber()
    t_c_id: Number;

    @Column({nullable:true})
    @IsDate()
    t_due_date: Date;

    @Column({nullable:true, length:20})
    @IsString()
    t_due_time: String;

    @Column({nullable:true, length:20})
    @IsString()
    t_priority: String;

    @Column({nullable:true, length:40})
    @IsString()
    t_status: String;

    @Column({nullable:true})
    @IsNumber()
    deal_code: Number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp: Date;

    @ManyToOne(() => task_category, task_category =>task_category.task_management)
    @JoinColumn({name:"t_c_id"})
    task_category:task_category[]

    @ManyToOne(() => deal_master, deal_master =>deal_master.task_management)
    @JoinColumn({name:"deal_code"})
    deal_master:deal_master[]

}