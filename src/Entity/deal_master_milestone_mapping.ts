import { IsDate, IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { deal_master } from "./deal_master.entity";
import { deal_milestone_master } from "./deal_milestone_master";

@Entity()
export class deal_master_milestone_mapping{
    @PrimaryGeneratedColumn()
    dmmm_id:Number;

    @Column({nullable:true})
    @IsNumber()
    deal_id:Number;

    @Column({nullable:true})
    @IsNumber()
    deal_milestone_id:Number;

    @Column({nullable:true})
    @IsString()
    @MaxLength(300)
    deal_lost_comment:String;

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
    
    @ManyToOne(() => deal_master, deal_master =>deal_master.deal_master_milestone_mapping)
    @JoinColumn({name:"deal_id"})
    deal_master:deal_master[]

    @ManyToOne(() => deal_milestone_master, deal_milestone_master =>deal_milestone_master.deal_master_milestone_mapping)
    @JoinColumn({name:"deal_milestone_id"})
    deal_milestone_master:deal_milestone_master[]

}