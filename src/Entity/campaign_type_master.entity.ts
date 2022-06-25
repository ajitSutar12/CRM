import { IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class campaign_type_master{
  
    @PrimaryGeneratedColumn()
    ct_code : Number;

    @Column({nullable:true, length:40})
    @IsString()
    type: String;

    // @OneToMany(()=> campaign_master, campaign_master =>campaign_master.campaign_type_master)
    // campaign_master:campaign_master[]
}