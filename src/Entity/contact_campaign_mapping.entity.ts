import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { campaign_master } from "./campaign_master.entity";
import { campaign_type_master } from "./campaign_type_master.entity";
import { contact_master } from "./contact_master.entity";

@Entity()
export class contact_campaign_mapping{

    @PrimaryGeneratedColumn()
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

    @Column({default:0})
    status: number

    @ManyToOne(() => contact_master, contact_master =>contact_master.contact_campaign_mapping)
    @JoinColumn({name:"c_id"})
    contact_master:contact_master[]

    @ManyToOne(() => campaign_master, campaign_master =>campaign_master.contact_campaign_mapping)
    @JoinColumn({name:"camp_id"})
    campaign_master:campaign_master[]
}