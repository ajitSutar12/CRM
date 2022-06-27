import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { campaign_master } from "./campaign_master.entity";
import { campaign_type_master } from "./campaign_type_master.entity";

@Entity()
export class contact_campaign_mapping{

    @PrimaryGeneratedColumn()
    @IsNotEmpty()
    ccm_id:Number;

    @Column({nullable:true})
    @IsNumber()
    c_id:Number;

    @Column({nullable:true})
    @IsNumber()
    camp_id:Number;
  
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

    @ManyToOne(() => campaign_master, campaign_master =>campaign_master.contact_campaign_mapping)
    @JoinColumn({name:"c_id"})
    campaign_master:campaign_master[]

    @ManyToOne(() => campaign_type_master, campaign_type_master =>campaign_type_master.contact_campaign_mapping)
    @JoinColumn({name:"camp_id"})
    campaign_type_master:campaign_type_master[]
}