import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { contact_campaign_mapping } from './contact_campaign_mapping.entity';
import { contact_document_master } from './contact_document_master.entity';
import { deal_master } from './deal_master.entity';
import { notes_manage } from './notes_manage.entity';
import { notes_management_deal } from './notes_management_deal';


@Entity()
export class contact_master {

    @PrimaryGeneratedColumn()
    c_code : Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(35)
    c_first_name: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(35)
    c_last_name: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(35)
    c_name: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(20)
    c_number: String;

    @Column({nullable:true})
    @IsEmail()
    @MaxLength(35)
    c_email: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(250)
    c_tags: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(30)
    c_designation: string;

    @Column({nullable:true})
    @IsNumber()
    c_csc_code: Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(255)
    c_c_address: String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(60)
    c_website: String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by: Number;

    @Column()
    @IsNotEmpty()
    created_timestamp: Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by: Number;

    @Column()
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

    @OneToMany(()=> contact_campaign_mapping, contact_campaign_mapping =>contact_campaign_mapping.contact_master)
    contact_campaign_mapping:contact_campaign_mapping[]
}