import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { user_master } from "./user_master.entity";

@Entity()
export class tax_master{

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    t_code:Number;

    @Column()
    @IsString()
    @IsNotEmpty()
    t_name:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    t_percentage:String;   

    @Column()
    @IsNumber()
    @IsNotEmpty()
    t_status:Number;  

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

    @ManyToOne(() => user_master, user_master_created =>user_master_created.tax_master_created)
    @JoinColumn({name:"created_by"})
    user_master_created:user_master[]

    @ManyToOne(() => user_master, user_master_updated =>user_master_updated.tax_master_updated)
    @JoinColumn({name:"updated_by"})
    user_master_updated:user_master[]
}