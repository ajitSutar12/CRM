import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { financial_year } from "./financial_year.entity";
import { tax_master } from "./tax_master.entity";
import { user_menu_access } from "./user_menu_access.entity";
import { user_role_master } from "./user_role_master.entity";

@Entity()
export class user_master{

    @ApiProperty({
        type:Number,
        description:"User ID"
    })
    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    user_code:Number;
   
    @ApiProperty({
        type:String,
        description:"First Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    first_name:String;

    @ApiProperty({
        type:String,
        description:"Middle Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    middle_name:String;

    @ApiProperty({
        type:String,
        description:"Last Name"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    last_name:String;

    @ApiProperty({
        type:String,
        description:"Mobile Number"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    mobile_number:String;

    @ApiProperty({
        type:String,
        description:"Email Address"
    })
    @Column()
    @IsEmail()
    @IsNotEmpty()
    email_address:String;

    @ApiProperty({
        type:String,
        description:"Gender"
    })
    @Column()
    @IsNotEmpty()
    gender:String;

    @ApiProperty({
        type:String,
        description:"Address"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    address:String;

    @ApiProperty({
        type:String,
        description:"Photo"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    photo:String;

    @ApiProperty({
        type:String,
        description:"User Role Type"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    user_role_type:String;

    @ApiProperty({
        type:Number,
        description:"User Role ID"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    user_role_id:Number;

    @ApiProperty({
        type:String,
        description:"Access Url"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    url:String;

    @ApiProperty({
        type:Date,
        description:"Date"
    })
    @Column()
    @IsNotEmpty()
    created_date:Date;

    @ApiProperty({
        type:Number,
        description:"Account Created By"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @ApiProperty({
        type:Number,
        description:"User Status"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    user_status:Number;

    @ApiProperty({
        type:Number,
        description:"Username"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    username:String;

    @ApiProperty({
        type:Number,
        description:"Password"
    })
    @Column()
    @IsString()
    @IsNotEmpty()
    password:String;

    @ApiProperty({
        type:Date,
        description:"Password Change Date"
    })
    @Column()
    @IsNotEmpty()
    password_change_date:Date;

    @ApiProperty({
        type:Number,
        description:"Updated By User Id"
    })
    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @ApiProperty({
        type:Date,
        description:"Updated Timestamp"
    })
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