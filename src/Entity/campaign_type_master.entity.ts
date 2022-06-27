import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { campaign_master } from './campaign_master.entity';
import { contact_campaign_mapping } from './contact_campaign_mapping.entity';

@Entity()
export class campaign_type_master{
  
    @PrimaryGeneratedColumn()
    ct_code : Number;

    @Column({nullable:true, length:40})
    @IsString()
    type: String;

    @OneToMany(()=> campaign_master, campaign_master =>campaign_master.campaign_type_master)
    campaign_master:campaign_master[]

    @OneToMany(()=> contact_campaign_mapping, contact_campaign_mapping =>contact_campaign_mapping.campaign_type_master)
    contact_campaign_mapping:contact_campaign_mapping[]
}