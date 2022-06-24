import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { financial_year } from "./financial_year.entity";
import { tax_master } from "./tax_master.entity";
import { user_menu_access } from "./user_menu_access.entity";
import { user_role_master } from "./user_role_master.entity";

@Entity()
export class user_master{

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    user_code:Number;

    @Column()
    @IsString()
    @IsNotEmpty()
    first_name:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    middle_name:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    last_name:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    mobile_number:String;

    @Column()
    @IsEmail()
    @IsNotEmpty()
    email_address:String;

    @Column()
    @IsNotEmpty()
    gender:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    address:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    photo:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    user_role_type:String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    user_role_id:Number;

    @Column()
    @IsString()
    @IsNotEmpty()
    url:String;

    @Column()
    @IsNotEmpty()
    created_date:Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    user_status:Number;

    @Column()
    @IsString()
    @IsNotEmpty()
    username:String;

    @Column()
    @IsString()
    @IsNotEmpty()
    password:String;

    @Column()
    @IsNotEmpty()
    password_change_date:Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @Column()
    @IsNotEmpty()
    updated_timestamp:Date;

    @OneToMany(()=> user_menu_access, user_menu_access =>user_menu_access.user_master)
    user_menu_access:user_menu_access[]

    @ManyToOne(() => user_role_master, user_role_master =>user_role_master.user_master)
    @JoinColumn({name:"user_role_id"})
    user_role_master:user_role_master[]

    @OneToMany(()=> user_role_master, user_role_master =>user_role_master.user_master_created)
    user_role_master_created:user_role_master[]

    @OneToMany(()=> user_role_master, user_role_master =>user_role_master.user_master_updated)
    user_role_master_updated:user_role_master[]

    @OneToMany(()=> financial_year, financial_year =>financial_year.user_master_created)
    financial_year_created:financial_year[]

    @OneToMany(()=> financial_year, financial_year =>financial_year.user_master_updated)
    financial_year_updated:financial_year[]

    @OneToMany(()=> tax_master, tax_master_created =>tax_master_created.user_master_created)
    tax_master_created:tax_master[]

    @OneToMany(()=> tax_master, tax_master_updated =>tax_master_updated.user_master_updated)
    tax_master_updated:tax_master[]
}