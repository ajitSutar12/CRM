import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {IsNumber,IsString,MaxLength,IsNotEmpty } from 'class-validator'
import { user_master } from "./user_master.entity";
import { product_master } from "./product_master.entity";

@Entity()
export class target_master{
    @PrimaryGeneratedColumn()
    tm_code:Number;

    @Column()
    t_sdate:Date;

    @Column()
    t_edate:Date;

    @Column()
    @IsNumber()
    t_user_id:Number;

    @Column()
    @IsNumber()
    t_product_id:Number;

    @Column()
    @IsNumber()
    t_numbers:Number;

    @Column()
    @IsString()
    @MaxLength(20)
    t_e_amount:String;

    @Column()
    @IsString()
    @MaxLength(20)
    t_status:String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @Column()
    @IsNotEmpty()
    created_timestamp:Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp:Date;

    @Column({default:0})
    status: number

    @ManyToOne(() => user_master, user_master => user_master.target_master)
    @JoinColumn({name:"t_user_id"})
    user_master:user_master[]

    @ManyToOne(() => product_master, product_master => product_master.target_master)
    @JoinColumn({name:"t_product_id"})
    product_master:product_master[]
}