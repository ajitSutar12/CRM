import { IsEmail, IsNotEmpty, IsNumber, IsString ,MaxLength} from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { expense_master } from "./expense_master.entity";
import { financial_year } from "./financial_year.entity";
import { target_master } from "./target_master.entity";
import { tax_master } from "./tax_master.entity";
import { user_menu_access } from "./user_menu_access.entity";
import { user_role_master } from "./user_role_master.entity";

@Entity()
export class user_master{

    @PrimaryGeneratedColumn()
    user_code:Number;

    @Column()
    @IsString()
    @MaxLength(35)
    @IsNotEmpty()
    first_name:String;

    @Column()
    @IsString()
    @MaxLength(35)
    @IsNotEmpty()
    middle_name:String;

    @Column()
    @IsString()
    @MaxLength(35)
    @IsNotEmpty()
    last_name:String;

    @Column()
    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    mobile_number:String;

    @Column()
    @IsEmail()
    @MaxLength(35)
    @IsNotEmpty()
    email_address:String;

    @Column()
    @IsNotEmpty()
    gender:String;

    @Column()
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    address:String;

    @Column()
    @IsString()
    @MaxLength(255)
    @IsNotEmpty()
    photo:String;

    @Column()
    @IsString()
    @MaxLength(20)
    @IsNotEmpty()
    user_role_type:String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    user_role_id:Number;

    @Column()
    @IsString()
    @MaxLength(300)
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
    @MaxLength(35)
    @IsNotEmpty()
    username:String;

    @Column()
    @IsString()
    @MaxLength(35)
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

    @Column({default:0})
    status: number

    @OneToMany(()=> user_menu_access, user_menu_access =>user_menu_access.user_master)
    user_menu_access:user_menu_access[]

    @ManyToOne(() => user_role_master, user_role_master =>user_role_master.user_master)
    @JoinColumn({name:"user_role_id"})
    user_role_master:user_role_master[]

    @OneToMany(()=> financial_year, financial_year =>financial_year.user_master_created)
    financial_year_created:financial_year[]

    @OneToMany(()=> financial_year, financial_year =>financial_year.user_master_updated)
    financial_year_updated:financial_year[]

    @OneToMany(()=> tax_master, tax_master_created =>tax_master_created.user_master_created)
    tax_master_created:tax_master[]

    @OneToMany(()=> tax_master, tax_master_updated =>tax_master_updated.user_master_updated)
    tax_master_updated:tax_master[]

    @OneToMany(()=> expense_master, expense_master =>expense_master.user_master)
    expense_master:expense_master[]

    @ManyToOne(() => target_master, target_master => target_master.user_master)
    target_master:target_master[]
}