import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { campaign_type_master } from "./campaign_type_master.entity";
import { contact_campaign_mapping } from "./contact_campaign_mapping.entity";

@Entity()
export class campaign_master{

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    cm_code:Number;

    @Column({nullable:true})
    @IsNumber()
    c_t_id:Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(100)
    c_name:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(50)
    c_status:String;

    @Column({nullable:true})
    @IsDate()
    c_s_date:Date;

    @Column({nullable:true})
    @IsDate()
    c_e_date:Date;

    @Column({nullable:true})
    @IsString()
    @MaxLength(12)
    c_e_r:String;

    @Column({nullable:true})
    @IsEmail()
    @MaxLength(15)
    b_cost:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(12)
    genda_coster:String;

    @Column({nullable:true})
    @IsString()
    @MaxLength(10)
    e_response:String;

    @Column({nullable:true})
    @IsString()
    description:String;
  
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

    @ManyToOne(() => campaign_type_master, campaign_type_master =>campaign_type_master.campaign_master)
    @JoinColumn({name:"c_t_id"})
    campaign_type_master:campaign_type_master[]

    @OneToMany(()=> contact_campaign_mapping, contact_campaign_mapping =>contact_campaign_mapping.campaign_master)
    contact_campaign_mapping:contact_campaign_mapping[]

}