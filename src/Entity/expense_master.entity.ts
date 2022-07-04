import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsString ,IsNumber,MaxLength,IsNotEmpty} from 'class-validator'
import { expense_type_master } from "./expense_type_master.entity";
import { user_master } from "./user_master.entity";
import { task_management } from "./task_management.entity";


@Entity()
export class expense_master{
    @PrimaryGeneratedColumn()
    em_code:Number;

    @Column()
    @IsNumber()
    e_type_id:Number;;

    @Column()
    @IsNumber()
    user_id:Number;

    @Column()
    @IsNumber()
    task_id:Number;

    @Column()
    @IsString()
    @MaxLength(250)
    e_narration:String;

    @Column()
    @IsString()
    @MaxLength(20)
    e_amount:String;

    @Column()
    @IsString()
    @MaxLength(250)
    e_attachment:String;

    @Column()
    @IsNumber()
    e_approval_status:Number;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    created_by:Number;
    
    @Column()
    @IsNotEmpty()
    created_timestamp:Date;

    @Column()
    @IsNotEmpty()
    @IsNumber()
    updated_by:Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp:Date;

    @Column({default:0})
    status: number;

    @ManyToOne(() => expense_type_master, expense_type_master => expense_type_master.expense_master)
    @JoinColumn({name:"e_type_id"})
    expense_type_master:expense_type_master[]

    @ManyToOne(() => user_master, user_master => user_master.expense_master)
    @JoinColumn({name:"user_id"})
    user_master:user_master[]

    @ManyToOne(() => task_management, task_management => task_management.expense_master)
    @JoinColumn({name:"task_id"})
    task_management:task_management[]


}