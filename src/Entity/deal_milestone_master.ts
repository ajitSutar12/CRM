import { IsNotEmpty, IsString, MaxLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";
import { deal_master_milestone_mapping } from "./deal_master_milestone_mapping";

@Entity()
export class deal_milestone_master{
    @PrimaryGeneratedColumn()
    dm_code:Number;

    @Column()
    @IsString()
    @MaxLength(40)
    deal_milestone:String;

    @OneToMany(() => deal_master, deal_master =>deal_master.deal_milestone_master)
    deal_master:deal_master[]

    @OneToMany(() => deal_master_milestone_mapping, deal_master_milestone_mapping =>deal_master_milestone_mapping.deal_milestone_master)
    deal_master_milestone_mapping:deal_master_milestone_mapping[]

}