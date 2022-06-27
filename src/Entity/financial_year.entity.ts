import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user_master } from "./user_master.entity";

@Entity()
export class financial_year{

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    fy_code:Number;
 
    @Column({ length:20})
    @IsString()
    @IsNotEmpty()
    fy:String;

    @Column({length:15})
    @IsString()
    @IsNotEmpty()
    fy_start_month:String;   

    @Column({length:15})
    @IsString()
    @IsNotEmpty()
    fy_end_month:String;  

    @Column()
    @IsNumber()
    @IsNotEmpty()
    fy_status:Number;   

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    create_timestamp:Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp:Date;

    @ManyToOne(() => user_master, user_master =>user_master.financial_year_created)
    @JoinColumn({name:"created_by"})
    user_master_created:user_master[]

    @ManyToOne(() => user_master, user_master =>user_master.financial_year_updated)
    @JoinColumn({name:"updated_by"})
    user_master_updated:user_master[]
}