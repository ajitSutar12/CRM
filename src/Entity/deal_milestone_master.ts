import { IsNotEmpty, IsString } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";
import { deal_master_Milestone_mapping } from "./deal_master_milestoneMapping";

@Entity()
export class deal_milestone_master{
    @PrimaryGeneratedColumn({type:"int"})
    dm_code:Number;

    @Column({type:"varchar",length:40})
    @IsString()
    deal_milestone:String;

    @OneToMany(() => deal_master, deal_master =>deal_master.deal_milestone_master)
    deal_master:deal_master[]

    @OneToMany(() => deal_master_Milestone_mapping, deal_master_Milestone_mapping =>deal_master_Milestone_mapping.deal_milestone_master)
    deal_master_Milestone_mapping:deal_master_Milestone_mapping[]

}