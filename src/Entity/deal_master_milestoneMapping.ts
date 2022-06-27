import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";
import { deal_milestone_master } from "./deal_milestone_master";

@Entity()
export class deal_master_Milestone_mapping{
    @PrimaryGeneratedColumn({type:"int"})
    dmmm_id:Number;

    @Column({type:"int"})
    @IsNumber()
    deal_id:Number;

    @Column({type:"int"})
    @IsNumber()
    deal_milestone_id:Number;

    @Column({type:"varchar",length:300})
    @IsString()
    deal_lost_comment:String;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    created_by:Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    created_timestamp:Date;

    @Column()
    @IsNumber()
    @IsNotEmpty()
    updated_by:Number;

    @Column()
    @IsDate()
    @IsNotEmpty()
    updated_timestamp:Date;
    
    @ManyToOne(() => deal_master, deal_master =>deal_master.deal_master_Milestone_mapping)
    @JoinColumn({name:"deal_id"})
    deal_master:deal_master[]

    @ManyToOne(() => deal_milestone_master, deal_milestone_master =>deal_milestone_master.deal_master_Milestone_mapping)
    @JoinColumn({name:"deal_milestone_id"})
    deal_milestone_master:deal_milestone_master[]

}