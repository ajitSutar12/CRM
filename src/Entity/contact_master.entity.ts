import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { contact_document_master } from './contact_document_master.entity';
import { deal_master } from './deal_master.entity';
import { notes_manage } from './notes_manage.entity';
import { notes_management_deal } from './notes_management_deal';


@Entity()
export class contact_master {

    @PrimaryGeneratedColumn()
    c_code : Number;

    @Column({nullable:true, length:35})
    @IsString()
    c_first_name: String;

    @Column({nullable:true, length:35})
    @IsString()
    c_last_name: String;

    @Column({nullable:true, length:35})
    @IsString()
    c_name: String;

    @Column({nullable:true, length:20})
    @IsString()
    c_number: String;

    @Column({nullable:true, length:35})
    @IsEmail()
    c_email: String;

    @Column({nullable:true, length:250})
    @IsString()
    c_tags: String;

    @Column({nullable:true, length:30})
    @IsString()
    c_designation: string;

    @Column({nullable:true})
    @IsNumber()
    c_csc_code: Number;

    @Column({nullable:true, length:255})
    @IsString()
    c_c_address: String;

    @Column({nullable:true, length:60})
    @IsString()
    c_website: String;

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

    @OneToMany(()=> notes_manage, notes_manage =>notes_manage.contact_master)
    notes_manage:notes_manage[]

    @OneToMany(() => deal_master, deal_master =>deal_master.contact_master)
    deal_master:deal_master[]
    
    @OneToMany(() => notes_management_deal, notes_management_deal =>notes_management_deal.contact_master)
    notes_management_deal:notes_management_deal[]

    @OneToMany(()=> contact_document_master, contact_document_master =>contact_document_master.contact_master)
    contact_document_master:contact_document_master[]
}